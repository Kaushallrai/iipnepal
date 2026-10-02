"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface ParallaxContainerProps {
  children: React.ReactNode;
  speed?: number; // e.g. -15 to -50
  scaleFrom?: number;
  scaleTo?: number;
  className?: string;
  innerClassName?: string;
}

export function ParallaxContainer({
  children,
  speed = -20,
  scaleFrom,
  scaleTo,
  className,
  innerClassName,
}: ParallaxContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const inner = innerRef.current;
      if (!container || !inner) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      const vars: gsap.TweenVars = {
        yPercent: speed,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      };

      if (scaleFrom !== undefined && scaleTo !== undefined) {
        gsap.fromTo(
          inner,
          { scale: scaleFrom, yPercent: 0 },
          {
            scale: scaleTo,
            yPercent: speed,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          }
        );
      } else {
        gsap.to(inner, vars);
      }
    },
    { scope: containerRef, dependencies: [speed, scaleFrom, scaleTo] }
  );

  return (
    <div ref={containerRef} className={cn("overflow-hidden", className)}>
      <div ref={innerRef} className={cn("will-change-transform", innerClassName)}>
        {children}
      </div>
    </div>
  );
}
