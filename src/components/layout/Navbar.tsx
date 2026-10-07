"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface NavbarProps {
  brandPrimary?: string;
  brandSecondary?: string;
  navItems?: NavItem[];
  enrollText?: string;
  enrollHref?: string;
  activePage?: string;
}

export default function Navbar({
  brandPrimary = "IIP",
  brandSecondary = "NEPAL",
  navItems = [
    { label: "Courses", href: "/courses" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  enrollText = "Enroll Now",
  enrollHref = "/courses",
  activePage,
}: NavbarProps): React.JSX.Element {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(isHome);

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

  // Dynamically detect scroll position and dark sections under the fixed navbar
  useEffect(() => {
    const evaluateNavbarTheme = () => {
      if (typeof window === "undefined") return;

      const sy = window.scrollY;
      setIsScrolled(sy > 20);

      const navCheckY = 45; // Test point vertical coordinate within the fixed navbar (0 - 80px)

      // 1. On homepage: check if still within the Hero section
      if (isHome) {
        const whatSection = document.querySelector(".section_what, #about");
        if (whatSection) {
          const wRect = whatSection.getBoundingClientRect();
          // If WhatWeDo section has not reached the navbar check line, we're over the dark hero
          if (wRect.top > navCheckY) {
            setIsDarkSection(true);
            return;
          }
        } else if (sy < window.innerHeight - 80) {
          setIsDarkSection(true);
          return;
        }
      }

      // 2. Query all elements designated as dark across all pages
      const darkElements = document.querySelectorAll<HTMLElement>(
        '[data-theme="dark"], .theme-dark, #courses, #portfolio, footer, .section_footer, .section_about-cta, .section_courses-cta, .section_course-enroll-cta, .section_portfolio-cta, .section_portfolio-course-banner'
      );

      for (let i = 0; i < darkElements.length; i++) {
        const el = darkElements[i];
        const rect = el.getBoundingClientRect();
        // Check if the navbar check line (y = 45) intersects with this dark element's visible bounding box
        if (rect.top <= navCheckY && rect.bottom > navCheckY) {
          setIsDarkSection(true);
          return;
        }
      }

      // 3. Fallback: Point check at the center of the navbar
      try {
        const centerX = window.innerWidth / 2;
        const elements = document.elementsFromPoint(centerX, navCheckY);
        for (const el of elements) {
          if (el.closest("header")) continue;
          const darkAncestor = el.closest(
            '[data-theme="dark"], .theme-dark, #courses, #portfolio, footer, .section_footer, .section_about-cta, .section_courses-cta, .section_course-enroll-cta, .section_portfolio-cta, .section_portfolio-course-banner'
          );
          if (darkAncestor) {
            setIsDarkSection(true);
            return;
          }
        }
      } catch {
        // Safe fallback
      }

      // If none matched, the surface under navbar is light
      setIsDarkSection(false);
    };

    // Run immediately on route change or mount
    evaluateNavbarTheme();

    // Check after brief timeouts to allow dynamic layouts and DOM mounting to settle
    const t1 = setTimeout(evaluateNavbarTheme, 50);
    const t2 = setTimeout(evaluateNavbarTheme, 150);

    // Native scroll and resize listeners
    window.addEventListener("scroll", evaluateNavbarTheme, { passive: true });
    window.addEventListener("resize", evaluateNavbarTheme, { passive: true });

    // Synchronize with Lenis smooth scroll if active
    let lenisUnsub: (() => void) | null = null;
    const lenis = (window as unknown as { lenis?: { on: (ev: string, cb: () => void) => void; off: (ev: string, cb: () => void) => void } }).lenis;
    if (lenis && typeof lenis.on === "function") {
      lenis.on("scroll", evaluateNavbarTheme);
      lenisUnsub = () => lenis.off("scroll", evaluateNavbarTheme);
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("scroll", evaluateNavbarTheme);
      window.removeEventListener("resize", evaluateNavbarTheme);
      if (lenisUnsub) lenisUnsub();
    };
  }, [pathname, isHome]);

  return (
    <>
      {/* ============================================================== */}
      {/* 1. TOP NAVBAR (FIXED OVER TOP)                                 */}
      {/* ============================================================== */}
      <header className="fixed top-0 left-0 right-0 w-full z-50 pt-[env(safe-area-inset-top,0px)]">
        {/* Full-Width Background Bar (covers under Dynamic Island / status bar) */}
        <div
          id="nav-full-header-bg"
          className={`absolute inset-0 w-full transition-colors duration-300 pointer-events-none ${
            isScrolled
              ? isDarkSection
                ? "bg-[#0a0a0a]/90 backdrop-blur-md"
                : "bg-[#fffef7]/90 backdrop-blur-md"
              : "bg-transparent"
          }`}
        />

        <div className="w-full max-w-[105rem] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 pl-[max(1.25rem,env(safe-area-inset-left,0px))] pr-[max(1.25rem,env(safe-area-inset-right,0px))] pointer-events-none">
          <div className="relative w-full h-[60px] sm:h-[68px] md:h-[80px] flex items-center justify-between pointer-events-auto">
            {/* LEFT LOGO: Anchors flush to the left padding gutter */}
            <div
              id="nav-logo-wrapper"
              className={`absolute top-1/2 -translate-y-1/2 h-[40px] sm:h-[44px] md:h-[46px] flex items-center z-50 pointer-events-auto ${
                isHome ? "left-1/2 -translate-x-1/2" : "left-0 translate-x-0"
              }`}
            >
              <Link
                href="/"
                className="group flex items-center cursor-pointer"
                title="IIP Academy Nepal"
              >
                {/* Initial Loading Text: "IIP NEPAL" (Visible initially on homepage loading) */}
                <div
                  id="nav-initial-text"
                  className={`items-center gap-1.5 sm:gap-2 text-[#111111] ${
                    isHome ? "flex" : "hidden"
                  }`}
                >
                  <span className="font-mono font-bold tracking-[0.1em] text-lg sm:text-2xl md:text-3xl">
                    {brandPrimary}
                  </span>
                  <span className="font-mono font-normal tracking-[0.2em] text-lg sm:text-2xl md:text-3xl text-neutral-800">
                    {brandSecondary}
                  </span>
                </div>

                {/* Official Real IIP Nepal Website Logo: Dual crossfade for dark & light surfaces */}
                <div
                  id="nav-official-logo"
                  className={`items-center transition-transform duration-300 group-hover:scale-105 ${
                    isHome ? "hidden opacity-0 scale-90" : "flex opacity-100 scale-100"
                  }`}
                >
                  <div className="relative w-[42px] sm:w-[50px] md:w-[60px] h-[30px] sm:h-[36px] md:h-[44px] shrink-0">
                    {/* White Logo (for dark surfaces) */}
                    <Image
                      src="/images/iip-official-logo-white.svg"
                      alt="IIP Academy Official Logo"
                      fill
                      priority
                      className={`object-contain transition-opacity duration-300 ${
                        isDarkSection ? "opacity-100 drop-shadow-md" : "opacity-0 pointer-events-none"
                      }`}
                    />
                    {/* Dark Logo (for light surfaces) */}
                    <Image
                      src="/images/iip-official-logo-dark.svg"
                      alt="IIP Academy Official Logo"
                      fill
                      priority
                      className={`object-contain transition-opacity duration-300 ${
                        isDarkSection ? "opacity-0 pointer-events-none" : "opacity-100 drop-shadow-none"
                      }`}
                    />
                  </div>
                </div>
              </Link>
            </div>

            {/* MIDDLE NAVIGATION LINKS (Visible on lg >= 1024px screens) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[44px] md:h-[46px] hidden lg:flex items-center justify-center z-50 pointer-events-none">
              <nav
                id="nav-menu"
                className={`flex items-center justify-center gap-6 xl:gap-10 ${
                  isHome
                    ? "opacity-0 -translate-y-3 pointer-events-none"
                    : "opacity-100 translate-y-0 pointer-events-auto"
                }`}
              >
                {navItems.map((item, idx) => {
                  const resolvedHref =
                    isHome && item.href.startsWith("/#")
                      ? item.href.substring(1)
                      : item.href;

                  const isActive =
                    pathname === item.href ||
                    (item.href === "/about" && pathname === "/about") ||
                    (item.href === "/contact" && pathname === "/contact") ||
                    (item.href === "/courses" && (pathname === "/courses" || pathname?.startsWith("/courses/"))) ||
                    (item.href === "/portfolio" && (pathname === "/portfolio" || pathname?.startsWith("/portfolio/"))) ||
                    (activePage && item.label.toLowerCase() === activePage.toLowerCase());

                  return (
                    <Link
                      key={idx}
                      href={resolvedHref}
                      className={`group relative inline-flex items-center py-1 font-mono text-xs lg:text-[13px] uppercase tracking-[0.2em] font-normal transition-colors duration-300 cursor-pointer leading-none whitespace-nowrap no-underline ${
                        isDarkSection
                          ? isActive
                            ? "text-[#ffd001] drop-shadow-sm"
                            : "text-white/85 hover:text-[#ffd001] drop-shadow-sm"
                          : isActive
                            ? "text-black drop-shadow-none"
                            : "text-black/75 hover:text-black drop-shadow-none"
                      }`}
                    >
                      <span>{item.label}</span>
                      {/* Architectural Signal Yellow hairline indicator */}
                      <span
                        className={`absolute -bottom-1.5 left-0 w-full h-[2px] bg-[#ffd001] transition-transform duration-300 ${
                          isActive
                            ? "scale-x-100 origin-left opacity-100"
                            : "scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left opacity-0 group-hover:opacity-100"
                        }`}
                        aria-hidden="true"
                      />
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* RIGHT ACTIONS: Enroll CTA (Desktop) + Minimalist Menu Trigger (Mobile/Tablet) */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 flex items-center z-50 pointer-events-none">
              <div
                id="nav-right-actions"
                className={`flex items-center pointer-events-auto ${
                  isHome
                    ? "opacity-0 -translate-y-3 pointer-events-none"
                    : "opacity-100 translate-y-0 pointer-events-auto"
                }`}
              >
                {/* Desktop-only Enroll button */}
                <Link
                  href={enrollHref}
                  className={`hidden lg:inline-flex items-center justify-center px-7 lg:px-9 py-3.5 lg:py-4 rounded-full bg-[#ffd001] text-black font-mono text-xs md:text-sm font-medium tracking-[0.16em] uppercase transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer leading-none shrink-0 ${
                    isDarkSection
                      ? "hover:bg-white hover:text-black"
                      : "hover:bg-black hover:text-[#fffef7]"
                  }`}
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
                    isDarkSection
                      ? "border-white/20 bg-black/40 text-white hover:border-[#ffd001]"
                      : "border-black/15 bg-black/5 text-black hover:border-black"
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
      {/* 2. RIGHT-SIDE SLIDE-IN MENU DRAWER (MOBILE & TABLET)           */}
      {/* ============================================================== */}
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full max-w-[340px] sm:max-w-md h-[100dvh] bg-[#0a0a0a] text-white z-[70] flex flex-col justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-2xl border-l border-white/10 lg:hidden ${
          isMobileMenuOpen ? "translate-x-0 pointer-events-auto visible" : "translate-x-full pointer-events-none invisible"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Site Navigation"
      >
        {/* Top Header Row inside Drawer (safe area top clearance for Dynamic Island / notch) */}
        <div className="w-full px-6 sm:px-8 pt-[env(safe-area-inset-top,0px)] h-[calc(64px+env(safe-area-inset-top,0px))] sm:h-[calc(72px+env(safe-area-inset-top,0px))] md:h-[calc(84px+env(safe-area-inset-top,0px))] flex items-center justify-between border-b border-white/10 shrink-0">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-1.5 touch-manipulation"
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

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
            className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 bg-white/10 text-white cursor-pointer hover:border-[#ffd001] hover:text-[#ffd001] active:scale-95 transition-all touch-manipulation"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Drawer Center Nav Links */}
        <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-6 sm:py-8 flex flex-col justify-between">
          <nav className="flex flex-col gap-3 sm:gap-4">
            {navItems.map((item, idx) => {
              const resolvedHref =
                isHome && item.href.startsWith("/#")
                  ? item.href.substring(1)
                  : item.href;

              const isActive =
                pathname === item.href ||
                (item.href === "/about" && pathname === "/about") ||
                (item.href === "/contact" && pathname === "/contact") ||
                (item.href === "/courses" && (pathname === "/courses" || pathname?.startsWith("/courses/"))) ||
                (item.href === "/portfolio" && (pathname === "/portfolio" || pathname?.startsWith("/portfolio/"))) ||
                item.label.toLowerCase() === activePage?.toLowerCase();

              return (
                <Link
                  key={idx}
                  href={resolvedHref}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`group flex items-center justify-between py-2.5 transition-colors no-underline touch-manipulation active:opacity-75 ${
                    isActive
                      ? "text-[#ffd001]"
                      : "text-white/80 hover:text-[#ffd001]"
                  }`}
                >
                  <span className="font-sans font-light text-2xl sm:text-3xl tracking-tight group-hover:translate-x-1 transition-transform duration-200">
                    {item.label}
                  </span>
                  <ArrowUpRight
                    className={`w-4 h-4 transition-colors shrink-0 ${
                      isActive
                        ? "text-[#ffd001]"
                        : "text-white/40 group-hover:text-[#ffd001]"
                    }`}
                    strokeWidth={1.5}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Quick Enroll CTA inside menu */}
          <div className="pt-6 border-t border-white/10 mt-6">
            <Link
              href={enrollHref}
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex w-full items-center justify-center py-3.5 rounded-full bg-[#ffd001] hover:bg-white active:scale-[0.99] text-black font-mono text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase transition-all duration-200 touch-manipulation"
            >
              {enrollText} — Intake 2026
            </Link>
          </div>
        </div>

        {/* Drawer Bottom Metadata Row (safe area bottom clearance for Home Indicator / Android toolkit) */}
        <div className="w-full px-6 sm:px-8 pt-4 pb-[calc(1rem+env(safe-area-inset-bottom,0px))] border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-white/50 tracking-wider shrink-0">
          <span>KATHMANDU STUDIO</span>
          <a
            href="mailto:info@iipnepal.com"
            className="hover:text-[#ffd001] transition-colors touch-manipulation"
          >
            INFO@IIPNEPAL.COM
          </a>
        </div>
      </div>
    </>
  );
}
