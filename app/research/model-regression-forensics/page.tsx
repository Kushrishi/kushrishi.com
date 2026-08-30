import type { Metadata } from "next";
import Link from "next/link";

const researchDescription =
  "Active research on diagnosing training-data-induced model regressions using blinded lineage analysis and intervention-backed verification.";

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
  ["EXP 000", "2026-08", "Validated the reproducible controlled SFT regression and recovery protocol."],
  [
    "EXP 001",
    "2026-08",
    "Blinded multicandidate diagnosis succeeded, then exposed a whole-artifact lexical shortcut.",
  ],
  [
    "EXP 002",
    "2026-08",
    "Entangled distractors neutralized that shortcut; changed-record analysis localized the hidden cause and selective restoration recovered the target behavior.",
  ],
  [
    "EXP 003",
    "2026-08",
    "A harder role-binding benchmark failed its clean baseline, so RCA was stopped before candidate and intervention runs.",
  ],
  [
    "EXP 003-B",
    "2026-08",
    "Balanced loss did not rescue the clean role-binding baseline.",
  ],
  [
    "EXP 003-C",
    "2026-08",
    "Selected-slot lookup reached 96/96 on held-out evaluation, isolating the lookup primitive as learnable.",
  ],
  [
    "EXP 003-D",
    "2026-08",
    "Explicit-policy role binding reached 96/96 held-out; Experiment 004 is the next major RCA benchmark.",
  ],
];

