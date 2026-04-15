"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { staggerContainer, fadeInLeft, fadeInRight } from "@/lib/animations";
import { ArrowRight } from "lucide-react";

export default function HomeAboutSnapshot() {
  return (
    <section className="section-padding bg-brand-blush">
      <div className="container-wide">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Bold statement */}
          <motion.div variants={fadeInLeft} className="space-y-6">
            <div className="section-tag">
              <div className="gold-line" />
              About Me
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-navy leading-tight">
              More than a sales professional.{" "}
              <span className="text-brand-rose">A growth catalyst.</span>
            </h2>
            <p className="text-brand-navy/70 text-lg leading-relaxed">
              With over a decade of experience across sales, business development,
              digital marketing, and influencer partnerships, I don't just close
              deals — I build relationships that fuel long-term business growth.
            </p>
            <p className="text-brand-navy/70 leading-relaxed">
              From leading teams at multinational companies to consulting startups
              and SMEs, I bring strategic thinking, people skills, and a
              multilingual edge to every engagement.
            </p>
            <Link href="/about" className="btn-primary">
              My Full Story <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Right: Stats grid */}
          <motion.div variants={fadeInRight}>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "10+",  label: "Years of Experience",   bg: "bg-brand-navy",  text: "text-white", accent: "text-brand-gold" },
                { value: "6",    label: "Languages Spoken",       bg: "bg-brand-rose",  text: "text-white", accent: "text-brand-gold" },
                { value: "5+",   label: "Industries Served",      bg: "bg-brand-gold",  text: "text-brand-navy", accent: "text-brand-navy" },
                { value: "500+", label: "Clients & Connections",  bg: "bg-brand-coral", text: "text-white", accent: "text-white" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={`${stat.bg} rounded-2xl p-8 flex flex-col items-center text-center`}
                >
                  <span className={`font-display text-4xl font-bold ${stat.accent}`}>
                    {stat.value}
                  </span>
                  <span className={`font-accent text-xs uppercase tracking-wider mt-2 ${stat.text} opacity-80`}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
