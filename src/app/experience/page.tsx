import type { Metadata } from "next";
import ExperienceContent from "./ExperienceContent";

export const metadata: Metadata = {
  title: "Experience | Jyothi Rekha Sahoo",
  description:
    "10+ years in Sales, Business Development, EdTech, Real Estate, and BPO. A career timeline across India's most dynamic industries.",
  openGraph: {
    title: "10+ Years of Experience | Jyothi Rekha Sahoo",
    description: "A track record across sales, marketing, operations, real estate, and edtech.",
  },
};

export default function ExperiencePage() {
  return <ExperienceContent />;
}
