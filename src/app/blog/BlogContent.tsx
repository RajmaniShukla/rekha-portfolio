"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/animations";
import { urlFor } from "@/lib/sanity/client";

const CATEGORIES = [
  "All",
  "Sales Tips",
  "Business Development",
  "Leadership",
  "Influencer Marketing",
  "Career Growth",
  "Personal",
];

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  category: string;
  readTime?: number;
  featured?: boolean;
  coverImage?: { asset: { _ref: string } };
};

type Props = { posts: Post[] };

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

const CATEGORY_COLORS: Record<string, string> = {
  "Sales Tips": "bg-brand-rose/20 text-brand-rose",
  "Business Development": "bg-amber-500/20 text-amber-400",
  Leadership: "bg-purple-500/20 text-purple-400",
  "Influencer Marketing": "bg-pink-500/20 text-pink-400",
  "Career Growth": "bg-emerald-500/20 text-emerald-400",
  Personal: "bg-sky-500/20 text-sky-400",
};

function CategoryBadge({ category }: { category: string }) {
  const colors = CATEGORY_COLORS[category] ?? "bg-white/10 text-white/70";
  return (
    <span className={`text-xs font-accent font-semibold px-3 py-1 rounded-full ${colors}`}>
      {category}
    </span>
  );
}

function PostCard({ post }: { post: Post }) {
  const imgUrl = post.coverImage
    ? urlFor(post.coverImage).width(800).height(450).auto("format").url()
    : null;

  return (
    <motion.article
      variants={scaleIn}
      className="group bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-brand-rose/40 transition-all duration-300 flex flex-col"
    >
      {/* Cover Image */}
      <Link href={`/blog/${post.slug.current}`} className="block overflow-hidden aspect-[16/9] relative bg-brand-navy/50">
        {imgUrl ? (
          <Image
            src={imgUrl}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <BookOpen size={48} className="text-white/20" />
          </div>
        )}
        {post.featured && (
          <span className="absolute top-3 left-3 bg-brand-gold text-brand-navy text-xs font-accent font-bold px-2 py-1 rounded-full">
            Featured
          </span>
        )}
      </Link>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <CategoryBadge category={post.category} />
        </div>

        <Link href={`/blog/${post.slug.current}`}>
          <h2 className="font-display text-lg font-bold text-white mb-3 group-hover:text-brand-gold transition-colors line-clamp-2 leading-snug">
            {post.title}
          </h2>
        </Link>

        {post.excerpt && (
          <p className="text-white/60 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
            {post.excerpt}
          </p>
        )}

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
          <div className="flex items-center gap-4 text-white/40 text-xs font-accent">
            <span className="flex items-center gap-1.5">
              <Calendar size={12} />
              {formatDate(post.publishedAt)}
            </span>
            {post.readTime && (
              <span className="flex items-center gap-1.5">
                <Clock size={12} />
                {post.readTime} min read
              </span>
            )}
          </div>
          <Link
            href={`/blog/${post.slug.current}`}
            className="flex items-center gap-1 text-brand-rose text-xs font-accent font-semibold hover:text-brand-gold transition-colors"
          >
            Read <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function BlogContent({ posts }: Props) {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <main className="pt-20 min-h-screen bg-brand-navy">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-[#0d0d1f] to-brand-navy overflow-hidden">
        <div className="absolute inset-0 opacity-30"
          style={{ backgroundImage: "radial-gradient(circle at 30% 50%, #C9184A33 0%, transparent 60%), radial-gradient(circle at 70% 30%, #FFD70022 0%, transparent 50%)" }}
        />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center"
        >
          <motion.p variants={fadeInUp} className="font-accent text-brand-coral text-sm tracking-widest uppercase mb-4">
            Thought Leadership
          </motion.p>
          <motion.h1 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            Articles & <span className="text-brand-gold">Insights</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            Real-world perspectives on sales, business development, leadership, and influencer marketing.
          </motion.p>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 z-30 bg-brand-navy/95 backdrop-blur border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-accent font-medium transition-all duration-200 ${
                  active === cat
                    ? "bg-brand-rose text-white"
                    : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <BookOpen size={48} className="mx-auto text-white/20 mb-4" />
              <p className="text-white/40 font-accent text-lg">
                No posts yet in this category. Check back soon!
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={active}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}
