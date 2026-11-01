import type { Metadata, Viewport } from "next";
import "./globals.css";
import localFont from "next/font/local";
const manrope = localFont({
  src: "./fonts/manrope.woff2",
  variable: "--font-sans",
  display: "swap",
  weight: "200 800",
});

const siteTitle = "Kush Rishi | GNSS Analyst at Xona";
const siteDescription =
  "Kush Rishi, GNSS Analyst at Xona. Experience, independent projects and documented results in sensing, software and model evaluation.";

export const viewport: Viewport = {
  themeColor: "#fcfcfd",
  colorScheme: "light",
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
    <html lang="en" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
