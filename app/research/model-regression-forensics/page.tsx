import type { Metadata } from "next";
import Link from "next/link";

const researchDescription =
  "Researching how to trace a model regression back to the training change that caused it, then test the diagnosis by undoing that change and retraining.";

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
    "Built and reproduced the basic train → break → diagnose → repair experiment pipeline.",
  ],
  [
    "EXP 001",
    "2026-08",
    "The debugger found the planted change, but a simple text-matching shortcut made the test too easy.",
  ],
  [
    "EXP 002",
    "2026-08",
    "Removed the obvious shortcut. The hidden change was still found, and reversing it improved the target behavior.",
  ],
  [
    "EXP 003",
    "2026-08",
    "A harder task failed even before debugging began, so the experiment was stopped instead of forcing a result.",
  ],
  [
    "EXP 003-C/D",
    "2026-08",
    "Follow-up tests showed which parts of the harder task the model could and could not reliably learn.",
  ],
  [
    "EXP 004",
    "2026-08",
    "The debugger picked the intended change, but reversing that change did not repair the model. Ranking was not enough.",
  ],
  [
    "EXP 005–006",
    "2026-09",
    "Better-controlled training changes still failed to create the clean, isolated model regression the benchmark needed.",
  ],
  [
    "EXP 007",
    "2026-09",
    "The intended failure finally appeared, but unrelated behaviors broke too. The experiment stopped at its predefined gate.",
  ],
  [
    "EXP 008",
    "2026-09",
    "Current experiment. The setup was fixed before training. The clean reference model scored 96/96; changed-model evaluation is underway.",
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
          PROJECT 001 / ACTIVE RESEARCH / EXPERIMENT 008
        </div>

        <h1>
          MODEL
          <br />
          REGRESSION
          <br />
          <em>FORENSICS.</em>
        </h1>

        <p className="hero-deck">
          When a model gets worse after retraining, I want to know which training
          change caused it — and test that answer by undoing the change and
          seeing whether the model recovers.
        </p>
      </section>

      <section className="research-body">
        <aside className="research-sidebar">
          <div>
            <span>STATUS</span>
            <strong>EXP 008 IN PROGRESS</strong>
          </div>

          <div>
            <span>QUESTION</span>
            <strong>WHICH TRAINING CHANGE CAUSED THE FAILURE?</strong>
          </div>

          <div>
            <span>LATEST RESULT</span>
            <strong>CLEAN MODEL · 96/96</strong>
          </div>

          <div>
            <span>SCOPE</span>
            <strong>CONTROLLED ML EXPERIMENTS</strong>
          </div>
        </aside>

        <div className="research-copy">
          <section className="research-block" id="problem">
            <div className="research-block-index">01 / THE PROBLEM</div>

            <h2>Seeing a model fail is not the same as knowing why.</h2>

            <p>
              Imagine version A of a model works correctly. You retrain it with
              new data and produce version B. Version B now fails on something
              version A handled correctly.
            </p>

            <p>
              You may know that hundreds or thousands of things changed during
              training, but that does not tell you which change caused the new
              behavior. That is the debugging problem I am studying.
            </p>
          </section>

          <section className="research-block" id="idea">
            <div className="research-block-index">02 / THE CORE IDEA</div>

            <blockquote>
              Do not stop at “this training change looks suspicious.” Undo it
              and see whether the model gets better.
            </blockquote>

            <div className="pipeline research-pipeline">
              <span>MODEL GETS WORSE</span>
              <b>→</b>
              <span>COMPARE TRAINING CHANGES</span>
              <b>→</b>
              <span>PICK LIKELY CAUSE</span>
              <b>→</b>
              <span>UNDO IT</span>
              <b>→</b>
              <span>RETRAIN + TEST</span>
            </div>
          </section>

          <section className="research-block" id="method">
            <div className="research-block-index">03 / HOW IT WORKS</div>

            <div className="method-grid">
              <div>
                <span>A</span>
                <strong>Detect</strong>
                <p>
                  Measure exactly what got worse between the old and new model.
                </p>
              </div>

              <div>
                <span>B</span>
                <strong>Narrow</strong>
                <p>
                  Compare the training changes and rank which ones are most
                  suspicious.
                </p>
              </div>

              <div>
                <span>C</span>
                <strong>Test</strong>
                <p>
                  Undo one suspected change and retrain under the same
                  conditions.
                </p>
              </div>

              <div>
                <span>D</span>
                <strong>Verify</strong>
                <p>
                  Check whether the broken behavior recovers without damaging
                  other behavior.
                </p>
              </div>
            </div>
          </section>

          <section className="research-block" id="current">
            <div className="research-block-index">
              04 / CURRENT EXPERIMENT
            </div>

            <h2>Experiment 008: five possible changes, one intended cause.</h2>

            <p>
              Experiment 008 starts with a clean model and five different
              training-data changes. One change is designed to cause a specific
              failure. The other four are distractions.
            </p>

            <p>
              First, I train the changed model and check whether the intended
              failure actually appears while the rest of the model stays stable.
              If that succeeds in both test worlds, I undo each change one at a
              time and retrain.
            </p>

            <p>
              The strongest result would be simple: reversing one specific
              change repairs the failure, while reversing the other four does
              not.
            </p>

            <div className="experiment-panel">
              <div className="experiment-head">
                <span>EXP 008</span>
                <strong>IN PROGRESS</strong>
              </div>

              <div className="experiment-row">
                <span>SETUP</span>
                <b>defined before model training</b>
              </div>

              <div className="experiment-row">
                <span>CLEAN MODEL</span>
                <b>96 / 96 held-out cases</b>
              </div>

              <div className="experiment-row">
                <span>NOW</span>
                <b>evaluating the changed models</b>
              </div>

              <div className="experiment-row">
                <span>NEXT IF THEY PASS</span>
                <b>undo each possible cause and retrain</b>
              </div>
            </div>
          </section>

          <section className="research-block" id="why">
            <div className="research-block-index">
              05 / WHY SO MANY EXPERIMENTS?
            </div>

            <h2>The failed experiments are part of the result.</h2>

            <p>
              Earlier versions of the benchmark kept exposing ways this problem
              could look solved when it really was not. Instead of hiding those
              failures, each one became a reason to make the next experiment
              stricter.
            </p>

            <div className="related-work-grid">
              <div>
                <strong>SHORTCUTS CAN FOOL US</strong>
                <p>
                  A debugger can appear to find the right answer simply because
                  one training change contains obvious matching words.
                </p>
              </div>

              <div>
                <strong>A GOOD GUESS IS NOT PROOF</strong>
                <p>
                  Experiment 004 picked the intended change, but reversing it
                  did not fix the model. That showed why the repair test matters.
                </p>
              </div>

              <div>
                <strong>THE TEST ITSELF CAN FAIL</strong>
                <p>
                  Some experiments never produced the intended model failure.
                  Others broke too many unrelated behaviors. Those are benchmark
                  failures, not debugging successes.
                </p>
              </div>
            </div>
          </section>

          <section className="research-block" id="log">
            <div className="research-block-index">06 / RESEARCH LOG</div>

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
            <div className="research-block-index">07 / SCOPE</div>

            <h2>What this project does and does not claim.</h2>

            <p>
              These are controlled synthetic experiments on a small language
              model. They are meant to test the debugging method carefully
              before trying to generalize it to larger, messier, real-world
              regressions.
            </p>

            <p>
              Related work already exists in model comparison, training-data
              attribution, influence estimation, and ML debugging. I am testing
              whether those ideas can fit into an end-to-end workflow where a
              suspected cause is checked by actually reversing it.
            </p>
          </section>

          <section className="research-block" id="code">
            <div className="research-block-index">08 / CODE + DETAILS</div>

            <h2>The technical record is public.</h2>

            <p>
              The repository contains the experiment configs, preparation
              scripts, training and evaluation code, tests, decision logs, and
              detailed results. Deeper documentation records the exact model
              revision, dataset hashes, training settings, and experiment rules.
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
            <span>NOTE / 2026-09</span>

            <p>
              Experiment 008 is still running. The clean reference model has
              passed 96/96 held-out cases. No causal success is being claimed
              unless the changed-model and repair tests also pass the rules
              defined before training.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
