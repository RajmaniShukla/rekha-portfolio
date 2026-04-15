"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

// Placeholders — will be replaced with Sanity data
const testimonials = [
  {
    name: "Your Name Here",
    role: "CEO",
    company: "Company Name",
    quote:
      "Rekha brought extraordinary energy and strategy to our sales team. Within months, she had transformed our pipeline and client relationships.",
  },
  {
    name: "Your Name Here",
    role: "Marketing Director",
    company: "Company Name",
    quote:
      "Working with Rekha on our BD strategy was a game-changer. Her multilingual skills and market insight are truly rare to find.",
  },
  {
    name: "Your Name Here",
    role: "Founder",
    company: "Company Name",
    quote:
      "Rekha doesn't just sell — she builds. Her ability to connect with clients and close deals is unmatched in our industry.",
  },
];

export default function HomeTestimonials() {
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
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <Quote size={28} className="text-brand-gold mb-4" />
                <p className="text-white/70 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
                <div>
                  <div className="font-display font-semibold text-white">{t.name}</div>
                  <div className="font-accent text-xs text-brand-coral uppercase tracking-wider mt-1">
                    {t.role} · {t.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
