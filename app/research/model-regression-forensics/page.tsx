import Link from "next/link";

export default function ResearchPage() {
  return (
    <main className="research-page">
      <header className="site-header compact-header">
        <Link className="wordmark" href="/">KR</Link>
        <Link className="back-link" href="/">← Index</Link>
      </header>

      <section className="research-hero-page">
        <div className="section-label">PROJECT 001 / ACTIVE RESEARCH / WORKING TITLE</div>
        <h1>MODEL<br />REGRESSION<br /><em>FORENSICS.</em></h1>
        <p className="hero-deck">
          An open research system for tracing behavioral regressions through training lineage and verifying likely causes through controlled intervention.
        </p>
      </section>

      <section className="research-body">
        <div className="research-sidebar">
          <div><span>STATUS</span><strong>SPECIFICATION</strong></div>
          <div><span>PRIMARY QUESTION</span><strong>Why did the new model get worse?</strong></div>
          <div><span>PLANNED OUTPUT</span><strong>OSS · REGRESSIONBENCH · TECHNICAL REPORT</strong></div>
        </div>
        <div className="research-copy">
          <h2>Thesis</h2>
          <p>
            Model teams can observe that a checkpoint regressed, yet still struggle to identify which training change caused the behavioral failure. This project investigates whether behavioral differencing, training-lineage search, and targeted interventions can turn regression debugging into a reproducible engineering workflow.
          </p>

          <h2>Proposed loop</h2>
          <div className="pipeline">
            <span>BEHAVIOR DIFF</span><b>→</b><span>REGRESSION CLUSTER</span><b>→</b><span>LINEAGE SEARCH</span><b>→</b><span>INTERVENTION</span><b>→</b><span>VERIFIED CAUSE</span>
          </div>

          <h2>V0.1</h2>
          <p>
            Create a small controlled post-training experiment with a known planted regression, detect the behavioral change, rank candidate causes from training lineage, execute a minimal intervention, and measure whether the behavior recovers. The project does not claim novelty until related-work validation and baseline comparisons support it.
          </p>

          <h2>Why this project exists</h2>
          <p>
            The goal is not another dashboard for model metrics. The goal is an extensible research and engineering tool that helps answer a harder question: what changed in training that caused this specific behavior to break, and what evidence would make that diagnosis credible?
          </p>

          <div className="note-box">
            <span>NOTE / 2026-08</span>
            <p>This page intentionally describes a working research direction. Results will replace claims as experiments are completed.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
