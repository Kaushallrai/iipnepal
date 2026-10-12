"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CourseItem } from "@/data/courses";
import LineReveal from "@/components/animations/LineReveal";

export interface CourseDetailHeroProps {
  course: CourseItem;
}

export default function CourseDetailHero({ course }: CourseDetailHeroProps): React.JSX.Element {
  return (
    <section className="w-full pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-16 bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#888888] pb-6 sm:pb-8 border-b border-[#e2e0d2] mb-8 sm:mb-10">
          <Link href="/courses" className="hover:text-black transition-colors">
            Courses
          </Link>
          <span>/</span>
          <span className="text-black font-semibold truncate max-w-[240px] sm:max-w-none">
            {course.title}
          </span>
        </div>

        {/* 7/5 Split: Left Headline & Subcopy, Right 4:5 Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Column (7 cols): Eyebrow, Heading, Sub-copy, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start max-w-3xl">
            {/* Numbered Level Eyebrow */}
            <div className="flex items-center gap-2.5 mb-3 sm:mb-4 select-none">
              <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#777777] font-semibold">
                COURSE {course.number} // {course.level.toUpperCase()}
              </span>
            </div>

            {/* Main Headline */}
            <LineReveal
              as="h1"
              lines={[course.title]}
              className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[62px] leading-[1.08] tracking-[-0.035em] text-black mb-4 sm:mb-5"
            />

            {/* Sub-copy */}
            <p className="font-sans font-normal text-base sm:text-lg md:text-[19px] text-[#555555] leading-relaxed max-w-2xl mb-8 sm:mb-10">
              {course.description}
            </p>

            {/* CTAs: Enroll pill + Contact link */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <Link
                href={`/enroll?course=${course.slug}`}
                className="inline-flex items-center justify-center gap-2 py-3.5 px-8 rounded-full bg-black hover:bg-[#ffd001] hover:text-black text-[#fffef7] font-mono text-xs sm:text-[13px] uppercase tracking-[0.16em] font-semibold transition-all active:scale-[0.98] shadow-sm leading-none"
              >
                <span>Enroll</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-1 font-mono text-xs sm:text-[13px] uppercase tracking-[0.16em] text-black hover:text-[#ca8a04] transition-colors font-medium underline underline-offset-4"
              >
                <span>Contact Admissions</span>
                <span className="text-sm">→</span>
              </Link>
            </div>
          </div>

          {/* Right Column (5 cols): Clean 4:5 Photo Frame (Sharp 0px, no overlay badges) */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px] aspect-[4/5] overflow-hidden bg-black border border-[#e2e0d2]">
              <Image
                src={course.coverImage}
                alt={course.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
