# Operational readiness review: {service or release}

Review date: {YYYY-MM-DD}. Reviewers: {names}. Decision: {ready, ready with conditions, or not
ready}.

Hold this review before real users depend on the service, and again before any release that
changes how it is run. It asks whether the team can see the service, roll it back, and support it.

> **Good:** every answer links to the dashboard, alert, runbook, or test that proves it. "We will
> add monitoring after launch" is a condition on the decision, written down with an owner and a
> date, not a pass.

## 1. Observability

| Question                                                             | Answer and link | Status     |
| -------------------------------------------------------------------- | --------------- | ---------- |
| Are latency, traffic, errors, and saturation visible per service?    | {link}          | {Met, Gap} |
| Is there at least one business signal that proves the feature works? | {link}          | {status}   |
| Can logs be searched by request, user, or device ID?                 | {link}          | {status}   |
| Is each requirement's success metric wired to telemetry?             | {link}          | {status}   |

## 2. Service level objectives

| SLO         | Target   | Window   | Error budget policy                     |
| ----------- | -------- | -------- | --------------------------------------- |
| {objective} | {target} | {window} | {What happens when the budget is spent} |

## 3. Alerting and on-call

| Question                                                       | Answer and link | Status   |
| -------------------------------------------------------------- | --------------- | -------- |
| Does every page-level alert link to a runbook entry?           | {link}          | {status} |
| Is the on-call rotation staffed and sized to the alert volume? | {link}          | {status} |
| Has each alert fired at least once in a test?                  | {link}          | {status} |

## 4. Deployment and rollback

| Question                                                         | Answer and link | Status   |
| ---------------------------------------------------------------- | --------------- | -------- |
| How is a release rolled out: all at once, staged, or by flag?    | {answer}        | {status} |
| Has rollback been performed on this release, not only described? | {evidence}      | {status} |
| Are data migrations reversible, or is the forward fix ready?     | {answer}        | {status} |
| Do feature flags have defaults and a removal date?               | {answer}        | {status} |

## 5. Failure handling

| Dependency   | Behavior when it is down          | Tested      |
| ------------ | --------------------------------- | ----------- |
| {dependency} | {fallback, degrade, or fail fast} | {test link} |

Runbook entries exist for the five highest-RPN failure modes: {links}.

## 6. Capacity and cost

{Load test results against the capacity ranges, headroom, and the monthly cost at launch scale
and at ten times launch scale, with the basis for each.}

## 7. Security

{Threat model reviewed for this release, open gaps accepted by name, secrets present in every
environment.}

## 8. Launch plan

| Item             | Answer                                  |
| ---------------- | --------------------------------------- |
| Launch owner     | {name}                                  |
| First-hour watch | {who watches what, and the stop signal} |
| Communication    | {who is told, before and after}         |

## 9. Conditions

| Condition             | Owner  | Due          |
| --------------------- | ------ | ------------ |
| {gap that must close} | {name} | {YYYY-MM-DD} |
