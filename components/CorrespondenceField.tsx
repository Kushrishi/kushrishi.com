"use client";
import { useState } from "react";

/** A schematic correspondence field, not an experimental result. */
export function CorrespondenceField() {
  const [amount, setAmount] = useState(55);
  const points = Array.from({ length: 117 }, (_, i) => {
    const col = i % 13,
      row = Math.floor(i / 13);
    const x = 36 + col * 36,
      y = 44 + row * 36;
    const weight = Math.exp(-((col - 6) ** 2 + (row - 4) ** 2) / 15);
    return {
      x,
      y,
      dx: weight * amount * 0.85,
      dy: weight * Math.sin(col * 0.5) * amount * 0.6,
    };
  });
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
        <g fill="none" stroke="currentColor" opacity=".13">
          {Array.from({ length: 9 }, (_, r) => (
            <path key={`r${r}`} d={`M36 ${44 + r * 36}H468`} />
          ))}
          {Array.from({ length: 13 }, (_, c) => (
            <path key={`c${c}`} d={`M${36 + c * 36} 44V332`} />
          ))}
        </g>
        {points.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="2" fill="currentColor" opacity=".25" />
            <line
              x1={p.x}
              y1={p.y}
              x2={p.x + p.dx}
              y2={p.y + p.dy}
              stroke="currentColor"
              opacity=".4"
            />
            <circle
              cx={p.x + p.dx}
              cy={p.y + p.dy}
              r={i === 58 ? 6 : 2.5}
              fill={i === 58 ? "#eeaa50" : "currentColor"}
            />
          </g>
        ))}
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
