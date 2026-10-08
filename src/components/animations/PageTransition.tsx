"use client";

import React, { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { usePageTransition } from "@/components/providers/PageTransitionContext";

export default function PageTransition() {
  const { registerTransitionRunner, navigateTo } = usePageTransition();

  const wrapRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  // 1. Enter Animation (Triggered on internal link click):
  // Single full curtain slides UP from bottom to completely cover the screen (100% -> 0%)
  const startEnter = useCallback(() => {
    return new Promise<void>((resolve) => {
      const wrap = wrapRef.current;
      const curtain = curtainRef.current;
      const logo = logoRef.current;
      if (!wrap || !curtain) {
        resolve();
        return;
      }

      gsap.killTweensOf([curtain, logo]);
      gsap.set(wrap, { display: "block", pointerEvents: "auto" });
      gsap.set(curtain, { yPercent: 100, y: 0, force3D: true });
      if (logo) gsap.set(logo, { opacity: 0, y: 20 });

      const tl = gsap.timeline({
        onComplete: () => resolve(),
      });

      tl.to(curtain, {
        yPercent: 0,
        y: 0,
        force3D: true,
        duration: 0.48,
        ease: "power3.inOut",
      });

      if (logo) {
        tl.to(
          logo,
          {
            opacity: 1,
            y: 0,
            duration: 0.24,
            ease: "power2.out",
          },
          "-=0.2"
        );
      }
    });
  }, []);

  // 2. Exit Animation (Triggered when new route has mounted):
  // Single full curtain is PULLED UP off the top of the viewport (0% -> -100%)
  const startExit = useCallback(() => {
    return new Promise<void>((resolve) => {
      const wrap = wrapRef.current;
      const curtain = curtainRef.current;
      const logo = logoRef.current;
      if (!wrap || !curtain) {
        resolve();
        return;
      }

      gsap.killTweensOf([curtain, logo]);
      gsap.set(wrap, { display: "block", pointerEvents: "auto" });
      gsap.set(curtain, { yPercent: 0, y: 0, force3D: true });

      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(wrap, { display: "none", pointerEvents: "none" });
          gsap.set(curtain, { yPercent: 100, y: 0, force3D: true });
          resolve();
        },
      });

      if (logo) {
        tl.to(logo, {
          opacity: 0,
          y: -20,
          duration: 0.2,
          ease: "power2.in",
        });
      }

      tl.to(
        curtain,
        {
          yPercent: -100,
          y: 0,
          force3D: true,
          duration: 0.62,
          ease: "power4.inOut",
        },
        logo ? "-=0.08" : 0
      );
    });
  }, []);

  // Register transition runner with PageTransitionContext
  useEffect(() => {
    registerTransitionRunner({ startEnter, startExit });
  }, [registerTransitionRunner, startEnter, startExit]);

  // Global Link Interception for smooth editorial transitions
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Ignore hash anchors on the same page (#courses, #portfolio, etc.)
      if (href.startsWith("#")) return;

      // Ignore external protocols or targets
      if (
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("javascript:") ||
        anchor.target === "_blank" ||
        anchor.hasAttribute("download") ||
        anchor.classList.contains("no-transition")
      ) {
        return;
      }

      try {
        const url = new URL(href, window.location.href);
        if (url.origin !== window.location.origin) return;

        // Ignore clicks to exact same current pathname and search
        if (
          url.pathname === window.location.pathname &&
          url.search === window.location.search
        ) {
          return;
        }

        e.preventDefault();
        navigateTo(url.pathname + url.search + url.hash);
      } catch {
        // Fallback
      }
    };

    document.addEventListener("click", handleLinkClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleLinkClick, { capture: true });
    };
  }, [navigateTo]);

  return (
    <div
      ref={wrapRef}
      className="fixed inset-0 w-full h-full z-[99999] pointer-events-none overflow-hidden"
      style={{ display: "none" }}
      aria-hidden="true"
    >
      {/* Single Full Curtain Panel (Slides UP from bottom 100% -> 0% on enter, PULLED UP 0% -> -100% on exit) */}
      <div
        ref={curtainRef}
        className="absolute inset-0 w-full h-full bg-[#0a0a0a] will-change-transform flex flex-col items-center justify-center select-none"
      >
        {/* Central Minimal Editorial Monogram */}
        <div
          ref={logoRef}
          className="flex flex-col items-center justify-center pointer-events-none select-none text-center px-4"
          style={{ opacity: 1 }}
        >
          <div className="relative w-12 h-12 sm:w-16 sm:h-16 mb-4 filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
            <Image
              src="/images/iip-official-logo-white.svg"
              alt="IIP Nepal"
              fill
              priority
              className="object-contain"
            />
          </div>
          <div className="flex items-center gap-2 font-mono text-xs sm:text-sm tracking-[0.28em] uppercase text-[#ffd001]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ffd001] animate-pulse" />
            <span>IIP NEPAL</span>
          </div>
          <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-white/50 uppercase mt-1">
            Kathmandu • Est. 2026
          </span>
        </div>
      </div>
    </div>
  );
}
