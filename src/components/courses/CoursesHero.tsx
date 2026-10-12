"use client";

import React from "react";
import LineReveal from "@/components/animations/LineReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { coursesPageData } from "@/data/courses/page";
import { SlidersHorizontal, Table } from "lucide-react";

export interface CoursesHeroProps {
  totalCoursesCount: number;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  filters: string[];
  isCompareMode?: boolean;
  onToggleCompare?: () => void;
}

export default function CoursesHero({
  totalCoursesCount,
  activeFilter,
  onFilterChange,
  filters,
  isCompareMode = false,
  onToggleCompare,
}: CoursesHeroProps): React.JSX.Element {
  return (
    <section className="w-full pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-8 sm:pb-10 md:pb-12 border-b border-[#e2e0d2] bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* Numbered Micro-Eyebrow */}
        <div className="flex items-center gap-2 mb-3 sm:mb-4 select-none">
          <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
          <LineReveal
            as="span"
            lines={[coursesPageData.eyebrow]}
            className="font-mono text-xs uppercase tracking-[0.22em] text-[#888888] font-medium"
          />
        </div>

        {/* Poster Title & Vision Statement */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 pb-6 sm:pb-8 lg:pb-10">
          <LineReveal
            as="h1"
            lines={[coursesPageData.heading]}
            className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.08] tracking-[-0.035em] text-black max-w-2xl"
          />

          <p className="font-sans font-normal text-sm sm:text-base md:text-[17px] text-[#555555] max-w-xl leading-relaxed">
            {coursesPageData.description}
          </p>
        </div>

        {/* Clean Filter Bar: Level Selection Pills & Desktop Compare Toggle */}
        <ScrollReveal variant="fade-up" distance={16} duration={0.6} delay={0.15}>
          <div className="pt-5 sm:pt-6 border-t border-[#e2e0d2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            
            {/* Level Filters: Horizontal Scrollable Pills */}
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-none whitespace-nowrap max-w-full pb-1 -mx-1 px-1">
              {filters.map((filter) => {
                const isActive = activeFilter.toLowerCase() === filter.toLowerCase();
                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => onFilterChange(filter)}
                    className={`font-mono text-xs uppercase tracking-[0.14em] px-4 py-2 rounded-full transition-all cursor-pointer ${
                      isActive
                        ? "bg-black text-[#fffef7] font-semibold shadow-sm"
                        : "bg-[#f4f2e9] text-[#666666] hover:bg-[#eae8dc] hover:text-black font-medium"
                    }`}
                  >
                    <span>{filter === "All" ? "All Levels" : filter}</span>
                  </button>
                );
              })}
            </div>

            {/* Desktop Actions: Total count & Compare Table toggle */}
            <div className="flex items-center gap-4 shrink-0 sm:pl-4 justify-between sm:justify-end">
              <span className="font-mono text-xs text-[#666666] tracking-wider whitespace-nowrap">
                ({totalCoursesCount} {totalCoursesCount === 1 ? "Track" : "Tracks"})
              </span>

              {onToggleCompare && (
                <button
                  type="button"
                  onClick={onToggleCompare}
                  className="hidden lg:inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] px-3.5 py-1.5 rounded-full border border-[#d8d6c8] bg-[#fdfcf5] hover:bg-[#ffd001] hover:border-[#ffd001] hover:text-black text-black transition-all cursor-pointer font-medium"
                  aria-pressed={isCompareMode}
                >
                  {isCompareMode ? (
                    <>
                      <SlidersHorizontal className="w-3.5 h-3.5" />
                      <span>Grid View</span>
                    </>
                  ) : (
                    <>
                      <Table className="w-3.5 h-3.5" />
                      <span>Compare Tracks</span>
                    </>
                  )}
                </button>
              )}
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
