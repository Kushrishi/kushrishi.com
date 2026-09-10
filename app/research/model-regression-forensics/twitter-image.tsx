import { ImageResponse } from "next/og";
import { SocialCard } from "@/components/SocialCard";

export const alt = "Model Regression Forensics  -  Kush Rishi";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <SocialCard
      eyebrow="PROJECT 001 / ACTIVE RESEARCH"
      lines={["MODEL", "REGRESSION", "FORENSICS."]}
      footer="BLINDED RCA · TRAINING LINEAGE · CONTROLLED INTERVENTION"
    />,
    size,
  );
}
