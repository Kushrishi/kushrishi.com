import type { Metadata } from "next";
import Link from "next/link";

const researchDescription =
  "Independent ML research on when counterfactual retraining can distinguish the training change responsible for a model regression from plausible alternatives.";

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

export default function ResearchPage() {
  return (
    <main className="research-page">
      <header className="site-header compact-header">
        <Link className="wordmark" href="/" prefetch={false}>KR</Link>
        <Link className="back-link" href="/" prefetch={false}>← Index</Link>
      </header>

      <section className="research-hero-page">
        <div className="section-label">PROJECT 002 / PUBLIC RESEARCH / M4 ACTIVE</div>
        <h1>
          MODEL
          <br />
          REGRESSION
          <br />
          <em>FORENSICS.</em>
        </h1>
        <p className="hero-deck">
          Research on what evidence is sufficient to identify the training change responsible for a
          model regression rather than a merely correlated one.
        </p>
      </section>

      <section className="research-body">
        <aside className="research-sidebar">
          <div><span>STATUS</span><strong>M3 COMPLETE · M4 ACTIVE</strong></div>
          <div><span>QUESTION</span><strong>WHICH VERSIONED TRAINING CHANGE IS RESPONSIBLE?</strong></div>
          <div><span>LATEST MILESTONE</span><strong>STRUCTURALLY MATCHED BENCHMARK FROZEN</strong></div>
          <div><span>CURRENT STUDY</span><strong>COMPETITIVE LOCALIZATION BASELINES</strong></div>
          <div><span>BOUNDARY</span><strong>CAUSAL SPECIFICITY NOT ESTABLISHED</strong></div>
        </aside>

        <div className="research-copy">
          <section className="research-block" id="question">
            <div className="research-block-index">01 / QUESTION</div>
            <h2>Detecting a regression does not identify its cause.</h2>
            <p>
              A training release can contain several plausible changes while only one is responsible
              for a failed behavior. MRF separates localization, restorative influence, and causal
              specificity instead of treating a high attribution score as causal evidence.
            </p>
          </section>

          <section className="research-block" id="method">
            <div className="research-block-index">02 / METHOD</div>
            <blockquote>
              Localize a plausible cause, reverse it, retrain under controlled pairing, and test whether recovery is distinguishable from plausible alternatives and ordinary retraining variability.
            </blockquote>
            <div className="pipeline research-pipeline">
              <span>MEASURE REGRESSION</span>
              <b>→</b>
              <span>RANK CHANGES</span>
              <b>→</b>
              <span>REVERSE CANDIDATE</span>
              <b>→</b>
              <span>RETRAIN</span>
              <b>→</b>
              <span>CERTIFY OR ABSTAIN</span>
            </div>
          </section>

          <section className="research-block" id="development">
            <div className="research-block-index">03 / DEVELOPMENT EVIDENCE</div>
            <h2>Experiment 009 produced a reproducible regression and strong root-restoration separation.</h2>
            <p>
              The development pilot uses Banking77 with a pinned DistilBERT classifier, deterministic
              versioned training releases, and paired stochastic trajectories. A planted symmetric
              label-mapping fault changes 66 stable training slots.
            </p>
            <div className="experiment-panel">
              <div className="experiment-head"><span>STAGE A + B</span><strong>DEVELOPMENT COMPLETE</strong></div>
              <div className="experiment-row"><span>PAIRED TRAJECTORIES</span><b>3</b></div>
              <div className="experiment-row"><span>MEAN TARGET REGRESSION</span><b>0.1293</b></div>
              <div className="experiment-row"><span>STAGE-B TRAININGS</span><b>18 / 18 complete</b></div>
              <div className="experiment-row"><span>MEAN ROOT RECOVERY</span><b>+0.1244</b></div>
              <div className="experiment-row"><span>ROOT VS STRONGEST NUISANCE</span><b>+0.1195 mean margin</b></div>
            </div>
            <p>
              These results remain development evidence because the original nuisance candidates
              were structurally distinguishable from the root. That limitation motivated the next
              benchmark rather than being hidden.
            </p>
          </section>

          <section className="research-block" id="benchmark">
            <div className="research-block-index">04 / MATCHED BENCHMARK</div>
            <h2>M3 removes the structural shortcut before testing localization again.</h2>
            <p>
              Every candidate in the new benchmark has the same observable change structure: 66
              stable-slot label changes, 33 in each direction, no text changes, preserved aggregate
              label mass, and two touched labels. The original three-world design was infeasible
              under the frozen eligibility rules, so a prospective amendment reduced it to two
              complete worlds before any matched-benchmark model training.
            </p>
            <div className="experiment-panel">
              <div className="experiment-head"><span>M3</span><strong>COMPLETE</strong></div>
              <div className="experiment-row"><span>WORLDS</span><b>2</b></div>
              <div className="experiment-row"><span>CANDIDATES</span><b>5 per world · 10 total</b></div>
              <div className="experiment-row"><span>UNIQUE TOUCHED INTENTS</span><b>20</b></div>
              <div className="experiment-row"><span>STRUCTURAL PREFLIGHT</span><b>passed</b></div>
              <div className="experiment-row"><span>MATCHED MODEL TRAINING</span><b>not yet performed</b></div>
            </div>
          </section>

          <section className="research-block" id="current">
            <div className="research-block-index">05 / CURRENT MILESTONE</div>
            <h2>M4 measures how much localization signal remains once candidate structure is matched.</h2>
            <p>
              M4 will compare a seeded random reference, a simple semantic or changed-record-overlap
              baseline, target-faithful last-layer Grad-Dot, and modern influence or data-attribution
              methods only when their objectives can be implemented faithfully for the frozen
              target. If a simple baseline solves localization, that is a valid result and not a
              reason to redesign the benchmark after observing it.
            </p>
          </section>

          <section className="research-block" id="scope">
            <div className="research-block-index">06 / SCOPE + CODE</div>
            <h2>The benchmark is frozen; the central causal claim is still untested.</h2>
            <p>
              MRF does not currently establish successful localization on the matched benchmark,
              confirmatory causal certification, superiority to modern attribution methods,
              cross-model or cross-dataset generalization, or a completed publication.
            </p>
            <p>
              The public repository contains the protocols, code, tests, development evidence,
              matched-benchmark construction, claims ledger, and roadmap.
            </p>
            <a className="text-link" href="https://github.com/Kushrishi/model-regression-forensics" target="_blank" rel="noreferrer">View repository →</a>
          </section>
        </div>
      </section>
    </main>
  );
}
