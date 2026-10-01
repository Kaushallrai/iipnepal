"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

export function HeroSection() {
  return (
    <section
      aria-label="Welcome to IIP Centre Nepal"
      className="relative w-full min-h-[700px] sm:min-h-[760px] lg:min-h-[860px] bg-[var(--color-navy-ink)] flex flex-col justify-between overflow-hidden"
    >
      {/* Background Documentary Photography — Sharp 0px corners, no blur artifacts */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-photographer.jpg"
          alt="Indian Institute of Photography Nepal - Student with rangefinder camera in Kathmandu workshop"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_right] sm:object-right opacity-60 scale-[1.01] transition-transform duration-1000 ease-out"
        />
        {/* Subtle dark gradient vignette for text legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-ink)] via-[var(--color-navy-ink)]/75 to-[var(--color-navy-ink)]/35 lg:bg-gradient-to-r lg:from-[var(--color-navy-ink)] lg:via-[var(--color-navy-ink)]/85 lg:to-transparent"
        />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 pt-28 sm:pt-40 lg:pt-48 pb-20 sm:pb-28 flex-1 flex flex-col justify-center">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Authentic Display Headline - Weight 300 poster typography per DESIGN.md */}
          <ScrollReveal yOffset={20} duration={0.7}>
            <span className="font-mono text-[12px] uppercase tracking-[0.25em] text-[var(--color-bone-white)]/60 block mb-6">
              Kathmandu Centre · Est. 2011
            </span>
            <h1 className="font-sans font-light text-[var(--color-bone-white)] text-[44px] sm:text-[66px] lg:text-[84px] leading-[1.0] tracking-[-0.04em] text-balance mb-8 sm:mb-9">
              Welcome to the IIP Centre Nepal!
            </h1>
          </ScrollReveal>

          {/* Authentic Legacy Supporting Copy - Verbatim from original website */}
          <ScrollReveal delay={0.12} yOffset={16} duration={0.6}>
            <p className="font-sans font-normal text-[var(--color-bone-white)]/90 text-lg sm:text-xl lg:text-[21px] leading-[1.65] max-w-2xl text-pretty mb-12 sm:mb-14">
              We are delighted to welcome you to the Indian Institute of Photography Nepal ! We are proud to be associated with IIP Nepal as our official regional partner, led by the talented IIP alumnus, Additya shrestha.
            </p>
          </ScrollReveal>

          {/* Dual CTAs: Yellow Pill (Enroll Online) + Hero Glass Pill (Explore Courses) */}
          <ScrollReveal delay={0.24} yOffset={14} duration={0.5}>
            <div className="flex flex-wrap items-center gap-5 sm:gap-6">
              <Link
                href="/enroll"
                className="inline-flex items-center justify-center gap-2.5 bg-[var(--color-iip-yellow)] text-[var(--color-ink-black)] hover:bg-[#f5bc14] active:scale-[0.98] transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] font-sans font-normal text-[15.5px] py-4 px-8 sm:px-9 rounded-[1440px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bone-white)]"
              >
                <span>Enroll Online</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>

              <Link
                href="/courses"
                className="inline-flex items-center justify-center gap-2.5 bg-[rgba(255,254,247,0.16)] hover:bg-[rgba(255,254,247,0.24)] active:scale-[0.98] text-[var(--color-bone-white)] border border-[rgba(255,254,247,0.32)] transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] font-sans font-normal text-[15.5px] py-4 px-8 sm:px-9 rounded-[1440px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-iip-yellow)]"
              >
                <Compass className="w-4 h-4 opacity-80" aria-hidden="true" />
                <span>Explore Courses</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Technical Annotation Bottom Strip */}
      <div className="relative z-10 w-full border-t border-white/10 bg-black/40 backdrop-blur-md">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 py-4 sm:py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[12px] font-mono text-white/60 tracking-[0.25px] uppercase">
          <div className="flex items-center gap-4">
            <span>Online & Kathmandu Centre</span>
            <span className="text-white/20" aria-hidden="true">/</span>
            <span>Short-Term & Pro-Level Diplomas</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400" aria-hidden="true" />
            <span className="text-white/90">Admissions & Counseling: +977 9802364760</span>
          </div>
        </div>
      </div>
    </section>
  );
}
