"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { Menu, X, ArrowUpRight } from "lucide-react";

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
  ctaText = "[ EXPLORE COURSES ]",
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  // Lock body scroll when mobile menu drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

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
        const portfolioSection = document.querySelector("#portfolio");
        let insideDark = false;
        if (coursesSection) {
          const cRect = coursesSection.getBoundingClientRect();
          if (cRect.top <= 84 && cRect.bottom > 84) insideDark = true;
        }
        if (portfolioSection) {
          const pRect = portfolioSection.getBoundingClientRect();
          if (pRect.top <= 84 && pRect.bottom > 84) insideDark = true;
        }
        setIsInsideCourses(insideDark);
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
          className={`absolute inset-0 w-full h-[64px] sm:h-[72px] md:h-[84px] transition-all duration-300 pointer-events-none ${isInsideCourses
            ? "bg-[#0a0a0a]/95 backdrop-blur-md"
            : isScrolledPastHero
              ? "bg-[#fffef7]/95 backdrop-blur-md"
              : "bg-transparent"
            }`}
        />

        <div className="w-full max-w-[105rem] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 pointer-events-none">
          <div className="relative w-full h-[64px] sm:h-[72px] md:h-[84px] flex items-center justify-between pointer-events-auto">
            {/* LEFT LOGO: Anchors flush to the left padding gutter */}
            <div
              ref={logoWrapperRef}
              className="absolute top-1/2 -translate-y-1/2 left-0 h-[40px] sm:h-[44px] md:h-[46px] flex items-center z-50 pointer-events-auto"
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
                  <span className="font-mono font-bold tracking-[0.1em] text-lg sm:text-2xl md:text-3xl">
                    {brandPrimary}
                  </span>
                  <span className="font-mono font-normal tracking-[0.2em] text-lg sm:text-2xl md:text-3xl text-neutral-800">
                    {brandSecondary}
                  </span>
                </div>

                {/* Official Real IIP Nepal Website Logo ONLY */}
                <div
                  ref={officialLogoRef}
                  className="hidden items-center transition-transform duration-300 group-hover:scale-105"
                >
                  <div className="relative w-[42px] sm:w-[50px] md:w-[60px] h-[30px] sm:h-[36px] md:h-[44px] shrink-0">
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

            {/* MIDDLE NAVIGATION LINKS (Visible on lg >= 1024px screens) */}
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
                    className={`font-mono text-xs lg:text-[13px] uppercase tracking-[0.2em] font-medium transition-colors duration-200 cursor-pointer drop-shadow-sm leading-none whitespace-nowrap ${isInsideCourses
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

            {/* RIGHT ACTIONS: Enroll CTA (Desktop only) + Minimalist Lucide Menu Trigger (Mobile/Tablet) */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 flex items-center z-50 pointer-events-none">
              <div
                ref={enrollBtnRef}
                className="flex items-center pointer-events-auto"
                style={{ willChange: "transform, opacity" }}
              >
                {/* Desktop-only Enroll button: hidden on mobile/tablet where hamburger menu is active */}
                <Link
                  href={enrollHref}
                  className="hidden lg:inline-flex items-center justify-center px-7 lg:px-9 py-3.5 lg:py-4 rounded-full bg-[#ffd001] hover:bg-white text-black font-mono text-xs md:text-sm font-medium tracking-[0.16em] uppercase transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer leading-none shrink-0"
                >
                  {enrollText}
                </Link>

                {/* Minimalist Lucide Menu Trigger for Tablet & Mobile (< 1024px) */}
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(true)}
                  aria-label="Open menu"
                  aria-expanded={isMobileMenuOpen}
                  className={`lg:hidden w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer border ${
                    isInsideCourses
                      ? "border-white/20 bg-black/40 text-white hover:border-[#ffd001]"
                      : isScrolledPastHero
                        ? "border-black/15 bg-black/5 text-black hover:border-black"
                        : "border-white/20 bg-black/30 backdrop-blur-sm text-white hover:border-[#ffd001]"
                  }`}
                >
                  <Menu className="w-5 h-5 sm:w-5.5 sm:h-5.5" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ============================================================== */}
      {/* 2.5. RIGHT-SIDE SLIDE-IN MENU DRAWER (MOBILE & TABLET)         */}
      {/* ============================================================== */}
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer Panel: Slides in smoothly from the right side */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full max-w-[340px] sm:max-w-md h-[100dvh] bg-[#0a0a0a] text-white z-[70] flex flex-col justify-between transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-2xl border-l border-white/10 lg:hidden ${
          isMobileMenuOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Site Navigation"
      >
        {/* Top Header Row inside Drawer: Logo + Lucide X Close Icon */}
        <div className="w-full px-6 sm:px-8 h-[64px] sm:h-[72px] md:h-[84px] flex items-center justify-between border-b border-white/10 shrink-0">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-1.5"
          >
            <div className="relative w-[42px] sm:w-[48px] h-[30px] sm:h-[34px]">
              <Image
                src="/images/iip-official-logo-white.svg"
                alt="IIP Academy"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Minimalist Lucide Close Icon */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
            className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 bg-white/10 text-white cursor-pointer hover:border-[#ffd001] hover:text-[#ffd001] transition-colors"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Drawer Center Nav Links: Clean, minimal editorial list */}
        <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-8 flex flex-col justify-between">
          <nav className="flex flex-col gap-4">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="group flex items-center justify-between py-2.5 text-white/90 hover:text-[#ffd001] transition-colors"
              >
                <span className="font-sans font-light text-2xl sm:text-3xl tracking-tight group-hover:translate-x-1 transition-transform duration-200">
                  {item.label}
                </span>
                <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#ffd001] transition-colors shrink-0" strokeWidth={1.5} />
              </a>
            ))}
          </nav>

          {/* Quick Enroll CTA inside menu */}
          <div className="pt-6 border-t border-white/10 mt-6">
            <Link
              href={enrollHref}
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex w-full items-center justify-center py-3.5 rounded-full bg-[#ffd001] hover:bg-white text-black font-mono text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase transition-all duration-200"
            >
              {enrollText} — Intake 2026
            </Link>
          </div>
        </div>

        {/* Drawer Bottom Metadata Row */}
        <div className="w-full px-6 sm:px-8 py-4 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-white/50 tracking-wider shrink-0">
          <span>KATHMANDU STUDIO</span>
          <a
            href="mailto:info@iipnepal.com"
            className="hover:text-[#ffd001] transition-colors"
          >
            INFO@IIPNEPAL.COM
          </a>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 3. HERO CONTENT SECTION (SCROLLS UP NATURALLY OVER PINNED IMAGE) */}
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
        >
          <div className="max-w-4xl xl:max-w-5xl mx-auto flex flex-col items-center">
            {/* Display Poster Headline: Switzer light weight 300 per DESIGN.md */}
            <div className="overflow-hidden py-1 mb-3 sm:mb-6 max-w-full">
              <h1
                ref={(el) => {
                  titleLinesRef.current[0] = el;
                }}
                className="text-white font-sans font-light uppercase text-2xl sm:text-4xl md:text-5xl lg:text-[76px] xl:text-[84px] tracking-[-0.03em] sm:tracking-[-0.04em] leading-[1.12] sm:leading-[1.04] md:leading-[1.0] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] max-w-5xl break-words"
                style={{ willChange: "transform" }}
              >
                {announcementTitle}
              </h1>
            </div>

            {/* Shortened Concise Announcement (Only 1-2 lines) */}
            <div
              ref={announcementRef}
              className="max-w-xl mx-auto mb-5 sm:mb-8 px-2 sm:px-0"
              style={{ willChange: "transform, opacity" }}
            >
              <p className="text-white/85 font-sans font-light text-xs sm:text-base md:text-lg leading-[1.5] sm:leading-[1.55] tracking-[-0.018em] drop-shadow-md">
                {announcementText}
              </p>
            </div>

            {/* Single CTA Link: "[ EXPLORE COURSES ]" without underline */}
            <div
              ref={ctaRef}
              className="flex items-center justify-center"
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
        className="fixed right-6 sm:right-8 md:right-12 lg:right-16 top-1/2 -translate-y-1/2 z-10 hidden min-[1380px]:flex items-center justify-center pointer-events-none select-none text-[#ffd001]"
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
