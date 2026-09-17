#!/usr/bin/env python3
from pathlib import Path
import hashlib
import re

root = Path(__file__).resolve().parents[1]
user = root / "x-to-img.user.js"
vendor_path = root / "vendor" / "html-to-image.js"
start = "/* bundled html-to-image@1.11.13 (MIT, https://github.com/bubkoo/html-to-image) */"
end = "/* /bundled */"
EXPECTED = "64c4031890f2a8032e430449847c5aaab7e6ac3ba392fdd42ae0d01509940d21"

vendor = re.sub(r"\n?//# sourceMappingURL=.*\n?", "\n", vendor_path.read_text()).strip()
digest = hashlib.sha256(vendor.encode()).hexdigest()
if digest != EXPECTED:
    raise SystemExit(f"vendor hash mismatch: {digest}")
text = user.read_text()
text = re.sub(
    r"/\* bundled html-to-image@1\.11\.13[^*]*\*/[\s\S]*?" + re.escape(end) + r"\n?",
    "",
    text,
    count=1,
)
if "// ==/UserScript==\n" not in text:
    raise SystemExit("missing UserScript header")
header, rest = text.split("// ==/UserScript==\n", 1)
rest = rest.lstrip("\n")
block = f"{start}\n{vendor}\n{end}\n\n"
user.write_text(header + "// ==/UserScript==\n\n" + block + rest)
print(f"embedded {len(vendor)} bytes into {user.name}")
