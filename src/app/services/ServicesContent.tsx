"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { TrendingUp, Megaphone, Users, ArrowRight, CheckCircle2, Briefcase } from "lucide-react";
import Link from "next/link";

type Service = {
  _id: string;
  title: string;
  tagline?: string;
  description?: string;
  features?: string[];
  icon?: string;
  order?: number;
};

type Props = { services: Service[] };

const iconMap: Record<string, React.ElementType> = {
  TrendingUp, Megaphone, Users, Briefcase, ArrowRight,
};

const stylesByIndex = [
  { color: "bg-brand-rose", light: "bg-brand-rose/5", border: "border-brand-rose/20" },
  { color: "bg-brand-gold", light: "bg-brand-gold/5", border: "border-brand-gold/20" },
  { color: "bg-brand-navy", light: "bg-brand-navy/5", border: "border-brand-navy/20" },
  { color: "bg-brand-coral", light: "bg-brand-coral/5", border: "border-brand-coral/20" },
];

export default function ServicesContent({ services }: Props) {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-brand-navy section-padding">
        <div className="container-wide">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp} className="section-tag text-brand-coral mb-4">
              <div className="h-px w-12 bg-brand-gold" /> Services
            </motion.div>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
              How I Can{" "}
              <span className="text-brand-gold">Help You</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-white/60 text-xl max-w-2xl">
              Three core offerings, one focus — driving measurable growth for your business.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-brand-blush">
        <div className="container-wide space-y-8">
          {services.length === 0 ? (
            <p className="text-center text-brand-navy/40 font-accent py-20">
              No services yet — add them in the Studio!
            </p>
          ) : (
            services.map((s, i) => {
              const style = stylesByIndex[i % stylesByIndex.length];
              const IconComp = (s.icon && iconMap[s.icon]) ? iconMap[s.icon] : Briefcase;
              return (
                <motion.div
                  key={s._id}
                  variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className={`${style.light} border ${style.border} rounded-3xl p-8 md:p-12`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <div className="space-y-6">
                      <div className={`${style.color} w-14 h-14 rounded-2xl flex items-center justify-center`}>
                        <IconComp size={24} className="text-white" />
                      </div>
                      <div>
                        <h2 className="font-display text-3xl font-bold text-brand-navy mb-2">{s.title}</h2>
                        {s.tagline && <p className="font-accent text-brand-rose font-semibold italic">{s.tagline}</p>}
                      </div>
                      {s.description && <p className="text-brand-navy/70 leading-relaxed">{s.description}</p>}
                      <Link href="/contact" className="btn-primary">Let&apos;s Talk <ArrowRight size={16} /></Link>
                    </div>
                    {s.features && s.features.length > 0 && (
                      <div>
                        <h4 className="font-accent font-semibold text-brand-navy/50 uppercase tracking-widest text-xs mb-4">
                          What&apos;s Included
                        </h4>
                        <ul className="space-y-3">
                          {s.features.map((f, j) => (
                            <li key={j} className="flex items-center gap-3 text-brand-navy/70">
                              <CheckCircle2 size={16} className="text-brand-rose shrink-0" />
                              <span className="text-sm">{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
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
            Not sure which service fits?{" "}
            <span className="text-brand-gold">Let&apos;s talk.</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-white/60">
            A free 30-minute discovery call to understand your needs and figure out the best path forward.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link href="/contact" className="btn-gold">Book a Free Call <ArrowRight size={16} /></Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
