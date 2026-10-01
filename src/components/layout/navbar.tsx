"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
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
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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

  const isDarkHeroMode = isHome && !scrolled;

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full h-[74px] transition-colors duration-300 backdrop-blur-md",
          isDarkHeroMode
            ? "bg-[#1f1915]/75 border-b border-white/10 text-[var(--color-paper-white)]"
            : "bg-[var(--color-workshop-ivory)]/95 border-b border-[var(--color-drafting-line)] text-[var(--color-charcoal-ink)]"
        )}
      >
        <div className="max-w-[1360px] h-full mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          {/* Logo / Brand Mark */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-iip-yellow)]"
            aria-label="IIP Nepal Homepage"
          >
            <div className="flex flex-col">
              <span className="font-sans font-medium text-[20px] tracking-tight leading-none">
                IIP <span className="font-normal opacity-85">NEPAL</span>
              </span>
              <span
                className={cn(
                  "font-mono text-[9.5px] uppercase tracking-[0.25em] leading-tight transition-colors mt-1",
                  isDarkHeroMode ? "text-white/60" : "text-[var(--color-quiet-graphite)]"
                )}
              >
                Kathmandu · Est. 2011
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-8 lg:gap-11"
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
                    "font-mono text-[11.5px] uppercase tracking-[0.35px] transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-iip-yellow)]",
                    isDarkHeroMode
                      ? isActive
                        ? "text-[var(--color-paper-white)] font-medium"
                        : "text-white/70 hover:text-[var(--color-paper-white)]"
                      : isActive
                      ? "text-[var(--color-charcoal-ink)] font-medium"
                      : "text-[var(--color-quiet-graphite)] hover:text-[var(--color-charcoal-ink)]"
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

          {/* Right Actions: Login + Register Pill (Emil Kowalski micro-interactions) */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/login"
              className={cn(
                "font-mono text-[11.5px] uppercase tracking-[0.35px] transition-colors py-2 px-2.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-iip-yellow)] rounded-sm",
                isDarkHeroMode
                  ? "text-white/70 hover:text-[var(--color-paper-white)]"
                  : "text-[var(--color-quiet-graphite)] hover:text-[var(--color-charcoal-ink)]"
              )}
            >
              Login
            </Link>

            <Link
              href="/enroll"
              className="inline-flex items-center justify-center bg-[var(--color-iip-yellow)] text-[var(--color-charcoal-ink)] hover:bg-[#f5bc14] active:scale-[0.98] transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] font-sans font-medium text-[14px] leading-none py-3 px-6 rounded-[1440px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-charcoal-ink)]"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <Link
              href="/enroll"
              className="inline-flex items-center justify-center bg-[var(--color-iip-yellow)] text-[var(--color-charcoal-ink)] font-sans font-medium text-[13px] leading-none py-2 px-4 rounded-[1440px]"
            >
              Register
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                "p-2.5 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-iip-yellow)]",
                isDarkHeroMode
                  ? "text-[var(--color-paper-white)] hover:bg-white/10"
                  : "text-[var(--color-charcoal-ink)] hover:bg-[var(--color-drafting-line)]/60"
              )}
              aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 top-[74px] z-50 bg-[var(--color-workshop-ivory)] flex flex-col justify-between p-8 sm:p-12 animate-in fade-in duration-200 md:hidden"
        >
          <div className="flex flex-col gap-8 pt-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.35px] text-[var(--color-faded-graphite)]">
              Navigation Menu
            </span>
            <nav className="flex flex-col gap-4">
              {NAV_ITEMS.map((item, idx) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "group flex items-center justify-between py-3 border-b border-[var(--color-drafting-line)]/70 transition-colors",
                      isActive
                        ? "text-[var(--color-charcoal-ink)] font-medium"
                        : "text-[var(--color-charcoal-ink)]/80 hover:text-[var(--color-charcoal-ink)]"
                    )}
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-[11px] text-[var(--color-faded-graphite)]">
                        0{idx + 1}
                      </span>
                      <span className="font-sans text-2xl tracking-tight">
                        {item.label}
                      </span>
                    </div>
                    <ArrowUpRight
                      className={cn(
                        "w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1",
                        isActive
                          ? "text-[var(--color-charcoal-ink)] opacity-100"
                          : "text-[var(--color-quiet-graphite)] opacity-40"
                      )}
                      aria-hidden="true"
                    />
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex flex-col gap-5 pt-8 border-t border-[var(--color-drafting-line)]">
            <div className="flex items-center justify-between text-[12px] font-mono uppercase text-[var(--color-quiet-graphite)]">
              <span>Student Portal</span>
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[var(--color-charcoal-ink)] font-medium underline underline-offset-4"
              >
                Login →
              </Link>
            </div>

            <Link
              href="/enroll"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center bg-[var(--color-iip-yellow)] text-[var(--color-charcoal-ink)] hover:bg-[#f5bc14] font-sans font-medium text-base py-3.5 px-6 rounded-[1440px] transition-colors"
            >
              Register at IIP →
            </Link>

            <p className="font-mono text-[10.5px] text-[var(--color-faded-graphite)] text-center pt-2">
              Jyoti Bhawan, Kanti Path, Kathmandu · +977 9802364760
            </p>
          </div>
        </div>
      )}
    </>
  );
}
