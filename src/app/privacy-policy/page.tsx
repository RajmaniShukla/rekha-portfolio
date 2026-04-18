import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Jyothi Rekha Sahoo",
  description: "Privacy policy for jyothirekha.com",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-20 min-h-screen bg-brand-blush">
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-accent text-sm text-brand-navy/50 hover:text-brand-rose transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>

          <h1 className="font-display text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            Privacy Policy
          </h1>
          <p className="font-accent text-brand-navy/40 text-sm mb-10">
            Last updated: April 2026
          </p>

          <div className="prose prose-neutral max-w-none space-y-8 text-brand-navy/70 leading-relaxed">
            <section>
              <h2 className="font-display text-2xl font-bold text-brand-navy mb-3">
                1. Information We Collect
              </h2>
              <p>
                When you use the contact form on this website, we collect information you
                voluntarily provide — including your name, email address, phone number, and
                message content. This information is used solely to respond to your inquiry.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-brand-navy mb-3">
                2. How We Use Your Information
              </h2>
              <p>
                The information you provide is used to respond to your messages and inquiries.
                We do not sell, rent, or share your personal information with third parties for
                marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-brand-navy mb-3">
                3. Third-Party Services
              </h2>
              <p>
                This website uses EmailJS to process contact form submissions. By submitting
                the contact form, your message is transmitted through EmailJS&apos;s servers.
                Please refer to{" "}
                <a
                  href="https://www.emailjs.com/legal/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-rose hover:underline"
                >
                  EmailJS&apos;s Privacy Policy
                </a>{" "}
                for more information.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-brand-navy mb-3">
                4. Cookies
              </h2>
              <p>
                This website does not use tracking cookies. We may use essential cookies for
                website functionality only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-brand-navy mb-3">
                5. Data Security
              </h2>
              <p>
                We take reasonable precautions to protect your information. However, no method
                of internet transmission is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-brand-navy mb-3">
                6. Contact
              </h2>
              <p>
                If you have questions about this privacy policy, please contact us at{" "}
                <a
                  href="mailto:jyothirekha17@gmail.com"
                  className="text-brand-rose hover:underline"
                >
                  jyothirekha17@gmail.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
