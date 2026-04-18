"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { FaInstagram, FaLinkedin, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";

const schema = z.object({
  name:    z.string().min(2, "Name is required"),
  email:   z.string().email("Valid email required"),
  phone:   z.string().optional(),
  purpose: z.enum(["Job Opportunity", "Freelance Project", "Brand Collab", "Other"]),
  message: z.string().min(10, "Message too short (min 10 characters)"),
});

type FormData = z.infer<typeof schema>;

const socials = [
  { icon: FaInstagram, label: "Instagram", href: "#", color: "hover:text-pink-500" },
  { icon: FaLinkedin,  label: "LinkedIn",  href: "#", color: "hover:text-blue-500" },
  { icon: FaYoutube,   label: "YouTube",   href: "#", color: "hover:text-red-500"  },
  { icon: FaTwitter,   label: "Twitter/X", href: "#", color: "hover:text-sky-500"  },
  { icon: FaFacebook,  label: "Facebook",  href: "#", color: "hover:text-blue-600" },
];

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [sendError, setSendError] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { purpose: "Job Opportunity" },
  });

  const onSubmit = async (data: FormData) => {
    setSendError(false);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name:  data.name,
          from_email: data.email,
          phone:      data.phone || "—",
          purpose:    data.purpose,
          message:    data.message,
          reply_to:   data.email,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      setSendError(true);
    }
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-brand-navy section-padding pb-12">
        <div className="container-wide">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp} className="section-tag text-brand-coral mb-4">
              <div className="h-px w-12 bg-brand-gold" /> Contact
            </motion.div>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
              Let&apos;s <span className="text-brand-gold">Connect</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-white/60 text-xl max-w-xl">
              Whether it&apos;s a job opportunity, project, or brand collab — I&apos;d love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-padding bg-brand-blush">
        <div className="container-wide">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left — Info */}
            <motion.div variants={fadeInLeft} className="space-y-8">
              <div>
                <h2 className="font-display text-3xl font-bold text-brand-navy mb-6">Get in Touch</h2>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-brand-rose/10 rounded-xl flex items-center justify-center shrink-0">
                      <Mail size={16} className="text-brand-rose" />
                    </div>
                    <a href="mailto:jyothirekha17@gmail.com" className="text-brand-navy hover:text-brand-rose transition-colors">
                      jyothirekha17@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-brand-rose/10 rounded-xl flex items-center justify-center shrink-0">
                      <Phone size={16} className="text-brand-rose" />
                    </div>
                    <a href="tel:+919289853285" className="text-brand-navy hover:text-brand-rose transition-colors">
                      +91 92898 53285
                    </a>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-rose/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin size={16} className="text-brand-rose" />
                    </div>
                    <span className="text-brand-navy/70">Gurgaon, Haryana, India</span>
                  </li>
                </ul>
              </div>

              {/* Socials */}
              <div>
                <h4 className="font-accent font-semibold text-brand-navy/50 uppercase tracking-widest text-xs mb-4">Follow Me</h4>
                <div className="flex items-center gap-4">
                  {socials.map(({ icon: Icon, label, href, color }) => (
                    <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
                      className={`w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand-navy/40 ${color} transition-colors shadow-sm`}>
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden h-48 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112147.38738802617!2d76.9511!3d28.4595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
                  width="100%" height="100%" style={{ border: 0 }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  title="Gurgaon, Haryana"
                />
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div variants={fadeInRight}>
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4 py-16">
                  <CheckCircle2 size={56} className="text-brand-rose" />
                  <h3 className="font-display text-3xl font-bold text-brand-navy">Message Sent!</h3>
                  <p className="text-brand-navy/60">I&apos;ll get back to you within 24 hours. 🙌</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-3xl p-8 shadow-sm space-y-5">
                  {sendError && (
                    <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                      <AlertCircle size={16} className="shrink-0" />
                      Something went wrong. Please try again or email me directly.
                    </div>
                  )}

                  <div>
                    <label className="font-accent text-xs font-semibold text-brand-navy/50 uppercase tracking-wider mb-1 block">Name *</label>
                    <input {...register("name")} placeholder="Your full name"
                      className="w-full border border-brand-navy/10 rounded-xl px-4 py-3 text-brand-navy placeholder-brand-navy/30 focus:outline-none focus:border-brand-rose text-sm" />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-accent text-xs font-semibold text-brand-navy/50 uppercase tracking-wider mb-1 block">Email *</label>
                      <input {...register("email")} type="email" placeholder="you@example.com"
                        className="w-full border border-brand-navy/10 rounded-xl px-4 py-3 text-brand-navy placeholder-brand-navy/30 focus:outline-none focus:border-brand-rose text-sm" />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label className="font-accent text-xs font-semibold text-brand-navy/50 uppercase tracking-wider mb-1 block">Phone</label>
                      <input {...register("phone")} type="tel" placeholder="+91 ..."
                        className="w-full border border-brand-navy/10 rounded-xl px-4 py-3 text-brand-navy placeholder-brand-navy/30 focus:outline-none focus:border-brand-rose text-sm" />
                    </div>
                  </div>

                  <div>
                    <label className="font-accent text-xs font-semibold text-brand-navy/50 uppercase tracking-wider mb-1 block">Purpose *</label>
                    <select {...register("purpose")}
                      className="w-full border border-brand-navy/10 rounded-xl px-4 py-3 text-brand-navy focus:outline-none focus:border-brand-rose text-sm bg-white">
                      <option>Job Opportunity</option>
                      <option>Freelance Project</option>
                      <option>Brand Collab</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-accent text-xs font-semibold text-brand-navy/50 uppercase tracking-wider mb-1 block">Message *</label>
                    <textarea {...register("message")} rows={5}
                      placeholder="Tell me more about what you're looking for..."
                      className="w-full border border-brand-navy/10 rounded-xl px-4 py-3 text-brand-navy placeholder-brand-navy/30 focus:outline-none focus:border-brand-rose text-sm resize-none" />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                  </div>

                  <button type="submit" disabled={isSubmitting}
                    className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed">
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending…
                      </span>
                    ) : (
                      <><Send size={16} /> Send Message</>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
