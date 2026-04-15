"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { heroEntrance, staggerContainer, fadeInUp } from "@/lib/animations";

export default function HomeHero() {
  return (
    <section className="relative min-h-screen bg-brand-navy flex items-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-rose/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-coral/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-32 md:py-40">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Tag line */}
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-brand-gold" />
            <span className="font-accent text-brand-coral text-sm uppercase tracking-widest font-semibold">
              Sales & Business Development
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={heroEntrance}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6"
          >
            Jyothi{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-rose to-brand-gold">
              Rekha
            </span>
            <br />
            Sahoo
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            className="font-display text-xl md:text-2xl text-white/70 italic mb-8"
          >
            "Turning Connections into Conversions"
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="font-body text-white/60 text-lg max-w-2xl leading-relaxed mb-10"
          >
            Sales strategist. Business development leader. Influencer marketer.
            10+ years of driving growth across industries — from real estate to
            digital marketing.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={staggerContainer}
            className="flex flex-wrap gap-8 mb-12"
          >
            {[
              { value: "10+", label: "Years Experience" },
              { value: "6",   label: "Languages Spoken" },
              { value: "5+",  label: "Industries" },
            ].map((stat) => (
              <motion.div key={stat.label} variants={fadeInUp} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-brand-gold">
                  {stat.value}
                </div>
                <div className="font-accent text-xs text-white/50 uppercase tracking-widest mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <Link href="/services" className="btn-primary text-base px-8 py-4">
              View My Work <ArrowRight size={16} />
            </Link>
            <Link href="/resume" className="btn-outline text-base px-8 py-4">
              <Download size={16} /> Download CV
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-accent text-white/30 text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-12 bg-gradient-to-b from-brand-gold/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
