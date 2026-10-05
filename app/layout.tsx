import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
const manrope = localFont({
  src: "./fonts/manrope.woff2",
  variable: "--font-sans",
  display: "swap",
  weight: "200 800",
});

const siteDescription =
  "Kush Rishi, GNSS Analyst at Xona. ML systems, evaluation and spatial intelligence. Independent research and engineering grounded in measurement.";

export const metadata: Metadata = {
  metadataBase: new URL("https://kushrishi.com"),
  title: "Kush Rishi | ML Systems, Evaluation & Spatial Intelligence",
  description: siteDescription,
  authors: [{ name: "Kush Rishi", url: "https://kushrishi.com" }],
  creator: "Kush Rishi",
  publisher: "Kush Rishi",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kush Rishi | ML Systems, Evaluation & Spatial Intelligence",
    description: siteDescription,
    url: "/",
    siteName: "Kush Rishi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kush Rishi | ML Systems, Evaluation & Spatial Intelligence",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
