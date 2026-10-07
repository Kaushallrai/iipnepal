"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CourseItem } from "@/lib/courses-data";
import LineReveal from "@/components/animations/LineReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";

export interface CourseRelatedSectionProps {
  relatedCourses: CourseItem[];
}

export default function CourseRelatedSection({
  relatedCourses,
}: CourseRelatedSectionProps): React.JSX.Element {
  if (relatedCourses.length === 0) return <></>;

  return (
    <section id="related-programs" className="w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-[#fffef7] border-b border-[#e2e0d2]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 pb-6 sm:pb-8 mb-10 sm:mb-12 border-b border-[#e2e0d2]">
          <div className="max-w-2xl flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3 sm:mb-4 select-none">
              <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#888888] font-medium">
                Curricular Pathways // Alternate Tracks
              </span>
            </div>

            <LineReveal
              as="h2"
              lines={["Explore Alternative Programs."]}
              className="font-sans font-light text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.12] text-black tracking-[-0.03em] mb-3 sm:mb-4"
            />

            <p className="font-sans font-normal text-sm sm:text-base text-[#555555] leading-relaxed max-w-xl">
              Adjacent certification tracks benchmarked against international photography standards,
              conducted with practical darkroom and studio shooting briefs in Kathmandu.
            </p>
          </div>

          <Link
            href="/courses"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-black hover:text-[#ca8a04] transition-colors py-2 group self-start lg:self-end shrink-0"
          >
            <span>All Courses Directory</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Architectural 2-Column Showcase (Anti-Slop: No Nested Border Cards) */}
        <ScrollReveal variant="stagger-children" stagger={0.12} start="top 88%">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 xl:gap-24">
            {relatedCourses.map((rel) => (
              <article
                key={rel.id}
                className="scroll-item group flex flex-col justify-between"
              >
                {/* 1. Large Crisp Photographic Frame with Archival Framing */}
                <Link
                  href={`/courses/${rel.slug}`}
                  className="relative block w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-black mb-6 sm:mb-8 border border-[#e2e0d2]"
                >
                  <Image
                    src={rel.coverImage}
                    alt={rel.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-104 grayscale contrast-105 group-hover:grayscale-0 transition-all"
                  />

                  {/* Archival Stamp Header */}
                  <div className="absolute top-3.5 left-3.5 bg-black/85 backdrop-blur-xs text-white font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] px-2.5 py-1">
                    {rel.level} // Track {rel.number}
                  </div>

                  {rel.discount && (
                    <div className="absolute top-3.5 right-3.5 bg-[#ffd001] text-black font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 shadow-sm">
                      {rel.discount}
                    </div>
                  )}

                  {/* Corner Vignette Accent on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </Link>

                {/* 2. Typographic Metadata & Title */}
                <div className="flex flex-col gap-3.5">
                  <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wider text-[#777777] pb-2.5 border-b border-[#e2e0d2]">
                    <span className="text-black font-medium truncate mr-2">
                      Duration: {rel.duration}
                    </span>
                    <span className="font-sans font-light text-base sm:text-lg lg:text-xl text-black whitespace-nowrap tabular-nums shrink-0">
                      {rel.payableFee}
                    </span>
                  </div>

                  <h3 className="font-sans font-light text-xl sm:text-2xl lg:text-[28px] leading-snug text-black tracking-[-0.025em]">
                    <Link
                      href={`/courses/${rel.slug}`}
                      className="group-hover:opacity-75 transition-opacity no-underline text-inherit"
                    >
                      {rel.title}
                    </Link>
                  </h3>

                  <p className="font-sans font-normal text-xs sm:text-sm md:text-[15px] text-[#555555] leading-relaxed line-clamp-2">
                    {rel.description}
                  </p>

                  {/* 3. Action Row */}
                  <div className="pt-4 sm:pt-5 flex items-center justify-between">
                    <Link
                      href={`/courses/${rel.slug}`}
                      className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-[13px] uppercase tracking-[0.16em] font-medium text-black group-hover:text-[#ca8a04] transition-colors"
                    >
                      <span>Explore Syllabus</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>

                    <Link
                      href={`/enroll?course=${rel.slug}`}
                      className="font-mono text-xs uppercase tracking-[0.14em] text-black/70 hover:text-black py-1.5 px-4 rounded-full border border-black/15 hover:border-black transition-all"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
