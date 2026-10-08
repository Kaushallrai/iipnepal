"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { usePageTransition } from "@/components/providers/PageTransitionContext";

if (typeof window !== "undefined") {
  gsap.registerPlugin(CustomEase);
}

export interface NavItem {
  label: string;
  href: string;
}

export interface HeroRevealProps {
  imageSrc?: string;
  imageAlt?: string;
  brandPrimary?: string;
  brandSecondary?: string;
  announcementTitle?: string;
  announcementText?: string;
  ctaText?: string;
  navItems?: NavItem[];
  enrollText?: string;
  enrollHref?: string;
}

export default function HeroReveal({
  imageSrc = "/images/hero-photographer.webp",
  imageAlt = "IIP Nepal Photography Master Archive",
  announcementTitle = "WELCOME TO THE IIP CENTRE NEPAL",
  announcementText = "Indian Institute of Photography launches in Kathmandu with White Hat Events — led by alumnus Additya Shrestha.",
  ctaText = "[ EXPLORE COURSES ]",
}: HeroRevealProps) {
  const { hasPlayedHomeIntro, setHasPlayedHomeIntro, completeTransition } =
    usePageTransition();

  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const loadingLabelRef = useRef<HTMLSpanElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const titleLinesRef = useRef<(HTMLHeadingElement | null)[]>([]);
  const announcementRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Right-side vertical display text
  const editorialTagRef = useRef<HTMLDivElement>(null);

  // Bottom information bar
  const bottomBarRef = useRef<HTMLDivElement>(null);

  const [counterDisplay, setCounterDisplay] = useState(0);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const runAnimation = useCallback(() => {
    if (!heroRef.current || !mediaRef.current) return;

    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    try {
      CustomEase.create("customEase", ".87, 0, .13, 1");
    } catch {
      // already registered
    }

    const ease = "customEase";
    setCounterDisplay(0);

    // Target the global Navbar elements by ID
    const logoWrapper = document.getElementById("nav-logo-wrapper");
    const initialTextLogo = document.getElementById("nav-initial-text");
    const officialLogo = document.getElementById("nav-official-logo");
    const navMenu = document.getElementById("nav-menu");
    const rightActions = document.getElementById("nav-right-actions");

    // Initial state:
    // Pinned image clipped to 0% width horizontal strip at center (45% to 55%)
    gsap.set(heroRef.current, {
      clipPath: "polygon(0% 45%, 0% 45%, 0% 55%, 0% 55%)",
    });

    if (loadingLabelRef.current) {
      gsap.set(loadingLabelRef.current, { opacity: 1 });
    }
    if (counterRef.current) {
      gsap.set(counterRef.current, { opacity: 1 });
    }

    // Media container initially scaled down and rotated -16 degrees in center
    gsap.set(mediaRef.current, {
      scale: 0.22,
      rotation: -16,
      transformOrigin: "center center",
    });

    // 1. Logo initial state: centered horizontally in the screen
    if (logoWrapper) {
      gsap.set(logoWrapper, {
        left: "50%",
        xPercent: -50,
        x: 0,
        opacity: 1,
      });
    }

    // Initial text visible in dark ink
    if (initialTextLogo) {
      gsap.set(initialTextLogo, {
        opacity: 1,
        display: "flex",
      });
    }

    // Official logo mark hidden initially during hero reveal
    if (officialLogo) {
      gsap.set(officialLogo, {
        opacity: 0,
        display: "none",
        scale: 0.9,
      });
    }

    // 2. Middle navigation links hidden initially
    if (navMenu) {
      gsap.set(navMenu, {
        opacity: 0,
        y: -15,
        pointerEvents: "none",
      });
    }

    // 3. Right actions (Enroll CTA + Mobile menu trigger) hidden initially
    if (rightActions) {
      gsap.set(rightActions, {
        opacity: 0,
        y: -15,
        pointerEvents: "none",
      });
    }

    // 4. Right side editorial vertical display text hidden initially
    if (editorialTagRef.current) {
      gsap.set(editorialTagRef.current, {
        opacity: 0,
        y: -20,
      });
    }

    // 5. Hero center text hidden initially
    if (heroContentRef.current) {
      gsap.set(heroContentRef.current, { opacity: 0 });
    }
    titleLinesRef.current.forEach((el) => {
      if (el) gsap.set(el, { y: "115%" });
    });
    if (announcementRef.current) {
      gsap.set(announcementRef.current, { opacity: 0, y: 20 });
    }
    if (ctaRef.current) {
      gsap.set(ctaRef.current, { opacity: 0, y: 20 });
    }

    // 6. Bottom bar hidden initially
    if (bottomBarRef.current) {
      gsap.set(bottomBarRef.current, { opacity: 0, y: 15 });
    }

    const tl = gsap.timeline({
      defaults: { ease },
      onComplete: () => {
        setHasPlayedHomeIntro(true);
        completeTransition();
      },
    });
    timelineRef.current = tl;
    if (typeof window !== "undefined") {
      (window as unknown as { heroTimeline: gsap.core.Timeline }).heroTimeline = tl;
    }

    const counterObj = { val: 0 };

    // --- PHASE 1: Graceful Initial Expand (0% to 45% width) ---
    // Smooth, deliberate opening of the horizontal photographic strip
    tl.to(
      heroRef.current,
      {
        clipPath: "polygon(0% 45%, 45% 45%, 45% 55%, 0% 55%)",
        duration: 0.95,
        ease: "power2.inOut",
      },
      0
    );

    tl.to(
      counterObj,
      {
        val: 45,
        duration: 0.95,
        ease: "power2.inOut",
        onUpdate: () => setCounterDisplay(Math.floor(counterObj.val)),
      },
      0
    );

    tl.to(
      mediaRef.current,
      {
        scale: 0.32,
        rotation: -9,
        duration: 0.95,
        ease: "power2.inOut",
      },
      0
    );

    // --- PHASE 2: Steady Cinematic Stretch Across Screen (45% to 100%) ---
    // Calm glide across to full viewport width
    tl.to(
      heroRef.current,
      {
        clipPath: "polygon(0% 45%, 100% 45%, 100% 55%, 0% 55%)",
        duration: 1.15,
        ease: "power2.out",
      },
      0.95
    );

    tl.to(
      counterObj,
      {
        val: 100,
        duration: 1.15,
        ease: "power2.out",
        onUpdate: () => setCounterDisplay(Math.floor(counterObj.val)),
      },
      0.95
    );

    tl.to(
      mediaRef.current,
      {
        scale: 0.48,
        rotation: -3,
        duration: 1.15,
        ease: "power2.out",
      },
      0.95
    );

    // --- PHASE 3: Micro-pause & The Big Vertical Unfurl (100% reveal) ---
    // Poised breath at full width before vertical unfurl begins
    const revealTime = 2.35;

    // Fade out loading progress labels smoothly
    tl.to(
      [loadingLabelRef.current, counterRef.current],
      {
        opacity: 0,
        duration: 0.25,
        ease: "power2.out",
      },
      revealTime
    );

    // Expand pinned hero container from horizontal strip (45%-55%) to full viewport
    tl.to(
      heroRef.current,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.95,
        ease,
      },
      revealTime
    );

    // Concurrently scale up and un-rotate the photo
    tl.to(
      mediaRef.current,
      {
        scale: 1,
        rotation: 0,
        duration: 1.05,
        ease,
      },
      revealTime
    );

    // --- PHASE 4: Transform Top Section Into Navigation Bar ---
    // Logo shifts to the left edge of the padded container (0%)
    if (logoWrapper) {
      tl.to(
        logoWrapper,
        {
          left: "0%",
          xPercent: 0,
          x: 0,
          duration: 0.75,
          ease,
        },
        revealTime + 0.08
      );
    }

    // Cross-fade: Hide initial text "IIP NEPAL" and show the official brand logo
    if (initialTextLogo) {
      tl.to(
        initialTextLogo,
        {
          opacity: 0,
          duration: 0.25,
          ease: "power2.out",
          onComplete: () => {
            if (initialTextLogo) {
              initialTextLogo.style.display = "none";
            }
          },
        },
        revealTime + 0.1
      );
    }

    if (officialLogo) {
      tl.set(
        officialLogo,
        {
          display: "flex",
          opacity: 0,
          scale: 0.94,
        },
        revealTime + 0.14
      );

      tl.to(
        officialLogo,
        {
          opacity: 1,
          scale: 1,
          duration: 0.45,
          ease: "power2.out",
        },
        revealTime + 0.16
      );
    }

    // Middle navigation links slide down smoothly
    if (navMenu) {
      tl.to(
        navMenu,
        {
          opacity: 1,
          y: 0,
          duration: 0.52,
          ease: "power2.out",
          onStart: () => {
            if (navMenu) navMenu.style.pointerEvents = "auto";
          },
        },
        revealTime + 0.24
      );
    }

    // Right actions slide down smoothly
    if (rightActions) {
      tl.to(
        rightActions,
        {
          opacity: 1,
          y: 0,
          duration: 0.52,
          ease: "power2.out",
          onStart: () => {
            if (rightActions) rightActions.style.pointerEvents = "auto";
          },
        },
        revealTime + 0.24
      );
    }

    // Right side editorial vertical display text slides in smoothly
    if (editorialTagRef.current) {
      tl.to(
        editorialTagRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power2.out",
        },
        revealTime + 0.3
      );
    }

    // --- PHASE 5: Hero Center Typography Staggered Reveal ---
    const textStartTime = revealTime + 0.35;

    if (heroContentRef.current) {
      tl.set(heroContentRef.current, { opacity: 1 }, textStartTime);
    }

    const validLines = titleLinesRef.current.filter(Boolean);
    if (validLines.length > 0) {
      tl.to(
        validLines,
        {
          y: "0%",
          duration: 0.8,
          stagger: 0.06,
          ease,
        },
        textStartTime
      );
    }

    if (announcementRef.current) {
      tl.to(
        announcementRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.52,
          ease: "power2.out",
        },
        textStartTime + 0.15
      );
    }

    if (ctaRef.current) {
      tl.to(
        ctaRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.52,
          ease: "power2.out",
        },
        textStartTime + 0.22
      );
    }

    // --- PHASE 6: Bottom Bar (Kathmandu Studio & Est. 2026) ---
    if (bottomBarRef.current) {
      tl.to(
        bottomBarRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.52,
          ease: "power2.out",
        },
        textStartTime + 0.22
      );
    }
  }, [setHasPlayedHomeIntro, completeTransition]);

  useEffect(() => {
    // If the intro has already played during this session, render immediately in fully revealed state
    if (hasPlayedHomeIntro) {
      if (heroRef.current) {
        gsap.set(heroRef.current, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        });
      }
      if (mediaRef.current) {
        gsap.set(mediaRef.current, {
          scale: 1,
          rotation: 0,
        });
      }
      if (heroContentRef.current) {
        gsap.set(heroContentRef.current, { opacity: 1 });
      }
      titleLinesRef.current.forEach((el) => {
        if (el) gsap.set(el, { y: "0%" });
      });
      if (announcementRef.current) {
        gsap.set(announcementRef.current, { opacity: 1, y: 0 });
      }
      if (ctaRef.current) {
        gsap.set(ctaRef.current, { opacity: 1, y: 0 });
      }
      if (bottomBarRef.current) {
        gsap.set(bottomBarRef.current, { opacity: 1, y: 0 });
      }
      if (editorialTagRef.current) {
        gsap.set(editorialTagRef.current, { opacity: 1, y: 0 });
      }

      // Ensure Navbar is in its normal resting state
      const logoWrapper = document.getElementById("nav-logo-wrapper");
      const initialTextLogo = document.getElementById("nav-initial-text");
      const officialLogo = document.getElementById("nav-official-logo");
      const navMenu = document.getElementById("nav-menu");
      const rightActions = document.getElementById("nav-right-actions");

      if (logoWrapper) {
        gsap.set(logoWrapper, { left: "0%", xPercent: 0, x: 0, opacity: 1 });
      }
      if (initialTextLogo) {
        gsap.set(initialTextLogo, { display: "none", opacity: 0 });
      }
      if (officialLogo) {
        gsap.set(officialLogo, { display: "flex", opacity: 1, scale: 1 });
      }
      if (navMenu) {
        gsap.set(navMenu, { opacity: 1, y: 0, pointerEvents: "auto" });
      }
      if (rightActions) {
        gsap.set(rightActions, { opacity: 1, y: 0, pointerEvents: "auto" });
      }

      return;
    }

    // First visit or browser refresh: run full, deliberate reveal animation!
    runAnimation();
    return () => {
      if (timelineRef.current) timelineRef.current.kill();
    };
  }, [hasPlayedHomeIntro, runAnimation, completeTransition]);

  return (
    <div className="relative w-full overflow-x-clip">
      {/* ============================================================== */}
      {/* 1. HERO BACKGROUND IMAGE (ABSOLUTE TO HERO CONTAINER, 100VH, Z-0) */}
      <div
        ref={heroRef}
        className="absolute inset-0 w-full h-full overflow-hidden bg-black z-0 pointer-events-none"
        style={{
          clipPath: hasPlayedHomeIntro
            ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
            : "polygon(0% 45%, 0% 45%, 0% 55%, 0% 55%)",
          willChange: "clip-path",
        }}
        aria-hidden="true"
      >
        <div
          ref={mediaRef}
          className="relative w-full h-full overflow-hidden"
          style={{
            willChange: "transform",
            transform: hasPlayedHomeIntro
              ? "none"
              : "scale(0.22) rotate(-16deg)",
            transformOrigin: "center center",
          }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Ambient cinematic dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/85" />
          <div className="absolute inset-0 bg-black/35" />
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. HERO CONTENT SECTION (SCROLLS UP NATURALLY OVER PINNED IMAGE) */}
      {/* ============================================================== */}
      <section
        ref={containerRef}
        className="relative z-20 w-full min-h-screen min-h-[100dvh] flex flex-col justify-between pt-[76px] sm:pt-[88px] md:pt-[104px] pb-5 sm:pb-8 pointer-events-auto"
      >
        {/* Top spacer */}
        <div className="w-full h-1 sm:h-4 md:h-6 shrink-0" />

        {/* Center Typography, Announcement & CTA */}
        <div
          ref={heroContentRef}
          className="my-auto py-4 sm:py-8 md:py-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 lg:px-16 pointer-events-auto"
          style={{
            opacity: hasPlayedHomeIntro ? 1 : 0,
            willChange: "opacity",
          }}
        >
          <div className="max-w-4xl xl:max-w-5xl mx-auto flex flex-col items-center">
            {/* Display Poster Headline: Switzer light weight 300 per DESIGN.md */}
            <div className="overflow-hidden py-1 mb-3 sm:mb-6 max-w-full">
              <h1
                ref={(el) => {
                  titleLinesRef.current[0] = el;
                }}
                className="text-white font-sans font-light uppercase text-2xl sm:text-4xl md:text-5xl lg:text-[76px] xl:text-[84px] tracking-[-0.03em] sm:tracking-[-0.04em] leading-[1.12] sm:leading-[1.04] md:leading-[1.0] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] max-w-5xl break-words"
                style={{
                  willChange: "transform",
                  transform: hasPlayedHomeIntro ? "translateY(0%)" : "translateY(115%)",
                }}
              >
                {announcementTitle}
              </h1>
            </div>

            {/* Shortened Concise Announcement (Only 1-2 lines) */}
            <div
              ref={announcementRef}
              className="max-w-xl mx-auto mb-5 sm:mb-8 px-2 sm:px-0"
              style={{
                willChange: "transform, opacity",
                opacity: hasPlayedHomeIntro ? 1 : 0,
                transform: hasPlayedHomeIntro ? "translateY(0px)" : "translateY(20px)",
              }}
            >
              <p className="text-white/85 font-sans font-light text-xs sm:text-base md:text-lg leading-[1.5] sm:leading-[1.55] tracking-[-0.018em] drop-shadow-md">
                {announcementText}
              </p>
            </div>

            {/* Single CTA Link: "[ EXPLORE COURSES ]" without underline */}
            <div
              ref={ctaRef}
              className="flex items-center justify-center"
              style={{
                willChange: "transform, opacity",
                opacity: hasPlayedHomeIntro ? 1 : 0,
                transform: hasPlayedHomeIntro ? "translateY(0px)" : "translateY(20px)",
              }}
            >
              <a
                href="#courses"
                className="text-[#ffd001] hover:text-white font-mono text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.24em] uppercase transition-colors duration-200 cursor-pointer py-2 px-4 leading-none no-underline"
              >
                {ctaText}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Information Bar (Kathmandu Studio & Est. 2026): Exact same padding as navbar */}
        <div
          ref={bottomBarRef}
          className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex flex-row items-center justify-between pb-5 sm:pb-8 md:pb-10 pt-3 sm:pt-4 text-white/90 font-mono text-[11px] sm:text-xs md:text-sm tracking-[0.12em] sm:tracking-[0.18em] md:tracking-[0.22em] uppercase font-medium pointer-events-auto shrink-0"
          style={{
            willChange: "transform, opacity",
            opacity: hasPlayedHomeIntro ? 1 : 0,
            transform: hasPlayedHomeIntro ? "translateY(0px)" : "translateY(15px)",
          }}
        >
          {/* LEFT: KATHMANDU STUDIO */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/70" />
            <span className="whitespace-nowrap">KATHMANDU STUDIO</span>
          </div>

          {/* RIGHT: EST. 2026 */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            <span className="whitespace-nowrap">EST. 2026</span>
            <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#ffd001]" />
          </div>
        </div>
      </section>

      {/* Right-Side Editorial Display Text: Sits on top of background photo (z-0) but BEHIND the hero reveal animation layer (z-20) */}
      <div
        className="absolute right-6 sm:right-8 md:right-12 lg:right-16 top-1/2 -translate-y-1/2 z-10 hidden min-[1380px]:flex items-center justify-center pointer-events-none select-none text-[#ffd001]"
      >
        <div
          ref={editorialTagRef}
          className="font-editorial text-5xl lg:text-6xl xl:text-7xl tracking-[0.24em] font-normal uppercase select-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] flex items-center justify-center gap-6"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            willChange: "transform, opacity",
            opacity: hasPlayedHomeIntro ? 1 : 0,
            transform: hasPlayedHomeIntro ? "translateY(0px)" : "translateY(-20px)",
          }}
        >
          <span>IIP</span>
          <span className="text-3xl lg:text-4xl font-sans inline-block text-[#ffd001]">
            ✱
          </span>
          <span>NEPAL</span>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 3. LOADING LABELS ROW (Cleanly floating across full width, NO line cutting through) */}
      {/* ============================================================== */}
      <div
        className="fixed top-1/2 -translate-y-1/2 left-0 right-0 w-full flex items-center justify-between px-6 sm:px-10 md:px-16 lg:px-20 z-50 pointer-events-none"
        style={{
          display: hasPlayedHomeIntro ? "none" : "flex",
        }}
      >
        <span
          ref={loadingLabelRef}
          className="flex items-center gap-2.5 text-[#ffd001] font-mono text-xs md:text-sm font-semibold tracking-[0.25em] uppercase whitespace-nowrap shrink-0 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          style={{
            opacity: hasPlayedHomeIntro ? 0 : 1,
          }}
        >
          <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.8)] animate-pulse" />
          LOADING
        </span>

        <span
          ref={counterRef}
          className="text-[#ffd001] font-mono text-xs md:text-sm font-semibold tracking-[0.25em] tabular-nums whitespace-nowrap shrink-0 text-right drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          style={{
            opacity: hasPlayedHomeIntro ? 0 : 1,
          }}
        >
          /{String(counterDisplay).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
