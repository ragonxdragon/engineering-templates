# Kickoff brief: {project name}

Version {n}, {YYYY-MM-DD}. Owner: {name}. Risk tier: {low, medium, or high}.

The kickoff brief is the first document of a new project, or of a project changing direction.
It fixes the decisions everything else depends on, in this order: what you are building and for
whom, how big it has to be, and what the first thin slice is. Requirements come before capacity,
and capacity comes before architecture, because the numbers decide the shape.

> **Good:** the brief fits in a few pages and every later document cites it. If the press
> release in section 1 is hard to write, the scope is wrong. Fix the scope before going further.

## 0. Facts that must come from people

Do not infer these. Ask, and record who answered.

| Fact                                   | Answer   | Source and date |
| -------------------------------------- | -------- | --------------- |
| Who owns the product and its code      | {answer} | {who, when}     |
| Team: roles and headcount              | {answer} | {who, when}     |
| Committed customers and starting scale | {answer} | {who, when}     |
| Budget and timeline constraints        | {answer} | {who, when}     |
| Compliance regime                      | {answer} | {who, when}     |

Everything else may be inferred, and each inference goes in the assumptions list in section 4.

## 1. Press release and hard questions

Write the announcement you would publish on launch day, in one page: who it is for, the problem,
what they can now do, and one quote from a user. Then answer the six hardest questions a
skeptic would ask. One of them is always "why will this fail?"

## 2. Users and first-release scope

| Persona   | Job to be done        | What the first release gives them |
| --------- | --------------------- | --------------------------------- |
| {persona} | {job, in their words} | {capability}                      |

First-release scope: {the smallest set of capabilities that delivers the press release}.

## 3. Riskiest assumptions

| Assumption   | Cheapest test that could prove it wrong | By when |
| ------------ | --------------------------------------- | ------- |
| {assumption} | {test}                                  | {date}  |

## 4. Capacity model

State each figure as a low and high range with the assumption behind it and the event that
should make you revisit it. Early estimates are optimistic, and a single number anchors every
later judgment.

| Quantity                   | Low | High | Assumption                | Revisit when |
| -------------------------- | --- | ---- | ------------------------- | ------------ |
| {Active users or devices}  | {n} | {n}  | {basis}                   | {trigger}    |
| {Peak requests per second} | {n} | {n}  | {About twice the average} | {trigger}    |
| {Storage growth per year}  | {n} | {n}  | {basis}                   | {trigger}    |
| {Read to write ratio}      | {n} | {n}  | {basis}                   | {trigger}    |

For a low-risk prototype, two lines of order-of-magnitude arithmetic is enough. If the high end
of any figure exceeds one machine, the scale rows of the
[production concerns checklist](production-concerns-checklist.md) apply.

## 5. Provisional stack and shape

{Languages, runtime, data store, hosting, and the overall shape (for example a modular monolith).
Mark each as provisional until research confirms it. Default to a modular monolith and split
services only for a real scaling, isolation, or hardware reason.}

## 6. Naming registry

One canonical name for every entity, table, screen, endpoint, and device. Every other document
uses these names exactly.

| Concept   | Canonical name | Not to be called      |
| --------- | -------------- | --------------------- |
| {concept} | {name}         | {synonyms people use} |

## 7. Walking skeleton

The thinnest slice that runs end to end through every layer and is deployed the way production
will be. It is always the first milestone.

{Describe the slice: input, each layer it passes, output, and where it runs.}

## 8. Decisions to record before design starts

Every project records these, whatever its size. One paragraph each is fine for a prototype. Use
the [decision record template](../03-architecture/adr-template.md).

1. Data store selection.
2. Deployment shape: monolith, modular monolith, or services.
3. Interface protocol for each boundary.
4. Authentication and authorization method.
5. Consistency and transaction boundaries.

## 9. Document set for this tier

| Document                                                           | Low                             | Medium   | High     |
| ------------------------------------------------------------------ | ------------------------------- | -------- | -------- |
| [PRD](prd.md)                                                      | Yes                             | Yes      | Yes      |
| [Architecture](../03-architecture/architecture.md) with decisions  | Yes                             | Yes      | Yes      |
| [Test strategy](../04-quality/test-strategy.md)                    | Yes                             | Yes      | Yes      |
| [Roadmap with gates](roadmap.md)                                   | Yes                             | Yes      | Yes      |
| [Threat model](../06-security/threat-model.md)                     | A paragraph in the architecture | Yes      | Yes      |
| [Operational readiness](../05-operations/operational-readiness.md) | A paragraph in the architecture | Yes      | Yes      |
| [Production concerns checklist](production-concerns-checklist.md)  | Universal rows                  | All rows | All rows |

Over-documenting a prototype is a defect, not diligence.

## 10. Definition of done

{The conditions every change meets before it merges: tests for each first-release acceptance
criterion, lint clean, documentation updated, reviewed. Put this in CONTRIBUTING.md and link it.}

## 11. How these documents change

The documents are the source of truth at kickoff. After the walking skeleton ships, they change
by small, reviewed edits to the affected document, never by rewriting the set. When the code and
a document disagree, update the document first, then the code. Each document carries the date it
was last checked against the code.

## Worked example

Acme Logistics' TL-1 kickoff put the fleet at 300 to 500 trailers, one reading a minute each,
which gave 5 to 8 readings a second on average and 10 to 17 at peak. Storage came to about 160
to 265 million rows a year. Both ends fit one database server with room to spare, so the scale rows of
the checklist were marked not applicable with "revisit above 5,000 trailers". The walking
skeleton was one bench sensor posting one reading through the gateway to a stored row and a
chart, deployed by the same pipeline production would use.
