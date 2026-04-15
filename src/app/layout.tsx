import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Jyothi Rekha Sahoo | Sales & Business Development Professional",
  description:
    "Turning Connections into Conversions. Sales & BD professional, influencer marketer, and business consultant based in Gurgaon, India.",
  keywords: [
    "Jyothi Rekha Sahoo",
    "Sales professional Gurgaon",
    "Business development consultant India",
    "Influencer marketing consultant",
    "Sales team leader",
  ],
  authors: [{ name: "Jyothi Rekha Sahoo" }],
  openGraph: {
    title: "Jyothi Rekha Sahoo | Turning Connections into Conversions",
    description:
      "Sales & Business Development Professional · Influencer Marketer · Business Consultant",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-brand-blush text-brand-navy antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
