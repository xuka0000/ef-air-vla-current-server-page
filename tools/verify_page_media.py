from __future__ import annotations

import json
from pathlib import Path

import cv2
from PIL import Image, ImageSequence


ROOT = Path(__file__).resolve().parents[1]
CANDIDATE_JSON = ROOT / "data" / "candidate_iterations_20260628.json"
MIN_SECONDS = 3.0


def video_seconds(path: Path) -> float:
    capture = cv2.VideoCapture(str(path))
    if not capture.isOpened():
        raise AssertionError(f"cannot open video: {path}")
    fps = float(capture.get(cv2.CAP_PROP_FPS) or 0.0)
    frames = float(capture.get(cv2.CAP_PROP_FRAME_COUNT) or 0.0)
    capture.release()
    if fps <= 0 or frames <= 0:
        raise AssertionError(f"invalid video timing: {path}")
    return frames / fps


def gif_seconds(path: Path) -> float:
    with Image.open(path) as image:
        total_ms = 0.0
        frames = 0
        for frame in ImageSequence.Iterator(image):
            total_ms += float(frame.info.get("duration", image.info.get("duration", 0)))
            frames += 1
    if frames <= 0 or total_ms <= 0:
        raise AssertionError(f"invalid gif timing: {path}")
    return total_ms / 1000.0


def media_seconds(item: dict) -> float:
    rel_path = item.get("display_path") or item.get("path")
    if not rel_path:
        raise AssertionError(f"media row missing path: {item}")
    path = ROOT / rel_path
    if not path.exists():
        raise AssertionError(f"missing media file: {rel_path}")
    suffix = path.suffix.lower()
    if suffix == ".mp4":
        measured = video_seconds(path)
    elif suffix == ".gif":
        measured = gif_seconds(path)
    else:
        raise AssertionError(f"unsupported display media suffix: {rel_path}")
    declared = item.get("duration_sec")
    if declared is None:
        raise AssertionError(f"media row missing duration_sec: {rel_path}")
    if abs(float(declared) - measured) > 0.15:
        raise AssertionError(f"duration mismatch for {rel_path}: declared {declared}, measured {measured:.3f}")
    return measured


def main() -> None:
    data = json.loads(CANDIDATE_JSON.read_text(encoding="utf-8"))
    media = data.get("analysis_outputs", {}).get("media", [])
    display_rows = [item for item in media if item.get("display") is True]
    if len(display_rows) < 3:
        raise AssertionError(f"expected at least 3 display media rows, found {len(display_rows)}")
    failures: list[str] = []
    for item in display_rows:
        seconds = media_seconds(item)
        if seconds < MIN_SECONDS:
            failures.append(f"{item.get('run_id')} episode {item.get('episode')} is {seconds:.3f}s")
    if failures:
        raise AssertionError("display media shorter than 3s: " + "; ".join(failures))
    print(f"verified {len(display_rows)} display media rows at >= {MIN_SECONDS:.1f}s")


if __name__ == "__main__":
    main()
