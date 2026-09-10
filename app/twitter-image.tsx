import { ImageResponse } from "next/og";

import { SocialCard } from "@/components/SocialCard";

export const alt = "Kush Rishi | Intelligence Under Uncertainty";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <SocialCard
      eyebrow="KUSH RISHI / MONTRÉAL, CANADA"
      lines={["INTELLIGENCE", "UNDER", "UNCERTAINTY."]}
      footer="MACHINE LEARNING · ML SYSTEMS · PNT/GNSS · INTELLIGENT SENSING"
    />,
    size,
  );
}
