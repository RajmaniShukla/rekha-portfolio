"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";
import { Globe2, GraduationCap } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const languages = ["English", "Hindi", "Kannada", "Telugu", "Tamil", "Oriya", "Bengali"];

const values = [
  { icon: "🤝", title: "Relationship First",  desc: "Every deal starts with a genuine human connection." },
  { icon: "🎯", title: "Results Driven",       desc: "Strategy without execution is just a plan. I deliver both." },
  { icon: "🌱", title: "Continuous Growth",    desc: "Learning never stops — in business or in life." },
  { icon: "💡", title: "Creative Thinking",    desc: "The best solutions are rarely the obvious ones." },
];

const education = [
  { degree: "B.A. (Hons) Political Science", institution: "Magadh University (Sadanand College)", year: "2017" },
  { degree: "Intermediate (12th)",           institution: "BSEB Board, Patna",                    year: "2014" },
  { degree: "Matriculation (10th)",          institution: "BSEB Board, Patna",                    year: "2012" },
];

export default function AboutContent() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-brand-navy section-padding">
        <div className="container-wide">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.div variants={fadeInUp} className="section-tag text-brand-coral mb-4">
              <div className="h-px w-12 bg-brand-gold" /> About Me
            </motion.div>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              The Story Behind{" "}
              <span className="text-brand-gold">the Results</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-white/70 text-xl leading-relaxed">
              Sales professional by trade. People person by nature. Business builder by passion.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-brand-blush">
        <div className="container-wide">
          <motion.div
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="font-display text-4xl font-bold text-brand-navy">
                My <span className="text-brand-rose">Journey</span>
              </h2>
              <p className="text-brand-navy/70 leading-relaxed">
                My career has taken me through some of India&apos;s most dynamic industries —
                from the fast-paced world of BPO operations at eBay-PayPal and Dell, to
                real estate with BSNL House Society, edtech team leadership at CenterCADD,
                and digital marketing strategy at Kranjan Enterprises.
              </p>
              <p className="text-brand-navy/70 leading-relaxed">
                Each role taught me something new about people, markets, and what it truly
                takes to grow a business. I speak 6+ languages fluently, which gives me a
                rare ability to connect across cultures and demographics.
              </p>
              <p className="text-brand-navy/70 leading-relaxed">
                Today, I&apos;m channeling that experience into helping businesses grow through
                strategic sales, business development, and influencer marketing — while
                building my own personal brand and content presence.
              </p>
              <Link href="/experience" className="btn-primary">
                See My Experience <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.div variants={fadeInRight} className="bg-brand-navy rounded-3xl p-10 text-white space-y-6">
              <div className="flex items-center gap-3">
                <Globe2 className="text-brand-gold" size={28} />
                <h3 className="font-display text-2xl font-bold">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang) => (
                  <span key={lang} className="px-4 py-2 bg-white/10 rounded-full font-accent text-sm text-white/80">
                    {lang}
                  </span>
                ))}
              </div>
              <p className="text-white/50 text-sm">Proficient in 7 languages — a key advantage in diverse Indian markets.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-12">
            <motion.div variants={fadeInUp} className="text-center">
              <div className="section-tag justify-center mb-4">
                <div className="gold-line" /> Core Values <div className="gold-line" />
              </div>
              <h2 className="font-display text-4xl font-bold text-brand-navy">
                What I <span className="text-brand-rose">Stand For</span>
              </h2>
            </motion.div>
            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => (
                <motion.div key={v.title} variants={fadeInUp} className="text-center p-8 bg-brand-blush rounded-3xl">
                  <div className="text-4xl mb-4">{v.icon}</div>
                  <h3 className="font-display text-lg font-bold text-brand-navy mb-2">{v.title}</h3>
                  <p className="text-brand-navy/60 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Education */}
      <section className="section-padding bg-brand-blush">
        <div className="container-wide max-w-3xl">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-10">
            <motion.div variants={fadeInUp}>
              <div className="section-tag mb-4"><div className="gold-line" /> Education</div>
              <h2 className="font-display text-4xl font-bold text-brand-navy">
                Academic <span className="text-brand-rose">Background</span>
              </h2>
            </motion.div>
            <div className="space-y-6">
              {education.map((e) => (
                <motion.div key={e.degree} variants={fadeInUp} className="flex gap-6 p-6 bg-white rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-brand-rose/10 rounded-xl flex items-center justify-center shrink-0">
                    <GraduationCap className="text-brand-rose" size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-brand-navy">{e.degree}</h4>
                    <p className="text-brand-navy/60 text-sm mt-1">{e.institution}</p>
                    <span className="inline-block mt-2 text-xs font-accent font-semibold text-brand-rose bg-brand-rose/10 px-3 py-1 rounded-full">
                      {e.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
