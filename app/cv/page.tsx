import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CV | Kush Rishi",
  description: "Engineering experience, independent research, and selected technical work.",
  alternates: { canonical: "/cv" },
  openGraph: { title: "CV | Kush Rishi", url: "/cv" },
};

export default function CVPage() {
  return (
    <main className="cv-page">
      <header className="site-header compact-header">
        <Link className="wordmark" href="/" prefetch={false}>KR</Link>
        <Link href="/" prefetch={false}>Portfolio</Link>
      </header>
      <h1>Kush Rishi</h1>
      <p>GNSS Analyst at Xona. Geomatics Engineering graduate working on reliable ML, sensing, localization, and estimation.</p>
      <div className="cv-links">
        <a href="https://github.com/Kushrishi" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/kushrishi/" target="_blank" rel="noreferrer">LinkedIn / Contact</a>
      </div>

      <section>
        <h2>Professional engineering</h2>
        <article>
          <h3>GNSS Analyst · Xona</h3>
          <p>Montréal · June 2026–present</p>
          <p>Develop and maintain Python and Linux workflows for GNSS data collection, processing, monitoring, validation, and analysis. Build automated data-quality checks, engineering metrics, and dashboards; support receiver integration and troubleshooting.</p>
        </article>
        <article>
          <h3>Research Assistant · University of Calgary</h3>
          <p>December 2025–April 2026</p>
          <p>Processed LiDAR and photogrammetric point clouds in CloudCompare, computed spatial quality metrics, and produced annotated visualizations and documented datasets for faculty research.</p>
        </article>
        <article>
          <h3>Geomatics Team Member · Relectric Car Team</h3>
          <p>September 2023–April 2026</p>
          <p>Supported electric vehicle conversion through spatial measurement and geometry models for chassis, battery, and drivetrain placement. Worked with GNSS, IMU, and LiDAR data and prepared technical outputs for other engineering subteams.</p>
        </article>
        <article>
          <h3>Survey Assistant · McElhanney</h3>
          <p>May–August 2024</p>
          <p>Supported control, layout, and as-built surveying for the Valley Line West LRT extension. Used GNSS receivers, total stations, and digital levels for field measurements, control checks, and documentation.</p>
        </article>
        <article>
          <h3>Software Application Developer · Hycroft Chiropractic &amp; Massage</h3>
          <p>September 2021–June 2022 · Freelance</p>
          <p>Built and maintained the Stretch2Go mobile application in Dart, including booking, exercise plans, journaling, and content updates. Tested and refined user flows using feedback.</p>
        </article>
      </section>

      <section>
        <h2>Independent research</h2>
        <article>
          <h3><a href="https://github.com/Kushrishi/truemargin">TrueMargin</a></h3>
          <p>Medical image registration uncertainty and local spatial error. Completed a prospective known-ground-truth study across 30 synthetic cases and 10 held-out anatomies, followed by comparator and blind-spot analysis. Prospective calibration is active; numerical calibration and superiority over inverse-consistency error remain unestablished.</p>
        </article>
        <article>
          <h3><a href="https://github.com/Kushrishi/model-regression-forensics">Model Regression Forensics</a></h3>
          <p>Versioned model regression debugging, counterfactual restoration, and causal specificity. Completed a frozen localization study across two structurally matched Banking77 worlds, with three paired training trajectories in each. Simple visible-change baselines localized both worlds; causal certification remains unestablished and continuation is under review.</p>
        </article>
      </section>

      <section>
        <h2>Selected engineering</h2>
        <article>
          <h3><a href="https://github.com/Kushrishi/autonomy-simulation-lab">Autonomy Simulation Lab</a></h3>
          <p>Completed v1.0 autonomy and localization environment with A*, Dijkstra, BFS, dynamic replanning, noisy sensing, nonlinear range localization, Kalman filtering, telemetry, Python analysis, tests, and CI.</p>
        </article>
      </section>

      <section>
        <h2>Education</h2>
        <h3>University of Calgary</h3>
        <p>BSc Geomatics Engineering, With Distinction · 2022–2026</p>
        <p>Foundations in measurement, sensing, estimation, positioning, and digital imaging.</p>
        <p>Student leadership: President of the Geomatics Engineering Students’ Society and member of the Engineering Students’ Society Board of Directors, 2025–2026.</p>
      </section>

      <section>
        <h2>Technical focus</h2>
        <p>Python, PyTorch, Linux, Git, CI, data pipelines, reproducible experimentation, GNSS/PNT, localization, state estimation, ML evaluation, and medical image computing.</p>
      </section>
    </main>
  );
}
