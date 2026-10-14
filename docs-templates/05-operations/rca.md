# Root cause analysis: {issue in one line}

| Field       | Detail                                                             |
| ----------- | ------------------------------------------------------------------ |
| Incident ID | {RCA-YYYY-MMDD-NNN}                                                |
| Affected    | {Unit, service, site, or "all"}                                    |
| Version     | {Affected version} to {fixed version, or pending}                  |
| Components  | {Parts of the system involved}                                     |
| Severity    | {Critical, High, Medium, or Low}: {what users lost, in one clause} |
| First seen  | {date and time, with time zone}; found {date}, by {how}            |
| Author      | {name}                                                             |
| Status      | {Open, Mitigated, or Resolved}, as of {date}                       |

> **Good:** the summary names one cause and says plainly what is confirmed and what is still
> probable. Every claim in the analysis points at a piece of evidence in section 4. Once issued,
> the document is a record: later findings go in section 10, not into rewritten sections.

## 1. Summary

{One paragraph: what happened, where, for how long, and the single cause. Say what is confirmed
and what is probable pending confirmation. Say whether the cause is yours to fix.}

{One paragraph: the fix, which version carries it, and what anyone else still has to do.}

## 2. Timeline

| Time               | Event                           | Source          |
| ------------------ | ------------------------------- | --------------- |
| Before             | {Normal state, version running} | {record}        |
| {date, time, zone} | {Last good event}               | {log, metric}   |
| {date, time, zone} | {First sign of failure}         | {log, metric}   |
| {date, time, zone} | {Reported or detected}          | {ticket, alert} |
| {date, time, zone} | {Fix released}                  | {release notes} |

## 3. Analysis

### 3.1 Primary root cause

{The one thing that, had it been different, would have prevented the incident. Name the file,
part, or configuration and the behavior in plain words. Say how it was proven: which log line,
which field, which reproduction.}

### 3.2 Contributing factors

- {A condition that made the cause worse or more likely, with its evidence}

### 3.3 Trigger

{What set it off on that day. The trigger is not the cause.}

### 3.4 Why it was not caught earlier

{What tests, monitoring, or review should have shown it, and why they did not. State it plainly:
no alert existed, the test plan lacked the case, the bench did not have the part.}

## 4. Evidence

| Evidence               | What it shows        | Where it lives       |
| ---------------------- | -------------------- | -------------------- |
| {log, record, capture} | {the fact it proves} | {path or attachment} |

Paste the decisive lines unedited, and only those.

```text
{log lines}
```

## 5. Impact

- Data: {what was lost or delayed, and for how long}
- Service: {what users could not do}
- Exposure: {how many other units or customers carry the same defect today}
- Communication: {who was told, when, by whom}

## 6. Resolution

### 6.1 Immediate fix

{What restored service first, who did it, and when.}

### 6.2 Structural fix

{What changed so it cannot recur: the version that carries it, how it was proven, and how a
reader can confirm it in production.}

## 7. Prevention

- {Test case added, by ID}
- {Alert or field that would have caught it, and who watches it}
- {Process change}

## 8. Changes

| File or component | Change     | Commit or change ID |
| ----------------- | ---------- | ------------------- |
| `{path}`          | {one line} | {hash}              |

## 9. Follow-up actions

| Action   | Owner  | Due          | Status |
| -------- | ------ | ------------ | ------ |
| {action} | {name} | {YYYY-MM-DD} | {Open} |

## 10. Status updates

Add dated entries here once the document is issued. Do not rewrite the sections above.

- {YYYY-MM-DD}: {what changed, who did it, what is still open}

## Worked example

RCA-2026-0312-001 for the TL-1: three trailers reported no readings for six hours. Primary cause:
the gateway's flash buffer filled because a retry loop rewrote the same page, cited to the buffer
module and proven by a bench reproduction with the same build. Trigger: a cellular outage on one
route that lasted longer than any earlier one. Why not caught earlier: the bench plan tested
outages of one hour, not six.
