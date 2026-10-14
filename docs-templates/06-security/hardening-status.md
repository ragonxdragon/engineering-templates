# Hardening status: {product name}

Last updated {YYYY-MM-DD}.

This page tracks reliability and security hardening: what is done, what is still open and what it
needs to close, and what was considered and decided against. Failure modes and their ratings live
in the [failure mode guide](../05-operations/failure-mode-guide.md). The attack surfaces live in
the [threat model](threat-model.md).

> **Good:** every open item says what it is waiting for: a device, a hardware change, a decision,
> or code. "Needs a decision" items name who decides. Items decided against stay on the page with
> the reason, so nobody proposes them again without new evidence.

## Open items

| Item   | Needs                                              | Notes                                 |
| ------ | -------------------------------------------------- | ------------------------------------- |
| {item} | {A device, a hardware change, a decision, or code} | {Current state, what closes it, link} |

## Decided against

| Item   | Reason                             | Decision record |
| ------ | ---------------------------------- | --------------- |
| {item} | {Why, including the risk accepted} | {ADR-NNNN}      |

## Done

### Reliability

- {Change, with the version that shipped it and how it was verified}

### Security

- {Change, version, verification}

### Code quality

- {Change, version, verification}

## Worked example

An open TL-1 item read: "Rate limit on the reading upload endpoint | Code | A misconfigured
gateway can send thousands of requests a minute. Closes when the limit is in place and the load
test shows normal gateways are not throttled." A decided-against item read: "A separate database
per customer | Per-customer schemas with row-level checks give the same isolation with far less of
the operating work; accepted by the platform lead | ADR-0009".
