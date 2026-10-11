"use client";

import React, { useState } from "react";
import { Plus, Minus, ChevronDown } from "lucide-react";
import LineReveal from "@/components/animations/LineReveal";
import type { CourseItem } from "@/data/courses";

export interface CourseCurriculumSectionProps {
  course: CourseItem;
}

export default function CourseCurriculumSection({
  course,
}: CourseCurriculumSectionProps): React.JSX.Element {
  // 3 Logical syllabus phases for scan-first clarity
  const phase1Modules = course.courseStructure.slice(0, 3);
  const phase2Modules = course.courseStructure.slice(3, 7);
  const phase3Modules = course.courseStructure.slice(7);

  const chapters = [
    {
      id: "chapter-1",
      number: "01",
      title: "Foundations & Camera Craft",
      summary: "Core camera hardware, controls, and baseline visual principles.",
      modules: phase1Modules,
      startIndex: 1,
    },
    {
      id: "chapter-2",
      number: "02",
      title: "Light Direction, Exposure & Composition",
      summary: "Manual metering, contrast management, framing geometry, and creative capture.",
      modules: phase2Modules,
      startIndex: phase1Modules.length + 1,
    },
    {
      id: "chapter-3",
      number: "03",
      title: "Practical Field Briefs & Portfolio Review",
      summary: "Hands-on shooting assignments, mentor evaluation, and final curation.",
      modules: phase3Modules,
      startIndex: phase1Modules.length + phase2Modules.length + 1,
    },
  ];

  // State: track which chapters are open (all closed initially)
  const [openChapters, setOpenChapters] = useState<Record<string, boolean>>({
    "chapter-1": false,
    "chapter-2": false,
    "chapter-3": false,
  });

  const toggleChapter = (id: string) => {
    setOpenChapters((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const allOpen = Object.values(openChapters).every(Boolean);

  const toggleAll = () => {
    const nextState = !allOpen;
    setOpenChapters({
      "chapter-1": nextState,
      "chapter-2": nextState,
      "chapter-3": nextState,
    });
  };

  return (
    <section id="curriculum" className="w-full py-16 sm:py-20 md:py-24 lg:py-28 border-b border-[#e2e0d2] bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Summary with Expand All Action */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3 sm:mb-4 select-none">
              <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#888888] font-medium">
                Syllabus // {course.courseStructure.length} Modules in 3 Phases
              </span>
            </div>

            <LineReveal
              as="h2"
              lines={["Curriculum & Modules."]}
              className="font-sans font-light text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.12] text-black tracking-[-0.03em] mb-3 sm:mb-4"
            />

            <p className="font-sans font-normal text-sm sm:text-base text-[#555555] leading-relaxed mb-6">
              Structured into three progressive phases. Each module includes lesson guides, practical field shooting briefs, and individual mentor critique.
            </p>

            <button
              type="button"
              onClick={toggleAll}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-black hover:text-[#ca8a04] transition-colors py-2 px-3 border border-[#e2e0d2] bg-[#fdfcf7] hover:border-black cursor-pointer"
            >
              <span>{allOpen ? "Collapse All Phases" : "Expand All Phases"}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${allOpen ? "rotate-180" : ""}`} />
            </button>
          </div>

          {/* Right Column: Scan-First Collapsible Chapter Accordions */}
          <div className="lg:col-span-8 flex flex-col divide-y divide-[#e2e0d2] border-t border-b border-[#e2e0d2]">
            {chapters.map((chapter) => {
              const isOpen = !!openChapters[chapter.id];

              return (
                <div key={chapter.id} className="py-5 sm:py-6 lg:py-7">
                  {/* Chapter Header Button */}
                  <button
                    type="button"
                    id={`chapter-header-${chapter.id}`}
                    onClick={() => toggleChapter(chapter.id)}
                    aria-expanded={isOpen}
                    aria-controls={`chapter-content-${chapter.id}`}
                    className="w-full flex items-start justify-between gap-4 text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd001]"
                  >
                    <div className="flex flex-col gap-1 pr-2">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs sm:text-[13px] font-bold tracking-[0.16em] text-[#ca8a04]">
                          PHASE {chapter.number}
                        </span>
                        <span className="text-[#888888] text-xs">•</span>
                        <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#777777]">
                          {chapter.modules.length} Modules
                        </span>
                      </div>
                      <h3 className="font-sans font-normal text-lg sm:text-xl lg:text-[22px] text-black group-hover:text-black/75 transition-colors leading-snug">
                        {chapter.title}
                      </h3>
                      <p className="font-sans font-light text-xs sm:text-sm text-[#666666] leading-relaxed pt-0.5">
                        {chapter.summary}
                      </p>
                    </div>

                    <div className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center shrink-0 mt-1 text-black group-hover:border-black transition-colors">
                      {isOpen ? (
                        <Minus className="w-4 h-4" strokeWidth={1.5} />
                      ) : (
                        <Plus className="w-4 h-4" strokeWidth={1.5} />
                      )}
                    </div>
                  </button>

                  {/* Chapter Modules (Search-Indexed CSS Grid Accordion) */}
                  <div
                    id={`chapter-content-${chapter.id}`}
                    role="region"
                    aria-labelledby={`chapter-header-${chapter.id}`}
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden min-h-0">
                      <div className="pt-5 sm:pt-6 pl-2 sm:pl-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5 border-t border-[#eae8dc] mt-4">
                        {chapter.modules.map((moduleTitle, idx) => {
                          const moduleNum = chapter.startIndex + idx;
                          return (
                            <div
                              key={idx}
                              className="py-2.5 flex items-baseline gap-3.5 border-b border-[#f0eee4]"
                            >
                              <span className="font-mono text-xs text-[#888888] shrink-0 font-medium">
                                {moduleNum < 10 ? `0${moduleNum}` : moduleNum}
                              </span>
                              <span className="font-sans font-normal text-xs sm:text-[13.5px] text-[#222222] leading-snug">
                                {moduleTitle}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
