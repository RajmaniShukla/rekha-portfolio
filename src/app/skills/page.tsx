import type { Metadata } from "next";
import SkillsContent from "./SkillsContent";
import { getSkills } from "@/lib/sanity/queries";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Skills | Jyothi Rekha Sahoo",
  description: "Sales strategy, business development, digital marketing, and leadership skills built over 10+ years.",
  openGraph: {
    title: "Skills & Expertise | Jyothi Rekha Sahoo",
    description: "10+ years of honing skills across sales, marketing, operations, and leadership.",
  },
};

export default async function SkillsPage() {
  const skills = await getSkills().catch(() => []);
  return <SkillsContent skills={skills} />;
}
