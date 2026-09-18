#!/usr/bin/env python3
import struct
import zlib
from pathlib import Path


def chunk(tag: bytes, data: bytes) -> bytes:
    return struct.pack(">I", len(data)) + tag + data + struct.pack(">I", zlib.crc32(tag + data) & 0xFFFFFFFF)


def write_png(path: Path, size: int, rgba) -> None:
    raw = b""
    for y in range(size):
        raw += b"\x00"
        for x in range(size):
            raw += bytes(rgba(x, y, size))
    path.write_bytes(
        b"\x89PNG\r\n\x1a\n"
        + chunk(b"IHDR", struct.pack(">IIBBBBB", size, size, 8, 6, 0, 0, 0))
        + chunk(b"IDAT", zlib.compress(raw, 9))
        + chunk(b"IEND", b"")
    )


def icon(x: int, y: int, size: int) -> tuple[int, int, int, int]:
    s = size / 128
    def inside_round_rect(px, py, left, top, right, bottom, radius):
        if left + radius <= px <= right - radius and top <= py <= bottom:
            return True
        if left <= px <= right and top + radius <= py <= bottom - radius:
            return True
        corners = (
            (left + radius, top + radius),
            (right - radius, top + radius),
            (left + radius, bottom - radius),
            (right - radius, bottom - radius),
        )
        return any((px - cx) ** 2 + (py - cy) ** 2 <= radius**2 for cx, cy in corners)

    if not inside_round_rect(x, y, 8 * s, 8 * s, 120 * s, 120 * s, 28 * s):
        return (0, 0, 0, 0)
    if not inside_round_rect(x, y, 14 * s, 14 * s, 114 * s, 114 * s, 22 * s):
        return (29, 155, 240, 255)
    if inside_round_rect(x, y, 34 * s, 32 * s, 94 * s, 86 * s, 10 * s):
        if y <= 48 * s:
            return (232, 244, 253, 255)
        return (186, 221, 248, 255)
    if (x - 48 * s) ** 2 + (y - 46 * s) ** 2 <= (7 * s) ** 2:
        return (29, 155, 240, 255)
    if 38 * s <= x <= 90 * s and 96 * s <= y <= 104 * s:
        return (29, 155, 240, 255)
    return (255, 255, 255, 255)


def main() -> None:
    out = Path(__file__).resolve().parent / "icons"
    out.mkdir(exist_ok=True)
    for size in (16, 32, 48, 128):
        write_png(out / f"{size}.png", size, icon)


if __name__ == "__main__":
    main()
