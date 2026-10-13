"use client";

import React from "react";
import type { CourseItem } from "@/data/courses";

export interface CourseCurriculumSectionProps {
  course: CourseItem;
}

export default function CourseCurriculumSection({
  course,
}: CourseCurriculumSectionProps): React.JSX.Element {
  // Break modules into 3 structured progressive phases
  const total = course.courseStructure.length;
  const chunk1 = Math.ceil(total / 3);
  const chunk2 = Math.ceil((total - chunk1) / 2);

  const rawPhase1 = course.courseStructure.slice(0, chunk1);
  const rawPhase2 = course.courseStructure.slice(chunk1, chunk1 + chunk2);
  const rawPhase3 = course.courseStructure.slice(chunk1 + chunk2);

  const cleanModuleTitle = (raw: string): string => {
    return raw
      .replace(/^Module\s+\d+:\s*/i, "")
      .replace(/^Assignment\s+\d+:\s*/i, "")
      .trim();
  };

  const phases = [
    {
      number: "01",
      title: "Foundations & Optics",
      modules: rawPhase1.map((item, idx) => ({
        number: `0${idx + 1}`,
        title: cleanModuleTitle(item),
      })),
    },
    {
      number: "02",
      title: "Light & Composition",
      modules: rawPhase2.map((item, idx) => ({
        number: idx + chunk1 + 1 < 10 ? `0${idx + chunk1 + 1}` : `${idx + chunk1 + 1}`,
        title: cleanModuleTitle(item),
      })),
    },
    {
      number: "03",
      title: "Fieldwork & Review",
      modules: rawPhase3.map((item, idx) => ({
        number: idx + chunk1 + chunk2 + 1 < 10 ? `0${idx + chunk1 + chunk2 + 1}` : `${idx + chunk1 + chunk2 + 1}`,
        title: cleanModuleTitle(item),
      })),
    },
  ];

  return (
    <section id="syllabus" className="w-full py-16 sm:py-20 md:py-24 bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* Header — Clean single-line headline & module count */}
        <div className="pb-4 mb-8 sm:mb-12 border-b border-[#e2e0d2] flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <h2 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl text-black tracking-[-0.03em] leading-tight">
            Curriculum Roadmap.
          </h2>
          <span className="font-mono text-xs uppercase tracking-wider text-[#888888]">
            {course.courseStructure.length} Modules • 3 Progressive Phases
          </span>
        </div>

        {/* 3-Column Clean Architectural Ledger with Vertical Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#e2e0d2] py-4">
          {phases.map((phase, idx) => (
            <div
              key={phase.number}
              className={`flex flex-col ${
                idx === 0
                  ? "md:pr-8 lg:pr-12"
                  : idx === 1
                  ? "py-8 md:py-0 md:px-8 lg:px-12"
                  : "pt-8 md:pt-0 md:pl-8 lg:pl-12"
              }`}
            >
              {/* Phase Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#e2e0d2] mb-4">
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#ca8a04] font-semibold">
                  Phase {phase.number}
                </span>
                <span className="font-mono text-[11px] text-[#888888]">
                  {phase.modules.length} Lessons
                </span>
              </div>

              <h3 className="font-sans font-light text-xl sm:text-2xl text-black tracking-[-0.02em] mb-4">
                {phase.title}
              </h3>

              {/* Module List — Scannable Typographic Ledger */}
              <div className="flex flex-col divide-y divide-[#eae8dc]">
                {phase.modules.map((mod) => (
                  <div key={mod.number} className="py-3 flex items-start gap-3">
                    <span className="font-mono text-xs text-[#ca8a04] font-semibold shrink-0 pt-0.5">
                      {mod.number}
                    </span>
                    <span className="font-sans text-xs sm:text-sm text-black leading-snug">
                      {mod.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
