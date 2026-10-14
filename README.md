# Engineering templates

Document templates and a starter repository for running an engineering project from first
customer conversation to support in production. Each template gives the section structure, short
guidance on what a finished section looks like, and where it helps, a small worked example.

## Who this is for

- Engineers and technical leads who write their own scoping, design, and operations documents
  and want a structure that has held up on real projects.
- Small teams starting a repository who want contribution rules, issue forms, a pull request
  template, and a pinned CI workflow on day one.
- Anyone running a pilot of a hardware or IoT system who needs the test plans, procedures, and
  failure analysis that a pilot depends on.

## Map

| Template                                                                                                                                                                                                                     | When to use it                                       | What it prevents                                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------- |
| **Conventions**                                                                                                                                                                                                              |                                                      |                                                                              |
| [Writing standard](docs-templates/00-conventions/writing-standard.md)                                                                                                                                                        | Before the first document goes out                   | Arguments about style on every review, and invented numbers                  |
| **Discovery and sales engineering**                                                                                                                                                                                          |                                                      |                                                                              |
| [Scoping questionnaire](docs-templates/01-discovery/scoping-questionnaire.md)                                                                                                                                                | Before estimating                                    | Estimate lines that rest on nobody's answer                                  |
| [Claim check and vendor comparison](docs-templates/01-discovery/claim-check-and-vendor-comparison.md)                                                                                                                        | When a project arrives with claims attached          | Designing around a claim nobody tested                                       |
| [Statement of work outline](docs-templates/01-discovery/statement-of-work.md)                                                                                                                                                | Writing a pilot or first-phase scope                 | Disputes over what was in scope and how it is accepted                       |
| [Sizing and estimate model](docs-templates/01-discovery/sizing-and-estimate-model.md), [work breakdown](docs-templates/01-discovery/work-breakdown.csv), [assumptions](docs-templates/01-discovery/assumptions-register.csv) | Building the estimate                                | Totals no one can trace to an input                                          |
| [Project plan and phase gates](docs-templates/01-discovery/project-plan-and-phase-gates.md)                                                                                                                                  | Sequencing the work                                  | Phases that end because the calendar says so                                 |
| [Pilot to production roadmap](docs-templates/01-discovery/pilot-to-production-roadmap.md)                                                                                                                                    | Alongside the pilot scope                            | A pilot that does not measure what the rollout estimate needs                |
| **Product**                                                                                                                                                                                                                  |                                                      |                                                                              |
| [Kickoff brief](docs-templates/02-product/kickoff-brief.md)                                                                                                                                                                  | Starting or redirecting a project                    | Architecture chosen before scope and capacity are known                      |
| [PRD](docs-templates/02-product/prd.md)                                                                                                                                                                                      | Defining a feature or product                        | Requirements that cannot be tested and success that cannot be measured       |
| [Roadmap with gates](docs-templates/02-product/roadmap.md), [gate registry](docs-templates/02-product/gates.yaml)                                                                                                            | Ordering the work into releases                      | Later releases quietly breaking earlier capabilities; ideas silently dropped |
| [Metric marker convention](docs-templates/02-product/metric-marker-convention.md)                                                                                                                                            | Any document that states a number                    | Guesses published as results                                                 |
| [Production concerns checklist](docs-templates/02-product/production-concerns-checklist.md)                                                                                                                                  | Design review before launch                          | Operational blind spots found by users                                       |
| [RAID log](docs-templates/02-product/raid-log.csv)                                                                                                                                                                           | Throughout delivery                                  | Risks named but never owned                                                  |
| **Architecture**                                                                                                                                                                                                             |                                                      |                                                                              |
| [Architecture overview](docs-templates/03-architecture/architecture.md)                                                                                                                                                      | Once the shape is settled, then kept current         | New engineers reading code to learn the structure                            |
| [Decision record](docs-templates/03-architecture/adr-template.md), [index](docs-templates/03-architecture/adr-index.md)                                                                                                      | Any hard-to-reverse decision                         | Decisions undone by people who never knew the reason                         |
| [Design specification](docs-templates/03-architecture/design-spec.md)                                                                                                                                                        | Before building a subsystem                          | Behavior with no test and tests with no requirement                          |
| [Cross-cutting ruling](docs-templates/03-architecture/cross-cutting-ruling.md)                                                                                                                                               | When several designs answer one question differently | The same defect fixed three different ways                                   |
| **Quality and process improvement**                                                                                                                                                                                          |                                                      |                                                                              |
| [DMAIC charter](docs-templates/04-quality/dmaic-charter.md)                                                                                                                                                                  | Improvement projects and pilots                      | Results claimed against a baseline that was never measured                   |
| [DOE plan](docs-templates/04-quality/doe-plan.md), [run sheet](docs-templates/04-quality/doe-run-sheet.csv)                                                                                                                  | Choosing settings or comparing options               | One-factor-at-a-time testing that misses interactions                        |
| [Data collection](docs-templates/04-quality/data-collection-sheet.csv), [time study](docs-templates/04-quality/time-study.csv), [attribute agreement](docs-templates/04-quality/attribute-msa.csv) sheets                    | Field and bench measurement                          | Data that needs cleanup before anyone can analyze it                         |
| [Test strategy](docs-templates/04-quality/test-strategy.md)                                                                                                                                                                  | Early in design                                      | Coverage people assume but nobody has                                        |
| [Validation plan](docs-templates/04-quality/validation-plan.md), [test cases](docs-templates/04-quality/test-cases.csv)                                                                                                      | Lab days, hardware releases, site visits             | Improvising when the first blocking step fails                               |
| [SOP](docs-templates/04-quality/sop-template.md)                                                                                                                                                                             | Any procedure someone else will run                  | Procedures only their author can follow                                      |
| **Operations**                                                                                                                                                                                                               |                                                      |                                                                              |
| [Failure mode guide](docs-templates/05-operations/failure-mode-guide.md), [FMEA sheet](docs-templates/05-operations/fmea.csv)                                                                                                | Before field deployment, then after each incident    | Failures that nobody can see from where they sit                             |
| [Runbook](docs-templates/05-operations/runbook.md)                                                                                                                                                                           | Before on-call starts                                | A 3 a.m. page with no next step                                              |
| [Incident response plan](docs-templates/05-operations/incident-response-plan.md)                                                                                                                                             | Before launch                                        | Containment that needs access nobody has                                     |
| [Root cause analysis](docs-templates/05-operations/rca.md)                                                                                                                                                                   | After every serious incident                         | Blaming the trigger and keeping the cause                                    |
| [Operational readiness review](docs-templates/05-operations/operational-readiness.md)                                                                                                                                        | Before real users depend on the service              | Launching something the team cannot watch or roll back                       |
| [Support model outline](docs-templates/05-operations/support-model.md)                                                                                                                                                       | Before committing to response targets                | Promises the support team cannot measure                                     |
| **Security**                                                                                                                                                                                                                 |                                                      |                                                                              |
| [Threat model](docs-templates/06-security/threat-model.md)                                                                                                                                                                   | At design, and when a surface changes                | Controls assumed but never read in the code                                  |
| [Hardening status](docs-templates/06-security/hardening-status.md)                                                                                                                                                           | Ongoing                                              | Rejected ideas proposed again with no new evidence                           |
| [Security policy](starter/SECURITY.md)                                                                                                                                                                                       | Before the repository is public                      | Vulnerabilities reported in public issues                                    |
| **Release**                                                                                                                                                                                                                  |                                                      |                                                                              |
| [Release checklist](docs-templates/07-release/release-checklist.md)                                                                                                                                                          | Every release                                        | Skipped steps nobody notices                                                 |
| [Release notes](docs-templates/07-release/release-notes.md)                                                                                                                                                                  | Every release                                        | Notes written for the builders instead of the people who run the product     |
| [Test evidence](docs-templates/07-release/test-evidence.md)                                                                                                                                                                  | Every release candidate                              | Readers assuming the tests prove more than they do                           |
| [Changelog convention](docs-templates/07-release/changelog-convention.md)                                                                                                                                                    | From the first commit                                | A changelog that falls behind or lists housekeeping                          |

