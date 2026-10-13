"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronUp,
  BookOpen,
  CheckCircle2,
  Camera,
  CreditCard,
  HelpCircle,
  ArrowUpRight,
  ShieldCheck,
  Plus,
  Minus,
} from "lucide-react";
import type { CourseItem } from "@/data/courses";

export interface CourseAccordionDossierProps {
  course: CourseItem;
}

export default function CourseAccordionDossier({
  course,
}: CourseAccordionDossierProps): React.JSX.Element {
  // Allow multiple drawers open. Drawer 0 (Curriculum) open by default.
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({
    0: true,
    1: false,
    2: false,
    3: false,
    4: false,
  });

  // Track active sub-FAQ index
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleFaq = (index: number) => {
    setActiveFaqIndex((prev) => (prev === index ? null : index));
  };

  // Clean module titles
  const cleanModuleTitle = (raw: string): string => {
    return raw
      .replace(/^Module\s+\d+:\s*/i, "")
      .replace(/^Assignment\s+\d+:\s*/i, "")
      .trim();
  };

  // Split curriculum into 3 progressive phases
  const total = course.courseStructure.length;
  const chunk1 = Math.ceil(total / 3);
  const chunk2 = Math.ceil((total - chunk1) / 2);

  const phase1 = course.courseStructure.slice(0, chunk1);
  const phase2 = course.courseStructure.slice(chunk1, chunk1 + chunk2);
  const phase3 = course.courseStructure.slice(chunk1 + chunk2);

  const phases = [
    {
      title: "Phase 01: Core Foundations & Mechanics",
      modules: phase1,
      startIndex: 1,
    },
    {
      title: "Phase 02: Light Direction & Composition Control",
      modules: phase2,
      startIndex: chunk1 + 1,
    },
    {
      title: "Phase 03: Fieldwork, Post-Production & Critique",
      modules: phase3,
      startIndex: chunk1 + chunk2 + 1,
    },
  ];

  return (
    <section id="syllabus" className="w-full py-14 sm:py-16 md:py-20 border-b border-[#e2e0d2] bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12 pb-5 border-b border-[#e2e0d2]">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#ca8a04] font-semibold block mb-1.5">
              Program Dossier
            </span>
            <h2 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl text-black tracking-[-0.03em] leading-tight">
              Syllabus & Course Specifications.
            </h2>
          </div>
          <p className="font-mono text-xs text-[#777777] uppercase tracking-wider self-start sm:self-end">
            Structured in 5 expandable drawers
          </p>
        </div>

        {/* Master Accordion Container */}
        <div className="flex flex-col divide-y divide-[#e2e0d2] border-y border-[#e2e0d2]">

          {/* ============================================================ */}
          {/* DRAWER 1: WEEKLY SYLLABUS & MODULES                          */}
          {/* ============================================================ */}
          <div className="py-5 sm:py-6">
            <button
              type="button"
              onClick={() => toggleSection(0)}
              className="w-full flex items-center justify-between text-left cursor-pointer group"
              aria-expanded={Boolean(openSections[0])}
            >
              <div className="flex items-center gap-3.5 sm:gap-5 pr-4">
                <span className="w-9 h-9 rounded-full bg-[#f2efe4] border border-[#e2e0d2] flex items-center justify-center shrink-0 group-hover:bg-[#ffd001] transition-colors">
                  <BookOpen className="w-4 h-4 text-black" />
                </span>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#ca8a04] font-semibold block">
                    01 / Weekly Modules & Phases
                  </span>
                  <h3 className="font-sans font-light text-lg sm:text-2xl text-black group-hover:opacity-75 transition-opacity">
                    Curriculum & Practical Syllabus
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="hidden sm:inline-block font-mono text-xs text-[#777777]">
                  {course.courseStructure.length} Modules · {course.duration}
                </span>
                <span className="w-8 h-8 rounded-full border border-[#d8d6c8] flex items-center justify-center text-black group-hover:border-black transition-colors">
                  {openSections[0] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </div>
            </button>

            {openSections[0] && (
              <div className="pt-6 sm:pt-8 pl-0 sm:pl-14">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                  {phases.map((phase, pIdx) => (
                    <div
                      key={pIdx}
                      className="bg-[#fbf9f0] border border-[#e8e6d9] p-5 sm:p-6 flex flex-col justify-between"
                    >
                      <div>
                        <span className="font-mono text-[11px] uppercase tracking-wider text-[#ca8a04] font-semibold block pb-2 border-b border-[#eae8dc] mb-3">
                          {phase.title}
                        </span>

                        <div className="space-y-3 font-sans text-xs sm:text-[13px]">
                          {phase.modules.map((mod, mIdx) => {
                            const modNum = phase.startIndex + mIdx;
                            return (
                              <div key={mIdx} className="flex items-start gap-2.5 pb-2.5 border-b border-[#f2efe4] last:border-none">
                                <span className="font-mono text-[10px] text-black font-semibold bg-[#f2efe4] px-1.5 py-0.5 rounded-xs shrink-0 mt-0.5">
                                  {modNum < 10 ? `0${modNum}` : modNum}
                                </span>
                                <span className="text-[#222222] leading-snug">
                                  {cleanModuleTitle(mod)}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div className="pt-3 mt-3 border-t border-[#eae8dc] font-mono text-[10px] text-[#888888] uppercase tracking-wider">
                        {phase.modules.length} Lessons & Briefs
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ============================================================ */}
          {/* DRAWER 2: PRACTICAL COMPETENCIES & CERTIFICATION             */}
          {/* ============================================================ */}
          <div className="py-5 sm:py-6">
            <button
              type="button"
              onClick={() => toggleSection(1)}
              className="w-full flex items-center justify-between text-left cursor-pointer group"
              aria-expanded={Boolean(openSections[1])}
            >
              <div className="flex items-center gap-3.5 sm:gap-5 pr-4">
                <span className="w-9 h-9 rounded-full bg-[#f2efe4] border border-[#e2e0d2] flex items-center justify-center shrink-0 group-hover:bg-[#ffd001] transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-black" />
                </span>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#ca8a04] font-semibold block">
                    02 / Demonstrated Skills & Outcomes
                  </span>
                  <h3 className="font-sans font-light text-lg sm:text-2xl text-black group-hover:opacity-75 transition-opacity">
                    What You Master & Official Certification
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="hidden sm:inline-block font-mono text-xs text-[#777777]">
                  {course.whatYoullLearn.length} Core Areas
                </span>
                <span className="w-8 h-8 rounded-full border border-[#d8d6c8] flex items-center justify-center text-black group-hover:border-black transition-colors">
                  {openSections[1] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </div>
            </button>

            {openSections[1] && (
              <div className="pt-6 sm:pt-8 pl-0 sm:pl-14">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
                  {/* Skills List (8 cols) */}
                  <div className="lg:col-span-8 bg-[#fbf9f0] border border-[#e8e6d9] p-5 sm:p-6">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#888888] font-semibold block mb-4 pb-2 border-b border-[#eae8dc]">
                      Verified Learning Objectives
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {course.whatYoullLearn.map((skill, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#222222]">
                          <CheckCircle2 className="w-4 h-4 text-[#ca8a04] shrink-0 mt-0.5" />
                          <span className="leading-snug">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Official Credential (4 cols) */}
                  <div className="lg:col-span-4 bg-[#fffef7] border border-[#e8e6d9] p-5 sm:p-6 flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-full bg-[#f2efe4] border border-[#e2e0d2] flex items-center justify-center mb-3">
                        <ShieldCheck className="w-5 h-5 text-[#ca8a04]" />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#888888] block mb-1">
                        Credential Awarded
                      </span>
                      <h4 className="font-sans font-medium text-base text-black mb-2">
                        {course.certification}
                      </h4>
                      <p className="font-sans text-xs text-[#666666] leading-relaxed">
                        Issued upon completing all assignments and passing the portfolio jury evaluation.
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-[#eae8dc] font-mono text-[11px] text-black font-medium">
                      Outcome: {course.assignmentsCount}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ============================================================ */}
          {/* DRAWER 3: GEAR CHECKLIST & STUDIO ACCESS                     */}
          {/* ============================================================ */}
          <div className="py-5 sm:py-6">
            <button
              type="button"
              onClick={() => toggleSection(2)}
              className="w-full flex items-center justify-between text-left cursor-pointer group"
              aria-expanded={Boolean(openSections[2])}
            >
              <div className="flex items-center gap-3.5 sm:gap-5 pr-4">
                <span className="w-9 h-9 rounded-full bg-[#f2efe4] border border-[#e2e0d2] flex items-center justify-center shrink-0 group-hover:bg-[#ffd001] transition-colors">
                  <Camera className="w-4 h-4 text-black" />
                </span>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#ca8a04] font-semibold block">
                    03 / Equipment & Studio Requirements
                  </span>
                  <h3 className="font-sans font-light text-lg sm:text-2xl text-black group-hover:opacity-75 transition-opacity">
                    Gear Checklist & Campus Access
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="hidden sm:inline-block font-mono text-xs text-[#777777]">
                  Zero Guesswork
                </span>
                <span className="w-8 h-8 rounded-full border border-[#d8d6c8] flex items-center justify-center text-black group-hover:border-black transition-colors">
                  {openSections[2] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </div>
            </button>

            {openSections[2] && (
              <div className="pt-6 sm:pt-8 pl-0 sm:pl-14">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                  {/* You Bring */}
                  <div className="bg-[#fbf9f0] border border-[#e8e6d9] p-5 sm:p-6">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#ca8a04] font-semibold block mb-2">
                      You Bring
                    </span>
                    <h4 className="font-sans font-normal text-base text-black mb-2">
                      {course.equipment}
                    </h4>
                    <p className="font-sans text-xs text-[#555555] leading-relaxed">
                      Any working body capable of manual controls. Laptops or tablets for editing submissions.
                    </p>
                  </div>

                  {/* IIP Provides */}
                  <div className="bg-[#fbf9f0] border border-[#e8e6d9] p-5 sm:p-6">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#ca8a04] font-semibold block mb-2">
                      IIP Studio Provides
                    </span>
                    <h4 className="font-sans font-normal text-base text-black mb-2">
                      Professional Studio Rig
                    </h4>
                    <p className="font-sans text-xs text-[#555555] leading-relaxed">
                      Godox & Elinchrom studio flash heads, light shaping softboxes, color backdrops, and darkroom chemistry.
                    </p>
                  </div>

                  {/* Prerequisites */}
                  <div className="bg-[#fbf9f0] border border-[#e8e6d9] p-5 sm:p-6">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#ca8a04] font-semibold block mb-2">
                      Prior Experience
                    </span>
                    <h4 className="font-sans font-normal text-base text-black mb-2">
                      {course.level} Level
                    </h4>
                    <p className="font-sans text-xs text-[#555555] leading-relaxed">
                      {course.prerequisites?.[0] || "No prior photography experience or camera portfolio required."}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ============================================================ */}
          {/* DRAWER 4: TUITION, PAYMENT OPTIONS & RESCHEDULING            */}
          {/* ============================================================ */}
          <div className="py-5 sm:py-6">
            <button
              type="button"
              onClick={() => toggleSection(3)}
              className="w-full flex items-center justify-between text-left cursor-pointer group"
              aria-expanded={Boolean(openSections[3])}
            >
              <div className="flex items-center gap-3.5 sm:gap-5 pr-4">
                <span className="w-9 h-9 rounded-full bg-[#f2efe4] border border-[#e2e0d2] flex items-center justify-center shrink-0 group-hover:bg-[#ffd001] transition-colors">
                  <CreditCard className="w-4 h-4 text-black" />
                </span>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#ca8a04] font-semibold block">
                    04 / Tuition & Flexible Settlement
                  </span>
                  <h3 className="font-sans font-light text-lg sm:text-2xl text-black group-hover:opacity-75 transition-opacity">
                    Payment Methods & Admissions Policy
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="hidden sm:inline-block font-mono text-xs text-[#ca8a04] font-semibold">
                  {course.payableFee}
                </span>
                <span className="w-8 h-8 rounded-full border border-[#d8d6c8] flex items-center justify-center text-black group-hover:border-black transition-colors">
                  {openSections[3] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </div>
            </button>

            {openSections[3] && (
              <div className="pt-6 sm:pt-8 pl-0 sm:pl-14">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                  {/* Payment Methods (7 cols) */}
                  <div className="lg:col-span-7 bg-[#fbf9f0] border border-[#e8e6d9] p-5 sm:p-6">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#888888] font-semibold block mb-3 pb-2 border-b border-[#eae8dc]">
                      Accepted Settlement Methods
                    </span>
                    <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-[#333333]">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ffd001]" />
                        <span>Digital Wallets: eSewa and Khalti instant scan-to-pay</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ffd001]" />
                        <span>Direct Bank Transfer: Nepal Investment Mega Bank (NIMB) and Nabil Bank</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ffd001]" />
                        <span>In-Person Counter: Cash & card payments at Jyoti Bhawan, Kanti Path</span>
                      </li>
                    </ul>
                  </div>

                  {/* Rescheduling & Cohort Policy (5 cols) */}
                  <div className="lg:col-span-5 bg-[#fffef7] border border-[#e8e6d9] p-5 sm:p-6 flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[#888888] font-semibold block mb-2">
                        Cohort Rescheduling Policy
                      </span>
                      <p className="font-sans text-xs text-[#555555] leading-relaxed mb-4">
                        Seats are strictly limited to ensure small cohorts. If you need to defer your intake, notify admissions up to 7 days before orientation at no penalty.
                      </p>
                    </div>

                    <Link
                      href={`/enroll?course=${course.slug}`}
                      className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#ffd001] hover:bg-black hover:text-[#fffef7] text-black font-mono text-xs uppercase tracking-[0.16em] font-semibold transition-all shadow-xs"
                    >
                      <span>Proceed to Enrollment</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ============================================================ */}
          {/* DRAWER 5: FREQUENTLY ASKED QUESTIONS                         */}
          {/* ============================================================ */}
          <div className="py-5 sm:py-6">
            <button
              type="button"
              onClick={() => toggleSection(4)}
              className="w-full flex items-center justify-between text-left cursor-pointer group"
              aria-expanded={Boolean(openSections[4])}
            >
              <div className="flex items-center gap-3.5 sm:gap-5 pr-4">
                <span className="w-9 h-9 rounded-full bg-[#f2efe4] border border-[#e2e0d2] flex items-center justify-center shrink-0 group-hover:bg-[#ffd001] transition-colors">
                  <HelpCircle className="w-4 h-4 text-black" />
                </span>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#ca8a04] font-semibold block">
                    05 / Common Queries & Guidance
                  </span>
                  <h3 className="font-sans font-light text-lg sm:text-2xl text-black group-hover:opacity-75 transition-opacity">
                    Frequently Asked Questions
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="hidden sm:inline-block font-mono text-xs text-[#777777]">
                  {course.faqs.length} Answers
                </span>
                <span className="w-8 h-8 rounded-full border border-[#d8d6c8] flex items-center justify-center text-black group-hover:border-black transition-colors">
                  {openSections[4] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </div>
            </button>

            {openSections[4] && (
              <div className="pt-6 sm:pt-8 pl-0 sm:pl-14">
                <div className="flex flex-col divide-y divide-[#eae8dc] border-y border-[#eae8dc]">
                  {course.faqs.map((faq, fIdx) => {
                    const isFaqOpen = activeFaqIndex === fIdx;
                    return (
                      <div key={fIdx} className="py-4">
                        <button
                          type="button"
                          onClick={() => toggleFaq(fIdx)}
                          className="w-full flex items-center justify-between text-left cursor-pointer group"
                          aria-expanded={isFaqOpen}
                        >
                          <h4 className="font-sans font-normal text-sm sm:text-base text-black group-hover:text-[#ca8a04] transition-colors pr-4">
                            {faq.question}
                          </h4>
                          <span className="w-6 h-6 rounded-full border border-[#d8d6c8] flex items-center justify-center text-black shrink-0 text-xs">
                            {isFaqOpen ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                          </span>
                        </button>

                        {isFaqOpen && (
                          <div className="pt-2.5 pr-8">
                            <p className="font-sans text-xs sm:text-sm text-[#555555] leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <span className="font-mono text-xs text-[#888888]">
                    Have a distinct inquiry?
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-black hover:text-[#ca8a04] font-semibold transition-colors"
                  >
                    <span>Talk with Admissions</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
