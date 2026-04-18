import type { Metadata } from "next";
import { Inter, Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700", "900"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://jyothirekha.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Jyothi Rekha Sahoo | Sales & Business Development Professional",
    template: "%s | Jyothi Rekha Sahoo",
  },
  description:
    "Turning Connections into Conversions. Sales & BD professional, influencer marketer, and business consultant based in Gurgaon, India. 10+ years of experience across 5 industries.",
  keywords: [
    "Jyothi Rekha Sahoo",
    "Sales professional Gurgaon",
    "Business development consultant India",
    "Influencer marketing consultant",
    "Sales team leader India",
    "BD professional hire",
  ],
  authors: [{ name: "Jyothi Rekha Sahoo" }],
  creator: "Jyothi Rekha Sahoo",
  openGraph: {
    siteName: "Jyothi Rekha Sahoo",
    type: "website",
    locale: "en_IN",
    title: "Jyothi Rekha Sahoo | Turning Connections into Conversions",
    description:
      "Sales & Business Development Professional · Influencer Marketer · Business Consultant · Gurgaon, India",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jyothi Rekha Sahoo — Turning Connections into Conversions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jyothi Rekha Sahoo | Turning Connections into Conversions",
    description:
      "Sales & BD Professional. Influencer Marketer. Business Consultant. Based in Gurgaon, India.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${dmSans.variable} scroll-smooth`}
    >
      <body className="bg-brand-blush text-brand-navy font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
