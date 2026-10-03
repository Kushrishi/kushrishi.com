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
        <div className="section-label">PROJECT 001 / PUBLIC RESEARCH / M6 CALIBRATION ACTIVE</div>
        <h1>
          TRUE
          <br />
          <em>MARGIN.</em>
        </h1>
        <p className="hero-deck">
          Research on whether local uncertainty from deformable image registration contains useful
          information about true local spatial error, and where that signal fails.
        </p>
      </section>

      <section className="research-body">
        <aside className="research-sidebar">
          <div><span>STATUS</span><strong>M4 + M5 COMPLETE · M6 ACTIVE</strong></div>
          <div><span>QUESTION</span><strong>WHEN IS REGISTRATION UNCERTAINTY INFORMATIVE?</strong></div>
          <div><span>PRIMARY RESULT</span><strong>10 / 10 ANATOMIES POSITIVE · MEDIAN ρ 0.684</strong></div>
          <div><span>FAILURE ANALYSIS</span><strong>39 / 1,500 SIGMA BLIND SPOTS · 6 / 30 CASE RANKINGS NEGATIVE</strong></div>
          <div><span>COMPARATOR</span><strong>ICE PERFORMED COMPARABLY · NO SUPERIORITY CLAIM</strong></div>
          <div><span>SCOPE</span><strong>RESEARCH ONLY · NO CLINICAL-USE CLAIM</strong></div>
        </aside>

        <div className="research-copy">
          <section className="research-block" id="question">
            <div className="research-block-index">01 / QUESTION</div>
            <h2>An uncertainty signal is useful only if it tells us something about actual registration error.</h2>
            <p>
              TrueMargin separates operational variability, pointwise informativeness, numerical
              calibration, blind spots, and generalization. Real prostate registration data do not
              provide independently verified pointwise correspondence ground truth, so the primary
              validation study uses synthetic known deformations where local spatial error can be
              measured directly.
            </p>
          </section>

          <section className="research-block" id="design">
            <div className="research-block-index">02 / STUDY DESIGN</div>
            <h2>The uncertainty estimator was promoted prospectively before the primary result.</h2>
            <p>
              Two earlier candidate mechanisms failed frozen promotion gates and were retained as
              negative results. A nine-member registration-hyperparameter ensemble then passed its
              operational gate and was frozen for the known-ground-truth study. The primary analysis
              used anatomy-level inference so repeated spatial samples were not treated as
              independent subjects.
            </p>
            <blockquote>
              Operational variability was required before evaluation, but it was not treated as proof of true-error informativeness.
            </blockquote>
          </section>

          <section className="research-block" id="result">
            <div className="research-block-index">03 / PRIMARY RESULT</div>
            <h2>The frozen uncertainty signal carried substantial local rank information about true spatial error.</h2>
            <div className="experiment-panel">
              <div className="experiment-head"><span>M4 KNOWN-GT</span><strong>COMPLETE</strong></div>
              <div className="experiment-row"><span>CASES</span><b>30 / 30 complete · 10 anatomies</b></div>
              <div className="experiment-row"><span>ANATOMY ASSOCIATIONS</span><b>10 / 10 positive</b></div>
              <div className="experiment-row"><span>MEDIAN SPEARMAN</span><b>0.6841</b></div>
              <div className="experiment-row"><span>BOOTSTRAP 95% CI</span><b>[0.3048, 0.8284]</b></div>
              <div className="experiment-row"><span>ONE-SIDED SIGN TEST</span><b>p = 0.0009766</b></div>
            </div>
            <p>
              The bounded conclusion is that larger ensemble spread tended to rank locations with
              larger known local error in this frozen synthetic study. This does not establish
              numerical calibration, clinical validity, or external-dataset generalization.
            </p>
          </section>

          <section className="research-block" id="boundaries">
            <div className="research-block-index">04 / COMPARATORS + FAILURES</div>
            <h2>The positive aggregate result does not imply uniform reliability or method superiority.</h2>
            <p>
              Median anatomy-level Spearman association was 0.7203 for inverse-consistency error
              (ICE), 0.2851 for same-modality residual, and 0.1689 for Jacobian deviation, versus
              0.6841 for the target sigma. Paired bootstrap summaries support stronger rank
              informativeness than residual and Jacobian deviation in this study, but not
              superiority over ICE.
            </p>
            <p>
              M5 reconstructed all 1,500 frozen ROI observations without rerunning registration.
              Sigma produced 39 high-error, low-sigma blind spots across 11 of 30 cases, and 6 of 30
              case-level rank associations were negative. These failures are part of the result, not
              cases to be tuned away.
            </p>
          </section>

          <section className="research-block" id="current">
            <div className="research-block-index">05 / CURRENT MILESTONE</div>
            <h2>M6 asks whether rank information can be converted into honest numerical error bounds.</h2>
            <p>
              M6 is an active prospective calibration study with a frozen source-stratified split:
              30 calibration anatomies and 30 sealed evaluation anatomies. Source-specific
              hierarchical conformal prediction evaluates the ensemble uncertainty signal alongside
              inverse-consistency error. Calibration thresholds must be reviewed and sealed before
              evaluation. Numerical calibration remains unestablished; M4 and M5 remain locked.
            </p>
          </section>

          <section className="research-block" id="scope">
            <div className="research-block-index">06 / SCOPE + CODE</div>
            <h2>The evidence is public and the claims remain narrow.</h2>
            <p>
              TrueMargin currently supports a positive but heterogeneous pointwise rank-
              informativeness result for one frozen estimator in one controlled known-deformation
              study. It does not currently establish numerical calibration, superiority over ICE,
              external generalization, clinical usefulness, or a completed publication.
            </p>
            <p>
              The public repository contains the protocols, claims ledger, result records,
              implementation, tests, provenance, and roadmap.
            </p>
            <a className="text-link" href="https://github.com/Kushrishi/truemargin" target="_blank" rel="noreferrer">View repository →</a>
          </section>
        </div>
      </section>
    </main>
  );
}
