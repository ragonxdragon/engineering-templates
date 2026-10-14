# Test strategy: {project name}

Version {n}, {YYYY-MM-DD}. Owner: {name}.

This page decides what is tested at each layer, how long each tier may take, where it runs, and
what is deliberately not tested yet. It is the contract between the PRD's acceptance criteria and
the test suite.

> **Good:** every must-ship acceptance criterion maps to a named test. Every test tier has a time
> budget. Anything untested is listed with the reason, so nobody assumes coverage that does not
> exist.

## 1. Tiers

| Tier              | What it covers                                  | Runs where              | Time budget | Blocks merge     |
| ----------------- | ----------------------------------------------- | ----------------------- | ----------- | ---------------- |
| Unit              | {Pure logic, one module at a time}              | {Laptop and CI}         | {n seconds} | Yes              |
| Property          | {Invariants over generated inputs}              | {CI}                    | {n minutes} | Yes              |
| Contract          | {Producer and consumer agree on each interface} | {CI}                    | {n minutes} | Yes              |
| Integration       | {Real dependencies in containers or emulators}  | {CI}                    | {n minutes} | {Yes or nightly} |
| End to end        | {The main user journeys}                        | {Staging}               | {n minutes} | {Release}        |
| Hardware or bench | {Behavior that needs the real device}           | {Bench, by a person}    | {n hours}   | {Release}        |
| Load              | {Throughput and latency at the capacity range}  | {Dedicated environment} | {n minutes} | {Release}        |

## 2. Rules

1. **A test that cannot fail is not a test.** Each test names the defect it would catch. If its
   assertion holds for every possible implementation, delete it or fix it.
2. **Every bug fix carries a regression test** that fails on the code before the fix.
3. **Known-answer tests for anything numeric.** Compare generated values against a frozen,
   reviewed corpus, so a change is caught rather than absorbed.
4. **Reference values come from outside.** A test that checks a calculation against a value the
   project computed itself proves only consistency. Use a published reference where one exists.
5. **The same command locally and in CI.** One entry point runs the suite in both places, so a
   green laptop and a green pipeline mean the same thing.
6. **Flaky tests are defects.** Quarantine with an issue and a date, never a silent retry.

## 3. Coverage of acceptance criteria

| Requirement | Acceptance criterion | Test ID     | Tier   |
| ----------- | -------------------- | ----------- | ------ |
| {FR-1}      | {EARS criterion}     | {test name} | {tier} |

## 4. Coverage targets

{Line or branch targets per layer, if you use them, and why. A coverage number is a floor that
finds untested code, not proof that tested code is correct.}

## 5. Test data and environments

{Where test data comes from (synthetic, anonymized, generated from a seed), how environments are
created and reset, and how secrets are provided to tests without being committed.}

## 6. Performance and load

{The scenarios, the target thresholds taken from the capacity model, the environment, and when
they run. Thresholds are budgets the team sets; measured results go in metric markers.}

## 7. Deliberately untested

| Area   | Why it is not tested now | Risk accepted by | Revisit when |
| ------ | ------------------------ | ---------------- | ------------ |
| {area} | {reason}                 | {name}           | {trigger}    |
