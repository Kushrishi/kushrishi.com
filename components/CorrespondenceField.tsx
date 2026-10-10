"use client";
import { useState } from "react";

const grid = Array.from({ length: 117 }, (_, i) => {
  const col = i % 13,
    row = Math.floor(i / 13);
  const x = 36 + col * 36,
    y = 44 + row * 36;
  const weight = Math.exp(-((col - 6) ** 2 + (row - 4) ** 2) / 15);
  return {
    x,
    y,
    wx: weight * 0.85,
    wy: weight * Math.sin(col * 0.5) * 0.6,
  };
});

function circlePath(x: number, y: number, radius: number) {
  return `M${x - radius},${y}a${radius},${radius} 0 1,0 ${radius * 2},0a${radius},${radius} 0 1,0 ${-radius * 2},0z`;
}

const gridPath = [
  ...Array.from({ length: 9 }, (_, r) => `M36,${44 + r * 36}H468`),
  ...Array.from({ length: 13 }, (_, c) => `M${36 + c * 36},44V332`),
].join("");
const referencePath = grid.map((p) => circlePath(p.x, p.y, 2)).join("");

/** A schematic correspondence field, not an experimental result. */
export function CorrespondenceField() {
  const [amount, setAmount] = useState(55);
  const points = grid.map((p) => ({
    ...p,
    dx: p.wx * amount,
    dy: p.wy * amount,
  }));
  return (
    <figure className="field-figure">
      <div className="field-label">
        <span>Spatial correspondence</span>
        <span>01 / 03</span>
      </div>
      <svg
        viewBox="0 0 510 390"
        role="img"
        aria-label="Conceptual coordinate grid showing reference points and displaced estimates"
      >
        <path d={gridPath} fill="none" stroke="currentColor" opacity=".13" />
        <path d={referencePath} fill="currentColor" opacity=".25" />
        <path
          d={points
            .map((p) => `M${p.x},${p.y}L${p.x + p.dx},${p.y + p.dy}`)
            .join("")}
          fill="none"
          stroke="currentColor"
          opacity=".4"
        />
        <path
          d={points
            .filter((_, i) => i !== 58)
            .map((p) => circlePath(p.x + p.dx, p.y + p.dy, 2.5))
            .join("")}
          fill="currentColor"
        />
        <circle
          cx={points[58].x + points[58].dx}
          cy={points[58].y + points[58].dy}
          r="6"
          fill="#eeaa50"
        />
        <circle
          cx={points[58].x + points[58].dx}
          cy={points[58].y + points[58].dy}
          r="28"
          fill="none"
          stroke="#eeaa50"
          strokeDasharray="3 5"
        />
        <text
          x="36"
          y="375"
          fill="currentColor"
          fontSize="12"
          fontFamily="monospace"
        >
          REFERENCE / ESTIMATE / DISPLACEMENT
        </text>
      </svg>
      <div className="field-control">
        <label htmlFor="displacement">Explore displacement</label>
        <input
          id="displacement"
          type="range"
          min="0"
          max="90"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>
      <figcaption>
        A geometric illustration. Research results appear below.
      </figcaption>
    </figure>
  );
}
