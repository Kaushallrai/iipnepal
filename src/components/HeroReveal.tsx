"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";

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
  imageSrc = "/images/hero-photographer.jpg",
  imageAlt = "IIP Nepal Photography Master Archive",
  brandPrimary = "IIP",
  brandSecondary = "NEPAL",
  announcementTitle = "WELCOME TO THE IIP CENTRE NEPAL",
  announcementText = "Indian Institute of Photography launches in Kathmandu with White Hat Events — led by alumnus Additya Shrestha.",
  ctaText = "( EXPLORE COURSES )",
  navItems = [
    { label: "Courses", href: "#courses" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  enrollText = "Enroll Now",
  enrollHref = "#enroll",
}: HeroRevealProps) {
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

  // Top navigation bar elements
  const fullHeaderBgRef = useRef<HTMLDivElement>(null);
  const logoWrapperRef = useRef<HTMLDivElement>(null);
  const initialTextLogoRef = useRef<HTMLDivElement>(null);
  const officialLogoRef = useRef<HTMLDivElement>(null);
  const navMenuRef = useRef<HTMLElement>(null);
  const enrollBtnRef = useRef<HTMLDivElement>(null);

  // Right-side vertical display text
  const editorialTagRef = useRef<HTMLDivElement>(null);

  // Bottom information bar
  const bottomBarRef = useRef<HTMLDivElement>(null);

  const [counterDisplay, setCounterDisplay] = useState(0);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const [isInsideCourses, setIsInsideCourses] = useState(false);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const sy = window.scrollY;

        // Smoothly fade hero elements as they move up, preventing collision with the fixed navbar
        const fade = Math.max(0, 1 - sy / 280);
        if (heroContentRef.current) {
          heroContentRef.current.style.opacity = String(fade);
        }
        if (editorialTagRef.current) {
          editorialTagRef.current.style.opacity = String(fade);
        }
        if (bottomBarRef.current) {
          const bottomFade = Math.max(0, 1 - sy / 160);
          bottomBarRef.current.style.opacity = String(bottomFade);
        }

        const whatSection = document.querySelector(".section_what");
        if (whatSection) {
          const rect = whatSection.getBoundingClientRect();
          setIsScrolledPastHero(rect.top <= 84);
        } else {
          setIsScrolledPastHero(sy > window.innerHeight - 84);
        }

        const coursesSection = document.querySelector("#courses");
        if (coursesSection) {
          const cRect = coursesSection.getBoundingClientRect();
          // Navbar height is around 84px.
          // True when top of courses section reaches navbar and bottom hasn't passed above it.
          setIsInsideCourses(cRect.top <= 84 && cRect.bottom > 84);
        } else {
          setIsInsideCourses(false);
        }
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

    // Initial state:
    // Pinned image clipped to 0% width horizontal strip at center (45% to 55%)
    gsap.set(heroRef.current, {
      clipPath: "polygon(0% 45%, 0% 45%, 0% 55%, 0% 55%)",
    });

    // Progress bar width starts at 0%
    gsap.set(progressBarRef.current, {
      width: "0%",
      opacity: 1,
    });

    if (loadingLabelRef.current) {
      gsap.set(loadingLabelRef.current, { opacity: 1 });
    }
    if (counterRef.current) {
      gsap.set(counterRef.current, { opacity: 1 });
    }

    // Media container initially scaled down and rotated -18 degrees in center
    gsap.set(mediaRef.current, {
      scale: 0.18,
      rotation: -18,
      transformOrigin: "center center",
    });

    // 1. Logo initial state: centered horizontally in the screen
    if (logoWrapperRef.current) {
      gsap.set(logoWrapperRef.current, {
        left: "50%",
        xPercent: -50,
        x: 0,
        opacity: 1,
      });
    }

    // Initial text visible in dark ink
    if (initialTextLogoRef.current) {
      gsap.set(initialTextLogoRef.current, {
        opacity: 1,
        display: "flex",
      });
    }

    // Official logo mark hidden initially during loading bar fill
    if (officialLogoRef.current) {
      gsap.set(officialLogoRef.current, {
        opacity: 0,
        display: "none",
        scale: 0.9,
      });
    }

    // 2. Middle navigation links hidden initially
    if (navMenuRef.current) {
      gsap.set(navMenuRef.current, {
        opacity: 0,
        y: -15,
        pointerEvents: "none",
      });
    }

    // 3. Enroll button hidden initially
    if (enrollBtnRef.current) {
      gsap.set(enrollBtnRef.current, {
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
    });
    timelineRef.current = tl;
    if (typeof window !== "undefined") {
      (window as unknown as { heroTimeline: gsap.core.Timeline }).heroTimeline = tl;
    }

    const counterObj = { val: 0 };

    // --- PHASE 1: Initial expand (0% to 28% width) ---
    tl.to(
      heroRef.current,
      {
        clipPath: "polygon(0% 45%, 28% 45%, 28% 55%, 0% 55%)",
        duration: 1.4,
      },
      0
    );

    tl.to(
      progressBarRef.current,
      {
        width: "28%",
        duration: 1.4,
      },
      0
    );

    tl.to(
      counterObj,
      {
        val: 28,
        duration: 1.4,
        onUpdate: () => setCounterDisplay(Math.floor(counterObj.val)),
      },
      0
    );

    // --- PHASE 2: Full horizontal stretch across screen (28% to 100%) ---
    tl.to(
      heroRef.current,
      {
        clipPath: "polygon(0% 45%, 100% 45%, 100% 55%, 0% 55%)",
        duration: 1.6,
      },
      1.5
    );

    tl.to(
      progressBarRef.current,
      {
        width: "100%",
        duration: 1.6,
      },
      1.5
    );

    tl.to(
      counterObj,
      {
        val: 100,
        duration: 1.6,
        onUpdate: () => setCounterDisplay(Math.floor(counterObj.val)),
      },
      1.5
    );

    // Concurrently scale up media during the horizontal stretch
    tl.to(
      mediaRef.current,
      {
        scale: 0.35,
        rotation: -7,
        duration: 1.6,
      },
      1.5
    );

    // --- PHASE 3: The Big Vertical Unfurl (100% reveal) ---
    const revealTime = 3.25;

    // Fade out loading progress labels
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
        duration: 1.25,
        ease,
      },
      revealTime + 0.25
    );

    // Concurrently scale up and un-rotate the photo
    tl.to(
      mediaRef.current,
      {
        scale: 1,
        rotation: 0,
        duration: 1.35,
        ease,
      },
      revealTime + 0.25
    );

    // --- PHASE 4: Transform Top Section Into Navigation Bar ---
    // Logo shifts to the left edge of the padded container (0%)
    if (logoWrapperRef.current) {
      tl.to(
        logoWrapperRef.current,
        {
          left: "0%",
          xPercent: 0,
          x: 0,
          duration: 1.2,
          ease,
        },
        revealTime + 0.25
      );
    }

    // Cross-fade: Hide initial text "IIP NEPAL" and show the official brand logo
    if (initialTextLogoRef.current) {
      tl.to(
        initialTextLogoRef.current,
        {
          opacity: 0,
          duration: 0.45,
          ease: "power2.out",
          onComplete: () => {
            if (initialTextLogoRef.current) {
              initialTextLogoRef.current.style.display = "none";
            }
          },
        },
        revealTime + 0.25
      );
    }

    if (officialLogoRef.current) {
      tl.set(
        officialLogoRef.current,
        {
          display: "flex",
          opacity: 0,
          scale: 0.92,
        },
        revealTime + 0.35
      );

      tl.to(
        officialLogoRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.65,
          ease: "power2.out",
        },
        revealTime + 0.4
      );
    }

    // Middle navigation links slide down smoothly
    if (navMenuRef.current) {
      tl.to(
        navMenuRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
          onStart: () => {
            if (navMenuRef.current) navMenuRef.current.style.pointerEvents = "auto";
          },
        },
        revealTime + 0.45
      );
    }

    // Enroll button on the right slides down
    if (enrollBtnRef.current) {
      tl.to(
        enrollBtnRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power2.out",
          onStart: () => {
            if (enrollBtnRef.current) enrollBtnRef.current.style.pointerEvents = "auto";
          },
        },
        revealTime + 0.5
      );
    }

    // Right side vertical display text slides in smoothly
    if (editorialTagRef.current) {
      tl.to(
        editorialTagRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
        },
        revealTime + 0.55
      );
    }

    // --- PHASE 5: Hero Center Typography Staggered Reveal ---
    const textStartTime = revealTime + 0.7;

    if (heroContentRef.current) {
      tl.set(heroContentRef.current, { opacity: 1 }, textStartTime);
    }

    const validLines = titleLinesRef.current.filter(Boolean);
    if (validLines.length > 0) {
      tl.to(
        validLines,
        {
          y: "0%",
          duration: 1.05,
          stagger: 0.08,
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
          duration: 0.8,
          ease: "power2.out",
        },
        textStartTime + 0.2
      );
    }

    if (ctaRef.current) {
      tl.to(
        ctaRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        textStartTime + 0.35
      );
    }

    // --- PHASE 6: Bottom Bar (Kathmandu Studio & Est. 2026) ---
    if (bottomBarRef.current) {
      tl.to(
        bottomBarRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
        },
        textStartTime + 0.35
      );
    }
  }, []);

  useEffect(() => {
    runAnimation();
    return () => {
      if (timelineRef.current) timelineRef.current.kill();
    };
  }, [runAnimation]);

  return (
    <div className="relative w-full overflow-x-clip">
      {/* ============================================================== */}
      {/* 1. PINNED BACKGROUND IMAGE (FIXED TO VIEWPORT, 100VH, Z-0)      */}
      {/* Goes behind the navbar at top: 0 and stays pinned while scroll */}
      {/* ============================================================== */}
      <div
        ref={heroRef}
        className="fixed inset-0 w-full h-screen h-[100dvh] overflow-hidden bg-black z-0 pointer-events-none"
        style={{
          clipPath: "polygon(0% 45%, 0% 45%, 0% 55%, 0% 55%)",
          willChange: "clip-path",
        }}
        aria-hidden="true"
      >
        <div
          ref={mediaRef}
          className="relative w-full h-full overflow-hidden"
          style={{ willChange: "transform" }}
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
          <div className="absolute inset-0 bg-black/25 backdrop-brightness-[0.9]" />
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. TOP NAVBAR (FIXED OVER TOP, BEHIND-IMAGE TRANSPARENT)       */}
      {/* ============================================================== */}
      <header className="fixed top-0 left-0 right-0 w-full z-50">
        {/* Full-Width Background Bar on scroll */}
        <div
          ref={fullHeaderBgRef}
          className={`absolute inset-0 w-full h-[72px] sm:h-[76px] md:h-[84px] transition-all duration-300 pointer-events-none ${
            isInsideCourses
              ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10 shadow-xs"
              : isScrolledPastHero
              ? "bg-[#fffef7]/95 backdrop-blur-md border-b border-black/10 shadow-xs"
              : "bg-transparent"
          }`}
        />

        <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pointer-events-none">
          <div className="relative w-full h-[72px] sm:h-[76px] md:h-[84px] flex items-center justify-between pointer-events-auto">
            {/* LEFT LOGO: Anchors flush to the left padding gutter */}
            <div
              ref={logoWrapperRef}
              className="absolute top-1/2 -translate-y-1/2 left-0 h-[44px] md:h-[46px] flex items-center z-50 pointer-events-auto"
            >
              <Link
                href="/"
                className="group flex items-center cursor-pointer"
                title="IIP Academy Nepal"
              >
                {/* Initial Loading Text: "IIP NEPAL" */}
                <div
                  ref={initialTextLogoRef}
                  className="flex items-center gap-1.5 sm:gap-2 text-[#111111]"
                >
                  <span className="font-mono font-bold tracking-[0.1em] text-xl sm:text-2xl md:text-3xl">
                    {brandPrimary}
                  </span>
                  <span className="font-mono font-normal tracking-[0.2em] text-xl sm:text-2xl md:text-3xl text-neutral-800">
                    {brandSecondary}
                  </span>
                </div>

                {/* Official Real IIP Nepal Website Logo ONLY */}
                <div
                  ref={officialLogoRef}
                  className="hidden items-center transition-transform duration-300 group-hover:scale-105"
                >
                  <div className="relative w-[48px] sm:w-[54px] md:w-[60px] h-[34px] sm:h-[40px] md:h-[44px] shrink-0">
                    <Image
                      src={
                        isInsideCourses
                          ? "/images/iip-official-logo-white.svg"
                          : isScrolledPastHero
                          ? "/images/iip-official-logo-dark.svg"
                          : "/images/iip-official-logo-white.svg"
                      }
                      alt="IIP Academy Official Logo"
                      fill
                      priority
                      className="object-contain drop-shadow-md transition-all duration-300"
                    />
                  </div>
                </div>
              </Link>
            </div>

            {/* MIDDLE NAVIGATION LINKS */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[44px] md:h-[46px] hidden lg:flex items-center justify-center z-50 pointer-events-none">
              <nav
                ref={navMenuRef}
                className="flex items-center justify-center gap-6 xl:gap-10"
                style={{ willChange: "transform, opacity" }}
              >
                {navItems.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className={`font-mono text-xs lg:text-[13px] uppercase tracking-[0.2em] font-medium transition-colors duration-200 cursor-pointer drop-shadow-sm leading-none whitespace-nowrap ${
                      isInsideCourses
                        ? "text-white/85 hover:text-[#ffd001]"
                        : isScrolledPastHero
                        ? "text-black hover:text-[#666666]"
                        : "text-white/85 hover:text-[#ffd001]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* RIGHT ENROLL BUTTON: Anchors flush to the right padding gutter */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 h-[44px] md:h-[46px] flex items-center z-50 pointer-events-none">
              <div
                ref={enrollBtnRef}
                className="flex items-center pointer-events-auto"
                style={{ willChange: "transform, opacity" }}
              >
                <Link
                  href={enrollHref}
                  className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#ffd001] hover:bg-white text-black font-mono text-xs sm:text-sm font-semibold tracking-[0.14em] sm:tracking-[0.16em] uppercase transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer leading-none"
                >
                  {enrollText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ============================================================== */}
      {/* 3. HERO CONTENT SECTION (SCROLLS UP NATURALLY OVER PINNED IMAGE) */}
      {/* ============================================================== */}
      <section
        ref={containerRef}
        className="relative z-10 w-full min-h-screen min-h-[100dvh] flex flex-col justify-between pt-[88px] sm:pt-[96px] md:pt-[104px] pb-6 sm:pb-8 pointer-events-auto"
      >
        {/* Top spacer */}
        <div className="w-full h-2 sm:h-6 shrink-0" />

        {/* Center Typography, Announcement & CTA */}
        <div
          ref={heroContentRef}
          className="my-auto py-6 sm:py-10 flex flex-col items-center justify-center text-center px-6 sm:px-8 md:px-12 lg:px-16 pointer-events-auto"
        >
          <div className="max-w-4xl xl:max-w-5xl mx-auto flex flex-col items-center">
            {/* Display Poster Headline: Switzer light weight 300 per DESIGN.md */}
            <div className="overflow-hidden py-1 mb-4 sm:mb-6 max-w-full">
              <h1
                ref={(el) => {
                  titleLinesRef.current[0] = el;
                }}
                className="text-white font-sans font-light uppercase text-3xl sm:text-5xl md:text-6xl lg:text-[76px] xl:text-[84px] tracking-[-0.035em] sm:tracking-[-0.04em] leading-[1.08] sm:leading-[1.04] md:leading-[1.0] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] max-w-5xl break-words"
                style={{ willChange: "transform" }}
              >
                {announcementTitle}
              </h1>
            </div>

            {/* Shortened Concise Announcement (Only 1-2 lines) */}
            <div
              ref={announcementRef}
              className="max-w-xl mx-auto mb-6 sm:mb-8"
              style={{ willChange: "transform, opacity" }}
            >
              <p className="text-white/85 font-sans font-light text-sm sm:text-base md:text-lg leading-[1.5] tracking-[-0.018em] drop-shadow-md">
                {announcementText}
              </p>
            </div>

            {/* Single CTA Link: "( EXPLORE COURSES )" */}
            <div
              ref={ctaRef}
              className="flex items-center justify-center"
            >
              <a
                href="#courses"
                className="text-[#ffd001] hover:text-white font-mono text-xs sm:text-sm tracking-[0.24em] uppercase transition-colors duration-200 cursor-pointer py-1.5 px-4 border-b border-[#ffd001]/50 hover:border-white leading-none"
              >
                {ctaText}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Information Bar (Kathmandu Studio & Est. 2026): Exact same padding as navbar */}
        <div
          ref={bottomBarRef}
          className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex flex-row items-center justify-between pb-8 sm:pb-10 pt-4 text-white/90 font-mono text-xs sm:text-sm tracking-[0.18em] sm:tracking-[0.22em] uppercase font-medium pointer-events-auto shrink-0"
        >
          {/* LEFT: KATHMANDU STUDIO */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <span className="inline-block w-2 h-2 rounded-full bg-white/70" />
            <span>KATHMANDU STUDIO</span>
          </div>

          {/* RIGHT: EST. 2026 */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <span>EST. 2026</span>
            <span className="inline-block w-2 h-2 rounded-full bg-[#ffd001]" />
          </div>
        </div>

        {/* Right-Side Editorial Display Text: Big, centered vertically, hidden on screens < 1480px */}
        <div
          className="fixed right-6 sm:right-8 md:right-12 lg:right-16 top-1/2 -translate-y-1/2 z-20 hidden min-[1480px]:flex items-center justify-center pointer-events-none select-none text-[#ffd001]"
        >
          <div
            ref={editorialTagRef}
            className="font-editorial text-5xl lg:text-6xl xl:text-7xl tracking-[0.24em] font-normal uppercase select-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] flex items-center justify-center gap-6"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              willChange: "transform, opacity",
            }}
          >
            <span>IIP</span>
            <span className="text-3xl lg:text-4xl font-sans inline-block text-[#ffd001]">
              ✱
            </span>
            <span>NEPAL</span>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. PROGRESS BAR CONTAINER (ANCHORS "LOADING" & "/COUNTER")     */}
      {/* ============================================================== */}
      <div
        ref={progressBarRef}
        className="fixed top-1/2 -translate-y-1/2 left-0 h-[10%] min-h-[64px] flex items-center justify-between px-6 md:px-12 z-40 overflow-hidden pointer-events-none w-0"
        style={{
          width: "0%",
          willChange: "width",
        }}
      >
        <span
          ref={loadingLabelRef}
          className="flex items-center gap-2.5 text-[#ffd001] font-mono text-xs md:text-sm font-semibold tracking-[0.25em] uppercase whitespace-nowrap shrink-0"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#ffd001] animate-pulse" />
          LOADING
        </span>

        <span
          ref={counterRef}
          className="text-[#ffd001] font-mono text-xs md:text-sm font-semibold tracking-[0.25em] whitespace-nowrap shrink-0 text-right"
        >
          /{String(counterDisplay).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
