import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Model Regression Forensics | Kush Rishi",
  description: "Investigating training-data changes, model regressions and competing repairs.",
  alternates: { canonical: "/research/model-regression-forensics" },
  openGraph: { title: "Model Regression Forensics | Kush Rishi", description: "Investigating training-data changes, model regressions and competing repairs.", url: "/research/model-regression-forensics", type: "website" },
  twitter: { card: "summary_large_image", title: "Model Regression Forensics | Kush Rishi", description: "Investigating training-data changes, model regressions and competing repairs." },
};

export default function ResearchPage() {
  return (
    <main className="research-page">
      <a className="skip-link" href="#study">Skip to study</a>
      <header className="site-header"><Link className="wordmark" href="/" aria-label="Kush Rishi, home">KR</Link><Link className="back-link" href="/">Portfolio</Link></header>
      <section className="research-hero-page"><p className="section-label">Independent research</p><h1>Model Regression Forensics</h1><p className="hero-deck">Investigating training-data changes, model regressions and competing repairs.</p></section>
      <div className="research-body" id="study"><div className="research-copy">
<h2>The question</h2>
<p>A model performs worse after retraining. Which training-data change explains the regression? A useful ranking should distinguish the responsible change from plausible alternatives. Finding a repair is a further test, but a successful repair alone may not identify the original cause.</p>
<h2>What I built</h2>
<p>I constructed versioned Banking77 training releases around a DistilBERT classifier. In the matched study, each of two constructed worlds contained five candidate changes with the same structure: 66 label changes, balanced in both directions, with no text edits. Three paired training trajectories per world controlled some retraining variability.</p>
<h2>What the study found</h2>
<table className="result-table"><caption>Rank of the planted change among five candidates, by world</caption><thead><tr><th scope="col">Method</th><th scope="col">World 1</th><th scope="col">World 2</th></tr></thead><tbody><tr><th scope="row">Target-label overlap</th><td>1</td><td>1</td></tr><tr><th scope="row">Lexical Jaccard</th><td>1</td><td>1</td></tr><tr><th scope="row">Grad-Dot</th><td>1</td><td>5</td></tr><tr><th scope="row">TracIn</th><td>1</td><td>5</td></tr></tbody></table>
<p>Simple baselines identified the planted change in both worlds. Gradient-based methods added no first-place ranking benefit. Although the candidates were structurally matched, known target labels and disjoint candidate label pairs left a semantic shortcut.</p>
<p>These are findings from two constructed worlds, not evidence that simple methods generally outperform attribution methods. They show why a benchmark must rule out easy shortcuts before supporting a stronger conclusion.</p>
<h2>Why a repair is not enough</h2>
<p>A separate deterministic example has two distinct repairs that restore the same predictions. Without additional evidence, the result remains ambiguous about the historical cause. This example illustrates the distinction between restoring behavior and identifying what originally went wrong.</p>
<h2>A working comparison tool</h2>
<p>The experimental command-line utility compares exact-label predictions on declared evaluation slices. It checks record alignment and reports individual regressions. A handwritten-digits fixture agrees with an independent NumPy calculation. That verifies the comparison arithmetic; it does not establish causal attribution.</p>
<h2>What comes next</h2>
<p>The completed study is worth documenting. A stronger follow-up needs candidates that remain plausible after target labels and simple lexical cues are considered, followed by controlled reversal and retraining. The current work does not establish a general causal-identification method or a completed publication.</p>
<div className="research-links"><a className="text-link" href="https://github.com/Kushrishi/model-regression-forensics">Code and protocols</a><a className="text-link" href="https://github.com/Kushrishi/model-regression-forensics/blob/main/research/M4_TECHNICAL_REPORT.md">Technical report</a><a className="text-link" href="https://github.com/Kushrishi/model-regression-forensics/blob/main/docs/ambiguous-repairs.md">Competing repairs</a></div>
</div></div>
      <footer><Link href="/">Kush Rishi</Link><div className="footer-links"><Link href="/cv">CV</Link><a href="https://github.com/Kushrishi">GitHub</a><a href="mailto:kushrishi04@gmail.com">Email</a></div></footer>
    </main>
  );
}
