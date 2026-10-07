"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import type { CourseItem } from "@/lib/courses-data";

import LineReveal from "@/components/animations/LineReveal";

export interface CourseDetailHeroProps {
  course: CourseItem;
}

export default function CourseDetailHero({ course }: CourseDetailHeroProps): React.JSX.Element {
  return (
    <section className="w-full pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-14 md:pb-16 border-b border-[#e2e0d2] bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* Breadcrumb & Department Reference */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 sm:pb-6 border-b border-[#e2e0d2] text-xs font-mono uppercase tracking-[0.18em] text-[#888888]">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2.5">
            <Link href="/courses" className="hover:text-black transition-colors">
              Courses
            </Link>
            <span>/</span>
            <span className="text-black font-semibold truncate max-w-[200px] sm:max-w-none">
              {course.title}
            </span>
          </nav>

          <div className="flex items-center gap-2 text-black font-medium">
            <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)]" />
            <span>{course.level} Level</span>
          </div>
        </div>

        {/* Title & Tagline with LineReveal */}
        <div className="pt-6 sm:pt-8 pb-6 sm:pb-8 max-w-5xl">
          <LineReveal
            as="h1"
            lines={[course.title]}
            className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[58px] xl:text-[64px] leading-[1.08] tracking-[-0.035em] text-black mb-3 sm:mb-4"
          />

          <LineReveal
            as="p"
            lines={[course.tagline]}
            className="font-mono text-xs sm:text-sm md:text-base text-[#666666] tracking-[0.04em] uppercase leading-relaxed"
          />
        </div>

        {/* 2-Column Split: Archival Photo + Clean Typographic Factsheet */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 xl:gap-16 items-center">
          
          {/* Photo (Compact height on mobile so user doesn't scroll excessively) */}
          <div className="lg:col-span-7">
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] max-h-[220px] sm:max-h-[320px] lg:max-h-none overflow-hidden bg-black border border-[#e2e0d2]">
              <Image
                src={course.coverImage}
                alt={course.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center"
              />

              <div className="absolute top-3 left-3 bg-black/85 text-white font-mono text-[9px] uppercase tracking-widest px-2.5 py-1">
                IIP ARCHIVE // 35MM
              </div>

              {course.discount && (
                <div className="absolute top-3 right-3 bg-[#ffd001] text-black font-mono text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 uppercase tracking-wider">
                  {course.discount}
                </div>
              )}
            </div>
          </div>

          {/* Typographic Factsheet */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 sm:gap-10 lg:gap-12">
            <div className="flex flex-col gap-5 sm:gap-6">
              <div className="pb-3.5 border-b border-[#e2e0d2]">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#888888]">
                  Program Specifications
                </span>
              </div>

              <dl className="grid grid-cols-2 gap-y-5 sm:gap-y-6 gap-x-6 sm:gap-x-8 text-xs sm:text-[13px] font-mono">
                <div>
                  <dt className="text-[#888888] uppercase tracking-wider mb-1 text-[11px]">Duration</dt>
                  <dd className="font-medium text-black text-sm sm:text-base">{course.duration}</dd>
                </div>
                <div>
                  <dt className="text-[#888888] uppercase tracking-wider mb-1 text-[11px]">Instruction</dt>
                  <dd className="font-medium text-black text-sm sm:text-base">1-on-1 Mentor</dd>
                </div>
                <div>
                  <dt className="text-[#888888] uppercase tracking-wider mb-1 text-[11px]">Intake</dt>
                  <dd className="font-medium text-black text-sm sm:text-base">{course.intake}</dd>
                </div>
                <div>
                  <dt className="text-[#888888] uppercase tracking-wider mb-1 text-[11px]">Credential</dt>
                  <dd className="font-medium text-black text-sm sm:text-base">IIP Certificate</dd>
                </div>
              </dl>

              {/* Tuition Block: Guaranteed Single-Line Rs. Price */}
              <div className="pt-5 sm:pt-6 border-t border-[#e2e0d2]">
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#888888] block mb-1.5">
                  Tuition Fee
                </span>
                <div className="flex items-baseline gap-3 whitespace-nowrap">
                  <span className="font-sans font-light text-2xl sm:text-3xl lg:text-4xl text-black whitespace-nowrap tabular-nums">
                    {course.payableFee}
                  </span>
                  {course.totalFee !== course.payableFee && (
                    <span className="font-mono text-sm sm:text-base text-[#999999] line-through whitespace-nowrap tabular-nums">
                      {course.totalFee}
                    </span>
                  )}
                  {course.discount && (
                    <span className="font-mono text-xs font-semibold text-[#dc2626] whitespace-nowrap">
                      ({course.discount})
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href={`/enroll?course=${course.slug}`}
                className="inline-flex items-center justify-center gap-2 py-3.5 px-7 rounded-full bg-[#ffd001] hover:bg-black hover:text-[#fffef7] text-black font-mono text-xs sm:text-[13px] uppercase tracking-[0.16em] font-semibold transition-all shadow-sm leading-none whitespace-nowrap"
              >
                <span>Enroll in Course</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href="tel:+9779802364760"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-black/5 hover:bg-black/10 text-black font-mono text-xs sm:text-[13px] uppercase tracking-[0.16em] transition-all leading-none whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-[#888888]" />
                <span>+977 9802364760</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
