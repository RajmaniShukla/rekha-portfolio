"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Download,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  Facebook,
  Mail,
  MapPin,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Briefcase,
} from "lucide-react";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/animations";

type SocialLink = {
  _id: string;
  platform: string;
  handle: string;
  url: string;
  followerCount?: string;
};

type SiteSettings = {
  email?: string;
  phone?: string;
  location?: string;
  resumeFile?: { asset: { url: string } };
};

type Props = { settings: SiteSettings | null; socials: SocialLink[] };

const PLATFORM_ICONS: Record<string, React.ElementType> = {
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
  twitter: Twitter,
  facebook: Facebook,
};

const PLATFORM_COLORS: Record<string, string> = {
  instagram: "from-pink-500 to-orange-400",
  linkedin: "from-blue-600 to-blue-400",
  youtube: "from-red-600 to-red-400",
  twitter: "from-sky-500 to-sky-300",
  facebook: "from-blue-700 to-blue-500",
};

const NICHES = [
  "Sales & Business Strategy",
  "Business Development",
  "Leadership & Team Management",
  "Career Growth & Motivation",
  "Influencer Marketing",
  "Women in Business",
  "Lifestyle & Personal Brand",
];

const COLLAB_TYPES = [
  {
    icon: Star,
    title: "Sponsored Posts",
    desc: "Branded content integrated naturally into feed/stories.",
  },
  {
    icon: Users,
    title: "Brand Ambassadorship",
    desc: "Long-term partnership for sustained brand visibility.",
  },
  {
    icon: TrendingUp,
    title: "Product Reviews",
    desc: "Honest reviews and recommendations to engaged audience.",
  },
  {
    icon: Briefcase,
    title: "Event Coverage",
    desc: "Live event attendance, coverage, and promotion.",
  },
];

const WHY_WORK = [
  "10+ years of professional credibility in Sales & BD",
  "Authentic, engaged audience — not inflated numbers",
  "Multi-language reach (English, Hindi, Telugu, Odia, Bengali, Marathi)",
  "Cross-industry network: EdTech, Real Estate, Marketing, BPO",
  "Content that converts — backed by real sales expertise",
  "Based in Gurgaon — NCR + pan-India brand reach",
];

