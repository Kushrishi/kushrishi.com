import { ImageResponse } from "next/og";

import { SocialCard } from "@/components/SocialCard";

export const alt = "Kush Rishi | Engineering & Research";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <SocialCard
      eyebrow="KUSH RISHI / MONTRÉAL, CANADA"
      lines={["KUSH RISHI", "ENGINEERING", "& RESEARCH"]}
      footer="RELIABLE ML · SENSING · LOCALIZATION · ESTIMATION"
    />,
    size,
  );
}
