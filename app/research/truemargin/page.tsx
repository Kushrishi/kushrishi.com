import type { Metadata } from "next";
import Link from "next/link";

const researchDescription =
  "Private medical-imaging research on whether registration uncertainty is actually informative about spatial registration error.";

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
        <Link className="wordmark" href="/" prefetch={false}>
          KR
        </Link>

        <Link className="back-link" href="/" prefetch={false}>
          ← Index
        </Link>
      </header>

      <section className="research-hero-page">
        <div className="section-label">PROJECT 002 / PRIVATE RESEARCH / ACTIVE VALIDATION</div>

        <h1>
          TRUE
          <br />
          <em>MARGIN.</em>
        </h1>

        <p className="hero-deck">
          Medical-imaging research on a narrow question: when an image-registration method reports
          uncertainty, does that uncertainty actually identify where the registration is wrong?
        </p>
      </section>

      <section className="research-body">
        <aside className="research-sidebar">
          <div>
            <span>STATUS</span>
            <strong>ACTIVE VALIDATION</strong>
          </div>

          <div>
            <span>QUESTION</span>
            <strong>IS REGISTRATION UNCERTAINTY POINTWISE INFORMATIVE?</strong>
          </div>

          <div>
            <span>LATEST COMPLETED RESULT</span>
            <strong>GATE A DID NOT PASS</strong>
          </div>

          <div>
            <span>CURRENT STUDY</span>
            <strong>REGISTRATION CONVERGENCE</strong>
          </div>

          <div>
            <span>SCOPE</span>
            <strong>RESEARCH ONLY · NO CLINICAL-USE CLAIMS</strong>
          </div>
        </aside>

        <div className="research-copy">
          <section className="research-block" id="problem">
            <div className="research-block-index">01 / PROBLEM</div>

            <h2>Calibration is not the same as knowing where a registration is wrong.</h2>

            <p>
              An uncertainty estimator can look reasonable when results are averaged across a
              dataset and still be unhelpful at the individual locations where an error matters.
              TrueMargin is testing that distinction directly.
            </p>

            <p>
              The real prostate-imaging dataset does not provide independently verified pointwise
              T2-to-DCE correspondences. Real-data error measurements are therefore treated as a
              reference proxy, not as ground truth. Synthetic known-deformation experiments are
              reserved for settings where true registration error can actually be known.
            </p>
          </section>

          <section className="research-block" id="audit">
            <div className="research-block-index">02 / METHOD AUDIT</div>

            <h2>The first task was to test whether the original uncertainty mechanism was doing meaningful work.</h2>

            <p>
              An audit of the historical ensemble found that it added Gaussian noise with a fixed
              raw-intensity standard deviation of 0.02 to DICOM images whose intensity scales were
              often in the hundreds or thousands. That made the perturbation likely too small to
              probe meaningful registration sensitivity.
            </p>

            <p>
              A scale-aware replacement was defined before result-bearing runs: noise magnitude was
              tied to each image&apos;s own intensity standard deviation. Five patients and six frozen
              settings were then evaluated across 150 registrations.
            </p>
          </section>

          <section className="research-block" id="gate-a">
            <div className="research-block-index">03 / COMPLETED RESULT</div>

            <h2>The corrected intensity-perturbation ensemble did not earn promotion.</h2>

            <p>
              None of the tested nonzero perturbation levels satisfied the predeclared combination
              of repeatability, non-inertness, and error-degradation criteria. Small perturbations
              were often difficult to distinguish from baseline repeatability, while larger
              perturbations increasingly produced registration failures or large displacement-field
              divergence.
            </p>

            <div className="experiment-panel">
              <div className="experiment-head">
                <span>GATE A</span>
                <strong>COMPLETE</strong>
              </div>

              <div className="experiment-row">
                <span>WORKLOAD</span>
                <b>5 patients · 6 settings · 5 registrations each</b>
              </div>

              <div className="experiment-row">
                <span>TOTAL</span>
                <b>150 / 150 registrations attempted</b>
              </div>

              <div className="experiment-row">
                <span>SELECTED ALPHA</span>
                <b>none</b>
              </div>

              <div className="experiment-row">
                <span>DECISION</span>
                <b>do not widen the grid post hoc</b>
              </div>
            </div>

            <p>
              The failed gate is part of the result. The experiment was not extended with additional
              perturbation values after the fact to search for a more favorable outcome.
            </p>
          </section>

          <section className="research-block" id="current">
            <div className="research-block-index">04 / CURRENT STUDY</div>

            <h2>Before testing another uncertainty mechanism, the registration itself has to be stable enough.</h2>

            <p>
              Gate A produced enough failures and divergence to raise a more basic question: are the
              uncertainty experiments measuring sensitivity to meaningful perturbations, or partly
              measuring optimizer instability?
            </p>

            <p>
              The current experiment varies only the registration iteration budget while keeping the
              rest of the mesh-3 registration regime fixed. Budgets of 15, 30, 60, and 100 iterations
              are tested with five repeated registrations for each of five patients. The 100-iteration
              regime is the reference, giving a frozen 100-registration study.
            </p>

            <blockquote>
              Proxy error is recorded descriptively, but it is not allowed to choose the iteration budget.
            </blockquote>
          </section>

          <section className="research-block" id="technical">
            <div className="research-block-index">05 / TECHNICAL SNAPSHOT</div>

            <h2>Designed around prospective decisions and reproducible evidence.</h2>

            <div className="method-grid technical-grid">
              <div>
                <span>DATA</span>
                <strong>Public prostate imaging</strong>
                <p>Patient-level T2/DCE registration experiments with explicit data provenance.</p>
              </div>

              <div>
                <span>REGISTRATION</span>
                <strong>Deformable image registration</strong>
                <p>Repeated registrations and displacement-field comparisons under frozen settings.</p>
              </div>

              <div>
                <span>UNCERTAINTY</span>
                <strong>Repeatability and calibration</strong>
                <p>Aggregate behavior is kept separate from pointwise informativeness.</p>
              </div>

              <div>
                <span>VALIDATION</span>
                <strong>Real proxy + synthetic known deformation</strong>
                <p>Ground-truth language is reserved for experiments where the deformation is known.</p>
              </div>
            </div>
          </section>

          <section className="research-block" id="next">
            <div className="research-block-index">06 / NEXT</div>

            <h2>The next uncertainty experiment depends on the convergence result.</h2>

            <p>
              If a stable registration regime is established, the next uncertainty mechanism will
              be specified before its results are observed. Candidate directions include controlled
              initialization or registration-parameter perturbations, followed by sensitivity checks,
              synthetic known-deformation experiments, final cohort analysis, and manuscript
              reconciliation.
            </p>

            <p>
              TrueMargin remains private while the methodology is still being tested. The project
              currently makes no clinical-performance, diagnostic, or deployment claims.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
