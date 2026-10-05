"use client";
import { useState } from "react";
import records from "@/data/registration.json";
const comparators = {
  ice: "Inverse-consistency error",
  residual: "Image residual",
  jacobian: "Jacobian deviation",
};
type Comparator = keyof typeof comparators;
export function EvidenceExplorer({ compact = false }: { compact?: boolean }) {
  const [comparator, setComparator] = useState<Comparator>("ice");
  const [selected, setSelected] = useState(0);
  const x = (value: number) => 118 + ((value + 0.5) / 1.5) * 400;
  const r = records[selected];
  return (
    <div className={`experiment-plate ${compact ? "compact" : ""}`}>
      <div className="plate-heading">
        <span>03 / TrueMargin</span>
        <span>Recorded experiment</span>
      </div>
      <div className="plot-intro">
        <h3>
          Same anatomy.
          <br />
          Different signals.
        </h3>
        <p>Does registration disagreement track alignment error?</p>
      </div>
      <label className="comparator-label">
        Compare ensemble spread with
        <select
          value={comparator}
          onChange={(e) => setComparator(e.target.value as Comparator)}
        >
          {Object.entries(comparators).map(([k, v]) => (
            <option value={k} key={k}>
              {v}
            </option>
          ))}
        </select>
      </label>
      <svg
        viewBox="0 0 570 380"
        role="img"
        aria-labelledby="plot-title plot-desc"
      >
        <title id="plot-title">
          Anatomy-level association with known spatial error
        </title>
        <desc id="plot-desc">
          Ten anatomy-level median Spearman correlations. Blue dots show
          ensemble spread; orange dots show the selected comparator. A full data
          table follows.
        </desc>
        {[-0.5, 0, 0.5, 1].map((t) => (
          <g key={t}>
            <line
              x1={x(t)}
              x2={x(t)}
              y1="24"
              y2="324"
              stroke="currentColor"
              opacity=".13"
            />
            <text x={x(t)} y="351" textAnchor="middle" className="axis-text">
              {t.toFixed(1)}
            </text>
          </g>
        ))}
        {records.map((r, i) => (
          <g key={r.id} opacity={selected === i ? 1 : 0.72}>
            <text x="10" y={43 + i * 29} className="axis-text">
              {r.id}
            </text>
            <line
              x1={x(r.spread)}
              x2={x(r[comparator])}
              y1={39 + i * 29}
              y2={39 + i * 29}
              stroke="currentColor"
              opacity=".4"
            />
            <circle
              cx={x(r[comparator])}
              cy={39 + i * 29}
              r="4"
              fill="var(--coral)"
            />
            <circle
              cx={x(r.spread)}
              cy={39 + i * 29}
              r={selected === i ? 6 : 4}
              fill="var(--cyan)"
            />
          </g>
        ))}
        <text x="320" y="376" textAnchor="middle" className="axis-text">
          Rank correlation with error (Spearman ρ)
        </text>
      </svg>
      <div
        className="mobile-plot"
        role="img"
        aria-label="Ten anatomy-level rank correlations. Cyan is ensemble spread; coral is the selected comparator. Full values follow in the data table."
      >
        {records.map((row) => (
          <div className="mobile-plot-row" key={row.id}>
            <span>{row.id}</span>
            <div className="mobile-plot-field">
              <i
                className="comparator-point"
                style={{ left: `${((row[comparator] + 0.5) / 1.5) * 100}%` }}
              />
              <i
                className="spread-point"
                style={{ left: `${((row.spread + 0.5) / 1.5) * 100}%` }}
              />
            </div>
          </div>
        ))}
        <div className="mobile-plot-axis">
          <span>−0.5</span>
          <span>0</span>
          <span>0.5</span>
          <span>1.0</span>
        </div>
        <p>Rank correlation with error (Spearman ρ)</p>
      </div>
      <div className="plot-legend">
        <span>
          <i className="dot cyan" />
          Ensemble spread
        </span>
        <span>
          <i className="dot coral" />
          {comparators[comparator]}
        </span>
      </div>
      <div className="anatomy-controls">
        <label>
          Inspect anatomy
          <select
            value={selected}
            onChange={(e) => setSelected(Number(e.target.value))}
          >
            {records.map((r, i) => (
              <option value={i} key={r.id}>
                {r.id}
              </option>
            ))}
          </select>
        </label>
        <p aria-live="polite">
          <strong>{r.spread.toFixed(3)}</strong>
          <span>spread</span>
          <strong>{r[comparator].toFixed(3)}</strong>
          <span>comparator</span>
        </p>
      </div>
      <p className="plot-note">
        30 controlled cases · 10 anatomies. Correlation measures ordering, not
        error in millimetres. These data do not establish an advantage over
        inverse-consistency error.
      </p>
      <details className="data-details">
        <summary>Data and provenance</summary>
        <div className="table-scroll">
          <table>
            <caption>Median case correlation within each anatomy</caption>
            <thead>
              <tr>
                <th scope="col">Anatomy</th>
                <th scope="col">Spread</th>
                <th scope="col">ICE</th>
                <th scope="col">Residual</th>
                <th scope="col">Jacobian</th>
              </tr>
            </thead>
            <tbody>
              {records.map((r) => (
                <tr key={r.id}>
                  <th scope="row">{r.id}</th>
                  <td>{r.spread.toFixed(4)}</td>
                  <td>{r.ice.toFixed(4)}</td>
                  <td>{r.residual.toFixed(4)}</td>
                  <td>{r.jacobian.toFixed(4)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <a href="https://github.com/Kushrishi/truemargin/blob/main/results/m5/m5_anatomy_comparator_table.csv">
          Source CSV
        </a>
        <p>
          Display rounding only. Comparator failures and valid-case counts are
          retained in the source record.
        </p>
      </details>
    </div>
  );
}
