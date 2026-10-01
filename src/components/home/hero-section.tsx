"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

export function HeroSection() {
  return (
    <section
      aria-label="Welcome to IIP Centre Nepal"
      className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[680px] bg-[var(--color-charcoal-ink)] flex flex-col justify-between overflow-hidden"
    >
      {/* Background Documentary Photography */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-photographer.jpg"
          alt="Indian Institute of Photography Nepal - Student with rangefinder camera in Kathmandu workshop"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_right] sm:object-right opacity-65 scale-[1.01] transition-transform duration-1000 ease-out"
        />
        {/* Editorial Film Grain & Dark Gradient Vignette for Contrast */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal-ink)] via-[var(--color-charcoal-ink)]/75 to-[var(--color-charcoal-ink)]/35 lg:bg-gradient-to-r lg:from-[var(--color-charcoal-ink)] lg:via-[var(--color-charcoal-ink)]/80 lg:to-transparent"
        />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 pt-16 sm:pt-20 lg:pt-24 pb-12 flex-1 flex flex-col justify-center">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Authentic Display Headline */}
          <ScrollReveal yOffset={16} duration={0.6}>
            <h1 className="font-sans font-normal text-[var(--color-soft-paper)] text-[40px] sm:text-[60px] lg:text-[76px] leading-[0.98] tracking-[-1.5px] sm:tracking-[-3px] lg:tracking-[-4.5px] text-balance mb-5">
              Welcome to the IIP Centre Nepal.
            </h1>
          </ScrollReveal>

          {/* Authentic Legacy Supporting Copy */}
          <ScrollReveal delay={0.12} yOffset={14} duration={0.55}>
            <p className="font-sans font-normal text-[var(--color-paper-white)] text-base sm:text-lg leading-relaxed max-w-xl text-pretty opacity-95 mb-8">
              We are proud to be associated with IIP Nepal as our official regional partner, led by talented IIP alumnus Additya Shrestha. Offering short-term courses, weekend workshops, and diploma programs in Kathmandu.
            </p>
          </ScrollReveal>

          {/* Dual CTAs: Yellow Pill (Register) + Dark Hero Glass Pill */}
          <ScrollReveal delay={0.24} yOffset={12} duration={0.5}>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/enroll"
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-iip-yellow)] text-[var(--color-charcoal-ink)] hover:bg-[#f5bc14] active:scale-[0.98] transition-all duration-150 font-sans font-medium text-[15px] py-3 px-6 rounded-[1440px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-paper-white)]"
              >
                <span>Register Online</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>

              <Link
                href="/courses"
                className="inline-flex items-center justify-center gap-2 bg-[rgba(255,253,246,0.14)] hover:bg-[rgba(255,253,246,0.22)] active:scale-[0.98] text-[var(--color-paper-white)] border border-[rgba(255,253,246,0.28)] backdrop-blur-md transition-all duration-150 font-sans font-medium text-[15px] py-3 px-6 rounded-[1440px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-iip-yellow)]"
              >
                <Compass className="w-4 h-4 opacity-80" aria-hidden="true" />
                <span>Courses Available</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Technical Annotation Bottom Strip with Original Details */}
      <div className="relative z-10 w-full border-t border-white/10 bg-black/40 backdrop-blur-md">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 py-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] font-mono text-white/60 tracking-[0.3px] uppercase">
          <div className="flex items-center gap-3">
            <span>Online & Kathmandu Centre</span>
            <span className="text-white/20" aria-hidden="true">/</span>
            <span>Short-Term & Pro-Level Diplomas</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
            <span className="text-white/80">Admissions & Counseling: +977 9802364760</span>
          </div>
        </div>
      </div>
    </section>
  );
}
