import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TrueMargin | Kush Rishi",
  description: "Testing whether registration uncertainty predicts spatial alignment error.",
  alternates: { canonical: "/research/truemargin" },
  openGraph: { title: "TrueMargin | Kush Rishi", description: "Testing whether registration uncertainty predicts spatial alignment error.", url: "/research/truemargin", type: "website" },
  twitter: { card: "summary_large_image", title: "TrueMargin | Kush Rishi", description: "Testing whether registration uncertainty predicts spatial alignment error." },
};

export default function ResearchPage() {
  return (
    <main className="research-page">
      <a className="skip-link" href="#study">Skip to study</a>
      <header className="site-header"><Link className="wordmark" href="/" aria-label="Kush Rishi, home">KR</Link><Link className="back-link" href="/">Portfolio</Link></header>
      <section className="research-hero-page"><p className="section-label">Independent research</p><h1>TrueMargin</h1><p className="hero-deck">Testing whether registration uncertainty predicts spatial alignment error.</p></section>
      <div className="research-body" id="study"><div className="research-copy">
<h2>The question</h2>
<p>When two medical images are aligned, disagreement between repeated registrations may reveal where the alignment is uncertain. TrueMargin tests whether that disagreement actually tracks spatial error, and whether it can produce useful error bounds.</p>
<h2>What I built</h2>
<p>I evaluated a nine-member registration-hyperparameter ensemble on synthetic deformations with known spatial error. The study covered 30 cases across 10 anatomies and 1,500 sampled locations. The estimator was fixed before evaluation; anatomy-level analysis avoided counting repeated spatial samples as independent subjects.</p>
<h2>What the study found</h2>
<table className="result-table"><caption>Median anatomy-level Spearman correlation with known spatial error</caption><thead><tr><th scope="col">Signal</th><th scope="col">Correlation</th></tr></thead><tbody><tr><th scope="row">Ensemble uncertainty</th><td>0.6841</td></tr><tr><th scope="row">Inverse-consistency error</th><td>0.7203</td></tr><tr><th scope="row">Image residual</th><td>0.2851</td></tr><tr><th scope="row">Jacobian deviation</th><td>0.1689</td></tr></tbody></table>
<p>All 10 anatomy-level associations were positive. Uncertainty was more informative than image residual and Jacobian deviation in this study, but an advantage over inverse-consistency error was not established.</p>
<p>The aggregate result also hid failures: 6 of 30 case-level correlations were negative, and 39 of 1,500 observations had high error despite low uncertainty.</p>
<h2>Do the error bounds help?</h2>
<p>A separate study used 30 calibration and 30 evaluation anatomies across two acquisition sources. At a nominal 90% coverage level, observed mean anatomy-level coverage was 97.73% and 99.73%. Median anatomy radii were 3.93 mm and 4.36 mm, with one reaching 70.69 mm.</p>
<p>The bounds were conservative and sometimes very wide. The 95% thresholds were infinite with 15 calibration groups per source. Inverse-consistency failures prevented the planned full-cohort calibrated comparison.</p>
<p>A later analysis using only the calibration cohort compared constant and adaptive error scales. Adaptation produced a smaller radius in one source and a larger radius in the other. Those overlapping development folds do not provide independent confirmation.</p>
<h2>What comes next</h2>
<p>The next study tests the unchanged estimator on external lung CT pairs with manual landmarks. Its protocol and image preflight are implemented; the external experiment has not run. The current results support a controlled association between uncertainty and error, with clear blind spots. They do not establish clinical validity or external generalization.</p>
<div className="research-links"><a className="text-link" href="https://github.com/Kushrishi/truemargin">Code and protocols</a><a className="text-link" href="https://github.com/Kushrishi/truemargin/blob/main/docs/technical_report.md">Technical report</a><a className="text-link" href="https://github.com/Kushrishi/truemargin/blob/main/docs/external_lung_validation_protocol.md">Next study</a></div>
</div></div>
      <footer><Link href="/">Kush Rishi</Link><div className="footer-links"><Link href="/cv">CV</Link><a href="https://github.com/Kushrishi">GitHub</a><a href="mailto:kushrishi04@gmail.com">Email</a></div></footer>
    </main>
  );
}
