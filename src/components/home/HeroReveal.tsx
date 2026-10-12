"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { usePageTransition } from "@/components/providers/PageTransitionContext";
import { heroData } from "@/data/home/hero";

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
  imageSrc = heroData.imageSrc,
  imageAlt = heroData.imageAlt,
  announcementTitle = heroData.announcementTitle,
  announcementText = heroData.announcementText,
  ctaText = heroData.ctaText,
}: HeroRevealProps) {
  const { hasPlayedHomeIntro, setHasPlayedHomeIntro, completeTransition } =
    usePageTransition();

  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
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
    if (!heroRef.current || !mediaRef.current || !progressBarRef.current) return;

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
    // Safari iOS requires explicit webkitClipPath and hardware acceleration flags
    const initialStripClip = "polygon(0% 45%, 0% 45%, 0% 55%, 0% 55%)";
    const phase1Clip = "polygon(0% 45%, 45% 45%, 45% 55%, 0% 55%)";
    const fullStripClip = "polygon(0% 45%, 100% 45%, 100% 55%, 0% 55%)";
    const unfurlClip = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";

    gsap.set(heroRef.current, {
      clipPath: initialStripClip,
      webkitClipPath: initialStripClip,
      force3D: true,
    });

    // Progress bar container starts at 0% width and anchors "LOADING" and the sliding number
    gsap.set(progressBarRef.current, {
      width: "0%",
      opacity: 1,
      display: "flex",
    });

    if (loadingLabelRef.current) {
      gsap.set(loadingLabelRef.current, { opacity: 1 });
    }
    if (counterRef.current) {
      gsap.set(counterRef.current, { opacity: 1 });
    }

    // Media container initially scaled down with slight rotation
    gsap.set(mediaRef.current, {
      scale: 0.28,
      rotation: -10,
      transformOrigin: "center center",
      force3D: true,
    });

    // 1. Logo initial state: centered horizontally in the screen with stable vertical center
    if (logoWrapper) {
      gsap.set(logoWrapper, {
        left: "50%",
        xPercent: -50,
        yPercent: -50,
        x: 0,
        y: 0,
        opacity: 1,
      });
    }

    // Initial text visible in Bone White / Signal Yellow
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

    // --- PHASE 1: Initial Expand (0% to 45% width) ---
    // The strip and progress bar expand together; the counter slides along with the right edge!
    tl.to(
      heroRef.current,
      {
        clipPath: phase1Clip,
        webkitClipPath: phase1Clip,
        duration: 1.05,
        force3D: true,
        ease: "power2.inOut",
      },
      0
    );

    tl.to(
      progressBarRef.current,
      {
        width: "45%",
        duration: 1.05,
        ease: "power2.inOut",
      },
      0
    );

    tl.to(
      counterObj,
      {
        val: 45,
        duration: 1.05,
        ease: "power2.inOut",
        onUpdate: () => setCounterDisplay(Math.floor(counterObj.val)),
      },
      0
    );

    tl.to(
      mediaRef.current,
      {
        scale: 0.45,
        rotation: -6,
        duration: 1.05,
        force3D: true,
        ease: "power2.inOut",
      },
      0
    );

    // --- PHASE 2: Steady Stretch Across Full Screen (45% to 100%) ---
    // The counter continues sliding across the screen to the right margin!
    tl.to(
      heroRef.current,
      {
        clipPath: fullStripClip,
        webkitClipPath: fullStripClip,
        duration: 1.15,
        force3D: true,
        ease: "power2.out",
      },
      1.05
    );

    tl.to(
      progressBarRef.current,
      {
        width: "100%",
        duration: 1.15,
        ease: "power2.out",
      },
      1.05
    );

    tl.to(
      counterObj,
      {
        val: 100,
        duration: 1.15,
        ease: "power2.out",
        onUpdate: () => setCounterDisplay(Math.floor(counterObj.val)),
      },
      1.05
    );

    tl.to(
      mediaRef.current,
      {
        scale: 0.65,
        rotation: -2,
        duration: 1.15,
        force3D: true,
        ease: "power2.out",
      },
      1.05
    );

    // --- PHASE 3: Micro-pause & Vertical Unfurl (100% reveal) ---
    const revealTime = 2.35;

    // Fade out progress bar (loading label + counter)
    tl.to(
      progressBarRef.current,
      {
        opacity: 0,
        duration: 0.25,
        ease: "power2.out",
      },
      revealTime
    );

    // Expand pinned hero container from horizontal strip to full viewport
    tl.to(
      heroRef.current,
      {
        clipPath: unfurlClip,
        webkitClipPath: unfurlClip,
        duration: 0.95,
        force3D: true,
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
        force3D: true,
        ease,
      },
      revealTime
    );

    // --- PHASE 4: Transform Top Section Into Navigation Bar ---
    if (logoWrapper) {
      tl.to(
        logoWrapper,
        {
          left: "0%",
          xPercent: 0,
          yPercent: -50,
          x: 0,
          y: 0,
          duration: 0.72,
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
          duration: 0.22,
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
          duration: 0.42,
          ease: "power2.out",
        },
        revealTime + 0.16
      );
    }

    // Middle navigation links slide down smoothly (desktop)
    if (navMenu) {
      tl.to(
        navMenu,
        {
          opacity: 1,
          y: 0,
          duration: 0.48,
          ease: "power2.out",
          onStart: () => {
            if (navMenu) navMenu.style.pointerEvents = "auto";
          },
        },
        revealTime + 0.22
      );
    }

    // Right actions slide down smoothly (Enroll CTA + Mobile menu button)
    if (rightActions) {
      tl.to(
        rightActions,
        {
          opacity: 1,
          y: 0,
          duration: 0.48,
          ease: "power2.out",
          onStart: () => {
            if (rightActions) rightActions.style.pointerEvents = "auto";
          },
        },
        revealTime + 0.22
      );
    }

    // Right side editorial vertical display text slides in smoothly
    if (editorialTagRef.current) {
      tl.to(
        editorialTagRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power2.out",
        },
        revealTime + 0.26
      );
    }

    // --- PHASE 5: Hero Center Typography Reveal ---
    const textStartTime = revealTime + 0.32;

    if (heroContentRef.current) {
      tl.set(heroContentRef.current, { opacity: 1 }, textStartTime);
    }

    const validLines = titleLinesRef.current.filter(Boolean);
    if (validLines.length > 0) {
      tl.to(
        validLines,
        {
          y: "0%",
          duration: 0.78,
          stagger: 0.05,
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
          duration: 0.48,
          ease: "power2.out",
        },
        textStartTime + 0.12
      );
    }

    if (ctaRef.current) {
      tl.to(
        ctaRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.48,
          ease: "power2.out",
        },
        textStartTime + 0.18
      );
    }

    // --- PHASE 6: Bottom Bar (Kathmandu Studio & Est. 2026) ---
    if (bottomBarRef.current) {
      tl.to(
        bottomBarRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.48,
          ease: "power2.out",
        },
        textStartTime + 0.18
      );
    }
  }, [setHasPlayedHomeIntro, completeTransition]);

  useEffect(() => {
    // If intro has already played during this session, render immediately in revealed state
    if (hasPlayedHomeIntro) {
      const unfurlClip = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
      if (heroRef.current) {
        gsap.set(heroRef.current, {
          clipPath: unfurlClip,
          webkitClipPath: unfurlClip,
        });
      }
      if (mediaRef.current) {
        gsap.set(mediaRef.current, {
          scale: 1,
          rotation: 0,
        });
      }
      if (progressBarRef.current) {
        gsap.set(progressBarRef.current, {
          display: "none",
          opacity: 0,
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

      // Ensure Navbar is in normal resting state
      const logoWrapper = document.getElementById("nav-logo-wrapper");
      const initialTextLogo = document.getElementById("nav-initial-text");
      const officialLogo = document.getElementById("nav-official-logo");
      const navMenu = document.getElementById("nav-menu");
      const rightActions = document.getElementById("nav-right-actions");

      if (logoWrapper) {
        gsap.set(logoWrapper, {
          left: "0%",
          xPercent: 0,
          yPercent: -50,
          x: 0,
          y: 0,
          opacity: 1,
        });
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

    runAnimation();
    return () => {
      if (timelineRef.current) timelineRef.current.kill();
    };
  }, [hasPlayedHomeIntro, runAnimation, completeTransition]);

  return (
    <div className="relative w-full h-[100svh] min-h-[100svh] sm:h-[100dvh] sm:min-h-[100dvh] overflow-x-clip bg-[#fffef7]">
      {/* ============================================================== */}
      {/* 1. HERO BACKGROUND IMAGE (SINGLE CRISP PHOTO FOR ALL SCREENS)  */}
      {/* ============================================================== */}
      <div
        ref={heroRef}
        className="absolute inset-0 w-full h-full overflow-hidden bg-black z-0 pointer-events-none"
        style={{
          clipPath: hasPlayedHomeIntro
            ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
            : "polygon(0% 45%, 0% 45%, 0% 55%, 0% 55%)",
          WebkitClipPath: hasPlayedHomeIntro
            ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
            : "polygon(0% 45%, 0% 45%, 0% 55%, 0% 55%)",
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
          transform: "translateZ(0)",
          WebkitTransform: "translateZ(0)",
          willChange: "clip-path, -webkit-clip-path",
        }}
        aria-hidden="true"
      >
        <div
          ref={mediaRef}
          className="relative w-full h-full overflow-hidden"
          style={{
            willChange: "transform",
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
            transformOrigin: "center center",
            WebkitTransformOrigin: "center center",
            transform: hasPlayedHomeIntro
              ? "none"
              : "scale(0.28) rotate(-10deg)",
          }}
        >
          {/* Exactly one high-resolution photo across all viewports, cropped naturally with crisp focal framing */}
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            quality={85}
            className="object-cover object-[70%_center] sm:object-[65%_center] lg:object-center"
          />

          {/* Ambient cinematic warm-shadow overlay — preserves rich tungsten warmth while guaranteeing contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/75 pointer-events-none" />
          <div className="absolute inset-0 bg-black/25 pointer-events-none" />
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. HERO CONTENT SECTION (RESPONSIVE ALIGNMENT & SAFE AREA)     */}
      {/* ============================================================== */}
      <section
        ref={containerRef}
        className="relative z-20 w-full h-[100svh] min-h-[100svh] sm:h-[100dvh] sm:min-h-[100dvh] flex flex-col justify-between pt-[72px] sm:pt-[80px] md:pt-[96px] pb-[max(2.25rem,calc(env(safe-area-inset-bottom,0px)+1.25rem))] pointer-events-auto"
      >
        {/* Top spacer for breathing room below fixed header */}
        <div className="w-full h-1 sm:h-3 md:h-5 shrink-0" />

        {/* Center Typography, Announcement & CTA */}
        <div
          ref={heroContentRef}
          className="my-auto py-2 sm:py-6 md:py-8 flex flex-col items-center justify-center text-center px-6 sm:px-8 md:px-12 lg:px-16 w-full max-w-[105rem] mx-auto pointer-events-auto"
          style={{
            opacity: hasPlayedHomeIntro ? 1 : 0,
            willChange: "opacity",
          }}
        >
          <div className="max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto flex flex-col items-center">
            {/* Display Poster Headline: Switzer light weight 300 per DESIGN.md */}
            <div className="overflow-hidden py-1 mb-3 sm:mb-5 max-w-full">
              <h1
                ref={(el) => {
                  titleLinesRef.current[0] = el;
                }}
                className="text-white font-sans font-light uppercase text-3xl sm:text-4xl md:text-5xl lg:text-[72px] xl:text-[84px] tracking-[-0.03em] sm:tracking-[-0.04em] leading-[1.12] sm:leading-[1.04] md:leading-[1.0] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] max-w-5xl break-words"
                style={{
                  willChange: "transform",
                  transform: hasPlayedHomeIntro ? "translateY(0%)" : "translateY(115%)",
                }}
              >
                {announcementTitle}
              </h1>
            </div>

            {/* Shortened Concise Announcement */}
            <div
              ref={announcementRef}
              className="max-w-xl mx-auto mb-5 sm:mb-8 px-2 sm:px-0"
              style={{
                willChange: "transform, opacity",
                opacity: hasPlayedHomeIntro ? 1 : 0,
                transform: hasPlayedHomeIntro ? "translateY(0px)" : "translateY(20px)",
              }}
            >
              <p className="text-white/90 font-sans font-light text-xs sm:text-base md:text-lg leading-[1.5] sm:leading-[1.55] tracking-[-0.018em] drop-shadow-md">
                {announcementText}
              </p>
            </div>

            {/* Action CTAs: Explore Courses + Talk to Admissions */}
            <div
              ref={ctaRef}
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-1"
              style={{
                willChange: "transform, opacity",
                opacity: hasPlayedHomeIntro ? 1 : 0,
                transform: hasPlayedHomeIntro ? "translateY(0px)" : "translateY(20px)",
              }}
            >
              <a
                href="#courses"
                className="text-[#ffd001] hover:text-white font-mono text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.24em] uppercase transition-colors duration-200 cursor-pointer py-2 px-3 leading-none no-underline"
              >
                {ctaText}
              </a>
              <Link
                href="/contact"
                className="text-white/80 hover:text-[#ffd001] font-mono text-xs sm:text-sm tracking-[0.18em] sm:tracking-[0.22em] uppercase transition-colors duration-200 cursor-pointer py-2 px-3 leading-none no-underline border-b border-white/20 hover:border-[#ffd001]"
              >
                Contact →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Information Bar (Kathmandu Studio & Est. 2011): Exact same padding as navbar */}
        <div
          ref={bottomBarRef}
          className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pl-[max(1.5rem,env(safe-area-inset-left,0px))] pr-[max(1.5rem,env(safe-area-inset-right,0px))] flex flex-row items-center justify-between pt-2 pb-0 text-white/90 font-mono text-[11px] sm:text-xs md:text-sm tracking-[0.12em] sm:tracking-[0.18em] md:tracking-[0.22em] uppercase font-medium pointer-events-auto shrink-0"
          style={{
            willChange: "transform, opacity",
            opacity: hasPlayedHomeIntro ? 1 : 0,
            transform: hasPlayedHomeIntro ? "translateY(0px)" : "translateY(15px)",
          }}
        >
          {/* LEFT: KATHMANDU STUDIO */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/70" />
            <span className="whitespace-nowrap">{heroData.bottomBar.leftText}</span>
          </div>

          {/* RIGHT: EST. 2026 */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            <span className="whitespace-nowrap">{heroData.bottomBar.rightText}</span>
            <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#ffd001]" />
          </div>
        </div>
      </section>

      {/* Right-Side Editorial Display Text: Sits on wide viewports >= 1380px */}
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
          <span>{heroData.editorialTag.primary}</span>
          <span className="text-3xl lg:text-4xl font-sans inline-block text-[#ffd001]">
            {heroData.editorialTag.symbol}
          </span>
          <span>{heroData.editorialTag.secondary}</span>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 3. PROGRESS BAR CONTAINER (ANCHORS "LOADING" & SLIDING NUMBER) */}
      {/* Expands from width: 0% to 100% so the counter slides with the strip */}
      {/* ============================================================== */}
      <div
        ref={progressBarRef}
        className="fixed top-1/2 -translate-y-1/2 left-0 h-[10%] min-h-[56px] sm:min-h-[64px] flex items-center justify-between px-6 sm:px-8 md:px-12 lg:px-16 pl-[max(1.5rem,env(safe-area-inset-left,0px))] pr-[max(1.5rem,env(safe-area-inset-right,0px))] z-40 overflow-hidden pointer-events-none"
        style={{
          width: hasPlayedHomeIntro ? "100%" : "0%",
          opacity: hasPlayedHomeIntro ? 0 : 1,
          display: hasPlayedHomeIntro ? "none" : "flex",
          willChange: "width, opacity",
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
        }}
      >
        <span
          ref={loadingLabelRef}
          className="flex items-center gap-2.5 text-[#ffd001] font-mono text-xs md:text-sm font-semibold tracking-[0.25em] uppercase whitespace-nowrap shrink-0 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#ffd001] animate-pulse" />
          {heroData.loadingLabel}
        </span>

        <span
          ref={counterRef}
          className="text-[#ffd001] font-mono text-xs md:text-sm font-semibold tracking-[0.25em] whitespace-nowrap shrink-0 text-right drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
        >
          /{String(counterDisplay).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
