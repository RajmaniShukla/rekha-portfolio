import type { Metadata } from "next";
import ResumeContent from "./ResumeContent";

export const metadata: Metadata = {
  title: "Resume | Jyothi Rekha Sahoo",
  description:
    "View and download the resume of Jyothi Rekha Sahoo — Sales & Business Development Professional with 10+ years of experience.",
  openGraph: {
    title: "Resume | Jyothi Rekha Sahoo",
    description: "Sales & BD Professional. 10+ years. Download the full PDF resume.",
  },
};

export default function ResumePage() {
  return <ResumeContent />;
}
