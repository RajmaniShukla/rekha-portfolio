"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Download, ArrowRight } from "lucide-react";
import Link from "next/link";

const platforms = [
  { icon: FaInstagram, name: "Instagram", handle: "@firequeen_17",      followers: "—", color: "from-pink-500 to-purple-600", href: "https://www.instagram.com/firequeen_17?igsh=MTV2dzl0dTQ0OTNqbw==" },
  { icon: FaLinkedin,  name: "LinkedIn",  handle: "Jyothi Rekha Sahoo", followers: "—", color: "from-blue-600 to-blue-800",   href: "https://www.linkedin.com/in/rekha-sahoo-35ab65240"                },
];

const niches = [
  "Sales & Business", "Lifestyle", "Motivation", "Career Growth",
  "Women Empowerment", "Digital Marketing", "Entrepreneurship", "Travel",
];

const contentTypes = [
  { emoji: "📱", type: "Reels & Short Videos", desc: "High-engagement short-form content"   },
  { emoji: "🖼️", type: "Carousels & Posts",    desc: "Educational & inspirational posts"    },
  { emoji: "📹", type: "Long-form Videos",      desc: "In-depth interviews & tutorials"      },
  { emoji: "📝", type: "Stories & Polls",       desc: "Interactive daily engagement"         },
  { emoji: "🎙️", type: "Live Sessions",         desc: "Real-time Q&A and discussions"        },
  { emoji: "🤝", type: "Brand Reviews",         desc: "Authentic product spotlights"         },
];

export default function InfluencerContent() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-brand-navy section-padding">
        <div className="container-wide">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.div variants={fadeInUp} className="section-tag text-brand-coral mb-4">
              <div className="h-px w-12 bg-brand-gold" /> Influencer Profile
            </motion.div>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
              Brand <span className="text-brand-gold">Collaborations</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-white/60 text-xl leading-relaxed">
              Creating authentic content that connects brands with real people. Multilingual.
              Multi-platform. Results-driven.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Platforms */}
      <section className="section-padding bg-brand-blush">
        <div className="container-wide space-y-10">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
            <div className="section-tag justify-center mb-4">
              <div className="gold-line" /> Social Presence <div className="gold-line" />
            </div>
            <h2 className="font-display text-4xl font-bold text-brand-navy">
              Find Me <span className="text-brand-rose">Everywhere</span>
            </h2>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((p) => (
              <motion.div key={p.name} variants={fadeInUp}>
                <a href={p.href} target="_blank" rel="noopener noreferrer"
                  className={`bg-gradient-to-br ${p.color} rounded-3xl p-6 text-white flex flex-col hover:opacity-90 transition-opacity`}>
                  <p.icon size={32} className="mb-4" />
                  <h3 className="font-display text-xl font-bold">{p.name}</h3>
                  <p className="font-accent text-white/70 text-sm mt-1">{p.handle}</p>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <span className="font-display text-2xl font-bold">{p.followers}</span>
                    <span className="font-accent text-white/60 text-xs ml-2 uppercase tracking-wider">Followers</span>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Niches */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-10">
            <motion.div variants={fadeInUp} className="text-center">
              <h2 className="font-display text-4xl font-bold text-brand-navy">
                Content <span className="text-brand-rose">Niches</span>
              </h2>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 justify-center">
              {niches.map((n) => (
                <span key={n} className="px-5 py-2.5 bg-brand-rose/10 text-brand-rose border border-brand-rose/20 rounded-full font-accent font-semibold text-sm">
                  {n}
                </span>
              ))}
            </motion.div>
            <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {contentTypes.map((c) => (
                <motion.div key={c.type} variants={fadeInUp} className="flex items-start gap-4 p-6 bg-brand-blush rounded-2xl">
                  <span className="text-3xl">{c.emoji}</span>
                  <div>
                    <h4 className="font-display font-bold text-brand-navy">{c.type}</h4>
                    <p className="text-brand-navy/50 text-sm mt-1">{c.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Collab CTA */}
      <section className="section-padding bg-gradient-to-br from-brand-rose to-brand-navy">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="container-wide max-w-2xl text-center space-y-6">
          <motion.h2 variants={fadeInUp} className="font-display text-4xl font-bold text-white">
            Let&apos;s Collaborate
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-white/70">
            Looking for authentic brand partnerships, sponsored content, or influencer campaigns?
            Let&apos;s create something together.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact?purpose=Brand+Collab" className="btn-gold">
              Work With Me <ArrowRight size={16} />
            </Link>
            <button className="btn-outline border-white text-white hover:bg-white hover:text-brand-navy">
              <Download size={16} /> Media Kit (Coming Soon)
            </button>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
