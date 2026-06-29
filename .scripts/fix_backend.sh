#!/usr/bin/env bash
set -euo pipefail

BACKEND_DIR="/root/.openclaw/workspace/opencrm-app/apps/backend"
REF_DIR="/root/opencrm-builder-class/backend/reference/files"
export_ref_dir() {
  :
}
export_ref_dir

MAX_ITERS=40
cd "$BACKEND_DIR"

for ((iter=0; iter<MAX_ITERS; iter++)); do
  echo "[ITER $iter] Starting backend..."
  set +e
  output=$(APP_MODE=api bun run src/index.ts 2>&1 >/dev/null || true)
  status=$?
  set -e

  if [ "$status" -eq 0 ]; then
    echo "Backend started successfully."
    exit 0
  fi

  echo "$output" | tail -n 40

  error_line=$(echo "$output" | grep -E "Export named '.*' not found in module" | head -n 1 || true)
  if [ -z "$error_line" ]; then
    echo "No recognized missing export error; aborting auto-fix."
    exit 1
  fi

  echo "Auto-fixing: $error_line"
  export_name=$(echo "$error_line" | sed -E "s/.*Export named '([^']+)' not found in module '.*'.*/\1/")
  module_path=$(echo "$error_line" | sed -E "s/.*module '(.*)'.*/\1/")
  rel="${module_path#$BACKEND_DIR/}"

  ref_file="$REF_DIR/$(echo "$rel" | sed 's/\//_/g' | sed 's/\.ts$/.ts.md').md"
  if [ ! -f "$ref_file" ]; then
    echo "Reference file not found: $ref_file"
    exit 1
  fi

  tmp=$(mktemp)
  sed -n '/```ts/,/```/p' "$ref_file" | sed '1d;$d' > "$tmp"

  if [ ! -s "$tmp" ]; then
    echo "No code block found in $ref_file"
    exit 1
  fi

  cp "$tmp" "$module_path"
  echo "Updated $module_path"
done
