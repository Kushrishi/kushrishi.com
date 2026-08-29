import type { Metadata } from "next";
import Link from "next/link";

const researchDescription =
  "A working research direction for tracing model regressions through training lineage and testing likely causes with controlled intervention.";

export const metadata: Metadata = {
  title: "Model Regression Forensics | Kush Rishi",
  description: researchDescription,
  alternates: {
    canonical: "/research/model-regression-forensics",
  },
  openGraph: {
    title: "Model Regression Forensics | Kush Rishi",
    description: researchDescription,
    url: "/research/model-regression-forensics",
    siteName: "Kush Rishi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Model Regression Forensics | Kush Rishi",
    description: researchDescription,
  },
};

const relatedWork = [
  ["MODEL DIFFING", "Behavioral comparison across model versions"],
  ["TRAINING-DATA ATTRIBUTION", "Methods for relating training examples to model behavior"],
  ["CAUSAL INTERVENTION", "Controlled changes used to test a suspected cause"],
];

const log = [
  ["LOG 000", "2026-08", "Defined the initial question and began reviewing adjacent work."],
  ["EXP 000", "NEXT", "Plant one reproducible post-training regression and test whether a controlled intervention recovers the held-out behavior."],
];

export default function ResearchPage() {
  return (
    <main className="research-page">
      <header className="site-header compact-header">
        <Link className="wordmark" href="/" prefetch={false}>KR</Link>
        <Link className="back-link" href="/" prefetch={false}>← Index</Link>
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
          <div><span>EVIDENCE</span><strong>NO EXPERIMENTAL RESULTS YET</strong></div>
          <div><span>NOVELTY</span><strong>NOT ESTABLISHED</strong></div>
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
              {relatedWork.map(([title, detail]) => (
                <div key={title}>
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

          <section className="research-block" id="log">
            <div className="research-block-index">06 / RESEARCH LOG</div>
            <div className="research-log">
              {log.map(([id, date, text]) => (
                <div key={id}><span>{id}</span><time>{date}</time><p>{text}</p></div>
              ))}
            </div>
          </section>

          <section className="research-block" id="reproduce">
            <div className="research-block-index">07 / REPRODUCE</div>
            <h2>Reproduction starts with Experiment 000.</h2>
            <p>
              Commands, configs, eval definitions, and summarized results will be added after the first experiment has been run and reproduced from a clean checkout.
            </p>
            <div className="code-placeholder">
              <span>$</span> experiment 000 has not been executed yet
            </div>
          </section>

          <div className="note-box">
            <span>NOTE / 2026-08</span>
            <p>This page separates the current research question from completed evidence. Experimental results will be added only after they are reproduced.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
