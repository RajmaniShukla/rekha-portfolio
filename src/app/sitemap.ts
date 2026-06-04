import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/sanity/queries";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://jyothirekha.com";

const routes = [
  { path: "/",           priority: 1.0, changeFrequency: "weekly"  as const },
  { path: "/about",      priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/experience", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/skills",     priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/services",   priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/influencer", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/gallery",    priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/resume",     priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/blog",       priority: 0.9, changeFrequency: "weekly"  as const },
  { path: "/contact",    priority: 0.9, changeFrequency: "monthly" as const },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts().catch(() => []);

  const staticRoutes = routes.map((r) => ({
    url: `${BASE_URL}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const blogRoutes = (posts as Array<{ slug: { current: string }; publishedAt: string }>).map((p) => ({
    url: `${BASE_URL}/blog/${p.slug.current}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
