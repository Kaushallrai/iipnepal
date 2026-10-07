"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import type { PortfolioItem } from "@/lib/portfolio-data";
import LineReveal from "@/components/animations/LineReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";

export interface PortfolioDetailNavProps {
  currentItem: PortfolioItem;
  nextItem: PortfolioItem;
  prevItem?: PortfolioItem;
  relatedItems: PortfolioItem[];
}

export default function PortfolioDetailNav({
  currentItem,
  nextItem,
  prevItem,
  relatedItems,
}: PortfolioDetailNavProps): React.JSX.Element {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-[#fffef7] border-b border-[#e2e0d2]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex flex-col gap-12 sm:gap-14 lg:gap-16">
        
        {/* 1. ARCHIVAL TRAVERSAL (MUSEUM CATALOGUE NAVIGATION // NO CTA BOX) */}
        <div className="border-b border-[#e2e0d2] pb-8 sm:pb-10 lg:pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-between">
            {/* Previous Project Link */}
            {prevItem ? (
              <Link
                href={`/portfolio/${prevItem.slug}`}
                className="group flex items-start gap-4 text-left p-2 -m-2 transition-colors"
                aria-label={`Previous project: ${prevItem.title}`}
              >
                <div className="w-11 h-11 rounded-full border border-black/20 group-hover:border-black group-hover:bg-black group-hover:text-white transition-all flex items-center justify-center shrink-0 mt-0.5">
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#888888]">
                    Previous Archive // {prevItem.number}
                  </span>
                  <span className="font-sans font-light text-lg sm:text-xl lg:text-2xl text-black group-hover:opacity-75 transition-opacity">
                    {prevItem.title}
                  </span>
                  <span className="font-mono text-xs sm:text-[13px] text-[#777777]">
                    {prevItem.photographer} • {prevItem.location.split(",")[0]}
                  </span>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {/* Next Project Link */}
            {nextItem && (
              <Link
                href={`/portfolio/${nextItem.slug}`}
                className="group flex items-start justify-end gap-4 text-right p-2 -m-2 transition-colors md:ml-auto"
                aria-label={`Next project: ${nextItem.title}`}
              >
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#888888]">
                    Next Archive // {nextItem.number}
                  </span>
                  <span className="font-sans font-light text-lg sm:text-xl lg:text-2xl text-black group-hover:opacity-75 transition-opacity">
                    {nextItem.title}
                  </span>
                  <span className="font-mono text-xs sm:text-[13px] text-[#777777]">
                    {nextItem.photographer} • {nextItem.location.split(",")[0]}
                  </span>
                </div>
                <div className="w-11 h-11 rounded-full border border-black/20 group-hover:border-black group-hover:bg-black group-hover:text-white transition-all flex items-center justify-center shrink-0 mt-0.5">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            )}
          </div>
        </div>

        {/* 2. MORE FROM ARCHIVE (EDITORIAL SHOWCASE // NO TRADITIONAL CARD-IN-CARD BORDERS) */}
        {relatedItems && relatedItems.length > 0 && (
          <div className="flex flex-col gap-10 sm:gap-14 lg:gap-16">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 sm:pb-8 border-b border-[#e2e0d2]">
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-2 mb-3 sm:mb-4 select-none">
                  <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
                  <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#888888] font-medium">
                    Curatorial Selections // Fieldwork Archive
                  </span>
                </div>

                <LineReveal
                  as="h2"
                  lines={["More From the Archive."]}
                  className="font-sans font-light text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.12] text-black tracking-[-0.03em]"
                />
              </div>

              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-black hover:text-[#ca8a04] transition-colors py-1 group self-start sm:self-auto shrink-0"
              >
                <span>Complete Archive</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            {/* Architectural 2-Column Frames (Anti-Slop: Zero Box Card Outlines) */}
            <ScrollReveal variant="stagger-children" stagger={0.12} start="top 88%">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 xl:gap-24">
                {relatedItems.map((rel) => (
                  <article
                    key={rel.id}
                    className="scroll-item group flex flex-col justify-between"
                  >
                    {/* Photographic Frame */}
                    <Link
                      href={`/portfolio/${rel.slug}`}
                      className="relative block w-full aspect-[16/10] sm:aspect-[16/9] max-h-[190px] sm:max-h-none overflow-hidden bg-black mb-5 sm:mb-7 border border-[#e2e0d2]"
                    >
                      <Image
                        src={rel.coverImage}
                        alt={rel.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-104 grayscale contrast-105 group-hover:grayscale-0 transition-all"
                      />

                      {/* Archival Stamp */}
                      <div className="absolute top-3.5 left-3.5 bg-black/85 backdrop-blur-xs text-white font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] px-2.5 py-1">
                        Archive {rel.number} // {rel.year}
                      </div>

                      <div className="absolute bottom-3.5 left-3.5 bg-black/85 backdrop-blur-xs text-[#ffd001] font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.16em] px-2.5 py-1">
                        {rel.discipline}
                      </div>
                    </Link>

                    {/* Metadata & Title */}
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wider text-[#777777] pb-2.5 border-b border-[#e2e0d2]">
                        <span>{rel.category}</span>
                        <span>{rel.location.split(",")[0]}</span>
                      </div>

                      <h3 className="font-sans font-light text-xl sm:text-2xl lg:text-[26px] leading-snug text-black tracking-[-0.025em]">
                        <Link
                          href={`/portfolio/${rel.slug}`}
                          className="group-hover:opacity-75 transition-opacity no-underline text-inherit"
                        >
                          {rel.title}
                        </Link>
                      </h3>

                      <p className="font-mono text-xs sm:text-[13px] text-[#666666]">
                        Photographed by {rel.photographer} • Mentored by {rel.mentor.split("·")[0].trim()}
                      </p>

                      <div className="pt-3.5">
                        <Link
                          href={`/portfolio/${rel.slug}`}
                          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] font-medium text-black group-hover:text-[#ca8a04] transition-colors"
                        >
                          <span>View Exhibition Frames</span>
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </ScrollReveal>
          </div>
        )}

        {/* 3. FOOTER CATALOGUE METRICS */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#e2e0d2] pt-8 sm:pt-10 font-mono text-xs text-[#888888]">
          <Link
            href="/portfolio"
            className="uppercase tracking-[0.18em] text-black hover:text-[#ffd001] transition-colors"
          >
            ← Return to Full Student Archive
          </Link>

          <span className="tracking-wider">
            IIP Nepal // Curatorial Darkroom Archive • Kathmandu
          </span>
        </div>

      </div>
    </section>
  );
}
