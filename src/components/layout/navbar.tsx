"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Camera, X, ArrowUpRight } from "lucide-react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
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
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 h-[72px] sm:h-[80px] flex items-center justify-between">
          {/* Creative Giants Header Lockup: Circular Mark + Microtype Eyebrow */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-iip-yellow)]"
            aria-label="IIP Nepal Homepage"
          >
            <div className="w-8 h-8 rounded-full bg-[var(--color-ink-black)] text-[var(--color-bone-white)] flex items-center justify-center transition-transform group-hover:scale-105">
              <Camera className="w-4 h-4 text-[var(--color-iip-yellow)]" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[11px] sm:text-[11.5px] uppercase tracking-[0.2em] font-medium text-[var(--color-ink-black)] leading-tight">
                PHOTOGRAPHY EDUCATION
              </span>
              <span className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-[var(--color-graphite)] leading-tight">
                // KATHMANDU CENTRE · EST. 2011
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
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

          {/* Right Actions: Menu Pill + Yellow Enroll Pill */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/enroll"
              className="inline-flex items-center justify-center bg-[var(--color-iip-yellow)] text-[var(--color-ink-black)] hover:bg-[#f5bc14] active:scale-[0.98] transition-all font-sans font-normal text-[14px] sm:text-[14.5px] py-2.5 sm:py-3 px-5 sm:px-7 rounded-[1440px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ink-black)]"
            >
              Enroll
            </Link>

            {/* Creative Giants Black Menu Pill */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center bg-[var(--color-ink-black)] text-[var(--color-bone-white)] hover:bg-black/85 active:scale-[0.98] transition-all font-sans font-normal text-[14px] sm:text-[14.5px] py-2.5 sm:py-3 px-5 sm:px-6 rounded-[1440px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-iip-yellow)]"
              aria-label={menuOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={menuOpen}
            >
              <span>{menuOpen ? "Close" : "Menu"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Creative Giants Full-Screen Editorial Menu Overlay */}
      {menuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          className="fixed inset-0 z-50 bg-[var(--color-ink-black)] text-[var(--color-bone-white)] flex flex-col justify-between p-8 sm:p-14 lg:p-20 animate-in fade-in duration-300"
        >
          {/* Top Bar inside Overlay */}
          <div className="flex items-center justify-between border-b border-white/15 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[var(--color-bone-white)] text-[var(--color-ink-black)] flex items-center justify-center">
                <Camera className="w-4 h-4 text-[var(--color-iip-yellow)]" aria-hidden="true" />
              </div>
              <span className="font-mono text-[12px] uppercase tracking-[0.25em] text-white/70">
                IIP NEPAL // INDEX
              </span>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.2em] bg-white/10 hover:bg-white/20 py-2.5 px-6 rounded-[1440px] text-white transition-colors"
            >
              <span>Close</span>
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Main Giant Menu Links */}
          <div className="my-auto py-8">
            <nav className="flex flex-col gap-4 sm:gap-6">
              {NAV_ITEMS.map((item, idx) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-baseline justify-between py-2 sm:py-3 border-b border-white/10 hover:border-white/40 transition-colors"
                  >
                    <div className="flex items-baseline gap-6 sm:gap-10">
                      <span className="font-mono text-[12px] text-white/40">
                        0{idx + 1}
                      </span>
                      <span className="font-sans font-light text-[36px] sm:text-[56px] lg:text-[72px] leading-tight tracking-[-0.03em] group-hover:translate-x-3 transition-transform duration-300">
                        {item.label}
                      </span>
                    </div>
                    <ArrowUpRight
                      className={cn(
                        "w-6 h-6 sm:w-8 sm:h-8 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1",
                        isActive
                          ? "text-[var(--color-iip-yellow)] opacity-100"
                          : "text-white/40 group-hover:text-white"
                      )}
                      aria-hidden="true"
                    />
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Bottom Overlay Details */}
          <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 font-mono text-[12px] uppercase tracking-[0.2em] text-white/60">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-8">
              <span>Jyoti Bhawan, Kanti Path, Kathmandu</span>
              <span>Tel: +977 9802364760</span>
            </div>

            <div className="flex items-center gap-6">
              <Link
                href="/enroll"
                onClick={() => setMenuOpen(false)}
                className="bg-[var(--color-iip-yellow)] text-[var(--color-ink-black)] py-3 px-8 rounded-[1440px] font-sans font-normal"
              >
                Enroll Now →
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
