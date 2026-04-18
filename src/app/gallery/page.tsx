import type { Metadata } from "next";
import GalleryContent from "./GalleryContent";
import { getGalleryItems } from "@/lib/sanity/queries";

export const revalidate = 60; // revalidate every 60s

export const metadata: Metadata = {
  title: "Gallery | Jyothi Rekha Sahoo",
  description:
    "Photos from work, events, speaking engagements, and life. A visual story of Jyothi Rekha Sahoo.",
  openGraph: {
    title: "Gallery | Jyothi Rekha Sahoo",
    description: "Moments from work, life, events, and everything in between.",
  },
};

export default async function GalleryPage() {
  const items = await getGalleryItems();
  return <GalleryContent items={items} />;
}
