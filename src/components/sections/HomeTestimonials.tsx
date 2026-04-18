"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

type Testimonial = {
  _id: string;
  name: string;
  role?: string;
  company?: string;
  quote: string;
};

type Props = { testimonials: Testimonial[] };

export default function HomeTestimonials({ testimonials }: Props) {
  if (testimonials.length === 0) return null; // hide section until content is added

  return (
    <section className="section-padding bg-brand-navy">
      <div className="container-wide">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <div className="section-tag justify-center text-brand-coral">
              <div className="h-px w-12 bg-brand-gold" />
              Testimonials
              <div className="h-px w-12 bg-brand-gold" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
              What People{" "}
              <span className="text-brand-gold">Say</span>
            </h2>
          </motion.div>

          {/* Cards */}
          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <motion.div
                key={t._id}
                variants={fadeInUp}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <Quote size={28} className="text-brand-gold mb-4" />
                <p className="text-white/70 leading-relaxed italic mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="font-display font-semibold text-white">{t.name}</div>
                  {(t.role || t.company) && (
                    <div className="font-accent text-xs text-brand-coral uppercase tracking-wider mt-1">
                      {[t.role, t.company].filter(Boolean).join(" · ")}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
