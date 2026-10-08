"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

import { usePageTransition } from "@/components/providers/PageTransitionContext";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface LineRevealProps {
  lines: (string | React.ReactNode)[];
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "div" | "span";
  className?: string;
  lineClassName?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  /**
   * If true, animation triggers strictly once when entering viewport.
   * Defaults to true.
   */
  once?: boolean;
}

/**
 * Creative Giants Masked Line Reveal Animation
 * Wraps each line in an overflow-hidden mask and animates the inner element up from yPercent: 105 to 0.
 * Utilizes GSAP ScrollTrigger synchronized with Lenis smooth-scroll, triggering only after page transition finishes.
 */
export function LineReveal({
  lines,
  as: Component = "div",
  className,
  lineClassName,
  delay = 0,
  duration = 1.05,
  stagger = 0.08,
  once = true,
}: LineRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isTransitionComplete } = usePageTransition();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const innerElements = container.querySelectorAll(".line-inner");
    if (innerElements.length === 0) return;

    // If page transition is still active, ensure lines are prepared in masked state
    if (!isTransitionComplete) {
      gsap.set(innerElements, { yPercent: 105, opacity: 0 });
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(innerElements, { yPercent: 0, opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        innerElements,
        { yPercent: 105, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration,
          delay,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 92%",
            toggleActions: "play none none none",
            once,
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, [isTransitionComplete, delay, duration, stagger, once]);

  return (
    <div
      ref={containerRef}
      className={cn("split-text block select-none", className)}
    >
      <Component className="contents">
        {lines.map((line, index) => (
          <span
            key={index}
            className={cn(
              "line block overflow-hidden pb-[0.08em] mb-[-0.08em]",
              lineClassName
            )}
          >
            <span className="line-inner block will-change-transform">
              {line}
            </span>
          </span>
        ))}
      </Component>
    </div>
  );
}

export default LineReveal;
