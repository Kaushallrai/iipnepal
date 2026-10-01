"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

export function FlagshipFeatureSection() {
  return (
    <section
      aria-label="Flagship Diploma Feature"
      className="w-full bg-[#0a0a0a] text-[var(--color-bone-white)] py-20 sm:py-28 lg:py-36 border-b border-white/10 relative overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Creative Giants Project 01 Header Pattern */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <ScrollReveal yOffset={12} duration={0.5}>
            <span className="font-mono text-[11.5px] uppercase tracking-[0.25em] text-white/60 block mb-4">
              FLAGSHIP PROGRAMME // 01
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.08} yOffset={14} duration={0.6}>
            <h2 className="font-sans font-light text-[32px] sm:text-[46px] lg:text-[56px] leading-[1.05] tracking-[-0.03em] mb-5">
              1-Year Professional Diploma in Photography
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.14} yOffset={12} duration={0.6}>
            <p className="font-sans text-[16px] sm:text-[18px] leading-[1.7] text-white/80 max-w-2xl mb-8">
              A comprehensive mentor-led immersion into manual exposure, studio lighting, visual storytelling, and Kathmandu documentary fieldwork. Built for aspiring professional photographers and documentary storytellers.
            </p>
          </ScrollReveal>

          {/* Creative Giants Underlined Category Chips */}
          <ScrollReveal delay={0.18} yOffset={10} duration={0.5}>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.2em] text-white/70">
              <span className="border-b border-white/40 pb-0.5">STUDIO LIGHTING</span>
              <span className="border-b border-white/40 pb-0.5">DARKROOM DISCIPLINE</span>
              <span className="border-b border-white/40 pb-0.5">STREET DOCUMENTARY</span>
              <span className="border-b border-white/40 pb-0.5">EXHIBITION CURATION</span>
            </div>
          </ScrollReveal>
        </div>

        {/* Full-Width Documentary Image Band */}
        <ScrollReveal yOffset={18} duration={0.7}>
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-white/5 border border-white/10 mb-10">
            <Image
              src="/images/flagship-mentor-darkroom.jpg"
              alt="IIP Nepal Flagship Diploma - Master mentor and student reviewing film negatives in Kathmandu light room"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-[center_40%] opacity-90 transition-transform duration-1000 ease-out hover:scale-102"
            />
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 px-3.5 py-1.5 bg-black/85 backdrop-blur-sm text-white font-mono text-[11px] uppercase tracking-[0.2em]">
              12 Months · Mentor-Led · Kathmandu
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom Actions */}
        <ScrollReveal delay={0.1} yOffset={12} duration={0.5}>
          <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.2em] text-white/60">
              <span>Next Cohort: Autumn 2026</span>
              <span className="text-white/20">/</span>
              <span className="text-[var(--color-iip-yellow)]">Fee: Rs. 40,000</span>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/courses/pro-level-advanced-diploma-photography-course-nepal"
                className="inline-flex items-center gap-2 font-sans font-normal text-[14px] text-white hover:text-[var(--color-iip-yellow)] transition-colors py-2"
              >
                <span>View Full Curriculum</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>

              <Link
                href="/enroll"
                className="inline-flex items-center justify-center bg-[var(--color-iip-yellow)] text-[var(--color-ink-black)] hover:bg-[#f5bc14] active:scale-[0.98] transition-all font-sans font-normal text-[14.5px] py-3.5 px-8 rounded-[1440px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Enroll in Diploma
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
