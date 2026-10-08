"use client";

import React, { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

export default function PageReveal({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  const isHome = pathname === "/";

  useEffect(() => {
    if (isHome) return;

    const el = containerRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(el, { opacity: 1 });
      return;
    }

    // Graceful, slow content reveal for all other routes
    gsap.killTweensOf(el);
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: "power2.out",
        clearProps: "all",
      }
    );
  }, [pathname, isHome]);

  if (isHome) {
    return <>{children}</>;
  }

  return (
    <div
      ref={containerRef}
      key={pathname}
      className="w-full min-h-screen"
      style={{
        opacity: 0,
      }}
    >
      {children}
    </div>
  );
}
