# Design specification: {subsystem name}

Status: {draft, in review, or accepted}, {YYYY-MM-DD}. Owner: {name}.
Implements: {roadmap milestone IDs}. Requirements: {PRD link and requirement IDs}.

A design specification describes one subsystem well enough that someone else could build it and
test it. Every specification uses the same nine sections in the same order, so a reader who has
read one can find their way in any other.

> **Good:** every requirement in section 1 is traceable to behavior in section 5 and a test in
> section 7. A section that has nothing to say states that in one line.

## 1. Scope

### 1.1 Requirements covered in full

| Requirement | Summary    | Where in this document |
| ----------- | ---------- | ---------------------- |
| {ID}        | {one line} | {section}              |

### 1.2 Cross-cutting rulings applied here

{List each project-wide ruling this subsystem must honor, by ID, and where it applies. See the
[cross-cutting ruling template](cross-cutting-ruling.md).}

### 1.3 Requirements this subsystem supports but does not own

{Requirements owned by another subsystem that rely on machinery built here.}

### 1.4 Out of scope

{What a reader might expect here and will not find, with where it lives instead.}

## 2. Components

For each component: its name, responsibility in one sentence, public interface, and what it
depends on.

### 2.1 `{component}`

{responsibility}

```text
{public functions, classes, or endpoints, one per line}
```

### 2.n Dependency direction

{Which component may depend on which, and what enforces it. A diagram helps.}

## 3. Domain model

{Entities, their fields and types, invariants, and relationships. State each invariant as an
assertion the code checks, not as a comment.}

| Entity   | Field   | Type   | Constraint or invariant |
| -------- | ------- | ------ | ----------------------- |
| {entity} | {field} | {type} | {rule}                  |

## 4. Events and interfaces

### 4.1 Published

{Each event, message, or API this subsystem emits: name, version, schema, and when it is sent.}

### 4.2 Consumed

{Each input: its source and what happens when it is malformed, late, duplicated, or missing.}

### 4.3 Storage formats

{Files or tables this subsystem owns, and their compatibility promise.}

## 5. Behavior

{The algorithms and state machines, one subsection each. For each: inputs, steps, outputs, error
handling, and the edge cases. Cite the source of any formula or published method with its
edition.}

## 6. Configuration

| Key     | Type   | Default   | Valid range | Effect         |
| ------- | ------ | --------- | ----------- | -------------- |
| `{key}` | {type} | {default} | {range}     | {what changes} |

{State how invalid configuration is reported: at startup, with the line and a suggestion.}

## 7. Testing

| Test ID | Kind                                           | Asserts     | Would fail if           |
| ------- | ---------------------------------------------- | ----------- | ----------------------- |
| {T-1}   | {unit, property, contract, integration, bench} | {assertion} | {the defect it catches} |

> **Good:** every test has a "would fail if" entry. A test whose assertion holds for every
> possible implementation measures nothing and reports green anyway.

## 8. Phase placement

{Which roadmap phase delivers which part of this specification, and which gates first apply.}

## 9. Open questions

1. {Question, the options, who decides, and what is blocked until then}
