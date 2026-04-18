import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services | Jyothi Rekha Sahoo",
  description:
    "Sales & Business Development consulting, Influencer Marketing campaigns, and Business Consulting for startups and SMEs. Based in Gurgaon, India.",
  openGraph: {
    title: "Services | Jyothi Rekha Sahoo",
    description: "Three core offerings, one focus — driving measurable growth for your business.",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
