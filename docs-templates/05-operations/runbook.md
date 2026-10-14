# Runbook: {service or product name}

Last tested: {YYYY-MM-DD} by {name}. On-call rotation: {link}.

A runbook is for the on-call engineer at 3 a.m. who did not build the system. It covers the
failures you can predict, one page each: how to confirm it, what to do, how to undo it, and when
to call someone else.

> **Good:** a person who has never seen the system can follow an entry and either fix the
> problem or escalate it with the right evidence. Test each entry by having someone else run it
> in a drill, and update the "last tested" date.

## Service overview

| Item                | Value                                              |
| ------------------- | -------------------------------------------------- |
| What it does        | {one sentence}                                     |
| Who depends on it   | {users and downstream systems}                     |
| Dashboards          | {links}                                            |
| Logs                | {where and how to query}                           |
| Deploy and rollback | {command or workflow, and who may run it}          |
| Dependencies        | {each dependency and what happens when it is down} |
| Owners              | {team and escalation contacts}                     |

## Entry template

### RB-{NN}: {Symptom as the alert or the user describes it}

**Impact.** {Who is affected and how badly.}

**Confirm.** {The query, command, or dashboard that shows this is the real problem and not a
similar one.}

```text
{command}
```

**Act.** Do these in order. Stop when the symptom clears.

1. {Least risky action first}
2. {Next action}

**Undo.** {How to reverse each action above if it makes things worse.}

**Verify recovery.** {The signal that shows the service is healthy again, and how long to watch
it.}

**Escalate when.** {The condition, the contact, and the evidence to send them.}

**Related.** {Failure mode ID in the [failure mode guide](failure-mode-guide.md), past incidents,
decision records.}

## Entries

{Write one entry for each of the five failure modes with the highest RPN, then add more as
incidents teach you.}

## Worked example

RB-03 for the TL-1 ingest service, "Readings delayed more than ten minutes". Confirm: the queue
depth panel shows a backlog above 50,000 and rising. Act: (1) check that the database accepts
writes with the health query; (2) scale ingest workers from four to eight with the scaling
workflow. Undo: scale back to four. Verify: backlog falls to under 1,000 within fifteen minutes.
Escalate when the database health query fails, to the platform on-call, with the query output.
