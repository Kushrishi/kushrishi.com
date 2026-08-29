"use client";

import { useMemo, useState } from "react";

function AutonomyPreview() {
  const [mode, setMode] = useState<"plan" | "localize">("localize");

  const observations = useMemo(
    () => [
      [48, 128], [74, 113], [102, 103], [131, 91], [160, 82], [190, 73], [220, 64], [248, 57],
      [277, 49], [306, 45], [334, 38], [363, 34],
    ],
    [],
  );

  return (
    <div className="project-preview autonomy-preview" role="region" aria-label="Interactive autonomy simulation preview">
      <div className="preview-toolbar">
        <span>LIVE SYSTEM PREVIEW</span>
        <div className="preview-toggle" role="group" aria-label="Autonomy preview mode">
          <button className={mode === "plan" ? "active" : ""} aria-pressed={mode === "plan"} onClick={() => setMode("plan")} type="button">PLAN</button>
          <button className={mode === "localize" ? "active" : ""} aria-pressed={mode === "localize"} onClick={() => setMode("localize")} type="button">LOCALIZE</button>
        </div>
      </div>
      <svg viewBox="0 0 410 180" role="img" aria-label={mode === "plan" ? "Path planning visualization" : "Localization visualization"}>
        <defs>
          <pattern id="autonomy-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(157,249,255,.09)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="410" height="180" fill="url(#autonomy-grid)" />
        {mode === "plan" ? (
          <>
            <g className="terrain-blocks">
              <rect x="88" y="42" width="60" height="40" rx="2" />
              <rect x="207" y="96" width="58" height="42" rx="2" />
              <rect x="304" y="38" width="45" height="70" rx="2" />
            </g>
            <path className="planned-path ghost" d="M32 146 C70 144 71 105 118 104 C179 103 170 42 222 45 C277 48 275 150 374 34" />
            <path className="planned-path" d="M32 146 C70 144 71 105 118 104 C179 103 170 42 222 45 C277 48 275 150 374 34" />
            <circle className="preview-start" cx="32" cy="146" r="5" />
            <circle className="preview-goal" cx="374" cy="34" r="6" />
            <text x="26" y="166">START</text>
            <text x="351" y="24">GOAL</text>
          </>
        ) : (
          <>
            <path className="truth-path" d="M42 136 C92 112 119 118 163 83 C211 44 247 66 302 46 C336 34 360 36 382 28" />
            <path className="estimate-path" d="M47 132 C93 111 123 113 166 81 C211 49 247 63 300 49 C335 39 358 39 381 30" />
            {observations.map(([x, y], i) => (
              <circle className="noisy-observation" cx={x + ((i % 3) - 1) * 4} cy={y + ((i % 4) - 2) * 3} r="2.2" key={`${x}-${y}`} />
            ))}
            <circle className="estimate-point" cx="300" cy="49" r="5" />
            <circle className="uncertainty-ring" cx="300" cy="49" r="18" />
            <circle className="uncertainty-ring outer" cx="300" cy="49" r="30" />
            <text x="18" y="22">RMSE 0.42 m</text>
            <text x="298" y="82">x̂</text>
          </>
        )}
      </svg>
      <div className="preview-readout">
        <span>{mode === "plan" ? "A* / weighted terrain" : "GNSS-inspired measurements"}</span>
        <span>{mode === "plan" ? "replanning: enabled" : "Kalman estimate: tracking"}</span>
      </div>
    </div>
  );
}

function CareBridgePreview() {
  const [step, setStep] = useState<"retrieve" | "ground" | "validate">("ground");
  return (
    <div className="project-preview carebridge-preview" role="region" aria-label="Interactive source-grounded workflow preview">
      <div className="preview-toolbar">
        <span>SOURCE-GROUNDED WORKFLOW</span>
        <span className="preview-live-dot">SYNTHETIC</span>
      </div>
      <div className="carebridge-flow">
        <button className={step === "retrieve" ? "active" : ""} aria-pressed={step === "retrieve"} onClick={() => setStep("retrieve")} type="button">
          <span>01</span><strong>RETRIEVE</strong><small>3 source records</small>
        </button>
        <i>→</i>
        <button className={step === "ground" ? "active" : ""} aria-pressed={step === "ground"} onClick={() => setStep("ground")} type="button">
          <span>02</span><strong>GROUND</strong><small>claim → evidence</small>
        </button>
        <i>→</i>
        <button className={step === "validate" ? "active" : ""} aria-pressed={step === "validate"} onClick={() => setStep("validate")} type="button">
          <span>03</span><strong>VALIDATE</strong><small>structured output</small>
        </button>
      </div>
      <div className="carebridge-evidence">
        <div className="evidence-head"><span>TRACE / {step.toUpperCase()}</span><strong>PASS</strong></div>
        <div className="evidence-line"><span>claim_01</span><b /><em>[S1, S3]</em></div>
        <div className="evidence-line"><span>claim_02</span><b /><em>[S2]</em></div>
        <div className="evidence-line muted"><span>unsupported</span><b /><em>BLOCKED</em></div>
      </div>
    </div>
  );
}

export function ProjectPreview({ kind }: { kind: "autonomy" | "carebridge" }) {
  return kind === "autonomy" ? <AutonomyPreview /> : <CareBridgePreview />;
}
