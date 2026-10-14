# render-docx

Renders any Markdown template in this repository to a Word document, so the Markdown stays the
one source and the `.docx` is generated from it. Use it when a reader needs Word, for example a
root cause analysis sent to a customer.

## Use

```sh
cd tools/render-docx
npm ci
node render.js ../../docs-templates/05-operations/rca.md out/rca.docx "Acme Logistics | Root cause analysis"
```

The third argument sets the footer text. Without it, the footer shows the document title.

## What it renders

| Markdown                    | Word                                                     |
| --------------------------- | -------------------------------------------------------- |
| First `#` heading           | Title with a rule under it                               |
| `##` to `####`              | Heading 1 to Heading 3, so navigation and contents work  |
| Paragraphs                  | Body text                                                |
| `-` and `1.` lists          | Bulleted and numbered lists, three levels                |
| `>` block quotes            | Shaded guidance paragraphs                               |
| Pipe tables                 | Tables with a header row and banded rows                 |
| Fenced code                 | Monospaced block (Mermaid source stays as text)          |
| `**bold**`, `` `code` ``    | Bold, monospaced                                         |
| `{placeholder}`             | Grey italic, so unfilled fields stand out                |

HTML comments are dropped. A metric marker keeps its value and loses its tags. Links keep their
text and drop the target.

## Dependency

[docx](https://github.com/dolanmiu/docx) 9.7.2, MIT license, pinned to an exact version with a
lockfile.
