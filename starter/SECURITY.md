# Security policy

## Reporting a vulnerability

Do not open a public issue for a security problem.

Use GitHub private vulnerability reporting: open the repository's **Security** tab, choose
**Advisories**, then **Report a vulnerability**. The report stays private between you and the
maintainers. If that button is missing, open an issue that says only "I have a security report"
with no details, and a maintainer will set up a private channel.

{Alternative contact, if any: a security email address that is monitored.}

Please include:

- the affected component and the version or commit you tested,
- steps to reproduce, or a proof of concept,
- what an attacker gains, in your assessment,
- whether anyone else knows, and any disclosure date you have in mind.

What to expect: a first reply within {n} days. If the report is confirmed, the fix and a public
advisory are released together, and you are credited by the name you choose.

## Supported versions

| Version        | Supported                          |
| -------------- | ---------------------------------- |
| `main`         | Yes. Fixes land here first.        |
| Latest release | Yes. Fixes are backported.         |
| Older releases | No. Upgrade to the latest release. |

## Security posture

{What the project does to stay secure, stated as facts a reader can check: dependency audits,
secret scanning, pinned CI actions, signed releases. Say where each runs. If a check runs only on
a developer machine, say so.}

## Accepted risks and known gaps

{Each risk the project knowingly carries, why it is accepted, and where it is tracked. Listing
these openly stops anyone from mistaking them for solved.}

- {gap}
