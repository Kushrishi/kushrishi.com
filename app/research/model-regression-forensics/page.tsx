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
        <div className="section-label">PROJECT 001 / ACTIVE RESEARCH / EXP009 · M4</div>
        <h1>
          MODEL
          <br />
          REGRESSION
          <br />
          <em>FORENSICS.</em>
        </h1>
        <p className="hero-deck">
          Independent ML research on what evidence is sufficient to identify the training change
          responsible for a model regression rather than a merely correlated one.
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
          <section className="research-block" id="problem">
            <div className="research-block-index">01 / PROBLEM</div>
            <h2>Detecting a regression does not explain its cause.</h2>
            <p>
              A model can lose a capability after retraining while many data or configuration
              changes appear plausibly related. Ranking one change as suspicious is useful, but it
              is not the same as showing that the change was specifically responsible for the
              observed failure.
            </p>
            <p>
              MRF therefore separates localization, restorative influence, and causal specificity.
              A candidate is not treated as causally supported merely because an attribution score
              is high or because one retraining run improves after the candidate is reverted.
            </p>
          </section>

          <section className="research-block" id="approach">
            <div className="research-block-index">02 / APPROACH</div>
            <blockquote>
              Localize a plausible cause, reverse it, retrain under controlled pairing, and ask whether the recovery is distinguishable from plausible alternatives and ordinary retraining variability.
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
            <div className="research-block-index">03 / EXP009 DEVELOPMENT EVIDENCE</div>
            <h2>Paired development trajectories produced a reproducible localized regression and favorable restoration separation.</h2>
            <p>
              Experiment 009 moved the project to Banking77 with a pinned DistilBERT classifier,
              deterministic versioned training releases, and repeated paired training trajectories.
              A 1/4 symmetric label-mapping fault changes 66 stable training slots for the pilot
              target behavior.
            </p>
            <div className="experiment-panel">
              <div className="experiment-head"><span>STAGE A + B</span><strong>DEVELOPMENT COMPLETE</strong></div>
              <div className="experiment-row"><span>PAIRED TRAJECTORIES</span><b>3</b></div>
              <div className="experiment-row"><span>MEAN TARGET REGRESSION</span><b>0.1293</b></div>
              <div className="experiment-row"><span>STAGE-B TRAININGS</span><b>18 / 18 complete</b></div>
              <div className="experiment-row"><span>MEAN ROOT RECOVERY</span><b>+0.1244</b></div>
              <div className="experiment-row"><span>MEAN ROOT − STRONGEST NUISANCE</span><b>+0.1195</b></div>
            </div>
            <p>
              A truth-isolated last-layer Grad-Dot baseline ranked the planted root first in all
              three Stage-A trajectories. Root restoration also exceeded every nuisance restoration
              in all three Stage-B trajectories. These are development results, not confirmatory
              causal-certification evidence.
            </p>
          </section>

          <section className="research-block" id="m3">
            <div className="research-block-index">04 / M3 STRUCTURALLY MATCHED BENCHMARK</div>
            <h2>The next benchmark removes a structural shortcut exposed by the development pilot.</h2>
            <p>
              The Stage-A/Stage-B nuisance construction was useful for intervention-effect
              development, but root and nuisance diffs were structurally distinguishable. M3 was
              therefore designed so that every candidate has the same observable change structure:
              exactly 66 stable-slot label changes, 33 in each direction, zero text changes,
              preserved aggregate label mass, two touched labels, and the same candidate-facing
              schema.
            </p>
            <p>
              The original protocol requested three worlds of five globally intent-disjoint
              candidates. Before any matched-benchmark model training, clean-only capacity analysis
              found a maximum matching of 13 eligible disjoint pairs, fewer than the 15 required.
              The eligibility rule was not weakened. A prospective amendment reduced the design to
              two complete worlds.
            </p>
            <div className="experiment-panel">
              <div className="experiment-head"><span>M3</span><strong>COMPLETE</strong></div>
              <div className="experiment-row"><span>WORLDS</span><b>2</b></div>
              <div className="experiment-row"><span>CANDIDATES</span><b>5 per world · 10 total</b></div>
              <div className="experiment-row"><span>UNIQUE TOUCHED INTENTS</span><b>20</b></div>
              <div className="experiment-row"><span>STRUCTURAL PREFLIGHT</span><b>passed</b></div>
              <div className="experiment-row"><span>MATCHED MODEL TRAINING</span><b>not yet performed</b></div>
            </div>
            <p>
              Passing M3 establishes benchmark construction only. It does not establish that any
              diagnostic can localize the root in the new worlds, and it does not establish causal
              specificity.
            </p>
          </section>

          <section className="research-block" id="current">
            <div className="research-block-index">05 / CURRENT MILESTONE</div>
            <h2>M4 tests whether localization remains meaningful once the candidate structure is matched.</h2>
            <p>
              The current milestone compares target-compatible diagnostics before any later
              certify/abstain protocol is treated as confirmatory. Required baselines include a
              seeded random reference, a simple semantic or changed-record-overlap reference where
              applicable, target-faithful last-layer Grad-Dot, and modern influence/data-attribution
              methods only when their objective can be implemented faithfully for the frozen target.
            </p>
            <blockquote>
              If a simple baseline solves localization, that is a result. It is not a reason to redesign the benchmark after seeing it.
            </blockquote>
          </section>

          <section className="research-block" id="why">
            <div className="research-block-index">06 / WHY CERTIFICATION IS SEPARATE</div>
            <h2>Earlier experiments showed why attribution and causal verification cannot be collapsed.</h2>
            <p>
              In Experiment 008, the planted root was localized correctly and restoring it fully
              recovered the target in both worlds. Yet some non-root restorations also produced
              material recovery, so the prospectively defined causal-specificity criterion failed.
            </p>
            <p>
              Experiment 009 therefore treats retraining variability and plausible alternative
              interventions as part of the causal test. The eventual research target is a
              prospectively defined certify-or-abstain decision, not a claim that every regression
              has a uniquely identifiable training-data cause.
            </p>
          </section>

          <section className="research-block" id="technical">
            <div className="research-block-index">07 / TECHNICAL SNAPSHOT</div>
            <h2>Controlled training with explicit provenance.</h2>
            <div className="method-grid technical-grid">
              <div><span>TASK</span><strong>Banking77 · DistilBERT</strong><p>Natural-language intent classification with versioned training releases.</p></div>
              <div><span>TRAINING</span><strong>PyTorch · Transformers</strong><p>Paired initialization and training schedules for controlled retraining.</p></div>
              <div><span>EVALUATION</span><strong>Target + protected behavior</strong><p>Materiality, locality, restoration effects, and stochastic variability are separated.</p></div>
              <div><span>REPRODUCIBILITY</span><strong>Configs · seeds · hashes · CI</strong><p>Protocols, source identities, manifests, runtime provenance, and negative results are retained.</p></div>
            </div>
          </section>

          <section className="research-block" id="scope">
            <div className="research-block-index">08 / SCOPE + CODE</div>
            <h2>The benchmark is structurally matched; the scientific claim remains incomplete.</h2>
            <p>
              MRF does not currently establish successful localization on the new matched benchmark,
              confirmatory causal certification, superiority to modern attribution methods,
              cross-model or cross-dataset generalization, or a completed publication.
            </p>
            <p>
              The public repository contains the experimental protocols, code, tests, development
              evidence, matched-benchmark construction, claims ledger, and roadmap.
            </p>
            <a className="text-link" href="https://github.com/Kushrishi/model-regression-forensics" target="_blank" rel="noreferrer">View repository →</a>
          </section>
        </div>
      </section>
    </main>
  );
}
