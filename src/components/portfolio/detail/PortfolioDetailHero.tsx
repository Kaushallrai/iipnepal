"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { PortfolioItem } from "@/data/portfolio";

export interface PortfolioDetailHeroProps {
  item: PortfolioItem;
  onOpenLightbox?: (index: number) => void;
}

export default function PortfolioDetailHero({
  item,
  onOpenLightbox,
}: PortfolioDetailHeroProps): React.JSX.Element {
  return (
    <>
      {/* 1. Cover Band: Full-bleed photo (85vh desktop, 70svh mobile) with location and 34px title over scrim */}
      <section className="relative w-full h-[70svh] lg:h-[85vh] max-h-[100dvh] bg-black overflow-hidden select-none">
        <Image
          src={item.image || item.coverImage}
          alt={item.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center grayscale contrast-110 cursor-pointer"
          onClick={() => onOpenLightbox && onOpenLightbox(0)}
        />

        {/* Top Scrim with Clean Back Link */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none z-10" />
        <div className="absolute top-24 sm:top-28 left-6 sm:left-8 md:left-12 lg:left-16 z-20">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#fffef7] hover:text-[#ffd001] transition-colors py-1.5 px-3 rounded-full bg-black/40 backdrop-blur-md border border-white/20"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Portfolio</span>
          </Link>
        </div>

        {/* Bottom Scrim with 12px Caps Location & 34px Title in Bone White */}
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-8 sm:bottom-10 md:bottom-12 left-6 sm:left-8 md:left-12 lg:left-16 right-6 max-w-4xl z-20">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#ffd001] font-semibold mb-2">
            {item.location}
          </div>
          <h1 className="font-sans font-light text-2xl sm:text-3xl md:text-[34px] leading-tight text-[#fffef7] tracking-[-0.025em]">
            {item.title}
          </h1>
        </div>
      </section>

      {/* 2. Intro + Credits Section (Single 60-word paragraph + 4-line credits block) */}
      <section className="w-full py-12 sm:py-16 md:py-20 border-b border-[#e2e0d2] bg-[#fffef7]">
        <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left: Single Paragraph Intro (≤ 60 words) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#888888] font-semibold mb-3">
                01 // PROJECT OVERVIEW
              </span>
              <p className="font-sans font-normal text-base sm:text-lg md:text-xl text-[#333333] leading-relaxed">
                {item.summary}
              </p>
            </div>

            {/* Right: 4-Line Credits Block */}
            <div className="lg:col-span-5 bg-[#fbf9f0] border border-[#e8e6d9] p-6 sm:p-8 flex flex-col gap-3 font-mono text-xs">
              <div className="flex items-center justify-between pb-2.5 border-b border-[#e8e6d9]">
                <span className="text-[#888888] uppercase tracking-wider">Student Photographer</span>
                <span className="font-semibold text-black uppercase">{item.photographer}</span>
              </div>
              <div className="flex items-center justify-between pb-2.5 border-b border-[#e8e6d9]">
                <span className="text-[#888888] uppercase tracking-wider">Fieldwork Location</span>
                <span className="font-medium text-black">{item.location}</span>
              </div>
              <div className="flex items-center justify-between pb-2.5 border-b border-[#e8e6d9]">
                <span className="text-[#888888] uppercase tracking-wider">Production Year</span>
                <span className="font-medium text-black">{item.year}</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-[#888888] uppercase tracking-wider">Studied Track</span>
                <Link
                  href={`/courses/${item.courseSlug}`}
                  className="font-semibold text-black hover:text-[#ca8a04] underline underline-offset-4 truncate max-w-[200px]"
                >
                  {item.course.split("(")[0].trim()}
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
