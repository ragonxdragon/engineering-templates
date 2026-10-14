# Software test evidence: {project name} {version}

Candidate commit: {full SHA}. Date: {YYYY-MM-DD}. Prepared by: {name}.

This page records what the automated suite proved for one release candidate, and what it does
not claim. Hardware or field results go in the [validation plan](../04-quality/validation-plan.md)
results, and this page links them.

> **Good:** every result links to the run that produced it, and section 4 is honest. A reader
> should finish this page knowing exactly which risks the tests cover and which ones still rest
> on judgment or field evidence.

## 1. Continuous gates

| Gate      | What it checks | Result | Run    |
| --------- | -------------- | ------ | ------ |
| {gate ID} | {assertion}    | {pass} | {link} |

## 2. Suite results for this candidate

| Tier   | Tests | Passed | Failed | Skipped and why | Run    |
| ------ | ----- | ------ | ------ | --------------- | ------ |
| {tier} | {n}   | {n}    | {n}    | {n, reason}     | {link} |

## 3. What the suite covers

{The behaviors and requirements covered, by requirement ID or area. Name the known-answer,
property, and fuzz tests that guard the riskiest code.}

## 4. What the suite does not claim

{The limits: behavior that needs real hardware, a real network, elapsed time, or real users;
platforms not in the test matrix; and any requirement with no automated test. Link each to the
validation step or decision that covers it instead.}

## 5. Changes since the previous release's evidence

{Tests added, removed, or quarantined, with the reason for each.}
