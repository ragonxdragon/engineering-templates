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

An open TL-1 item read: "Update rollback proof | A device | The rollback path is built and unit
tested but has never run on hardware. Closes when bench test UPD-04 passes on build 1.3.0." A
decided-against item read: "Disk encryption on the gateway | Encryption keys would live on the
same flash chip, so a pulled unit gains the attacker nothing extra to defeat; accepted by the
security lead | ADR-0011".
