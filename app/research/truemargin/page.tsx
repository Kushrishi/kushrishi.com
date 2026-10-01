import type { Metadata } from "next";
import Link from "next/link";

const researchDescription =
  "Medical-image-computing research on whether local registration uncertainty is informative about true local spatial error.";

export const metadata: Metadata = {
  title: "TrueMargin | Kush Rishi",
  description: researchDescription,
  alternates: {
    canonical: "/research/truemargin",
  },
  openGraph: {
    title: "TrueMargin | Kush Rishi",
    description: researchDescription,
    url: "/research/truemargin",
    siteName: "Kush Rishi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TrueMargin | Kush Rishi",
    description: researchDescription,
  },
};

export default function TrueMarginPage() {
  return (
    <main className="research-page">
      <header className="site-header compact-header">
        <Link className="wordmark" href="/" prefetch={false}>KR</Link>
        <Link className="back-link" href="/" prefetch={false}>← Index</Link>
      </header>

      <section className="research-hero-page">
        <div className="section-label">PROJECT 002 / PUBLIC RESEARCH / M5 ACTIVE</div>
        <h1>
          TRUE
          <br />
          <em>MARGIN.</em>
        </h1>
        <p className="hero-deck">
          Medical-image-computing research asking whether local uncertainty from deformable image
          registration actually contains useful information about true local spatial error.
        </p>
      </section>

      <section className="research-body">
        <aside className="research-sidebar">
          <div><span>STATUS</span><strong>M4 COMPLETE · M5 ACTIVE</strong></div>
          <div><span>QUESTION</span><strong>IS REGISTRATION UNCERTAINTY POINTWISE INFORMATIVE?</strong></div>
          <div><span>PRIMARY RESULT</span><strong>10 / 10 ANATOMIES POSITIVE · MEDIAN ρ 0.684</strong></div>
          <div><span>COMPARATOR</span><strong>ICE PERFORMED COMPARABLY · NO SUPERIORITY CLAIM</strong></div>
          <div><span>SCOPE</span><strong>RESEARCH ONLY · NO CLINICAL-USE CLAIMS</strong></div>
        </aside>

        <div className="research-copy">
          <section className="research-block" id="problem">
            <div className="research-block-index">01 / PROBLEM</div>
            <h2>Knowing an uncertainty value is not the same as knowing where a registration is wrong.</h2>
            <p>
              Image-registration methods can produce confidence or variability signals that look
              plausible in aggregate while failing at the specific locations where spatial error
              matters. TrueMargin separates operational variability, pointwise informativeness,
              calibration, blind spots, and generalization instead of treating them as one question.
            </p>
            <p>
              Real T2-to-DCE prostate data do not provide independently verified pointwise
              correspondence ground truth. Historical real-data error measurements are therefore
              treated as reference proxies. The primary validation study uses synthetic known
              deformations, where local registration error can actually be measured.
            </p>
          </section>

          <section className="research-block" id="rebuild">
            <div className="research-block-index">02 / PROSPECTIVE REBUILD</div>
            <h2>Negative mechanism tests were kept instead of tuned away.</h2>
            <p>
              The research program first audited the original intensity-perturbation ensemble and
              found that its fixed raw noise scale was poorly matched to the underlying image
              intensities. A scale-aware replacement was specified prospectively, but it failed its
              frozen promotion gate. A later initialization-sensitivity ensemble also failed its
              frozen gate.
            </p>
            <p>
              Registration convergence was then tested separately. The mesh-3, 15-iteration regime
              passed the predefined field-stability rule. A nine-member hyperparameter ensemble —
              Mattes-MI bins 32/50/64 crossed with gradient tolerances 1e-4/1e-5/1e-6 — subsequently
              passed its operational promotion criterion and became the frozen estimator for the
              known-ground-truth study.
            </p>
            <blockquote>
              Operational variability was treated as necessary evidence, not proof that the signal tracked true error.
            </blockquote>
          </section>

          <section className="research-block" id="known-gt">
            <div className="research-block-index">03 / PRIMARY KNOWN-GROUND-TRUTH RESULT</div>
            <h2>The promoted uncertainty signal was informative about true local spatial error.</h2>
            <p>
              The source-pinned M4 study completed on September 26, 2026 under the frozen protocol,
              cohort, deformation design, spatial sampling rule, comparator specification, and
              540-registration execution budget. It evaluated 30 synthetic known-deformation cases
              across ten held-out anatomies, with 50 fixed-domain ROI locations per case.
            </p>
            <div className="experiment-panel">
              <div className="experiment-head"><span>M4 KNOWN-GT</span><strong>COMPLETE</strong></div>
              <div className="experiment-row"><span>CASES</span><b>30 / 30 complete · 10 anatomies</b></div>
              <div className="experiment-row"><span>ANATOMY ASSOCIATIONS</span><b>10 / 10 positive</b></div>
              <div className="experiment-row"><span>MEDIAN SPEARMAN</span><b>0.6841</b></div>
              <div className="experiment-row"><span>BOOTSTRAP 95% CI</span><b>[0.3048, 0.8284]</b></div>
              <div className="experiment-row"><span>ONE-SIDED SIGN TEST</span><b>p = 0.0009766</b></div>
            </div>
            <p>
              The bounded conclusion is that, in this frozen synthetic known-deformation study,
              larger hyperparameter-ensemble spread tended to rank locations with larger true local
              registration error. The result does not establish numerical calibration, clinical
              validity, or external-dataset generalization.
            </p>
          </section>

          <section className="research-block" id="comparators">
            <div className="research-block-index">04 / COMPARATOR BOUNDARY</div>
            <h2>The strongest comparator prevents a universal method-superiority claim.</h2>
            <p>
              The prospectively frozen comparator suite included inverse-consistency error (ICE),
              same-modality post-registration residual, and Jacobian deviation. Median anatomy-level
              Spearman association was 0.7203 for ICE, 0.2851 for residual, and 0.1689 for Jacobian
              deviation, versus 0.6841 for the target sigma.
            </p>
            <p>
              Paired anatomy-level bootstrap intervals support stronger rank informativeness for the
              target sigma than the residual and Jacobian-deviation comparators in this study. The
              target-minus-ICE interval crosses zero, so the evidence does <strong>not</strong>
              establish superiority over inverse-consistency error.
            </p>
            <blockquote>
              The useful result is comparative evidence about local quality signals — not a manufactured single winner.
            </blockquote>
          </section>

          <section className="research-block" id="current">
            <div className="research-block-index">05 / CURRENT MILESTONE</div>
            <h2>M5 asks where the signal fails, not whether the headline correlation can be made larger.</h2>
            <p>
              The current work is anatomy-aware comparator, blind-spot, and failure analysis using
              the frozen M4 outputs. High-error / low-reported-uncertainty cases, invalid comparator
              cases, and weak-anatomy behavior are preserved rather than filtered away.
            </p>
            <p>
              Calibration remains a separate downstream question. Any robustness study must be
              frozen before its result-bearing execution, and external generalization requires a
              genuinely independent substrate.
            </p>
          </section>

          <section className="research-block" id="technical">
            <div className="research-block-index">06 / TECHNICAL SNAPSHOT</div>
            <h2>Built around prospective decisions and reproducible evidence.</h2>
            <div className="method-grid technical-grid">
              <div><span>DATA</span><strong>Public prostate imaging</strong><p>Explicit acquisition provenance and held-out anatomy evaluation.</p></div>
              <div><span>REGISTRATION</span><strong>Deformable B-spline registration</strong><p>Repeated controlled registrations and displacement-field analysis.</p></div>
              <div><span>VALIDATION</span><strong>Synthetic known deformation</strong><p>Ground-truth language is reserved for settings where the deformation is known.</p></div>
              <div><span>REPRODUCIBILITY</span><strong>Frozen protocols · hashes · CI</strong><p>Result-bearing source, inputs, workflow evidence, and claim boundaries are recorded publicly.</p></div>
            </div>
          </section>

          <section className="research-block" id="scope">
            <div className="research-block-index">07 / SCOPE + CODE</div>
            <h2>The evidence is public; the claims stay narrow.</h2>
            <p>
              TrueMargin currently supports a positive pointwise-rank-informativeness result for one
              frozen estimator in one controlled known-deformation study. It does not currently
              establish numerical calibration, superiority over ICE, external generalization,
              clinical usefulness, or a completed publication.
            </p>
            <p>
              The public repository contains the current protocols, claims ledger, result record,
              implementation, tests, provenance, and roadmap.
            </p>
            <a className="text-link" href="https://github.com/Kushrishi/truemargin" target="_blank" rel="noreferrer">View repository →</a>
          </section>
        </div>
      </section>
    </main>
  );
}
