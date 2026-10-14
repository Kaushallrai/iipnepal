"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: "fade-up" | "fade" | "scale-up" | "stagger-children";
  delay?: number;
  duration?: number;
  distance?: number;
  stagger?: number;
  start?: string;
  once?: boolean;
}

let refreshTimer: ReturnType<typeof setTimeout> | null = null;
function debouncedScrollTriggerRefresh() {
  if (refreshTimer) clearTimeout(refreshTimer);
  refreshTimer = setTimeout(() => {
    ScrollTrigger.refresh();
  }, 100);
}

/**
 * Creative Giants GSAP ScrollTrigger Entrance Animation
 * Fully synchronized with Lenis smooth-scroll.
 */
export default function ScrollReveal({
  children,
  className,
  variant = "fade-up",
  delay = 0,
  duration = 0.85,
  distance = 28,
  stagger = 0.08,
  start = "top 90%",
  once = true,
}: ScrollRevealProps): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const scrollTriggerConfig = {
      trigger: container,
      start,
      toggleActions: "play none none none",
      once,
    };

    const ctx = gsap.context(() => {
      if (variant === "stagger-children") {
        const targets = container.querySelectorAll(".scroll-item");
        const animTargets = targets.length > 0 ? targets : container.children;
        gsap.fromTo(
          animTargets,
          { opacity: 0, y: distance },
          {
            opacity: 1,
            y: 0,
            duration,
            delay,
            stagger,
            ease: "power2.out",
            clearProps: "transform",
            scrollTrigger: scrollTriggerConfig,
          }
        );
      } else if (variant === "fade-up") {
        gsap.fromTo(
          container,
          { opacity: 0, y: distance },
          {
            opacity: 1,
            y: 0,
            duration,
            delay,
            ease: "power2.out",
            clearProps: "transform",
            scrollTrigger: scrollTriggerConfig,
          }
        );
      } else if (variant === "scale-up") {
        gsap.fromTo(
          container,
          { opacity: 0, scale: 0.96, y: distance * 0.5 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration,
            delay,
            ease: "power2.out",
            clearProps: "transform",
            scrollTrigger: scrollTriggerConfig,
          }
        );
      } else {
        // Simple fade
        gsap.fromTo(
          container,
          { opacity: 0 },
          {
            opacity: 1,
            duration,
            delay,
            ease: "power2.out",
            clearProps: "transform",
            scrollTrigger: scrollTriggerConfig,
          }
        );
      }
    }, container);

    debouncedScrollTriggerRefresh();

    const handleIntroFinished = () => {
      debouncedScrollTriggerRefresh();
    };

    window.addEventListener("pageIntroFinished", handleIntroFinished);

    return () => {
      window.removeEventListener("pageIntroFinished", handleIntroFinished);
      ctx.revert();
    };
  }, [variant, delay, duration, distance, stagger, start, once]);

  return (
    <div ref={containerRef} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}
