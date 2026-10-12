"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";
import type { CourseItem } from "@/data/courses";
import ScrollReveal from "@/components/animations/ScrollReveal";

export interface CourseOutcomesBentoProps {
  course: CourseItem;
}

export default function CourseOutcomesBento({ course }: CourseOutcomesBentoProps): React.JSX.Element {
  const [showAllOutcomes, setShowAllOutcomes] = useState(false);

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 border-b border-[#e2e0d2] bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* Section Eyebrow & Title */}
        <div className="flex flex-col items-start mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-3 select-none">
            <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#888888] font-semibold">
              03 // WHAT YOU MASTER
            </span>
          </div>
          <h2 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl text-black tracking-[-0.03em] leading-tight">
            Learning Outcomes.
          </h2>
        </div>

        {/* Asymmetric 3-Cell Bento Grid: Large Mint Cell + Image Cell + Cream Cell */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Cell 1: Large Mint Card (7 Columns) */}
          <div className="lg:col-span-7 bg-[#eef6f2] border border-[#d6e8de] p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#2e6848] font-semibold block mb-4">
                Core Program Outcome
              </span>

              <h3 className="font-sans font-light text-2xl sm:text-3xl lg:text-[34px] leading-[1.18] text-black tracking-[-0.025em] mb-6">
                {course.keyOutcome}
              </h3>

              <p className="font-sans font-normal text-sm sm:text-base text-[#44554b] leading-relaxed mb-6">
                Master the full spectrum of photography through deliberate hands-on practice. Every concept is tested through realistic shooting briefs and reinforced with 1-on-1 mentor guidance.
              </p>

              {/* Collapsible List of Detailed Outcomes */}
              {showAllOutcomes && (
                <div className="pt-6 border-t border-[#d2e4da] space-y-3.5 mb-6">
                  {course.whatYoullLearn.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#2b4436] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#2e6848] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={() => setShowAllOutcomes((prev) => !prev)}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-[#1c4830] hover:text-black font-semibold transition-colors cursor-pointer py-1"
              >
                <span>{showAllOutcomes ? "Hide outcomes" : `See all ${course.whatYoullLearn.length} outcomes`}</span>
                {showAllOutcomes ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Cell 2: Photographic Cell (5 Columns) */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full overflow-hidden bg-black border border-[#e2e0d2]">
            <Image
              src={course.coverImage}
              alt="Practical photography mentorship at IIP Nepal"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center grayscale contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-5 left-5 right-5 font-mono text-xs uppercase tracking-wider text-white/90">
              Field Execution // Darkroom & Strobe Labs
            </div>
          </div>

          {/* Cell 3: Cream Card (12 Columns Full Width) */}
          <div className="lg:col-span-12 bg-[#fbf9f0] border border-[#e8e6d9] p-8 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#888888] font-semibold block mb-2">
                Curated Exhibition Body of Work
              </span>
              <h4 className="font-sans font-light text-xl sm:text-2xl text-black leading-snug mb-2">
                Graduate with an Exhibition-Ready Student Portfolio.
              </h4>
              <p className="font-sans text-sm sm:text-base text-[#666666] leading-relaxed">
                Every project undergoes rigorous critique before submission to your graduation set. You leave with framed prints and digital master files ready for galleries or commercial clients.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-black bg-[#fffef7] border border-[#e2e0d2] px-5 py-3">
              <span className="w-2 h-2 rounded-full bg-[#ffd001]" />
              <span>Official IIP Certification</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
