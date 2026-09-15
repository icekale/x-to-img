#!/usr/bin/env python3
from pathlib import Path
import re

root = Path(__file__).resolve().parents[1]
user = root / "x-to-img.user.js"
vendor_path = root / "vendor" / "html-to-image.js"
start = "/* bundled html-to-image@1.11.13 (MIT, https://github.com/bubkoo/html-to-image) */"
end = "/* /bundled */"

vendor = re.sub(r"\n?//# sourceMappingURL=.*\n?", "\n", vendor_path.read_text()).strip()
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
