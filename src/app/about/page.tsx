import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About | Jyothi Rekha Sahoo",
  description:
    "The story behind the results. Sales professional, people person, and business builder with 10+ years across 5 industries in India.",
  openGraph: {
    title: "About Jyothi Rekha Sahoo",
    description: "10+ years. 6 languages. 5 industries. The story behind the results.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
