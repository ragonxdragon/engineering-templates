# ADR-{NNNN}: {Short title stating the decision}

| Field      | Value                                                       |
| ---------- | ----------------------------------------------------------- |
| Status     | {Proposed, Accepted, Superseded by ADR-NNNN, or Deprecated} |
| Date       | {YYYY-MM-DD}                                                |
| Deciders   | {Names or roles}                                            |
| Source     | {Meeting, issue, or document where the decision was made}   |
| Supersedes | {ADR-NNNN, or none}                                         |

Copy this file to `NNNN-short-title.md` with the next unused number. Numbers are never reused.
An accepted record is never edited. A changed decision gets a new record, and the two records
link each other.

> **Good:** a reader a year from now can judge whether the reasoning still holds, because the
> facts known at the time are on the page. The costs are stated as plainly as the benefits.

## Context

{What is true that forces a decision: constraints, obligations already taken on, and what stops
the obvious answer from working. Facts, not preferences. Name the source of each fact in the
sentence that uses it.}

## Decision

{The choice, in one paragraph, in the active voice and the present tense. Name the thing chosen
and its version where one applies.}

## Alternatives considered

Every option a competent engineer would reach for, and why each lost. A table of weak options
convinces nobody.

| Alternative | Why it lost             |
| ----------- | ----------------------- |
| {option}    | {reason, with evidence} |

## Consequences

What this buys:

- {benefit}

What it costs:

- {cost, obligation, or new dependency to watch}

What breaks if this is wrong, and the way back: {the signal that would show the decision was
wrong, and the migration path if it is}.

## Validation

{The test, gate, lint, or review step that keeps the decision honored. If nothing checks it, say
so, because an unchecked decision drifts.}

## Worked example

ADR-0004 for the TL-1: "Gateways buffer readings in flash, not RAM." Context: trailers lose
cellular for up to three days on some routes, and RAM holds about six hours of readings.
Alternatives: a larger RAM buffer (lost on power loss, which happens when the tractor
disconnects), and dropping readings while offline (rejected because temperature excursions during
gaps are what customers dispute). Cost: flash wear, bounded by writing in 4 KB pages, which the
validation section ties to a wear test in the bench plan.
