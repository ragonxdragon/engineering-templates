# Cross-cutting rulings: {project name}

A ruling settles a question that several design specifications answered differently. When a
review finds the same defect in three or more sections, each section has invented its own
answer, and the fix is one ruling that binds them all rather than local patches. Where a section
disagrees with a ruling, the ruling wins and the section changes, citing the ruling by ID.

> **Good:** each ruling names the defect it removes, the rule, every section that must change,
> and a test that keeps the defect from coming back.

Number rulings `R-01`, `R-02`, and so on. Rulings are never renumbered. A ruling that is replaced
says so and names its replacement.

## R-{NN}: {The rule, stated as a sentence}

**Problem.** {The defect, where it appeared, and why the local answers conflict. Cite the
sections.}

**Ruling.** {The rule. Use a table where the rule splits a thing into parts.}

**Sections that must change.**

| Section            | Change         | Done |
| ------------------ | -------------- | ---- |
| {design spec link} | {what changes} | {no} |

**Held by.** {The named test, lint, or gate that fails if the defect returns.}

## Worked example

R-03 for the TL-1 platform: "Every reading carries the sensor's own timestamp; the gateway and
the cloud never re-stamp it." The problem: the gateway spec, the ingest spec, and the alerting
spec each used a different clock, so a reading delayed by a coverage gap appeared as a fresh
excursion. Three sections changed, and the ingest service gained a test that fails when a stored
reading's timestamp differs from the one in the sensor's original frame.
