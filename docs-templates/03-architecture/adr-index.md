# Architecture decision records

Each record states one decision: the context, what was decided, the alternatives, what it costs,
and how it is checked. New records start from [adr-template.md](adr-template.md) and take the
next number. A replaced decision keeps its file and its row here, with the status "Superseded by
ADR-NNNN".

> **Good:** this table is complete. A record missing from it is a record nobody will find.

## When a decision needs a record

Write one when the decision is hard to reverse, affects more than one part of the system, or will
be questioned later by someone who was not there. Choosing a data store, an interface protocol, a
license policy, or a release process all qualify. Choosing a variable name does not.

If the project keeps more than one decision register (for example a table of technology choices
in the architecture document and a set of cross-cutting rulings), give each register its own ID
form and always cite a decision with its register. A bare ID that could belong to either is
ambiguous.

## Index

| ADR                                                                  | Decision                         | Date         | Status   |
| -------------------------------------------------------------------- | -------------------------------- | ------------ | -------- |
| [0001](../../starter/docs/adr/0001-record-architecture-decisions.md) | Record architecture decisions    | {YYYY-MM-DD} | Accepted |
| {NNNN}                                                               | {Decision, stated as a sentence} | {YYYY-MM-DD} | {status} |
