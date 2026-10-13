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
      <div className="py-24 text-center bg-[#fffef7]">
        <p className="font-mono text-xs text-[#888888] uppercase tracking-wider">
          No stories found in this category.
        </p>
      </div>
    );
  }

  return (
    <section id="portfolio-archive" className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* ============================================================ */}
        {/* BALANCED, EQUAL-SIZE EXHIBITION ROSTER (Responsive 1/2/3 Col) */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 items-stretch">
          {items.map((item, idx) => {
            return (
              <ScrollReveal
                key={item.id}
                variant="fade-up"
                distance={20}
                duration={0.7}
                delay={(idx % 3) * 0.08}
                className="w-full flex"
              >
                <article
                  className="w-full h-full bg-[#fffef7] border border-[#e8e6d9] hover:border-black transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between group shadow-none"
                  aria-label={`Student story: ${item.title} by ${item.photographer}`}
                >
                  {/* Top Bar: Plate Index & Category Tag */}
                  <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-[#777777] mb-3">
                    <span className="font-semibold text-black">
                      PLATE // [{item.number}]
                    </span>
                    <span className="bg-[#f2efe4] text-black px-2.5 py-0.5 rounded-full font-medium text-[10.5px] border border-[#e2e0d2]">
                      {item.category || item.tag}
                    </span>
                  </div>

                  {/* Photo: Exact Uniform Aspect Ratio 16/10 across all cards */}
                  <Link
                    href={`/portfolio/${item.slug}`}
                    className="relative block w-full aspect-[16/10] overflow-hidden bg-black mb-4 border border-[#e2e0d2]"
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <Image
                      src={item.image || item.coverImage}
                      alt={`${item.title} by ${item.photographer}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={idx === 0}
                      className="object-cover object-center grayscale contrast-110 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Camera Rig & Optics Strip Overlay */}
                    {item.specs && (
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-white/90 bg-black/85 backdrop-blur-xs px-2.5 py-1 border border-white/10">
                        <span className="truncate max-w-[65%]">
                          {item.specs.camera} · {item.specs.lens}
                        </span>
                        <span className="text-[#ffd001] shrink-0 font-medium pl-1">
                          {item.specs.exposure}
                        </span>
                      </div>
                    )}
                  </Link>

                  {/* Card Content */}
                  <div className="flex-1 flex flex-col justify-start">
                    {/* Student Byline & Location */}
                    <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#777777] pb-2 border-b border-[#f0eee3] mb-2.5">
                      <span className="text-black font-semibold">
                        {item.photographer}
                      </span>
                      <span className="truncate text-[#888888]">
                        {item.location?.split(",")[0]} • {item.year}
                      </span>
                    </div>

                    {/* Story Title */}
                    <h2 className="font-sans font-light text-xl sm:text-[22px] leading-snug text-black mb-1.5 line-clamp-2 min-h-[3.2rem]">
                      <Link
                        href={`/portfolio/${item.slug}`}
                        className="hover:opacity-75 transition-opacity no-underline text-inherit"
                      >
                        {item.title}
                      </Link>
                    </h2>

                    {/* Curriculum Track */}
                    <div className="font-mono text-[11px] text-[#888888] uppercase tracking-[0.08em] mb-2 truncate">
                      Track: {item.course ? item.course.split("(")[0].trim() : "Documentary"}
                    </div>

                    {/* Summary Narrative */}
                    <p className="font-sans text-xs sm:text-[13.5px] text-[#555555] leading-relaxed line-clamp-2 mb-4 min-h-[2.4rem]">
                      {item.summary || item.description}
                    </p>
                  </div>

                  {/* Card Footer: Action & Plates Count */}
                  <div className="pt-3.5 border-t border-[#f0eee3] flex items-center justify-between mt-auto">
                    <Link
                      href={`/portfolio/${item.slug}`}
                      className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.16em] text-black group-hover:text-[#ca8a04] font-medium transition-colors"
                    >
                      <span>Explore Story</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>

                    <span className="font-mono text-[11px] text-[#888888] uppercase tracking-wider">
                      {item.gallery?.length ? `${item.gallery.length} Plates` : "Exhibition Set"}
                    </span>
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
