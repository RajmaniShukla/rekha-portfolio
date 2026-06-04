"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { PortableText } from "@portabletext/react";
import { Calendar, Clock, ArrowLeft, Share2, Linkedin, Twitter } from "lucide-react";
import { urlFor } from "@/lib/sanity/client";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any[];
};

type Props = { post: Post; related: Post[] };

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
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

// Portable text component overrides
const portableTextComponents = {
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="font-display text-2xl md:text-3xl font-bold text-white mt-10 mb-4">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="font-display text-xl md:text-2xl font-bold text-white mt-8 mb-3">{children}</h3>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-white/75 leading-relaxed mb-5 text-base md:text-lg">{children}</p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-brand-rose pl-6 my-6 italic text-white/60 text-lg">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="text-white font-semibold">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic text-brand-coral">{children}</em>
    ),
    underline: ({ children }: { children?: React.ReactNode }) => (
      <span className="underline decoration-brand-rose underline-offset-4">{children}</span>
    ),
    link: ({ value, children }: { value?: { href: string; blank?: boolean }; children?: React.ReactNode }) => (
      <a
        href={value?.href}
        target={value?.blank ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className="text-brand-gold hover:text-brand-rose transition-colors underline underline-offset-4"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }: { value: { asset: { _ref: string }; caption?: string } }) => {
      const imgUrl = urlFor(value).width(1200).auto("format").url();
      return (
        <figure className="my-8">
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
            <Image src={imgUrl} alt={value.caption ?? ""} fill className="object-cover" />
          </div>
          {value.caption && (
            <figcaption className="text-center text-white/40 text-sm mt-3 font-accent">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-disc list-inside space-y-2 mb-5 text-white/75 text-base md:text-lg pl-2">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal list-inside space-y-2 mb-5 text-white/75 text-base md:text-lg pl-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="leading-relaxed">{children}</li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <li className="leading-relaxed">{children}</li>
    ),
  },
};

function RelatedCard({ post }: { post: Post }) {
  const imgUrl = post.coverImage
    ? urlFor(post.coverImage).width(400).height(225).auto("format").url()
    : null;
  const colors = CATEGORY_COLORS[post.category] ?? "bg-white/10 text-white/70";
  return (
    <motion.article variants={scaleIn} className="group bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-brand-rose/40 transition-all">
      <Link href={`/blog/${post.slug.current}`} className="block aspect-[16/9] relative bg-brand-navy/50 overflow-hidden">
        {imgUrl ? (
          <Image src={imgUrl} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full bg-white/5" />
        )}
      </Link>
      <div className="p-4">
        <span className={`text-xs font-accent font-semibold px-2 py-0.5 rounded-full ${colors}`}>{post.category}</span>
        <Link href={`/blog/${post.slug.current}`}>
          <h3 className="font-display font-bold text-white mt-2 text-sm leading-snug line-clamp-2 group-hover:text-brand-gold transition-colors">{post.title}</h3>
        </Link>
        <p className="text-white/40 text-xs mt-1 font-accent">{formatDate(post.publishedAt)}</p>
      </div>
    </motion.article>
  );
}

export default function BlogPostContent({ post, related }: Props) {
  const coverUrl = post.coverImage
    ? urlFor(post.coverImage).width(1600).height(700).auto("format").url()
    : null;
  const catColors = CATEGORY_COLORS[post.category] ?? "bg-white/10 text-white/70";

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = encodeURIComponent(`${post.title} — by Jyothi Rekha Sahoo`);

  return (
    <main className="pt-16 min-h-screen bg-brand-navy">
      {/* Cover */}
      {coverUrl && (
        <div className="relative w-full h-64 md:h-96 overflow-hidden">
          <Image src={coverUrl} alt={post.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent" />
        </div>
      )}

      <div className="max-w-3xl mx-auto px-4 md:px-8 py-12">
        {/* Back */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-white/50 hover:text-brand-rose font-accent text-sm mb-8 transition-colors">
          <ArrowLeft size={14} /> Back to Blog
        </Link>

        {/* Header */}
        <motion.header initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`text-xs font-accent font-semibold px-3 py-1 rounded-full ${catColors}`}>
              {post.category}
            </span>
            {post.featured && (
              <span className="bg-brand-gold text-brand-navy text-xs font-accent font-bold px-2 py-1 rounded-full">Featured</span>
            )}
          </motion.div>

          <motion.h1 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </motion.h1>

          <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-6 text-white/40 text-sm font-accent mb-8 pb-8 border-b border-white/10">
            <span className="flex items-center gap-1.5"><Calendar size={14} />{formatDate(post.publishedAt)}</span>
            {post.readTime && <span className="flex items-center gap-1.5"><Clock size={14} />{post.readTime} min read</span>}
            {/* Author */}
            <span className="flex items-center gap-2 ml-auto">
              <span className="w-7 h-7 rounded-full bg-brand-rose flex items-center justify-center text-white text-xs font-bold">JR</span>
              <span className="text-white/60">Jyothi Rekha Sahoo</span>
            </span>
          </motion.div>
        </motion.header>

        {/* Body */}
        {post.body && post.body.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="prose-custom"
          >
            <PortableText value={post.body} components={portableTextComponents} />
          </motion.div>
        ) : (
          <p className="text-white/40 italic text-center py-16 font-accent">Content coming soon...</p>
        )}

        {/* Share */}
        <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-4">
          <span className="text-white/40 font-accent text-sm flex items-center gap-2">
            <Share2 size={14} /> Share:
          </span>
          <a
            href={`https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(shareUrl)}`}
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-[#1DA1F2]/20 text-white/70 hover:text-[#1DA1F2] rounded-full text-sm font-accent transition-all"
          >
            <Twitter size={14} /> Twitter
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-[#0077B5]/20 text-white/70 hover:text-[#0077B5] rounded-full text-sm font-accent transition-all"
          >
            <Linkedin size={14} /> LinkedIn
          </a>
        </div>
      </div>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pb-20">
          <h2 className="font-display text-2xl font-bold text-white mb-8">More Articles</h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {related.map((r) => <RelatedCard key={r._id} post={r} />)}
          </motion.div>
        </section>
      )}
    </main>
  );
}
