import { ImageResponse } from "next/og";
import { SocialCard } from "@/components/SocialCard";
export const alt = "PrairieReach | Kush Rishi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <SocialCard
      eyebrow="KUSH RISHI / PRAIRIEREACH"
      lines={["PRAIRIE", "REACH", "PROTOTYPE"]}
      footer="TRACKING THE PRACTICAL STEPS AROUND A RURAL MEDICAL VISIT."
    />,
    size,
  );
}
