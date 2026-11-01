import Link from "next/link";
import { TrueMarginHomeSummary } from "@/components/PublicationEvidence";
import { Header, Footer } from "@/components/SiteChrome";
import { CorrespondenceField } from "@/components/CorrespondenceField";
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
            <p className="hero-statement">GNSS Analyst<br /><em>at Xona.</em></p>
            <p className="hero-deck">
              I work with positioning data and build Python and C++ tools for
              measurement and evaluation.
            </p>
            <p className="current-role">Montréal · BSc Geomatics Engineering, University of Calgary</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Selected work</a>
              <a className="text-link" href={gh}>GitHub</a>
              <Link className="text-link" href="/cv">CV / Résumé</Link>
            </div>
          </div>
          <CorrespondenceField />
        </section>
        <div className="work-index">
          <span className="eyebrow">Selected work</span>
          <a href="#mrf">01 · Model evaluation</a>
          <a href="#autonomy">02 · Simulation &amp; replay</a>
          <a href="#truemargin">03 · Spatial uncertainty</a>
        </div>
        <section className="work-section" id="work">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Software and research.</h2>
            <p>Working examples, measured results and documented limitations.</p>
          </div>
          <article className="project-row project-mrf" id="mrf">
            <div className="project-copy">
              <p className="eyebrow">01 / ML evaluation</p>
              <h3>Model Regression<br />Forensics</h3>
              <p className="project-question">What changed between two classifier releases?</p>
              <p>Compare saved predictions, check declared requirements and inspect changed cases in a local report.</p>
              <div className="finding"><span>Research result</span>Model-based diagnostics added no consistent benefit over simple baselines in two constructed benchmarks.</div>
              <p className="status">Maintenance · Completed localization study</p>
              <div className="project-links">
                <Link className="button" href="/research/model-regression-forensics">Explore the study</Link>
                <a className="text-link" href={`${gh}/model-regression-forensics`}>Code</a>
                <a className="text-link" href={`${gh}/model-regression-forensics/blob/main/docs/deployment-comparison.md`}>Run the example</a>
              </div>
            </div>
            <ReleaseInvestigationVisual />
          </article>
          <article className="project-row reverse project-asl" id="autonomy">
            <div className="project-copy">
              <p className="eyebrow">02 / Simulation &amp; replay</p>
              <h3>Autonomy<br />Simulation Lab</h3>
              <p className="project-question">Replay recordings and compare model outputs.</p>
              <p>C++/Python recording replay and CPU inference, alongside a separate browser planning and localization simulator.</p>
              <div className="finding"><span>Measured</span>8.97% median whole-process time reduction across three matched 108-frame pairs, with exact recorded output parity on one Linux host.</div>
              <p className="status">Browser v1.0.2 · Native case study in maintenance</p>
              <div className="project-links">
                <Link className="button" href="/projects/autonomy-simulation-lab">Explore the system</Link>
                <a className="text-link" href="https://kushrishi.github.io/autonomy-simulation-lab/">Live demo</a>
                <a className="text-link" href={`${gh}/autonomy-simulation-lab`}>Code</a>
              </div>
            </div>
            <SimulatorVisual />
          </article>
          <article className="project-row project-tm" id="truemargin">
            <div className="project-copy">
              <p className="eyebrow">03 / Spatial uncertainty</p>
              <h3>TrueMargin</h3>
              <p className="project-question">Can registration variability reveal alignment error?</p>
              <p>Controlled image-registration experiments, including case-level failures and calibrated error bounds.</p>
              <div className="result-line">
                <b>0.6841</b>
                <span>Median anatomy-level Spearman correlation<br />30 controlled cases · 10 anatomies</span>
              </div>
              <div className="finding"><span>Limitation</span>No advantage over inverse-consistency error was established.</div>
              <p className="status">Controlled studies complete · External validation deferred</p>
              <div className="project-links">
                <Link className="button" href="/research/truemargin">Explore the study</Link>
                <a className="text-link" href={`${gh}/truemargin`}>Code</a>
                <a className="text-link" href={`${gh}/truemargin/blob/main/docs/technical_report.md`}>Report</a>
              </div>
            </div>
            <TrueMarginHomeSummary />
          </article>
        </section>
        <section className="experience-section" id="experience">
          <div>
            <p className="eyebrow">Experience</p>
            <h2>Engineering practice.</h2>
            <Link className="text-link" href="/cv">Full experience &amp; CV</Link>
          </div>
          <div className="timeline">
            <article><span>2026–present</span><div><h3>GNSS Analyst <span>· Xona</span></h3><p>Python and Linux workflows for positioning data, validation, monitoring and engineering analysis.</p></div></article>
            <article><span>2025–2026</span><div><h3>Research Assistant <span>· UCalgary</span></h3><p>LiDAR and photogrammetric point-cloud processing, spatial quality metrics and research visualizations.</p></div></article>
            <article><span>2024</span><div><h3>Survey Assistant <span>· McElhanney</span></h3><p>Control, layout and as-built measurements for the Valley Line West LRT extension.</p></div></article>
          </div>
        </section>
        <section className="about-section" id="about">
          <div><p className="eyebrow">About</p><h2>Background.</h2></div>
          <div className="about-copy">
            <p>My experience includes GNSS analysis, surveying, LiDAR and photogrammetry. The projects above are independent work alongside my professional experience.</p>
            <div className="education"><span className="eyebrow">Education</span><h3>University of Calgary</h3><p>BSc Geomatics Engineering<br />With Distinction · 2022–2026</p></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
