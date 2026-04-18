import type { Metadata } from "next";
import SkillsContent from "./SkillsContent";

export const metadata: Metadata = {
  title: "Skills | Jyothi Rekha Sahoo",
  description:
    "Sales strategy, business development, digital marketing, and leadership skills built over 10+ years. See what Jyothi Rekha Sahoo brings to the table.",
  openGraph: {
    title: "Skills & Expertise | Jyothi Rekha Sahoo",
    description: "10+ years of honing skills across sales, marketing, operations, and leadership.",
  },
};

export default function SkillsPage() {
  return <SkillsContent />;
}
