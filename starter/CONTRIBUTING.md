# Contributing

Thank you for helping with {project name}. This page covers setup, the checks every change
passes, how to write commits, and what a pull request needs.

## Setup

```sh
git clone https://github.com/OWNER/REPO.git
cd REPO
{install dependencies}
```

Requirements: {languages and versions}. Node.js is needed for the Markdown lint.

## One command

```sh
sh scripts/check.sh
```

It runs the Markdown lint, the metric marker check, and the build and tests. CI runs the same
script, so a green run locally and a green run in CI mean the same thing. If you need a check CI
does not have, add it to the script rather than to the workflow alone.

## Workflow

1. Open or find an issue that describes the change.
2. Branch from `main`.
3. Make one concern per commit. Split unrelated changes into separate commits.
4. Run `sh scripts/check.sh`.
5. Open a pull request using the template. Fill in every section; write "none" where a section
   does not apply.

## Commit messages

Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/):
`type(scope): summary`, in the imperative, under 72 characters.

| Type                                            | Changelog heading |
| ----------------------------------------------- | ----------------- |
| `feat`                                          | Added             |
| `fix`                                           | Fixed             |
| `perf`, `refactor`, `revert`                    | Changed           |
| `security`                                      | Security          |
| `docs`, `chore`, `style`, `test`, `ci`, `build` | Not recorded      |

Pick the type from what the change does for users, not from the files it touches.

Body: one bullet per fact for code changes (what changed, the mechanism or number behind it, and
any behavior change). Prose is fine for documentation changes. Wrap at 72 columns.

## Changelog

Every `feat`, `fix`, `perf`, `refactor`, `revert`, and `security` change adds a line under
`[Unreleased]` in [CHANGELOG.md](CHANGELOG.md). Write the line for a user, not for a reviewer.

## Writing rules

These apply to documentation, code comments, commit messages, and pull requests.

- Plain, short sentences. {American} spelling.
- No em dashes, en dashes, or emoji.
- A code comment describes what the code does now. History and reasons go in the commit message.
- No number the project has not measured. Put a promised number in a metric marker until a
  recorded run fills it:

  ```text
  <!--METRIC:startup_seconds@v1.0.0-->TBD<!--/METRIC-->
  ```

  `scripts/check-metric-markers.sh` reports unfilled markers, and with `--release X.Y.Z` it fails
  when a marker owed at that release is still `TBD`.

## Tests

- Every bug fix includes a test that fails without the fix.
- Every test names the defect it would catch. A test that cannot fail is removed.
- {Where tests live and how to run one test.}

## Dependencies

New dependencies need a license from the allowed list: {for example MIT, BSD-2-Clause,
BSD-3-Clause, Apache-2.0, ISC}. Anything else is discussed in an issue first. Name the license
in the pull request.

## Decisions

Architecturally significant decisions get a record in [docs/adr/](docs/adr/README.md). Start
from the template and take the next number.

## Releasing

{Who releases, how versions are chosen, and a link to the release checklist.}

## Definition of done

A change is done when the check script passes, tests cover the new behavior, documentation and
the changelog are updated, and a reviewer has approved it.

## Conduct and security

Participation follows the [code of conduct](CODE_OF_CONDUCT.md). Report vulnerabilities as
described in [SECURITY.md](SECURITY.md), never in a public issue.
