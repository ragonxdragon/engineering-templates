# Design of experiments plan: {experiment name}

Version {n}, {YYYY-MM-DD}. Owner: {name}. Part of: {charter or test plan link}.

Plan an experiment before collecting data: which factors you change, at which levels, what you
measure, in what order, and how many times. Changing one thing at a time hides interactions and
costs more runs. A planned design finds them with fewer.

> **Good:** the run order is randomized, the factors you are not studying are held fixed or
> recorded, and the analysis method is chosen before the first run. A plan written after the
> data is a story, not an experiment.

## 1. Question

{The decision this experiment informs, stated as a question with a measurable answer. Example:
"Which mounting position and transmit setting give the highest read rate at walking speed?"}

## 2. Responses

| Response           | Definition and unit | How measured               |
| ------------------ | ------------------- | -------------------------- |
| {primary response} | {exact definition}  | {instrument or count rule} |
| {secondary}        | {definition}        | {method}                   |

## 3. Factors and levels

| Factor | Name     | Low level | High level | Why this range                       |
| ------ | -------- | --------- | ---------- | ------------------------------------ |
| A      | {factor} | {level}   | {level}    | {practical limits or prior evidence} |
| B      | {factor} | {level}   | {level}    | {reason}                             |

## 4. Held fixed or recorded

| Variable            | Held at, or recorded how            |
| ------------------- | ----------------------------------- |
| {Nuisance variable} | {value, or column in the run sheet} |

## 5. Design

| Item          | Choice                                                            |
| ------------- | ----------------------------------------------------------------- |
| Design type   | {Full factorial, fractional factorial with resolution, screening} |
| Runs          | {count, and how derived}                                          |
| Replicates    | {count per run, and why}                                          |
| Blocking      | {blocks, for example day or site, and why}                        |
| Randomization | {how the run order was generated, with the seed}                  |
| Center points | {count, or none}                                                  |

### 5.1 Staging

{If the experiment runs in stages (for example screening on the bench, then confirmation on site,
then a soak), state what each stage decides and what carries forward.}

### 5.2 Comparison protocol

{When comparing products or vendors, state how fairness is kept: same fixture, same items, same
conditions, alternated order, and who does the setup.}

## 6. Analysis

{The method (analysis of variance, main effects and interaction plots, regression), the
significance level, and the effect size that would change the decision. Decide now what result
leads to which action.}

## 7. Run sheet

Record every run in the [DOE run sheet](doe-run-sheet.csv), in randomized order, including runs
that went wrong. Note the deviation rather than dropping the row.

## 8. Pre-checks

{What is verified before the first run: instruments calibrated, fixtures built, other equipment
nearby switched off or logged, the reference set confirmed.}
