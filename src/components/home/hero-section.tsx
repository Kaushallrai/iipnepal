"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import gsap from "gsap";

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      // Creative Giants Exact Hero Animation:
      // 1. Reveal top wordmark container with vertical clipPath
      tl.from(".home-hero_top", {
        clipPath: "inset(0% 0% 100% 0%)",
        duration: 0.9,
      });

      // 2. Fade in colossal poster wordmark
      tl.from(
        ".home-hero_wordmark",
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
        },
        "-=0.7"
      );

      // 3. Reveal bottom image band with vertical clipPath
      tl.from(
        ".home-hero_bottom",
        {
          clipPath: "inset(100% 0% 0% 0%)",
          duration: 1,
        },
        "-=0.6"
      );

      // 4. Stagger overlay text & CTAs
      tl.from(
        ".home-hero_overlay_item",
        {
          opacity: 0,
          y: 18,
          duration: 0.6,
          stagger: 0.1,
        },
        "-=0.4"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      aria-label="Welcome to IIP Centre Nepal"
      className="w-full bg-[var(--color-bone-white)] h-[calc(100dvh-72px)] sm:h-[calc(100dvh-80px)] max-h-[calc(100dvh-72px)] sm:max-h-[calc(100dvh-80px)] flex flex-col justify-between overflow-hidden select-none"
    >
      {/* Creative Giants Hero Top: Colossal Display Poster Headline on Cream Paper */}
      <div className="home-hero_top w-full px-4 sm:px-8 lg:px-12 pt-1.5 sm:pt-2.5 pb-1.5 sm:pb-2.5 border-b border-[var(--color-hairline)] shrink-0 bg-[var(--color-bone-white)]">
        <div className="w-full overflow-hidden">
          <h1 className="home-hero_wordmark font-poster text-[10vw] sm:text-[11vw] lg:text-[11.5vw] leading-[0.76] tracking-[-0.01em] text-[#222120] uppercase select-none w-full block">
            IIP NEPAL
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pt-1 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.22em] text-[var(--color-graphite)]">
          <span>Indian Institute of Photography · Kathmandu Centre</span>
          <span className="hidden sm:inline">// Est. 2011 · Regional Partner</span>
        </div>
      </div>

      {/* Creative Giants Hero Image Band: Fits within screen, full bleed documentary photo */}
      <div className="home-hero_bottom flex-1 relative w-full overflow-hidden bg-[var(--color-ink-black)] min-h-0">
        <Image
          src="/images/hero-photographer.jpg"
          alt="Indian Institute of Photography Nepal - Student with rangefinder camera in Kathmandu workshop"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%] opacity-75 scale-[1.01] transition-transform duration-1000 ease-out"
        />

        {/* Cinematic Vignette Overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent lg:bg-gradient-to-r lg:from-black/85 lg:via-black/45 lg:to-transparent"
        />

        {/* Bottom-Left Overlay: Location + Light-Weight Headline + Dual Actions */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end p-4 sm:p-8 lg:p-10 text-[var(--color-bone-white)]">
          <div className="max-w-2xl lg:max-w-3xl">
            <span className="home-hero_overlay_item font-mono text-[10px] sm:text-[11.5px] uppercase tracking-[0.25em] text-white/70 block mb-1.5">
              KATHMANDU, NEPAL // EST. 2011
            </span>

            <h2 className="home-hero_overlay_item font-sans font-light text-[21px] sm:text-[32px] lg:text-[40px] leading-[1.1] tracking-[-0.03em] text-balance mb-2 sm:mb-3">
              Welcome to the IIP Centre Nepal!
            </h2>

            <p className="home-hero_overlay_item font-sans font-normal text-white/90 text-[11.5px] sm:text-sm lg:text-[15px] leading-[1.55] max-w-2xl text-pretty mb-3.5 sm:mb-5 line-clamp-3 sm:line-clamp-none">
              We are delighted to welcome you to the Indian Institute of Photography Nepal ! We are proud to be associated with IIP Nepal as our official regional partner, led by the talented IIP alumnus, Additya shrestha.
            </p>

            <div className="home-hero_overlay_item flex flex-wrap items-center gap-2.5 sm:gap-4">
              <Link
                href="/enroll"
                className="inline-flex items-center justify-center gap-1.5 bg-[var(--color-iip-yellow)] text-[var(--color-ink-black)] hover:bg-[#f5bc14] active:scale-[0.98] transition-all font-sans font-normal text-[13px] sm:text-[14px] py-2.5 sm:py-3 px-5 sm:px-7 rounded-[1440px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bone-white)]"
              >
                <span>Enroll Online</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>

              <Link
                href="/courses"
                className="inline-flex items-center justify-center gap-1.5 bg-[rgba(255,254,247,0.16)] hover:bg-[rgba(255,254,247,0.25)] active:scale-[0.98] text-[var(--color-bone-white)] border border-[rgba(255,254,247,0.32)] backdrop-blur-sm transition-all font-sans font-normal text-[13px] sm:text-[14px] py-2.5 sm:py-3 px-5 sm:px-7 rounded-[1440px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-iip-yellow)]"
              >
                <Compass className="w-3.5 h-3.5 opacity-80" aria-hidden="true" />
                <span>Explore Courses</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slim Technical Annotation Strip */}
      <div className="w-full bg-[var(--color-bone-white)] border-t border-[var(--color-hairline)] shrink-0">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-1.5 sm:py-2.5 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[var(--color-graphite)] tracking-[0.16em] sm:tracking-[0.2em] uppercase">
          <div className="flex items-center gap-2 truncate">
            <span>Kathmandu Centre</span>
            <span className="text-[var(--color-hairline)]" aria-hidden="true">/</span>
            <span>Short-Term & Pro Diplomas</span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" aria-hidden="true" />
            <span className="text-[var(--color-ink-black)]">+977 9802364760</span>
          </div>
        </div>
      </div>
    </section>
  );
}
