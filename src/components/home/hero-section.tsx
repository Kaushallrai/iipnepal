"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

export function HeroSection() {
  return (
    <section
      aria-label="Welcome to IIP Centre Nepal"
      className="relative w-full min-h-[calc(100dvh-65px)] min-h-[640px] max-h-[1050px] bg-[var(--color-charcoal-ink)] flex flex-col justify-between overflow-hidden"
    >
      {/* Background Documentary Photography */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-photographer.jpg"
          alt="Indian Institute of Photography Nepal - Student with rangefinder camera in Kathmandu workshop"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_right] sm:object-right opacity-65 scale-[1.02] transition-transform duration-1000 ease-out"
        />
        {/* Editorial Film Grain & Dark Gradient Vignette for Contrast */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal-ink)] via-[var(--color-charcoal-ink)]/75 to-[var(--color-charcoal-ink)]/40 lg:bg-gradient-to-r lg:from-[var(--color-charcoal-ink)] lg:via-[var(--color-charcoal-ink)]/80 lg:to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(31,25,21,0.6)_0%,rgba(31,25,21,0.85)_100%)] pointer-events-none"
        />
      </div>

      {/* Main Content Area with Expansive Breathing Room */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-24 lg:pb-28 flex-1 flex flex-col justify-center">
        <div className="max-w-4xl">
          {/* Eyebrow Capsule */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-[1440px] border border-white/20 bg-white/10 backdrop-blur-md mb-6 sm:mb-8 text-[11px] font-mono text-[var(--color-paper-white)] tracking-[0.3px] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-iip-yellow)] animate-pulse" aria-hidden="true" />
            Indian Institute of Photography · Kathmandu Centre
          </div>

          {/* Authentic Display Headline */}
          <ScrollReveal yOffset={20} duration={0.7}>
            <h1 className="font-sans font-normal text-[var(--color-soft-paper)] text-[44px] sm:text-[68px] lg:text-[104px] leading-[0.94] tracking-[-2px] sm:tracking-[-4px] lg:tracking-[-6.5px] text-balance mb-6 sm:mb-8">
              Welcome to the IIP Centre Nepal.
            </h1>
          </ScrollReveal>

          {/* Authentic Legacy Supporting Copy */}
          <ScrollReveal delay={0.15} yOffset={16} duration={0.6}>
            <p className="font-sans font-normal text-[var(--color-paper-white)] text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl text-pretty opacity-95 mb-8 sm:mb-10">
              We are proud to be associated with IIP Nepal as our official regional partner, led by talented IIP alumnus Additya Shrestha. Offering short-term courses, weekend workshops, and mentor-led diploma programs in Kathmandu.
            </p>
          </ScrollReveal>

          {/* Dual CTAs: Yellow Pill (Register / Enroll) + Dark Hero Glass Pill */}
          <ScrollReveal delay={0.3} yOffset={14} duration={0.5}>
            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              {/* Primary: Yellow Pill */}
              <Link
                href="/enroll"
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-iip-yellow)] text-[var(--color-charcoal-ink)] hover:bg-[#f5bc14] active:scale-[0.98] transition-all duration-150 font-sans font-medium text-[15px] sm:text-base py-3.5 px-6 sm:px-7 rounded-[1440px] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-paper-white)]"
              >
                <span>Register Online</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>

              {/* Secondary: Dark Hero Glass Pill */}
              <Link
                href="/courses"
                className="inline-flex items-center justify-center gap-2 bg-[rgba(255,253,246,0.14)] hover:bg-[rgba(255,253,246,0.22)] active:scale-[0.98] text-[var(--color-paper-white)] border border-[rgba(255,253,246,0.28)] backdrop-blur-md transition-all duration-150 font-sans font-medium text-[15px] sm:text-base py-3.5 px-6 sm:px-7 rounded-[1440px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-iip-yellow)]"
              >
                <Compass className="w-4 h-4 opacity-80" aria-hidden="true" />
                <span>Courses Available</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Technical Annotation Bottom Strip with Original Details */}
      <div className="relative z-10 w-full border-t border-white/10 bg-black/35 backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] font-mono text-white/60 tracking-[0.3px] uppercase">
          <div className="flex items-center gap-4">
            <span>Online & Kathmandu Centre</span>
            <span className="text-white/20" aria-hidden="true">/</span>
            <span>Short-Term & Pro-Level Diplomas</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400/80 inline-block" aria-hidden="true" />
            <span className="text-white/80">Call: +977 9802364760</span>
          </div>
        </div>
      </div>
    </section>
  );
}
