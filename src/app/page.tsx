import React from "react";
import HeroReveal from "@/components/HeroReveal";
import WhatWeDo from "@/components/home/WhatWeDo";
import CoursesSection from "@/components/home/CoursesSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import HowItWorks from "@/components/home/HowItWorks";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import NewsSection from "@/components/home/NewsSection";

export default function Home(): React.JSX.Element {
  return (
    <main className="w-full min-h-screen bg-transparent text-black overflow-x-clip selection:bg-[#ffd001] selection:text-black">
      {/* 1. Hero Reveal Section (Photo is fixed in background, staying put on scroll) */}
      <HeroReveal
        imageSrc="/images/hero-photographer.jpg"
        imageAlt="IIP Nepal Master Photographer Darkroom"
        brandPrimary="IIP"
        brandSecondary="NEPAL"
        announcementTitle="WELCOME TO THE IIP CENTRE NEPAL"
        announcementText="Indian Institute of Photography launches in Kathmandu with White Hat Events — led by alumnus Additya Shrestha."
        ctaText="( EXPLORE COURSES )"
      />

      {/* 2. What We Do Section */}
      <div className="relative z-20 bg-[#fffef7]">
        <WhatWeDo />
      </div>

      {/* 3. Courses Section (Darkroom Black Stage for Polaroid Gallery) */}
      <div className="relative z-20 bg-[#0a0a0a]">
        <CoursesSection />
      </div>

      {/* 4. How It Works Section (Bone White Canvas, Single Screen Height, Alternating Timeline) */}
      <div className="relative z-20 bg-[#fffef7]">
        <HowItWorks />
      </div>

      {/* 5. Portfolio Section (Creative Giants Pinned Horizontal Parallax Scroll with Top Editorial Header) */}
      <div className="relative z-20 bg-[#0a0a0a]">
        <PortfolioSection />
      </div>

      {/* 6. Testimonials Section (Creative Giants Light Canvas Alumni Voices Slider) */}
      <div className="relative z-20 bg-[#fffef7]">
        <TestimonialsSection />
      </div>

      {/* 7. News & Perspectives Section (Creative Giants Light Canvas Editorial News Slider) */}
      <div className="relative z-20 bg-[#fffef7]">
        <NewsSection />
      </div>
    </main>
  );
}
