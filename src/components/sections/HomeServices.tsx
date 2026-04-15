"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TrendingUp, Users, Megaphone, ArrowRight } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const services = [
  {
    icon: TrendingUp,
    title: "Sales & Business Development",
    description:
      "End-to-end sales strategy, lead generation, team leadership, and B2B/B2C growth consulting for businesses of all sizes.",
    color: "bg-brand-rose",
    href: "/services",
  },
  {
    icon: Megaphone,
    title: "Influencer Marketing",
    description:
      "Brand collaborations, content strategy, audience development, and influencer campaign management across all major platforms.",
    color: "bg-brand-gold",
    href: "/influencer",
  },
  {
    icon: Users,
    title: "Business Consulting",
    description:
      "Project-based sales consulting for startups and SMEs — from go-to-market strategy to building and training your sales team.",
    color: "bg-brand-navy",
    href: "/services",
  },
];

export default function HomeServices() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="section-tag justify-center">
              <div className="gold-line" />
              What I Do
              <div className="gold-line" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-navy">
              How I Can Help You{" "}
              <span className="text-brand-rose">Grow</span>
            </h2>
            <p className="text-brand-navy/60 text-lg">
              Three core pillars, one mission — turning your goals into results.
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="group bg-brand-blush rounded-3xl p-8 hover:shadow-xl hover:shadow-brand-rose/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`${service.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon size={24} className="text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-brand-navy mb-3">
                  {service.title}
                </h3>
                <p className="text-brand-navy/60 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-brand-rose font-accent font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
