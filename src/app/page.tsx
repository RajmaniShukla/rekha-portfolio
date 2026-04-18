import HomeHero from "@/components/sections/HomeHero";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import HomeAboutSnapshot from "@/components/sections/HomeAboutSnapshot";
import HomeServices from "@/components/sections/HomeServices";
import HomeTestimonials from "@/components/sections/HomeTestimonials";
import HomeCTA from "@/components/sections/HomeCTA";
import { getSiteSettings } from "@/lib/sanity/queries";

export const revalidate = 60;

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jyothi Rekha Sahoo",
  jobTitle: "Sales & Business Development Professional",
  description:
    "Turning Connections into Conversions. Sales strategist, business development leader, and influencer marketer with 10+ years of experience across India.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://jyothirekha.com",
  email: "jyothirekha17@gmail.com",
  telephone: "+919289853285",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gurgaon",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  knowsLanguage: ["English", "Hindi", "Kannada", "Telugu", "Tamil", "Oriya", "Bengali"],
  sameAs: [
    "https://www.instagram.com/firequeen_17",
    "https://www.linkedin.com/in/rekha-sahoo-35ab65240",
  ],
};

export default async function HomePage() {
  const settings = await getSiteSettings().catch(() => null);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <HomeHero heroPhoto={settings?.heroPhoto ?? null} />
      <MarqueeStrip />
      <HomeAboutSnapshot />
      <HomeServices />
      <HomeTestimonials />
      <HomeCTA />
    </>
  );
}
