import Link from "next/link";

const relatedWork = [
  ["MODEL DIFFING", "Behavioral comparison across model versions", "ADJACENT"],
  ["TRAINING-DATA ATTRIBUTION", "Rank examples or shards associated with model behavior", "ADJACENT"],
  ["CAUSAL INTERVENTION", "Test whether a suspected training change actually moves the regression", "CORE"],
  ["REGRESSION BENCHMARKING", "Controlled planted regressions with known ground-truth causes", "PROPOSED"],
];

const log = [
  ["LOG 000", "2026-08", "Define the question, map adjacent work, and refuse novelty claims before primary-source review."],
  ["EXP 000", "NEXT", "Plant one reproducible post-training regression in a small open model and verify recovery with a controlled intervention."],
  ["BENCH 000", "PLANNED", "Convert successful controlled experiments into RegressionBench cases with hidden root causes."],
];

export default function ResearchPage() {
  return (
    <main className="research-page">
      <header className="site-header compact-header">
        <Link className="wordmark" href="/">KR</Link>
        <Link className="back-link" href="/">← Index</Link>
      </header>

      <section className="research-hero-page">
        <div className="section-label">PROJECT 001 / RESEARCH DIRECTION / NOVELTY REVIEW</div>
        <h1>MODEL<br />REGRESSION<br /><em>FORENSICS.</em></h1>
        <p className="hero-deck">
          A working research direction for tracing behavioral regressions through training lineage and verifying likely causes through controlled intervention.
        </p>
      </section>

      <section className="research-body">
        <aside className="research-sidebar">
          <div><span>STATUS</span><strong>NOVELTY REVIEW / V0.1 DESIGN</strong></div>
          <div><span>PRIMARY QUESTION</span><strong>Why did the new model get worse?</strong></div>
          <div><span>TARGET OUTPUT</span><strong>OSS · REGRESSIONBENCH · TECHNICAL REPORT</strong></div>
          <div><span>NOVELTY CLAIM</span><strong>NOT ESTABLISHED</strong></div>
        </aside>

        <div className="research-copy">
          <section className="research-block" id="problem">
            <div className="research-block-index">01 / PROBLEM</div>
            <h2>Observe the regression. Find the cause.</h2>
            <p>
              Model teams can observe that a checkpoint regressed, yet still struggle to identify which training change caused the behavioral failure. This project asks whether behavioral differencing, training-lineage search, and targeted interventions can turn regression debugging into a reproducible engineering workflow.
            </p>
          </section>

          <section className="research-block" id="question">
            <div className="research-block-index">02 / RESEARCH QUESTION</div>
            <blockquote>
              Can an automated debugger localize the training change responsible for a model regression, then verify that diagnosis through intervention rather than correlation alone?
            </blockquote>
          </section>

          <section className="research-block" id="method">
            <div className="research-block-index">03 / PROPOSED LOOP</div>
            <div className="pipeline research-pipeline">
              <span>BEHAVIOR DIFF</span><b>→</b><span>REGRESSION CLUSTER</span><b>→</b><span>LINEAGE SEARCH</span><b>→</b><span>INTERVENTION</span><b>→</b><span>VERIFIED CAUSE</span>
            </div>
            <div className="method-grid">
              <div><span>A</span><strong>Detect</strong><p>Measure a behavioral delta between baseline and candidate checkpoints.</p></div>
              <div><span>B</span><strong>Localize</strong><p>Rank changed data, configuration, or training phases as candidate causes.</p></div>
              <div><span>C</span><strong>Intervene</strong><p>Remove, replace, or replay the suspected change under controlled conditions.</p></div>
              <div><span>D</span><strong>Verify</strong><p>Test recovery on held-out cases and unrelated capabilities.</p></div>
            </div>
          </section>

          <section className="research-block" id="novelty">
            <div className="research-block-index">04 / NOVELTY STATUS</div>
            <h2>Adjacent work exists. The gap must be earned.</h2>
            <p>
              This project does not currently claim novelty. The working wedge is end-to-end regression forensics that joins behavioral differencing, training lineage, candidate-cause ranking, and intervention-backed verification. The related-work review must establish whether that combination is sufficiently distinct and useful.
            </p>
            <div className="related-work-grid">
              {relatedWork.map(([title, detail, status]) => (
                <div key={title}>
                  <span>{status}</span>
                  <strong>{title}</strong>
                  <p>{detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="research-block" id="experiment">
            <div className="research-block-index">05 / EXPERIMENT 000</div>
            <h2>Start with one planted regression.</h2>
            <p>
              Create a small controlled post-training experiment with a known root cause. Detect the behavioral change, search the recorded training lineage, rank candidate causes, execute the minimal intervention, and test whether the behavior recovers on held-out examples without damaging unrelated capabilities.
            </p>
            <div className="experiment-panel">
              <div className="experiment-head"><span>CONTROLLED EXPERIMENT / SCHEMA</span><strong>NOT RUN</strong></div>
              <div className="experiment-row"><span>BASELINE</span><b>open model + clean SFT mixture</b></div>
              <div className="experiment-row"><span>PLANTED CHANGE</span><b>single known data/config intervention</b></div>
              <div className="experiment-row"><span>OBSERVE</span><b>target eval regression + behavioral traces</b></div>
              <div className="experiment-row"><span>DIAGNOSE</span><b>rank candidate causes from lineage</b></div>
              <div className="experiment-row"><span>VERIFY</span><b>retrain/replay without suspected cause</b></div>
              <div className="experiment-row"><span>SUCCESS</span><b>held-out recovery + stable unrelated evals</b></div>
            </div>
          </section>

          <section className="research-block" id="benchmark">
            <div className="research-block-index">06 / PLANNED BENCHMARK</div>
            <h2>RegressionBench</h2>
            <p>
              If Experiment 000 works, subsequent controlled regressions become benchmark cases with known ground-truth causes. Candidate debugging methods can then be measured on root-cause accuracy, top-k recall, intervention success, diagnosis cost, and false-cause rate.
            </p>
            <div className="benchmark-metrics">
              <span>ROOT-CAUSE ACCURACY</span><span>TOP-K RECALL</span><span>INTERVENTION SUCCESS</span><span>DIAGNOSIS COST</span><span>FALSE-CAUSE RATE</span>
            </div>
          </section>

          <section className="research-block" id="log">
            <div className="research-block-index">07 / RESEARCH LOG</div>
            <div className="research-log">
              {log.map(([id, date, text]) => (
                <div key={id}><span>{id}</span><time>{date}</time><p>{text}</p></div>
              ))}
            </div>
          </section>

          <section className="research-block" id="reproduce">
            <div className="research-block-index">08 / REPRODUCE</div>
            <h2>Evidence before polish.</h2>
            <p>
              Reproduction commands, configs, checkpoints, data-generation scripts, eval definitions, and result tables will appear here only after the first experiment exists. Until then, this page remains an explicit research specification rather than a results page.
            </p>
            <div className="code-placeholder">
              <span>$</span> experiment 000 has not been executed yet
            </div>
          </section>

          <div className="note-box">
            <span>NOTE / 2026-08</span>
            <p>This page intentionally separates proposed methodology from completed evidence. Results will replace claims as experiments are completed.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
