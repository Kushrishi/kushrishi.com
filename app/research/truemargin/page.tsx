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
        <div className="section-label">PROJECT 002 / PUBLIC RESEARCH / M5 COMPLETE</div>
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
          <div><span>STATUS</span><strong>M4 + M5 COMPLETE · M6 DESIGN</strong></div>
          <div><span>QUESTION</span><strong>WHEN IS REGISTRATION UNCERTAINTY TRUSTWORTHY?</strong></div>
          <div><span>PRIMARY RESULT</span><strong>10 / 10 ANATOMIES POSITIVE · MEDIAN ρ 0.684</strong></div>
          <div><span>FAILURE ANALYSIS</span><strong>39 / 1,500 SIGMA BLIND SPOTS · 6 / 30 CASE RANKINGS NEGATIVE</strong></div>
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
              target-minus-ICE interval crosses zero, so the evidence does not establish superiority
              over inverse-consistency error.
            </p>
            <blockquote>
              The useful result is comparative evidence about local quality signals — not a manufactured single winner.
            </blockquote>
          </section>

          <section className="research-block" id="failures">
            <div className="research-block-index">05 / M5 FAILURE CHARACTERIZATION</div>
            <h2>The anatomy-level result is positive, but the signal is not uniformly reliable.</h2>
            <p>
              M5 reconstructed all 1,500 frozen ROI observations from the original hash-verified M4
              patient shards without rerunning registration. Under the original blind-spot rule,
              39 locations were simultaneously in the highest-error quartile and lowest-sigma
              quartile of their case. Those failures occurred in 11 of 30 cases and 7 of 10
              anatomies.
            </p>
            <p>
              Deformation-specific rank behavior was also heterogeneous: 24 of 30 case-level
              sigma/error Spearman associations were positive and 6 were negative. Anatomy
              `aaa0069` was weak across all three replicates, while `aaa0053` contained one severe
              inverted replicate (ρ = -0.902) despite a strong anatomy-level median.
            </p>
            <p>
              ICE had 34 blind-spot points among 1,350 points from its 27 valid cases, and only 12
              of the 39 sigma blind spots overlapped with ICE blind spots. This is descriptive
              failure evidence, not evidence that the signals should be combined.
            </p>
            <blockquote>
              A positive aggregate result does not erase local failure modes; those failures are part of the result.
            </blockquote>
          </section>

          <section className="research-block" id="current">
            <div className="research-block-index">06 / NEXT MILESTONE</div>
            <h2>M6 keeps numerical calibration separate from rank informativeness.</h2>
            <p>
              The next milestone is protocol design for numerical calibration. Before any
              result-bearing calibration work, the quantity being calibrated, fitting/evaluation
              separation, coverage or calibration metrics, failure handling, and inference boundary
              must be frozen prospectively.
            </p>
            <p>
              M4 and M5 are not tuning datasets. The completed estimator, cohort, ROI locations,
              primary statistic, and observed failure cases will not be changed to make calibration
              look better. Robustness and external generalization remain later, separately frozen
              questions.
            </p>
          </section>

          <section className="research-block" id="technical">
            <div className="research-block-index">07 / TECHNICAL SNAPSHOT</div>
            <h2>Built around prospective decisions and reproducible evidence.</h2>
            <div className="method-grid technical-grid">
              <div><span>DATA</span><strong>Public prostate imaging</strong><p>Explicit acquisition provenance and held-out anatomy evaluation.</p></div>
              <div><span>REGISTRATION</span><strong>Deformable B-spline registration</strong><p>Repeated controlled registrations and displacement-field analysis.</p></div>
              <div><span>VALIDATION</span><strong>Synthetic known deformation</strong><p>Ground-truth language is reserved for settings where the deformation is known.</p></div>
              <div><span>REPRODUCIBILITY</span><strong>Frozen protocols · hashes · CI</strong><p>Result-bearing source, inputs, workflow evidence, and claim boundaries are recorded publicly.</p></div>
            </div>
          </section>

          <section className="research-block" id="scope">
            <div className="research-block-index">08 / SCOPE + CODE</div>
            <h2>The evidence is public; the claims stay narrow.</h2>
            <p>
              TrueMargin currently supports a positive but heterogeneous pointwise-rank-
              informativeness result for one frozen estimator in one controlled known-deformation
              study. It does not currently establish numerical calibration, superiority over ICE,
              absence of deformation-specific blind spots, external generalization, clinical
              usefulness, or a completed publication.
            </p>
            <p>
              The public repository contains the current protocols, claims ledger, M4 and M5 result
              records, implementation, tests, provenance, and roadmap.
            </p>
            <a className="text-link" href="https://github.com/Kushrishi/truemargin" target="_blank" rel="noreferrer">View repository →</a>
          </section>
        </div>
      </section>
    </main>
  );
}
