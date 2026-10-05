import Link from "next/link";
import Image from "next/image";
import { EvidenceExplorer } from "@/components/EvidenceExplorer";
import {
  RegressionVisual,
  SimulatorVisual,
  CoordinationVisual,
} from "@/components/ProjectVisual";
import { Header, Footer } from "@/components/SiteChrome";
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
            <p className="eyebrow">GNSS Analyst at Xona / Montréal</p>
            <h1>Kush Rishi</h1>
            <p className="hero-statement">
              Where do
              <br />
              systems <em>fail?</em>
            </p>
            <p className="hero-deck">
              I build Python and Linux tools for positioning data. My
              independent work examines errors in models and estimation systems,
              and what the evidence can tell us about them.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore the work <span>↓</span>
              </a>
              <Link className="text-link" href="/cv">
                Experience & CV ↗
              </Link>
            </div>
            <div className="hero-footnote">
              <span>Current investigation / 01</span>
              <Link href="/research/truemargin">
                Registration uncertainty and spatial error ↗
              </Link>
            </div>
          </div>
          <EvidenceExplorer compact />
        </section>
        <section className="work-section" id="work">
          <div className="section-heading">
            <p className="eyebrow">Selected work / 2026</p>
            <h2>
              Four questions.
              <br />
              <em>Working answers.</em>
            </h2>
            <p>
              Research records, interactive software and the next experiments.
            </p>
          </div>
          <article className="project-row" id="truemargin">
            <div className="project-copy">
              <p className="eyebrow">01 / Registration uncertainty</p>
              <h3>TrueMargin</h3>
              <p className="project-question">
                Can disagreement between registrations reveal alignment error?
              </p>
              <p>
                A nine-member ensemble, known deformations and a study of where
                uncertainty misses large errors.
              </p>
              <div className="result-line">
                <b>0.684</b>
                <span>
                  Median anatomy-level rank correlation
                  <br />
                  30 controlled cases / 10 anatomies
                </span>
              </div>
              <p className="status">
                Controlled study complete · External validation pending
              </p>
              <Link className="project-link" href="/research/truemargin">
                Inspect the study <span>↗</span>
              </Link>
            </div>
            <figure className="recorded-figure">
              <Image
                src="/projects/truemargin.png"
                width={2040}
                height={1360}
                sizes="(max-width: 760px) 100vw, 55vw"
                alt="Recorded TrueMargin association, blind spots and calibrated error-bound results"
                loading="lazy"
              />
              <figcaption>
                Recorded M4 to M6 results. An advantage over inverse-consistency
                error was not established.
              </figcaption>
            </figure>
          </article>
          <article className="project-row reverse" id="mrf">
            <div className="project-copy">
              <p className="eyebrow">02 / Model changes</p>
              <h3>
                Model Regression
                <br />
                Forensics
              </h3>
              <p className="project-question">
                Which training change explains a model regression?
              </p>
              <p>
                I compared attribution diagnostics with simple baselines, then
                tested why successful repairs can leave the historical cause
                ambiguous.
              </p>
              <p className="status">
                Matched study complete · Benchmark redesign next
              </p>
              <Link
                className="project-link"
                href="/research/model-regression-forensics"
              >
                Inspect the evidence <span>↗</span>
              </Link>
            </div>
            <RegressionVisual />
          </article>
          <article className="project-row" id="autonomy">
            <div className="project-copy">
              <p className="eyebrow">03 / Sensing and motion</p>
              <h3>
                Autonomy
                <br />
                Simulation Lab
              </h3>
              <p className="project-question">
                How do planning and localization behave under noise?
              </p>
              <p>
                Compare grid planners, inspect noisy measurements and position
                estimates, and export telemetry. A separate C++ replay tool is
                in development.
              </p>
              <p className="status">
                Browser simulator complete · Native pipeline in progress
              </p>
              <Link
                className="project-link"
                href="/projects/autonomy-simulation-lab"
              >
                Explore the system <span>↗</span>
              </Link>
            </div>
            <SimulatorVisual />
          </article>
          <article className="project-row reverse" id="prairiereach">
            <div className="project-copy">
              <p className="eyebrow">04 / Care-access coordination</p>
              <h3>PrairieReach</h3>
              <p className="project-question">
                What still needs attention when a medical trip changes?
              </p>
              <p>
                A source-linked task prototype for rides, paperwork and
                responsibility around a booked visit. Built with fictional
                journeys; usefulness remains to be tested.
              </p>
              <p className="status">
                Synthetic prototype · Product validation next
              </p>
              <Link className="project-link" href="/projects/prairiereach">
                Explore the workflow <span>↗</span>
              </Link>
            </div>
            <CoordinationVisual />
          </article>
        </section>
        <section className="about-section" id="about">
          <div>
            <p className="eyebrow">About</p>
            <h2>
              Measurements.
              <br />
              Models.
              <br />
              <em>Implementation.</em>
            </h2>
          </div>
          <div className="about-copy">
            <p>
              I’m a GNSS Analyst at Xona, developing tools for collecting,
              processing and monitoring positioning data. I graduated with
              distinction in Geomatics Engineering from the University of
              Calgary.
            </p>
            <p>
              Earlier, I worked on LiDAR and photogrammetric point-cloud
              quality, control and as-built surveying for the Valley Line West
              LRT extension, and application development.
            </p>
            <p>
              My independent projects connect those interests in sensing and
              estimation with model evaluation. I keep the methods, failures and
              result records available so the conclusions can be checked.
            </p>
            <Link className="text-link" href="/cv">
              Experience and education ↗
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
