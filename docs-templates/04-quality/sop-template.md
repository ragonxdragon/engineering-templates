# SOP-{NN}: {Procedure name}

| Field          | Value                      |
| -------------- | -------------------------- |
| Version        | {n}                        |
| Effective date | {YYYY-MM-DD}               |
| Owner          | {role}                     |
| Approved by    | {role}                     |
| Applies to     | {sites, systems, or teams} |

> **Good:** someone who did not write the procedure can follow it on the first attempt and get
> the same result as the author. Each step is one action with an observable result. Test it by
> watching a new person run it, and fix every place they hesitate.

## 1. Purpose

{One sentence: what this procedure achieves.}

## 2. When to use it

{The trigger: a schedule, an event, or a request.}

## 3. Roles

| Role   | Responsibility in this procedure |
| ------ | -------------------------------- |
| {role} | {responsibility}                 |

## 4. Safety and access

{Personal protective equipment, permits, restricted areas, and lockout requirements. Delete only
if none apply, and say so.}

## 5. Equipment and materials

- {item}

## 6. Before you start

- [ ] {Precondition that must be true, and how to check it}

## 7. Steps

| Step | Action                             | Expected result               | If not                           |
| ---- | ---------------------------------- | ----------------------------- | -------------------------------- |
| 1    | {One action, starting with a verb} | {What you see when it worked} | {What to do, or go to section 9} |

## 8. Records

{What is written down, where, and how long it is kept. Link the sheet or form.}

## 9. Exceptions and escalation

| Situation   | Action   | Contact            |
| ----------- | -------- | ------------------ |
| {situation} | {action} | {role and channel} |

## 10. Revision history

| Version | Date         | Change         | By     |
| ------- | ------------ | -------------- | ------ |
| {n}     | {YYYY-MM-DD} | {what changed} | {name} |

## A procedure set for a pilot

A field pilot usually needs these procedures. Number them in the order they are first used.

| SOP | Procedure                    | Covers                                                                     |
| --- | ---------------------------- | -------------------------------------------------------------------------- |
| 01  | Site survey                  | Walkthrough, measurements, photos, constraints                             |
| 02  | Commissioning                | Installing and labeling equipment, recording what went where               |
| 03  | Daily start and health check | Checks before the day's operation, and what to do on a failure             |
| 04  | Operator instruction         | What the people doing the work change, in their terms                      |
| 05  | Scored trial                 | Running a trial against a reference and recording the score                |
| 06  | Daily reconciliation         | Comparing system records with the business record, classifying differences |
| 07  | Change control               | Who may change configuration, how it is recorded, shared equipment         |
| 08  | Incident and escalation      | What counts as an incident, who is told, how fast                          |
| 09  | Data handling                | Where data is stored, who sees it, when it is deleted                      |
| 10  | Close-out                    | Removing or handing over equipment, final data export, sign-off            |

## Worked example

Acme Logistics' SOP-03 for the TL-1 pilot had six steps. Step 4 read "Open the trailer door for
ten seconds. Expected: the dispatcher console shows 'door open' for that trailer within thirty
seconds. If not: check the gateway status light and go to SOP-08." The first new driver who ran
it hesitated at step 2, which said "check the gateway"; it was rewritten as "Confirm the gateway
light in the cab is steady green".
