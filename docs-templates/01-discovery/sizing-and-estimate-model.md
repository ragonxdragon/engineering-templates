# Sizing and estimate model guide

This guide describes the spreadsheet behind a project estimate: which sheets it has, what each
column means, and the rules that keep the numbers honest. Build it in any spreadsheet tool.
[work-breakdown.csv](work-breakdown.csv) and [assumptions-register.csv](assumptions-register.csv)
give you the first two sheets with their columns.

> **Good:** any number in the estimate can be traced to an input, and every input names its
> source and its confidence. A reviewer can change one input and watch the total move.

## Rules

1. **Inputs are separate from formulas.** Every assumption (counts, durations, rates, unit
   costs) lives in a labeled input cell or sheet. Formulas reference inputs and never hold a
   typed constant.
2. **Ranges, not points, while the inputs are uncertain.** Early estimates are biased toward
   optimism and the first number anchors every later conversation. Carry a low and a high value
   until discovery confirms the input, and record what would move it.
3. **Every input has a source.** "Customer, operations lead, 2026-03-02" or "Vendor quote
   Q-118, valid to 2026-05-01" or "Assumption, confirm at site survey". An input with no source
   is a guess and is marked as one.
4. **Rates live in one place.** Labor rates and markups go in one rates sheet, owned by whoever
   owns pricing. Engineers estimate hours. Keep the engineering estimate shareable without the
   commercial numbers.
5. **Sensitivity is part of the model.** Show how the total moves when the two or three most
   uncertain inputs move across their range.

## Sheets

| Sheet             | Holds                                                           | Key columns                                                                                |
| ----------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Legend            | What each sheet is, color code for inputs and formulas, version | Sheet, Purpose, Owner                                                                      |
| Work breakdown    | Every activity with hours by role                               | ID, Phase, Activity, Deliverable, Week start, Week end, Owner, hours per role, Total hours |
| Timeline          | Activities against weeks                                        | ID, Activity, one column per week, Owner                                                   |
| Resources         | People or roles, allocation, and total hours                    | Role, Person or TBD, Allocation, Hours, Notes                                              |
| Rates             | Labor rates and markup, owned by pricing                        | Role, Rate, Basis, Valid until                                                             |
| Equipment         | Bill of materials for the project itself                        | Item, Qty, Unit cost, Total, Source or quote reference                                     |
| Production sizing | Inputs that scale a rollout after the pilot                     | Input, Low, High, Unit, Source, Confirmed (yes or no)                                      |
| Comparison        | A competing quote broken into comparable lines                  | Line, Low, High, Comment, Question to ask                                                  |
| Sensitivity       | Total cost against the uncertain inputs                         | Input varied, Value, Labor, Equipment, Total                                               |
| Questionnaire     | Answers from the scoping questionnaire                          | Area, Question, Answer, Feeds, Status                                                      |
| Assumptions       | Every assumption with its consequence and check                 | ID, Category, Assumption, If it is not true, Confirm by, Owner, Status                     |

## Reading a competing quote

When a customer shares a competitor's price, do not compare totals. Break it into the same lines
as your model (equipment per point, install per point, software, project management, support),
use your sizing inputs to work out what the quote implies per line, and turn each surprising line
into a question. The comparison is then about scope, which you can discuss, rather than price,
which you cannot.

## Worked example

Acme Logistics wanted sensors on a trailer fleet whose size was "somewhere between 300 and 500".
The production sizing sheet carried 300 and 500 as low and high, sourced to the fleet manager
and marked unconfirmed. Equipment and install hours were formulas over that input, so the
estimate showed two totals. The fleet register arrived a week later with 412 trailers, the input
changed in one cell, and the range collapsed to one number with the source updated.
