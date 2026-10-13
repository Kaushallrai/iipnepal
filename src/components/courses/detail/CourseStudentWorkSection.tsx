"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { masterPortfolioList } from "@/data/portfolio/items";

export default function CourseStudentWorkSection(): React.JSX.Element {
  // Grab 4 standout student works
  const featuredWorks = masterPortfolioList.slice(0, 4);

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12 pb-4 border-b border-[#e2e0d2]">
          <h2 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl text-black tracking-[-0.03em] leading-tight">
            Selected Student Work.
          </h2>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-black hover:text-[#ca8a04] transition-colors self-start sm:self-end pb-1"
          >
            <span>View Full Archive</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Snap Row of 4 Square Photos Linked to Stories */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 sm:gap-8 scrollbar-none pb-4 -mx-6 px-6 sm:-mx-8 sm:px-8 md:-mx-12 md:px-12 lg:-mx-0 lg:px-0 lg:grid lg:grid-cols-4">
          {featuredWorks.map((work) => (
            <div
              key={work.id}
              className="w-[78vw] sm:w-[320px] lg:w-auto shrink-0 snap-start flex flex-col group"
            >
              <Link
                href={`/portfolio/${work.slug}`}
                className="relative block aspect-square w-full overflow-hidden bg-black border border-[#e2e0d2] mb-3"
                aria-label={`View story ${work.title} by ${work.photographer}`}
              >
                <Image
                  src={work.image || work.coverImage}
                  alt={`${work.title} by ${work.photographer}`}
                  fill
                  sizes="(max-width: 640px) 78vw, (max-width: 1024px) 320px, 25vw"
                  className="object-cover object-center grayscale contrast-110 group-hover:scale-104 group-hover:grayscale-0 transition-all duration-500"
                />
              </Link>

              {/* Student Metadata */}
              <div className="flex items-baseline justify-between pt-1">
                <span className="font-sans font-medium text-sm text-[#444444] group-hover:text-black transition-colors">
                  {work.photographer}
                </span>
                <span className="font-mono text-[11px] text-[#888888] uppercase tracking-wider">
                  {work.location}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
