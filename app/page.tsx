import Link from "next/link";
import { CapsuleEvidence } from "@/components/CapsuleEvidence";
import Image from "next/image";
import { TrueMarginHomeSummary } from "@/components/PublicationEvidence";
import { Header, Footer } from "@/components/SiteChrome";
import { ReleaseInvestigationVisual, SimulatorVisual } from "@/components/ProjectVisual";

const gh = "https://github.com/Kushrishi";
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio</p>
            <h1>Kush Rishi<span className="name-period">.</span></h1>
            <p className="hero-statement">GNSS Analyst at Xona</p>
            <p className="hero-deck">
              I work with positioning data and build Python and C++ tools for
              measurement and evaluation.
            </p>
            <p className="current-role">BSc Geomatics Engineering, University of Calgary</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Selected work</a>
              <a className="text-link" href={gh}>GitHub</a>
              <Link className="text-link" href="/cv">CV / Résumé</Link>
            </div>
          </div>
          <nav className="work-index" aria-label="Selected projects">
            <a href="#capsule"><strong>Capsule Review</strong><span>Evaluate capsule-image selection</span></a>
            <a href="#truemargin"><strong>TrueMargin</strong><span>Study image-registration uncertainty</span></a>
            <a href="#mrf"><strong>Model Regression Forensics</strong><span>Compare classifier predictions</span></a>
            <a href="#autonomy"><strong>Autonomy Simulation Lab</strong><span>Replay recordings and simulate routes</span></a>
          </nav>
        </section>
        <section className="work-section" id="work">
          <div className="section-heading">
            <h2>Selected work</h2>
            <p>Working examples, measured results and documented limitations.</p>
          </div>
          <article className="project-row" id="capsule">
            <div className="project-copy">
              <p className="eyebrow">01 / Biomedical imaging</p>
              <h3>Capsule Review</h3>
              <p className="project-question">Can fewer images still capture distinct blood-positive sequences?</p>
              <p>An image viewer and selection experiments for the long sequences recorded by a swallowed camera.</p>
              <div className="finding"><span>Primary result</span>Selecting 10% of annotated images with model scores did not cover more positive sequences than evenly spaced sampling.</div>
              <div className="project-links">
                <Link className="button" href="/research/capsule-review">View project</Link>
                <a className="text-link" href={`${gh}/capsule-review-public`}>Code</a>
                <a className="text-link" href={`${gh}/capsule-review-public/blob/main/docs/SUPERVISOR_DEMO.md`}>Synthetic demo instructions</a>
              </div>
            </div>
            <CapsuleEvidence />
          </article>
          <article className="project-row project-tm" id="truemargin">
            <div className="project-copy">
              <p className="eyebrow">02 / Spatial uncertainty</p>
              <h3>TrueMargin</h3>
              <p className="project-question">Can disagreement between image alignments reveal errors?</p>
              <p>I compared different alignments with known error. Agreement between alignments sometimes hid large errors.</p>
              <div className="result-line">
                <b>0.6841</b>
                <span>Median anatomy-level Spearman correlation<br />30 controlled cases · 10 anatomies</span>
              </div>
              <div className="finding"><span>Comparator</span>A forward-and-back alignment check (inverse-consistency error) had a higher median correlation: 0.7203. External landmark testing is unfinished.</div>
              <div className="project-links">
                <Link className="button" href="/research/truemargin">View project</Link>
                <a className="text-link" href={`${gh}/truemargin`}>Code</a>
                <a className="text-link" href={`${gh}/truemargin/blob/main/docs/technical_report.md`}>Report</a>
              </div>
            </div>
            <TrueMarginHomeSummary />
          </article>
          <article className="project-row project-mrf" id="mrf">
            <div className="project-copy">
              <p className="eyebrow">03 / ML evaluation</p>
              <h3>Model Regression<br />Forensics</h3>
              <p className="project-question">What changed between two classifier releases?</p>
              <p>Compare saved predictions, check declared requirements and inspect changed cases in a local report.</p>
              <div className="finding"><span>Research result</span>In two tests with deliberately changed training labels, simple label and word-overlap methods found the planted change first both times; model-based methods did so once.</div>
              <div className="project-links">
                <Link className="button" href="/research/model-regression-forensics">View project</Link>
                <a className="text-link" href={`${gh}/model-regression-forensics`}>Code</a>
                <a className="text-link" href={`${gh}/model-regression-forensics/blob/main/docs/deployment-comparison.md`}>Run the example</a>
              </div>
            </div>
            <ReleaseInvestigationVisual />
          </article>
          <article className="project-row reverse project-asl" id="autonomy">
            <div className="project-copy">
              <p className="eyebrow">04 / Simulation &amp; replay</p>
              <h3>Autonomy<br />Simulation Lab</h3>
              <p className="project-question">Replay recordings and compare model outputs.</p>
              <p>C++/Python tools process recorded images and compare predictions. A separate browser simulator demonstrates route planning and position estimation.</p>
              <div className="finding"><span>Measured</span>8.97% median whole-process time reduction across three matched 108-frame pairs, with identical model outputs on one Linux host.</div>
              <div className="project-links">
                <Link className="button" href="/projects/autonomy-simulation-lab">View project</Link>
                <a className="text-link" href="https://kushrishi.github.io/autonomy-simulation-lab/">Live demo</a>
                <a className="text-link" href={`${gh}/autonomy-simulation-lab`}>Code</a>
              </div>
            </div>
            <SimulatorVisual />
          </article>
        </section>
        <section className="experience-section" id="experience">
          <div>
            <h2>Experience</h2>
            <Link className="text-link" href="/cv">Full experience &amp; CV</Link>
          </div>
          <div className="timeline">
            <article><span>2026–present</span><div><h3>GNSS Analyst <span>· Xona</span></h3><p>Python and Linux workflows for positioning data, validation, monitoring and engineering analysis.</p></div></article>
            <article><span>2025–2026</span><div><h3>Research Assistant <span>· UCalgary</span></h3><p>LiDAR and photogrammetric point-cloud processing, spatial quality metrics and research visualizations.</p></div></article>
            <article><span>2024</span><div><h3>Survey Assistant <span>· McElhanney</span></h3><p>Control, layout and as-built measurements for the Valley Line West LRT extension.</p></div></article>
          </div>
        </section>
        <section className="about-section" id="about">
          <div>
            <h2>About</h2>
            <Image className="about-portrait" src="/images/kush-rishi-91.jpg" alt="Kush Rishi" width={1920} height={1280} sizes="360px" />
          </div>
          <div className="about-copy">
            <p>I work with GNSS and positioning data at Xona and develop independent research software outside work. My earlier experience includes surveying, LiDAR and photogrammetry.</p>
            <div className="education"><span className="eyebrow">Education</span><h3>University of Calgary</h3><p>BSc Geomatics Engineering<br />With Distinction · 2022–2026</p></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
