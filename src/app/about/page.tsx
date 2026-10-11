import type { Metadata } from "next";
import React from "react";
import AboutHero from "@/components/about/AboutHero";
import AboutWhatWeDo from "@/components/about/AboutWhatWeDo";
import AboutLeadership from "@/components/about/AboutLeadership";
import AboutStudioGallery from "@/components/about/AboutStudioGallery";
import AboutCta from "@/components/about/AboutCta";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About Us | IIP Nepal — Indian Institute of Photography",
  description:
    "Learn about IIP Nepal, the photography academy in Kathmandu and official regional partner of the Indian Institute of Photography, led by Additya Shrestha. Practical camera technique, guided assignments, and 1-on-1 mentorship at Jyoti Bhawan.",
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

      {/* 2. HOW WE TEACH: 3 VISUAL BLOCKS & DISCIPLINES */}
      <AboutWhatWeDo />

      {/* 3. MEET THE MENTOR: ADDITYA SHRESTHA */}
      <AboutLeadership />

      {/* 4. LEARNING ENVIRONMENT: AUTHENTIC STUDIOS, LIGHTING LABS & FIELDWORK */}
      <AboutStudioGallery />

      {/* 5. SEE THE WORK & EXPLORE COURSES: ENROLLMENT CTA */}
      <AboutCta />

      {/* 6. ARCHITECTURAL DARK FOOTER */}
      <Footer />
    </main>
  );
}
