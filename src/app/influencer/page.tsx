import type { Metadata } from "next";
import InfluencerContent from "./InfluencerContent";

export const metadata: Metadata = {
  title: "Influencer Profile | Jyothi Rekha Sahoo",
  description:
    "Brand collaborations, influencer marketing, and content creation by Jyothi Rekha Sahoo. Multilingual. Multi-platform. Authentic results.",
  openGraph: {
    title: "Influencer Profile | Jyothi Rekha Sahoo",
    description: "Creating authentic content that connects brands with real people.",
  },
};

export default function InfluencerPage() {
  return <InfluencerContent />;
}
