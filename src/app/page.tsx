import HomeHero from "@/components/sections/HomeHero";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import HomeAboutSnapshot from "@/components/sections/HomeAboutSnapshot";
import HomeServices from "@/components/sections/HomeServices";
import HomeTestimonials from "@/components/sections/HomeTestimonials";
import HomeCTA from "@/components/sections/HomeCTA";

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
  sameAs: [],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <HomeHero />
      <MarqueeStrip />
      <HomeAboutSnapshot />
      <HomeServices />
      <HomeTestimonials />
      <HomeCTA />
    </>
  );
}
