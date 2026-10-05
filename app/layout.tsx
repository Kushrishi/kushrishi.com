import type { Metadata } from "next";
import "./globals.css";
import "./readability.css";

const siteDescription =
  "Kush Rishi, GNSS Analyst at Xona. Engineering and independent research in positioning, estimation and model evaluation.";

export const metadata: Metadata = {
  metadataBase: new URL("https://kushrishi.com"),
  title: "Kush Rishi | Engineering & Research",
  description: siteDescription,
  authors: [{ name: "Kush Rishi", url: "https://kushrishi.com" }],
  creator: "Kush Rishi",
  publisher: "Kush Rishi",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kush Rishi | Engineering & Research",
    description: siteDescription,
    url: "/",
    siteName: "Kush Rishi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kush Rishi | Engineering & Research",
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
