import subprocess
import sys
import os
from pathlib import Path


def convert_jpg_to_webp(input_path: Path, output_path: Path):

    try:
        subprocess.run(["magick", str(input_path),  "-quality", "95", "-define","webp:lossless=false", "-define","webp:method=6", str(output_path)], check=True)
        print(f"Converted {input_path} to {output_path}")
    except subprocess.CalledProcessError as e:
        print(f"Error converting {input_path} to {output_path}: {e}")
    except FileNotFoundError:
        print(f"ImageMagick's 'magick' command is not installed. Please install it to use this script.")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")


def convert_all_jpgs(input_dir: Path, output_dir: Path):

    if not input_dir.exists() or not input_dir.is_dir():
        print(f"Input directory '{input_dir}' does not exist or is not a directory.")
        sys.exit(1)

    output_dir.mkdir(parents=True, exist_ok=True)
    counter = 0
    for file in os.listdir(input_dir):
        if file.lower().endswith(".jpg") or file.lower().endswith(".jpeg"):
            counter +=1
            input_path = Path(input_dir) / file
            output_path = output_dir / f"{counter}.webp"
            convert_jpg_to_webp(input_path, output_path)
        else:
            print(f"Skipping non-JPG file: {file}")


if __name__ == "__main__":
    input_dir = Path("jpg_files")
    output_dir = Path("site/assets/img/pictures")

    convert_all_jpgs(input_dir, output_dir)
