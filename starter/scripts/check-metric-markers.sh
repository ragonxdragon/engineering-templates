#!/bin/sh
# Metric marker check.
#
# A metric marker holds a number a document promises before it is measured:
#
#     <!--METRIC:name-->TBD<!--/METRIC-->
#     <!--METRIC:name@v1.2.0-->TBD<!--/METRIC-->
#
# The second form names the release that owes the number.
#
# Report mode (default) lists unfilled markers and exits 0, unless a marker
# is malformed or one metric name carries two different values.
#
# Release mode (--release X.Y.Z) also fails on any unfilled marker that is
# owed at or before X.Y.Z. A marker that names no release is owed by every
# release.
#
# Usage:
#     sh scripts/check-metric-markers.sh [--release X.Y.Z] [path ...]
#
# With no path, it checks the Markdown files git knows about (tracked, or
# untracked and not ignored), or every *.md under the current directory
# outside a git checkout.
#
# Lines inside fenced code blocks are skipped, so a document can show the
# marker syntax without owing a number.

set -eu

release=""
if [ "${1:-}" = "--release" ]; then
  if [ -z "${2:-}" ]; then
    echo "usage: $0 [--release X.Y.Z] [path ...]" >&2
    exit 2
  fi
  release=${2#v}
  shift 2
fi

list_files() {
  if [ "$#" -gt 0 ]; then
    find "$@" -type f -name '*.md'
  elif git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    git ls-files --cached --others --exclude-standard -- '*.md' | sort -u
  else
    find . -type f -name '*.md' -not -path './.git/*' -not -path '*/node_modules/*'
  fi
}

# awk reads the file list on stdin and opens each file itself, so paths
# with spaces survive.
list_files "$@" | awk -v release="$release" '
function version_le(a, b,   x, y, i) {
  # Numeric comparison field by field, so 0.10.0 sorts after 0.9.0.
  split(a, x, "."); split(b, y, ".")
  for (i = 1; i <= 3; i++) {
    if ((x[i] + 0) < (y[i] + 0)) return 1
    if ((x[i] + 0) > (y[i] + 0)) return 0
  }
  return 1
}
function count(s, t,   n, p) {
  n = 0
  while ((p = index(s, t)) > 0) { n++; s = substr(s, p + length(t)) }
  return n
}
{
  file = $0
  opens = 0; closes = 0; good = 0; fenced = 0
  while ((getline line < file) > 0) {
    if (line ~ /^[ 	]*(```|~~~)/) { fenced = !fenced; continue }
    if (fenced) continue
    opens += count(line, "<!--METRIC:")
    closes += count(line, "<!--/METRIC-->")
    rest = line
    while (match(rest, /<!--METRIC:[A-Za-z0-9_]+(@v[0-9]+\.[0-9]+\.[0-9]+)?-->[^<]*<!--\/METRIC-->/)) {
      marker = substr(rest, RSTART, RLENGTH)
      rest = substr(rest, RSTART + RLENGTH)
      good++
      head = substr(marker, 12)
      cut = index(head, "-->")
      label = substr(head, 1, cut - 1)
      value = substr(head, cut + 3)
      value = substr(value, 1, length(value) - 14)
      at = index(label, "@")
      if (at > 0) { name = substr(label, 1, at - 1); owed_at = substr(label, at + 2) }
      else        { name = label; owed_at = "" }
      total++
      if (!((name, value) in seen_value)) {
        seen_value[name, value] = 1
        distinct[name]++
        values[name] = values[name] " [" value "]"
      }
      if (value == "TBD" || value == "tbd" || value == "" || value == "?") {
        unfilled++
        if (release == "") {
          printf "UNFILLED %s: %s%s\n", file, name, (owed_at == "" ? "" : " (owed at v" owed_at ")")
        } else if (owed_at == "" || version_le(owed_at, release)) {
          printf "OWED     %s: %s\n", file, name
          owed++
        } else {
          printf "DEFERRED %s: %s arrives at v%s\n", file, name, owed_at
        }
      }
    }
  }
  close(file)
  if (opens != good || closes != good) {
    printf "MALFORMED %s: %d opening tags, %d closing tags, %d complete markers\n", file, opens, closes, good > "/dev/stderr"
    malformed++
  }
}
END {
  for (name in distinct) {
    if (distinct[name] > 1) {
      printf "CONFLICT metric %s has different values:%s\n", name, values[name] > "/dev/stderr"
      conflicts++
    }
  }
  printf "%d markers, %d unfilled", total + 0, unfilled + 0
  if (release != "") printf ", %d owed at %s", owed + 0, release
  printf "\n"
  if (malformed + conflicts > 0) exit 1
  if (release != "" && owed + 0 > 0) {
    print "FAIL: measure the owed values, remove the claims, or name a later release." > "/dev/stderr"
    exit 1
  }
}
'
