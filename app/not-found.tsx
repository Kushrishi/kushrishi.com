import Link from "next/link";
import { Header, Footer } from "@/components/SiteChrome";

export default function NotFound() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main" className="launch-hero">
        <p className="eyebrow">404</p>
        <h1>Page not found.</h1>
        <p className="launch-deck">The page you’re looking for isn’t here.</p>
        <Link className="text-link" href="/#work">Back to selected work →</Link>
      </main>
      <Footer />
    </>
  );
}
