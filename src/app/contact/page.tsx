import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact | Jyothi Rekha Sahoo",
  description:
    "Get in touch with Jyothi Rekha Sahoo for job opportunities, freelance projects, brand collaborations, or consulting inquiries.",
  openGraph: {
    title: "Contact | Jyothi Rekha Sahoo",
    description: "Job opportunities, freelance projects, brand collabs — let's connect.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
