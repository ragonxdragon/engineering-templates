# Writing standard: {project name}

Status: {draft or adopted}, {YYYY-MM-DD}. Owner: {name}.

This page sets the rules every document, code comment, commit message, and pull request in
{project name} follows. Adopt it once, link it from CONTRIBUTING.md, and enforce what you can
with a linter.

> **Good:** a short list of rules that each say what to do and why. A rule with no reason gets
> argued about on every pull request. A rule with no check drifts.

## 1. Evidence or TBD

No document states a number the project has not measured. A number that is still owed appears
as `TBD` inside a metric marker (see the
[metric marker convention](../02-product/metric-marker-convention.md)) and is replaced only by a
value from a recorded run, with the command and commit that produced it.

Why: one invented figure costs more trust than every honest figure earns. A reader who catches
one guess stops believing the rest.

## 2. Plain language

- Short declarative sentences in the active voice. Name who does what.
- {American or British} spelling, applied everywhere. Pick one product spelling for each term
  (for example "Wi-Fi") and keep a list.
- No em dashes, en dashes, or emoji. Use a comma, a colon, or a new sentence.
- No marketing words ("seamless", "robust", "cutting-edge", "best-in-class"). Say what the thing
  does and how you know.
- Use a table when the content has rows and columns. Do not stack bold-label bullets to fake one.
- Do not pad a list to three items. Two honest items beat three with filler.

## 3. Say what is true now

- A code comment describes what the code does now. The history of a change, the reason it was
  made, and the numbers behind it belong in the commit message.
- Release notes describe the release. Plan history, abandoned options, and open investigations
  belong somewhere else.
- A document that records a decision is never rewritten. A new decision gets a new record, and
  each record links the other.

## 4. Scope every claim

State the conditions a claim holds under: which version, which hardware, which data, which
environment. "Uploads succeed on the bench unit with firmware 1.4.0" is a claim a reader can
check. "Uploads are reliable" is not.

Where a claim depends on a source, name the source in the same sentence, with an edition or a
retrieval date.

## 5. One home per fact

Each rule, number, and decision lives in one place and everything else links to it. A second
copy is a copy that will disagree with the first one eventually.

Generated documents say they are generated and name the command that regenerates them.

## 6. Escapes state their reason

Where a lint rule is suppressed on one line, the suppression names the rule and gives a reason.
A reviewer then sees the rule that was set aside and the argument for it in the same place.

## 7. What is checked, and where

| Rule                           | Checked by                       | Where it runs                |
| ------------------------------ | -------------------------------- | ---------------------------- |
| Markdown structure             | `markdownlint-cli2`              | {pre-commit hook and CI}     |
| Links resolve                  | {lychee or equivalent}           | {CI}                         |
| Dashes, spelling, banned words | {prose linter, for example Vale} | {pre-commit hook and CI}     |
| Unfilled metric markers        | {marker check script}            | {CI, fatal on a release tag} |
| Everything else                | Review                           | Pull request                 |

## Worked example

Acme Logistics adopted this standard for the TL-1 sensor firmware. Their section 7 lists Vale
with a twelve-word banned list, and their release workflow fails a tag when a marker owed at
that version still reads `TBD`. A comment that read "changed the retry count because of the
outage last week" was rewritten as "Retries three times, two seconds apart" with the outage
reference moved to the commit message.
