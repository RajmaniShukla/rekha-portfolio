"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const skillGroups = [
  {
    category: "Sales & Strategy",
    color: "bg-brand-rose",
    light: "bg-brand-rose/5",
    border: "border-brand-rose/20",
    skills: [
      { name: "Sales Strategy",           level: 95 },
      { name: "Lead Generation",          level: 90 },
      { name: "B2B / B2C Sales",          level: 92 },
      { name: "Revenue Growth Planning",  level: 85 },
      { name: "Pipeline Management",      level: 88 },
    ],
  },
  {
    category: "Business Development",
    color: "bg-brand-navy",
    light: "bg-brand-navy/5",
    border: "border-brand-navy/20",
    skills: [
      { name: "Market Research",                   level: 88 },
      { name: "Competitive Analysis",              level: 85 },
      { name: "Go-to-Market Strategy",             level: 87 },
      { name: "Partnership Building",              level: 90 },
      { name: "Client Relationship Management",    level: 93 },
    ],
  },
  {
    category: "Digital Marketing",
    color: "bg-brand-coral",
    light: "bg-brand-coral/5",
    border: "border-brand-coral/20",
    skills: [
      { name: "CPC / RPM / VCPM Metrics",  level: 85 },
      { name: "Content Strategy",           level: 80 },
      { name: "Social Media Management",    level: 88 },
      { name: "Influencer Campaigns",       level: 82 },
      { name: "Marketing Calendars",        level: 86 },
    ],
  },
  {
    category: "Leadership & Operations",
    color: "bg-brand-gold",
    light: "bg-brand-gold/5",
    border: "border-brand-gold/20",
    skills: [
      { name: "Team Leadership",            level: 90 },
      { name: "Staff Training & Onboarding",level: 85 },
      { name: "Inventory Management",       level: 80 },
      { name: "Process Documentation",      level: 78 },
      { name: "Project Planning",           level: 83 },
    ],
  },
];

const tools = [
  "Microsoft Excel", "CRM Software", "Google Workspace",
  "Social Media Platforms", "Email Marketing Tools",
  "Zoom / Teams", "Canva", "Telemarketing Systems",
];

const softSkills = [
  { emoji: "🗣️", skill: "Communication"       },
  { emoji: "🧠", skill: "Strategic Thinking"   },
  { emoji: "🤝", skill: "Negotiation"          },
  { emoji: "⚡", skill: "Adaptability"         },
  { emoji: "🎯", skill: "Goal Orientation"     },
  { emoji: "💡", skill: "Problem Solving"      },
  { emoji: "🌍", skill: "Cross-cultural Fluency"},
  { emoji: "📊", skill: "Data-driven Decisions"},
];

export default function SkillsContent() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-brand-navy section-padding">
        <div className="container-wide">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp} className="section-tag text-brand-coral mb-4">
              <div className="h-px w-12 bg-brand-gold" /> Skills & Expertise
            </motion.div>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
              What I&apos;m{" "}
              <span className="text-brand-gold">Good At</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-white/60 text-xl max-w-2xl">
              10+ years of honing skills across sales, marketing, operations, and leadership.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Skill Bars */}
      <section className="section-padding bg-brand-blush">
        <div className="container-wide space-y-10">
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={staggerContainer}
              className={`${group.light} border ${group.border} rounded-3xl p-8 md:p-10`}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className={`w-3 h-3 rounded-full ${group.color}`} />
                <h2 className="font-display text-2xl font-bold text-brand-navy">{group.category}</h2>
              </motion.div>
              <div className="space-y-5">
                {group.skills.map((skill) => (
                  <motion.div key={skill.name} variants={fadeInUp}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-accent text-sm font-semibold text-brand-navy">{skill.name}</span>
                      <span className="font-accent text-xs font-bold text-brand-navy/40">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${group.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Soft Skills */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-10">
            <motion.div variants={fadeInUp} className="text-center">
              <div className="section-tag justify-center mb-4">
                <div className="gold-line" /> Soft Skills <div className="gold-line" />
              </div>
              <h2 className="font-display text-4xl font-bold text-brand-navy">
                The Human <span className="text-brand-rose">Edge</span>
              </h2>
            </motion.div>
            <motion.div variants={staggerContainer} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {softSkills.map((s) => (
                <motion.div key={s.skill} variants={fadeInUp}
                  className="text-center p-6 bg-brand-blush rounded-2xl hover:bg-brand-rose/10 transition-colors">
                  <div className="text-4xl mb-3">{s.emoji}</div>
                  <p className="font-accent font-semibold text-brand-navy text-sm">{s.skill}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tools */}
      <section className="section-padding bg-brand-blush">
        <div className="container-wide max-w-3xl">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
            <motion.div variants={fadeInUp}>
              <div className="section-tag mb-4"><div className="gold-line" /> Tools & Platforms</div>
              <h2 className="font-display text-4xl font-bold text-brand-navy">
                Tools I <span className="text-brand-rose">Use</span>
              </h2>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
              {tools.map((t) => (
                <span key={t}
                  className="px-4 py-2.5 bg-white border border-brand-navy/10 rounded-full font-accent text-sm text-brand-navy/70 hover:border-brand-rose hover:text-brand-rose transition-colors">
                  {t}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-navy text-center">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="container-wide max-w-2xl space-y-6">
          <motion.h2 variants={fadeInUp} className="font-display text-4xl font-bold text-white">
            Skills without context?{" "}
            <span className="text-brand-gold">See the experience.</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-white/60">
            See how I&apos;ve applied these skills across 10+ years and 6 industries.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center">
            <Link href="/experience" className="btn-primary">View Experience <ArrowRight size={16} /></Link>
            <Link href="/contact" className="btn-gold">Let&apos;s Talk <ArrowRight size={16} /></Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
