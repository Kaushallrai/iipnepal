import type { Metadata } from "next";
import React from "react";
import AboutHero from "@/components/about/AboutHero";
import AboutWhatWeDo from "@/components/about/AboutWhatWeDo";
import AboutLeadership from "@/components/about/AboutLeadership";
import AboutHowItWorks from "@/components/about/AboutHowItWorks";
import AboutProspectus from "@/components/about/AboutProspectus";
import AboutCta from "@/components/about/AboutCta";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About Us | IIP Nepal — Indian Institute of Photography",
  description:
    "Learn about IIP Nepal, the premier photography institute in Kathmandu and official regional partner of the Indian Institute of Photography, led by Additya Shrestha. Explore our admissions playbook, darkroom facilities, and download course prospectuses.",
  openGraph: {
    title: "About Us | IIP Nepal — Indian Institute of Photography",
    description:
      "Premier photography education in Kathmandu. Explore our 7-step admissions process, studio and darkroom at Jyoti Bhawan, and degree prospectuses.",
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
      {/* 1. TOP EDITORIAL HERO STATEMENT & CREDENTIALS */}
      <AboutHero />

      {/* 2. WHAT WE DO: ACADEMY PILLARS & KINETIC DISCIPLINES MARQUEE */}
      <AboutWhatWeDo />

      {/* 3. ACADEMIC LEADERSHIP & IIP ETHOS (ADDITYA SHRESTHA & DARKROOM ARCHIVE) */}
      <AboutLeadership />

      {/* 4. HERE'S HOW IT WORKS: 7-STEP ADMISSIONS PLAYBOOK */}
      <AboutHowItWorks />

      {/* 5. OFFICIAL ACADEMIC CATALOGUES & PROSPECTUS DOWNLOADS */}
      <AboutProspectus />

      {/* 6. ADMISSIONS CTA (NO MAP) */}
      <AboutCta />

      {/* 7. ARCHITECTURAL DARK FOOTER */}
      <Footer />
    </main>
  );
}
