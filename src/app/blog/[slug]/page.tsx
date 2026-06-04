import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getRelatedPosts } from "@/lib/sanity/queries";
import BlogPostContent from "./BlogPostContent";

export const revalidate = 60;

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found | Jyothi Rekha Sahoo" };
  return {
    title: `${post.title} | Jyothi Rekha Sahoo`,
    description: post.excerpt ?? "An article by Jyothi Rekha Sahoo.",
    openGraph: {
      title: post.title,
      description: post.excerpt ?? "",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const [post, related] = await Promise.all([
    getPostBySlug(params.slug),
    getPostBySlug(params.slug).then((p) =>
      p ? getRelatedPosts(p.category, p._id) : []
    ),
  ]);

  if (!post) notFound();

  return <BlogPostContent post={post} related={related} />;
}
