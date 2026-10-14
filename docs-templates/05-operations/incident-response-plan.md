# Incident response plan: {product name}

Version {n}, {YYYY-MM-DD}. Owner: {name}.

These playbooks cover the incidents you can predict for {product name}. Each one follows the
phases of NIST SP 800-61: detect, contain, eradicate, recover, and review. Incidents in systems
you do not operate are handled by their owners; this plan says where to hand them over.

> **Good:** each playbook's first move is something the on-call person can do in minutes with
> the access they actually have. A plan whose containment step needs a tool nobody has is not a
> plan.

## Scope and constraints

{What is covered, and what the responders can and cannot reach. For deployed devices, say how
they are reached: remote configuration, cloud-side revocation, an update, or a site visit. That
determines every containment step below.}

## Severity levels

| Level    | Definition                                        | Response start | Who is told |
| -------- | ------------------------------------------------- | -------------- | ----------- |
| Critical | {Security breach, or all users or units affected} | {target}       | {roles}     |
| High     | {Large share affected, or a deadline at risk}     | {target}       | {roles}     |
| Medium   | {Degraded service, workaround exists}             | {target}       | {roles}     |
| Low      | {Cosmetic or single user}                         | {target}       | {roles}     |

## Roles

| Role                | Responsibility                                     |
| ------------------- | -------------------------------------------------- |
| Incident lead       | {Coordinates, decides, owns the timeline}          |
| Technical responder | {Investigates and acts}                            |
| Communications      | {Updates customers and stakeholders on a schedule} |
| Scribe              | {Records actions and times as they happen}         |

## Playbook index

| ID    | Incident                                | Severity | First move                              |
| ----- | --------------------------------------- | -------- | --------------------------------------- |
| IR-01 | {Secret or credential exposed}          | Critical | {Revoke it where it is issued}          |
| IR-02 | {Defective release in production}       | Critical | {Halt the rollout}                      |
| IR-03 | {Data lost or written wrongly}          | High     | {Stop the writer, preserve evidence}    |
| IR-04 | {Outage of a dependency you do not run} | High     | {Confirm with its status page, degrade} |
| IR-05 | {Suspected intrusion}                   | Critical | {Preserve logs, isolate the host}       |

## IR-{NN}: {Incident}

{One sentence describing the incident and how it usually starts.}

- **Detect:** {signals, alerts, and reports that reveal it}
- **Contain:** {actions that stop it spreading, in order; the first is the fastest safe action}
- **Eradicate:** {actions that remove the cause}
- **Recover:** {how service is restored and how you confirm it}
- **Review:** {what the post-incident review must cover, and the decision records or tests it
  may change}

## Communication

{Who is told at each severity, by which channel, how often updates go out, and who approves
external messages. Keep pre-written first messages for the Critical playbooks.}

## After every incident

1. Write a [root cause analysis](rca.md) for every Critical and High incident.
2. Add or update the matching [runbook](runbook.md) entry and
   [failure mode](failure-mode-guide.md).
3. Add a test that would have caught it, or record why none can.
4. Review this plan if a playbook was missing or wrong.

## Worked example

IR-02 for the TL-1 fleet: a gateway build that dropped door events reached 40 trailers. Contain:
the release workflow's channel pin was set back to the previous build, which stopped further
updates within minutes. Recover: the 40 gateways were sent the previous build and confirmed by
their next check-in. Review: the bench plan gained a door-event test, and the rollout workflow
gained a hold after the first ten units.
