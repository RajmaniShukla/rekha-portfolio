"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Digital Marketing Manager",
    company: "Kranjan Enterprises",
    location: "Delhi",
    duration: "Apr 2022 – Jan 2023",
    industry: "Marketing",
    bullets: [
      "Developed and implemented comprehensive business strategies, sales, and marketing plans.",
      "Targeted new business through telemarketing and innovation.",
      "Managed digital metrics (VCPM, CPC, RPM) and created marketing calendars.",
    ],
    color: "bg-brand-rose",
  },
  {
    title: "Business Development",
    company: "Gleam Global Services",
    location: "Bangalore",
    duration: "Nov 2020 – Apr 2021",
    industry: "Sales",
    bullets: [
      "Developed sales strategies based on research of consumer buying trends.",
      "Collaborated with customers to understand needs and provide excellent service.",
      "Created plans and communicated deadlines to ensure project timelines were met.",
    ],
    color: "bg-brand-coral",
  },
  {
    title: "Team Leader",
    company: "CenterCADD India Pvt. Ltd.",
    location: "Delhi",
    duration: "Jan 2019 – Aug 2020",
    industry: "EdTech",
    bullets: [
      "Managed student enrollments, tracked fees, and maintained attendance records.",
      "Conducted seminars in colleges and handled incoming course inquiries.",
      "Onboarded new temporary staff and managed data entry.",
    ],
    color: "bg-brand-gold",
  },
  {
    title: "Executive (Real Estate)",
    company: "BSNL House Society",
    location: "Bangalore",
    duration: "Jan 2018 – Dec 2018",
    industry: "Real Estate",
    bullets: [
      "Conducted site visits and explained properties to clients.",
      "Handled documentation for government processing and installment payments.",
    ],
    color: "bg-brand-navy",
  },
  {
    title: "Front Desk Security Officer",
    company: "Dell (R&D)",
    location: "Bangalore",
    duration: "2015 – 2017",
    industry: "Operations",
    bullets: [
      "Monitored company inventory and databases using Microsoft Excel.",
      "Participated in continuous improvement and problem-solving activities.",
    ],
    color: "bg-brand-rose",
  },
  {
    title: "Front Office Executive",
    company: "eBay-Paypal",
    location: "Bangalore",
    duration: "Jan 2013 – Dec 2015",
    industry: "BPO",
    bullets: [
      "Documented administrative procedures and created detailed newsletters.",
      "Implemented standard operating procedures for records handling.",
    ],
    color: "bg-brand-coral",
  },
];

const industries = ["All", "Marketing", "Sales", "EdTech", "Real Estate", "Operations", "BPO"];

export default function ExperiencePage() {
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
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-brand-rose/20" />

            <div className="space-y-10">
              {experiences.map((exp, i) => (
                <motion.div key={i} variants={fadeInUp} className="relative flex gap-6 md:gap-10">
                  {/* Dot */}
                  <div className={`shrink-0 w-12 h-12 md:w-16 md:h-16 ${exp.color} rounded-2xl flex items-center justify-center z-10`}>
                    <Briefcase size={20} className="text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="font-display text-xl font-bold text-brand-navy">{exp.title}</h3>
                        <p className="font-accent font-semibold text-brand-rose mt-1">{exp.company}</p>
                      </div>
                      <span className={`px-3 py-1 ${exp.color} text-white font-accent text-xs font-semibold rounded-full`}>
                        {exp.industry}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-brand-navy/50 mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} /> {exp.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} /> {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-3 text-brand-navy/70 text-sm">
                          <span className="text-brand-rose mt-1 shrink-0">✦</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
