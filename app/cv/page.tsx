import type { Metadata } from "next";
import Link from "next/link";
import { ThemeSelect } from "@/components/ThemeSelect";

export const metadata: Metadata = {
  title: "CV | Kush Rishi",
  description: "Engineering experience, education and independent projects.",
  alternates: { canonical: "/cv" },
  openGraph: {
    title: "CV | Kush Rishi",
    description: "Engineering experience, education and independent projects.",
    url: "/cv",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Kush Rishi | Engineering projects" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CV | Kush Rishi",
    description: "Engineering experience, education and independent projects.",
  },
};

export default function CVPage() {
  return (
    <main className="cv-page">
      <header className="site-header compact-header">
        <Link className="wordmark" href="/" prefetch={false}>KR</Link>
        <div className="header-controls"><Link href="/" prefetch={false}>Portfolio</Link><ThemeSelect /></div>
      </header>
      <h1>Kush Rishi</h1>
      <p>GNSS Analyst at Xona. BSc in Geomatics Engineering, University of Calgary.</p>
      <p className="print-contact">Montréal · <a href="mailto:kushrishi04@gmail.com">kushrishi04@gmail.com</a> · <a href="https://kushrishi.com">kushrishi.com</a> · <a href="https://github.com/Kushrishi">github.com/Kushrishi</a></p>
      <div className="cv-links web-only">
        <a className="button" href="/Kush-Rishi-CV.pdf" download>Download CV (PDF)</a>
        <a href="https://github.com/Kushrishi" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/kushrishi/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:kushrishi04@gmail.com">Email</a>
      </div>

      <section>
        <h2>Experience</h2>
        <article>
          <h3>GNSS Analyst · Xona</h3>
          <p>Montréal · June 2026–present</p>
          <p>Develop Python and Linux workflows for GNSS collection, processing, monitoring and validation. Build data-quality checks, engineering metrics and dashboards; support receiver integration and troubleshooting.</p>
        </article>
        <article>
          <h3>Research Assistant · University of Calgary</h3>
          <p>December 2025–April 2026</p>
          <p>Processed LiDAR and photogrammetric point clouds in CloudCompare, calculated spatial quality metrics and prepared documented datasets and visualizations for faculty research.</p>
        </article>
        <article>
          <h3>Geomatics Team Member · Relectric Car Team</h3>
          <p>September 2023–April 2026</p>
          <p>Supported electric-vehicle conversion with spatial measurements and geometry models. Worked with GNSS, IMU and LiDAR data and prepared technical outputs for other subteams.</p>
        </article>
        <article>
          <h3>Survey Assistant · McElhanney</h3>
          <p>May–August 2024</p>
          <p>Supported control, layout and as-built surveying for the Valley Line West LRT extension using GNSS receivers, total stations and digital levels.</p>
        </article>
        <article>
          <h3>Software Application Developer · Hycroft Chiropractic &amp; Massage</h3>
          <p>September 2021–June 2022 · Freelance</p>
          <p>Built and maintained the Stretch2Go application in Dart, including booking, exercise plans, journaling and content updates. Refined user flows through testing and feedback.</p>
        </article>
      </section>

      <section>
        <h2>Education</h2>
        <h3>University of Calgary</h3>
        <p>BSc Geomatics Engineering, With Distinction · 2022–2026</p>
        <p>President, Geomatics Engineering Students’ Society; Engineering Students’ Society Board of Directors, 2025–2026.</p>
      </section>

      <section className="print-research">
        <p className="print-only cv-continuation">Kush Rishi · kushrishi.com · Projects and skills</p>
        <h2>Selected projects</h2>
        <article>
          <h3><a href="https://kushrishi.com/research/model-regression-forensics">Model Regression Forensics</a></h3>
          <p>Built a prediction importer, release-policy checks and local reports. In two constructed Banking77 benchmarks, model-based diagnostics added no consistent top-1 benefit over simple baselines. A separate example demonstrates ambiguous repairs; general causal identification is not established.</p>
        </article>
        <article>
          <h3><a href="https://github.com/Kushrishi/autonomy-simulation-lab">Autonomy Simulation Lab</a></h3>
          <p>Built a browser planning/localization simulator and a separate C++/Python recording-replay tool with CPU inference and configuration comparison. A crop-aware optimization reduced median whole-process time by 8.97% across three matched 108-frame pairs with exact recorded output parity on one Linux host. Measurements apply to that host, model and workload.</p>
          <p><a href="https://kushrishi.github.io/autonomy-simulation-lab/">Interactive demo</a></p>
        </article>
        <article>
          <h3><a href="https://kushrishi.com/research/truemargin">TrueMargin</a></h3>
          <p>Evaluated registration variability against known spatial error in 30 controlled cases across 10 anatomies, followed by separate calibration and evaluation cohorts. Median anatomy-level rank correlation was 0.6841; six case-level associations were negative. Bounds were conservative, and no advantage over inverse-consistency error was established. Independent external validation was not completed.</p>
        </article>
      </section>

      <section>
        <h2>Technical focus</h2>
        <p>Python, C++, PyTorch, Linux, Git, CI, data pipelines, numerical evaluation, GNSS/PNT, localization, state estimation and image registration.</p>
      </section>
    </main>
  );
}
