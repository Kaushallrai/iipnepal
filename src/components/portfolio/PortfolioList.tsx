"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/animations/ScrollReveal";
import type { PortfolioItem } from "@/lib/portfolio-data";

export interface PortfolioListProps {
  items: PortfolioItem[];
}

export default function PortfolioList({ items }: PortfolioListProps): React.JSX.Element {
  if (items.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="font-mono text-xs text-[#888888] uppercase tracking-wider">
          No exhibition bodies of work found in this category.
        </p>
      </div>
    );
  }

  // Determine asymmetric grid span per index
  const getGridSpanClass = (index: number) => {
    switch (index % 6) {
      case 0:
        return "col-span-12"; // Full-width master feature
      case 1:
        return "col-span-12 md:col-span-7"; // Asymmetric 7-column
      case 2:
        return "col-span-12 md:col-span-5"; // Asymmetric 5-column
      case 3:
        return "col-span-12 md:col-span-5"; // Inverted 5-column
      case 4:
        return "col-span-12 md:col-span-7"; // Inverted 7-column
      case 5:
        return "col-span-12"; // Cinematic full-width frame
      default:
        return "col-span-12 md:col-span-6";
    }
  };

  const getImageAspectClass = (index: number) => {
    switch (index % 6) {
      case 0:
        return "aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9]";
      case 1:
        return "aspect-[16/10] sm:aspect-[16/11]";
      case 2:
        return "aspect-[4/3] sm:aspect-[4/3.5]";
      case 3:
        return "aspect-[4/3] sm:aspect-[4/3.5]";
      case 4:
        return "aspect-[16/10] sm:aspect-[16/11]";
      case 5:
        return "aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9]";
      default:
        return "aspect-[16/10]";
    }
  };

  return (
    <section id="portfolio-roster" className="w-full py-10 sm:py-14 md:py-18 bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        
        {/* Asymmetric Exhibition Bento Grid */}
        <div className="grid grid-cols-12 gap-x-6 sm:gap-x-8 lg:gap-x-12 gap-y-14 sm:gap-y-18 lg:gap-y-24">
          {items.map((item, idx) => {
            const spanClass = getGridSpanClass(idx);
            const aspectClass = getImageAspectClass(idx);
            const isFeaturedMaster = idx === 0;

            return (
              <article
                key={item.id}
                className={`${spanClass} flex flex-col gap-4 border-b border-[#e2e0d2] pb-12 sm:pb-16`}
              >
                <ScrollReveal
                  variant="fade-up"
                  distance={20}
                  duration={0.7}
                  delay={(idx % 2) * 0.06}
                >
                  <Link
                    href={`/portfolio/${item.slug}`}
                    className="group block overflow-hidden no-underline text-inherit select-none"
                  >
                    {/* 1. Sharp 0px Archival Frame (No Tag Overlays on the Image) */}
                    <div className={`relative w-full ${aspectClass} overflow-hidden bg-black`}>
                      <Image
                        src={item.coverImage}
                        alt={`${item.title} by ${item.photographer}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 95vw"
                        priority={idx === 0}
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
                      />
                    </div>

                    {/* Quiet Caption Strip Directly Below Image */}
                    <div className="pt-2.5 pb-1 flex items-center justify-between font-mono text-[11px] text-[#777777] uppercase tracking-[0.16em] border-b border-[#f0eee3]">
                      <span>{item.location}</span>
                      <span>Series {item.number} / {item.category}</span>
                    </div>

                    {/* 2. Rich Editorial Details */}
                    {isFeaturedMaster ? (
                      /* Featured Project 01 Detailed 2-Column Presentation */
                      <div className="pt-5 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
                        
                        {/* Left: Title, Tagline & Deep Narrative (col 1-7) */}
                        <div className="lg:col-span-7 flex flex-col gap-3">
                          <h2 className="font-sans font-light text-2xl sm:text-3xl lg:text-4xl text-black leading-tight group-hover:opacity-75 transition-opacity">
                            {item.title}
                          </h2>

                          <p className="font-mono text-xs sm:text-[13px] text-[#8a0467] uppercase tracking-wider font-medium">
                            {item.tagline}
                          </p>

                          <p className="font-sans font-normal text-xs sm:text-sm text-[#555555] leading-relaxed pt-1">
                            {item.statement}
                          </p>
                        </div>

                        {/* Right: Technical Factsheet & Action (col 8-12) */}
                        <div className="lg:col-span-5 flex flex-col justify-between gap-6 pt-2 lg:pt-0">
                          <div className="p-5 bg-white border border-[#e2e0d2] flex flex-col gap-3 text-xs font-mono">
                            <div className="flex flex-col gap-0.5">
                              <span className="text-[#999999] uppercase text-[10px] tracking-wider">Photographer & Track</span>
                              <span className="font-medium text-black text-sm">{item.photographer}</span>
                              <span className="text-[#666666] text-[11px]">{item.course}</span>
                            </div>

                            <div className="pt-2 border-t border-[#f0eee3] flex flex-col gap-0.5">
                              <span className="text-[#999999] uppercase text-[10px] tracking-wider">Curatorial Mentor</span>
                              <span className="text-black">{item.mentor}</span>
                            </div>

                            <div className="pt-2 border-t border-[#f0eee3] flex flex-col gap-0.5">
                              <span className="text-[#999999] uppercase text-[10px] tracking-wider">Medium & Technique</span>
                              <span className="text-[#444444] text-[11px] leading-relaxed">{item.medium}</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="font-mono text-xs uppercase tracking-[0.16em] text-black group-hover:text-[#8a0467] font-semibold transition-colors whitespace-nowrap">
                              Explore Complete Exhibition (4 Frames) →
                            </span>
                          </div>
                        </div>

                      </div>
                    ) : (
                      /* Standard Asymmetric Roster Cards */
                      <div className="pt-4 flex flex-col gap-2">
                        
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                          <h2 className="font-sans font-light text-xl sm:text-2xl text-black leading-snug group-hover:opacity-75 transition-opacity">
                            {item.title}
                          </h2>

                          <span className="font-mono text-xs uppercase tracking-[0.16em] text-black group-hover:text-[#8a0467] font-semibold transition-colors whitespace-nowrap shrink-0 pt-1 sm:pt-0">
                            Explore Story →
                          </span>
                        </div>

                        {/* Summary & Photographer Details */}
                        <p className="font-sans font-normal text-xs sm:text-sm text-[#555555] leading-relaxed line-clamp-3">
                          {item.summary}
                        </p>

                        <div className="pt-2 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-[#777777] border-t border-[#f0eee3]">
                          <div>
                            <span className="text-[#999999]">Photographer: </span>
                            <span className="text-black font-medium">{item.photographer}</span>
                          </div>

                          <div className="hidden sm:inline-block">
                            <span className="text-[#999999]">Discipline: </span>
                            <span className="text-[#444444]">{item.discipline}</span>
                          </div>
                        </div>

                      </div>
                    )}
                  </Link>
                </ScrollReveal>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
