"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

export function ClosingCtaSection() {
  return (
    <section
      aria-label="Call to Action"
      className="w-full bg-[#0a0a0a] text-[var(--color-bone-white)] py-24 sm:py-32 lg:py-40 border-t border-white/10 relative overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 text-center flex flex-col items-center">
        {/* Subtle technical mono tag */}
        <ScrollReveal yOffset={14} duration={0.5}>
          <span className="font-mono text-[12px] uppercase tracking-[0.25em] text-white/60 block mb-6">
            Admissions Open · Kathmandu Centre
          </span>
        </ScrollReveal>

        {/* Verbatim Headline from Original Website - Weight 300 poster typography */}
        <ScrollReveal delay={0.08} yOffset={16} duration={0.6}>
          <h2 className="font-sans font-light text-[36px] sm:text-[50px] lg:text-[68px] leading-[1.02] tracking-[-0.035em] max-w-4xl mb-6 text-balance">
            Ready to Start Your Photography Journey?
          </h2>
        </ScrollReveal>

        {/* Verbatim Subtext from Original Website */}
        <ScrollReveal delay={0.16} yOffset={14} duration={0.6}>
          <p className="font-sans text-[17px] sm:text-[19px] leading-[1.65] text-white/80 max-w-xl text-pretty mb-12">
            Join thousands of students learning photography from around the world. No previous experience with art and design needed.
          </p>
        </ScrollReveal>

        {/* Dual Actions: Yellow Pill Button (Enroll Now) + Contact Us Button */}
        <ScrollReveal delay={0.24} yOffset={12} duration={0.5}>
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
            <Link
              href="/enroll"
              className="inline-flex items-center justify-center gap-2.5 bg-[var(--color-iip-yellow)] text-[var(--color-ink-black)] hover:bg-[#f5bc14] active:scale-[0.98] transition-all duration-200 font-sans font-normal text-[15.5px] py-4 px-8 sm:px-9 rounded-[1440px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Enroll Now</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 active:scale-[0.98] text-[var(--color-bone-white)] border border-white/25 transition-all font-sans font-normal text-[15.5px] py-4 px-8 sm:px-9 rounded-[1440px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-iip-yellow)]"
            >
              <Mail className="w-4 h-4 opacity-80" aria-hidden="true" />
              <span>Contact Us</span>
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3} yOffset={10} duration={0.5}>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 font-mono text-[11px] uppercase tracking-[0.2em] text-white/50 mt-12">
            <span>Jyoti Bhawan, Kanti Path, Kathmandu</span>
            <span className="hidden sm:inline text-white/20">·</span>
            <span>Tel: +977 9802364760</span>
            <span className="hidden sm:inline text-white/20">·</span>
            <span>Official Regional Partner</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
