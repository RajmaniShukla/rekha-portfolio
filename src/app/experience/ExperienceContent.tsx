"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const colors = ["bg-brand-rose", "bg-brand-coral", "bg-brand-gold", "bg-brand-navy"];

type Experience = {
  _id: string;
  title: string;
  company: string;
  location?: string;
  duration?: string;
  industry?: string;
  bullets?: string[];
  order?: number;
};

type Props = { experiences: Experience[] };

export default function ExperienceContent({ experiences }: Props) {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-brand-navy section-padding">
        <div className="container-wide">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp} className="section-tag text-brand-coral mb-4">
              <div className="h-px w-12 bg-brand-gold" /> Career Journey
            </motion.div>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
              10+ Years of{" "}
              <span className="text-brand-gold">Experience</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-white/60 text-xl max-w-2xl">
              A track record across sales, marketing, operations, real estate, and edtech.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-brand-blush">
        <div className="container-wide max-w-4xl">
          {experiences.length === 0 ? (
            <p className="text-center text-brand-navy/40 font-accent py-20">
              No experience entries yet — add them in the Studio!
            </p>
          ) : (
            <motion.div
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-brand-rose/20" />
              <div className="space-y-10">
                {experiences.map((exp, i) => (
                  <motion.div key={exp._id} variants={fadeInUp} className="relative flex gap-6 md:gap-10">
                    <div className={`shrink-0 w-12 h-12 md:w-16 md:h-16 ${colors[i % colors.length]} rounded-2xl flex items-center justify-center z-10`}>
                      <Briefcase size={20} className="text-white" />
                    </div>
                    <div className="flex-1 bg-white rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="font-display text-xl font-bold text-brand-navy">{exp.title}</h3>
                          <p className="font-accent font-semibold text-brand-rose mt-1">{exp.company}</p>
                        </div>
                        {exp.industry && (
                          <span className={`px-3 py-1 ${colors[i % colors.length]} text-white font-accent text-xs font-semibold rounded-full`}>
                            {exp.industry}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-brand-navy/50 mb-4">
                        {exp.duration && <span className="flex items-center gap-1.5"><Calendar size={13} /> {exp.duration}</span>}
                        {exp.location && <span className="flex items-center gap-1.5"><MapPin size={13} /> {exp.location}</span>}
                      </div>
                      {exp.bullets && exp.bullets.length > 0 && (
                        <ul className="space-y-2">
                          {exp.bullets.map((b, j) => (
                            <li key={j} className="flex items-start gap-3 text-brand-navy/70 text-sm">
                              <span className="text-brand-rose mt-1 shrink-0">✦</span>
                              {b}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}
