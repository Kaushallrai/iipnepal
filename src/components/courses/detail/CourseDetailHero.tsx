"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowDown, Phone } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import type { CourseItem } from "@/data/courses";

export interface CourseDetailHeroProps {
  course: CourseItem;
}

export default function CourseDetailHero({ course }: CourseDetailHeroProps): React.JSX.Element {
  return (
    <section className="w-full pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-16 md:pb-20 border-b border-[#e2e0d2] bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* 1. Unified Archival Breadcrumb */}
        <div className="flex items-center justify-between gap-4 pb-4 mb-6 sm:mb-8 border-b border-[#e2e0d2] text-xs font-mono uppercase tracking-[0.22em] text-[#888888] select-none">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 min-w-0">
            <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
            <Link href="/courses" className="hover:text-black transition-colors font-medium shrink-0">
              Courses Archive
            </Link>
            <span>/</span>
            <span className="text-black font-semibold truncate">
              {course.title}
            </span>
          </nav>

          <span className="text-black font-mono text-xs uppercase tracking-[0.22em] shrink-0 hidden sm:inline-block">
            Series [{course.number}] · {course.level.toUpperCase()} TRACK
          </span>
        </div>

        {/* 2. Unified Hero Title & Narrative Premise (Zero repetitive content) */}
        <div className="pb-8 sm:pb-10 max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-[#666666] mb-3">
            <span className="px-2.5 py-0.5 rounded-full bg-[#f2efe4] text-black font-semibold border border-[#e2e0d2]">
              {course.level.toUpperCase()} TRACK
            </span>
            <span className="text-[#888888] font-mono text-xs">
              [{course.assignmentsCount}]
            </span>
          </div>

          <h1 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.08] tracking-[-0.035em] text-black mb-3">
            {course.title}
          </h1>

          <p className="font-sans font-normal text-sm sm:text-base md:text-[17px] text-[#555555] leading-relaxed max-w-2xl">
            {course.keyOutcome || course.description}
          </p>
        </div>

        {/* 3. Balanced Side-by-Side Blueprint: Photographic Frame (Left) + Open Editorial Specifications (Right) — ZERO CARDS */}
        <div className="pt-8 sm:pt-10 border-t border-[#e2e0d2] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
          
          {/* LEFT: Photographic Frame */}
          <ScrollReveal variant="fade-up" distance={20} duration={0.8} className="lg:col-span-5 flex flex-col group">
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-black border border-[#e2e0d2]">
              <Image
                src={course.coverImage}
                alt={course.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center grayscale contrast-105 group-hover:scale-[1.02] transition-transform duration-500 ease-out"
              />

              {course.discount && (
                <div className="absolute top-3 right-3 bg-[#ffd001] text-black font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                  {course.discount}
                </div>
              )}
            </div>

            <div className="pt-3 flex items-center justify-between text-[11px] font-mono text-[#888888] uppercase tracking-wider">
              <span>Kathmandu Studio Track</span>
              <span className="text-black font-medium">{course.assignmentsCount}</span>
            </div>
          </ScrollReveal>

          {/* RIGHT: Open Editorial Specifications Ledger & Tuition (Pure typography, ZERO cards) */}
          <ScrollReveal variant="fade-up" distance={20} duration={0.8} delay={0.1} className="lg:col-span-7 flex flex-col justify-between">
            
            {/* 4 Open Editorial Specification Rows (Utilizes space evenly, hairline dividers only, NO CARDS) */}
            <div className="border-t border-[#e2e0d2] divide-y divide-[#e2e0d2]">
              
              {/* Row 1: Duration */}
              <div className="py-4 lg:py-5 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#888888] font-medium block">
                    Duration
                  </span>
                  <span className="font-sans text-xl sm:text-2xl font-light text-black tracking-tight mt-0.5 block">
                    {course.duration}
                  </span>
                </div>
                <span className="font-mono text-xs sm:text-[13px] text-[#666666] shrink-0 text-left sm:text-right">
                  {course.assignmentsCount.split('&')[0]?.trim() || "Structured Study Modules"}
                </span>
              </div>

              {/* Row 2: Delivery */}
              <div className="py-4 lg:py-5 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#888888] font-medium block">
                    Delivery
                  </span>
                  <span className="font-sans text-xl sm:text-2xl font-light text-black tracking-tight mt-0.5 block">
                    {course.deliveryMode}
                  </span>
                </div>
                <span className="font-mono text-xs sm:text-[13px] text-[#666666] shrink-0 text-left sm:text-right">
                  Interactive Mentorship & Critiques
                </span>
              </div>

              {/* Row 3: Next Intake */}
              <div className="py-4 lg:py-5 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#888888] font-medium block">
                    Next Intake
                  </span>
                  <span className="font-sans text-xl sm:text-2xl font-light text-black tracking-tight mt-0.5 block">
                    {course.intake}
                  </span>
                </div>
                <span className="font-mono text-xs sm:text-[13px] text-[#666666] shrink-0 text-left sm:text-right">
                  Rolling Monthly Admissions
                </span>
              </div>

              {/* Row 4: Gear Needed */}
              <div className="py-4 lg:py-5 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#888888] font-medium block">
                    Gear Needed
                  </span>
                  <span className="font-sans text-xl sm:text-2xl font-light text-black tracking-tight mt-0.5 block">
                    {course.equipment}
                  </span>
                </div>
                <span className="font-mono text-xs sm:text-[13px] text-[#666666] shrink-0 text-left sm:text-right">
                  {course.equipment.toLowerCase().includes("smartphone")
                    ? "No Professional DSLR Required"
                    : "Camera Body & Standard Lens"}
                </span>
              </div>

            </div>

            {/* Tuition Breakdown & Enrollment Controls (Single Source of Truth, Open Baseline) */}
            <div className="pt-6 sm:pt-7 lg:pt-8 border-t border-[#e2e0d2] flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              
              <div className="flex flex-col gap-1.5">
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#888888] font-medium">
                  Full Program Tuition
                </span>
                <div className="flex items-baseline gap-2.5 sm:gap-3 whitespace-nowrap flex-nowrap">
                  <span className="font-sans font-light text-2xl sm:text-3xl md:text-4xl text-black tabular-nums whitespace-nowrap">
                    {course.payableFee}
                  </span>
                  {course.totalFee !== course.payableFee && (
                    <span className="font-mono text-xs sm:text-sm text-[#999999] line-through tabular-nums whitespace-nowrap">
                      {course.totalFee}
                    </span>
                  )}
                  {course.discount && (
                    <span className="font-mono text-[10px] sm:text-[11px] font-bold text-black bg-[#ffd001] px-2 sm:px-2.5 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap">
                      {course.discount}
                    </span>
                  )}
                </div>
                <span className="font-mono text-[11px] text-[#666666] tracking-tight">
                  {course.certification || "Official IIP Certificate of Completion"}
                </span>
              </div>

              <div className="flex items-center gap-3 shrink-0 flex-wrap sm:flex-nowrap">
                <Link
                  href={`/enroll?course=${course.slug}`}
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-black text-[#fffef7] hover:bg-[#ffd001] hover:text-black font-mono text-xs uppercase tracking-[0.16em] font-semibold transition-colors shadow-sm cursor-pointer whitespace-nowrap"
                >
                  <span>Enroll in Program</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href="#syllabus"
                  className="inline-flex items-center justify-center gap-1.5 py-3.5 px-5 rounded-full bg-white hover:bg-black hover:text-white text-black font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer border border-[#e2e0d2] whitespace-nowrap"
                >
                  <span>Syllabus</span>
                  <ArrowDown className="w-3 h-3" />
                </a>

                <a
                  href="tel:+9779802364760"
                  className="inline-flex items-center justify-center p-3.5 rounded-full bg-white border border-[#d8d6c8] hover:border-black text-black transition-colors shrink-0"
                  title="Phone Admissions"
                  aria-label="Call Admissions Desk"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>

            </div>

          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
