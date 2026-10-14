"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import LineReveal from "@/components/animations/LineReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { aboutHeroData } from "@/data/about/hero";

export interface AboutHeroProps {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
}

export default function AboutHero({
  eyebrow = aboutHeroData.eyebrow,
  heading = aboutHeroData.heading,
  subheading = aboutHeroData.subheading,
}: AboutHeroProps): React.JSX.Element {
  const headingLines = React.useMemo(() => {
    if (heading === aboutHeroData.heading) {
      return aboutHeroData.headingLines;
    }
    return [heading];
  }, [heading]);

  return (
    <section className="section_about-hero w-full pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-20 sm:pb-24 md:pb-28 lg:pb-32 border-b border-[#e2e0d2] bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        {/* ================================================================= */}
        {/* TOP EDITORIAL STATEMENT                                           */}
        {/* ================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-start mb-10 sm:mb-12 lg:mb-14">
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
          <ScrollReveal variant="fade-up" distance={20} duration={0.8} delay={0.1} className="lg:col-span-5 flex flex-col justify-between pt-1 sm:pt-2 lg:pt-8">
            <p className="font-sans text-base sm:text-lg lg:text-xl text-[#555555] font-normal leading-[1.6] tracking-[-0.015em] mb-6 sm:mb-8">
              {subheading}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-6 border-t border-[#e2e0d2]">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-3 rounded-full bg-black text-white hover:bg-[#ffd001] hover:text-black active:scale-[0.99] transition-all duration-200 no-underline font-mono text-xs uppercase tracking-[0.16em] font-semibold text-center touch-manipulation min-h-[44px] whitespace-nowrap"
              >
                <span>Explore Courses</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.16em] text-black hover:text-[#ca8a04] active:scale-[0.99] transition-all py-3 sm:py-2 px-4 rounded-full border border-black/10 sm:border-transparent hover:border-black/20 text-center touch-manipulation min-h-[44px] gap-1.5 whitespace-nowrap"
              >
                <span>Admissions Desk</span>
                <ArrowUpRight className="w-3 h-3 text-[#888888]" />
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* ================================================================= */}
        {/* ARCHITECTURAL METRICS: 3 BALANCED PILLARS                         */}
        {/* ================================================================= */}
        <ScrollReveal variant="fade-up" distance={20} duration={0.8} className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 sm:pt-10 border-t border-[#e2e0d2]">
            <div className="flex flex-col gap-1 sm:gap-1.5">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#888888]">
                Heritage
              </span>
              <div className="font-sans font-light text-2xl sm:text-3xl md:text-[28px] lg:text-4xl text-black tracking-[-0.03em] whitespace-nowrap">
                14+ Years
              </div>
              <p className="font-sans text-xs text-[#666666] leading-relaxed">
                Regional photographic education partner in Kathmandu since 2011.
              </p>
            </div>

            <div className="flex flex-col gap-1 sm:gap-1.5">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#888888]">
                Community
              </span>
              <div className="font-sans font-light text-2xl sm:text-3xl md:text-[28px] lg:text-4xl text-black tracking-[-0.03em] whitespace-nowrap">
                500+ Alumni
              </div>
              <p className="font-sans text-xs text-[#666666] leading-relaxed">
                Practicing across documentary, studio, and commercial media.
              </p>
            </div>

            <div className="flex flex-col gap-1 sm:gap-1.5">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#888888]">
                Campus
              </span>
              <div className="font-sans font-light text-2xl sm:text-3xl md:text-[28px] lg:text-4xl text-black tracking-[-0.03em] whitespace-nowrap">
                Jyoti Bhawan
              </div>
              <p className="font-sans text-xs text-[#666666] leading-relaxed">
                Lighting lab, critique suites, and studios at Kanti Path.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
