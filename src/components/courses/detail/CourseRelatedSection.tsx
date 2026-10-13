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
    <section id="progression" className="w-full py-14 sm:py-18 bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* Header */}
        <div className="pb-4 mb-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#e2e0d2]">
          <h2 className="font-sans font-light text-2xl sm:text-3xl md:text-4xl text-black tracking-[-0.03em] leading-tight">
            Related Tracks.
          </h2>
          <span className="font-mono text-xs uppercase tracking-wider text-[#888888]">
            Progression Pathways
          </span>
        </div>

        {/* Compact Editorial Related Track Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Item 1 */}
          {prevTrack && (
            <article className="group p-4 sm:p-5 rounded-lg border border-[#e2e0d2] bg-[#fbf9f0] flex flex-col sm:flex-row gap-4 sm:gap-5 items-stretch justify-between transition-colors hover:border-black">
              <Link
                href={`/courses/${prevTrack.slug}`}
                className="relative w-full sm:w-40 md:w-44 aspect-[16/10] sm:aspect-[4/3] shrink-0 overflow-hidden bg-black border border-[#e2e0d2]"
              >
                <Image
                  src={prevTrack.coverImage}
                  alt={prevTrack.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 200px"
                  className="object-cover object-center grayscale contrast-105 group-hover:scale-104 group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute top-2 left-2 bg-black/90 text-white font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5">
                  {prevTrack.deliveryMode}
                </div>
              </Link>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-[#888888] mb-1">
                    <span>COURSE [{prevTrack.number}]</span>
                    <span>{prevTrack.level}</span>
                  </div>

                  <h3 className="font-sans font-normal text-base sm:text-lg text-black mb-1 leading-snug">
                    <Link href={`/courses/${prevTrack.slug}`} className="hover:text-[#ca8a04] transition-colors">
                      {prevTrack.title}
                    </Link>
                  </h3>

                  <p className="font-sans text-xs text-[#666666] line-clamp-1 mb-3">
                    {prevTrack.keyOutcome}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#e2e0d2] font-mono text-xs">
                  <span className="font-medium text-black text-xs">
                    {prevTrack.duration} • {prevTrack.payableFee}
                  </span>
                  <Link
                    href={`/courses/${prevTrack.slug}`}
                    className="inline-flex items-center gap-1 font-semibold text-black group-hover:text-[#ca8a04] transition-colors text-[11px] uppercase tracking-wider whitespace-nowrap min-h-[44px]"
                  >
                    <span>View Track</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </article>
          )}

          {/* Item 2 */}
          {nextTrack && (
            <article className="group p-4 sm:p-5 rounded-lg border border-[#e2e0d2] bg-[#fbf9f0] flex flex-col sm:flex-row gap-4 sm:gap-5 items-stretch justify-between transition-colors hover:border-black">
              <Link
                href={`/courses/${nextTrack.slug}`}
                className="relative w-full sm:w-40 md:w-44 aspect-[16/10] sm:aspect-[4/3] shrink-0 overflow-hidden bg-black border border-[#e2e0d2]"
              >
                <Image
                  src={nextTrack.coverImage}
                  alt={nextTrack.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 200px"
                  className="object-cover object-center grayscale contrast-105 group-hover:scale-104 group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute top-2 left-2 bg-black/90 text-white font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5">
                  {nextTrack.deliveryMode}
                </div>
              </Link>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-[#888888] mb-1">
                    <span>COURSE [{nextTrack.number}]</span>
                    <span>{nextTrack.level}</span>
                  </div>

                  <h3 className="font-sans font-normal text-base sm:text-lg text-black mb-1 leading-snug">
                    <Link href={`/courses/${nextTrack.slug}`} className="hover:text-[#ca8a04] transition-colors">
                      {nextTrack.title}
                    </Link>
                  </h3>

                  <p className="font-sans text-xs text-[#666666] line-clamp-1 mb-3">
                    {nextTrack.keyOutcome}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#e2e0d2] font-mono text-xs">
                  <span className="font-medium text-black text-xs">
                    {nextTrack.duration} • {nextTrack.payableFee}
                  </span>
                  <Link
                    href={`/courses/${nextTrack.slug}`}
                    className="inline-flex items-center gap-1 font-semibold text-black group-hover:text-[#ca8a04] transition-colors text-[11px] uppercase tracking-wider whitespace-nowrap min-h-[44px]"
                  >
                    <span>View Track</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </article>
          )}

        </div>

      </div>
    </section>
  );
}
