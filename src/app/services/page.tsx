import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";
import { getServices } from "@/lib/sanity/queries";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Services | Jyothi Rekha Sahoo",
  description: "Sales & Business Development consulting, Influencer Marketing campaigns, and Business Consulting for startups and SMEs. Based in Gurgaon, India.",
  openGraph: {
    title: "Services | Jyothi Rekha Sahoo",
    description: "Three core offerings, one focus — driving measurable growth for your business.",
  },
};

export default async function ServicesPage() {
  const services = await getServices().catch(() => []);
  return <ServicesContent services={services} />;
}
