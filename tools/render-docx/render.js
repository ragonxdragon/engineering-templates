// Renders a Markdown template from this repository to a Word document.
//
//   node render.js <in.md> <out.docx> ["footer text"]
//
// The Markdown stays the single source; the .docx is generated. The renderer
// understands the subset the templates use:
//
//   # to #### headings      Word Heading 1 to 4, so navigation and a table of
//                           contents work. The first # heading becomes the title.
//   paragraphs              lines joined until a blank line
//   - item, 1. item         bullet and numbered lists; "- [ ] x" keeps its box
//   > quote                 an indented, shaded guidance paragraph
//   | a | b |               pipe tables with a header row
//   ``` fences              monospaced blocks (mermaid source is kept as text)
//   **bold**, `code`        inline styles
//   {placeholder}           grey italic, so unfilled fields stand out
//
// HTML comments, including metric markers' tags, are dropped; the marker's
// value is kept.

"use strict";

const fs = require("fs");
const path = require("path");
const {
  AlignmentType,
  BorderStyle,
  Document,
  Footer,
  HeadingLevel,
  LevelFormat,
  Packer,
  PageNumber,
  Paragraph,
  ShadingType,
  Table,
  TableCell,
  TableRow,
  TabStopType,
  TextRun,
  WidthType,
} = require("docx");

const FONT = "Arial";
const MONO = "Consolas";
const INK = "1A1A1A";
const NAVY = "1F3864";
const BLUE = "2E75B6";
const GREY = "666666";
const HINT = "7F7F7F";
const BAND = "EEF3FA";
const QUOTE_BG = "F3F5F8";
const CODE_BG = "F5F5F5";
const RULE = "BFC8D8";
const BULLET = String.fromCharCode(0x2022);

const PAGE_W = 12240; // US Letter, in twentieths of a point
const PAGE_H = 15840;
const MARGIN = 1440;
const TEXT_W = PAGE_W - 2 * MARGIN;

const HEADINGS = [
  HeadingLevel.HEADING_1,
  HeadingLevel.HEADING_2,
  HeadingLevel.HEADING_3,
  HeadingLevel.HEADING_4,
];

const LIST_ITEM = /^(\s*)([-*]|\d+\.)\s+(.*)$/;
const TABLE_RULE = /^\s*\|[\s:|-]+\|\s*$/;

// ------------------------------------------------------------------ inline

function run(text, o = {}) {
  return new TextRun({
    text,
    font: o.font || FONT,
    size: o.size || 22,
    bold: o.bold,
    italics: o.italics,
    color: o.color || INK,
  });
}

// Splits text into runs for **bold**, `code`, and {placeholder} spans. Links
// keep their text and drop the target; HTML comments are removed.
function inline(text, base = {}) {
  const clean = text
    .replace(/<!--.*?-->/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
  const runs = [];
  const pattern = /(\*\*[^*]+\*\*|`[^`]+`|\{[^{}]+\})/g;
  let last = 0;
  let match;
  while ((match = pattern.exec(clean)) !== null) {
    if (match.index > last) runs.push(run(clean.slice(last, match.index), base));
    const token = match[0];
    if (token.startsWith("**")) {
      runs.push(run(token.slice(2, -2), { ...base, bold: true }));
    } else if (token.startsWith("`")) {
      runs.push(run(token.slice(1, -1), { ...base, font: MONO }));
    } else {
      runs.push(run(token, { ...base, italics: true, color: HINT }));
    }
    last = match.index + token.length;
  }
  if (last < clean.length) runs.push(run(clean.slice(last), base));
  return runs;
}

// ------------------------------------------------------------------ parsing

function cells(row) {
  return row
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((c) => c.trim());
}

