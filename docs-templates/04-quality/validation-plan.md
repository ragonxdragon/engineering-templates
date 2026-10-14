# Validation plan: {release or pilot name}

Version {n}, {YYYY-MM-DD}. Lead: {name}. Location: {bench, lab, or site}.

Use this for validation that needs real equipment or a real site: a hardware release, a pilot
installation, or a lab day. It orders the work so that blocking checks come first, and it fixes
the exit criteria before anyone arrives.

> **Good:** the plan says which phases block the rest, what evidence each step produces, and what
> happens if a blocking step fails. A validation day without that turns into improvisation when
> the first thing breaks.

## 1. Purpose and scope

{What this validation decides, which build or configuration it covers, and what it does not
cover. Link the software [test evidence](../07-release/test-evidence.md) so the two do not
overlap.}

## 2. Equipment checklist

| Item                         | Qty | Ready | Notes                               |
| ---------------------------- | --- | ----- | ----------------------------------- |
| {Unit under test, build X}   | {n} | [ ]   | {serial numbers}                    |
| {Instruments, cables, tools} | {n} | [ ]   | {calibration date}                  |
| {Reference items}            | {n} | [ ]   | {how the reference was established} |

## 3. Plan by phase

Mark a phase **blocking** when a failure there makes later phases meaningless.

### Phase 0: {bring-up} (blocking)

| Step | Action   | Expected            | Evidence to keep     |
| ---- | -------- | ------------------- | -------------------- |
| 0.1  | {action} | {observable result} | {log, photo, export} |

If it fails: {stop, or the fallback}.

### Phase 1: {new behavior in this release} (blocking)

{Same table.}

### Phase 2: {recovery and failure handling}

{Pull cables, cut power, block the network, fill the disk. Each step names the failure injected
and the recovery expected.}

### Phase 3: {update and rollback}

{Install, roll back, interrupt an update midway.}

### Phase 4: {sustained behavior}

{Anything that needs elapsed time, such as a soak or a certificate renewal. Start these early in
the day.}

### Phase 5: {human factors}

{Can an operator read the indicators, follow the SOP, and recover without help?}

## 4. Acceptance criteria

| Criterion   | Target                      | How measured | Result |
| ----------- | --------------------------- | ------------ | ------ |
| {criterion} | {threshold and sample size} | {method}     |        |

## 5. Exit criteria

{The conditions under which the validation is complete and the result is accepted: all blocking
phases passed, every acceptance criterion measured, and every failure recorded with a test case
ID. State who signs off.}

## 6. After the visit

- Record results in the [test case list](test-cases.csv) with evidence links.
- File an issue for every failure, citing the step number.
- Update the [hardening status](../06-security/hardening-status.md) for items this validation
  closes.
- Fill any metric markers the results support, with the evidence.
