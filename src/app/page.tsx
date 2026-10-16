import React from "react";
import type { Metadata } from "next";
import HeroReveal from "@/components/home/HeroReveal";
import WhatWeDo from "@/components/home/WhatWeDo";
import CoursesSection from "@/components/home/CoursesSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import HowItWorks from "@/components/home/HowItWorks";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BrandSection from "@/components/home/BrandSection";
import NewsSection from "@/components/home/NewsSection";
import ContactSection from "@/components/home/ContactSection";
import AboutCta from "@/components/about/AboutCta";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Footer from "@/components/layout/Footer";
import { heroData } from "@/data/home/hero";

export const metadata: Metadata = {
  title: "IIP Nepal — Indian Institute of Photography Kathmandu",
  description:
    "Kathmandu's premier photography academy. Mentor-led courses, darkroom chemistry, and studio lighting labs at Jyoti Bhawan, Kanti Path.",
  openGraph: {
    title: "IIP Nepal — Indian Institute of Photography Kathmandu",
    description:
      "Kathmandu's premier photography academy. Mentor-led courses, darkroom chemistry, and studio lighting labs at Jyoti Bhawan, Kanti Path.",
    url: "https://iipnepal.com",
    siteName: "IIP Nepal",
    images: [
      {
        url: "/images/hero-photographer.webp",
        width: 1600,
        height: 900,
        alt: "IIP Nepal Indian Institute of Photography",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IIP Nepal — Indian Institute of Photography Kathmandu",
    description:
      "Kathmandu's premier photography academy. Mentor-led courses, darkroom chemistry, and studio lighting labs.",
    images: ["/images/hero-photographer.webp"],
  },
};

export default function Home(): React.JSX.Element {
  return (
    <main className="w-full min-h-screen bg-[#fffef7] text-black overflow-x-clip selection:bg-[#ffd001] selection:text-black">
      {/* 1. Hero Reveal Section */}
      <HeroReveal
        imageSrc={heroData.imageSrc}
        imageAlt={heroData.imageAlt}
        brandPrimary={heroData.brandPrimary}
        brandSecondary={heroData.brandSecondary}
        announcementTitle={heroData.announcementTitle}
        announcementText={heroData.announcementText}
        ctaText={heroData.ctaText}
      />

      {/* 2. What We Do Section */}
      <div className="relative z-20 bg-[#fffef7]">
        <WhatWeDo />
      </div>

      {/* 3. Courses Section (Darkroom Black Stage for Polaroid Gallery) */}
      <div data-theme="dark" className="relative z-20 bg-[#0a0a0a]">
        <CoursesSection />
      </div>

      {/* 4. How It Works Section (Bone White Canvas, Single Screen Height, Alternating Timeline) */}
      <div className="relative z-20 bg-[#fffef7]">
        <HowItWorks />
      </div>

      {/* 5. Portfolio Section (Creative Giants Pinned Horizontal Parallax Scroll with Top Editorial Header) */}
      <div data-theme="dark" className="relative z-20 bg-[#0a0a0a]">
        <PortfolioSection />
      </div>

      {/* 6. Testimonials Section (Creative Giants Light Canvas Alumni Voices Slider) */}
      <div className="relative z-20 bg-[#fffef7]">
        <TestimonialsSection />
      </div>

      {/* 6.5. Brand Marquee Section (Creative Giants Edge-to-Edge Monochrome Logos Strip) */}
      <div className="relative z-20 bg-[#fffef7] overflow-hidden">
        <ScrollReveal variant="fade-up" distance={20} duration={0.8} className="w-full">
          <BrandSection />
        </ScrollReveal>
      </div>

      {/* 7. News & Perspectives Section (Creative Giants Light Canvas Editorial News Slider) */}
      <div className="relative z-20 bg-[#fffef7]">
        <ScrollReveal variant="fade-up" distance={24} duration={0.8} className="w-full">
          <NewsSection />
        </ScrollReveal>
      </div>

      {/* 7.4. Admissions CTA Section (Dark Canvas Stage) */}
      <div data-theme="dark" className="relative z-20 bg-black">
        <ScrollReveal variant="fade-up" distance={24} duration={0.8} className="w-full">
          <AboutCta />
        </ScrollReveal>
      </div>

      {/* 7.5. Contact & Admissions Section (Creative Giants Light Canvas Form) */}
      <div className="relative z-20 bg-[#fffef7]">
        <ScrollReveal variant="fade-up" distance={24} duration={0.8} className="w-full">
          <ContactSection />
        </ScrollReveal>
      </div>

      {/* 8. Footer Section (Creative Giants Architectural Dark Stage) */}
      <Footer />
    </main>
  );
}
