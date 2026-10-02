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
            Reliable machine learning and sensing systems. I work on evaluation, uncertainty,
            estimation, and reproducible experiments that ask when a model or measurement can
            be trusted.
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
        <div>SENSING + ESTIMATION</div>
        <div>REPRODUCIBLE EVIDENCE</div>
      </section>

      <section className="section" id="research">
        <Reveal>
          <div className="section-label">00 / FLAGSHIP RESEARCH</div>
          <div className="research-card">
            <div className="research-card-main">
              <div className="status-line"><span className="status-dot" /> RELIABLE ML / EXP009 ACTIVE</div>
              <h2>MODEL REGRESSION<br />FORENSICS</h2>
              <p className="lede">
                When a model regresses after retraining, identifying a suspicious training change is
                not enough. This project tests whether counterfactual retraining can distinguish a
                responsible change from plausible alternatives and ordinary retraining variability.
              </p>
              <Link className="text-link" href="/research/model-regression-forensics" prefetch={false}>View research →</Link>
            </div>
            <div className="research-meta">
              <div><span>QUESTION</span><strong>What evidence is sufficient to identify the responsible change?</strong></div>
              <div><span>LATEST MILESTONE</span><strong>M3 · STRUCTURALLY MATCHED BENCHMARK COMPLETE</strong></div>
              <div><span>BENCHMARK</span><strong>2 worlds · 5 matched candidates each · Banking77</strong></div>
              <div><span>CURRENT PHASE</span><strong>M4 · competitive localization baselines</strong></div>
              <div><span>BOUNDARY</span><strong>matched-benchmark localization + causal specificity remain untested</strong></div>
            </div>
          </div>

          <div className="research-secondary-card">
            <div className="research-secondary-main">
              <div className="status-line">
                <span className="status-dot" /> MEDICAL IMAGING / M5 COMPLETE
              </div>
              <h3>TRUEMARGIN</h3>
              <p>
                Medical-image-computing research testing when local registration uncertainty
                contains useful information about true local spatial registration error and where
                that signal fails.
              </p>
              <Link className="text-link" href="/research/truemargin" prefetch={false}>View research →</Link>
            </div>

            <div className="research-secondary-meta">
              <div>
                <span>PRIMARY RESULT</span>
                <strong>10 / 10 anatomy associations positive · median Spearman 0.684</strong>
              </div>
              <div>
                <span>FAILURE BOUNDARY</span>
                <strong>39 / 1,500 sigma blind spots · 6 / 30 case rankings negative</strong>
              </div>
              <div>
                <span>COMPARATOR BOUNDARY</span>
                <strong>stronger than residual/Jacobian here · not superior to inverse consistency</strong>
              </div>
              <div>
                <span>CURRENT PHASE</span>
                <strong>M6 · calibration protocol design</strong>
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
                <div className="project-tags">APPLIED AI · RETRIEVAL · FULL-STACK · SAFETY</div>
                <h3>CareBridge Canada</h3>
                <p>Healthcare-continuity prototype exploring source-grounded workflows, structured validation, auditability, and bounded AI behavior using synthetic data.</p>
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
              My foundation is in Geomatics Engineering, PNT/GNSS, sensing, estimation, and measurement systems. At Xona, I work on Python/Linux engineering systems supporting GNSS data collection, processing, monitoring, validation, and analysis.
            </p>
            <p>
              My independent research extends the same measurement discipline into machine learning and medical image computing: define the failure precisely, separate signal from variability, test interventions prospectively, and keep claims inside the evidence.
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
