import type { Metadata, Viewport } from "next";
import "./globals.css";
import localFont from "next/font/local";
const manrope = localFont({
  src: "./fonts/manrope.woff2",
  variable: "--font-sans",
  display: "swap",
  weight: "200 800",
});

const siteTitle = "Kush Rishi | Engineering projects";
const siteDescription =
  "Engineering experience and independent projects by Kush Rishi. Explore demos, code, measured results and a printable CV.";

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#fcfcfd" }, { media: "(prefers-color-scheme: dark)", color: "#111827" }],
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kushrishi.com"),
  title: siteTitle,
  description: siteDescription,
  authors: [{ name: "Kush Rishi", url: "https://kushrishi.com" }],
  creator: "Kush Rishi",
  publisher: "Kush Rishi",
  alternates: { canonical: "/" },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "Kush Rishi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={manrope.variable} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}})()` }} /></head>
      <body>{children}</body>
    </html>
  );
}
