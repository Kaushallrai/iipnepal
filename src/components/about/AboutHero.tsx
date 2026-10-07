"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import LineReveal from "@/components/animations/LineReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";

export interface AboutHeroProps {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
}

export default function AboutHero({
  eyebrow = "About IIP Nepal · Kathmandu Centre",
  heading = "Professional photography education and darkroom mentorship in Kathmandu.",
  subheading = "Regional partner of the Indian Institute of Photography, launched with White Hat Events and directed by alumnus Additya Shrestha. We bridge fine-art photography, darkroom craftsmanship, and commercial studio practice.",
}: AboutHeroProps): React.JSX.Element {
  const headingLines = React.useMemo(() => {
    if (heading.includes("education and darkroom")) {
      return [
        "Professional photography education",
        "and darkroom mentorship in Kathmandu.",
      ];
    }
    return [heading];
  }, [heading]);

  return (
    <section className="section_about-hero w-full pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-14 md:pb-16 border-b border-[#e2e0d2] bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        {/* ================================================================= */}
        {/* TOP EDITORIAL STATEMENT                                           */}
        {/* ================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-start mb-8 sm:mb-10 lg:mb-12">
          {/* Left Column: Eyebrow + Display Headline */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3 sm:mb-4 select-none">
              <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#888888] font-medium">{eyebrow}</span>
            </div>

            <LineReveal
              as="h1"
              className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[58px] xl:text-[64px] leading-[1.08] tracking-[-0.035em] text-black"
              lines={headingLines}
            />
          </div>

          {/* Right Column: Narrative + Action */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-1 sm:pt-2 lg:pt-8">
            <p className="font-sans text-base sm:text-lg lg:text-xl text-[#555555] font-normal leading-[1.6] tracking-[-0.015em] mb-6 sm:mb-8">
              {subheading}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-6 border-t border-[#e2e0d2]">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-3 rounded-full bg-black text-white hover:bg-[#ffd001] hover:text-black active:scale-[0.99] transition-all duration-200 no-underline font-mono text-xs uppercase tracking-[0.16em] font-semibold text-center touch-manipulation min-h-[44px]"
              >
                <span>Kathmandu Studio</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href="tel:+9779802364760"
                className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.16em] text-black hover:text-[#ffd001] active:scale-[0.99] transition-all py-3 sm:py-2 px-4 rounded-full border border-black/10 sm:border-transparent hover:border-black/20 text-center touch-manipulation min-h-[44px]"
              >
                +977 9802364760
              </a>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* ARCHITECTURAL METRICS (CLEAN TYPOGRAPHY, ZERO ICONS)              */}
        {/* ================================================================= */}
        <ScrollReveal variant="stagger-children" stagger={0.08} start="top 92%">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-4 lg:gap-8 pt-8 border-t border-[#e2e0d2]">
            <div className="scroll-item flex flex-col gap-1 sm:gap-1.5">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#888888]">
              Heritage
            </span>
            <div className="font-sans font-light text-2xl sm:text-3xl md:text-[28px] lg:text-4xl text-black tracking-[-0.03em] whitespace-nowrap">
              14+ Years
            </div>
            <p className="font-sans text-xs text-[#666666] leading-relaxed">
              Regional training partner since 2011.
            </p>
          </div>

          <div className="scroll-item flex flex-col gap-1 sm:gap-1.5">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#888888]">
              Community
            </span>
            <div className="font-sans font-light text-2xl sm:text-3xl md:text-[28px] lg:text-4xl text-black tracking-[-0.03em] whitespace-nowrap">
              500+ Alumni
            </div>
            <p className="font-sans text-xs text-[#666666] leading-relaxed">
              Working across documentary and fashion.
            </p>
          </div>

          <div className="scroll-item flex flex-col gap-1 sm:gap-1.5">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#888888]">
              Curriculum
            </span>
            <div className="font-sans font-light text-2xl sm:text-3xl md:text-[28px] lg:text-4xl text-black tracking-[-0.03em] whitespace-nowrap">
              100% Practical
            </div>
            <p className="font-sans text-xs text-[#666666] leading-relaxed">
              Darkroom printing and strobe labs.
            </p>
          </div>

          <div className="scroll-item flex flex-col gap-1 sm:gap-1.5">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#888888]">
              Admissions
            </span>
            <div className="font-sans font-light text-2xl sm:text-3xl md:text-[28px] lg:text-4xl text-black tracking-[-0.03em] whitespace-nowrap">
              1 : 1 Advisory
            </div>
            <p className="font-sans text-xs text-[#666666] leading-relaxed">
              Dedicated counselor for every student.
            </p>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
