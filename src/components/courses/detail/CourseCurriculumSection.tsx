"use client";

import React from "react";
import LineReveal from "@/components/animations/LineReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";
import type { CourseItem } from "@/data/courses";

export interface CourseCurriculumSectionProps {
  course: CourseItem;
}

export default function CourseCurriculumSection({
  course,
}: CourseCurriculumSectionProps): React.JSX.Element {
  return (
    <section id="curriculum" className="w-full py-16 sm:py-20 md:py-24 lg:py-28 border-b border-[#e2e0d2] bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Learning Method Note */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3 sm:mb-4 select-none">
              <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#888888] font-medium">
                Curriculum // {course.courseStructure.length} Modules
              </span>
            </div>

            <LineReveal
              as="h2"
              lines={["Syllabus & Modules."]}
              className="font-sans font-light text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.12] text-black tracking-[-0.03em] mb-3 sm:mb-4"
            />

            <p className="font-sans font-normal text-sm sm:text-base text-[#555555] leading-relaxed">
              Each module includes guided chapter reading, technical briefs, and five
              practical photographs uploaded to the IIP dashboard for mentor critique.
            </p>
          </div>

          {/* Right Column: Clean 2-Column Numbered Module Grid */}
          <div className="lg:col-span-8">
            <ScrollReveal variant="stagger-children" stagger={0.04} start="top 88%">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-1">
                {course.courseStructure.map((moduleTitle, idx) => (
                  <div
                    key={idx}
                    className="scroll-item py-4 sm:py-5 lg:py-6 border-b border-[#e2e0d2] flex items-baseline gap-4"
                  >
                    <span className="font-mono text-xs sm:text-[13px] text-[#888888] shrink-0 font-medium">
                      {idx < 9 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <span className="font-sans font-normal text-xs sm:text-sm md:text-[15px] text-black leading-snug">
                      {moduleTitle}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
