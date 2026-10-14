# Production concerns checklist: {project name}

Version {n}, {YYYY-MM-DD}. Reviewed by {name}.

The checklist enumerates the operational concerns a system must answer before real users depend
on it. Each row is framed as a failure: what happens when this breaks? The architecture document
carries the answers in a conformance table, one row per concern, with no rows skipped.

> **Good:** every row has evidence, and the status follows from it. A column of identical "Met"
> verdicts is a warning sign: it usually means the boxes were ticked without being read. A
> missing row is a blind spot. An explicit "N/A" with a reason is a decision.

Tags: **[U]** universal, answered at every risk tier. **[C]** conditional, answered at medium
risk and above or when the capacity model or a trigger activates it; otherwise one N/A row with
the reason.

## Conformance table format

Write the reasoning before the status, so the verdict follows the evidence.

| Concern   | Reference           | Reasoning and evidence                   | Status                | Why waived or N/A             |
| --------- | ------------------- | ---------------------------------------- | --------------------- | ----------------------------- |
| {concern} | {Framework section} | {How the design handles it, with a link} | {Met, Waived, or N/A} | {Reason, and when to revisit} |

Useful references for breadth: the OWASP Application Security Verification Standard, the AWS
Well-Architected Framework, the Twelve-Factor App, the OWASP Top 10 for LLM Applications if the
product uses a language model, and platform quality guidelines for mobile apps.

## Security and privacy

- [U] Authentication and authorization
- [U] Secret management, including parity of secrets across environments
- [U] Input validation at every trust boundary
- [U] Rate limiting, with the algorithm named
- [U] Encryption in transit and at rest
- [U] Audit logging
- [U] Data retention, deletion, and archival
- [C] Network-level abuse and denial-of-service defense
- [C] Data residency

## Data

- [U] Schema migrations that are reversible and safe to run twice
- [U] Interface and message contracts that stay backward compatible, so a rollback is safe
- [U] Consistency and transaction boundaries
- [U] Concurrency control for contended writes (optimistic or pessimistic, and why)
- [U] Connection pooling configured at startup
- [U] Query review: no unbounded queries, indexes justified
- [C] Replication and read replicas
- [C] Partitioning or sharding
- [C] Object storage strategy
- [C] Event sourcing or change data capture

## Interfaces and background work

- [U] Versioning and backward-compatibility policy
- [U] Idempotency for every mutating call, with keys stored server side
- [U] Delivery semantics: at-least-once with idempotent consumers wherever a queue changes state
- [U] Pagination for large or live lists
- [U] What runs synchronously and what goes to a queue
- [U] Scheduled and background jobs
- [C] Dead-letter handling for messages that cannot be processed
- [C] Real-time transport choice

## Performance and resilience

- [U] Timeouts and retries with backoff on every outbound call
- [U] Defined behavior when each dependency is down: fall back, degrade, or fail fast
- [U] Performance budgets
- [U] Stateless deployment and horizontal scaling posture
- [U] Backups, with restore tested
- [C] Caching, with eviction and stampede protection
- [C] Circuit breakers, bulkheads, and backpressure
- [C] Failover

## Operations

- [U] Logs, metrics, and traces, covering latency, traffic, errors, and saturation
- [U] At least one business signal that proves the feature works, not only that it responds
- [U] At least one service level objective with an error budget
- [U] Alerting and on-call sized to the team
- [U] Runbooks usable by someone who did not build the feature
- [U] Automated tests and CI gates
- [U] Deployment strategy with a rollback mechanism
- [U] Cost controls
- [U] Accessibility
- [C] Canary, blue-green, or feature flags, with flag defaults and a cleanup plan
- [C] Launch plan with named roles and a first-hour watch
- [C] Load and stress test thresholds

## Capability blocks

Each opens with a yes or no question. If the answer is no, record one N/A row.

- **Does it handle money?** Double-entry ledger, exactly-once payment through idempotency keys,
  reconciliation, and keeping card data out of scope by using the payment provider's hosted
  fields.
- **Does it accept file uploads?** Pre-signed URLs, size limits, content type and magic-byte
  checks, malware scanning before use.
- **Does it send notifications?** Provider abstraction, retries, user preferences and opt-out,
  and email authentication records.
- **Does it ship a language model feature?** Prompt and model versioning with rollback, input and
  output guardrails, prompt-injection defense, cost budgets per user, an evaluation suite, and
  tool permissions for any agent.
- **Does it run on devices in the field?** Remote update with rollback, signed images,
  behavior when the network is absent for days, clock handling, and remote diagnostics.
