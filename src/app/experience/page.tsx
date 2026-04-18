import type { Metadata } from "next";
import ExperienceContent from "./ExperienceContent";
import { getExperiences } from "@/lib/sanity/queries";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Experience | Jyothi Rekha Sahoo",
  description: "10+ years in Sales, Business Development, EdTech, Real Estate, and BPO. A career timeline across India's most dynamic industries.",
  openGraph: {
    title: "10+ Years of Experience | Jyothi Rekha Sahoo",
    description: "A track record across sales, marketing, operations, real estate, and edtech.",
  },
};

export default async function ExperiencePage() {
  const experiences = await getExperiences().catch(() => []);
  return <ExperienceContent experiences={experiences} />;
}
