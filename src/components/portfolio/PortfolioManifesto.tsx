"use client";

import React from "react";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function PortfolioManifesto(): React.JSX.Element {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 border-t border-b border-[#e2e0d2] bg-[#fffef7]">
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center gap-6 sm:gap-8">
        
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#888888]">
          Curatorial Vision {"//"} Kathmandu
        </span>

        <ScrollReveal variant="fade-up" distance={20} duration={0.8}>
          <blockquote className="font-sans font-light text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-black leading-[1.25] tracking-[-0.03em]">
            “A photograph in Nepal must never be an exercise in surface spectacle. It is a living archive of collective memory, sacred craft, and human truth.”
          </blockquote>
        </ScrollReveal>

        <span className="font-mono text-xs text-[#777777] uppercase tracking-[0.18em]">
          Additya Shrestha / Founder and Lead Mentor
        </span>

      </div>
    </section>
  );
}