export default function MediaKitContent({ settings, socials }: Props) {
  const resumeUrl =
    (settings?.resumeFile as unknown as { asset?: { url?: string } })?.asset
      ?.url ?? null;

  return (
    <main className="pt-20 min-h-screen bg-brand-navy">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-[#0d0d1f] to-brand-navy">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #C9184A44 0%, transparent 50%), radial-gradient(circle at 80% 30%, #FFD70022 0%, transparent 50%)",
          }}
        />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative max-w-5xl mx-auto px-4 md:px-8 lg:px-16 text-center"
        >
          <motion.p
            variants={fadeInUp}
            className="font-accent text-brand-coral text-sm tracking-widest uppercase mb-4"
          >
            Brand Collaborations
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="font-display text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Media <span className="text-brand-gold">Kit</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            Everything you need to know about partnering with Jyothi Rekha Sahoo
            — Sales Professional, Business Strategist & Content Creator.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-4 justify-center"
          >
            {resumeUrl ? (
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-rose text-white font-accent font-semibold rounded-full hover:bg-brand-gold hover:text-brand-navy transition-all duration-300"
              >
                <Download size={16} /> Download Media Kit PDF
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 text-white/50 font-accent font-semibold rounded-full cursor-not-allowed">
                <Download size={16} /> Media Kit PDF (coming soon)
              </span>
            )}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 text-white font-accent font-semibold rounded-full hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
            >
              <Mail size={16} /> Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* About Strip */}
      <section className="bg-brand-rose/10 border-y border-brand-rose/20 py-10">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 grid md:grid-cols-3 gap-8 text-center">
          {[
            { value: "10+", label: "Years Experience" },
            { value: "6", label: "Languages Spoken" },
            { value: "5+", label: "Industries Covered" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl font-bold text-brand-gold mb-1">
                {s.value}
              </p>
              <p className="font-accent text-white/60 text-sm tracking-wide uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Platforms */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="font-display text-3xl font-bold text-white mb-2"
          >
            Social Presence
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-white/50 font-accent mb-10"
          >
            Reach across platforms
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {socials.length > 0 ? (
              socials.map((s) => {
                const Icon =
                  PLATFORM_ICONS[s.platform.toLowerCase()] ?? Instagram;
                const gradient =
                  PLATFORM_COLORS[s.platform.toLowerCase()] ??
                  "from-gray-500 to-gray-400";
                return (
                  <motion.a
                    key={s._id}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={scaleIn}
                    className="group bg-white/5 border border-white/10 hover:border-white/30 rounded-2xl p-6 flex items-center gap-4 transition-all duration-300"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon size={22} className="text-white" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-white capitalize">
                        {s.platform}
                      </p>
                      <p className="font-accent text-white/50 text-sm">
                        @{s.handle}
                      </p>
                      {s.followerCount && (
                        <p className="font-accent text-brand-gold text-xs font-semibold mt-0.5">
                          {s.followerCount} followers
                        </p>
                      )}
                    </div>
                  </motion.a>
                );
              })
            ) : (
              // Placeholders if Sanity has no social links yet
              [
                { platform: "Instagram", handle: "firequeen_17", gradient: PLATFORM_COLORS.instagram },
                { platform: "LinkedIn", handle: "rajmani-shukla", gradient: PLATFORM_COLORS.linkedin },
              ].map((s) => {
                const Icon = PLATFORM_ICONS[s.platform.toLowerCase()] ?? Instagram;
                return (
                  <motion.div
                    key={s.platform}
                    variants={scaleIn}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-4"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center flex-shrink-0`}>
                      <Icon size={22} className="text-white" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-white capitalize">{s.platform}</p>
                      <p className="font-accent text-white/50 text-sm">@{s.handle}</p>
                    </div>
                  </motion.div>
                );
              })
            )}
          </motion.div>
        </motion.div>
      </section>

      {/* Content Niches */}
      <section className="bg-white/3 border-y border-white/10 py-16">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="font-display text-3xl font-bold text-white mb-2"
            >
              Content Niches
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-white/50 font-accent mb-8"
            >
              Topics I create content around
            </motion.p>
            <motion.div
              variants={staggerContainer}
              className="flex flex-wrap gap-3"
            >
              {NICHES.map((niche) => (
                <motion.span
                  key={niche}
                  variants={fadeInUp}
                  className="px-4 py-2 bg-brand-rose/15 border border-brand-rose/30 text-brand-coral font-accent font-medium rounded-full text-sm"
                >
                  {niche}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Collaboration Types */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="font-display text-3xl font-bold text-white mb-2"
          >
            How We Can Collaborate
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-white/50 font-accent mb-10"
          >
            Flexible formats to suit your brand goals
          </motion.p>
          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-2 gap-6"
          >
            {COLLAB_TYPES.map((c) => (
              <motion.div
                key={c.title}
                variants={scaleIn}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-rose/20 flex items-center justify-center flex-shrink-0">
                  <c.icon size={22} className="text-brand-rose" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white mb-1">
                    {c.title}
                  </h3>
                  <p className="text-white/50 font-accent text-sm">{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Why Work With Me */}
      <section className="bg-gradient-to-b from-brand-navy to-[#0d0d1f] py-16">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="font-display text-3xl font-bold text-white mb-10"
            >
              Why Partner With Me?
            </motion.h2>
            <motion.div variants={staggerContainer} className="space-y-4">
              {WHY_WORK.map((point) => (
                <motion.div
                  key={point}
                  variants={fadeInUp}
                  className="flex items-start gap-3"
                >
                  <CheckCircle size={18} className="text-brand-gold mt-0.5 flex-shrink-0" />
                  <p className="text-white/70 font-accent">{point}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0d0d1f]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-2xl mx-auto px-4 text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-display text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Ready to Collaborate?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-white/50 font-accent mb-8"
          >
            Let&apos;s discuss how we can create value together. Drop a message
            and I&apos;ll get back within 24 hours.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link
              href="/contact?purpose=Brand+Collab"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-rose text-white font-accent font-semibold rounded-full hover:bg-brand-gold hover:text-brand-navy transition-all duration-300"
            >
              <Mail size={16} /> Let&apos;s Talk
            </Link>
            {settings?.email && (
              <a
                href={`mailto:${settings.email}`}
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 text-white font-accent font-semibold rounded-full hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
              >
                {settings.email}
              </a>
            )}
          </motion.div>
          {settings?.location && (
            <motion.p
              variants={fadeInUp}
              className="flex items-center justify-center gap-1.5 text-white/30 font-accent text-sm mt-6"
            >
              <MapPin size={13} /> {settings.location}
            </motion.p>
          )}
        </motion.div>
      </section>
    </main>
  );
}
