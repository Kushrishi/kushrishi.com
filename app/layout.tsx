import type { Metadata } from "next";
import "./globals.css";

const siteDescription =
  "Machine learning, ML systems, PNT, intelligent sensing, and research-oriented software.";

export const metadata: Metadata = {
  metadataBase: new URL("https://kushrishi.com"),
  title: "Kush Rishi | Machine Learning, ML Systems & PNT",
  description: siteDescription,
  authors: [{ name: "Kush Rishi", url: "https://kushrishi.com" }],
  creator: "Kush Rishi",
  publisher: "Kush Rishi",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kush Rishi | Intelligence Under Uncertainty",
    description: siteDescription,
    url: "/",
    siteName: "Kush Rishi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kush Rishi | Intelligence Under Uncertainty",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
