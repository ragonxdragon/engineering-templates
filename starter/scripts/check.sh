#!/bin/sh
# The one command that checks this repository. CI runs exactly this, so a
# green run on a laptop and a green run in CI mean the same thing.
#
# Usage: sh scripts/check.sh

set -eu
cd "$(dirname "$0")/.."

echo "== Markdown lint"
npx --yes markdownlint-cli2@0.23.3 "**/*.md"

echo "== Metric markers"
sh scripts/check-metric-markers.sh

echo "== Build and test"
# Replace this block with the project's own build and test commands, for
# example `make test`, `npm test`, or `uv run pytest`.
echo "No build or test step is configured yet."
