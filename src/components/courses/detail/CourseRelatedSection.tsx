"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CourseItem } from "@/data/courses";

export interface CourseRelatedSectionProps {
  relatedCourses: CourseItem[];
  currentCourseSlug: string;
  currentCourseTitle: string;
}

export default function CourseRelatedSection({
  relatedCourses,
  currentCourseSlug,
  currentCourseTitle,
}: CourseRelatedSectionProps): React.JSX.Element {
  if (relatedCourses.length === 0) return <></>;

  const [prevTrack, nextTrack] = relatedCourses.slice(0, 2);

  return (
    <section id="progression" className="w-full py-16 sm:py-20 md:py-24 bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-3 select-none">
            <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#888888] font-semibold">
              08 // ACADEMIC PROGRESSION
            </span>
          </div>
          <h2 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl text-black tracking-[-0.03em] leading-tight">
            Next Steps in Your Craft.
          </h2>
        </div>

        {/* 2 Large Cards (One Pastel, One Bone White) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16 sm:mb-20">
          
          {/* Card 1: Pastel Card */}
          {prevTrack && (
            <Link
              href={`/courses/${prevTrack.slug}`}
              className="group flex flex-col justify-between bg-[#fbf9f0] border border-[#e8e6d9] hover:border-black transition-all p-6 sm:p-8 no-underline text-inherit"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.16em] text-[#777777] mb-4">
                  <span className="font-semibold text-black">
                    COURSE {prevTrack.number} // {prevTrack.level.toUpperCase()}
                  </span>
                  <span>ALTERNATIVE TRACK</span>
                </div>

                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black border border-[#e2e0d2] mb-5">
                  <Image
                    src={prevTrack.coverImage}
                    alt={prevTrack.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center grayscale contrast-105 group-hover:scale-104 transition-transform duration-500"
                  />
                </div>

                <h3 className="font-sans font-light text-2xl text-black mb-2 group-hover:text-black">
                  {prevTrack.title}
                </h3>
                <p className="font-sans text-sm text-[#666666] leading-relaxed line-clamp-2 mb-4">
                  {prevTrack.keyOutcome}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#e8e6d9] font-mono text-xs uppercase tracking-wider">
                <span className="text-[#666666]">
                  {prevTrack.duration} • {prevTrack.deliveryMode}
                </span>
                <span className="inline-flex items-center gap-1 font-semibold text-black group-hover:text-[#ca8a04]">
                  <span>View course</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          )}

          {/* Card 2: Bone White Card */}
          {nextTrack && (
            <Link
              href={`/courses/${nextTrack.slug}`}
              className="group flex flex-col justify-between bg-[#fffef7] border border-[#e8e6d9] hover:border-black transition-all p-6 sm:p-8 no-underline text-inherit"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.16em] text-[#777777] mb-4">
                  <span className="font-semibold text-black">
                    COURSE {nextTrack.number} // {nextTrack.level.toUpperCase()}
                  </span>
                  <span>ADVANCED PROGRESSION</span>
                </div>

                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black border border-[#e2e0d2] mb-5">
                  <Image
                    src={nextTrack.coverImage}
                    alt={nextTrack.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center grayscale contrast-105 group-hover:scale-104 transition-transform duration-500"
                  />
                </div>

                <h3 className="font-sans font-light text-2xl text-black mb-2 group-hover:text-black">
                  {nextTrack.title}
                </h3>
                <p className="font-sans text-sm text-[#666666] leading-relaxed line-clamp-2 mb-4">
                  {nextTrack.keyOutcome}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#e8e6d9] font-mono text-xs uppercase tracking-wider">
                <span className="text-[#666666]">
                  {nextTrack.duration} • {nextTrack.deliveryMode}
                </span>
                <span className="inline-flex items-center gap-1 font-semibold text-black group-hover:text-[#ca8a04]">
                  <span>View course</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          )}

        </div>

        {/* Closing Enroll Pill Block */}
        <div className="w-full pt-10 sm:pt-12 border-t border-[#e2e0d2] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex flex-col">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#888888] mb-1">
              Ready to Begin Mentorship?
            </span>
            <span className="font-sans font-light text-2xl sm:text-3xl text-black">
              {currentCourseTitle}
            </span>
          </div>

          <Link
            href={`/enroll?course=${currentCourseSlug}`}
            className="inline-flex items-center justify-center gap-2 py-4 px-9 rounded-full bg-black hover:bg-[#ffd001] hover:text-black text-[#fffef7] font-mono text-xs sm:text-[13px] uppercase tracking-[0.16em] font-semibold transition-all active:scale-[0.98] shadow-md leading-none whitespace-nowrap self-start sm:self-auto"
          >
            <span>Enroll in This Track</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
