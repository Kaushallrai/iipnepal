"use client";

import React from "react";
import LineReveal from "@/components/animations/LineReveal";

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
    <section className="w-full pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-10 sm:pb-12 md:pb-14 border-b border-[#e2e0d2] bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* Micro-Eyebrow */}
        <div className="flex items-center gap-2 mb-3 sm:mb-4 select-none">
          <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
          <LineReveal
            as="span"
            lines={["IIP Nepal // Curatorial Archive"]}
            className="font-mono text-xs uppercase tracking-[0.22em] text-[#888888] font-medium"
          />
        </div>

        {/* Poster Title & Vision Statement */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 pb-8 sm:pb-10 lg:pb-12">
          <LineReveal
            as="h1"
            lines={["Student & Alumni Archive."]}
            className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[58px] xl:text-[64px] leading-[1.08] tracking-[-0.035em] text-black"
          />

          <p className="font-sans font-normal text-sm sm:text-base md:text-lg text-[#555555] max-w-lg leading-relaxed">
            Curated documentary fieldwork, high-altitude landscape studies, and wet darkroom silver chemistry produced during mentor-led residencies in Nepal.
          </p>
        </div>

        {/* Minimalist Filter Bar */}
        <div className="pt-6 sm:pt-8 border-t border-[#e2e0d2] flex items-center justify-between gap-6 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-7 sm:gap-10 lg:gap-12 whitespace-nowrap min-w-max">
            {categories.map((cat) => {
              const isActive = activeFilter.toLowerCase() === cat.toLowerCase();
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => onFilterChange(cat)}
                  className={`font-mono text-xs sm:text-[13px] uppercase tracking-[0.18em] py-2.5 transition-colors relative cursor-pointer ${
                    isActive
                      ? "text-black font-semibold"
                      : "text-[#777777] hover:text-black font-normal"
                  }`}
                >
                  <span>{cat}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#ffd001]" />
                  )}
                </button>
              );
            })}
          </div>

          <span className="font-mono text-xs text-[#888888] tracking-wider shrink-0 hidden sm:inline-block">
            {totalCount} Exhibitions
          </span>
        </div>

      </div>
    </section>
  );
}
