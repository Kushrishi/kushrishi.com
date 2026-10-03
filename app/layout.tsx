import type { Metadata } from "next";
import "./globals.css";
import "./readability.css";

const siteDescription =
  "Research engineering for reliable machine learning and sensing systems, focused on evaluation, uncertainty, and estimation.";

export const metadata: Metadata = {
  metadataBase: new URL("https://kushrishi.com"),
  title: "Kush Rishi | Reliable ML, Sensing & Estimation",
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
