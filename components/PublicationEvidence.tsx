import Image from "next/image";
import benchmark from "@/data/native-performance-publication.json";
import timingLabels from "@/data/native-performance-timing-labels.json";
import values from "@/data/truemargin-publication.json";

export function TrueMarginHomeSummary() {
  return (
    <figure className="recorded-figure tm-home-summary">
      <div className="plate-heading"><span>Controlled study</span><span>30 cases</span></div>
      <h4>Correlations varied by case</h4>
      <p className="tm-case-count"><strong>6 of 30</strong><span>cases had negative spread/error correlations</span></p>
      <div
        className="tm-case-groups"
        role="img"
        aria-label="Ten anatomy groups, each with three synthetic deformation cases. Six cases have negative spread/error correlations."
      >
        {values.anatomy_ids.map((id, i) => (
          <div className="tm-case-group" key={id}>
            {values.case_spread.slice(i * 3, i * 3 + 3).map((value, j) => (
              <span key={j} className={value < 0 ? "negative" : "nonnegative"} />
            ))}
          </div>
        ))}
      </div>
      <p className="tm-case-legend">
        <span><i className="negative" />Negative correlation</span>
        <span><i className="nonnegative" />Nonnegative</span>
      </p>
      <figcaption>
        Three synthetic deformations per anatomy. <a href="/research/truemargin#results">Results and methods</a>.
      </figcaption>
    </figure>
  );
}

export function TrueMarginOverview() {
  return (
    <figure className="recorded-figure tm-overview publication-evidence">
      <div className="plate-heading"><span>Controlled study</span><span>10 anatomies</span></div>
      <h3>Registration spread and alignment error</h3>
      <p>Each anatomy has three synthetic deformations with known alignment errors.</p>
      <div className="tm-panel-grid">
        <div>
          <h4>Anatomy-level correlation</h4>
          <p>Each dot shows an anatomy’s median Spearman correlation with known error.</p>
          <Image
            src="/projects/publication/truemargin-association-publication.svg"
            width={800}
            height={720}
            alt="Ten anatomy-level correlations for registration spread and inverse-consistency error"
          />
          <div className="tm-method-labels">
            <span>Registration spread<br /><strong>Median 0.6841</strong></span>
            <span>Inverse-consistency error<br /><strong>Median 0.7203</strong></span>
          </div>
          <p>The median correlation was 0.6841 for spread and 0.7203 for inverse-consistency error. The comparator’s valid-case counts vary by anatomy.</p>
        </div>
        <div>
          <h4>Case-level correlations</h4>
          <p>Spread/error correlations for all 30 deformation cases.</p>
          <Image
            src="/projects/publication/truemargin-cases-publication.svg"
            width={800}
            height={720}
            alt="Thirty case correlations, including six below zero"
          />
          <p><strong>Six correlations were negative.</strong></p>
          <p><strong>39 of 1,500 sampled locations</strong> had high error despite low spread. Locations are not independent patients.</p>
        </div>
      </div>
      <figcaption>
        A separate calibration study produced conservative, sometimes very large error bounds. These are controlled experiments, not clinical validation.
      </figcaption>
      <details>
        <summary>Exact retained values and sampling units</summary>
        <p>Ten anatomies × three deformations × 50 locations. The source tables preserve exact values and case ordering.</p>
        <a href="https://github.com/Kushrishi/truemargin/blob/main/results/m5/m5_anatomy_comparator_table.csv">Anatomy-level results and valid-case counts</a>
        {" · "}
        <a href="https://github.com/Kushrishi/truemargin/blob/main/results/m5/m5_case_characterization.csv">Case-level results</a>
      </details>
    </figure>
  );
}

export function NativeBenchmarkPublication() {
  return (
    <figure className="recorded-figure publication-evidence">
      <div className="plate-heading"><span>C++ preprocessing</span><span>Whole-process time</span></div>
      <a href="/projects/publication/native-asl-wall-time-publication.svg" aria-label="Open the benchmark figure at full resolution">
        <Image
          src="/projects/publication/native-asl-wall-time-publication.png"
          width={1890}
          height={1296}
          alt="Three paired timing comparisons with an 8.97 percent median reduction in whole-process time"
        />
      </a>
      <figcaption>
        <strong>8.97% median reduction in whole-process time</strong>, with identical recorded model outputs.
        Three paired runs of the same 108-frame workload on a Linux host using MobileNetV2 and ONNX Runtime CPU.
      </figcaption>
      <table>
        <caption>Whole-process time (seconds)</caption>
        <thead><tr><th scope="col">Pair</th><th scope="col">Baseline</th><th scope="col">Candidate</th></tr></thead>
        <tbody>
          {benchmark.pairs.map((pair) => (
            <tr key={pair.pair}>
              <th scope="row">{pair.pair}</th>
              <td>{pair.baseline_wall_seconds.toFixed(6)}</td>
              <td>{pair.candidate_wall_seconds.toFixed(6)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <details>
        <summary>Inspect exact recorded timings</summary>
        <dl className="exact-timings">
          {timingLabels.map((pair) => (
            <div key={pair.pair}>
              <dt>Pair {pair.pair}: baseline (seconds)</dt><dd>{pair.baseline_wall_seconds}</dd>
              <dt>Pair {pair.pair}: candidate (seconds)</dt><dd>{pair.candidate_wall_seconds}</dd>
            </div>
          ))}
        </dl>
      </details>
      <p>
        The separately measured preprocessing stage fell by 57.52%. Whole-process timing includes startup;
        cache and scheduling were not fully controlled. Results apply to this workload, not to inference systems generally.
      </p>
      <p>
        <a href="/projects/native-asl-matched-wall-time.png">Original figure</a>
        {" · "}
        <a href="https://github.com/Kushrishi/autonomy-simulation-lab/blob/main/docs/assets/performance_data.json">Source measurements</a>
        {" · "}
        <a href="https://github.com/Kushrishi/autonomy-simulation-lab/blob/main/native/CONTROLLED_REPLAY_CASE_STUDY.md">Method and limitations</a>
      </p>
    </figure>
  );
}
