"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface LineRevealProps {
  lines: (string | React.ReactNode)[];
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "div" | "span";
  className?: string;
  lineClassName?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  startTrigger?: string;
}

export function LineReveal({
  lines,
  as: Component = "div",
  className,
  lineClassName,
  delay = 0,
  duration = 0.75,
  stagger = 0.08,
  startTrigger = "top 82%",
}: LineRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const innerElements = container.querySelectorAll(".line-inner");

      if (prefersReducedMotion) {
        gsap.set(innerElements, { yPercent: 0, opacity: 1 });
        return;
      }

      gsap.fromTo(
        innerElements,
        {
          yPercent: 105,
          opacity: 0.9,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration,
          delay,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: startTrigger,
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    },
    { scope: containerRef, dependencies: [lines, delay, duration, stagger] }
  );

  return (
    <div ref={containerRef} className={cn("split-text block select-none", className)}>
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
