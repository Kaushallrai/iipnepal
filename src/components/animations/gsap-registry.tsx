"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Safe client-side plugin registration
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function GsapRegistry({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Respect user's reduced motion preferences globally
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.ticker.fps(30);
      ScrollTrigger.config({ limitCallbacks: true });
    }

    return () => {
      // Clean up all active triggers on component unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return <>{children}</>;
}

export { gsap, ScrollTrigger, useGSAP };
