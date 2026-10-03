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
          <Link href="/cv" prefetch={false}>CV</Link>
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
            GNSS Analyst at Xona, building Python and Linux workflows for positioning data.
            Independent research in reliable ML, uncertainty, and estimation.
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
              <div className="status-line"><span className="status-dot" /> MEDICAL IMAGING / STUDY COMPLETE</div>
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
              <div><span>STATUS</span><strong>M4–M6 complete · exploratory error-scale development</strong></div>
              <div><span>SCOPE</span><strong>research only · no clinical-use claim</strong></div>
            </div>
          </div>

          <div className="research-secondary-card">
            <div className="research-secondary-main">
              <div className="status-line">
                <span className="status-dot" /> RELIABLE ML / MATCHED STUDY COMPLETE
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
                <strong>Matched-benchmark localization study completed</strong>
              </div>
              <div>
                <span>BENCHMARK</span>
                <strong>2 worlds · 5 matched candidates each · Banking77</strong>
              </div>
              <div>
                <span>CURRENT PHASE</span>
                <strong>Experimental release comparator · causal certification unestablished</strong>
              </div>
              <div>
                <span>BOUNDARY</span>
                <strong>simple baselines localized the root in both evaluated worlds</strong>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section" id="systems">
        <Reveal>
          <div className="section-label">01 / SELECTED ENGINEERING</div>
          <div className="project-grid primary-engineering">
            <article className="project-card">
              <div className="project-index">01</div>
              <div className="project-card-body">
                <div className="project-tags">ROBOTICS · LOCALIZATION · STATE ESTIMATION</div>
                <h3>Autonomy Simulation Lab</h3>
                <p>Completed v1.0 autonomy and localization environment combining planning, noisy sensing, nonlinear localization, Kalman filtering, telemetry, and quantitative evaluation.</p>
                <ProjectPreview kind="autonomy" />
                <div className="hero-actions">
                  <a className="text-link" href="https://kushrishi.github.io/autonomy-simulation-lab/" target="_blank" rel="noreferrer">Interactive demo →</a>
                  <a className="text-link" href="https://github.com/Kushrishi/autonomy-simulation-lab" target="_blank" rel="noreferrer">Source code →</a>
                </div>
              </div>
            </article>
          </div>
          <div className="additional-work">
            <span>ADDITIONAL WORK</span>
            <a href="https://kushrishi.github.io/carebridge-canada/" target="_blank" rel="noreferrer">CareBridge / PrairieReach</a>
            <p>Synthetic healthcare-access prototype. Development is paused.</p>
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
              I’m a GNSS Analyst at Xona and a Geomatics Engineering graduate from the University
              of Calgary, where I graduated with distinction. I develop Python and Linux workflows
              for GNSS data collection, processing, monitoring, validation, and analysis.
            </p>
            <p>
              Alongside that work, I study model regressions and uncertainty in medical image
              registration. I specify experiments before running them, compare methods under controlled
              conditions, and publish positive and negative results. My earlier research
              assistant work involved quality assessment of LiDAR and photogrammetric point clouds.
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
          <Link href="/cv" prefetch={false}>CV</Link>
          <a href="https://github.com/Kushrishi" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/kushrishi/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://www.linkedin.com/in/kushrishi/" target="_blank" rel="noreferrer">Contact</a>
        </div>
      </footer>
    </main>
  );
}
