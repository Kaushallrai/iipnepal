"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

const BRANDS = [
  "IIP FOUNDATION",
  "CANON PROFESSIONAL SERVICES",
  "NIKON SCHOOL",
  "PHOTO KATHMANDU",
  "PATAN MUSEUM EXHIBITIONS",
  "NEPAL TOURISM BOARD",
  "KATHMANDU PHOTO GALLERY",
  "HIMALAYAN DOCUMENTARY ALLIANCE",
];

export function BrandMarqueeSection() {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      // Continuous infinite marquee ticker
      const tween = gsap.to(track, {
        xPercent: -50,
        repeat: -1,
        duration: 28,
        ease: "none",
      });

      const handleMouseEnter = () => tween.timeScale(0.3);
      const handleMouseLeave = () => tween.timeScale(1);

      track.addEventListener("mouseenter", handleMouseEnter);
      track.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        track.removeEventListener("mouseenter", handleMouseEnter);
        track.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      aria-label="Institutional Partners & Affiliations"
      className="w-full bg-[var(--color-bone-white)] py-7 sm:py-8 border-b border-[var(--color-hairline)] overflow-hidden select-none"
    >
      <div className="flex flex-col gap-2">
        <div className="px-6 sm:px-10 lg:px-14 flex items-center justify-between mb-1">
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[var(--color-graphite)]">
            PARTNERS // AFFILIATIONS & INSTITUTIONAL NETWORK
          </span>
          <span className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-[var(--color-ash)] hidden sm:inline">
            EST. 2011 · SOUTH ASIA
          </span>
        </div>

        <div className="w-full overflow-hidden flex whitespace-nowrap">
          <div
            ref={trackRef}
            className="flex items-center gap-10 sm:gap-14 w-max will-change-transform cursor-default"
          >
            {/* Duplicated array for seamless infinite marquee loop */}
            {[...BRANDS, ...BRANDS].map((brand, idx) => (
              <div
                key={idx}
                className="flex items-center gap-10 sm:gap-14 group"
              >
                <span className="font-mono text-[13px] sm:text-[14px] uppercase tracking-[0.25em] text-[var(--color-graphite)] group-hover:text-[var(--color-ink-black)] transition-colors">
                  {brand}
                </span>
                <span
                  aria-hidden="true"
                  className="w-1.5 h-1.5 rounded-full bg-[var(--color-hairline)] group-hover:bg-[var(--color-iip-yellow)] transition-colors"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
