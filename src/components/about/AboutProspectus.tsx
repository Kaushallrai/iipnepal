"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import LineReveal from "@/components/animations/LineReveal";
import { aboutProspectusData, type ProspectusItem } from "@/data/about/prospectus";

export type { ProspectusItem };

export const PROSPECTUS_LIST: ProspectusItem[] = aboutProspectusData.items;

export default function AboutProspectus(): React.JSX.Element {
  return (
    <section className="section_about-prospectus w-full bg-[#fffef7] text-black py-20 sm:py-24 md:py-28 lg:py-32 border-b border-[#e2e0d2]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        {/* ================================================================= */}
        {/* HEADER                                                            */}
        {/* ================================================================= */}
        <div className="w-full max-w-4xl text-left mb-10 sm:mb-12 lg:mb-14">
          <div className="flex items-center gap-2 mb-3 sm:mb-4 select-none">
            <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#888888] font-medium">
              {aboutProspectusData.eyebrow}
            </span>
          </div>
          <LineReveal
            as="h2"
            className="font-sans font-light text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.12] tracking-[-0.03em] text-black mb-3 sm:mb-4"
            lines={aboutProspectusData.headingLines}
          />
          <p className="text-sm sm:text-base text-[#555555] font-normal leading-relaxed">
            {aboutProspectusData.subheading}
          </p>
        </div>

        {/* ================================================================= */}
        {/* ARCHITECTURAL CARDS (HAIRLINE GRID, PUNCHY DESCRIPTIONS)           */}
        {/* ================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PROSPECTUS_LIST.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between p-6 sm:p-7 lg:p-8 bg-white border border-[#e2e0d2] hover:border-black transition-colors duration-200"
            >
              <div>
                <div className="flex items-center justify-between pb-2.5 mb-3.5 border-b border-[#f0eee4]">
                  <span className="font-mono text-xs font-bold tracking-[0.18em] text-[#ca8a04]">
                    {item.code}
                  </span>
                  <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-[#888888]">
                    {item.level}
                  </span>
                </div>

                <h3 className="font-sans font-normal text-base sm:text-lg lg:text-xl text-black tracking-[-0.02em] mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="font-sans text-xs sm:text-[13px] text-[#666666] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-[#f0eee4]">
                {item.pdfUrl.startsWith("http") ? (
                  <a
                    href={item.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-between w-full min-h-[44px] py-2.5 px-4 text-xs font-mono uppercase tracking-[0.14em] font-semibold text-black hover:text-black hover:bg-[#ffd001] active:scale-[0.99] transition-all border border-[#e2e0d2] hover:border-[#ffd001] touch-manipulation select-none"
                    aria-label={`${item.actionLabel || "View"} for ${item.title}`}
                  >
                    <span>{item.actionLabel || "Download Prospectus"}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <Link
                    href={item.pdfUrl}
                    className="group inline-flex items-center justify-between w-full min-h-[44px] py-2.5 px-4 text-xs font-mono uppercase tracking-[0.14em] font-semibold text-black hover:text-black hover:bg-[#ffd001] active:scale-[0.99] transition-all border border-[#e2e0d2] hover:border-[#ffd001] touch-manipulation select-none"
                    aria-label={`${item.actionLabel || "View"} for ${item.title}`}
                  >
                    <span>{item.actionLabel || "View Details"}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
