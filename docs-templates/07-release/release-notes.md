# {Product name} {version}

Release notes, {YYYY-MM-DD}. Status: {proposed scope, release candidate, or released}.

Release notes are written for the people who run the product, not the people who built it. They
describe the release: what changes for the reader, what it fixes, and what they need to do. Keep
one Markdown file per version as the source, and generate any Word or PDF copy from it rather
than editing the copy.

> **Good:** a reader who runs the product can tell, for each item, what was wrong, what it cost
> them, and what is different now. The notes describe the release only. Past decisions, plan
> history, abandoned options, and open investigations belong in other documents.

## Headline changes

One section per change that a reader will notice. The heading states the outcome in plain words.

### {Outcome, for example: "Uploads arrive on schedule"}

- **What was wrong:** {the behavior before, in observable terms}
- **What it cost:** {the effect on the reader, with a measured figure where one exists}
- **What {version} does:** {the behavior now}

## Other fixes

| What was wrong              | What it cost       | Reference     |
| --------------------------- | ------------------ | ------------- |
| {behavior before, one line} | {effect, one line} | {issue or ID} |

## Additions

{New capabilities, grouped by theme, one short paragraph or table each.}

## Upgrade notes

{Anything the reader must do: configuration changes, migration steps, minimum versions, and
whether rolling back is safe.}

## Known issues

{Defects the release ships with, their effect, and the workaround. Not investigations in
progress: only what a reader needs to operate the release.}

## Verification

{Where the evidence lives: the [test evidence](test-evidence.md) for this release, validation
results, and the artifact hashes.}

## Worked example

From the TL-1 gateway 1.3.0 notes:

### Door alerts arrive within thirty seconds

- **What was wrong:** the gateway batched door events with temperature readings and sent them
  every five minutes.
- **What it cost:** a dispatcher learned about an open door up to five minutes late, long enough
  for the load temperature to rise.
- **What 1.3.0 does:** door events are sent as soon as they happen, separate from the batch.
