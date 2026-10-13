"use client";

import React from "react";
import LineReveal from "@/components/animations/LineReveal";
import { aboutWhatWeDoData } from "@/data/about/what-we-do";

export default function AboutWhatWeDo(): React.JSX.Element {
  return (
    <section className="section_about-what w-full bg-[#fffef7] text-black py-20 sm:py-24 md:py-28 lg:py-32 border-b border-[#e2e0d2]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        {/* ================================================================= */}
        {/* EDITORIAL SECTION HEADLINE                                        */}
        {/* ================================================================= */}
        <div className="w-full text-left max-w-5xl mb-8 sm:mb-10 md:mb-12 lg:mb-14">
          <div className="flex items-center gap-2 mb-3 sm:mb-4 select-none">
            <span className="w-2 h-2 rounded-full bg-[#ffd001] shrink-0 inline-block shadow-[0_0_8px_rgba(255,208,1,0.6)]" />
            <span className="font-mono text-xs uppercase tracking-[0.22em] font-medium text-[#888888]">
              {aboutWhatWeDoData.eyebrow}
            </span>
          </div>

          <LineReveal
            as="h2"
            className="font-sans font-light text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.12] tracking-[-0.03em] text-black"
            lines={aboutWhatWeDoData.headingLines}
          />
        </div>

        {/* ================================================================= */}
        {/* 3 ARCHITECTURAL PILLARS (CLEAN TYPOGRAPHIC SCALE, ZERO EXCESS)    */}
        {/* ================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {aboutWhatWeDoData.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-6 sm:p-7 lg:p-8 bg-white border border-[#e2e0d2] hover:border-black transition-colors duration-200"
            >
              <div>
                <span className="font-mono text-xs font-bold tracking-[0.18em] text-[#ca8a04]">
                  {pillar.number}
                </span>
                <h3 className="font-sans font-normal text-lg sm:text-xl lg:text-2xl text-black tracking-[-0.025em] mt-3 mb-2.5">
                  {pillar.title}
                </h3>
                <p className="font-sans text-[13px] sm:text-sm text-[#555555] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
