import type { Metadata } from "next";
import { getSiteSettings, getSocialLinks } from "@/lib/sanity/queries";
import MediaKitContent from "./MediaKitContent";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Media Kit | Jyothi Rekha Sahoo",
  description:
    "Brand collaboration information, audience stats, content niches, and downloadable media kit for Jyothi Rekha Sahoo — Sales Professional & Influencer.",
  openGraph: {
    title: "Media Kit | Jyothi Rekha Sahoo",
    description:
      "Everything brands need to know about collaborating with Jyothi Rekha Sahoo.",
  },
};

export default async function MediaKitPage() {
  const [settings, socials] = await Promise.all([
    getSiteSettings(),
    getSocialLinks(),
  ]);
  return <MediaKitContent settings={settings} socials={socials} />;
}
