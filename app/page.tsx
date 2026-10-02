import Link from "next/link";
import { BehaviorField } from "@/components/BehaviorField";
import { Reveal } from "@/components/Reveal";
import { ProjectPreview } from "@/components/ProjectPreview";
import { ResearchDirections } from "@/components/ResearchDirections";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top">KR</a>
        <nav aria-label="Primary navigation">
          <a href="#research">Research</a>
          <a href="#systems">Systems</a>
          <a href="#about">About</a>
          <a href="https://github.com/Kushrishi" target="_blank" rel="noreferrer">GitHub</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <span>KUSH RISHI</span>
            <span>MONTRÉAL, CANADA</span>
          </div>
          <h1>
            INTELLIGENCE
            <br />
            UNDER
            <br />
            <em>UNCERTAINTY.</em>
          </h1>
          <p className="hero-deck">
            Research engineering for reliable machine learning and sensing systems, focused on
            evaluation, uncertainty, and estimation.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#research">Explore research <span>↗</span></a>
            <a className="button" href="https://github.com/Kushrishi" target="_blank" rel="noreferrer">View GitHub</a>
          </div>
        </div>
        <BehaviorField />
      </section>

      <section className="manifesto-band">
        <div>MODEL EVALUATION</div>
        <div>UNCERTAINTY</div>
        <div>SENSING & ESTIMATION</div>
        <div>REPRODUCIBLE EVIDENCE</div>
      </section>

      <section className="section" id="research">
        <Reveal>
          <div className="section-label">00 / FLAGSHIP RESEARCH</div>
          <div className="research-card">
            <div className="research-card-main">
              <div className="status-line"><span className="status-dot" /> MEDICAL IMAGING / M6 PROTOCOL DESIGN</div>
              <h2>TRUE<br />MARGIN</h2>
              <p className="lede">
                Research on whether local uncertainty from deformable image registration contains
                useful information about true local spatial error, and where that signal fails.
              </p>
              <Link className="text-link" href="/research/truemargin" prefetch={false}>View research →</Link>
            </div>
            <div className="research-meta">
              <div><span>QUESTION</span><strong>When is local registration uncertainty informative about true spatial error?</strong></div>
              <div><span>PRIMARY RESULT</span><strong>10 / 10 anatomy associations positive · median Spearman 0.684</strong></div>
              <div><span>COMPARATOR</span><strong>stronger than residual and Jacobian here · no superiority over inverse consistency</strong></div>
              <div><span>CURRENT PHASE</span><strong>M6 · calibration and external-input protocol design</strong></div>
              <div><span>SCOPE</span><strong>research only · no clinical-use claim</strong></div>
            </div>
          </div>

          <div className="research-secondary-card">
            <div className="research-secondary-main">
              <div className="status-line">
                <span className="status-dot" /> RELIABLE ML / M4 ACTIVE
              </div>
              <h3>MODEL REGRESSION FORENSICS</h3>
              <p>
                Research on whether counterfactual retraining can distinguish the training change
                responsible for a model regression from plausible alternatives.
              </p>
              <Link className="text-link" href="/research/model-regression-forensics" prefetch={false}>View research →</Link>
            </div>

            <div className="research-secondary-meta">
              <div>
                <span>LATEST MILESTONE</span>
                <strong>M3 · structurally matched benchmark complete</strong>
              </div>
              <div>
                <span>BENCHMARK</span>
                <strong>2 worlds · 5 matched candidates each · Banking77</strong>
              </div>
              <div>
                <span>CURRENT PHASE</span>
                <strong>M4 · competitive localization baselines</strong>
              </div>
              <div>
                <span>BOUNDARY</span>
                <strong>matched-benchmark localization and causal specificity remain untested</strong>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section" id="systems">
        <Reveal>
          <div className="section-label">01 / SELECTED ENGINEERING</div>
          <div className="project-grid">
            <article className="project-card">
              <div className="project-index">01</div>
              <div className="project-card-body">
                <div className="project-tags">ROBOTICS · LOCALIZATION · STATE ESTIMATION</div>
                <h3>Autonomy Simulation Lab</h3>
                <p>Completed v1.0 autonomy and localization environment combining planning, noisy sensing, nonlinear localization, Kalman filtering, telemetry, and quantitative evaluation.</p>
                <ProjectPreview kind="autonomy" />
                <a className="text-link" href="https://kushrishi.github.io/autonomy-simulation-lab/" target="_blank" rel="noreferrer">Explore system →</a>
              </div>
            </article>
            <article className="project-card subdued">
              <div className="project-index">02</div>
              <div className="project-card-body">
                <div className="project-tags">RETRIEVAL · VALIDATION · FULL STACK · SAFETY</div>
                <h3>CareBridge Canada</h3>
                <p>Healthcare-continuity prototype exploring source-grounded retrieval, structured validation, auditability, and bounded model behavior using synthetic data.</p>
                <ProjectPreview kind="carebridge" />
                <a className="text-link" href="https://kushrishi.github.io/carebridge-canada/" target="_blank" rel="noreferrer">View project →</a>
              </div>
            </article>
          </div>
        </Reveal>
      </section>

      <section className="section" id="directions">
        <Reveal>
          <div className="section-label">02 / TECHNICAL FOCUS</div>
          <ResearchDirections />
        </Reveal>
      </section>

      <section className="section split" id="about">
        <Reveal>
          <div className="section-label">03 / TRAJECTORY</div>
          <h2 className="section-title">FROM MEASUREMENT<br />TO INTELLIGENCE.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="about-copy">
            <p>
              My foundation is in Geomatics Engineering, PNT/GNSS, sensing, estimation, and
              measurement systems. At Xona, I work on Python and Linux systems supporting GNSS data
              collection, processing, monitoring, validation, and analysis.
            </p>
            <p>
              My independent research applies the same measurement discipline to machine learning
              and medical image computing: define the failure precisely, separate signal from
              variability, test interventions prospectively, and keep claims within the evidence.
            </p>
            <div className="experience-mini">
              <div><span>2026-PRESENT</span><strong>GNSS Analyst · Xona</strong></div>
              <div><span>2025-26</span><strong>Research Assistant · University of Calgary</strong></div>
              <div><span>2022-26</span><strong>BSc Geomatics Engineering · With Distinction</strong></div>
            </div>
          </div>
        </Reveal>
      </section>

      <footer>
        <div>
          <div className="footer-kicker">RESEARCH / ENGINEERING / EVIDENCE</div>
          <h2>BUILD.<br />MEASURE.<br />VERIFY.</h2>
        </div>
        <div className="footer-links">
          <a href="https://github.com/Kushrishi" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/kushrishi/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </footer>
    </main>
  );
}
