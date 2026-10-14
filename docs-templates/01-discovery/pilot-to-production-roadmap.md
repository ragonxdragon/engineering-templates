# Pilot to production roadmap: {project name}

Version {n}, {YYYY-MM-DD}. Author: {name}.

Write this alongside the pilot statement of work, not after the pilot ends. It tells the customer
what a rollout involves, and it tells the pilot team what the pilot has to measure so the rollout
can be estimated from evidence.

> **Good:** section 6 is specific. If the pilot does not measure an input the production
> estimate needs, the production estimate will be a guess dressed up with a pilot's credibility.

## 1. Phases after a successful pilot

| Phase               | Typical duration | Content                                        | Gate to the next phase                   |
| ------------------- | ---------------- | ---------------------------------------------- | ---------------------------------------- |
| {Pilot hardening}   | {range}          | {Fix what the pilot found, finish integration} | {Pilot site runs unattended for n weeks} |
| {First wave}        | {range}          | {Sites and order}                              | {criteria}                               |
| {Remaining rollout} | {range}          | {content}                                      | {criteria}                               |
| {Steady state}      | ongoing          | {Support, updates, monitoring}                 | -                                        |

## 2. What changes from pilot to production

| Area                  | Pilot                      | Production                               |
| --------------------- | -------------------------- | ---------------------------------------- |
| Mounting and hardware | {Temporary rigs}           | {Permanent fixtures, protected cabling}  |
| Software              | {Scripts and manual steps} | {Packaged, versioned, updated remotely}  |
| Data and integration  | {Exports reviewed by hand} | {Integrated with the customer's systems} |
| Monitoring            | {Team watches dashboards}  | {Alerts, on-call, support tiers}         |
| Security              | {Pilot exceptions, listed} | {Full review passed}                     |

## 3. Cost and effort drivers

| Driver           | How it scales              | Basis                                     |
| ---------------- | -------------------------- | ----------------------------------------- |
| {Install points} | {Per point}                | {Pilot install hours per point, measured} |
| {Sites}          | {Per site, fixed overhead} | {Travel and survey per site}              |
| {Integration}    | {Per system, mostly fixed} | {Interface count from discovery}          |

Show figures as ranges with their basis. A figure from the pilot carries the pilot run that
measured it.

## 4. Operating model

{Who runs the system day to day, who supports it, how updates are rolled out, and how a failure
is reported and fixed. Link the [support model outline](../05-operations/support-model.md).}

## 5. What the production statement of work contains

{The scope headings a rollout statement of work needs, so the customer sees the shape of the
next contract before signing the first.}

## 6. What the pilot must produce for the estimate

| Input                              | Source in the pilot                 | Drives                          |
| ---------------------------------- | ----------------------------------- | ------------------------------- |
| {Install hours per point}          | {Time log during install}           | {Install labor line}            |
| {Failure rate per point per month} | {Incident log over the soak period} | {Support staffing, spares}      |
| {Accuracy against the reference}   | {Scored trials}                     | {Go or no-go, acceptance terms} |
