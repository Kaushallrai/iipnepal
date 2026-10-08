"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { usePageTransition } from "@/components/providers/PageTransitionContext";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);
  const { isTransitionComplete } = usePageTransition();

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.8,
    });

    lenisRef.current = lenis;
    (window as unknown as { lenis: Lenis | null }).lenis = lenis;

    // Synchronize Lenis scroll position with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    const handleIntroFinished = () => {
      lenis.start();
      ScrollTrigger.refresh();
    };

    document.addEventListener("pageIntroFinished", handleIntroFinished);

    return () => {
      document.removeEventListener("pageIntroFinished", handleIntroFinished);
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      lenisRef.current = null;
      (window as unknown as { lenis: Lenis | null }).lenis = null;
    };
  }, []);

  // Manage Lenis state during page transitions
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    if (!isTransitionComplete) {
      lenis.stop();
    } else {
      lenis.start();
      ScrollTrigger.refresh();
    }
  }, [isTransitionComplete]);

  return <>{children}</>;
}
