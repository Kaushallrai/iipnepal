"use client";

import React from "react";
import LineReveal from "@/components/animations/LineReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";

export const DISCIPLINES = [
  "Visual Storytelling",
  "Analog Darkroom Chemistry",
  "Studio Strobe Lighting",
  "Photojournalism & Documentary",
  "Commercial Fashion",
  "Architectural Documentation",
  "Editorial Curation & Exhibitions",
];

export default function AboutWhatWeDo(): React.JSX.Element {
  return (
    <section className="section_about-what w-full bg-[#fffef7] text-black py-16 sm:py-20 md:py-24 lg:py-28 border-b border-[#e2e0d2] overflow-hidden">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 mb-10 sm:mb-12 lg:mb-14">
        {/* ================================================================= */}
        {/* EDITORIAL SECTION HEADLINE (ZERO CLICHE ICONS)                    */}
        {/* ================================================================= */}
        <div className="w-full text-left max-w-5xl mb-8 sm:mb-10">
          <div className="flex items-center gap-2 mb-3 sm:mb-4 select-none">
            <span className="w-2 h-2 rounded-full bg-[#ffd001] shrink-0 inline-block shadow-[0_0_8px_rgba(255,208,1,0.6)]" />
            <span className="font-mono text-xs uppercase tracking-[0.22em] font-medium text-[#888888]">
              What We Do // Academy & Studio
            </span>
          </div>

          <LineReveal
            as="h2"
            className="font-sans font-light text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.12] tracking-[-0.03em] text-black"
            lines={[
              "We teach photography through darkroom craft,",
              "manual camera optics, and guided assignments across Kathmandu.",
            ]}
          />
        </div>

        {/* ================================================================= */}
        {/* 3 ARCHITECTURAL PILLARS (NO CLICHE ICONS, PURE TYPOGRAPHIC SCALE) */}
        {/* ================================================================= */}
        <ScrollReveal variant="stagger-children" stagger={0.12} start="top 88%">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {/* Pillar 01 */}
            <div className="scroll-item flex flex-col justify-between p-6 sm:p-6 lg:p-8 bg-white border border-[#e2e0d2] hover:border-black transition-colors duration-200">
              <div>
                <span className="font-mono text-xs font-bold tracking-[0.18em] text-[#ca8a04]">
                  [ 01 ]
                </span>
                <h3 className="font-sans font-normal text-lg sm:text-xl lg:text-2xl text-black tracking-[-0.025em] mt-3 mb-2.5">
                  Degree & Diploma Syllabi
                </h3>
                <p className="font-sans text-[13px] sm:text-sm text-[#555555] leading-relaxed">
                  Structured pathways including MFA, BFA, Dual Diplomas (DDPC), and Foundation modules benchmarked against international photography standards.
                </p>
              </div>
            </div>

            {/* Pillar 02 */}
            <div className="scroll-item flex flex-col justify-between p-6 sm:p-6 lg:p-8 bg-white border border-[#e2e0d2] hover:border-black transition-colors duration-200">
              <div>
                <span className="font-mono text-xs font-bold tracking-[0.18em] text-[#ca8a04]">
                  [ 02 ]
                </span>
                <h3 className="font-sans font-normal text-lg sm:text-xl lg:text-2xl text-black tracking-[-0.025em] mt-3 mb-2.5">
                  Studio & Darkroom Facilities
                </h3>
                <p className="font-sans text-[13px] sm:text-sm text-[#555555] leading-relaxed">
                  Hands-on access at Jyoti Bhawan: high-output studio flash heads, light shapers, continuous cinema lighting, and traditional monochrome darkroom trays.
                </p>
              </div>
            </div>

            {/* Pillar 03 */}
            <div className="scroll-item flex flex-col justify-between p-6 sm:p-6 lg:p-8 bg-white border border-[#e2e0d2] hover:border-black transition-colors duration-200">
              <div>
                <span className="font-mono text-xs font-bold tracking-[0.18em] text-[#ca8a04]">
                  [ 03 ]
                </span>
                <h3 className="font-sans font-normal text-lg sm:text-xl lg:text-2xl text-black tracking-[-0.025em] mt-3 mb-2.5">
                  Mentorship & Exhibitions
                </h3>
                <p className="font-sans text-[13px] sm:text-sm text-[#555555] leading-relaxed">
                  Personal portfolio evaluations with active faculty, editorial publication opportunities, and annual public gallery exhibitions in Nepal.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* ================================================================= */}
      {/* INFINITE DISCIPLINE MARQUEE (BELOW WHAT WE DO CARDS)              */}
      {/* ================================================================= */}
      <div className="w-full border-t border-[#e2e0d2] bg-[#f8f7f0] py-5 overflow-hidden select-none">
        <div className="animate-marquee flex items-center">
          {/* First set */}
          {DISCIPLINES.map((item, idx) => (
            <div key={`d1-${idx}`} className="flex items-center gap-6 sm:gap-8 px-3 sm:px-4 shrink-0">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-black whitespace-nowrap">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffd001] shrink-0" />
            </div>
          ))}

          {/* Seamless duplicate set for continuous loop */}
          {DISCIPLINES.map((item, idx) => (
            <div key={`d2-${idx}`} className="flex items-center gap-6 sm:gap-8 px-3 sm:px-4 shrink-0">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-black whitespace-nowrap">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffd001] shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
