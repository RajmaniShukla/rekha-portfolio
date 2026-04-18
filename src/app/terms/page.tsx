import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Use | Jyothi Rekha Sahoo",
  description: "Terms of use for jyothirekha.com",
};

export default function TermsPage() {
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
            Terms of Use
          </h1>
          <p className="font-accent text-brand-navy/40 text-sm mb-10">
            Last updated: April 2026
          </p>

          <div className="prose prose-neutral max-w-none space-y-8 text-brand-navy/70 leading-relaxed">
            <section>
              <h2 className="font-display text-2xl font-bold text-brand-navy mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by these
                Terms of Use. If you do not agree, please do not use this website.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-brand-navy mb-3">
                2. Use of Content
              </h2>
              <p>
                All content on this website — including text, images, and design — is the
                property of Jyothi Rekha Sahoo. You may not reproduce, distribute, or use
                any content without prior written permission.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-brand-navy mb-3">
                3. Limitation of Liability
              </h2>
              <p>
                This website is provided &quot;as is&quot; without any warranties. Jyothi Rekha Sahoo
                is not liable for any damages arising from the use of this website or its content.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-brand-navy mb-3">
                4. External Links
              </h2>
              <p>
                This website may contain links to external websites. We are not responsible
                for the content or privacy practices of those sites.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-brand-navy mb-3">
                5. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of the
                website after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-brand-navy mb-3">
                6. Contact
              </h2>
              <p>
                For any questions regarding these terms, contact{" "}
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
