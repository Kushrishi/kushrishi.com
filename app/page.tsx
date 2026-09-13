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
            Machine learning, software systems, and intelligent sensing. I build tools and run
            experiments to understand when models or measurements fail, and what the evidence
            actually supports.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#research">Explore research <span>↗</span></a>
            <a className="button" href="https://github.com/Kushrishi" target="_blank" rel="noreferrer">View GitHub</a>
          </div>
        </div>
        <BehaviorField />
      </section>

      <section className="manifesto-band">
        <div>MODEL BEHAVIOR</div>
        <div>FAILURE FORENSICS</div>
        <div>ROBUST EVALUATION</div>
        <div>SCIENTIFIC ML</div>
      </section>

      <section className="section" id="research">
        <Reveal>
          <div className="section-label">00 / CURRENT RESEARCH</div>
          <div className="research-card">
            <div className="research-card-main">
              <div className="status-line"><span className="status-dot" /> RESEARCH / EXP009 ACTIVE</div>
              <h2>MODEL REGRESSION<br />FORENSICS</h2>
              <p className="lede">
                When a model regresses after retraining, identifying the responsible training
                change is difficult. This project tests whether a suspected cause can be localized
                and then verified through controlled counterfactual retraining rather than inferred
                from correlation alone.
              </p>
              <Link className="text-link" href="/research/model-regression-forensics" prefetch={false}>View research →</Link>
            </div>
            <div className="research-meta">
              <div><span>QUESTION</span><strong>Which training change caused the regression?</strong></div>
              <div><span>CURRENT EXPERIMENT</span><strong>EXPERIMENT 009</strong></div>
              <div><span>LATEST COMPLETED RESULT</span><strong>EXP008 · ROOT LOCALIZED 2/2 · CAUSAL-SPECIFICITY TEST FAILED</strong></div>
              <div><span>CURRENT PHASE</span><strong>Banking77 · paired retraining · stochastic controls</strong></div>
              <div><span>METHOD</span><strong>Measure regression → trace changes → rank candidates → retrain + verify</strong></div>
            </div>
          </div>

          <div className="research-secondary-card">
            <div className="research-secondary-main">
              <div className="status-line">
                <span className="status-dot" /> MEDICAL IMAGING / ACTIVE VALIDATION
              </div>
              <h3>TRUEMARGIN</h3>
              <p>
                Medical-imaging research asking whether registration uncertainty actually identifies
                where spatial error is high, rather than only looking reasonable in aggregate.
              </p>
              <Link className="text-link" href="/research/truemargin" prefetch={false}>View research →</Link>
            </div>

            <div className="research-secondary-meta">
              <div>
                <span>QUESTION</span>
                <strong>Does uncertainty identify where registration is actually wrong?</strong>
              </div>
              <div>
                <span>STATUS</span>
                <strong>Corrected uncertainty ensemble failed its predefined gate · convergence study active</strong>
              </div>
              <div>
                <span>NEXT</span>
                <strong>Establish a stable registration regime before testing another uncertainty method</strong>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section" id="systems">
        <Reveal>
          <div className="section-label">01 / SELECTED SYSTEMS</div>
          <div className="project-grid">
            <article className="project-card">
              <div className="project-index">01</div>
              <div className="project-card-body">
                <div className="project-tags">APPLIED AI · RETRIEVAL · FULL-STACK · SAFETY</div>
                <h3>CareBridge Canada</h3>
                <p>Healthcare-continuity prototype combining a public product demo with a private retrieval-backed backend for source-grounded workflows, validation, and auditability.</p>
                <ProjectPreview kind="carebridge" />
                <a className="text-link" href="https://kushrishi.github.io/carebridge-canada/" target="_blank" rel="noreferrer">View project →</a>
              </div>
            </article>
            <article className="project-card subdued">
              <div className="project-index">02</div>
              <div className="project-card-body">
                <div className="project-tags">ROBOTICS · LOCALIZATION · STATE ESTIMATION</div>
                <h3>Autonomy Simulation Lab</h3>
                <p>Completed v1.0 autonomy and localization environment combining planning, noisy sensing, nonlinear localization, Kalman filtering, telemetry, and quantitative evaluation.</p>
                <ProjectPreview kind="autonomy" />
                <a className="text-link" href="https://kushrishi.github.io/autonomy-simulation-lab/" target="_blank" rel="noreferrer">Explore system →</a>
              </div>
            </article>
          </div>
        </Reveal>
      </section>

      <section className="section" id="directions">
        <Reveal>
          <div className="section-label">02 / AREAS OF WORK</div>
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
              My foundation is in Geomatics Engineering, PNT/GNSS, sensing, estimation, and measurement systems. At Xona, I work with Python/Linux engineering systems supporting GNSS data collection, processing, monitoring, validation, and analysis.
            </p>
            <p>
              Outside that work, I focus on machine-learning research and software projects around model regressions, uncertainty in medical imaging, source-grounded AI workflows, and reproducible experimentation.
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
          <div className="footer-kicker">BUILD / MEASURE / VALIDATE / ITERATE</div>
          <h2>LET&apos;S BUILD<br />WHAT&apos;S MISSING.</h2>
        </div>
        <div className="footer-links">
          <a href="https://github.com/Kushrishi" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/kushrishi/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </footer>
    </main>
  );
}
