import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { icon: FaInstagram, href: "https://www.instagram.com/firequeen_17?igsh=MTV2dzl0dTQ0OTNqbw==", label: "Instagram", color: "hover:text-pink-400" },
  { icon: FaLinkedin,  href: "https://www.linkedin.com/in/rekha-sahoo-35ab65240",                 label: "LinkedIn",  color: "hover:text-blue-400" },
];

const footerLinks = [
  { href: "/about",      label: "About"      },
  { href: "/experience", label: "Experience" },
  { href: "/skills",     label: "Skills"     },
  { href: "/services",   label: "Services"   },
  { href: "/influencer", label: "Influencer" },
  { href: "/gallery",    label: "Gallery"    },
  { href: "/contact",    label: "Contact"    },
  { href: "/resume",     label: "Resume"     },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold">
              Jyothi Rekha{" "}
              <span className="text-brand-gold">Sahoo</span>
            </h3>
            <p className="font-accent text-sm text-brand-coral italic">
              "Turning Connections into Conversions"
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              Sales & Business Development Professional. Influencer Marketer.
              Business Consultant.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`text-white/50 ${color} transition-colors`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-accent font-semibold text-brand-gold uppercase tracking-widest text-xs">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-brand-coral text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-accent font-semibold text-brand-gold uppercase tracking-widest text-xs">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Mail size={14} className="text-brand-rose shrink-0" />
                <a
                  href="mailto:jyothirekha17@gmail.com"
                  className="hover:text-brand-coral transition-colors"
                >
                  jyothirekha17@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Phone size={14} className="text-brand-rose shrink-0" />
                <a
                  href="tel:+919289853285"
                  className="hover:text-brand-coral transition-colors"
                >
                  +91 92898 53285
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={14} className="text-brand-rose shrink-0 mt-0.5" />
                <span>Gurgaon, Haryana, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-xs">
          <p>© {new Date().getFullYear()} Jyothi Rekha Sahoo. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white/70 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
