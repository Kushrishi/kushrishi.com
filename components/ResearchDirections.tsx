"use client";

import { useState } from "react";

const directions = [
  {
    index: "01",
    title: "Reliable ML & Evaluation",
    description: "Model regressions, causal verification, uncertainty, and reproducible evaluation.",
    kind: "eval",
  },
  {
    index: "02",
    title: "Sensing, Estimation & Localization",
    description: "PNT/GNSS, state estimation, localization, sensor fusion, and measurement systems.",
    kind: "pnt",
  },
  {
    index: "03",
    title: "Scientific & Medical Systems",
    description: "Medical imaging, registration uncertainty, controlled validation, and scientific computing.",
    kind: "multi",
  },
] as const;

function DirectionVisual({ kind }: { kind: (typeof directions)[number]["kind"] }) {
  if (kind === "eval") {
    return (
      <svg viewBox="0 0 220 64" aria-hidden="true">
        <path className="dir-axis" d="M7 55H214M12 59V8" />
        <path className="dir-accent" d="M12 48 C46 42 57 16 88 29 C117 43 131 17 160 22 C184 26 193 39 213 31" />
        <circle className="dir-failure" cx="148" cy="29" r="4" />
        <circle className="dir-point" cx="74" cy="27" r="3" />
      </svg>
    );
  }
  if (kind === "multi") {
    return (
      <svg viewBox="0 0 220 64" aria-hidden="true">
        <path className="dir-stream s1" d="M8 11 C50 11 68 28 101 31" />
        <path className="dir-stream s2" d="M8 32 C50 32 68 32 101 32" />
        <path className="dir-stream s3" d="M8 53 C50 53 68 36 101 33" />
        <circle className="dir-fusion" cx="112" cy="32" r="10" />
        <path className="dir-accent" d="M122 32H212" />
        <circle className="dir-point" cx="186" cy="32" r="3" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 220 64" aria-hidden="true">
      <circle className="dir-ring" cx="114" cy="34" r="11" />
      <circle className="dir-ring outer" cx="114" cy="34" r="23" />
      <circle className="dir-point" cx="114" cy="34" r="3" />
      <path className="dir-link" d="M15 10L114 34L199 9M24 56L114 34L205 53" />
      <circle className="dir-sat" cx="15" cy="10" r="3" />
      <circle className="dir-sat" cx="199" cy="9" r="3" />
      <circle className="dir-sat" cx="24" cy="56" r="3" />
      <circle className="dir-sat" cx="205" cy="53" r="3" />
    </svg>
  );
}

export function ResearchDirections() {
  const [active, setActive] = useState(0);
  return (
    <div className="directions-list interactive-directions">
      {directions.map((direction, index) => (
        <button
          type="button"
          className={`direction ${active === index ? "active" : ""}`}
          key={direction.title}
          onMouseEnter={() => setActive(index)}
          onFocus={() => setActive(index)}
          onClick={() => setActive(index)}
        >
          <span>{direction.index}</span>
          <h3>{direction.title}</h3>
          <p>{direction.description}</p>
          <div className="direction-visual"><DirectionVisual kind={direction.kind} /></div>
        </button>
      ))}
    </div>
  );
}
