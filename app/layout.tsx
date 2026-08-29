import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kush Rishi | Machine Learning, ML Systems & PNT",
  description:
    "Machine learning, ML systems, PNT, intelligent sensing, and research-oriented software.",
  metadataBase: new URL("https://kushrishi.com"),
  openGraph: {
    title: "Kush Rishi | Intelligence Under Uncertainty",
    description:
      "Machine learning, ML systems, PNT, intelligent sensing, and research-oriented software.",
    url: "https://kushrishi.com",
    siteName: "Kush Rishi",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
