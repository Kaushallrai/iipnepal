"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import LineReveal from "@/components/animations/LineReveal";
import type { PortfolioItem } from "@/data/portfolio";

export interface PortfolioRosterProps {
  items: PortfolioItem[];
}

export default function PortfolioRoster({ items }: PortfolioRosterProps): React.JSX.Element {
  if (items.length === 0) {
    return (
      <div className="py-24 text-center">
        <p className="font-mono text-xs text-[#888888] uppercase tracking-wider">
          No exhibition bodies of work found in this category.
        </p>
      </div>
    );
  }

  return (
    <section id="portfolio-roster" className="w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* Spacious Editorial Catalogue Roster with Generous Negative Space */}
        <div className="flex flex-col divide-y divide-[#e2e0d2]">
          {items.map((item, idx) => {
            const mentorName = item.mentor.split("·")[0].replace("Mentor", "").trim();

            return (
              <ScrollReveal
                key={item.id}
                variant="fade-up"
                distance={24}
                duration={0.8}
                start="top 90%"
              >
                <article className="py-12 sm:py-16 md:py-20 lg:py-24 grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 items-center group">
                  
                  {/* 1. Left: Photography Frame (Disciplined, Well-Framed Proportion) */}
                  <div className="md:col-span-5 lg:col-span-5 xl:col-span-4">
                    <Link
                      href={`/portfolio/${item.slug}`}
                      className="relative block w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] xl:aspect-[16/11] overflow-hidden bg-black select-none border border-[#e2e0d2]"
                    >
                      <Image
                        src={item.coverImage}
                        alt={`${item.title} by ${item.photographer}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 30vw"
                        priority={idx === 0}
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
                      />

                      {/* Archival Negative Stamp */}
                      <div className="absolute top-3.5 left-3.5 bg-black/85 text-white font-mono text-[9px] uppercase tracking-widest px-2.5 py-1">
                        ARCHIVE {item.number}
                      </div>

                      <div className="absolute top-3.5 right-3.5 bg-[#ffd001] text-black font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 font-semibold">
                        {item.year}
                      </div>
                    </Link>

                    {/* Archival Frame Meta underneath */}
                    <div className="flex items-center justify-between font-mono text-xs text-[#888888] uppercase tracking-wider pt-3.5 sm:pt-4">
                      <span>4 Curated Archival Frames</span>
                      <span>{item.location.split(",")[0]}</span>
                    </div>
                  </div>

                  {/* 2. Right: Spacious Editorial Narrative & Relocated Action */}
                  <div className="md:col-span-7 lg:col-span-7 xl:col-span-8 flex flex-col justify-between gap-6 sm:gap-8 lg:gap-9 xl:gap-11">
                    
                    {/* Eyebrow Reference */}
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-[0.2em] text-[#777777]">
                      <span className="text-black font-semibold">[{item.number}]</span>
                      <span>/</span>
                      <span className="text-black font-medium">{item.category}</span>
                      <span>•</span>
                      <span>{item.location}</span>
                    </div>

                    {/* Exhibition Title with LineReveal */}
                    <h2 className="font-sans font-light text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[46px] leading-[1.12] text-black tracking-[-0.035em]">
                      <Link
                        href={`/portfolio/${item.slug}`}
                        className="hover:opacity-75 transition-opacity no-underline text-inherit block"
                      >
                        <LineReveal
                          as="span"
                          lines={[item.title]}
                          className="font-sans font-light text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[46px] leading-[1.12] text-black tracking-[-0.035em]"
                        />
                      </Link>
                    </h2>

                    {/* Photographer & Faculty Mentorship Line */}
                    <div className="font-mono text-xs sm:text-[13px] lg:text-sm text-[#666666] flex flex-wrap items-center gap-x-2.5 gap-y-1">
                      <span>Photographed by</span>
                      <strong className="text-black font-medium">{item.photographer}</strong>
                      <span className="text-[#aaaaaa]">•</span>
                      <span>Mentored by</span>
                      <strong className="text-black font-medium">{mentorName || item.mentor}</strong>
                    </div>

                    {/* Narrative Synopsis (Generous Spacing & Readable Measure) */}
                    <p className="font-sans font-normal text-sm sm:text-base lg:text-[17px] text-[#555555] leading-relaxed max-w-2xl xl:max-w-3xl">
                      {item.summary}
                    </p>

                    {/* Bottom Factsheet Strip & Relocated Understated Action Link */}
                    <div className="pt-6 sm:pt-8 lg:pt-10 border-t border-[#e2e0d2] flex flex-col sm:flex-row sm:items-center justify-between gap-5 sm:gap-6">
                      
                      {/* Technical Medium Note */}
                      <div className="font-mono text-xs sm:text-[13px] text-[#888888] flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span>Discipline: {item.discipline}</span>
                        <span className="text-[#cccccc]">•</span>
                        <span>Medium: {item.medium}</span>
                      </div>

                      {/* Relocated Action: Refined, Understated Editorial Text Link (No loud black button) */}
                      <Link
                        href={`/portfolio/${item.slug}`}
                        className="inline-flex items-center gap-2 font-mono text-xs sm:text-[13px] uppercase tracking-[0.2em] text-black hover:text-[#444444] transition-colors group/cta shrink-0 self-start sm:self-auto"
                      >
                        <span className="border-b border-black group-hover/cta:border-[#ffd001] pb-0.5 transition-colors font-medium">
                          Explore Exhibition
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform" />
                      </Link>

                    </div>

                  </div>

                </article>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
