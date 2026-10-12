import Image from "next/image";
import benchmark from "@/data/native-performance-publication.json";
import timingLabels from "@/data/native-performance-timing-labels.json";
import values from "@/data/truemargin-publication.json";

export function TrueMarginHomeSummary() {
  return <figure className="recorded-figure tm-home-summary">
    <div className="plate-heading"><span>Controlled cases</span><span>M4 / M5</span></div>
    <h4>Association can reverse</h4>
    <p className="tm-case-count"><strong>6 of 30</strong><span>cases had negative spread/error associations</span></p>
    <div className="tm-case-groups" role="img" aria-label="Ten anatomy groups, each with three synthetic deformation cases. Six of the thirty cases have negative spread/error Spearman correlations.">
      {values.anatomy_ids.map((id, i) => <div className="tm-case-group" key={id}>{values.case_spread.slice(i * 3, i * 3 + 3).map((value, j) => <span key={j} className={value < 0 ? "negative" : "nonnegative"} />)}</div>)}
    </div>
    <p className="tm-case-legend"><span><i className="negative" />Negative association</span><span><i className="nonnegative" />Nonnegative</span></p>
    <figcaption>Ten source anatomies; three synthetic deformation cases per anatomy. No established advantage over inverse-consistency error. External validation pending. <a href="/research/truemargin#results">Inspect the recorded evidence</a>.</figcaption>
  </figure>;
}

export function TrueMarginOverview() {
  return (
    <figure className="recorded-figure tm-overview publication-evidence">
      <div className="plate-heading"><span>Controlled evidence</span><span>M4 / M5</span></div>
      <h3>Association and blind spots</h3>
      <p>Ten independent source anatomies, each with three synthetic deformation cases. These are controlled comparisons, not external clinical validation.</p>
      <div className="tm-panel-grid">
        <div>
          <h4>Anatomy-level association</h4>
          <p>Spearman rank correlation with known error; each dot is an anatomy’s median across deformation cases.</p>
          <Image src="/projects/publication/truemargin-association-publication.svg" width={800} height={720} alt="Ten anatomy-level medians for registration spread and inverse-consistency error, on a scale from minus one to one" />
          <div className="tm-method-labels"><span>Registration spread<br /><strong>Median 0.6841</strong></span><span>Inverse-consistency error<br /><strong>Median 0.7203</strong></span></div>
          <p>No established superiority over ICE. Its valid-case counts differ between anatomies.</p>
        </div>
        <div>
          <h4>Case-level reversals</h4>
          <p>Spread/error Spearman correlation for 30 synthetic deformation cases, three per anatomy.</p>
          <Image src="/projects/publication/truemargin-cases-publication.svg" width={800} height={720} alt="Thirty case correlations in retained order, with six negative associations below zero" />
          <p><strong>Six negative case associations.</strong> Case number follows the retained anatomy/deformation ordering.</p>
          <p><strong>39 high-error / low-spread observations</strong> among 1,500 spatial samples. Samples are not independent patients.</p>
        </div>
      </div>
      <figcaption>M6 used a separate calibration/evaluation cohort and produced conservative, sometimes impractically large bounds. Prospective DIR-Lab accuracy validation is incomplete. <a href="/research/truemargin">Complete technical evidence and limitations</a>.</figcaption>
      <details><summary>Exact retained values and sampling units</summary>
        <p>Ten source anatomies × three deformation cases × 50 spatial samples. Plotted values preserve the original source floats; the source records retain anatomy IDs and case ordering.</p>

        <a href="https://github.com/Kushrishi/truemargin/blob/main/results/m5/m5_anatomy_comparator_table.csv">Original comparator table, including valid-case counts</a> · <a href="https://github.com/Kushrishi/truemargin/blob/main/results/m5/m5_case_characterization.csv">Original case characterization</a>
      </details>
    </figure>
  );
}

export function NativeBenchmarkPublication() {
  return <figure className="recorded-figure publication-evidence">
    <div className="plate-heading"><span>Native C++ / CPU inference</span><span>Matched wall time</span></div>
    <a href="/projects/publication/native-asl-wall-time-publication.svg" aria-label="Open the publication benchmark figure at full resolution"><Image src="/projects/publication/native-asl-wall-time-publication.png" width={1890} height={1296} alt="Three matched baseline and crop-aware preprocessing wall-time pairs; 8.9749 percent median whole-process reduction" /></a>
    <figcaption><strong>8.9749% median whole-process reduction</strong> and a separate <strong>57.5238% preprocessing-stage reduction</strong>. Three matched 108-frame pairs on one Linux x86_64 host; MobileNetV2, ONNX Runtime 1.30.0 CPU, one thread. Exact model-output parity excludes timings. Startup is included; cache and scheduling are uncontrolled. No perception-accuracy or universal speed claim.</figcaption>
    <table><caption>Recorded whole-process wall time (seconds)</caption><thead><tr><th scope="col">Pair</th><th scope="col">Baseline</th><th scope="col">Candidate</th></tr></thead><tbody>{benchmark.pairs.map(r=><tr key={r.pair}><th scope="row">{r.pair}</th><td>{r.baseline_wall_seconds.toFixed(6)}</td><td>{r.candidate_wall_seconds.toFixed(6)}</td></tr>)}</tbody></table>
    <p><a href="/projects/publication/native-asl-wall-time-publication.svg">Open the full-resolution figure</a>. The table above provides readable recorded values on mobile; the source file preserves full numeric precision.</p>
    <details><summary>Inspect exact recorded timings</summary><dl className="exact-timings">{timingLabels.map(r => <div key={r.pair}><dt>Pair {r.pair}: baseline (seconds)</dt><dd>{r.baseline_wall_seconds}</dd><dt>Pair {r.pair}: candidate (seconds)</dt><dd>{r.candidate_wall_seconds}</dd></div>)}</dl></details>
    <p>Pair reductions: 13.24%, 8.34%, 8.97%, in retained order.</p>
    <p><a href="/projects/native-asl-matched-wall-time.png">Original accepted figure, preserved</a> · <a href="https://github.com/Kushrishi/autonomy-simulation-lab/blob/main/docs/assets/performance_data.json">Exact source measurements</a> · <a href="https://github.com/Kushrishi/autonomy-simulation-lab/blob/main/native/README.md">Method and reproduction</a></p>
  </figure>;
}

