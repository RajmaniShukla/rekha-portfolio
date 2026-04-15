import HomeHero from "@/components/sections/HomeHero";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import HomeAboutSnapshot from "@/components/sections/HomeAboutSnapshot";
import HomeServices from "@/components/sections/HomeServices";
import HomeTestimonials from "@/components/sections/HomeTestimonials";
import HomeCTA from "@/components/sections/HomeCTA";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <MarqueeStrip />
      <HomeAboutSnapshot />
      <HomeServices />
      <HomeTestimonials />
      <HomeCTA />
    </>
  );
}
