"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Camera, Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          scrolled
            ? "bg-[var(--color-bone-white)]/95 backdrop-blur-md border-b border-[var(--color-hairline)] shadow-[0_1px_0_0_rgba(0,0,0,0.03)]"
            : "bg-[var(--color-bone-white)]"
        )}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 h-[72px] sm:h-[80px] flex items-center justify-between">
          {/* Creative Giants Header Brand Lockup: Circular Camera Mark + Technical Microtype */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-iip-yellow)]"
            aria-label="IIP Nepal Homepage"
          >
            <div className="w-8 h-8 rounded-full bg-[var(--color-ink-black)] text-[var(--color-bone-white)] flex items-center justify-center transition-transform group-hover:scale-105 shrink-0">
              <Camera className="w-4 h-4 text-[var(--color-iip-yellow)]" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[11px] sm:text-[11.5px] uppercase tracking-[0.2em] font-medium text-[var(--color-ink-black)] leading-tight">
                PHOTOGRAPHY EDUCATION
              </span>
              <span className="font-mono text-[9px] sm:text-[9.5px] uppercase tracking-[0.2em] text-[var(--color-graphite)] leading-tight">
                // KATHMANDU CENTRE · EST. 2011
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Bar (Direct links, No Menu button) */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-8 xl:gap-10 font-mono text-[12px] uppercase tracking-[0.25em]"
          >
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-iip-yellow)]",
                    isActive
                      ? "text-[var(--color-ink-black)] font-medium"
                      : "text-[var(--color-graphite)] hover:text-[var(--color-ink-black)]"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[var(--color-iip-yellow)]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions: Direct Enroll Pill + Mobile Drawer Trigger */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center font-mono text-[11.5px] uppercase tracking-[0.2em] text-[var(--color-graphite)] hover:text-[var(--color-ink-black)] transition-colors pr-2"
            >
              Contact Us
            </Link>

            <Link
              href="/enroll"
              className="inline-flex items-center justify-center bg-[var(--color-iip-yellow)] text-[var(--color-ink-black)] hover:bg-[#f5bc14] active:scale-[0.98] transition-all font-sans font-normal text-[13.5px] sm:text-[14px] py-2.5 sm:py-3 px-5 sm:px-7 rounded-[1440px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ink-black)] shadow-none"
            >
              Enroll
            </Link>

            {/* Mobile Hamburger Only (Hidden on Desktop) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full border border-[var(--color-hairline)] flex items-center justify-center text-[var(--color-ink-black)] hover:bg-black/5 active:scale-95 transition-all"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Editorial Navigation Overlay (Mobile Viewports Only) */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="lg:hidden fixed inset-0 z-50 bg-[#0a0a0a] text-white flex flex-col justify-between p-6 sm:p-10 animate-in fade-in duration-200"
        >
          {/* Top Bar inside Overlay */}
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center">
                <Camera className="w-4 h-4 text-[var(--color-iip-yellow)]" aria-hidden="true" />
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/70">
                IIP NEPAL // INDEX
              </span>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white/10 active:scale-95 transition-colors"
              aria-label="Close mobile menu"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          {/* Links List */}
          <nav
            aria-label="Mobile Menu Links"
            className="flex flex-col gap-3 py-6"
          >
            {NAV_ITEMS.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans font-light text-[32px] sm:text-[40px] text-white hover:text-[var(--color-iip-yellow)] transition-colors flex items-center justify-between border-b border-white/10 py-3"
              >
                <span>{item.label}</span>
                <span className="font-mono text-[12px] text-white/40 tracking-[0.2em]">
                  0{index + 1}
                </span>
              </Link>
            ))}
          </nav>

          {/* Bottom Actions & Coordinates */}
          <div className="flex flex-col gap-5 pt-4 border-t border-white/10">
            <div className="flex items-center justify-between gap-3">
              <Link
                href="/enroll"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 inline-flex items-center justify-center bg-[var(--color-iip-yellow)] text-[var(--color-ink-black)] font-sans font-normal text-[15px] py-3.5 px-6 rounded-[1440px]"
              >
                Enroll Online
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center border border-white/30 text-white font-sans font-normal text-[15px] py-3.5 px-6 rounded-[1440px]"
              >
                Contact
              </Link>
            </div>

            <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/50 flex flex-col gap-1">
              <span>Kathmandu Centre · Jyoti Bhawan, Kanti Path</span>
              <span>Tel: +977 9802364760 · info@iipnepal.com</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
