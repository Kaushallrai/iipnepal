"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

export function HeroSection() {
  return (
    <section
      aria-label="Welcome to IIP Centre Nepal"
      className="w-full bg-[var(--color-bone-white)] pt-4 sm:pt-6 pb-0 flex flex-col justify-start overflow-hidden"
    >
      {/* Creative Giants Colossal Display Poster Headline on Cream Paper */}
      <div className="w-full px-4 sm:px-8 lg:px-12 mb-6 sm:mb-8">
        <ScrollReveal yOffset={16} duration={0.8}>
          <div className="w-full border-b border-[var(--color-hairline)] pb-3 sm:pb-4">
            <div className="w-full overflow-hidden">
              <h1 className="font-poster text-[17vw] sm:text-[18vw] lg:text-[18.5vw] leading-[0.78] tracking-[-0.01em] text-[#222120] uppercase select-none w-full block">
                IIP NEPAL
              </h1>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 text-[10.5px] sm:text-[11.5px] font-mono uppercase tracking-[0.22em] text-[var(--color-graphite)]">
              <span>Indian Institute of Photography · Kathmandu Centre</span>
              <span className="hidden sm:inline">// Est. 2011 · Regional Partner</span>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Creative Giants Hero Image Band: Full-Bleed Edge-to-Edge Documentary Photography */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] lg:aspect-[21/9] min-h-[480px] sm:min-h-[560px] lg:min-h-[640px] bg-[var(--color-ink-black)] overflow-hidden">
        <Image
          src="/images/hero-photographer.jpg"
          alt="Indian Institute of Photography Nepal - Student with rangefinder camera in Kathmandu workshop"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%] opacity-70 scale-[1.01] transition-transform duration-1000 ease-out"
        />

        {/* Cinematic Vignette Overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent lg:bg-gradient-to-r lg:from-black/85 lg:via-black/50 lg:to-transparent"
        />

        {/* Creative Giants Bottom-Left Overlay: Location + Light-Weight Headline + Dual Actions */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 sm:p-10 lg:p-14 text-[var(--color-bone-white)]">
          <div className="max-w-2xl lg:max-w-3xl">
            <ScrollReveal yOffset={12} duration={0.5}>
              <span className="font-mono text-[12px] uppercase tracking-[0.25em] text-white/70 block mb-3">
                KATHMANDU, NEPAL // EST. 2011
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.08} yOffset={14} duration={0.6}>
              <h2 className="font-sans font-light text-[30px] sm:text-[42px] lg:text-[52px] leading-[1.05] tracking-[-0.03em] text-balance mb-4">
                Welcome to the IIP Centre Nepal!
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.14} yOffset={12} duration={0.6}>
              <p className="font-sans font-normal text-white/90 text-sm sm:text-base lg:text-[17px] leading-[1.65] max-w-2xl text-pretty mb-8">
                We are delighted to welcome you to the Indian Institute of Photography Nepal ! We are proud to be associated with IIP Nepal as our official regional partner, led by the talented IIP alumnus, Additya shrestha.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2} yOffset={10} duration={0.5}>
              <div className="flex flex-wrap items-center gap-4 sm:gap-5">
                <Link
                  href="/enroll"
                  className="inline-flex items-center justify-center gap-2.5 bg-[var(--color-iip-yellow)] text-[var(--color-ink-black)] hover:bg-[#f5bc14] active:scale-[0.98] transition-all font-sans font-normal text-[15px] py-3.5 px-8 rounded-[1440px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bone-white)]"
                >
                  <span>Enroll Online</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>

                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center gap-2.5 bg-[rgba(255,254,247,0.16)] hover:bg-[rgba(255,254,247,0.25)] active:scale-[0.98] text-[var(--color-bone-white)] border border-[rgba(255,254,247,0.32)] backdrop-blur-sm transition-all font-sans font-normal text-[15px] py-3.5 px-8 rounded-[1440px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-iip-yellow)]"
                >
                  <Compass className="w-4 h-4 opacity-80" aria-hidden="true" />
                  <span>Explore Courses</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Technical Annotation Strip */}
      <div className="w-full bg-[var(--color-bone-white)] border-b border-[var(--color-hairline)]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11.5px] font-mono text-[var(--color-graphite)] tracking-[0.2em] uppercase">
          <div className="flex items-center gap-4">
            <span>Online & Kathmandu Centre</span>
            <span className="text-[var(--color-hairline)]" aria-hidden="true">/</span>
            <span>Short-Term & Pro-Level Diplomas</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-600" aria-hidden="true" />
            <span className="text-[var(--color-ink-black)]">Admissions & Counseling: +977 9802364760</span>
          </div>
        </div>
      </div>
    </section>
  );
}
