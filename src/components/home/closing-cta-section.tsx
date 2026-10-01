"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

export function ClosingCtaSection() {
  return (
    <section
      aria-label="Call to Action"
      className="w-full bg-[var(--color-charcoal-ink)] text-[var(--color-soft-paper)] py-28 sm:py-36 lg:py-40 relative overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16 text-center flex flex-col items-center">
        {/* Subtle technical mono tag */}
        <ScrollReveal yOffset={14} duration={0.5}>
          <span className="font-mono text-[11.5px] uppercase tracking-[0.25em] text-white/50 block mb-6">
            Admissions Open · Kathmandu Centre
          </span>
        </ScrollReveal>

        {/* Verbatim Headline from Original Website */}
        <ScrollReveal delay={0.08} yOffset={16} duration={0.6}>
          <h2 className="font-sans font-normal text-[36px] sm:text-[50px] lg:text-[64px] leading-[1.04] tracking-[-2px] sm:tracking-[-3px] max-w-3xl mb-6">
            Ready to Start Your Photography Journey?
          </h2>
        </ScrollReveal>

        {/* Verbatim Subtext from Original Website */}
        <ScrollReveal delay={0.16} yOffset={14} duration={0.6}>
          <p className="font-sans text-[17px] sm:text-[19px] leading-[1.65] text-white/80 max-w-xl text-pretty mb-12">
            Join thousands of students learning photography from around the world. No previous experience with art and design needed.
          </p>
        </ScrollReveal>

        {/* Dual Actions: Yellow Pill Button + Phone Link */}
        <ScrollReveal delay={0.24} yOffset={12} duration={0.5}>
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
            <Link
              href="/enroll"
              className="inline-flex items-center justify-center gap-2.5 bg-[var(--color-iip-yellow)] text-[var(--color-charcoal-ink)] hover:bg-[#f5bc14] active:scale-[0.98] transition-all duration-200 font-sans font-medium text-[15.5px] py-4 px-8 rounded-[1440px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Register Now</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>

            <a
              href="tel:+9779802364760"
              className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/18 active:scale-[0.98] text-white border border-white/20 transition-all font-sans font-medium text-[15.5px] py-4 px-8 rounded-[1440px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-iip-yellow)]"
            >
              <Phone className="w-4 h-4 opacity-80" aria-hidden="true" />
              <span>+977 9802364760</span>
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3} yOffset={10} duration={0.5}>
          <p className="font-mono text-[11px] uppercase tracking-[0.25px] text-white/40 mt-10">
            Jyoti Bhawan, Kanti Path, Kathmandu · Official Regional Partner
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
