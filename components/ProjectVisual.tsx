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

export function ReleaseInvestigationVisual() {
  return (
    <figure className="recorded-figure">
      <div className="plate-heading">
        <span>01 / Release investigation</span><span>Actual HTML report</span>
      </div>
      <a href="/projects/mrf-release-investigation-real.png" aria-label="Open the actual MRF report screenshot at full resolution">
        <Image src="/projects/mrf-release-investigation-real.png" width={1440} height={1514}
          alt="Passing release policy above a searchable table of eight changed Banking77 predictions, including three new errors and three corrections"
          sizes="(max-width: 800px) 100vw, 900px" />
      </a>
      <figcaption>
        1,969 cases; 78 passing slices; eight changed predictions. Three new errors,
        three corrections and two wrong-to-wrong changes leave aggregate accuracy unchanged.
        Owner-supplied capture; independent Chromium interaction check reported.
        Banking77: PolyAI, Casanueva et al. (2020), <a href="https://github.com/PolyAI-LDN/task-specific-datasets">source</a>, {" "}
        <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>.
        Changes: case selection, predictions and grouping. <a href="https://github.com/Kushrishi/model-regression-forensics/blob/main/docs/deployment-comparison.md#published-report-capture">Capture identity and limits</a>.
      </figcaption>
    </figure>
  );
}

export function NativeBenchmarkVisual() {
  return (
    <figure className="recorded-figure">
      <div className="plate-heading"><span>Native C++ / CPU inference</span><span>Measured wall time</span></div>
      <Image src="/projects/native-asl-matched-wall-time.png" width={1890} height={1116}
        alt="Three paired 108-frame runs: baseline and candidate wall times, with exact recorded output parity and a median whole-process reduction of 8.9749 percent"
        sizes="(max-width: 800px) 100vw, 900px" />
      <figcaption>
        Original accepted figure, unchanged. Median whole-process reduction: 8.9749%;
        preprocessing-stage reduction: 57.5238%. Three matched pairs, one Linux host,
        one model and one recording. Exact recorded output parity excludes timing.
        No perception-accuracy or universal speed claim. {" "}
        <a href="https://github.com/Kushrishi/autonomy-simulation-lab/blob/main/docs/assets/performance_data.json">Source measurements</a> · {" "}
        <a href="https://github.com/Kushrishi/autonomy-simulation-lab/blob/main/native/README.md">Method and reproduction</a>.
      </figcaption>
    </figure>
  );
}
