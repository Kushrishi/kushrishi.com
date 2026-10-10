import type { Metadata } from "next";
import Link from "next/link";
import { PrintCV } from "@/components/PrintCV";

export const metadata: Metadata = {
  title: "CV | Kush Rishi",
  description:
    "Engineering experience, independent research, and selected technical work.",
  alternates: { canonical: "/cv" },
  openGraph: {
    title: "CV | Kush Rishi",
    description: "Engineering experience, independent research, and selected technical work.",
    url: "/cv",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Kush Rishi | ML systems, evaluation & spatial intelligence" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CV | Kush Rishi",
    description: "Engineering experience, independent research, and selected technical work.",
  },
};

export default function CVPage() {
  return (
    <main className="cv-page">
      <header className="site-header compact-header">
        <Link className="wordmark" href="/" prefetch={false}>
          KR
        </Link>
        <Link href="/" prefetch={false}>
          Portfolio
        </Link>
      </header>
      <h1>Kush Rishi</h1>
      <p>
        GNSS Analyst at Xona. Geomatics Engineering graduate with independent
        work in ML systems, evaluation and spatial intelligence.
      </p>
      <p className="print-contact">
        Montréal · kushrishi04@gmail.com · kushrishi.com · github.com/Kushrishi
      </p>
      <div className="cv-links">
        <PrintCV />
        <a href="https://github.com/Kushrishi" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/kushrishi/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a href="mailto:kushrishi04@gmail.com">Email</a>
      </div>

      <section>
        <h2>Professional engineering</h2>
        <article>
          <h3>GNSS Analyst · Xona</h3>
          <p>Montréal · June 2026–present</p>
          <p>
            Develop and maintain Python and Linux workflows for GNSS data
            collection, processing, monitoring, validation, and analysis. Build
            automated data-quality checks, engineering metrics, and dashboards;
            support receiver integration and troubleshooting.
          </p>
        </article>
        <article>
          <h3>Research Assistant · University of Calgary</h3>
          <p>December 2025–April 2026</p>
          <p>
            Processed LiDAR and photogrammetric point clouds in CloudCompare,
            computed spatial quality metrics, and produced annotated
            visualizations and documented datasets for faculty research.
          </p>
        </article>
        <article>
          <h3>Survey Assistant · McElhanney</h3>
          <p>May–August 2024</p>
          <p>
            Supported control, layout, and as-built surveying for the Valley
            Line West LRT extension. Used GNSS receivers, total stations, and
            digital levels for field measurements, control checks, and
            documentation.
          </p>
        </article>
        <article>
          <h3>Geomatics Team Member · Relectric Car Team</h3>
          <p>September 2023–April 2026</p>
          <p className="web-only">
            Supported electric vehicle conversion through spatial measurement
            and geometry models for chassis, battery, and drivetrain placement.
            Worked with GNSS, IMU, and LiDAR data and prepared technical outputs
            for other engineering subteams.
          </p>
          <p className="print-only">
            Spatial measurement and geometry models for electric vehicle
            conversion; GNSS, IMU and LiDAR data; technical documentation for
            engineering subteams.
          </p>
        </article>
        <article>
          <h3>
            Software Application Developer · Hycroft Chiropractic &amp; Massage
          </h3>
          <p>September 2021–June 2022 · Freelance</p>
          <p className="web-only">
            Built and maintained the Stretch2Go mobile application in Dart,
            including booking, exercise plans, journaling, and content updates.
            Tested and refined user flows using feedback.
          </p>
          <p className="print-only">
            Built and maintained the Stretch2Go mobile application in Dart;
            booking, exercise plans, journaling, testing and feedback-driven
            updates.
          </p>
        </article>
      </section>

      <section className="print-research">
        <h2>Independent research</h2>
        <article>
          <h3>
            <Link href="/research/truemargin" prefetch={false}>
              TrueMargin
            </Link>
          </h3>
          <p className="web-only">
            Studied whether variability between image registrations helps
            identify spatial error. The controlled study covered 30 synthetic
            cases across 10 anatomies, followed by failure analysis and separate
            calibration and evaluation cohorts of 30 anatomies each. Error
            bounds were conservative. A later calibration-only analysis found
            that adaptive scaling helped in one source but not the other.
            External lung CT validation is planned; no advantage over
            inverse-consistency error or clinical usefulness has been
            established.
          </p>
          <p className="print-only">
            Controlled registration study: 30 cases across 10 anatomies. Median
            anatomy-level Spearman correlation 0.6841, with six case reversals
            and 39 high-error/low-spread observations. Conservative calibrated
            bounds; no established advantage over inverse-consistency error.
            External validation next.
          </p>
        </article>
        <article>
          <h3>
            <Link href="/research/model-regression-forensics" prefetch={false}>
              Model Regression Forensics
            </Link>
          </h3>
          <p className="web-only">
            Studied regressions after training-data changes in two constructed
            Banking77 worlds, with three paired training trajectories each.
            Simple baselines localized both planted changes; gradient-based
            methods added no top-1 benefit. Built a prediction importer, release-policy checks and portable
            reports for inspecting changed cases and repairs. A deterministic
            example shows two distinct repairs restoring the same predictions.
            Independent user benefit and unique causal attribution remain
            unestablished.
          </p>
          <p className="print-only">
            Two matched Banking77 worlds: simple baselines ranked both planted
            changes first; gradient-based diagnostics added no consistent top-1
            benefit. Separate deterministic fixture showed two repairs can
            restore identical predictions. Release-investigation software is
            implemented; independent use remains pending.
          </p>
        </article>
      </section>

      <section>
        <h2>Selected engineering</h2>
        <article>
          <h3>
            <a href="https://github.com/Kushrishi/autonomy-simulation-lab">
              Autonomy Simulation Lab
            </a>
          </h3>
          <p className="web-only">
            Built a browser grid simulator with A*, Dijkstra, BFS, dynamic
            replanning, noisy sensing, range localization, Kalman filtering, and
            telemetry analysis. The separate C++/Python replay tool validates
            recording identity, runs pinned CPU inference, compares processing
            configurations and exports Rerun recordings. A 108-frame comparison
            passed; desktop acceptance and independent first use remain open.
          </p>
          <p className="print-only">
            Stable browser planning/localization simulator with telemetry.
            C++/Python replay with recording validation, CPU inference,
            configuration comparison and Rerun export. Retained 108-frame
            example; desktop acceptance pending.
          </p>
          <p>
            <a href="https://kushrishi.github.io/autonomy-simulation-lab/">
              Interactive demo
            </a>
          </p>
        </article>
      </section>

      <section>
        <h2>Education</h2>
        <h3>University of Calgary</h3>
        <p>BSc Geomatics Engineering, With Distinction · 2022–2026</p>
        <p>
          Foundations in measurement, sensing, estimation, positioning, and
          digital imaging.
        </p>
        <p>
          Student leadership: President of the Geomatics Engineering Students’
          Society and member of the Engineering Students’ Society Board of
          Directors, 2025–2026.
        </p>
      </section>

      <section>
        <h2>Technical focus</h2>
        <p>
          Python, PyTorch, Linux, Git, CI, data pipelines, reproducible
          experimentation, GNSS/PNT, localization, state estimation, ML
          evaluation, and medical image computing.
        </p>
      </section>
    </main>
  );
}
