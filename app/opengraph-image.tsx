import { ImageResponse } from "next/og";

import { SocialCard } from "@/components/SocialCard";

export const alt = "Kush Rishi | ML Systems, Evaluation & Spatial Intelligence";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(<SocialCard kind="home" />, size);
}
