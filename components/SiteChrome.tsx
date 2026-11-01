import Link from "next/link";
import { ThemeSelect } from "./ThemeSelect";
export function Header() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="KR · Kush Rishi, home">
        KR<span>Kush Rishi</span>
      </Link>
      <div className="header-controls">
      <nav aria-label="Primary navigation">
        <Link href="/#work">Work</Link>
        <Link href="/#about">About</Link>
        <Link href="/cv">CV</Link>
        <a href="https://github.com/Kushrishi">GitHub</a>
      </nav>
      <ThemeSelect />
      </div>
    </header>
  );
}
export function Footer() {
  return (
    <footer>
      <div>
        <strong>Kush Rishi</strong>
      </div>
      <div className="footer-links">
        <a href="mailto:kushrishi04@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/kushrishi/">LinkedIn</a>
        <a href="https://github.com/Kushrishi">GitHub</a>
        <Link href="/cv">CV</Link>
      </div>
    </footer>
  );
}
