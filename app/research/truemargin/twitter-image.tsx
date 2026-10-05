import { ImageResponse } from "next/og";
import { SocialCard } from "@/components/SocialCard";

export const alt = "TrueMargin | Kush Rishi";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <SocialCard
        eyebrow="TRUEMARGIN / INDEPENDENT RESEARCH"
        lines={["TRUE", "MARGIN", "RESEARCH."]}
        footer="MEDICAL IMAGING · REGISTRATION UNCERTAINTY · SPATIAL ERROR"
      />
    ),
    size,
  );
}
