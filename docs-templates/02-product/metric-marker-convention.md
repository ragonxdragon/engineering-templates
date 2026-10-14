# Metric marker convention

A metric marker holds a number a document promises but the project has not measured yet. It
keeps guesses out of READMEs, PRDs, and release notes, and it lets a script count what is still
owed.

> **Good:** a reader can trust every number they see, because each one either came from a
> recorded run or says plainly that it has not been measured.

## The marker

An HTML comment pair around the value. It renders as plain text on GitHub and in most Markdown
viewers.

```text
<!--METRIC:upload_success_rate-->TBD<!--/METRIC-->
```

A marker can name the release that owes the number. Before that release it is deferred; from
that release on it is owed.

```text
<!--METRIC:upload_success_rate@v1.2.0-->TBD<!--/METRIC-->
```

Names use letters, digits, and underscores. Versions use `vMAJOR.MINOR.PATCH`.

## Rules

1. **Only a recorded run fills a marker.** The value comes from a command whose output is
   committed or archived, with the commit and any seed or input set that produced it. No
   estimate, no round figure, no "about".
2. **One number, one name.** The same metric name never carries two different values in two
   files. If two places show it, both show the same value, ideally generated from one source.
3. **A release cannot ship a promise it did not keep.** At a tag, every marker owed at that
   version must hold a value. A marker naming a later version is reported, not fatal.
4. **Budgets are not results.** A limit the team chose ("first page in under 3 seconds") is a
   setting and is written as one. The measured value goes in a marker next to it.
5. **Removing the claim is allowed.** If a number cannot be measured, delete the sentence that
   needs it rather than leaving a `TBD` that will never be filled.

## Filling a marker

```text
<!--METRIC:upload_success_rate@v1.2.0-->99.4%<!--/METRIC-->
```

The same commit adds the evidence: the command that was run, its output or a link to the
archived run, and the commit it ran against. A reviewer checks the evidence, not the number.

## Checking markers

The [starter project](../../starter/scripts/check-metric-markers.sh) includes a small POSIX
shell script that:

- reports how many markers are unfilled,
- fails when a marker is malformed or two markers with one name disagree,
- with `--release X.Y.Z`, fails when a marker owed at or before that version is still `TBD`.

Run it in CI on every push in report mode, and in release mode from the release workflow.

## Worked example

The TL-1 README said "Battery life: <!--METRIC:battery_life_days@v1.0.0-->TBD<!--/METRIC-->
days at one reading a minute". The 1.0.0 release workflow failed on that marker until the
bench test finished. The commit that filled it attached the logger export and named the test
fixture and firmware build.
