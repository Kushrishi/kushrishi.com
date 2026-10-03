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
          <p>Montréal · 2026–present</p>
          <p>Python and Linux systems supporting GNSS data collection, processing, monitoring, validation, and analysis.</p>
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
          <p>Versioned model regression debugging, counterfactual restoration, and causal specificity. Completed a frozen localization study across two structurally matched Banking77 worlds and three paired training trajectories. Simple visible-change baselines localized both worlds; causal certification remains unestablished and continuation is under review.</p>
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
      </section>

      <section>
        <h2>Technical focus</h2>
        <p>Python, PyTorch, Linux, Git, CI, data pipelines, reproducible experimentation, GNSS/PNT, localization, state estimation, ML evaluation, and medical image computing.</p>
      </section>
    </main>
  );
}
