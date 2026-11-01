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
      <div className="plate-heading"><span>Banking77</span><span>Two constructed benchmarks</span></div>
      <h3>Simple baselines found<br />both planted changes.</h3>
      <div className="diagnostic-flow" aria-label="Study workflow">
        <div><small>Training change</small>Baseline → retrained model</div>
        <div><small>Evaluation</small>Rank five candidate changes</div>
        <div className="flow-outcome"><small>Separate repair example</small>Two repairs → same predictions</div>
      </div>
      <table>
        <caption>Rank of the planted training change. 1 is best; 5 is last.</caption>
        <thead><tr><th scope="col">Diagnostic</th><th scope="col">Benchmark A</th><th scope="col">Benchmark B</th></tr></thead>
        <tbody>
          {rows.map(([name, a, b]) => (
            <tr key={name}>
              <th scope="row">{name}</th>
              <td><span className="rank-cell"><i style={{ width: `${a * 18}%` }} />{a}</span></td>
              <td><span className="rank-cell"><i style={{ width: `${b * 18}%` }} />{b}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="plot-note">
        The constructed labels give simple baselines a shortcut. Repeated training runs are not additional independent benchmarks.
      </p>
    </div>
  );
}

export function SimulatorVisual() {
  return (
    <figure className="simulator-plate">
      <div className="plate-heading"><span>Autonomy Simulation Lab</span><span>Browser demo</span></div>
      <Image
        src="/projects/asl-v1-current.webp"
        width={1280}
        height={900}
        alt="An A-star route through weighted terrain beside position-estimation results"
        sizes="(max-width: 800px) 100vw, 55vw"
      />
      <figcaption>A completed A* run with simulated measurements. This is the browser simulator, not the native replay tool.</figcaption>
    </figure>
  );
}

export function ReleaseInvestigationVisual() {
  return (
    <figure className="recorded-figure">
      <div className="plate-heading"><span>Model Regression Forensics</span><span>HTML report</span></div>
      <a href="/projects/mrf-release-investigation-real.png" aria-label="Open the MRF report screenshot at full resolution">
        <Image
          src="/projects/mrf-case-inspection-detail.png"
          width={1440}
          height={725}
          alt="Detail of the classifier report showing the filter controls and eight changed predictions"
          sizes="(max-width: 800px) 100vw, 900px"
        />
      </a>
      <figcaption>
        Eight of 1,969 predictions changed while overall accuracy stayed the same: three new errors, three corrections and two changes between incorrect labels.
        {" "}Banking77: PolyAI, Casanueva et al. (2020), <a href="https://github.com/PolyAI-LDN/task-specific-datasets">source</a>,
        {" "}<a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>.
        Case selection, predictions and grouping were added for this example.
        {" "}<a href="https://github.com/Kushrishi/model-regression-forensics/blob/main/docs/deployment-comparison.md#published-report-capture">Example details</a>.
      </figcaption>
    </figure>
  );
}

export function NativeBenchmarkVisual() {
  return (
    <figure className="recorded-figure">
      <div className="plate-heading"><span>C++ preprocessing</span><span>Whole-process time</span></div>
      <Image
        src="/projects/native-asl-matched-wall-time.png"
        width={1890}
        height={1116}
        alt="Three paired runs with an 8.97 percent median reduction in whole-process time"
        sizes="(max-width: 800px) 100vw, 900px"
      />
      <figcaption>
        Three paired runs of a 108-frame workload: median whole-process time fell by 8.97%, with identical model outputs.
        These measurements cover one Linux host, model and recording.
        {" "}<a href="https://github.com/Kushrishi/autonomy-simulation-lab/blob/main/docs/assets/performance_data.json">Measurements</a>
        {" · "}<a href="https://github.com/Kushrishi/autonomy-simulation-lab/blob/main/native/CONTROLLED_REPLAY_CASE_STUDY.md">Method and limitations</a>.
      </figcaption>
    </figure>
  );
}
