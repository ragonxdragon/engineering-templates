# Release checklist: {project name} {version}

Release owner: {name}. Target date: {YYYY-MM-DD}.

Copy this checklist into the release pull request or issue for every release. The point is that
every release passes the same gates in the same order, so a skipped step is visible.

> **Good:** each box is ticked with a link to its evidence: a workflow run, a test report, a
> signed-off pull request. A release that needs a step skipped records why in the release issue,
> and the skip is reviewed before the tag is pushed.

## 1. Before the cut

- [ ] Scope is frozen. Every change in the release is merged, and anything late waits for the
      next version.
- [ ] Every standing gate in the [gate registry](../02-product/gates.yaml) passes on the release
      commit. Link: {workflow run}
- [ ] No [metric marker](../02-product/metric-marker-convention.md) owed at this version reads
      `TBD`. Command: `{marker check} --release {version}`
- [ ] Hardware or field validation passed where the release touches it. Link:
      {validation plan results}
- [ ] Security: dependency audit clean or each finding waived with an expiry date; threat model
      reviewed if a surface changed.
- [ ] Release notes drafted from the [release notes template](release-notes.md) and reviewed.

## 2. Cut

- [ ] Version chosen by the compatibility rules: {major for breaking, minor for additions, patch
      for fixes}. Version set in {file or build input}.
- [ ] Changelog `[Unreleased]` rolled into a dated `[{version}]` section, with compare links.
- [ ] Release commit made on a branch and opened as a pull request.
- [ ] Annotated tag `v{version}` created on the release commit, locally, not pushed yet.
- [ ] Pull request approved and merged with a merge commit, so the tagged commit keeps its hash.
      If review changed the commit, the tag was moved to the new commit before pushing.
- [ ] Tag pushed by a maintainer.

## 3. Build

The tag starts the release workflow. Confirm that it:

- [ ] Refuses a lightweight tag, a tag not on the main or release branch, and a changelog with no
      section for the version.
- [ ] Runs the full test suite and the license and dependency checks.
- [ ] Builds each artifact from the tagged commit, records its SHA-256, and attaches a software
      bill of materials and build provenance.
- [ ] Drafts the release with the notes and the artifact hashes. Artifacts that contain secrets
      are never attached to a public release.

## 4. Promote

- [ ] Production promotion is a separate, manual step run by a named owner.
- [ ] The promotion checks the artifact hash against the one recorded at build time.
- [ ] The promotion records who ran it and when, in the release notes or the release record.

## 5. Deploy

- [ ] Dry run first: list every target that would update and every target skipped, with the
      reason.
- [ ] Exclusions reviewed and recorded.
- [ ] Staged rollout: {first group}, hold for {period}, then the rest.
- [ ] Every target's result reported. The deploy fails if any target failed.

## 6. Verify

- [ ] Health signals normal for {period} after the last stage. Link: {dashboard}
- [ ] Business signal confirms the release works, not only that it runs.

## 7. Rollback plan

{How this release is rolled back, who can do it, how long it takes, and whether data written by
the new version is readable by the old one. Fill this in before the cut, not during an incident.}

## 8. After the release

- [ ] Release announced to {audience} with a link to the notes.
- [ ] Follow-up issues filed for anything deferred or waived.
- [ ] Next version's `[Unreleased]` section exists in the changelog.
