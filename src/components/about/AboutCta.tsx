"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import LineReveal from "@/components/animations/LineReveal";
import { aboutCtaData } from "@/data/about/cta";

export default function AboutCta(): React.JSX.Element {
  return (
    <section
      data-theme="dark"
      className="section_about-cta w-full bg-black text-[#fffef7] py-20 sm:py-24 md:py-28 lg:py-32 border-t border-[#343332]"
    >
      {/* Full-width container with consistent padding */}
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-3.5 sm:mb-4 px-3 py-1 rounded-full bg-white/10 text-[#ffd001] font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ffd001]" />
          <span>{aboutCtaData.eyebrow}</span>
        </div>

        {/* Large Editorial Headline */}
        <LineReveal
          as="h2"
          className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[58px] xl:text-[64px] leading-[1.08] tracking-[-0.035em] text-white max-w-4xl mb-3 sm:mb-4"
          lines={[aboutCtaData.heading]}
        />

        {/* Subtext */}
        <p className="font-sans text-sm sm:text-base md:text-lg text-[#aaaaaa] font-normal leading-relaxed max-w-2xl mb-8 sm:mb-10">
          {aboutCtaData.subtext}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-5 mb-10 sm:mb-14 w-full sm:w-auto max-w-sm sm:max-w-none">
          <Link
            href={aboutCtaData.primaryCtaHref}
            className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#ffd001] text-black hover:bg-white active:scale-[0.98] transition-all duration-200 font-mono text-xs sm:text-[13px] uppercase tracking-[0.16em] font-semibold no-underline min-h-[48px] text-center touch-manipulation"
          >
            <span>{aboutCtaData.primaryCtaText}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <Link
            href={aboutCtaData.secondaryCtaHref}
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-transparent text-white border border-white/25 hover:border-[#ffd001] hover:text-[#ffd001] active:scale-[0.98] transition-all duration-200 font-mono text-xs sm:text-[13px] uppercase tracking-[0.16em] no-underline min-h-[48px] text-center touch-manipulation"
          >
            <span>{aboutCtaData.secondaryCtaText}</span>
          </Link>
        </div>

        {/* Clean Architectural Contact Bar (Zero Clipart Icons) */}
        <div className="w-full max-w-3xl pt-6 sm:pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 lg:gap-12 text-[11px] sm:text-xs font-mono tracking-[0.14em] uppercase text-[#888888]">
          <a href={`tel:${aboutCtaData.phone}`} className="hover:text-[#ffd001] transition-colors no-underline py-1 touch-manipulation">
            Phone: {aboutCtaData.phoneDisplay}
          </a>
          <a href={`mailto:${aboutCtaData.email}`} className="hover:text-[#ffd001] transition-colors no-underline py-1 touch-manipulation">
            Email: {aboutCtaData.email}
          </a>
          <Link href="/contact" className="hover:text-[#ffd001] transition-colors no-underline py-1 touch-manipulation">
            Location: {aboutCtaData.addressShort}
          </Link>
        </div>
      </div>
    </section>
  );
}
