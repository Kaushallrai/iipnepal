"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Camera, Sparkles } from "lucide-react";
import type { CourseItem } from "@/data/courses";

export interface CourseOutcomesBentoProps {
  course: CourseItem;
}

export default function CourseOutcomesBento({ course }: CourseOutcomesBentoProps): React.JSX.Element {
  return (
    <section className="w-full py-14 sm:py-16 md:py-20 border-b border-[#e2e0d2] bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-8 sm:mb-10">
          <h2 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl text-black tracking-[-0.03em] leading-tight">
            What You Master in this Track.
          </h2>
        </div>

        {/* Concise Bento Grid: Skills + Gear Requirements + Certification */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Bento Cell 1: Mastered Skills Chips (7 Columns) */}
          <div className="lg:col-span-7 bg-[#fbf9f0] border border-[#e8e6d9] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#e8e6d9] mb-4">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#ca8a04] font-semibold flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Practical Competencies</span>
                </span>
                <span className="font-mono text-[11px] text-[#777777]">
                  {course.whatYoullLearn.length} Core Areas
                </span>
              </div>

              {/* Concise Skills Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {course.whatYoullLearn.slice(0, 6).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#333333]">
                    <CheckCircle2 className="w-4 h-4 text-[#ca8a04] shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Summary Strip */}
            <div className="pt-4 border-t border-[#e8e6d9] flex items-center justify-between font-mono text-xs text-[#777777]">
              <span>Outcome: Exhibition Body of Work</span>
              <span className="text-black font-medium">{course.assignmentsCount}</span>
            </div>
          </div>

          {/* Bento Cell 2: Equipment Requirements & Studio Access (5 Columns) */}
          <div className="lg:col-span-5 bg-[#fffef7] border border-[#e8e6d9] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#e8e6d9] mb-4">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#888888] font-semibold flex items-center gap-2">
                  <Camera className="w-3.5 h-3.5 text-black" />
                  <span>Required Gear</span>
                </span>
                <span className="font-mono text-[11px] text-[#ca8a04]">
                  Zero Guesswork
                </span>
              </div>

              <div className="flex flex-col gap-3 font-sans text-xs sm:text-sm text-[#444444] mb-4">
                <div className="flex items-start gap-2.5 pb-2.5 border-b border-[#f0eee3]">
                  <span className="font-mono text-[10px] text-[#888888] uppercase tracking-wider shrink-0 w-24">You Bring:</span>
                  <span className="font-medium text-black">{course.equipment}</span>
                </div>
                <div className="flex items-start gap-2.5 pb-2.5 border-b border-[#f0eee3]">
                  <span className="font-mono text-[10px] text-[#888888] uppercase tracking-wider shrink-0 w-24">IIP Provides:</span>
                  <span className="text-[#333333]">Studio flash heads, softboxes, darkroom chemistry & color backdrops.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-mono text-[10px] text-[#888888] uppercase tracking-wider shrink-0 w-24">Experience:</span>
                  <span className="text-[#333333]">{course.prerequisites?.[0] || "No prior photography experience required."}</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#e8e6d9] font-mono text-[11px] text-[#777777]">
              Location: IIP Studio, Jyoti Bhawan, Kanti Path
            </div>
          </div>

          {/* Bento Cell 3: Official Certification & Graduation Stamp (12 Columns) */}
          <div className="lg:col-span-12 bg-[#fbf9f0] border border-[#e8e6d9] p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#f2efe4] border border-[#e2e0d2] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#ca8a04]" />
              </div>
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#888888] block">
                  Credential Awarded
                </span>
                <h4 className="font-sans font-medium text-base text-black">
                  {course.certification}
                </h4>
              </div>
            </div>

            <span className="font-mono text-xs uppercase tracking-wider text-[#777777] self-start sm:self-auto">
              Cohort Intake: {course.intake}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
