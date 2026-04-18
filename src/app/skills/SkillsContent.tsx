"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Skill = {
  _id: string;
  name: string;
  category?: string;
  level?: number;
  order?: number;
};

type Props = { skills: Skill[] };

const categoryStyles: Record<string, { color: string; light: string; border: string }> = {
  "Sales & Strategy":         { color: "bg-brand-rose",  light: "bg-brand-rose/5",  border: "border-brand-rose/20"  },
  "Business Development":     { color: "bg-brand-navy",  light: "bg-brand-navy/5",  border: "border-brand-navy/20"  },
  "Digital Marketing":        { color: "bg-brand-coral", light: "bg-brand-coral/5", border: "border-brand-coral/20" },
  "Leadership & Operations":  { color: "bg-brand-gold",  light: "bg-brand-gold/5",  border: "border-brand-gold/20"  },
};

const defaultStyle = { color: "bg-brand-rose", light: "bg-brand-rose/5", border: "border-brand-rose/20" };

export default function SkillsContent({ skills }: Props) {
  // Group by category
  const grouped = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    const cat = skill.category || "Other";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(skill);
    return acc;
  }, {});

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
          {Object.keys(grouped).length === 0 ? (
            <p className="text-center text-brand-navy/40 font-accent py-20">
              No skills yet — add them in the Studio!
            </p>
          ) : (
            Object.entries(grouped).map(([category, catSkills]) => {
              const style = categoryStyles[category] || defaultStyle;
              return (
                <motion.div
                  key={category}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={staggerContainer}
                  className={`${style.light} border ${style.border} rounded-3xl p-8 md:p-10`}
                >
                  <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                    <div className={`w-3 h-3 rounded-full ${style.color}`} />
                    <h2 className="font-display text-2xl font-bold text-brand-navy">{category}</h2>
                  </motion.div>
                  <div className="space-y-5">
                    {catSkills.map((skill) => (
                      <motion.div key={skill._id} variants={fadeInUp}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-accent text-sm font-semibold text-brand-navy">{skill.name}</span>
                          {skill.level !== undefined && (
                            <span className="font-accent text-xs font-bold text-brand-navy/40">{skill.level}%</span>
                          )}
                        </div>
                        {skill.level !== undefined && (
                          <div className="h-2 bg-white rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full ${style.color} rounded-full`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                            />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })
          )}
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
