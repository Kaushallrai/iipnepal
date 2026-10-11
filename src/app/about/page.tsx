import type { Metadata } from "next";
import React from "react";
import AboutHero from "@/components/about/AboutHero";
import AboutWhatWeDo from "@/components/about/AboutWhatWeDo";
import AboutLeadership from "@/components/about/AboutLeadership";
import AboutStudioGallery from "@/components/about/AboutStudioGallery";
import AboutHowItWorks from "@/components/about/AboutHowItWorks";
import AboutProspectus from "@/components/about/AboutProspectus";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About Us | IIP Nepal — Indian Institute of Photography",
  description:
    "Learn about IIP Nepal, the premier photography institute in Kathmandu and official regional partner of the Indian Institute of Photography, led by Additya Shrestha. Explore our 3-step admissions process, studio and lighting facilities at Jyoti Bhawan, and course syllabi.",
  openGraph: {
    title: "About Us | IIP Nepal — Indian Institute of Photography",
    description:
      "Premier photography education in Kathmandu. Explore our 3-step admissions process, studio and lighting labs at Jyoti Bhawan, and course syllabi.",
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

      {/* 3. ACADEMIC LEADERSHIP & IIP ETHOS (ADDITYA SHRESTHA) */}
      <AboutLeadership />

      {/* 4. KATHMANDU STUDIO & FIELDWORK SHOWCASE (MORE PHOTOS) */}
      <AboutStudioGallery />

      {/* 5. HERE'S HOW IT WORKS: 3-STEP ADMISSIONS PROCESS */}
      <AboutHowItWorks />

      {/* 6. OFFICIAL COURSE SYLLABI & ACADEMIC AFFILIATION */}
      <AboutProspectus />

      {/* 7. ARCHITECTURAL DARK FOOTER */}
      <Footer />
    </main>
  );
}
