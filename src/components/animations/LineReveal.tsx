"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

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
 * Utilizes a dedicated IntersectionObserver with once: true so that animations trigger smoothly
 * and NEVER replay on scroll, parent re-renders, or pin state changes.
 */
export function LineReveal({
  lines,
  as: Component = "div",
  className,
  lineClassName,
  delay = 0,
  duration = 1.15,
  stagger = 0.08,
  once = true,
}: LineRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const innerElements = container.querySelectorAll(".line-inner");
    if (innerElements.length === 0) return;

    // If animation has already played once, keep elements static and visible
    if (hasAnimatedRef.current && once) {
      gsap.set(innerElements, { yPercent: 0, opacity: 1 });
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(innerElements, { yPercent: 0, opacity: 1 });
      hasAnimatedRef.current = true;
      return;
    }

    // Initial masked state
    gsap.set(innerElements, { yPercent: 105, opacity: 0 });

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          if (hasAnimatedRef.current && once) return;

          hasAnimatedRef.current = true;
          observer.disconnect();

          gsap.to(innerElements, {
            yPercent: 0,
            opacity: 1,
            duration,
            delay,
            stagger,
            ease: "power3.out",
          });
        }
      },
      {
        rootMargin: "0px 0px -15% 0px",
        threshold: 0.02,
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      if (hasAnimatedRef.current && once) {
        gsap.set(innerElements, { yPercent: 0, opacity: 1 });
      }
    };
  }, [delay, duration, stagger, once]);

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
