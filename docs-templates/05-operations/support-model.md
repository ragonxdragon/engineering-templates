# Support model outline: {product name}

Version {n}, {YYYY-MM-DD}. Owner: {name}. Status: {proposal or agreed}.

This outline defines how a deployed product is supported: who does what, how fast, and how a
problem moves between teams. It holds no prices or staffing figures. Those come from a sizing
model built on your own measured incident rates, and they belong in the commercial schedule.

> **Good:** every response target is something the team can measure today, and every tier knows
> exactly what evidence to pass to the next. Targets set before you have incident data are
> marked as proposals and revisited after the first quarter.

## 1. Scope

| Covered                                    | Not covered                              |
| ------------------------------------------ | ---------------------------------------- |
| {Product versions, hardware, integrations} | {Customer networks, third-party systems} |

## 2. Support tiers

| Tier  | Who                                 | Handles                                            | Hands over when                     |
| ----- | ----------------------------------- | -------------------------------------------------- | ----------------------------------- |
| 0     | {Self-service: status page, guides} | {Known issues, how-to questions}                   | {Not answered in the guides}        |
| 1     | {Service desk}                      | {Triage, known fixes, remote resets}               | {No runbook entry matches}          |
| 2     | {Product support engineers}         | {Diagnosis from logs and telemetry, configuration} | {Code or hardware defect suspected} |
| 3     | {Engineering}                       | {Defects, fixes, releases}                         | -                                   |
| Field | {Technicians on site}               | {Replacement, cabling, physical checks}            | {Dispatched by tier 2}              |

## 3. Response targets

Define each target as a measurable interval, with the clock start and stop stated.

| Severity | Detect within | Acknowledge within | Diagnose within | Restore or workaround within | Hours of cover |
| -------- | ------------- | ------------------ | --------------- | ---------------------------- | -------------- |
| Critical | {target}      | {target}           | {target}        | {target}                     | {hours}        |
| High     | {target}      | {target}           | {target}        | {target}                     | {hours}        |
| Medium   | {target}      | {target}           | {target}        | {target}                     | {hours}        |
| Low      | {target}      | {target}           | {target}        | {target}                     | {hours}        |

Detection targets depend on the alerts in the
[failure mode guide](failure-mode-guide.md). A failure with no alert has no detection target
you can promise.

## 4. Escalation path

{A diagram or numbered list from first report to engineering, with the contact channel for each
step and the information that travels with the ticket: unit or account ID, version, time window,
logs, and what has been tried.}

## 5. Staffing approach

{How staffing scales with the installed base: which roles grow with unit count, which with site
count, and which are fixed. State the inputs (incidents per unit per month, minutes per incident
by tier) and where each comes from. Use measured values from a pilot or early deployment, and
keep the result as a range until a quarter of data exists.}

## 6. Tools and access

| Tool              | Used by tiers | Purpose                          |
| ----------------- | ------------- | -------------------------------- |
| {ticketing}       | {0 to 3}      | {tracking}                       |
| {telemetry, logs} | {1 to 3}      | {diagnosis}                      |
| {remote actions}  | {2 to 3}      | {resets, configuration, updates} |

## 7. Reporting

{What is reported to the customer and how often: volumes by severity, targets met and missed
with reasons, top recurring causes, and actions taken.}

## 8. Review

{When the model is reviewed, and which measured inputs trigger a change to targets or staffing.}
