import React from "react";
import HeroReveal from "@/components/HeroReveal";
import WhatWeDo from "@/components/home/WhatWeDo";
import CoursesSection from "@/components/home/CoursesSection";

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
    </main>
  );
}
