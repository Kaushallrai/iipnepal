"use client";

import React from "react";
import Link from "next/link";
import LineReveal from "@/components/animations/LineReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { portfolioPageData } from "@/data/portfolio/page";

export default function PortfolioCta(): React.JSX.Element {
  const { cta, manifesto } = portfolioPageData;

  return (
    <section
      data-theme="dark"
      className="section_portfolio-cta w-full bg-[#0a0a0a] text-[#fffef7] py-20 sm:py-24 md:py-28 select-none border-t border-[#222222]"
    >
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* Curatorial Quote: 3 lines max, author on its own line */}
        <div className="max-w-3xl pb-12 sm:pb-16 mb-12 sm:mb-16 border-b border-white/10">
          <p className="font-sans font-light text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed italic">
            &ldquo;{manifesto.quote}&rdquo;
          </p>
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-[#ffd001] mt-3">
            {manifesto.author}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 lg:gap-16">
          
          {/* Statement */}
          <div className="max-w-2xl flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3 sm:mb-4 select-none">
              <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#888888] font-medium">
                02 // ENROLLMENT & EXHIBITIONS
              </span>
            </div>

            <LineReveal
              as="h2"
              lines={[cta.heading]}
              className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.08] tracking-[-0.035em] text-[#fffef7] mb-3 sm:mb-4"
            />

            <p className="font-sans font-normal text-sm sm:text-base md:text-lg text-[#aaaaaa] max-w-xl leading-relaxed">
              {cta.description}
            </p>
          </div>

          {/* Actions */}
          <ScrollReveal variant="fade-up" distance={16} duration={0.6}>
            <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 shrink-0 w-full sm:w-auto">
              <Link
                href={cta.primaryCtaHref}
                className="inline-flex items-center justify-center font-mono text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase bg-[#ffd001] text-black px-8 sm:px-9 py-4 rounded-full hover:bg-white transition-all text-center leading-none shadow-md w-full sm:w-auto whitespace-nowrap min-h-[44px]"
              >
                {cta.primaryCtaText}
              </Link>

              <Link
                href={cta.secondaryCtaHref}
                className="inline-flex items-center justify-center font-mono text-xs sm:text-sm font-normal tracking-[0.16em] uppercase bg-transparent text-[#fffef7] border border-white/20 px-8 sm:px-9 py-4 rounded-full hover:border-[#ffd001] hover:text-[#ffd001] transition-all text-center leading-none w-full sm:w-auto whitespace-nowrap min-h-[44px]"
              >
                {cta.secondaryCtaText}
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
