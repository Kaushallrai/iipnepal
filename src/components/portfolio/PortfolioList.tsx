"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Camera, User, Calendar, MapPin } from "lucide-react";
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
          No student bodies of work found in this category.
        </p>
      </div>
    );
  }

  const [leadItem, ...rosterItems] = items;

  return (
    <section id="student-portfolio-roster" className="w-full py-12 sm:py-16 md:py-20 bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* ============================================================== */}
        {/* 1. FEATURED STUDENT SPOTLIGHT (FLAGSHIP EXHIBITION SPREAD)      */}
        {/* ============================================================== */}
        {leadItem && (
          <ScrollReveal variant="fade-up" distance={20} duration={0.8}>
            <article className="mb-14 sm:mb-18 md:mb-22 border border-[#e2e0d2] bg-[#fdfcf5] p-5 sm:p-7 md:p-9 lg:p-11 group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
                
                {/* Large Visual Frame */}
                <div className="lg:col-span-7">
                  <Link
                    href={`/portfolio/${leadItem.slug}`}
                    className="relative block w-full aspect-[16/10] sm:aspect-[16/10] overflow-hidden bg-black border border-[#e2e0d2] select-none"
                  >
                    <Image
                      src={leadItem.coverImage}
                      alt={`${leadItem.title} by student photographer ${leadItem.photographer}`}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />

                    {/* Darkroom Negative Badge */}
                    <div className="absolute top-3 left-3 bg-black/85 text-white font-mono text-[9px] uppercase tracking-widest px-2.5 py-1">
                      STUDENT FELLOW // ARCHIVE {leadItem.number}
                    </div>

                    <div className="absolute top-3 right-3 bg-[#ffd001] text-black font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 font-semibold">
                      {leadItem.category}
                    </div>

                    {/* Gear / Rig strip */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-white/90 bg-black/80 backdrop-blur-xs px-3 py-1.5 border border-white/10">
                      <span className="truncate">{leadItem.specs.camera} · {leadItem.specs.lens}</span>
                      <span className="hidden sm:inline-block text-[#ffd001] shrink-0 pl-2">{leadItem.specs.exposure}</span>
                    </div>
                  </Link>
                </div>

                {/* Editorial Student Credentials & Story */}
                <div className="lg:col-span-5 flex flex-col justify-between gap-6">
                  <div className="flex flex-col gap-3.5">
                    
                    {/* Student Byline Badge */}
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#777777]">
                      <span className="inline-flex items-center gap-1.5 text-black font-semibold bg-[#eae8dc] px-2.5 py-1 rounded-full">
                        <User className="w-3 h-3 text-[#ca8a04]" />
                        <span>{leadItem.photographer}</span>
                      </span>
                      <span>•</span>
                      <span>Class of {leadItem.year}</span>
                    </div>

                    {/* Story Title */}
                    <h2 className="font-sans font-light text-2xl sm:text-3xl lg:text-4xl text-black leading-tight tracking-[-0.03em]">
                      <Link
                        href={`/portfolio/${leadItem.slug}`}
                        className="hover:opacity-75 transition-opacity no-underline text-inherit"
                      >
                        {leadItem.title}
                      </Link>
                    </h2>

                    {/* Course Provenance */}
                    <p className="font-mono text-xs text-[#666666] tracking-[0.06em] uppercase">
                      Curriculum: <span className="text-black font-medium">{leadItem.course.split("(")[0].trim()}</span>
                    </p>

                    {/* Summary Excerpt */}
                    <p className="font-sans font-normal text-sm sm:text-[15px] text-[#555555] leading-relaxed">
                      {leadItem.summary}
                    </p>

                    {/* Student Artist Statement Snippet */}
                    <blockquote className="border-l-2 border-[#ffd001] pl-3.5 py-0.5 text-xs sm:text-sm font-sans italic text-[#333333] leading-relaxed">
                      “{leadItem.statement.split(". ").slice(0, 2).join(". ")}.”
                    </blockquote>

                  </div>

                  {/* Actions & Meta */}
                  <div className="pt-4 border-t border-[#e2e0d2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-2 font-mono text-xs text-[#777777] uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5 text-[#ca8a04]" />
                      <span className="truncate">{leadItem.location}</span>
                    </div>

                    <Link
                      href={`/portfolio/${leadItem.slug}`}
                      className="inline-flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-[0.16em] bg-black text-white hover:bg-[#ffd001] hover:text-black py-3 px-6 rounded-full transition-all duration-200 font-medium shrink-0 leading-none text-center"
                    >
                      <span>View Exhibition Plates</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>

              </div>
            </article>
          </ScrollReveal>
        )}

        {/* ============================================================== */}
        {/* 2. CURATED STUDENT EXHIBITION ROSTER (BALANCED 2-COL GRID)     */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-14">
          {rosterItems.map((item, idx) => (
            <ScrollReveal
              key={item.id}
              variant="fade-up"
              distance={20}
              duration={0.7}
              delay={(idx % 2) * 0.1}
            >
              <article className="border-b border-[#e2e0d2] pb-10 sm:pb-12 flex flex-col justify-between h-full group">
                <Link
                  href={`/portfolio/${item.slug}`}
                  className="block no-underline text-inherit select-none"
                >
                  {/* Photo Frame */}
                  <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-black border border-[#e2e0d2] mb-4 sm:mb-5">
                    <Image
                      src={item.coverImage}
                      alt={`${item.title} by student photographer ${item.photographer}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />

                    {/* Negative stamp */}
                    <div className="absolute top-2.5 left-2.5 bg-black/85 text-white font-mono text-[9px] uppercase tracking-widest px-2 py-0.5">
                      PLATE // {item.number}
                    </div>

                    <div className="absolute top-2.5 right-2.5 bg-[#ffd001] text-black font-mono text-[9.5px] uppercase tracking-wider px-2 py-0.5 font-semibold">
                      {item.category}
                    </div>

                    {/* Bottom gear tag */}
                    <div className="absolute bottom-2.5 left-2.5 bg-black/85 text-white/90 font-mono text-[9.5px] uppercase tracking-wider px-2.5 py-0.5 border border-white/10 max-w-[85%] truncate">
                      {item.specs.camera} · {item.specs.lens}
                    </div>
                  </div>

                  {/* Student Byline & Location */}
                  <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#777777] pb-2 border-b border-[#f0eee3] mb-3">
                    <span className="text-black font-medium">{item.photographer}</span>
                    <span className="truncate">{item.location.split(",")[0]}</span>
                  </div>

                  {/* Project Title */}
                  <h3 className="font-sans font-light text-xl sm:text-2xl text-black leading-snug tracking-[-0.025em] mb-2 group-hover:opacity-75 transition-opacity">
                    {item.title}
                  </h3>

                  {/* Course Name */}
                  <p className="font-mono text-[11px] text-[#888888] uppercase tracking-[0.08em] mb-2.5">
                    Track: {item.course.split("(")[0].trim()}
                  </p>

                  {/* Summary */}
                  <p className="font-sans font-normal text-xs sm:text-sm text-[#555555] leading-relaxed line-clamp-2 mb-4">
                    {item.summary}
                  </p>

                  {/* Footer Action */}
                  <div className="pt-2 flex items-center justify-between font-mono text-xs uppercase tracking-[0.16em] text-black group-hover:text-[#ca8a04] transition-colors">
                    <span className="font-medium">Explore Student Story</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </article>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
