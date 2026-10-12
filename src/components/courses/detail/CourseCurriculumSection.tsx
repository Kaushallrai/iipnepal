"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { CourseItem } from "@/data/courses";

export interface CourseCurriculumSectionProps {
  course: CourseItem;
}

interface SyllabusPhase {
  id: string;
  phaseNumber: string;
  title: string;
  description: string;
  modules: { number: string; title: string; detail: string }[];
}

export default function CourseCurriculumSection({
  course,
}: CourseCurriculumSectionProps): React.JSX.Element {
  // Break modules into 3 structured phases
  const total = course.courseStructure.length;
  const chunk1 = Math.ceil(total / 3);
  const chunk2 = Math.ceil((total - chunk1) / 2);

  const rawPhase1 = course.courseStructure.slice(0, chunk1);
  const rawPhase2 = course.courseStructure.slice(chunk1, chunk1 + chunk2);
  const rawPhase3 = course.courseStructure.slice(chunk1 + chunk2);

  const cleanModuleTitle = (raw: string): string => {
    // Strip redundant long prefixes like "Module 01: Comprehensive "
    return raw
      .replace(/^Module\s+\d+:\s*/i, "")
      .replace(/^Assignment\s+\d+:\s*/i, "")
      .trim();
  };

  const phases: SyllabusPhase[] = [
    {
      id: "phase-1",
      phaseNumber: "01",
      title: "Foundations & Optics",
      description: "Hardware mechanics, sensor chemistry, exposure triangles, and optical geometry.",
      modules: rawPhase1.map((item, idx) => ({
        number: `0${idx + 1}`,
        title: cleanModuleTitle(item),
        detail: "Principles, lens behavior, and core camera handling.",
      })),
    },
    {
      id: "phase-2",
      phaseNumber: "02",
      title: "Light Direction & Strobe Control",
      description: "Managing contrast, natural directional light, artificial flash, and creative framing.",
      modules: rawPhase2.map((item, idx) => ({
        number: `0${chunk1 + idx + 1}`,
        title: cleanModuleTitle(item),
        detail: "Field experimentation, lighting setups, and composition rules.",
      })),
    },
    {
      id: "phase-3",
      phaseNumber: "03",
      title: "Field Projects & Portfolio Review",
      description: "Real-world assignments, Lightroom post-processing, and 1-on-1 graduation critique.",
      modules: rawPhase3.map((item, idx) => ({
        number: idx + chunk1 + chunk2 + 1 < 10 ? `0${idx + chunk1 + chunk2 + 1}` : `${idx + chunk1 + chunk2 + 1}`,
        title: cleanModuleTitle(item),
        detail: "Production execution, editing, and exhibition curation.",
      })),
    },
  ];

  // Desktop tab state
  const [activeTab, setActiveTab] = useState(0);

  // Mobile accordion state
  const [openPhasesMobile, setOpenPhasesMobile] = useState<Record<number, boolean>>({
    0: true,
    1: false,
    2: false,
  });

  const toggleMobilePhase = (index: number) => {
    setOpenPhasesMobile((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section id="curriculum" className="w-full py-16 sm:py-20 md:py-24 border-b border-[#e2e0d2] bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* Eyebrow & Title (User requested preserving eyebrow numbers) */}
        <div className="flex flex-col items-start mb-10 sm:mb-14">
          <div className="flex items-center gap-2 mb-3 select-none">
            <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#888888] font-semibold">
              05 // SYLLABUS & MODULES
            </span>
          </div>
          <h2 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl text-black tracking-[-0.03em] leading-tight">
            Comprehensive Curriculum.
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#666666] mt-2 max-w-xl">
            Divided into 3 progressive phases to take you from initial camera physics to gallery-grade execution.
          </p>
        </div>

        {/* ============================================================ */}
        {/* DESKTOP & TABLET VIEW (md and up): PHASE TABS + 2-COL MODULES */}
        {/* ============================================================ */}
        <div className="hidden md:flex flex-col gap-10">
          {/* Phase Tab Buttons */}
          <div className="flex items-center gap-4 border-b border-[#e2e0d2] pb-px">
            {phases.map((phase, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={phase.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`font-mono text-xs uppercase tracking-[0.16em] pb-4 px-2 relative transition-all cursor-pointer ${
                    isActive
                      ? "text-black font-semibold"
                      : "text-[#777777] hover:text-black font-medium"
                  }`}
                >
                  <span className="mr-2 text-[#999999]">PHASE {phase.phaseNumber}</span>
                  <span>{phase.title}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Phase Content: Description + 2-Column Module Grid */}
          <div className="flex flex-col gap-8 bg-[#fdfcf7] border border-[#e8e6d9] p-8 sm:p-10">
            <div className="max-w-2xl border-b border-[#e8e6d9] pb-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#888888] block mb-1">
                Phase {phases[activeTab].phaseNumber} Focus
              </span>
              <p className="font-sans text-base text-[#444444] leading-relaxed">
                {phases[activeTab].description}
              </p>
            </div>

            {/* 2-Column Modules List */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-6">
              {phases[activeTab].modules.map((mod) => (
                <div key={mod.number} className="flex items-start gap-4 pb-4 border-b border-[#f0eee3]">
                  <span className="font-mono text-xs text-[#888888] font-semibold pt-0.5">
                    {mod.number}
                  </span>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-sans font-normal text-base text-black">
                      {mod.title}
                    </h4>
                    <span className="font-sans text-xs text-[#777777]">
                      {mod.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* MOBILE VIEW (< md): ACCORDION                                */}
        {/* ============================================================ */}
        <div className="md:hidden flex flex-col divide-y divide-[#e2e0d2] border-y border-[#e2e0d2]">
          {phases.map((phase, idx) => {
            const isOpen = Boolean(openPhasesMobile[idx]);
            return (
              <div key={phase.id} className="py-5">
                <button
                  type="button"
                  onClick={() => toggleMobilePhase(idx)}
                  className="w-full flex items-center justify-between text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-col pr-4">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#888888]">
                      Phase {phase.phaseNumber}
                    </span>
                    <span className="font-sans font-light text-lg text-black">
                      {phase.title}
                    </span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-black shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-black shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="pt-4 flex flex-col gap-4">
                    <p className="font-sans text-xs text-[#666666] leading-relaxed pb-3 border-b border-[#ece9dc]">
                      {phase.description}
                    </p>
                    <div className="flex flex-col gap-3">
                      {phase.modules.map((mod) => (
                        <div key={mod.number} className="flex items-start gap-3 text-xs">
                          <span className="font-mono text-[#888888] font-medium shrink-0 pt-0.5">
                            {mod.number}
                          </span>
                          <span className="font-sans text-black leading-snug">
                            {mod.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
