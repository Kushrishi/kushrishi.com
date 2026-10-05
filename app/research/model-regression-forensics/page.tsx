import type { Metadata } from "next";
import Link from "next/link";

const researchDescription =
  "A study of model regressions after training-data changes, release comparison, and the limits of identifying a cause from successful repairs.";

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
        <Link className="back-link" href="/" prefetch={false}>← Portfolio</Link>
      </header>

      <section className="research-hero-page">
        <div className="section-label">INDEPENDENT RESEARCH / MATCHED STUDY COMPLETE</div>
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
          <div><span>STATUS</span><strong>MATCHED STUDY COMPLETE</strong></div>
          <div><span>QUESTION</span><strong>WHICH VERSIONED TRAINING CHANGE IS RESPONSIBLE?</strong></div>
          <div><span>LATEST MILESTONE</span><strong>SIMPLE BASELINES LOCALIZED BOTH WORLDS</strong></div>
          <div><span>CURRENT PHASE</span><strong>AMBIGUOUS REPAIR EVIDENCE</strong></div>
          <div><span>BOUNDARY</span><strong>CAUSAL SPECIFICITY NOT ESTABLISHED</strong></div>
        </aside>

        <div className="research-copy">
          <section className="research-block" id="question">
            <div className="research-block-index">01 / QUESTION</div>
            <h2>Detecting a regression does not identify its cause.</h2>
            <p>
              A training release can contain several changes that interact or independently repair
              a failed behavior. MRF separates localization, restorative influence, and causal
              specificity instead of treating a high attribution score as causal evidence.
            </p>
          </section>

          <section className="research-block" id="method">
            <div className="research-block-index">02 / RESEARCH WORKFLOW</div>
            <p>This is the research goal; a general certification procedure has not been established.</p>
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
              <span>ASSESS SPECIFICITY</span>
            </div>
          </section>

          <section className="research-block" id="development">
            <div className="research-block-index">03 / DEVELOPMENT EVIDENCE</div>
            <h2>The early pilot reproduced a regression, but its candidates were structurally different.</h2>
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
            <h2>Matching the change structure left a semantic shortcut.</h2>
            <p>
              Every candidate in the new benchmark has the same observable change structure: 66
              stable-slot label changes, 33 in each direction, no text changes, preserved aggregate
              label mass, and two touched labels. The original three-world design was infeasible
              under the frozen eligibility rules, so a prospective amendment reduced it to two
              complete worlds before any matched-benchmark model training.
            </p>
            <div className="experiment-panel">
              <div className="experiment-head"><span>MATCHED BENCHMARK</span><strong>COMPLETE</strong></div>
              <div className="experiment-row"><span>WORLDS</span><b>2</b></div>
              <div className="experiment-row"><span>CANDIDATES</span><b>5 per world · 10 total</b></div>
              <div className="experiment-row"><span>UNIQUE TOUCHED INTENTS</span><b>20</b></div>
              <div className="experiment-row"><span>STRUCTURAL PREFLIGHT</span><b>passed</b></div>
              <div className="experiment-row"><span>BENCHMARK SELECTION</span><b>before matched model training</b></div>
            </div>
          </section>

          <section className="research-block" id="current">
            <div className="research-block-index">05 / CURRENT MILESTONE</div>
            <h2>Simple visible-change baselines solved localization in both evaluated worlds.</h2>
            <p>
              The matched study completed three clean trainings and six composite trainings:
              three paired trajectories in each of two worlds. Complete blind rankings were finalized before separate truth
              scoring. Target-label overlap and lexical Jaccard each ranked the root first in both
              worlds. Final-checkpoint Grad-Dot and seven-checkpoint TracIn each ranked it first in
              one world and last in the other.
            </p>
            <p>
              The model-based methods added no top-1 benefit over the simple baselines in this
              design. This is descriptive development evidence from two constructed worlds.
              Known target labels and disjoint candidate label pairs still provide a semantic shortcut.
              A later deterministic example tests a different limit: two distinct repairs can restore the same predictions without identifying a unique historical cause.
            </p>
          </section>

          <section className="research-block" id="scope">
            <div className="research-block-index">06 / SCOPE + CODE</div>
            <h2>The matched localization study is complete; causal certification remains unestablished.</h2>
            <p>
              MRF does not currently establish general localization success,
              confirmatory causal certification, superiority to modern attribution methods,
              cross-model or cross-dataset generalization, or a completed publication.
            </p>
            <p>
              The public repository contains the protocols, code, tests, development evidence,
              matched-benchmark construction, claims ledger, and roadmap.
            </p>
            <p>
              An experimental command-line comparator now checks exact-label predictions on declared
              evaluation slices, rejects misaligned records, and reports individual regressions.
              A separate handwritten-digits fixture agrees with an independent NumPy reference.
              This establishes implementation agreement, not causal identification or an advantage
              over existing evaluation tools.
            </p>
            <p>
              The ambiguous-repair example is complete. Restoring feature order and reversing model
              weights both recover the original predictions. The assessment reports ambiguous repairs
              and leaves the historical cause unidentified. Further research is paused until a review
              of existing methods identifies a distinct question worth testing.
            </p>
            <a className="text-link" href="https://github.com/Kushrishi/model-regression-forensics" target="_blank" rel="noreferrer">View repository →</a>
            <p><a className="text-link" href="https://github.com/Kushrishi/model-regression-forensics/blob/main/research/M4_TECHNICAL_REPORT.md" target="_blank" rel="noreferrer">Read technical report →</a></p>
            <p><a className="text-link" href="https://github.com/Kushrishi/model-regression-forensics/blob/main/research/REPRODUCE_M4.md" target="_blank" rel="noreferrer">Replay retained results →</a></p>
            <p><a className="text-link" href="https://github.com/Kushrishi/model-regression-forensics/blob/main/docs/external-release-task.md" target="_blank" rel="noreferrer">Review the comparison utility →</a></p>
            <p><a className="text-link" href="https://github.com/Kushrishi/model-regression-forensics/blob/main/docs/ambiguous-repairs.md" target="_blank" rel="noreferrer">Run the ambiguous-repair example →</a></p>
          </section>
        </div>
      </section>
    </main>
  );
}
