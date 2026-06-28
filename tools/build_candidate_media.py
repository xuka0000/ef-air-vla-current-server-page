from __future__ import annotations

from pathlib import Path

import cv2
import numpy as np
from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
VIDEO_DIR = ROOT / "assets" / "videos"
IMAGE_DIR = ROOT / "assets" / "images"
FPS = 10
DURATION_SECONDS = 4
TARGET_FRAMES = FPS * DURATION_SECONDS
GIF_WIDTH = 720


CLIPS = [
    {
        "source": "ab_timed_phase_episode_2.mp4",
        "video": "ab_timed_phase_episode_2_loop4s.mp4",
        "gif": "ab_timed_phase_episode_2_loop4s.gif",
    },
    {
        "source": "d1_state_gate_speed005_episode_1.mp4",
        "video": "d1_state_gate_speed005_episode_1_loop4s.mp4",
        "gif": "d1_state_gate_speed005_episode_1_loop4s.gif",
    },
    {
        "source": "d3_state_gate_speed004_episode_1.mp4",
        "video": "d3_state_gate_speed004_episode_1_loop4s.mp4",
        "gif": "d3_state_gate_speed004_episode_1_loop4s.gif",
    },
    {
        "source": "d4_gate_transfer_episode_2.mp4",
        "video": "d4_gate_transfer_episode_2_loop4s.mp4",
        "gif": "d4_gate_transfer_episode_2_loop4s.gif",
    },
    {
        "source": "d5_lift_standoff_episode_2.mp4",
        "video": "d5_lift_standoff_episode_2_loop4s.mp4",
        "gif": "d5_lift_standoff_episode_2_loop4s.gif",
    },
    {
        "source": "d5_20_lift_standoff_episode_2.mp4",
        "video": "d5_20_lift_standoff_episode_2_loop4s.mp4",
        "gif": "d5_20_lift_standoff_episode_2_loop4s.gif",
    },
    {
        "source": "d6_guard2_episode_5.mp4",
        "video": "d6_guard2_episode_5_loop4s.mp4",
        "gif": "d6_guard2_episode_5_loop4s.gif",
    },
    {
        "source": "d7_release22_episode_2.mp4",
        "video": "d7_release22_episode_2_loop4s.mp4",
        "gif": "d7_release22_episode_2_loop4s.gif",
    },
    {
        "source": "d8_reset_normalized_episode_2.mp4",
        "video": "d8_reset_normalized_episode_2_loop4s.mp4",
        "gif": "d8_reset_normalized_episode_2_loop4s.gif",
    },
    {
        "source": "d9_close050_070_episode_2.mp4",
        "video": "d9_close050_070_episode_2_loop4s.mp4",
        "gif": "d9_close050_070_episode_2_loop4s.gif",
    },
]


def read_frames(path: Path) -> list[np.ndarray]:
    capture = cv2.VideoCapture(str(path))
    if not capture.isOpened():
        raise RuntimeError(f"could not open {path}")
    frames: list[np.ndarray] = []
    while True:
        ok, frame = capture.read()
        if not ok:
            break
        frames.append(frame)
    capture.release()
    if not frames:
        raise RuntimeError(f"no frames in {path}")
    return frames


def loop_frames(frames: list[np.ndarray]) -> list[np.ndarray]:
    return [frames[index % len(frames)] for index in range(TARGET_FRAMES)]


def write_video(path: Path, frames: list[np.ndarray]) -> None:
    height, width = frames[0].shape[:2]
    writer = cv2.VideoWriter(str(path), cv2.VideoWriter_fourcc(*"mp4v"), FPS, (width, height))
    if not writer.isOpened():
        raise RuntimeError(f"could not write {path}")
    for frame in frames:
        writer.write(frame)
    writer.release()
    if path.stat().st_size <= 0:
        raise RuntimeError(f"empty output video {path}")


def to_gif_frame(frame: np.ndarray) -> Image.Image:
    rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    image = Image.fromarray(rgb)
    if image.width > GIF_WIDTH:
        height = int(round(image.height * GIF_WIDTH / image.width))
        image = image.resize((GIF_WIDTH, height), Image.Resampling.LANCZOS)
    return image


def write_gif(path: Path, frames: list[np.ndarray]) -> None:
    gif_frames = [to_gif_frame(frame) for frame in frames]
    first, rest = gif_frames[0], gif_frames[1:]
    first.save(path, save_all=True, append_images=rest, duration=100, loop=0, optimize=True)
    if path.stat().st_size <= 0:
        raise RuntimeError(f"empty output gif {path}")


def main() -> None:
    for clip in CLIPS:
        source = VIDEO_DIR / clip["source"]
        frames = loop_frames(read_frames(source))
        video_path = VIDEO_DIR / clip["video"]
        gif_path = IMAGE_DIR / clip["gif"]
        write_video(video_path, frames)
        write_gif(gif_path, frames)
        print(f"wrote {video_path.relative_to(ROOT)}")
        print(f"wrote {gif_path.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
