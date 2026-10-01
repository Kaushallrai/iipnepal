"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

export function HeroSection() {
  return (
    <section
      aria-label="Welcome to IIP Centre Nepal"
      className="relative w-full min-h-[700px] sm:min-h-[760px] lg:min-h-[840px] bg-[var(--color-charcoal-ink)] flex flex-col justify-between overflow-hidden"
    >
      {/* Background Documentary Photography */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-photographer.jpg"
          alt="Indian Institute of Photography Nepal - Student with rangefinder camera in Kathmandu workshop"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_right] sm:object-right opacity-60 scale-[1.01] transition-transform duration-1000 ease-out"
        />
        {/* Editorial Film Grain & Dark Gradient Vignette for Contrast */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal-ink)] via-[var(--color-charcoal-ink)]/75 to-[var(--color-charcoal-ink)]/30 lg:bg-gradient-to-r lg:from-[var(--color-charcoal-ink)] lg:via-[var(--color-charcoal-ink)]/80 lg:to-transparent"
        />
      </div>

      {/* Main Content Area with Generous Editorial Breathing Room */}
      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16 pt-24 sm:pt-36 lg:pt-44 pb-20 sm:pb-28 flex-1 flex flex-col justify-center">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Authentic Display Headline - Verbatim from original website */}
          <ScrollReveal yOffset={20} duration={0.7}>
            <h1 className="font-sans font-normal text-[var(--color-soft-paper)] text-[44px] sm:text-[66px] lg:text-[88px] leading-[0.96] tracking-[-2px] sm:tracking-[-3.5px] lg:tracking-[-5.5px] text-balance mb-8 sm:mb-9">
              Welcome to the IIP Centre Nepal!
            </h1>
          </ScrollReveal>

          {/* Authentic Legacy Supporting Copy - Verbatim from original website */}
          <ScrollReveal delay={0.12} yOffset={16} duration={0.6}>
            <p className="font-sans font-normal text-[var(--color-paper-white)] text-lg sm:text-xl lg:text-[21px] leading-[1.7] max-w-2xl text-pretty opacity-95 mb-12 sm:mb-14">
              We are delighted to welcome you to the Indian Institute of Photography Nepal ! We are proud to be associated with IIP Nepal as our official regional partner, led by the talented IIP alumnus, Additya shrestha.
            </p>
          </ScrollReveal>

          {/* Dual CTAs with Emil Kowalski Micro-Interactions */}
          <ScrollReveal delay={0.24} yOffset={14} duration={0.5}>
            <div className="flex flex-wrap items-center gap-5 sm:gap-6">
              <Link
                href="/enroll"
                className="inline-flex items-center justify-center gap-2.5 bg-[var(--color-iip-yellow)] text-[var(--color-charcoal-ink)] hover:bg-[#f5bc14] active:scale-[0.98] transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] font-sans font-medium text-[15.5px] py-4 px-8 rounded-[1440px] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-paper-white)]"
              >
                <span>Register Online</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>

              <Link
                href="/courses"
                className="inline-flex items-center justify-center gap-2.5 bg-[rgba(255,253,246,0.14)] hover:bg-[rgba(255,253,246,0.22)] active:scale-[0.98] text-[var(--color-paper-white)] border border-[rgba(255,253,246,0.28)] backdrop-blur-md transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] font-sans font-medium text-[15.5px] py-4 px-8 rounded-[1440px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-iip-yellow)]"
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
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16 py-4 sm:py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11.5px] font-mono text-white/60 tracking-[0.35px] uppercase">
          <div className="flex items-center gap-4">
            <span>Online & Kathmandu Centre</span>
            <span className="text-white/20" aria-hidden="true">/</span>
            <span>Short-Term & Pro-Level Diplomas</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400" aria-hidden="true" />
            <span className="text-white/80">Admissions & Counseling: +977 9802364760</span>
          </div>
        </div>
      </div>
    </section>
  );
}
