#!/bin/sh
set -e
cd "$(dirname "$0")"
cp -f ../x-to-img.user.js ./x-to-img.user.js
python3 ./make-icons.py
python3 - <<'PY'
import json
import re
from pathlib import Path

script = Path("x-to-img.user.js").read_text(encoding="utf-8")
match = re.search(r"^// @version\s+(\d+(?:\.\d+){0,3})\s*$", script, re.MULTILINE)
if not match:
    raise SystemExit("Could not read a Chrome-compatible @version from x-to-img.user.js")

path = Path("manifest.json")
manifest = json.loads(path.read_text(encoding="utf-8"))
manifest["version"] = match.group(1)
path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
PY
node --check ./shim.js
node --check ./bridge.js
node --check ./popup.js
echo "extension ready: $(pwd)"
