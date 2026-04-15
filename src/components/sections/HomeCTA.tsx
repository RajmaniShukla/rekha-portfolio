"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function HomeCTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-brand-rose to-brand-navy relative overflow-hidden">
      {/* Decorative orb */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-wide relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center space-y-8 max-w-3xl mx-auto"
        >
          <motion.div variants={fadeInUp}>
            <div className="h-px w-16 bg-brand-gold mx-auto mb-6" />
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight">
              Let's Work{" "}
              <span className="text-brand-gold">Together</span>
            </h2>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-white/70 text-lg leading-relaxed">
            Whether you're looking to hire a sales leader, need a BD consultant,
            or want to collaborate on influencer campaigns — let's connect and
            build something great.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-gold text-base px-10 py-4">
              Get in Touch <ArrowRight size={16} />
            </Link>
            <Link href="/resume" className="btn-outline border-white text-white hover:bg-white hover:text-brand-navy text-base px-10 py-4">
              <Download size={16} /> Download Resume
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