[docs-templates/README.md](docs-templates/README.md) explains the placeholder and guidance
conventions the templates share.

## Starter repository

[starter/](starter/) is a project skeleton to copy into a new repository:

| File                                                                        | Purpose                                                                                                                        |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `README.md`, `ARCHITECTURE.md`                                              | Short skeletons for the two pages a newcomer reads first                                                                       |
| `CONTRIBUTING.md`                                                           | Setup, the one check command, commit and changelog rules, writing rules                                                        |
| `SECURITY.md`, `SUPPORT.md`, `CODE_OF_CONDUCT.md`                           | Reporting channels and expectations                                                                                            |
| `CHANGELOG.md`                                                              | Keep a Changelog layout                                                                                                        |
| `docs/adr/`                                                                 | Decision record index, template, and ADR-0001                                                                                  |
| `.github/`                                                                  | Issue forms, pull request template, Dependabot, and a CI workflow with actions pinned to commit SHAs and read-only permissions |
| `scripts/check.sh`                                                          | The one command run locally and in CI                                                                                          |
| `scripts/check-metric-markers.sh`                                           | Fails a release that still owes a promised number                                                                              |
| `.editorconfig`, `.gitattributes`, `.gitignore`, `.markdownlint-cli2.jsonc` | Editor and lint settings                                                                                                       |

## How to adopt

- **One template:** copy the file into your repository or document store, replace the
  placeholders in braces, and delete the guidance quotes and the worked example.
- **A new repository:** copy the contents of `starter/` into it (`cp -r starter/. ../my-project/`),
  replace `OWNER/REPO` and the placeholders, add a license, and run `sh scripts/check.sh`.
- **The whole set:** use this repository as a GitHub template, then delete what you do not need.
- **Word output:** [tools/render-docx](tools/render-docx/README.md) renders any template to a
  `.docx`, so the Markdown stays the source.

## How I use these

I lead engineering on IoT and operations projects, from pre-sales scoping through field support.
These templates are the structures I return to on that work. I rewrote them from scratch for
this repository, so they hold no client material; the worked examples use a made-up company,
Acme Logistics, and a made-up trailer sensor. I start most projects with the scoping
questionnaire and the kickoff brief, write a decision record whenever a choice will be hard to
undo, and keep the failure mode guide open during pilots. They are a starting point, and I change
them when a project shows me something they missed.

## Checks

The [docs workflow](.github/workflows/docs.yml) lints every Markdown file with markdownlint-cli2,
checks links with lychee, runs the starter's check script, and renders every template with the
Word renderer. Run the lint locally with `npx markdownlint-cli2 "**/*.md"`.

## Contributing

Issues and pull requests are welcome. Changes follow the
[writing standard](docs-templates/00-conventions/writing-standard.md): plain language, no
invented numbers, and guidance that says what good looks like and why.

## License

[MIT](LICENSE). Copyright (c) 2026 John Hall.
