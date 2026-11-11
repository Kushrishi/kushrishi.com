import Link from "next/link";
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
              <p className="project-question">Which annotated events survive a limited frame-review budget?</p>
              <p>Local capsule-endoscopy viewer and experiments comparing model-guided frame selection with uniform sampling.</p>
              <div className="finding"><span>Primary result</span>The locked 10% comparison did not improve blood-positive annotation-run recall. Runs are dataset annotations, not independently adjudicated lesions.</div>
              <div className="project-links">
                <a className="button" href={`${gh}/capsule-review-public/blob/main/docs/RESEARCH_COLLABORATION_BRIEF.md`}>Research summary</a>
                <a className="text-link" href={`${gh}/capsule-review-public`}>Code</a>
                <a className="text-link" href={`${gh}/capsule-review-public/blob/main/docs/SUPERVISOR_DEMO.md`}>Run the synthetic demo</a>
              </div>
            </div>
            <figure className="recorded-figure">
              <div className="plate-heading"><span>Locked Galar study</span><span>10 examinations</span></div>
              <h4>Mean annotation-run recall at 10% workload</h4>
              <table>
                <caption>Six examinations with positive annotation runs</caption>
                <thead><tr><th scope="col">Selection policy</th><th scope="col">Recall</th></tr></thead>
                <tbody>
                  <tr><th scope="row">Top score per chronology bin</th><td>49.35%</td></tr>
                  <tr><th scope="row">Uniform sampling</th><td>50.62%</td></tr>
                </tbody>
              </table>
              <figcaption>
                163,161 source-verified images. Recall is undefined for the four examinations without positive runs.
                No clinical benefit or reading-time savings were established. The public software demo uses synthetic images and generated scores.
                {" "}<a href={`${gh}/capsule-review-public/blob/main/docs/GALAR_UNSEEN_11_20_RESULTS.md`}>Study methods and results</a>.
              </figcaption>
            </figure>
          </article>
          <article className="project-row project-tm" id="truemargin">
            <div className="project-copy">
              <p className="eyebrow">02 / Spatial uncertainty</p>
              <h3>TrueMargin</h3>
              <p className="project-question">Can registration variability reveal alignment error?</p>
              <p>Controlled image-registration experiments, including case-level failures and calibrated error bounds.</p>
              <div className="result-line">
                <b>0.6841</b>
                <span>Median anatomy-level Spearman correlation<br />30 controlled cases · 10 anatomies</span>
              </div>
              <div className="finding"><span>Limitation</span>No advantage over inverse-consistency error was established. Independent external validation was not completed.</div>
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
              <div className="finding"><span>Research result</span>Model-based diagnostics added no consistent benefit over simple baselines in two constructed benchmarks.</div>
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
              <p>C++/Python recording replay and CPU inference, alongside a separate browser planning and localization simulator.</p>
              <div className="finding"><span>Measured</span>8.97% median whole-process time reduction across three matched 108-frame pairs, with exact recorded output parity on one Linux host.</div>
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
            <p>My experience includes GNSS analysis, surveying, LiDAR and photogrammetry. The projects above are independent work alongside my professional experience.</p>
            <div className="education"><span className="eyebrow">Education</span><h3>University of Calgary</h3><p>BSc Geomatics Engineering<br />With Distinction · 2022–2026</p></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
