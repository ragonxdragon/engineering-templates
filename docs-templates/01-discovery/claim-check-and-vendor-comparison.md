# Claim check and vendor comparison: {project name}

Version {n}, {YYYY-MM-DD}. Author: {name}. Status: {internal draft or shared with customer}.

Use this when a project arrives with claims attached: a sales email, a vendor datasheet, a
previous project's results, or a competitor's quote. It checks each claim against evidence,
compares the options on criteria that matter to this use case, and ends in a draft design and
the questions still open.

> **Good:** every verdict cites evidence a reader can open. "Vendor says so" is a source, and
> it is the weakest one. Mark it as such rather than leaving it out.

## 1. Summary

{Three to five sentences. What was claimed, how much of it holds, which option you recommend
and why, and the one thing that most needs confirming before anyone commits money.}

## 2. Claim-by-claim check

Verdicts: `holds`, `holds with conditions`, `unproven`, `does not hold`.

| Claim                          | Verdict   | Finding and evidence                       | Action                    |
| ------------------------------ | --------- | ------------------------------------------ | ------------------------- |
| {Claim, quoted or paraphrased} | {verdict} | {What the evidence shows, with the source} | {Test it, ask, or accept} |

> **Good:** quote the claim as it was made. A paraphrase that is easier to refute is a straw
> man, and the person who made the claim will notice.

## 3. Use case and what drives the design

{Describe the physical and operational situation in plain terms: what moves, how fast, in what
environment, and what a correct result looks like. Then list the three or four properties of
the use case that decide the design, such as distance, speed, interference, power, or network.}

## 4. Option comparison

Compare on the criteria from section 3, not on the longest datasheet.

| Criterion                      | {Option A} | {Option B} | {Option C} | Source                                 |
| ------------------------------ | ---------- | ---------- | ---------- | -------------------------------------- |
| {Criterion from section 3}     | {value}    | {value}    | {value}    | {Datasheet, test, or quote, with date} |
| Support and end-of-life status | {status}   | {status}   | {status}   | {Source}                               |
| Lead time                      | {weeks}    | {weeks}    | {weeks}    | {Quote, dated}                         |
| Fit for this use case          | {verdict}  | {verdict}  | {verdict}  | Section 3                              |

### 4.1 Component selection

{For each component that varies independently (for example the sensor, the label, the antenna,
the gateway), a short table of candidates with the property that matters and a fit verdict.}

## 5. What we reuse

| Asset                                     | Where it comes from          | Use in this project                         |
| ----------------------------------------- | ---------------------------- | ------------------------------------------- |
| {Design, code, test method, or procedure} | {Earlier project or library} | {How it applies here, and what must change} |

## 6. Draft design

{Short subsections, each a decision with its reason: layout, logic, software options under test,
data model, commissioning, networking and security, and reporting. Keep the design vendor
neutral where the comparison is not settled.}

## 7. Test plan and acceptance criteria

| Criterion                  | Target                           | How measured                          |
| -------------------------- | -------------------------------- | ------------------------------------- |
| {Measure from the charter} | {Target, or TBD with the reason} | {Method, sample size, who records it} |

{Split the plan into phases where it helps, for example a bench phase and a site phase, each
with its length and exit condition.}

## 8. Open questions

Group by who can answer.

- To {vendor}: {question}
- To {customer}: {question}
- Internal, on resourcing and budget: {question}

## 9. Sources

List every source cited above with its retrieval date. Separate internal sources (earlier
projects, test results) from vendor and industry sources.

## Worked example

Acme Logistics received a claim that a battery sensor "lasts five years on one cell". The check
recorded the claim as `holds with conditions`: the datasheet figure assumes one reading every
fifteen minutes at 25 C, while Acme wants one reading a minute in trailers that run at minus
20 C. The action was a bench test at the real interval and temperature, and section 7 carried
battery life as `TBD` until it ran.
