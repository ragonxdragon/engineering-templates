# Changelog convention

The changelog follows [Keep a Changelog 1.1.0](https://keepachangelog.com/en/1.1.0/) and the
project follows [Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html). Entries come
from commit messages written in [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
form, so the changelog stays current without a separate writing step.

> **Good:** every change a user could notice has an entry, and no entry describes internal
> housekeeping. The commit type is chosen by what the change does, not by which file it touches.

## Commit type to changelog heading

| Commit type                                        | Changelog heading |
| -------------------------------------------------- | ----------------- |
| `feat`                                             | Added             |
| `fix`                                              | Fixed             |
| `perf`, `refactor` with a visible effect, `revert` | Changed           |
| `security`, or `fix` of a vulnerability            | Security          |
| Removal of a feature                               | Removed           |
| Announced future removal                           | Deprecated        |
| `docs`, `chore`, `style`, `test`, `ci`, `build`    | Not recorded      |

Adjust the table to your project, then keep exactly one copy of it. If a hook or script maps
types to headings, it reads this mapping rather than holding its own.

## Rules

1. **Type by effect.** A CI job that publishes a new download for users adds something users
   get, so it is a `feat` even though only pipeline files changed. A dependency bump that changes
   runtime behavior is a `fix` or `feat`, not a `chore`. The non-recording types are only for changes with no effect on what users get.
2. **A silent changelog is a signal.** If an automated sync records nothing for a commit that
   changes behavior, the type was wrong. Some teams make the commit hook warn when a
   non-recording type touches source code.
3. **Entries summarize, they do not narrate.** "Retry uploads with backoff" is an entry.
   "Changed the retry logic after the outage" is history and belongs in the commit body.
4. **Generated entries can be edited.** The sync only adds. Rewording an entry for readers is
   always allowed.
5. **The release rolls the section.** At release, `[Unreleased]` becomes `[x.y.z] - YYYY-MM-DD`
   and the compare links at the bottom are updated. The release workflow refuses a tag whose
   version has no section.

## Commit message format

```text
type(scope): summary in the imperative, under 72 characters

- One bullet per fact: what changed, the mechanism or number behind
  it, and any change in behavior a reader must know.
- Wrap at 72 columns.
```

Documentation commits may use prose paragraphs instead of bullets, because the reasoning is the
content. Breaking changes add `!` after the type and a `BREAKING CHANGE:` footer.

## File layout

```text
# Changelog

All notable changes to this project are recorded here.

## [Unreleased]

### Added

- {entry}

## [1.1.0] - 2026-04-02

### Fixed

- {entry}

[Unreleased]: https://github.com/OWNER/REPO/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/OWNER/REPO/compare/v1.0.0...v1.1.0
```

The [starter project](../../starter/CHANGELOG.md) includes a changelog in this form.
