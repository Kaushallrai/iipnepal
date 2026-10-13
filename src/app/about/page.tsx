import type { Metadata } from "next";
import React from "react";
import AboutHero from "@/components/about/AboutHero";
import AboutWhatWeDo from "@/components/about/AboutWhatWeDo";
import AboutStudioGallery from "@/components/about/AboutStudioGallery";
import AboutLeadership from "@/components/about/AboutLeadership";
import AboutHowItWorks from "@/components/about/AboutHowItWorks";
import AboutProspectus from "@/components/about/AboutProspectus";
import AboutCta from "@/components/about/AboutCta";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About Us | IIP Nepal — Indian Institute of Photography",
  description:
    "Learn about IIP Nepal, Kathmandu's photography academy and regional partner of the Indian Institute of Photography, led by Additya Shrestha at Jyoti Bhawan, Kanti Path.",
  openGraph: {
    title: "About Us | IIP Nepal — Indian Institute of Photography",
    description:
      "Photography education in Kathmandu. 14+ years institutional heritage, darkroom chemistry, and studio lighting labs at Jyoti Bhawan, Kanti Path.",
    type: "website",
    url: "https://iipnepal.com/about",
  },
};

export default function AboutPage(): React.JSX.Element {
  return (
    <main
      className="min-h-screen bg-[#fffef7] text-black overflow-x-clip selection:bg-[#ffd001] selection:text-black"
      style={{
        fontFamily: "'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* 1. OUR STORY: PHOTOGRAPHY EDUCATION IN KATHMANDU */}
      <AboutHero />

      {/* 2. HOW WE TEACH: 3 EDUCATIONAL PILLARS */}
      <AboutWhatWeDo />

      {/* 3. LEARNING ENVIRONMENT: AUTHENTIC STUDIOS, LIGHTING LABS & FIELDWORK */}
      <AboutStudioGallery />

      {/* 4. MEET THE MENTOR: ADDITYA SHRESTHA */}
      <AboutLeadership />

      {/* 5. ADMISSIONS JOURNEY: 3 SIMPLE STEPS TO JOIN */}
      <AboutHowItWorks />

      {/* 6. SYLLABI & ACADEMIC AFFILIATION: OFFICIAL COURSE BREAKDOWNS */}
      <AboutProspectus />

      {/* 7. ADMISSIONS & ENROLLMENT ACTION */}
      <AboutCta />

      {/* 8. ARCHITECTURAL DARK FOOTER */}
      <Footer />
    </main>
  );
}
