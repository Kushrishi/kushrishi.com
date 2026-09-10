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
            Machine learning, software systems, PNT/GNSS, and intelligent sensing. I build and
            evaluate systems where reliability, measurement, and rigorous testing matter.
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
        <div>PHYSICAL-WORLD INTELLIGENCE</div>
      </section>

      <section className="section" id="research">
        <Reveal>
          <div className="section-label">00 / CURRENT RESEARCH</div>
          <div className="research-card">
            <div className="research-card-main">
              <div className="status-line"><span className="status-dot" /> RESEARCH / EXP008 IN PROGRESS</div>
              <h2>MODEL REGRESSION<br />FORENSICS</h2>
              <p className="lede">
                When a model regresses after retraining, identifying the responsible training
                change is difficult. This project tests a workflow that narrows the likely cause,
                reverses that change, retrains the model, and measures whether the behavior recovers.
              </p>
              <Link className="text-link" href="/research/model-regression-forensics" prefetch={false}>View research →</Link>
            </div>
            <div className="research-meta">
              <div><span>QUESTION</span><strong>Which training change caused the regression?</strong></div>
              <div><span>CURRENT TEST</span><strong>EXPERIMENT 008</strong></div>
              <div><span>LATEST RESULT</span><strong>CLEAN REFERENCE · 96/96</strong></div>
              <div><span>METHOD</span><strong>Measure regression → trace changes → rank candidates → retrain + verify</strong></div>
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
                <div className="project-tags">LOCALIZATION · STATE ESTIMATION · SYSTEMS</div>
                <h3>Autonomy Simulation Lab</h3>
                <p>Interactive autonomy and localization environment combining planning, noisy sensing, nonlinear localization, Kalman filtering, telemetry, and quantitative evaluation.</p>
                <ProjectPreview kind="autonomy" />
                <a className="text-link" href="https://kushrishi.github.io/autonomy-simulation-lab/" target="_blank" rel="noreferrer">Explore system →</a>
              </div>
            </article>
            <article className="project-card subdued">
              <div className="project-index">02</div>
              <div className="project-card-body">
                <div className="project-tags">FULL-STACK · AI WORKFLOWS · SAFETY</div>
                <h3>CareBridge Canada</h3>
                <p>Full-stack product prototype exploring source-grounded, safety-aware AI workflows with React, FastAPI, SQL, automated testing, and CI/CD.</p>
                <ProjectPreview kind="carebridge" />
                <a className="text-link" href="https://kushrishi.github.io/carebridge-canada/" target="_blank" rel="noreferrer">View project →</a>
              </div>
            </article>
          </div>
        </Reveal>
      </section>

      <section className="section" id="directions">
        <Reveal>
          <div className="section-label">02 / RESEARCH DIRECTIONS</div>
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
              My foundation is in Geomatics Engineering, PNT/GNSS, sensing, and measurement systems. At Xona, I work with Python/Linux engineering systems supporting GNSS data collection, processing, monitoring, validation, and analysis.
            </p>
            <p>
              Alongside that work, I am developing deeper expertise in ML systems and research engineering through projects focused on model evaluation, reliability, multimodal sensing, and reproducible experimentation.
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
