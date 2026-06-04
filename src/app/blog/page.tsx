import type { Metadata } from "next";
import { getPosts } from "@/lib/sanity/queries";
import BlogContent from "./BlogContent";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog | Jyothi Rekha Sahoo",
  description:
    "Thought leadership articles on sales strategy, business development, leadership, and influencer marketing by Jyothi Rekha Sahoo.",
  openGraph: {
    title: "Blog | Jyothi Rekha Sahoo",
    description:
      "Insights on sales, BD, leadership & influencer marketing from a 10+ year industry veteran.",
  },
};

export default async function BlogPage() {
  const posts = await getPosts();
  return <BlogContent posts={posts} />;
}