function startsBlock(line) {
  return /^(#{1,4}\s|\s*\||\s*>|\s*(```|~~~))/.test(line) || LIST_ITEM.test(line);
}

function parse(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (/^\s*$/.test(line)) {
      i++;
      continue;
    }
    // A comment block on its own lines is dropped whole.
    if (/^\s*<!--/.test(line) && !/<!--METRIC:/.test(line)) {
      while (i < lines.length && !lines[i].includes("-->")) i++;
      i++;
      continue;
    }
    const fence = line.match(/^\s*(```|~~~)/);
    if (fence) {
      const body = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith(fence[1])) body.push(lines[i++]);
      i++;
      blocks.push({ type: "code", lines: body });
      continue;
    }
    const heading = line.match(/^(#{1,4})\s+(.*)$/);
    if (heading) {
      blocks.push({ type: "heading", level: heading[1].length, text: heading[2] });
      i++;
      continue;
    }
    if (/^\s*\|/.test(line)) {
      const rows = [];
      while (i < lines.length && /^\s*\|/.test(lines[i])) rows.push(lines[i++]);
      blocks.push({ type: "table", rows: rows.filter((r) => !TABLE_RULE.test(r)).map(cells) });
      continue;
    }
    if (/^\s*>/.test(line)) {
      const body = [];
      while (i < lines.length && /^\s*>/.test(lines[i])) {
        body.push(lines[i++].replace(/^\s*>\s?/, ""));
      }
      blocks.push({ type: "quote", text: body.join(" ") });
      continue;
    }
    if (LIST_ITEM.test(line)) {
      const items = [];
      while (i < lines.length) {
        const m = lines[i].match(LIST_ITEM);
        if (m) {
          items.push({
            ordered: /\d/.test(m[2]),
            level: Math.min(Math.floor(m[1].length / 2), 2),
            text: m[3],
          });
          i++;
        } else if (/^\s{2,}\S/.test(lines[i]) && items.length) {
          // A wrapped continuation line belongs to the item above it.
          items[items.length - 1].text += " " + lines[i].trim();
          i++;
        } else {
          break;
        }
      }
      blocks.push({ type: "list", items });
      continue;
    }
    const para = [];
    while (i < lines.length && !/^\s*$/.test(lines[i]) && !startsBlock(lines[i])) {
      para.push(lines[i++].trim());
    }
    blocks.push({ type: "paragraph", text: para.join(" ") });
  }
  return blocks;
}

// ------------------------------------------------------------------ rendering

const border = { style: BorderStyle.SINGLE, size: 4, color: RULE };
const borders = { top: border, bottom: border, left: border, right: border };

function cellShading(rowIndex) {
  if (rowIndex === 0) return { type: ShadingType.CLEAR, fill: NAVY, color: "auto" };
  if (rowIndex % 2 === 0) return { type: ShadingType.CLEAR, fill: BAND, color: "auto" };
  return undefined;
}

function table(rows) {
  const columns = Math.max(...rows.map((r) => r.length));
  // Column width follows content length, with a floor so short columns stay
  // readable and a cap so one long cell does not squeeze the rest.
  const weights = Array.from({ length: columns }, (_, c) =>
    Math.max(6, ...rows.map((r) => Math.min((r[c] || "").length, 60))),
  );
  const total = weights.reduce((a, b) => a + b, 0);
  const widths = weights.map((w) => Math.floor((w / total) * TEXT_W));
  widths[columns - 1] += TEXT_W - widths.reduce((a, b) => a + b, 0);

  const makeRow = (r, rowIndex) =>
    new TableRow({
      tableHeader: rowIndex === 0,
      cantSplit: true,
      children: widths.map(
        (w, c) =>
          new TableCell({
            width: { size: w, type: WidthType.DXA },
            borders,
            margins: { top: 60, bottom: 60, left: 100, right: 100 },
            shading: cellShading(rowIndex),
            children: [
              new Paragraph({
                spacing: { before: 0, after: 0, line: 240 },
                children: inline(
                  r[c] || "",
                  rowIndex === 0 ? { bold: true, color: "FFFFFF", size: 20 } : { size: 20 },
                ),
              }),
            ],
          }),
      ),
    });

  return [
    new Table({
      width: { size: TEXT_W, type: WidthType.DXA },
      columnWidths: widths,
      rows: rows.map(makeRow),
    }),
    new Paragraph({ spacing: { before: 0, after: 120 }, children: [] }),
  ];
}

function headingParagraph(b) {
  const major = b.level <= 2;
  return new Paragraph({
    heading: HEADINGS[Math.max(0, b.level - 2)],
    keepNext: true,
    spacing: { before: major ? 320 : 200, after: 100 },
    children: inline(b.text, { size: major ? 28 : 24, bold: true, color: major ? NAVY : BLUE }),
  });
}

function render(blocks) {
  const out = [];
  let title = null;
  for (const b of blocks) {
    if (b.type === "heading" && b.level === 1 && title === null) {
      title = b.text;
      out.push(
        new Paragraph({
          spacing: { before: 0, after: 200 },
          border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: NAVY, space: 6 } },
          children: inline(b.text, { size: 40, bold: true, color: NAVY }),
        }),
      );
    } else if (b.type === "heading") {
      out.push(headingParagraph(b));
    } else if (b.type === "paragraph") {
      out.push(new Paragraph({ spacing: { after: 120, line: 276 }, children: inline(b.text) }));
    } else if (b.type === "quote") {
      out.push(
        new Paragraph({
          spacing: { before: 60, after: 160, line: 276 },
          indent: { left: 360, right: 360 },
          shading: { type: ShadingType.CLEAR, fill: QUOTE_BG, color: "auto" },
          border: { left: { style: BorderStyle.SINGLE, size: 18, color: BLUE, space: 8 } },
          children: inline(b.text, { color: "404040" }),
        }),
      );
    } else if (b.type === "list") {
      for (const item of b.items) {
        out.push(
          new Paragraph({
            numbering: { reference: item.ordered ? "numbers" : "bullets", level: item.level },
            spacing: { after: 60, line: 276 },
            children: inline(item.text),
          }),
        );
      }
      out.push(new Paragraph({ spacing: { after: 60 }, children: [] }));
    } else if (b.type === "table") {
      out.push(...table(b.rows));
    } else if (b.type === "code") {
      for (const l of b.lines.length ? b.lines : [""]) {
        out.push(
          new Paragraph({
            shading: { type: ShadingType.CLEAR, fill: CODE_BG, color: "auto" },
            spacing: { before: 0, after: 0, line: 240 },
            indent: { left: 120, right: 120 },
            children: [run(l, { font: MONO, size: 18 })],
          }),
        );
      }
      out.push(new Paragraph({ spacing: { after: 120 }, children: [] }));
    }
  }
  return { title: title || "Document", children: out };
}

function levels(format, text) {
  return [0, 1, 2].map((level) => ({
    level,
    format,
    text: text(level),
    alignment: AlignmentType.LEFT,
    style: { paragraph: { indent: { left: 540 + level * 360, hanging: 270 } } },
  }));
}

function footerParagraph(text) {
  const grey = { size: 18, color: GREY };
  return new Paragraph({
    tabStops: [{ type: TabStopType.RIGHT, position: TEXT_W }],
    children: [
      run(text, grey),
      run("\tPage ", grey),
      new TextRun({ children: [PageNumber.CURRENT], font: FONT, ...grey }),
      run(" of ", grey),
      new TextRun({ children: [PageNumber.TOTAL_PAGES], font: FONT, ...grey }),
    ],
  });
}

async function main() {
  const [, , input, output, footerText] = process.argv;
  if (!input || !output) {
    console.error('usage: node render.js <in.md> <out.docx> ["footer text"]');
    process.exit(2);
  }
  const { title, children } = render(parse(fs.readFileSync(input, "utf8")));
  const footer = (footerText || title).replace(/[{}]/g, "");

  const doc = new Document({
    title,
    styles: { default: { document: { run: { font: FONT, size: 22, color: INK } } } },
    numbering: {
      config: [
        { reference: "bullets", levels: levels(LevelFormat.BULLET, () => BULLET) },
        { reference: "numbers", levels: levels(LevelFormat.DECIMAL, (l) => `%${l + 1}.`) },
      ],
    },
    sections: [
      {
        properties: {
          page: {
            size: { width: PAGE_W, height: PAGE_H },
            margin: { top: MARGIN, bottom: MARGIN, left: MARGIN, right: MARGIN },
          },
        },
        footers: { default: new Footer({ children: [footerParagraph(footer)] }) },
        children,
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  fs.mkdirSync(path.dirname(path.resolve(output)), { recursive: true });
  fs.writeFileSync(output, buffer);
  console.log(`wrote ${output} (${buffer.length} bytes)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
