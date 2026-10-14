# Pull request

## What changed

<!-- The behavior that is different after this change, and why this is the right shape for it. -->

## Why

<!-- The problem, request, or incident. Link the issue: "Closes #NN". -->

## Tests

<!-- The commands you ran and their summary lines, not the whole log. -->

```text

```

New or changed tests, and the defect each one would catch:

<!-- Every bug fix includes a test that fails without the fix. -->

## Hardware or field evidence

<!-- What you ran on real equipment and what you saw. Write "none, not hardware-facing" when the
change cannot reach a device or site. Delete this section for software-only projects. -->

## Compatibility

- [ ] No public interface, data format, or configuration key changed.
- [ ] A public surface changed, and the change is backward compatible or includes a migration.

## Risk

<!-- What breaks if this is wrong, who would notice, and how it is undone. -->

## Checklist

- [ ] `sh scripts/check.sh` passes locally.
- [ ] Commit messages follow Conventional Commits, one concern per commit.
- [ ] CHANGELOG.md has an entry for any user-visible change.
- [ ] Documentation updated where behavior changed.
- [ ] Any number added to documentation comes from a recorded run or sits in a metric marker.
- [ ] Any new dependency has an allowed license, named here.
- [ ] No secrets, credentials, or private data, including in test fixtures.