export default function ResearchPage() {
  return (
    <main className="research-page">
      <header className="site-header compact-header">
        <Link className="wordmark" href="/" prefetch={false}>
          KR
        </Link>
        <Link className="back-link" href="/" prefetch={false}>
          ← Index
        </Link>
      </header>

      <section className="research-hero-page">
        <div className="section-label">PROJECT 001 / ACTIVE RESEARCH / EXPERIMENT 004 NEXT</div>
        <h1>
          MODEL
          <br />
          REGRESSION
          <br />
          <em>FORENSICS.</em>
        </h1>

        <p className="hero-deck">
          An active research project on tracing behavioral regressions through training lineage,
          ranking plausible causes under blinded conditions, and verifying suspected causes through
          controlled intervention.
        </p>
      </section>

      <section className="research-body">
        <aside className="research-sidebar">
          <div>
            <span>STATUS</span>
            <strong>ACTIVE / EXP 003-D COMPLETE</strong>
          </div>

          <div>
            <span>PRIMARY QUESTION</span>
            <strong>Why did the new model get worse?</strong>
          </div>

          <div>
            <span>EVIDENCE</span>
            <strong>CONTROLLED SFT + BLINDED RCA + INTERVENTION</strong>
          </div>

          <div>
            <span>NOVELTY</span>
            <strong>NOT ESTABLISHED</strong>
          </div>
        </aside>

        <div className="research-copy">
          <section className="research-block" id="problem">
            <div className="research-block-index">01 / PROBLEM</div>
            <h2>Observe the regression. Find the cause.</h2>

            <p>
              Model teams can observe that a checkpoint regressed, yet still struggle to identify
              which training change caused the behavioral failure. This project asks whether
              behavioral differencing, structured training lineage, blinded candidate ranking, and
              targeted interventions can turn regression debugging into a reproducible engineering
              workflow.
            </p>
          </section>

          <section className="research-block" id="question">
            <div className="research-block-index">02 / RESEARCH QUESTION</div>

            <blockquote>
              Can an automated debugger localize the training change responsible for a model
              regression, then verify that diagnosis through intervention rather than correlation
              alone?
            </blockquote>
          </section>

          <section className="research-block" id="method">
            <div className="research-block-index">03 / FORENSICS LOOP</div>

            <div className="pipeline research-pipeline">
              <span>BEHAVIOR DIFF</span>
              <b>→</b>
              <span>REGRESSION CLUSTER</span>
              <b>→</b>
              <span>LINEAGE SEARCH</span>
              <b>→</b>
              <span>INTERVENTION</span>
              <b>→</b>
              <span>VERIFIED CAUSE</span>
            </div>

            <div className="method-grid">
              <div>
                <span>A</span>
                <strong>Detect</strong>
                <p>Measure a behavioral delta between baseline and candidate checkpoints.</p>
              </div>

              <div>
                <span>B</span>
                <strong>Localize</strong>
                <p>Rank changed data, configuration, or training phases as candidate causes.</p>
              </div>

              <div>
                <span>C</span>
                <strong>Intervene</strong>
                <p>Remove, replace, or replay the suspected change under controlled conditions.</p>
              </div>

              <div>
                <span>D</span>
                <strong>Verify</strong>
                <p>Test recovery on held-out cases and unrelated capabilities.</p>
              </div>
            </div>
          </section>

          <section className="research-block" id="novelty">
            <div className="research-block-index">04 / NOVELTY STATUS</div>
            <h2>Adjacent work exists. The gap still has to be earned.</h2>

            <p>
              This project does not currently claim novelty. The working wedge is end-to-end
              regression forensics that joins behavioral differencing, training lineage,
              candidate-cause ranking, and intervention-backed verification. Experiments completed
              so far are controlled and synthetic; the related-work review and later comparative
              studies must establish whether the overall method is sufficiently distinct and useful.
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
            <div className="research-block-index">05 / EXPERIMENT PROGRESSION</div>
            <h2>The benchmark has been hardened by its own failures.</h2>

            <p>
              Each stage has been used to test not only the debugger, but whether the benchmark
              itself is trustworthy. Shortcuts and failed clean baselines are recorded rather than
              tuned away after seeing results.
            </p>

            <div className="experiment-panel">
              <div className="experiment-head">
                <span>CONTROLLED EXPERIMENT SERIES</span>
                <strong>THROUGH 003-D</strong>
              </div>

              <div className="experiment-row">
                <span>EXP 000</span>
                <b>protocol validation / complete</b>
              </div>

              <div className="experiment-row">
                <span>EXP 001</span>
                <b>blinded RCA / lexical shortcut discovered</b>
              </div>

              <div className="experiment-row">
                <span>EXP 002</span>
                <b>entangled distractors / hidden cause localized + recovery</b>
              </div>

              <div className="experiment-row">
                <span>EXP 003</span>
                <b>role binding / clean baseline failed; RCA stopped</b>
              </div>

              <div className="experiment-row">
                <span>EXP 003-B</span>
                <b>balanced loss / baseline not rescued</b>
              </div>

              <div className="experiment-row">
                <span>EXP 003-C</span>
                <b>selected-slot lookup / 96/96 held-out</b>
              </div>

              <div className="experiment-row">
                <span>EXP 003-D</span>
                <b>explicit-policy role binding / 96/96 held-out</b>
              </div>

              <div className="experiment-row">
                <span>NEXT</span>
                <b>Experiment 004 / hardened RCA benchmark</b>
              </div>
            </div>
          </section>

          <section className="research-block" id="findings">
            <div className="research-block-index">06 / KEY FINDINGS</div>
            <h2>What the experiments have established so far.</h2>

            <div className="related-work-grid">
              <div>
                <strong>SHORTCUTS CAN MISLEAD</strong>
                <p>
                  Experiment 001 showed that an apparently successful diagnosis can rely on simple
                  lexical overlap rather than a meaningful forensic signal.
                </p>
              </div>

              <div>
                <strong>CHANGE-FOCUSED RCA HELD UP</strong>
                <p>
                  After Experiment 002 neutralized whole-artifact lexical ranking, analysis of the
                  changed records still localized the hidden cause and intervention recovered the
                  target behavior.
                </p>
              </div>

              <div>
                <strong>COMPOSITION MATTERS</strong>
                <p>
                  The 003 diagnostics showed that selected-slot lookup and explicit-policy role
                  binding are individually learnable, while their implicit-policy composition
                  failed under the frozen setup.
                </p>
              </div>
            </div>
          </section>

          <section className="research-block" id="log">
            <div className="research-block-index">07 / RESEARCH LOG</div>

            <div className="research-log">
              {log.map(([id, date, text]) => (
                <div key={id}>
                  <span>{id}</span>
                  <time>{date}</time>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="research-block" id="reproduce">
            <div className="research-block-index">08 / REPRODUCE</div>
            <h2>Protocols, configs, tests, and results are public in the repository.</h2>

            <p>
              The research repo records frozen experiment configurations, deterministic preparation
              scripts, model-training and evaluation runners, decision logs, and per-experiment
              results. Generated checkpoints and datasets are intentionally excluded from Git.
            </p>

            <Link
              className="code-placeholder"
              href="https://github.com/Kushrishi/model-regression-forensics"
              target="_blank"
              rel="noreferrer"
              prefetch={false}
            >
              <span>$</span> github.com/Kushrishi/model-regression-forensics
            </Link>
          </section>

          <div className="note-box">
            <span>NOTE / 2026-08</span>

            <p>
              Current evidence is controlled and synthetic. Findings are conditional on the pinned
              model and training setup, and novelty is not established. Stable research history now
              runs through Experiment 003-D; Experiment 004 is next.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
