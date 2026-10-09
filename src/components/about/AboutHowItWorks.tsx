"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import LineReveal from "@/components/animations/LineReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { aboutAdmissionsData, type AdmissionsStep } from "@/data/about/admissions";

export type { AdmissionsStep };

export const ADMISSIONS_STEPS: AdmissionsStep[] = aboutAdmissionsData.steps;

export default function AboutHowItWorks(): React.JSX.Element {
  return (
    <section className="section_about-how w-full bg-[#fffef7] text-black py-16 sm:py-20 md:py-24 lg:py-28 border-b border-[#e2e0d2]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        {/* ================================================================= */}
        {/* EDITORIAL HEADER                                                  */}
        {/* ================================================================= */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12 pb-6 sm:pb-8 border-b border-[#e2e0d2]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3 sm:mb-4 select-none">
              <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#888888] font-medium">
                {aboutAdmissionsData.eyebrow}
              </span>
            </div>
            <LineReveal
              as="h2"
              className="font-sans font-light text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.12] tracking-[-0.03em] text-black"
              lines={aboutAdmissionsData.headingLines}
            />
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 py-3 sm:py-2.5 px-5 rounded-full bg-black text-white hover:bg-[#ffd001] hover:text-black active:scale-[0.99] transition-all duration-200 font-mono text-xs uppercase tracking-[0.14em] font-semibold self-start sm:self-auto shrink-0 w-full sm:w-auto text-center touch-manipulation min-h-[44px]"
          >
            <span>Speak to an Advisor</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* ================================================================= */}
        {/* PROCESS ROWS (CREATIVE GIANTS PLAYBOOK STYLE)                     */}
        {/* ================================================================= */}
        <ScrollReveal variant="stagger-children" stagger={0.06} start="top 85%">
          <div className="divide-y divide-[#e2e0d2]">
            {ADMISSIONS_STEPS.map((step) => (
              <div
                key={step.number}
                className="scroll-item py-5 sm:py-6 md:py-8 grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-3 md:gap-8 items-start group hover:bg-[#faf9f3] transition-colors px-2 sm:px-3 -mx-2 sm:-mx-3"
              >
                {/* Step Number + Title Group on mobile, split on desktop */}
                <div className="flex items-baseline gap-3 md:col-span-2 md:block">
                  <span className="font-mono text-sm sm:text-base md:font-sans md:font-light md:text-3xl lg:text-4xl text-[#ca8a04] md:text-black/40 md:group-hover:text-black transition-colors shrink-0">
                    {step.number}
                  </span>
                  <h3 className="md:hidden font-sans font-normal text-base sm:text-lg text-black tracking-tight">
                    {step.title}
                  </h3>
                </div>

                {/* Desktop / Tablet Title */}
                <div className="hidden md:block md:col-span-4 lg:col-span-4">
                  <h3 className="font-sans font-normal text-base lg:text-xl text-black tracking-[-0.02em]">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-6 lg:col-span-6 pl-7 sm:pl-8 md:pl-0">
                  <p className="font-sans text-[13px] sm:text-sm md:text-[15px] text-[#555555] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
