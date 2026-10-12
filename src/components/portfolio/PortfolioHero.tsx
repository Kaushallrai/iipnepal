"use client";

import React from "react";
import LineReveal from "@/components/animations/LineReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";

export interface PortfolioHeroProps {
  totalCount: number;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  categories: string[];
}

export default function PortfolioHero({
  totalCount,
  activeFilter,
  onFilterChange,
  categories,
}: PortfolioHeroProps): React.JSX.Element {
  return (
    <section className="w-full pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-8 sm:pb-10 md:pb-12 border-b border-[#e2e0d2] bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* Eyebrow (Preserved with number per user requirement) */}
        <div className="flex items-center gap-2 mb-3 sm:mb-4 select-none">
          <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
          <LineReveal
            as="span"
            lines={["01 // EXHIBITION ARCHIVE"]}
            className="font-mono text-xs uppercase tracking-[0.22em] text-[#888888] font-semibold"
          />
        </div>

        {/* Display Title & Single-Line Sub-copy */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 pb-6 sm:pb-8 lg:pb-10">
          <div className="max-w-3xl">
            <LineReveal
              as="h1"
              lines={["Student Works & Fieldwork Archive."]}
              className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.08] tracking-[-0.035em] text-black mb-3"
            />
            <p className="font-sans font-normal text-sm sm:text-base md:text-[17px] text-[#555555] leading-relaxed">
              Curated documentary bodies of work produced by IIP students across Nepal.
            </p>
          </div>

          <div className="shrink-0 text-left lg:text-right">
            <span className="font-mono text-xs text-[#777777] uppercase tracking-wider">
              {totalCount} Curated {totalCount === 1 ? "Story" : "Stories"}
            </span>
          </div>
        </div>

        {/* Filter Pills with Horizontal Scroll on Mobile */}
        <ScrollReveal variant="fade-up" distance={16} duration={0.6} delay={0.15}>
          <div className="pt-5 sm:pt-6 border-t border-[#e2e0d2] flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-none whitespace-nowrap max-w-full pb-1 -mx-1 px-1">
              {categories.map((cat) => {
                const isActive = activeFilter.toLowerCase() === cat.toLowerCase();
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => onFilterChange(cat)}
                    className={`font-mono text-xs uppercase tracking-[0.14em] px-4 py-2 rounded-full transition-all cursor-pointer ${
                      isActive
                        ? "bg-black text-[#fffef7] font-semibold shadow-sm"
                        : "bg-[#f4f2e9] text-[#666666] hover:bg-[#eae8dc] hover:text-black font-medium"
                    }`}
                  >
                    <span>{cat}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
