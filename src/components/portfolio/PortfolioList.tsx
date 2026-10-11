"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import type { PortfolioItem } from "@/data/portfolio";

export interface PortfolioListProps {
  items: PortfolioItem[];
}

export default function PortfolioList({ items }: PortfolioListProps): React.JSX.Element {
  if (items.length === 0) {
    return (
      <div className="py-24 text-center">
        <p className="font-mono text-xs text-[#888888] uppercase tracking-wider">
          No exhibition bodies of work found in this category.
        </p>
      </div>
    );
  }

  // Determine asymmetric grid span per index for gallery flow
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
        return "col-span-12"; // Full-width cinematic frame
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
    <section id="portfolio-roster" className="w-full py-12 sm:py-16 md:py-20 bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* Asymmetric Exhibition Bento Grid */}
        <div className="grid grid-cols-12 gap-x-6 sm:gap-x-8 lg:gap-x-12 gap-y-12 sm:gap-y-16 lg:gap-y-20">
          {items.map((item, idx) => {
            const spanClass = getGridSpanClass(idx);
            const aspectClass = getImageAspectClass(idx);
            const isFullWidth = (idx % 6 === 0) || (idx % 6 === 5);

            return (
              <article
                key={item.id}
                className={`${spanClass} flex flex-col gap-4 border-b border-[#e2e0d2] pb-10 sm:pb-14`}
              >
                <ScrollReveal
                  variant="fade-up"
                  distance={20}
                  duration={0.7}
                  delay={(idx % 2) * 0.05}
                >
                  <Link
                    href={`/portfolio/${item.slug}`}
                    className="group block overflow-hidden no-underline text-inherit select-none"
                  >
                    {/* 1. Sharp 0px Archival Frame with Micro Badges */}
                    <div className={`relative w-full ${aspectClass} overflow-hidden bg-black border border-[#e2e0d2]`}>
                      <Image
                        src={item.coverImage}
                        alt={`${item.title} by ${item.photographer}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 95vw"
                        priority={idx === 0}
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-102"
                      />

                      {/* Archival Negative Stamp */}
                      <div className="absolute top-3 left-3 bg-black/85 text-white font-mono text-[9px] uppercase tracking-widest px-2.5 py-1">
                        ARCHIVE {item.number}
                      </div>

                      <div className="absolute top-3 right-3 bg-[#ffd001] text-black font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 font-semibold">
                        {item.category}
                      </div>
                    </div>

                    {/* 2. Micro Metadata Strip Directly Below Image */}
                    <div className="pt-3 pb-1.5 flex items-center justify-between font-mono text-[11px] text-[#777777] uppercase tracking-[0.16em] border-b border-[#f0eee3]">
                      <span>{item.location}</span>
                      <span>Series {item.number} · {item.year}</span>
                    </div>

                    {/* 3. Concise Editorial Caption Strip */}
                    <div className={`pt-4 flex flex-col ${isFullWidth ? "md:flex-row md:items-start md:justify-between gap-4 md:gap-10" : "gap-3"}`}>
                      
                      <div className="flex-1 flex flex-col gap-1.5">
                        <div className="flex items-center gap-2">
                          <h2 className="font-sans font-light text-2xl sm:text-3xl text-black leading-tight group-hover:opacity-75 transition-opacity">
                            {item.title}
                          </h2>
                        </div>

                        <div className="font-mono text-xs text-[#666666] flex flex-wrap items-center gap-x-2 gap-y-1">
                          <span>Photographer:</span>
                          <span className="text-black font-medium">{item.photographer}</span>
                          <span className="text-[#cccccc]">•</span>
                          <span className="text-[#777777]">{item.discipline}</span>
                        </div>

                        {/* Brief 1-sentence caption */}
                        <p className="font-sans font-normal text-xs sm:text-sm text-[#555555] leading-relaxed max-w-2xl line-clamp-2 pt-1">
                          {item.summary}
                        </p>
                      </div>

                      {/* Click-through Action */}
                      <div className="pt-2 md:pt-1 shrink-0 self-start md:self-auto">
                        <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.16em] text-black group-hover:text-[#ca8a04] transition-colors font-medium">
                          <span>Explore Story</span>
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </span>
                      </div>

                    </div>
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
