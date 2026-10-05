import { Header, Footer } from "./SiteChrome";
import type { ReactNode } from "react";
export type StudySection = { id: string; title: string; content: ReactNode };
export function LaunchPage({
  number,
  title,
  question,
  status,
  stack,
  links,
  visual,
  sections,
}: {
  number: string;
  title: string;
  question: string;
  status: string;
  stack: string;
  links: { label: string; href: string }[];
  visual: ReactNode;
  sections: StudySection[];
}) {
  return (
    <>
      <a className="skip-link" href="#study">
        Skip to project details
      </a>
      <Header />
      <main>
        <section className="launch-hero">
          <p className="eyebrow">{number} / Independent work by Kush Rishi</p>
          <h1>{title}</h1>
          <p className="launch-deck">{question}</p>
          <div className="launch-metadata">
            <span>{status}</span>
            <span>{stack}</span>
          </div>
          <div className="launch-links">
            {links.map((l) => (
              <a className="text-link" key={l.href} href={l.href}>
                {l.label} ↗
              </a>
            ))}
          </div>
        </section>
        <div className="launch-visual">{visual}</div>
        <div className="launch-content" id="study">
          <nav className="launch-toc" aria-label="Project sections">
            {sections.map((s, i) => (
              <a href={`#${s.id}`} key={s.id}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {s.title}
              </a>
            ))}
          </nav>
          <div className="study-sections">
            {sections.map((s) => (
              <section className="study-section" id={s.id} key={s.id}>
                <h2>{s.title}</h2>
                {s.content}
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
export function MethodChain({ steps }: { steps: string[] }) {
  return (
    <ol className="method-chain">
      {steps.map((s, i) => (
        <li key={s}>
          <span>{String(i + 1).padStart(2, "0")}</span>
          {s}
        </li>
      ))}
    </ol>
  );
}
