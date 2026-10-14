# Failure mode guide: {product name}

Version {n}, {YYYY-MM-DD}. Applies to: {hardware revision and software version}.

This guide is a failure mode and effects analysis (FMEA) written for the person in front of a
failed unit or a red dashboard. Each failure mode says how it shows itself, what is actually
broken, what to do now, and what stops it happening again. The full table at the end rates every
mode so the team knows which to fix first.

> **Good:** every entry starts from what a person can observe, not from the internal cause. A
> technician knows the symptom, not the root cause. Every root cause cites the code or the part,
> and every rating can be argued with evidence.

## How each entry is built

| Part            | Meaning                                                                                   |
| --------------- | ----------------------------------------------------------------------------------------- |
| Tell            | The observable symptom and where it shows: indicator light, dashboard field, log, display |
| Root cause      | What is actually broken, cited to the code, the part, or the configuration                |
| Fix             | What to do now, in order, starting with the most likely cause                             |
| Prevent         | What stops it recurring: a design change, a check, an alert                               |
| Time to detect  | How long until someone knows, with the monitoring in section 8 in place                   |
| S / O / D / RPN | Severity, occurrence, and detection difficulty, each 1 to 10. RPN = S x O x D             |

Set two thresholds before you rate anything: an RPN above which a mode is a priority, and one
above which it blocks a release. Write them here: priority above {n}, release blocker above {n}.
If you follow AIAG and VDA FMEA practice, replace RPN with action priority and keep the rest.

## Contents

1. Triage in 60 seconds
2. Status indicator language
3. Diagnostic sources
4. Hardware and power failures
5. Connectivity failures
6. Peripheral failures
7. Software, cloud, and data failures
8. Monitoring: what to alert on
9. Known detection gaps
10. Full FMEA table

## 1. Triage in 60 seconds

A decision path for the first minute: what to look at first, and which section each answer sends
you to.

| You see                            | Most likely | Go to   |
| ---------------------------------- | ----------- | ------- |
| {Nothing at all, no light}         | {Power}     | {PWR-1} |
| {Indicator pattern}                | {Cause}     | {ID}    |
| {Unit online but no data arriving} | {Cause}     | {ID}    |

## 2. Status indicator language

{Every state an indicator light, display, or status field can show, what it means, and the
failure mode it routes to. Patterns must be visible to a person at a normal distance and long
enough to notice.}

| Pattern            | Meaning   | Failure mode |
| ------------------ | --------- | ------------ |
| {color and rhythm} | {meaning} | {ID}         |

## 3. Diagnostic sources

| Source                       | How to reach it       | What it tells you |
| ---------------------------- | --------------------- | ----------------- |
| {Remote status or telemetry} | {dashboard, API}      | {fields}          |
| {Local log or storage}       | {how to retrieve}     | {contents}        |
| {Serial or local console}    | {connection settings} | {contents}        |

## 4. Hardware and power failures

### PWR-1: {failure mode title}

Tell: {symptom and where it shows}

Root cause: {what is broken, cited}

Fix:

1. {first action}

Prevent: {design change, check, or alert}

Time to detect: {with monitoring, and without}

S={n} O={n} D={n} RPN={n}. {One line on what drives the rating.}

## 5. Connectivity failures

{Entries with IDs such as NET-1, NET-2.}

## 6. Peripheral failures

{Entries for attached devices, with their own ID prefix.}

## 7. Software, cloud, and data failures

{Entries for updates (UPD-n), certificates and credentials (CRT-n), memory (MEM-n), storage
(STO-n), and configuration (CFG-n).}

## 8. Monitoring: what to alert on

Alerts are usually cheap configuration work, and they cut detection time on the highest-RPN
modes more than any code change.

**Tier 1, page someone now:**

| Rule                                    | Catches | Why it matters                                                     |
| --------------------------------------- | ------- | ------------------------------------------------------------------ |
| {No check-in for n reporting intervals} | {IDs}   | {The only signal for failures before the unit reaches the network} |
| {Credential expires in under n days}    | {ID}    | {Prevents a predictable outage}                                    |

**Tier 2, open a ticket:**

| Rule   | Catches |
| ------ | ------- |
| {rule} | {IDs}   |

## 9. Known detection gaps

What the product still cannot tell you, with the cheapest way to close each gap.

| Gap   | Consequence        | Cheapest fix                    |
| ----- | ------------------ | ------------------------------- |
| {gap} | {what goes unseen} | {alert, test, or design change} |

## 10. Full FMEA table

Sorted by RPN, highest first. The same rows live in [fmea.csv](fmea.csv) for sorting and
filtering. Keep one of the two as the source and generate the other.

| ID   | Failure mode | Tell      | S   | O   | D   | RPN | Time to detect |
| ---- | ------------ | --------- | --- | --- | --- | --- | -------------- |
| {ID} | {mode}       | {symptom} | {n} | {n} | {n} | {n} | {time}         |

### If you only do five things

1. {The highest-value action, usually an alert, and why}

## Worked example

The TL-1 guide's highest-RPN entry was GW-2, "Gateway stuck in a restart loop before it reaches
the network". Tell: the cab light blinks amber, and the trailer never appears on the dashboard.
Detection scored 9 because nothing remote can see a unit that never connects. The fix that
mattered was not in the firmware: a Tier 1 alert for "trailer dispatched but no gateway check-in
for 30 minutes" cut its detection time from "when someone notices" to half an hour, and its D
score to 3.
