# ADR-0001: Record architecture decisions

| Field    | Value         |
| -------- | ------------- |
| Status   | Accepted      |
| Date     | {YYYY-MM-DD}  |
| Deciders | {Maintainers} |

## Context

Decisions about structure, dependencies, interfaces, and process shape every later change. When
they live only in chat, meetings, or commit messages, a new contributor cannot find them, cannot
tell whether they still hold, and may undo one without knowing it existed.

## Decision

Record each architecturally significant decision as a numbered Markdown file in `docs/adr/`,
using [template.md](template.md). A decision is significant when it is hard to reverse, affects
more than one part of the system, or is likely to be questioned later.

Records are immutable once accepted. A changed decision gets a new record that supersedes the
old one, and the old record's status names its replacement.

## Alternatives considered

| Alternative                       | Why it lost                                                                 |
| --------------------------------- | --------------------------------------------------------------------------- |
| Decisions in commit messages only | Not findable without knowing the change exists; cannot carry a status       |
| A wiki outside the repository     | Drifts from the code and is not reviewed with the change that depends on it |
| No written record                 | The reasoning leaves with the people who made the decision                  |

## Consequences

What this buys: a findable history of why the system is shaped the way it is, reviewed in the
same pull requests as the code.

What it costs: a few minutes per significant decision, and the judgment of what counts as
significant.

## Validation

The index in [README.md](README.md) lists every record. Reviewers ask for a record when a pull
request makes a decision that meets the threshold above.
