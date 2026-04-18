"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Home } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-brand-navy flex items-center justify-center px-4">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="text-center max-w-lg"
      >
        <motion.div
          variants={fadeInUp}
          className="font-display text-[8rem] md:text-[12rem] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-br from-brand-rose to-brand-gold select-none"
        >
          404
        </motion.div>

        <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-12 bg-brand-gold" />
          <span className="font-accent text-brand-coral text-sm uppercase tracking-widest">
            Page Not Found
          </span>
          <div className="h-px w-12 bg-brand-gold" />
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="font-display text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Lost in the{" "}
          <span className="text-brand-gold">Connections</span>
        </motion.h1>

        <motion.p variants={fadeInUp} className="text-white/60 leading-relaxed mb-8">
          The page you&apos;re looking for doesn&apos;t exist. It may have been moved, deleted,
          or you may have typed the wrong URL.
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className="btn-primary">
            <Home size={16} /> Back to Home
          </Link>
          <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-brand-navy">
            Contact Me <ArrowRight size={16} />
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
