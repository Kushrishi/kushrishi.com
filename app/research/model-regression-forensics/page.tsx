import type { Metadata } from "next";
import Link from "next/link";

const researchDescription =
  "Independent ML research on identifying which training change caused a model regression and verifying the diagnosis through controlled counterfactual retraining.";

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

const log = [
  [
    "EXP 000",
    "2026-08",
    "Validated the baseline, regression, diagnosis, and recovery experiment pipeline.",
  ],
  [
    "EXP 001",
    "2026-08",
    "Localized the planted change, but exposed a lexical shortcut that made the benchmark too easy.",
  ],
  [
    "EXP 002",
    "2026-08",
    "Removed the obvious shortcut. Changed-record analysis still localized the hidden change, and restoration recovered the target with recorded spillover.",
  ],
  [
    "EXP 003",
    "2026-08",
    "A harder role-binding task failed its clean baseline, so regression analysis was stopped.",
  ],
  [
    "EXP 003-C/D",
    "2026-08",
    "Capability tests isolated the failure boundary and restored a clean 96/96 task using an explicit policy.",
  ],
  [
    "EXP 004",
    "2026-08",
    "Correctly localized the intended training change, but reversing it produced no target recovery.",
  ],
  [
    "EXP 005-006",
    "2026-09",
    "More controlled benchmark designs still failed to produce the required isolated target regression.",
  ],
  [
    "EXP 007",
    "2026-09",
    "Produced a strong target regression, but unrelated behaviors also degraded, so verification stopped at the predefined gate.",
  ],
  [
    "EXP 008",
    "2026-09",
    "Completed the frozen two-world test. The planted root was uniquely ranked first and its restoration fully recovered the target in both worlds, but non-root restorations also produced material recovery, so unique causal certification failed.",
  ],
  [
    "EXP 009",
    "2026-09",
    "Moved to Banking77 with prospectively frozen materiality and locality gates, paired training trajectories, and explicit stochastic controls. The first 1/8 pilot produced a localized 4.50-point target regression but did not meet the predeclared 10-point materiality gate, so dose calibration continues under the frozen rule.",
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
        <div className="section-label">
          PROJECT 001 / ACTIVE RESEARCH / EXP009
        </div>

        <h1>
          MODEL
          <br />
          REGRESSION
          <br />
          <em>FORENSICS.</em>
        </h1>

        <p className="hero-deck">
          Independent ML research on identifying which training change caused a
          model regression and verifying the diagnosis through controlled
          counterfactual retraining.
        </p>
      </section>

      <section className="research-body">
        <aside className="research-sidebar">
          <div>
            <span>STATUS</span>
            <strong>EXP 009 ACTIVE</strong>
          </div>

          <div>
            <span>QUESTION</span>
            <strong>WHICH TRAINING CHANGE CAUSED THE REGRESSION?</strong>
          </div>

          <div>
            <span>LATEST COMPLETED RESULT</span>
            <strong>EXP008 · ROOT LOCALIZED 2/2 · CERTIFICATION FAILED</strong>
          </div>

          <div>
            <span>CURRENT PHASE</span>
            <strong>BANKING77 · PAIRED RETRAINING</strong>
          </div>

          <div>
            <span>MODEL / TASK</span>
            <strong>DISTILBERT · BANKING77</strong>
          </div>
        </aside>

        <div className="research-copy">
          <section className="research-block" id="problem">
            <div className="research-block-index">01 / PROBLEM</div>

            <h2>Detecting a regression does not explain its cause.</h2>

            <p>
              A model can perform correctly before retraining and then lose a
              capability after new training data or other changes are
              introduced.
            </p>

            <p>
              The failure can be measured, but the training run may contain
              many plausible explanations. The research question is whether
              those changes can be narrowed to the one that actually caused
              the regression.
            </p>
          </section>

          <section className="research-block" id="approach">
            <div className="research-block-index">02 / APPROACH</div>

            <blockquote>
              A suspicious training change is not treated as the cause until
              reversing it produces measurable recovery that is distinguishable
              from nuisance restorations and ordinary retraining variability.
            </blockquote>

            <div className="pipeline research-pipeline">
              <span>MEASURE REGRESSION</span>
              <b>→</b>
              <span>TRACE TRAINING CHANGES</span>
              <b>→</b>
              <span>RANK CANDIDATES</span>
              <b>→</b>
              <span>REVERSE CHANGE</span>
              <b>→</b>
              <span>RETRAIN + VERIFY</span>
            </div>

            <div className="method-grid">
              <div>
                <span>A</span>
                <strong>Measure</strong>
                <p>
                  Compare baseline and candidate models to identify the exact
                  behavior that regressed.
                </p>
              </div>

              <div>
                <span>B</span>
                <strong>Trace</strong>
                <p>
                  Use the recorded training history to identify plausible
                  changes associated with the failure.
                </p>
              </div>

              <div>
                <span>C</span>
                <strong>Test</strong>
                <p>
                  Reverse candidate changes independently and retrain under the
                  same controlled conditions.
                </p>
              </div>

              <div>
                <span>D</span>
                <strong>Verify</strong>
                <p>
                  Compare recovery against protected behavior, nuisance
                  restorations, and retraining variability.
                </p>
              </div>
            </div>
          </section>

          <section className="research-block" id="current">
            <div className="research-block-index">03 / CURRENT PHASE</div>

            <h2>Experiment 009</h2>

            <p>
              Experiment 009 was designed in response to the central weakness
              exposed by Experiment 008: restoring the planted root recovered
              the target, but some non-root restorations also produced material
              recovery. A single successful retraining outcome therefore was
              not specific enough to certify causality.
            </p>

            <p>
              The current phase moves beyond the earlier synthetic shape tasks
              to a natural-language Banking77 classification setting. Clean and
              corrupted candidates are paired through controlled initial model
              states and training-slot schedules, and the experiment explicitly
              measures stochastic retraining variability before causal-specificity
              claims are allowed.
            </p>

            <p>
              The first planted corruption pilot used a symmetric label swap at
              dose 1/8. It produced a localized 4.50 percentage-point target
              regression while protected behavior remained effectively stable,
              but it did not meet the prospectively frozen 10-point target
              materiality gate. The threshold was not changed after seeing the
              result; dose calibration continues under the predeclared rule.
            </p>

            <div className="experiment-panel">
              <div className="experiment-head">
                <span>EXP 009</span>
                <strong>ACTIVE</strong>
              </div>

              <div className="experiment-row">
                <span>TASK</span>
                <b>Banking77 · DistilBERT classifier</b>
              </div>

              <div className="experiment-row">
                <span>PAIRING</span>
                <b>controlled initialization + identical slot schedule</b>
              </div>

              <div className="experiment-row">
                <span>1/8 PILOT</span>
                <b>4.50-point target regression · localized</b>
              </div>

              <div className="experiment-row">
                <span>FROZEN GATE</span>
                <b>target drop ≥10 points · protected drop ≤2 points</b>
              </div>

              <div className="experiment-row">
                <span>OFFICIAL TEST</span>
                <b>embargoed during pilot/development</b>
              </div>
            </div>
          </section>

          <section className="research-block" id="latest-complete">
            <div className="research-block-index">
              04 / LATEST COMPLETED CAUSAL TEST
            </div>

            <h2>Experiment 008</h2>

            <p>
              Experiment 008 was a prospectively frozen two-world test with five
              recorded training-data changes per world. One change corrupted
              supervision for the target behavior while four policy-correct
              nuisance changes preserved the intended labels for protected
              behavior.
            </p>

            <p>
              Both candidate worlds produced the required target-localized
              regression with zero protected-behavior drift. The task-aware
              diagnostic uniquely ranked the planted root first in both worlds,
              and restoring that root fully recovered the target with zero
              protected drift in both worlds.
            </p>

            <p>
              Primary causal certification still failed because some non-root
              restorations also produced material target recovery. The result
              therefore supports successful localization and strong planted-root
              restorative influence under that benchmark, but not uniquely
              specific causal verification from a single retraining outcome.
            </p>

            <div className="experiment-panel">
              <div className="experiment-head">
                <span>EXP 008</span>
                <strong>COMPLETE</strong>
              </div>

              <div className="experiment-row">
                <span>DESIGN</span>
                <b>frozen before result-bearing training</b>
              </div>

              <div className="experiment-row">
                <span>CLEAN REFERENCE</span>
                <b>96 / 96 held-out cases</b>
              </div>

              <div className="experiment-row">
                <span>CANDIDATE GATE</span>
                <b>2 / 2 worlds passed</b>
              </div>

              <div className="experiment-row">
                <span>LOCALIZATION</span>
                <b>planted root uniquely Top-1 · 2 / 2</b>
              </div>

              <div className="experiment-row">
                <span>ROOT RESTORATION</span>
                <b>full target recovery · 2 / 2</b>
              </div>

              <div className="experiment-row">
                <span>PRIMARY CERTIFICATION</span>
                <b>failed · non-root recovery was not specific</b>
              </div>
            </div>
          </section>

          <section className="research-block" id="findings">
            <div className="research-block-index">05 / FINDINGS</div>

            <h2>The benchmark became stricter as weaknesses were exposed.</h2>

            <div className="related-work-grid">
              <div>
                <strong>SHORTCUTS CAN MISLEAD</strong>
                <p>
                  Experiment 001 showed that lexical similarity can make a
                  diagnosis appear stronger than the underlying evidence.
                </p>
              </div>

              <div>
                <strong>LOCALIZATION IS NOT VERIFICATION</strong>
                <p>
                  Experiment 004 identified the intended training change, but
                  reversing that change did not repair the target behavior.
                </p>
              </div>

              <div>
                <strong>THE BENCHMARK MUST ALSO PASS</strong>
                <p>
                  Experiments 005 through 007 showed that a useful test requires
                  a measurable target regression without unacceptable damage to
                  unrelated behavior.
                </p>
              </div>

              <div>
                <strong>RETRAINING VARIABILITY MATTERS</strong>
                <p>
                  Experiment 008 restored the planted root perfectly, but some
                  nuisance restorations also recovered the target. Experiment
                  009 therefore treats variability as part of the causal test.
                </p>
              </div>
            </div>
          </section>

          <section className="research-block" id="technical">
            <div className="research-block-index">06 / TECHNICAL SNAPSHOT</div>

            <h2>Controlled training with reproducible experiments.</h2>

            <div className="method-grid technical-grid">
              <div>
                <span>MODELS</span>
                <strong>SmolLM2 → DistilBERT</strong>
                <p>
                  SmolLM2-360M-Instruct powered the completed synthetic series;
                  Experiment 009 uses a Banking77 DistilBERT classifier.
                </p>
              </div>

              <div>
                <span>TRAINING</span>
                <strong>PyTorch · Transformers · PEFT/LoRA</strong>
                <p>Controlled fine-tuning and paired retraining protocols.</p>
              </div>

              <div>
                <span>EVALUATION</span>
                <strong>Target + protected behavior</strong>
                <p>
                  Regression materiality, locality, restoration effects, and
                  stochastic variability are evaluated separately.
                </p>
              </div>

              <div>
                <span>REPRODUCIBILITY</span>
                <strong>Configs · seeds · hashes · provenance</strong>
                <p>
                  Experiment inputs, initial states, schedules, and runtime state
                  are recorded for controlled comparison.
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

          <section className="research-block" id="scope">
            <div className="research-block-index">08 / SCOPE</div>

            <h2>Controlled evidence first, broader claims later.</h2>

            <p>
              Experiments 000 through 008 used controlled synthetic tasks on a
              small language model. They tested the debugging methodology under
              conditions where training history and expected behavior could be
              measured precisely.
            </p>

            <p>
              Experiment 009 moves to a natural-language intent-classification
              task with explicit pairing and stochastic controls. Pilot and
              development work remains separate from the untouched official
              Banking77 test split. The project does not currently claim broad
              generalization or established novelty; larger models and broader
              comparison with data-attribution and influence methods remain
              later research steps.
            </p>
          </section>

          <section className="research-block" id="code">
            <div className="research-block-index">09 / CODE + DETAILS</div>

            <h2>The complete technical record is public.</h2>

            <p>
              The repository contains experiment configs, deterministic data
              preparation, training and evaluation code, tests, decision logs,
              model revisions, dataset hashes, runtime provenance, experiment
              gates, and detailed results.
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
        </div>
      </section>
    </main>
  );
}
