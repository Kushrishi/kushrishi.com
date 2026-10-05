import { ImageResponse } from "next/og";
import { SocialCard } from "@/components/SocialCard";
export const alt = "Autonomy Simulation Lab | Kush Rishi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() { return new ImageResponse(<SocialCard eyebrow="KUSH RISHI / AUTONOMY SIMULATION LAB" lines={["AUTONOMY", "SIMULATION", "LAB"]} footer="PLANNING, LOCALIZATION AND A SEPARATE NATIVE REPLAY TOOL." />, size); }
