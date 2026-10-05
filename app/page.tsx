import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main id="top">
      <a className="skip-link" href="#work">Skip to selected work</a>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Kush Rishi, home">KR</a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a><a href="#about">About</a><Link href="/cv">CV</Link>
          <a href="https://github.com/Kushrishi">GitHub</a>
        </nav>
      </header>
      <section className="hero">
        <div>
          <p className="eyebrow">GNSS Analyst at Xona · Montréal</p>
          <h1>Kush Rishi<span className="hero-subtitle">Positioning. Estimation.<br />Model evaluation.</span></h1>
          <p className="hero-deck">I build Python and Linux tools for positioning data. Outside work, I study how models fail and when uncertainty helps explain their errors.</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">Selected work</a><Link className="button" href="/cv">View CV</Link></div>
        </div>
        <aside className="work-index" aria-label="Selected projects">
          <p className="section-label">Selected questions</p>
          <a href="#truemargin"><span>01 / TrueMargin</span><strong>Can registration uncertainty predict alignment error?</strong></a>
          <a href="#mrf"><span>02 / Model Regression Forensics</span><strong>Which training change explains a regression?</strong></a>
          <a href="#autonomy"><span>03 / Autonomy Simulation Lab</span><strong>How do planning and localization behave under noise?</strong></a>
        <a href="#prairiereach"><span>04 / PrairieReach</span><strong>What still needs attention when a medical trip changes?</strong></a></aside>
      </section>
      <section className="section" id="work">
        <div className="section-heading"><p className="section-label">Selected work</p><h2>Research and engineering.</h2><p className="section-intro">Questions, working software and what the evidence shows.</p></div>
        <article className="work-card" id="truemargin"><div className="project-meta"><span>Independent research</span><span>Python / SimpleITK</span></div>
          <div className="work-description"><p className="eyebrow">01 / Medical image registration</p><h3>TrueMargin</h3><p>Does disagreement between image registrations help locate alignment errors? I tested a nine-member ensemble against known deformations, then examined its failures and calibrated error bounds.</p><div className="hero-actions"><Link className="text-link" href="/research/truemargin">Study and results</Link><a className="text-link" href="https://github.com/Kushrishi/truemargin">Code</a></div></div>
          <div className="evidence-panel"><p className="section-label">Controlled study · 30 cases / 10 anatomies</p><dl><div><dt>Median anatomy-level rank correlation</dt><dd>0.684</dd></div><div><dt>Anatomies with a positive association</dt><dd>10 / 10</dd></div></dl><p className="finding">Uncertainty tracked error overall, but missed some large errors. An advantage over inverse-consistency error was not established.</p></div>
        </article>
        <article className="work-card" id="mrf"><div className="project-meta"><span>Independent research</span><span>Python / PyTorch</span></div>
          <div className="work-description"><p className="eyebrow">02 / Training-data changes</p><h3>Model Regression Forensics</h3><p>A model gets worse after retraining. I compared ways to rank the responsible training change, then built a release comparator and an example showing why two different repairs can restore the same predictions.</p><div className="hero-actions"><Link className="text-link" href="/research/model-regression-forensics">Study and results</Link><a className="text-link" href="https://github.com/Kushrishi/model-regression-forensics">Code</a></div></div>
          <div className="evidence-panel"><p className="section-label">Banking77 · 2 constructed worlds</p><div className="rank-table"><div><span>Method</span><span>Root rank by world</span></div><div><strong>Label overlap / lexical similarity</strong><b>1 / 1</b></div><div><strong>Grad-Dot / TracIn</strong><b>1 / 5</b></div></div><p className="finding">Simple baselines solved both worlds. A semantic shortcut limited what the benchmark could establish.</p></div>
        </article>
        <article className="work-card" id="autonomy"><div className="project-meta"><span>Interactive simulator / native tool in development</span><span>TypeScript / Python / C++</span></div>
          <div className="work-description"><p className="eyebrow">03 / Planning and localization</p><h3>Autonomy Simulation Lab</h3><p>A browser simulator for comparing path planners, adding measurement noise, and inspecting localization estimates. It combines A*, Dijkstra and BFS with range localization, Kalman filtering and telemetry.</p><div className="hero-actions"><Link className="text-link" href="/projects/autonomy-simulation-lab">Project overview</Link><a className="text-link" href="https://kushrishi.github.io/autonomy-simulation-lab/">Live demo</a><a className="text-link" href="https://github.com/Kushrishi/autonomy-simulation-lab">Code</a></div></div>
          <div className="evidence-panel"><p className="section-label">Available now</p><figure className="project-figure"><Image src="/projects/autonomy.jpg" width={1348} height={926} alt="Autonomy Simulation Lab showing an A-star route through a warehouse grid and planner controls" /><figcaption>Actual simulator: A* on the warehouse scenario.</figcaption></figure><p className="finding">The browser simulator is complete. A separate C++ tool validates recordings and decodes PNG frames; preprocessing and inference are next.</p></div>
        </article>
        <article className="work-card" id="prairiereach">
          <div className="project-meta"><span>Synthetic prototype / product research</span><span>React / TypeScript</span></div>
          <div className="work-description"><p className="eyebrow">04 / Rural care coordination</p><h3>PrairieReach</h3><p>A booked appointment still needs a ride, paperwork and someone responsible for each step. This prototype tracks those arrangements and flags affected tasks when a booking changes.</p><div className="hero-actions"><Link className="text-link" href="/projects/prairiereach">Project overview</Link><a className="text-link" href="https://kushrishi.github.io/carebridge-canada/">Synthetic demo</a><a className="text-link" href="https://github.com/Kushrishi/carebridge-canada">Code</a></div></div>
          <div className="evidence-panel"><p className="section-label">One change, explicit consequences</p><ol className="workflow"><li>Record a booked visit and task owners.</li><li>Confirm the trip and paperwork.</li><li>A revised booking marks dependent tasks for review.</li><li>Review the source, then reconfirm arrangements.</li></ol><p className="finding">Built with fictional journeys. The next question is whether it improves coordination compared with a shared checklist.</p></div>
        </article>
      </section>
      <section className="section about-section" id="about"><div><p className="section-label">About</p><h2>From measurements<br />to working software.</h2></div><div className="about-copy"><p>I’m a GNSS Analyst at Xona, developing tools for collecting, processing and monitoring positioning data. I graduated with distinction in Geomatics Engineering from the University of Calgary.</p><p>My earlier work covered LiDAR and photogrammetric point-cloud quality, field surveying for the Valley Line West LRT extension, and software development. My independent projects build on those interests in sensing, estimation and careful evaluation.</p><Link className="text-link" href="/cv">Experience and education</Link></div></section>
      <footer><span>Kush Rishi</span><div className="footer-links"><a href="mailto:kushrishi04@gmail.com">Email</a><a href="https://www.linkedin.com/in/kushrishi/">LinkedIn</a><a href="https://github.com/Kushrishi">GitHub</a><Link href="/cv">CV</Link></div></footer>
    </main>
  );
}
