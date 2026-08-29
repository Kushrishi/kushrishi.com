import Link from "next/link";
import { BehaviorField } from "@/components/BehaviorField";
import { Reveal } from "@/components/Reveal";

const researchDirections = [
  ["01", "Model Evaluation", "Behavior discovery, regressions, counterexamples, and reliable measurement."],
  ["02", "ML Systems", "Training, inference, experiment infrastructure, observability, and reproducibility."],
  ["03", "Multimodal Intelligence", "Models that reason across noisy, incomplete, and heterogeneous real-world signals."],
  ["04", "PNT & Intelligent Sensing", "Positioning, estimation, sensor fusion, and physical-world uncertainty."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Link className="wordmark" href="#top">KR</Link>
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
            Machine learning, ML systems, PNT, and intelligent sensing. Building research-oriented
            software for models and systems that must remain reliable when reality stops matching the training set.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#research">Enter the lab <span>↗</span></a>
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
              <div className="status-line"><span className="status-dot" /> ACTIVE RESEARCH / WORKING TITLE</div>
              <h2>MODEL REGRESSION<br />FORENSICS</h2>
              <p className="lede">
                What if a model regression could be traced back through training lineage to the change that caused it,
                then verified with an intervention instead of guessed from correlation?
              </p>
              <Link className="text-link" href="/research/model-regression-forensics">Enter project →</Link>
            </div>
            <div className="research-meta">
              <div><span>QUESTION</span><strong>Why did the new model get worse?</strong></div>
              <div><span>OUTPUT</span><strong>OSS · BENCHMARK · REPORT</strong></div>
              <div><span>STATUS</span><strong>SPECIFICATION / V0.1</strong></div>
              <div><span>THESIS</span><strong>Behavior diff → lineage → intervention</strong></div>
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
              <div>
                <div className="project-tags">LOCALIZATION · STATE ESTIMATION · SYSTEMS</div>
                <h3>Autonomy Simulation Lab</h3>
                <p>Interactive autonomy and localization environment combining planning, noisy sensing, nonlinear localization, Kalman filtering, telemetry, and quantitative evaluation.</p>
                <a className="text-link" href="https://kushrishi.github.io/autonomy-simulation-lab/" target="_blank" rel="noreferrer">Explore system →</a>
              </div>
            </article>
            <article className="project-card subdued">
              <div className="project-index">02</div>
              <div>
                <div className="project-tags">FULL-STACK · AI WORKFLOWS · SAFETY</div>
                <h3>CareBridge Canada</h3>
                <p>Full-stack product prototype exploring source-grounded, safety-aware AI workflows with React, FastAPI, SQL, automated testing, and CI/CD.</p>
                <a className="text-link" href="https://kushrishi.github.io/carebridge-canada/" target="_blank" rel="noreferrer">View project →</a>
              </div>
            </article>
          </div>
        </Reveal>
      </section>

      <section className="section" id="directions">
        <Reveal>
          <div className="section-label">02 / RESEARCH DIRECTIONS</div>
          <div className="directions-list">
            {researchDirections.map(([index, title, description]) => (
              <div className="direction" key={title}>
                <span>{index}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
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
              My foundation is in Geomatics Engineering, GNSS/PNT, sensing, and measurement systems. I now work across Python/Linux engineering, data pipelines, validation, and observability while building deeper research and engineering depth in machine learning.
            </p>
            <p>
              I am particularly interested in model evaluation, ML systems, multimodal intelligence, and how learned systems behave under distribution shift, incomplete information, and real-world uncertainty.
            </p>
            <div className="experience-mini">
              <div><span>2026—</span><strong>GNSS Analyst · Xona</strong></div>
              <div><span>2025—26</span><strong>Research Assistant · University of Calgary</strong></div>
              <div><span>2022—26</span><strong>BSc Geomatics Engineering · With Distinction</strong></div>
            </div>
          </div>
        </Reveal>
      </section>

      <footer>
        <div>
          <div className="footer-kicker">BUILD / MEASURE / QUESTION / REPEAT</div>
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
