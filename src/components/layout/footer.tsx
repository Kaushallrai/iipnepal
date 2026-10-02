"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Camera, Mail, MapPin, Phone } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses & Syllabi", href: "/courses" },
  { label: "Student Portfolio", href: "/portfolio" },
  { label: "About IIP Nepal", href: "/about" },
  { label: "Enroll Online", href: "/enroll" },
  { label: "Contact & Campus", href: "/contact" },
];

export function Footer() {
  const currentYear = 2026;
  const footerRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const footer = footerRef.current;
      const linksContainer = linksRef.current;
      const wordmark = wordmarkRef.current;
      if (!footer) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      // Stagger link rows reveal on scroll
      if (linksContainer) {
        gsap.fromTo(
          linksContainer.children,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: linksContainer,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // Bottom colossal wordmark reveal & scroll parallax
      if (wordmark) {
        gsap.fromTo(
          wordmark,
          { yPercent: 35, opacity: 0.05 },
          {
            yPercent: 0,
            opacity: 0.22,
            ease: "none",
            scrollTrigger: {
              trigger: footer,
              start: "bottom 130%",
              end: "bottom bottom",
              scrub: 1.2,
            },
          }
        );
      }
    },
    { scope: footerRef }
  );

  return (
    <footer
      ref={footerRef}
      className="section_footer theme-dark w-full bg-[#0a0a0a] text-white border-t border-white/10 relative overflow-hidden select-none"
    >
      {/* Top Editorial Chrome: Identity & Contact Info */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 pt-16 sm:pt-20 pb-12">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10 pb-12 border-b border-white/10">
          <div className="flex flex-col gap-4 max-w-lg">
            <Link
              href="/"
              className="inline-flex items-center gap-3 group w-fit focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-iip-yellow)]"
              aria-label="IIP Nepal Homepage"
            >
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center transition-transform group-hover:scale-105 shrink-0">
                <Camera className="w-4 h-4 text-[var(--color-iip-yellow)]" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] font-medium text-white leading-tight">
                  IIP NEPAL // KATHMANDU
                </span>
                <span className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-white/50 leading-tight">
                  Indian Institute of Photography · Est. 2011
                </span>
              </div>
            </Link>

            <p className="font-sans text-[14.5px] leading-relaxed text-white/70">
              Official regional partner in Nepal, led by IIP alumnus Additya Shrestha. Developing creative vision and manual exposure mastery through darkroom discipline and Kathmandu fieldwork.
            </p>

            <div className="flex flex-col gap-1.5 font-mono text-[11.5px] uppercase tracking-[0.18em] text-white/60 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-white/40 shrink-0" aria-hidden="true" />
                <span>Jyoti Bhawan, Kanti Path, Kathmandu 44600, Nepal</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-white/40 shrink-0" aria-hidden="true" />
                <a href="mailto:info@iipnepal.com" className="hover:text-white transition-colors">
                  info@iipnepal.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-white/40 shrink-0" aria-hidden="true" />
                <a href="tel:+9779802364760" className="hover:text-white transition-colors">
                  +977 9802364760
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 active:scale-[0.98] text-white border border-white/20 transition-all font-sans font-normal text-[14px] py-3.5 px-8 rounded-[1440px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-iip-yellow)]"
            >
              Contact Us
            </Link>
            <Link
              href="/enroll"
              className="inline-flex items-center justify-center bg-[var(--color-iip-yellow)] text-[var(--color-ink-black)] hover:bg-[#f5bc14] active:scale-[0.98] transition-all font-sans font-normal text-[14px] py-3.5 px-8 rounded-[1440px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Enroll Online
            </Link>
          </div>
        </div>

        {/* Creative Giants Full-Width Editorial Link Rows with Trailing Arrows & Stagger Animation */}
        <div
          ref={linksRef}
          className="flex flex-col divide-y divide-white/10 border-b border-white/10"
        >
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group flex items-center justify-between py-5 text-white hover:text-[var(--color-iip-yellow)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-iip-yellow)] will-change-transform"
            >
              <span className="font-mono text-[13px] sm:text-[14px] uppercase tracking-[0.2em]">
                {link.label}
              </span>
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/40 group-hover:text-[var(--color-iip-yellow)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          ))}
        </div>

        {/* Legal & Attribution Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono uppercase tracking-[0.2em] text-white/50">
          <div>
            © {currentYear} INDIAN INSTITUTE OF PHOTOGRAPHY NEPAL. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-white/60">An Education Wing of IIP Foundation</span>
          </div>
        </div>
      </div>

      {/* Creative Giants Bottom Colossal Poster Wordmark Spanning Edge-to-Edge with Parallax */}
      <div
        ref={wordmarkRef}
        className="footer-wordmark w-full overflow-hidden select-none pointer-events-none pb-2 will-change-transform"
      >
        <svg
          viewBox="0 0 1200 135"
          className="w-full h-auto block"
          aria-hidden="true"
        >
          <text
            x="0"
            y="118"
            textLength="1200"
            lengthAdjust="spacingAndGlyphs"
            className="fill-white"
            style={{
              fontFamily: 'var(--font-poster), "Bebas Neue", Impact, sans-serif',
              fontSize: "148px",
              fontWeight: "normal",
              letterSpacing: "0.02em",
            }}
          >
            IIP NEPAL
          </text>
        </svg>
      </div>
    </footer>
  );
}
