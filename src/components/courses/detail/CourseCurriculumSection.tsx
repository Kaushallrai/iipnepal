"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";
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
      title: "Light & Direction Control",
      description: "Managing contrast, natural directional light, strobe flash, and framing balance.",
      modules: rawPhase2.map((item, idx) => ({
        number: `0${chunk1 + idx + 1}`,
        title: cleanModuleTitle(item),
        detail: "Field experimentation, lighting setups, and composition rules.",
      })),
    },
    {
      id: "phase-3",
      phaseNumber: "03",
      title: "Fieldwork & Portfolio Review",
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
    <section id="curriculum" className="w-full py-14 sm:py-16 md:py-20 border-b border-[#e2e0d2] bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-8 sm:mb-10">
          <h2 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl text-black tracking-[-0.03em] leading-tight">
            Curriculum & Weekly Modules.
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#666666] mt-2 max-w-xl">
            Structured in 3 progressive phases to transition you from technical controls to finished photographic prints.
          </p>
        </div>

        {/* ============================================================ */}
        {/* DESKTOP & TABLET VIEW (md and up): PHASE TABS + MODULE CARDS */}
        {/* ============================================================ */}
        <div className="hidden md:flex flex-col gap-8">
          {/* Phase Tab Selectors */}
          <div className="flex items-center gap-4 border-b border-[#e2e0d2] pb-px">
            {phases.map((phase, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={phase.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`font-mono text-xs uppercase tracking-[0.16em] pb-4 px-3 relative transition-all cursor-pointer ${
                    isActive
                      ? "text-black font-semibold"
                      : "text-[#777777] hover:text-black font-medium"
                  }`}
                >
                  <span className="mr-2 text-[#ca8a04]">PHASE {phase.phaseNumber}</span>
                  <span>{phase.title}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Phase Content: Focus Summary + 2-Column Module Cards */}
          <div className="flex flex-col gap-6 bg-[#fbf9f0] border border-[#e8e6d9] p-6 sm:p-8 lg:p-10">
            <div className="max-w-2xl border-b border-[#e8e6d9] pb-4 flex items-baseline justify-between gap-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#888888] block mb-1">
                  Phase {phases[activeTab].phaseNumber} Core Objectives
                </span>
                <p className="font-sans text-sm sm:text-base text-[#333333] leading-relaxed">
                  {phases[activeTab].description}
                </p>
              </div>
              <span className="font-mono text-xs text-[#ca8a04] shrink-0 font-medium">
                {phases[activeTab].modules.length} Modules
              </span>
            </div>

            {/* 2-Column Modules Grid */}
            <div className="grid grid-cols-2 gap-x-10 gap-y-4">
              {phases[activeTab].modules.map((mod) => (
                <div key={mod.number} className="flex items-start gap-3.5 pb-3.5 border-b border-[#eae8dc]">
                  <span className="font-mono text-xs text-black font-semibold pt-0.5 bg-[#f2efe4] px-2 py-0.5 rounded-sm">
                    {mod.number}
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <h4 className="font-sans font-normal text-sm sm:text-base text-black">
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
        {/* MOBILE VIEW (< md): CLEAN PHASE ACCORDIONS                  */}
        {/* ============================================================ */}
        <div className="md:hidden flex flex-col divide-y divide-[#e2e0d2] border-y border-[#e2e0d2]">
          {phases.map((phase, idx) => {
            const isOpen = Boolean(openPhasesMobile[idx]);
            return (
              <div key={phase.id} className="py-4">
                <button
                  type="button"
                  onClick={() => toggleMobilePhase(idx)}
                  className="w-full flex items-center justify-between text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-col pr-4">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#ca8a04]">
                      Phase {phase.phaseNumber}
                    </span>
                    <span className="font-sans font-light text-base sm:text-lg text-black">
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
                  <div className="pt-3 flex flex-col gap-3">
                    <p className="font-sans text-xs text-[#666666] leading-relaxed pb-2.5 border-b border-[#ece9dc]">
                      {phase.description}
                    </p>
                    <div className="flex flex-col gap-2.5">
                      {phase.modules.map((mod) => (
                        <div key={mod.number} className="flex items-start gap-2.5 text-xs pb-2 border-b border-[#f2efe4] last:border-none">
                          <span className="font-mono text-black font-semibold shrink-0 pt-0.5 bg-[#f2efe4] px-1.5 py-0.5 rounded-xs text-[10px]">
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
