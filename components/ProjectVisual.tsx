import Image from "next/image";
export function RegressionVisual() {
  const rows = [
    ["Label overlap", 1, 1],
    ["Lexical similarity", 1, 1],
    ["Grad-Dot", 1, 5],
    ["TracIn", 1, 5],
    ["Random reference", 3, 3],
  ] as const;
  return (
    <div className="rank-plate">
      <div className="plate-heading">
        <span>01 / Banking77</span>
        <span>Two constructed worlds</span>
      </div>
      <h3>
        The simplest baseline
        <br />
        found both roots.
      </h3>
      <div className="diagnostic-flow" aria-label="Diagnostic evidence flow">
        <div>
          <small>Release change</small>Baseline → retrained model
        </div>
        <div>
          <small>Observed regression</small>Rank five candidate changes
        </div>
        <div className="flow-outcome">
          <small>Separate repair fixture</small>Two successful repairs →
          ambiguous cause
        </div>
      </div>
      <table>
        <caption>
          Rank of the planted training change. 1 is best; 5 is last.
        </caption>
        <thead>
          <tr>
            <th scope="col">Diagnostic</th>
            <th scope="col">World 00</th>
            <th scope="col">World 01</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([s, a, b]) => (
            <tr key={s}>
              <th scope="row">{s}</th>
              <td>
                <span className="rank-cell">
                  <i style={{ width: `${a * 18}%` }} />
                  {a}
                </span>
              </td>
              <td>
                <span className="rank-cell">
                  <i style={{ width: `${b * 18}%` }} />
                  {b}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="plot-note">
        Known target labels and disjoint candidate pairs expose a shortcut.
        Repeated training trajectories are not additional benchmark worlds.
      </p>
    </div>
  );
}
export function SimulatorVisual() {
  return (
    <figure className="simulator-plate">
      <div className="plate-heading">
        <span>02 / Autonomy Simulation Lab</span>
        <span>Actual browser interface</span>
      </div>
      <Image
        src="/projects/asl-v1-current.webp"
        width={1280}
        height={900}
        alt="Live ASL v1 weighted-terrain A-star route beside populated noisy-position, range least-squares and Kalman localization metrics"
        sizes="(max-width: 800px) 100vw, 55vw"
      />
      <figcaption>
        Captured from a completed weighted-terrain A* run on 5 October 2026.
        Simulated measurements; this is the browser v1, not native inference.
      </figcaption>
    </figure>
  );
}
