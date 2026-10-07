"use client";

import React from "react";
import type { PortfolioItem } from "@/lib/portfolio-data";
import LineReveal from "@/components/animations/LineReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";

export interface PortfolioDetailStoryProps {
  item: PortfolioItem;
}

export default function PortfolioDetailStory({ item }: PortfolioDetailStoryProps): React.JSX.Element {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 border-b border-[#e2e0d2] bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex flex-col gap-8 sm:gap-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 sm:pb-8 border-b border-[#e2e0d2]">
          <div>
            <div className="flex items-center gap-2 mb-3 sm:mb-4 select-none">
              <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#888888] font-medium">
                Archival Context // Exhibition Dossier
              </span>
            </div>
            <LineReveal
              as="h2"
              lines={["Curatorial Notes & Field Rig."]}
              className="font-sans font-light text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.12] text-black tracking-[-0.03em]"
            />
          </div>

          <div className="font-mono text-xs text-[#888888] uppercase tracking-wider">
            Catalog Reference No. {item.number}
          </div>
        </div>

        {/* Compact Artist Statement */}
        <ScrollReveal variant="fade-up" distance={16} duration={0.6}>
          <blockquote className="border-l-2 border-[#ffd001] pl-5 sm:pl-7 py-2 font-sans font-light text-base sm:text-lg lg:text-xl text-[#222222] italic leading-relaxed max-w-4xl">
            “{item.statement}”
          </blockquote>
        </ScrollReveal>

        {/* Compact 2-Column Dossier Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Curatorial Review & Photographer Profile (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8">
            {/* Faculty Critique */}
            <ScrollReveal variant="fade-up" distance={16} duration={0.6}>
              <div className="p-6 sm:p-8 bg-[#fdfcf5] border border-[#e2e0d2] flex flex-col gap-3">
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-[#888888]">
                  <span>Faculty Review</span>
                  <span className="text-black font-medium">{item.mentor.split("·")[0].trim()}</span>
                </div>
                <p className="font-sans font-normal text-sm sm:text-base text-[#333333] leading-relaxed">
                  {item.curatorNotes}
                </p>
              </div>
            </ScrollReveal>

            {/* Photographer Bio */}
            <ScrollReveal variant="fade-up" distance={16} duration={0.6} delay={0.08}>
              <div className="p-6 sm:p-8 bg-[#fdfcf5] border border-[#e2e0d2] flex flex-col gap-3">
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-[#888888]">
                  <span>About {item.photographer}</span>
                  <span>Class of {item.year}</span>
                </div>
                <p className="font-sans font-normal text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {item.photographerBio}
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Technical Fieldwork Specifications & Observations (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8">
            <ScrollReveal variant="fade-up" distance={16} duration={0.6}>
              <div className="p-6 sm:p-8 bg-[#f8f7ed] border border-[#e2e0d2] flex flex-col gap-5">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#888888] block">
                  Fieldwork Specifications
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 font-mono text-xs">
                  <div>
                    <span className="text-[#999999] block text-[10px] uppercase tracking-wider mb-0.5">Camera Body</span>
                    <span className="text-black font-semibold text-xs sm:text-[13px]">{item.specs.camera}</span>
                  </div>

                  <div>
                    <span className="text-[#999999] block text-[10px] uppercase tracking-wider mb-0.5">Optics</span>
                    <span className="text-black font-semibold text-xs sm:text-[13px]">{item.specs.lens}</span>
                  </div>

                  <div>
                    <span className="text-[#999999] block text-[10px] uppercase tracking-wider mb-0.5">Medium / Sensor</span>
                    <span className="text-black font-medium text-xs sm:text-[13px]">{item.specs.filmOrSensor}</span>
                  </div>

                  <div>
                    <span className="text-[#999999] block text-[10px] uppercase tracking-wider mb-0.5">Exposure</span>
                    <span className="text-black font-medium text-xs sm:text-[13px]">{item.specs.exposure}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#e2e0d2] font-mono text-[11px] text-[#777777] flex items-center justify-between">
                  <span>Print Scale</span>
                  <span className="text-black">{item.specs.dimensions}</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Key Fieldwork Notes */}
            {item.fieldNotes && item.fieldNotes.length > 0 && (
              <ScrollReveal variant="fade-up" distance={16} duration={0.6} delay={0.1}>
                <div className="p-6 sm:p-7 bg-[#fdfcf5] border border-[#e2e0d2] flex flex-col gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#888888]">
                    Fieldwork Log Highlights
                  </span>

                  <ul className="flex flex-col gap-2 font-sans text-xs sm:text-[13px] text-[#555555]">
                    {item.fieldNotes.map((note, nIdx) => (
                      <li key={nIdx} className="flex items-start gap-2.5">
                        <span className="font-mono text-[11px] text-[#888888] shrink-0 pt-0.5">
                          0{nIdx + 1}.
                        </span>
                        <span className="leading-relaxed">{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
