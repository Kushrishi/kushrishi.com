"""Render the accepted M4/M5 publication panels from public checked-in values.

No registration, inference, calibration or new statistical calculation.
M6 is a separate cohort and is not an input to these figures.
"""
import argparse
import json
from pathlib import Path

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt

ROOT = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("--output-dir", type=Path,
                    default=ROOT / "public/projects/publication")
args = parser.parse_args()
source = ROOT / "data/truemargin-publication.json"
original_bytes = source.read_bytes()
values = json.loads(original_bytes)
spread, ice, cases = (values[key] for key in
                      ("anatomy_spread", "anatomy_ice", "case_spread"))
assert len(spread) == len(ice) == len(values["anatomy_ids"]) == 10
assert len(cases) == len(values["case_order"]) == 30
assert values["case_order"] == [[anatomy, str(case)]
                               for anatomy in values["anatomy_ids"]
                               for case in range(3)]
assert sum(value < 0 for value in cases) == 6
args.output_dir.mkdir(parents=True, exist_ok=True)
plt.rcParams.update({"font.family": "DejaVu Sans", "font.size": 20,
                     "axes.spines.top": False, "axes.spines.right": False,
                     "svg.fonttype": "none", "svg.hashsalt": "truemargin-m4-m5-publication"})
for name in ("association", "cases"):
    fig, ax = plt.subplots(figsize=(4, 3.6))
    fig.subplots_adjust(left=.23, right=.97, bottom=.15, top=.96)
    if name == "association":
        for index, (data, color) in enumerate(((spread, "#137d79"), (ice, "#69798e"))):
            artist = ax.scatter([index] * len(data), data, s=60, color=color, alpha=.8)
            assert artist.get_offsets()[:, 1].tolist() == data
        ax.set_xlim(-.45, 1.45)
        ax.set_xticks([])
    else:
        bars = ax.bar(range(1, 31), cases,
                      color=["#b94848" if value < 0 else "#137d79" for value in cases])
        assert [bar.get_height() for bar in bars] == cases
        ax.set_xlim(.1, 30.9)
        ax.set_xticks([1, 5, 10, 15, 20, 25, 30])
        ax.tick_params(axis="x", labelsize=15)
    ax.set_ylim(-1, 1)
    ax.set_yticks([-1, -.5, 0, .5, 1])
    ax.axhline(0, color="#8d98a5", lw=1)
    ax.grid(axis="y", alpha=.12)
    ax.set_axisbelow(True)
    for extension in ("png", "svg"):
        metadata = {"Date": None} if extension == "svg" else {}
        fig.savefig(args.output_dir / f"truemargin-{name}-publication.{extension}",
                    dpi=200, metadata=metadata)
    plt.close(fig)
assert source.read_bytes() == original_bytes
print("Rendered M4/M5 panels: exact 10 spread, 10 ICE and 30 case values/order preserved.")
