import Link from "next/link";
import Image from "next/image";
import { Header, Footer } from "@/components/SiteChrome";
import { CorrespondenceField } from "@/components/CorrespondenceField";
import { RegressionVisual, SimulatorVisual } from "@/components/ProjectVisual";

const gh = "https://github.com/Kushrishi";
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Engineering & independent research</p>
            <h1>
              Kush Rishi<span className="name-period">.</span>
            </h1>
            <p className="hero-statement">
              ML systems.
              <br />
              Evaluation.
              <br />
              <em>Spatial intelligence.</em>
            </p>
            <p className="hero-deck">
              I build and evaluate systems that learn from imperfect data. My
              work connects model reliability with geometry, measurement and
              real-world sensing.
            </p>
            <p className="current-role">
              <span>Currently</span> GNSS Analyst at <strong>Xona</strong> ·
              Montréal
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Selected work
              </a>
              <a className="text-link" href={gh}>
                GitHub
              </a>
              <Link className="text-link" href="/cv">
                CV / Résumé
              </Link>
            </div>
          </div>
          <CorrespondenceField />
        </section>
        <div className="work-index">
          <span className="eyebrow">Three lines of inquiry</span>
          <a href="#mrf">01 · Model evaluation</a>
          <a href="#autonomy">02 · Systems & sensing</a>
          <a href="#truemargin">03 · Spatial uncertainty</a>
        </div>
        <section className="work-section" id="work">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>
              Built to be
              <br />
              <em>looked into.</em>
            </h2>
            <p>
              Working software, measured results and the failures that shaped
              the next question.
            </p>
          </div>
          <article className="project-row project-mrf" id="mrf">
            <div className="project-copy">
              <p className="eyebrow">01 / ML evaluation & reliability</p>
              <h3>
                Model Regression
                <br />
                Forensics
              </h3>
              <p className="project-question">
                What evidence can explain a model regression?
              </p>
              <p>
                Two matched Banking77 worlds expose a benchmark shortcut: simple
                baselines find both planted changes. Model-based diagnostics add
                no consistent top-1 benefit.
              </p>
              <div className="finding">
                <span>Finding</span>Repairing a failure does not always identify
                its cause.
              </div>
              <p className="status">Release investigation implemented · Independent use pending</p>
              <div className="project-links">
                <Link
                  className="button"
                  href="/research/model-regression-forensics"
                >
                  Explore the study
                </Link>
                <a
                  className="text-link"
                  href={`${gh}/model-regression-forensics`}
                >
                  Code
                </a>
                <a
                  className="text-link"
                  href={`${gh}/model-regression-forensics/blob/main/research/M4_TECHNICAL_REPORT.md`}
                >
                  Report
                </a>
              </div>
            </div>
            <RegressionVisual />
          </article>
          <article className="project-row reverse project-asl" id="autonomy">
            <div className="project-copy">
              <p className="eyebrow">02 / Systems & sensing</p>
              <h3>
                Autonomy
                <br />
                Simulation Lab
              </h3>
              <p className="project-question">
                Make a sensing system’s assumptions inspectable.
              </p>
              <p>
                A browser planning and localization simulator, alongside a
                native C++/Python tool that verifies recordings, runs CPU
                inference and compares processing configurations.
              </p>
              <div className="finding">
                <span>Verified</span>108 recorded frames replayed and compared;
                retained outputs can be reopened.
              </div>
              <p className="status">
                Browser v1 released · Native desktop acceptance pending
              </p>
              <div className="project-links">
                <Link
                  className="button"
                  href="/projects/autonomy-simulation-lab"
                >
                  Explore the system
                </Link>
                <a
                  className="text-link"
                  href="https://kushrishi.github.io/autonomy-simulation-lab/"
                >
                  Live demo
                </a>
                <a className="text-link" href={`${gh}/autonomy-simulation-lab`}>
                  Code
                </a>
              </div>
            </div>
            <SimulatorVisual />
          </article>
          <article className="project-row project-tm" id="truemargin">
            <div className="project-copy">
              <p className="eyebrow">03 / Spatial uncertainty</p>
              <h3>TrueMargin</h3>
              <p className="project-question">
                Can registration uncertainty reveal alignment error?
              </p>
              <p>
                A controlled image-registration study finds useful rank
                information, alongside case-level reversals and high-error blind
                spots.
              </p>
              <div className="result-line">
                <b>0.6841</b>
                <span>
                  Median anatomy-level Spearman correlation
                  <br />
                  30 controlled cases · 10 anatomies
                </span>
              </div>
              <div className="finding">
                <span>Boundary</span>Useful association. No established
                advantage over inverse-consistency error.
              </div>
              <p className="status">
                Controlled studies complete · External validation next
              </p>
              <div className="project-links">
                <Link className="button" href="/research/truemargin">
                  Explore the study
                </Link>
                <a className="text-link" href={`${gh}/truemargin`}>
                  Code
                </a>
                <a
                  className="text-link"
                  href={`${gh}/truemargin/blob/main/docs/technical_report.md`}
                >
                  Report
                </a>
              </div>
            </div>
            <figure className="recorded-figure">
              <div className="plate-heading">
                <span>Information & blind spots</span>
                <span>Recorded results</span>
              </div>
              <Image
                src="/projects/truemargin.png"
                width={2040}
                height={1360}
                sizes="(max-width: 760px) 100vw, 55vw"
                alt="TrueMargin recorded results: positive aggregate association, six case reversals, 39 blind spots and conservative error bounds"
              />
              <figcaption>
                Controlled association, failure analysis and held-out bounds.{" "}
                <a href={`${gh}/truemargin/blob/main/docs/technical_report.md`}>
                  Read the definitions and limitations.
                </a>
              </figcaption>
            </figure>
          </article>
        </section>
        <section className="themes-section">
          <p className="eyebrow">What connects the work</p>
          <h2>
            How much should we
            <br />
            trust an output?
          </h2>
          <div className="themes">
            <div>
              <h3>Evaluate the change.</h3>
              <p>
                Separate a suspicious training change from a verified repair and
                a uniquely supported cause.
              </p>
              <a href="/research/model-regression-forensics">
                Model evaluation
              </a>
            </div>
            <div>
              <h3>Locate the uncertainty.</h3>
              <p>
                Measure where a spatial estimate is informative, overconfident
                or too conservative to help.
              </p>
              <a href="/research/truemargin">Spatial intelligence</a>
            </div>
            <div>
              <h3>Inspect the system.</h3>
              <p>
                Make input identity, timing, failure handling and
                reproducibility part of the software contract.
              </p>
              <a href="/projects/autonomy-simulation-lab">
                Systems engineering
              </a>
            </div>
          </div>
        </section>
        <section className="experience-section" id="experience">
          <div>
            <p className="eyebrow">Experience</p>
            <h2>
              From measurements
              <br />
              to working systems.
            </h2>
            <Link className="text-link" href="/cv">
              Full experience & CV
            </Link>
          </div>
          <div className="timeline">
            <article>
              <span>2026–present</span>
              <div>
                <h3>
                  GNSS Analyst <span>· Xona</span>
                </h3>
                <p>
                  Python and Linux workflows for positioning data, automated
                  validation, monitoring and engineering analysis.
                </p>
              </div>
            </article>
            <article>
              <span>2025–2026</span>
              <div>
                <h3>
                  Research Assistant <span>· UCalgary</span>
                </h3>
                <p>
                  LiDAR and photogrammetric point-cloud processing, spatial
                  quality metrics and research visualizations.
                </p>
              </div>
            </article>
            <article>
              <span>2024</span>
              <div>
                <h3>
                  Survey Assistant <span>· McElhanney</span>
                </h3>
                <p>
                  Control, layout and as-built measurements for the Valley Line
                  West LRT extension.
                </p>
              </div>
            </article>
          </div>
        </section>
        <section className="about-section" id="about">
          <div>
            <p className="eyebrow">Background</p>
            <h2>
              Geometry was
              <br />
              the starting point.
            </h2>
          </div>
          <div className="about-copy">
            <p>
              Geomatics taught me to ask what a measurement means, where its
              error comes from and whether the evidence supports the conclusion.
              That perspective carries into how I build software and study
              machine-learning systems.
            </p>
            <p>
              At Xona, I work with real positioning data. Independently, I’m
              developing work in ML evaluation, spatial uncertainty and
              reproducible sensing systems. The questions differ; careful
              measurement matters in all of them.
            </p>
            <div className="education">
              <span className="eyebrow">Education</span>
              <h3>University of Calgary</h3>
              <p>
                BSc Geomatics Engineering
                <br />
                With Distinction · 2022–2026
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
