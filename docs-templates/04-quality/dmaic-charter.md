# DMAIC project charter: {project name}

Version {n}, {YYYY-MM-DD}. Sponsor: {name}. Lead: {name}.

Use this to run an improvement project or a pilot as a Lean Six Sigma DMAIC cycle: Define,
Measure, Analyze, Improve, Control. It forces a baseline before a change, a check that the
measurement itself is trustworthy, and a control plan so the gain survives the project.

> **Good:** the problem statement has a number and a time window, the goal has a number and a
> date, and the baseline is measured rather than remembered. If the measurement system cannot
> tell good from bad reliably, nothing after the Measure phase means anything.

## 1. Charter

| Field             | Content                                                     |
| ----------------- | ----------------------------------------------------------- |
| Problem statement | {What is wrong, where, how often, since when, measured how} |
| Business impact   | {What it costs, in the units the business tracks}           |
| Goal              | {Measure, from baseline to target, by date}                 |
| In scope          | {Process steps, sites, products}                            |
| Out of scope      | {What is excluded}                                          |
| Team              | {Names and roles}                                           |
| Decision maker    | {Who accepts the result}                                    |

## 2. DMAIC plan

| Phase   | Activities                                                            | Outputs                              |
| ------- | --------------------------------------------------------------------- | ------------------------------------ |
| Define  | {Charter, SIPOC, voice of the customer, critical-to-quality measures} | {Signed charter, SIPOC}              |
| Measure | {Data collection plan, measurement system analysis, baseline}         | {Baseline with confidence interval}  |
| Analyze | {Process map, root cause candidates, designed experiments}            | {Verified causes with evidence}      |
| Improve | {Pilot the change, confirm the effect}                                | {Before and after comparison}        |
| Control | {Control plan, SOP updates, monitoring, handover}                     | {Control plan, owner, response plan} |

## 3. SIPOC

Draft it before the site walk and correct it during.

| Suppliers      | Inputs         | Process (5 to 7 steps) | Outputs          | Customers      |
| -------------- | -------------- | ---------------------- | ---------------- | -------------- |
| {who provides} | {what goes in} | {step}                 | {what comes out} | {who receives} |

## 4. Measurement

### 4.1 Data collection plan

| Measure   | Operational definition                            | Unit   | Source                  | Sample plan      | Collected by |
| --------- | ------------------------------------------------- | ------ | ----------------------- | ---------------- | ------------ |
| {measure} | {Exact rule for what counts, so two people agree} | {unit} | {system or observation} | {how many, when} | {role}       |

Use the [data collection sheet](data-collection-sheet.csv) and the
[time study sheet](time-study.csv) as starting layouts.

### 4.2 Measurement system analysis

Before trusting a baseline, check that the measurement agrees with itself and with a reference.

- For pass or fail judgments, run an attribute agreement study: each appraiser judges the same
  items twice, blind, against a known reference. Use the
  [attribute agreement sheet](attribute-msa.csv).
- For continuous measures, run a gauge repeatability and reproducibility study.
- State the acceptance threshold before the study, and the action if the system fails it.

### 4.3 Baseline

{The measured baseline, with its sample size, time window, and confidence interval. Put the
value in a [metric marker](../02-product/metric-marker-convention.md) until it is measured.}

## 5. Analysis and experiments

{Root cause candidates (fishbone or five whys), the evidence for and against each, and any
designed experiment. Plan experiments with the [DOE plan](doe-plan.md).}

## 6. Sample sizes

State the claim, then the sample that supports it. For a success rate demonstrated with a
one-sided 95 percent confidence bound:

| Claim: success rate at least | Runs needed, zero failures | Runs needed, one failure allowed |
| ---------------------------- | -------------------------- | -------------------------------- |
| 95 percent                   | 59                         | 93                               |
| 98 percent                   | 149                        | 236                              |
| 99 percent                   | 299                        | 473                              |

These follow from the binomial distribution: with zero failures, n is the smallest integer with
p^n at or below 0.05. If the budget cannot reach the run count, weaken the claim rather than the
statistics, and say so in the report.

## 7. Due diligence checklist

| Area                | What to check                                | Evidence                    |
| ------------------- | -------------------------------------------- | --------------------------- |
| {Process}           | {The process runs as documented}             | {Observation notes, photos} |
| {Equipment}         | {Model, firmware, condition, support status} | {Inventory sheet}           |
| {Data}              | {Records exist for the baseline period}      | {Export, row counts}        |
| {People}            | {Shifts, training, who owns the process}     | {Interviews}                |
| {Safety and access} | {Inductions, permits, restricted areas}      | {Site contact confirmation} |

## 8. Control plan

| Measure   | Target and limits | Checked how and how often | Owner  | Response when out of limits |
| --------- | ----------------- | ------------------------- | ------ | --------------------------- |
| {measure} | {target, limits}  | {method, frequency}       | {role} | {action and escalation}     |

## 9. Standards cited

{List any standard the report cites (for example a statistical method or a measurement standard)
with its edition.}
