# Document templates

The templates are grouped by the stage of a project where you first need them. The
[map in the repository README](../README.md#map) lists each one with when to use it and what it
prevents.

| Folder                              | Stage                                     |
| ----------------------------------- | ----------------------------------------- |
| [00-conventions](00-conventions/)   | Before the first document                 |
| [01-discovery](01-discovery/)       | Discovery, scoping, and sales engineering |
| [02-product](02-product/)           | Product definition and planning           |
| [03-architecture](03-architecture/) | Architecture and design                   |
| [04-quality](04-quality/)           | Quality, testing, and process improvement |
| [05-operations](05-operations/)     | Operations and support                    |
| [06-security](06-security/)         | Security                                  |
| [07-release](07-release/)           | Release                                   |

## How to read a template

Every template uses the same three conventions.

- Text in braces, `{like this}`, is a placeholder. Replace it or delete the line.
- A block quote that starts with **Good:** says what a finished section looks like and why it
  matters. Delete these once the section is written.
- A section headed **Worked example** shows the template filled in for Acme Logistics, a
  fictional company, and its fictional TL-1 trailer temperature sensor. Delete it from your copy.

A section with nothing to say gets one line saying so and why. An empty heading reads as
something nobody checked.

Spreadsheet templates are CSV files with a header row and one example row. Cells that start with
`=` are formulas; most spreadsheet tools evaluate them on import.

## Rendering to Word

[tools/render-docx](../tools/render-docx/README.md) renders any template here to a Word file with
real headings, tables, and lists, so the Markdown stays the one source.
