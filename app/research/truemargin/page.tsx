import type { Metadata } from "next";
import { LaunchPage, MethodChain } from "@/components/LaunchPage";
import { EvidenceExplorer } from "@/components/EvidenceExplorer";
import { TrueMarginOverview } from "@/components/PublicationEvidence";

const description = "Controlled experiments on registration variability, spatial error and calibrated bounds.";
const repo = "https://github.com/Kushrishi/truemargin";
export const metadata: Metadata = {
  title: "TrueMargin | Kush Rishi",
  description,
  alternates: { canonical: "/research/truemargin" },
  openGraph: { title: "TrueMargin | Kush Rishi", description, url: "/research/truemargin", type: "website" },
  twitter: { card: "summary_large_image", title: "TrueMargin | Kush Rishi", description },
};

export default function Page() {
  return (
    <LaunchPage
      number="02"
      title="TrueMargin"
      question="Can disagreement between image registrations reveal alignment error?"
      summary="Experiments on whether variation between image alignments helps identify spatial error. The study compares error estimates with known deformations and simpler methods."
      status="Completed controlled studies"
      stack="Python / SimpleITK / numerical evaluation"
      links={[
        { label: "Code", href: repo },
        { label: "MIT licence", href: `${repo}/blob/main/LICENSE` },
        { label: "Technical report", href: `${repo}/blob/main/docs/technical_report.md` },
      ]}
      visual={<EvidenceExplorer />}
      sections={[
        {
          id: "question",
          title: "The question",
          content: <p>Image registration aligns two scans. This study asks whether variation between registrations identifies local spatial error. Error ranking, blind spots and calibrated bounds are evaluated separately.</p>,
        },
        {
          id: "method",
          title: "Method",
          content: (
            <>
              <p>I built a Python/SimpleITK evaluation workflow around a fixed nine-setting registration ensemble. It compares local displacement spread with known error from synthetic deformations and three other indicators: inverse-consistency error, image residual and Jacobian deviation.</p>
              <MethodChain steps={["Align images with fixed parameter settings", "Measure displacement disagreement", "Compare with known error and baselines"]} />
              <p>The controlled study contains 30 cases across 10 anatomies and 1,500 sampled locations. Anatomy-level summaries avoid counting spatial samples as independent subjects.</p>
            </>
          ),
        },
        {
          id: "experiments",
          title: "Experiments",
          content: <p>The first study measured associations and failure cases. A separate calibration study used 30 calibration and 30 evaluation anatomies across two sources. The interactive plot shows retained comparator data, not simulated results.</p>,
        },
        {
          id: "results",
          title: "Results",
          content: (
            <>
              <table className="result-table">
                <caption>Median anatomy-level Spearman correlation</caption>
                <thead><tr><th scope="col">Signal</th><th scope="col">Correlation</th></tr></thead>
                <tbody>
                  <tr><th scope="row">Ensemble spread</th><td>0.6841</td></tr>
                  <tr><th scope="row">Inverse-consistency error</th><td>0.7203</td></tr>
                  <tr><th scope="row">Image residual</th><td>0.2851</td></tr>
                  <tr><th scope="row">Jacobian deviation</th><td>0.1689</td></tr>
                </tbody>
              </table>
              <p>All ten anatomy-level spread/error associations were positive. The median correlation confidence interval was [0.3048, 0.8284]. The paired spread-minus-ICE difference interval was [-0.0903, 0.0736], spanning zero.</p>
              <TrueMarginOverview />
              <p className="original-evidence"><a href="/projects/truemargin.png">Original technical figure</a>. Calibration results below use a separate cohort.</p>
            </>
          ),
        },
        {
          id: "failures",
          title: "Failures and bounds",
          content: (
            <>
              <p>Six of 30 case-level correlations were negative. Thirty-nine of 1,500 observations had high error despite low spread; these failures remain in the analysis.</p>
              <p>At nominal 90% coverage, the separate evaluation reached 97.73% and 99.73% mean anatomy-level coverage, with median anatomy radii of 3.93 mm and 4.36 mm. One anatomy had a 70.69 mm median radius. The 95% thresholds were infinite with fifteen calibration groups per source. Reverse-registration failures prevented the planned full-cohort calibrated baseline comparison.</p>
            </>
          ),
        },
        {
          id: "limits",
          title: "Limitations",
          content: <p>The experiments used controlled deformations; external landmark testing is unfinished. Calibration-only follow-up effects differed by source, and some error bounds were very large. Results are documented in a technical report and have not been peer reviewed.</p>,
        },
        {
          id: "reproduce",
          title: "Reproducibility",
          content: (
            <>
              <p>From a checkout with Python 3.12, check the saved calibration and evaluation records without imaging data:</p>
              <pre tabIndex={0} role="region" aria-label="Saved-result verification commands"><code>{"python scripts/verify_m6_phase_a_result.py results/m6_phase_a\npython scripts/verify_m6_phase_b_result.py results/m6_phase_b"}</code></pre>
              <p>These checks do not rerun registrations. Full experiments require the source data and documented imaging dependencies.</p>
              <p><a href={`${repo}/blob/main/docs/reproduction.md`}>Reproduction guide</a> · <a href={`${repo}/tree/main/research`}>Protocols and results</a></p>
            </>
          ),
        },
        {
          id: "next",
          title: "Deferred external study",
          content: (
            <>
              <p>An independent lung-CT protocol and initial image checks were prepared. Two retained Case7 fields were almost identical after a tolerance change; both reached the iteration cap. This establishes neither convergence nor useful ensemble diversity. Numerical landmarks remain sealed and external landmark validation has not run.</p>
              <p><a href={`${repo}/blob/main/docs/external_lung_validation_protocol.md`}>External protocol</a> · <a href={`${repo}/blob/main/research/STATE.md`}>Historical execution record</a></p>
            </>
          ),
        },
      ]}
    />
  );
}
