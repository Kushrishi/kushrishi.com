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
        <Link className="back-link" href="/" prefetch={false}>← Portfolio</Link>
      </header>

      <section className="research-hero-page">
        <div className="section-label">INDEPENDENT RESEARCH / COMPLETED CASE STUDY</div>
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
          <div><span>STATUS</span><strong>CONTROLLED + HELD-OUT STUDIES COMPLETE</strong></div>
          <div><span>QUESTION</span><strong>WHEN IS REGISTRATION UNCERTAINTY INFORMATIVE?</strong></div>
          <div><span>PRIMARY RESULT</span><strong>10 / 10 ANATOMIES POSITIVE · MEDIAN ρ 0.684</strong></div>
          <div><span>FAILURE ANALYSIS</span><strong>39 / 1,500 HIGH-ERROR, LOW-UNCERTAINTY OBSERVATIONS · 6 / 30 CASE RANKINGS NEGATIVE</strong></div>
          <div><span>COMPARATOR</span><strong>NO ESTABLISHED ADVANTAGE OVER INVERSE-CONSISTENCY ERROR</strong></div>
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
            <h2>The primary estimator was selected before the known-error evaluation.</h2>
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
              <div className="experiment-head"><span>KNOWN-ERROR STUDY</span><strong>COMPLETE</strong></div>
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
              The failure analysis reused the same 1,500 ROI observations without rerunning registration.
              Sigma produced 39 high-error, low-sigma blind spots across 11 of 30 cases, and 6 of 30
              case-level rank associations were negative. These failures are part of the result, not
              cases to be tuned away.
            </p>
          </section>

          <section className="research-block" id="current">
            <div className="research-block-index">05 / HELD-OUT CALIBRATION</div>
            <h2>High coverage did not establish useful numerical precision.</h2>
            <p>
              A separate study used 30 calibration and 30 evaluation anatomies across
              two acquisition sources. Thresholds were sealed before evaluation. At nominal 90%,
              equal-anatomy empirical coverage was 97.73% and 99.73%, with median anatomy radii
              of 3.93 mm and 4.36 mm. One anatomy had a 70.69 mm median radius.
            </p>
            <p>
              The 95% thresholds are infinite under the frozen 15-calibration-group construction;
              their coverage is not finite-radius validation. ICE failures prevented the planned
              full-cohort calibrated comparison. These are conservative bounds in a synthetic
              study, not evidence of clinical precision or an adaptive-efficiency advantage.
            </p>
          </section>

          <section className="research-block" id="scope">
            <div className="research-block-index">06 / SCOPE + CODE</div>
            <h2>The evidence is public and the claims remain narrow.</h2>
            <p>
              TrueMargin currently supports a positive but heterogeneous local rank-information result for one frozen estimator in one controlled known-deformation
              study, followed by conservative held-out coverage with important radius-size limits.
              It does not establish useful clinical error bounds, superiority over ICE,
              external generalization, clinical usefulness, or a peer-reviewed publication.
            </p>
            <p>
              The public repository contains the protocols, claims ledger, result records,
              implementation, tests, provenance, and roadmap.
            </p>
            <p>
              Current development tests an ordinary affine error scale: a baseline error term plus
              ensemble spread. Retained-data comparisons produced smaller mean radii than the
              spread-only mapping across six source/split settings, at different achieved coverage.
              These analyses reuse previously observed evaluation anatomies and do not establish
              superiority or a new confirmatory result. Development validation must precede a fresh study.
            </p>
            <a className="text-link" href="https://github.com/Kushrishi/truemargin" target="_blank" rel="noreferrer">View repository →</a>
            <p><a className="text-link" href="https://github.com/Kushrishi/truemargin/blob/main/docs/technical_report.md" target="_blank" rel="noreferrer">Read technical report →</a></p>
            <p><a className="text-link" href="https://github.com/Kushrishi/truemargin/blob/main/docs/m6_failure_diagnostics.md" target="_blank" rel="noreferrer">Review failure diagnostics →</a></p>
            <p><a className="text-link" href="https://github.com/Kushrishi/truemargin/blob/main/docs/m6_scale_development.md" target="_blank" rel="noreferrer">Review exploratory scale analysis →</a></p>
          </section>
        </div>
      </section>
    </main>
  );
}
