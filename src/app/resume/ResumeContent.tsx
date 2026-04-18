"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { Download } from "lucide-react";

const experiences = [
  { title: "Digital Marketing Manager",   company: "Kranjan Enterprises, Delhi",       duration: "Apr 2022 – Jan 2023" },
  { title: "Business Development",        company: "Gleam Global Services, Bangalore",  duration: "Nov 2020 – Apr 2021" },
  { title: "Team Leader",                 company: "CenterCADD India Pvt. Ltd., Delhi", duration: "Jan 2019 – Aug 2020" },
  { title: "Executive (Real Estate)",     company: "BSNL House Society, Bangalore",     duration: "Jan 2018 – Dec 2018" },
  { title: "Front Desk Security Officer", company: "Dell (R&D), Bangalore",             duration: "2015 – 2017"         },
  { title: "Front Office Executive",      company: "eBay-Paypal, Bangalore",            duration: "Jan 2013 – Dec 2015" },
];

const skillTags = [
  "Sales Strategy", "Team Leadership", "Digital Marketing",
  "CPC · RPM · VCPM", "Inventory Management", "CRM Software",
  "Client Relations", "B2B · B2C",
];

const languages = ["English", "Hindi", "Kannada", "Telugu", "Tamil", "Oriya", "Bengali"];

export default function ResumeContent() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-brand-navy section-padding pb-12">
        <div className="container-wide flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp} className="section-tag text-brand-coral mb-4">
              <div className="h-px w-12 bg-brand-gold" /> Resume
            </motion.div>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-6xl font-bold text-white">
              My <span className="text-brand-gold">Resume</span>
            </motion.h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
          >
            <a href="/resume.pdf" download className="btn-gold">
              <Download size={16} /> Download PDF
            </a>
          </motion.div>
        </div>
      </section>

      {/* Resume Viewer */}
      <section className="section-padding bg-brand-blush">
        <div className="container-wide max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="p-8 md:p-12 space-y-8">
              {/* Header */}
              <div className="border-b border-brand-blush pb-6">
                <h2 className="font-display text-4xl font-bold text-brand-navy">Jyothi Rekha Sahoo</h2>
                <p className="font-accent text-brand-rose font-semibold mt-1">Sales & Business Development Professional</p>
                <div className="flex flex-wrap gap-4 mt-3 text-sm text-brand-navy/50 font-accent">
                  <span>📍 Gurgaon, Haryana</span>
                  <span>📞 +91 92898 53285</span>
                  <span>✉️ jyothirekha17@gmail.com</span>
                </div>
              </div>

              {/* Profile */}
              <div>
                <h3 className="font-display text-xl font-bold text-brand-navy mb-3 flex items-center gap-2">
                  <span className="text-brand-rose">—</span> Profile
                </h3>
                <p className="text-brand-navy/70 leading-relaxed">
                  Effective communicator and sales professional seeking to lead a sales team to achieve company goals.
                  Proven ability to pay attention to detail and make quick, strategic decisions for the benefit of the sales department.
                </p>
              </div>

              {/* Experience */}
              <div>
                <h3 className="font-display text-xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                  <span className="text-brand-rose">—</span> Experience
                </h3>
                <div className="space-y-6">
                  {experiences.map((e) => (
                    <div key={e.title} className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-display font-bold text-brand-navy">{e.title}</h4>
                        <p className="text-brand-navy/50 text-sm">{e.company}</p>
                      </div>
                      <span className="text-xs font-accent text-brand-rose shrink-0">{e.duration}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <h3 className="font-display text-xl font-bold text-brand-navy mb-3 flex items-center gap-2">
                  <span className="text-brand-rose">—</span> Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillTags.map((s) => (
                    <span key={s} className="px-3 py-1.5 bg-brand-blush text-brand-navy/70 rounded-lg font-accent text-xs font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div>
                <h3 className="font-display text-xl font-bold text-brand-navy mb-3 flex items-center gap-2">
                  <span className="text-brand-rose">—</span> Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((l) => (
                    <span key={l} className="px-3 py-1.5 bg-brand-rose/10 text-brand-rose rounded-lg font-accent text-xs font-semibold">
                      {l}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          <p className="text-center text-brand-navy/40 text-xs font-accent mt-4">
            Last updated: April 2026 · Download the PDF for the full formatted version.
          </p>
        </div>
      </section>
    </main>
  );
}
