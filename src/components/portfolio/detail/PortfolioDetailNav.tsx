"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import type { PortfolioItem } from "@/data/portfolio";
import LineReveal from "@/components/animations/LineReveal";

export interface PortfolioDetailNavProps {
  currentItem: PortfolioItem;
  nextItem: PortfolioItem;
  prevItem?: PortfolioItem;
  relatedItems: PortfolioItem[];
}

export default function PortfolioDetailNav({
  nextItem,
  prevItem,
  relatedItems,
}: PortfolioDetailNavProps): React.JSX.Element {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-[#fffef7] border-b border-[#e2e0d2]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex flex-col gap-12 sm:gap-16">
        
        {/* 1. Archival Traversal (Previous & Next Links) */}
        <div className="border-b border-[#e2e0d2] pb-8 sm:pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-between">
            {/* Previous Project Link */}
            {prevItem ? (
              <Link
                href={`/portfolio/${prevItem.slug}`}
                className="group flex items-start gap-4 text-left transition-colors"
                aria-label={`Previous project: ${prevItem.title}`}
              >
                <div className="w-10 h-10 rounded-full border border-[#cccccc] group-hover:border-black group-hover:bg-black group-hover:text-white transition-all flex items-center justify-center shrink-0 mt-0.5">
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#888888]">
                    Previous Archive // {prevItem.number}
                  </span>
                  <span className="font-sans font-light text-lg sm:text-xl text-black group-hover:opacity-75 transition-opacity">
                    {prevItem.title}
                  </span>
                  <span className="font-mono text-xs text-[#777777]">
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
                className="group flex items-start md:justify-end gap-4 text-left md:text-right transition-colors md:ml-auto"
                aria-label={`Next project: ${nextItem.title}`}
              >
                <div className="flex flex-col gap-1 order-2 md:order-1">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#888888]">
                    Next Archive // {nextItem.number}
                  </span>
                  <span className="font-sans font-light text-lg sm:text-xl text-black group-hover:opacity-75 transition-opacity">
                    {nextItem.title}
                  </span>
                  <span className="font-mono text-xs text-[#777777]">
                    {nextItem.photographer} • {nextItem.location.split(",")[0]}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full border border-[#cccccc] group-hover:border-black group-hover:bg-black group-hover:text-white transition-all flex items-center justify-center shrink-0 mt-0.5 order-1 md:order-2">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            )}
          </div>
        </div>

        {/* 2. More From Archive (Clean 2-Column Editorial Showcase) */}
        {relatedItems && relatedItems.length > 0 && (
          <div className="flex flex-col gap-8 sm:gap-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 sm:pb-6 border-b border-[#e2e0d2]">
              <div>
                <div className="flex items-center gap-2 mb-2 select-none">
                  <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
                  <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#888888] font-medium">
                    Archival Studies
                  </span>
                </div>
                <LineReveal
                  as="h2"
                  lines={["More From the Archive."]}
                  className="font-sans font-light text-2xl sm:text-3xl lg:text-[38px] leading-[1.12] text-black tracking-[-0.03em]"
                />
              </div>

              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-black hover:text-[#ca8a04] transition-colors py-1 group shrink-0"
              >
                <span>Full Archive</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
              {relatedItems.map((rel) => (
                <article key={rel.id} className="group flex flex-col gap-4">
                  <Link
                    href={`/portfolio/${rel.slug}`}
                    className="relative block w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-black border border-[#e2e0d2]"
                  >
                    <Image
                      src={rel.coverImage}
                      alt={rel.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-102"
                    />

                    <div className="absolute top-3 left-3 bg-black/85 text-white font-mono text-[9px] uppercase tracking-widest px-2.5 py-1">
                      ARCHIVE {rel.number} {"//"} {rel.year}
                    </div>

                    <div className="absolute bottom-3 left-3 bg-[#ffd001] text-black font-mono text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5">
                      {rel.discipline}
                    </div>
                  </Link>

                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wider text-[#888888] pb-1 border-b border-[#e2e0d2]">
                      <span>{rel.category}</span>
                      <span>{rel.location.split(",")[0]}</span>
                    </div>

                    <h3 className="font-sans font-light text-xl sm:text-2xl text-black">
                      <Link href={`/portfolio/${rel.slug}`} className="hover:opacity-75 transition-opacity">
                        {rel.title}
                      </Link>
                    </h3>

                    <p className="font-mono text-xs text-[#666666]">
                      {rel.photographer} • {rel.course.split("(")[0].trim()}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* 3. Footer Return Link */}
        <div className="flex items-center justify-between border-t border-[#e2e0d2] pt-6 sm:pt-8 font-mono text-xs text-[#888888]">
          <Link
            href="/portfolio"
            className="uppercase tracking-[0.18em] text-black hover:text-[#ffd001] transition-colors"
          >
            ← Return to Full Archive
          </Link>

          <span className="tracking-wider hidden sm:inline-block">
            IIP Nepal // Curatorial Darkroom Archive
          </span>
        </div>

      </div>
    </section>
  );
}
