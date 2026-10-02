"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { LineReveal } from "@/components/animations/line-reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function ClosingCtaSection() {
  const containerRef = useRef<HTMLElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const actions = actionsRef.current;
      const meta = metaRef.current;
      if (!container) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        if (actions) gsap.set(actions, { opacity: 1, y: 0 });
        if (meta) gsap.set(meta, { opacity: 1 });
        return;
      }

      if (actions) {
        gsap.fromTo(
          actions.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: actions,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      if (meta) {
        gsap.fromTo(
          meta,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: meta,
              start: "top 90%",
              once: true,
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      aria-label="Call to Action"
      className="w-full bg-[#0a0a0a] text-[var(--color-bone-white)] py-14 sm:py-18 lg:py-22 border-t border-white/10 relative overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 text-center flex flex-col items-center">
        {/* Subtle technical mono tag with dot */}
        <div className="flex items-center gap-2 font-mono text-[11px] sm:text-[11.5px] uppercase tracking-[0.25em] text-white/60 mb-5 select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-iip-yellow)] inline-block" />
          <span>Admissions Open · Kathmandu Centre</span>
        </div>

        {/* Verbatim Headline from Original Website - Creative Giants Line-by-Line Reveal */}
        <LineReveal
          as="h2"
          lines={[
            "Ready to Start Your",
            "Photography Journey?",
          ]}
          className="font-sans font-light text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.05] tracking-[-0.035em] max-w-3xl mb-4 text-balance text-white"
          duration={0.75}
          stagger={0.08}
          startTrigger="top 80%"
        />

        {/* Verbatim Subtext with Line-by-Line Reveal */}
        <LineReveal
          as="p"
          lines={[
            "Join thousands of students learning photography from around the world.",
            "No previous experience with art and design needed.",
          ]}
          className="font-sans text-[15px] sm:text-[17px] leading-[1.6] text-white/80 max-w-xl text-pretty mb-8 sm:mb-9"
          duration={0.7}
          stagger={0.07}
          startTrigger="top 80%"
        />

        {/* Dual Actions: Yellow Pill Button (Enroll Now) + Contact Us Button */}
        <div
          ref={actionsRef}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-5"
        >
          <Link
            href="/enroll"
            className="inline-flex items-center justify-center gap-2.5 bg-[var(--color-iip-yellow)] text-[var(--color-ink-black)] hover:bg-[#f5bc14] active:scale-[0.98] transition-all duration-200 font-sans font-normal text-[14.5px] py-3.5 px-8 sm:px-9 rounded-[1440px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Enroll Now</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 active:scale-[0.98] text-[var(--color-bone-white)] border border-white/25 transition-all font-sans font-normal text-[14.5px] py-3.5 px-8 sm:px-9 rounded-[1440px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-iip-yellow)]"
          >
            <Mail className="w-4 h-4 opacity-80" aria-hidden="true" />
            <span>Contact Us</span>
          </Link>
        </div>

        {/* Coordinates Strip */}
        <div
          ref={metaRef}
          className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/45 mt-9 sm:mt-10"
        >
          <span>Jyoti Bhawan, Kanti Path, Kathmandu</span>
          <span className="hidden sm:inline text-white/20">·</span>
          <span>Tel: +977 9802364760</span>
          <span className="hidden sm:inline text-white/20">·</span>
          <span>Official Regional Partner</span>
        </div>
      </div>
    </section>
  );
}
