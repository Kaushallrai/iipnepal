"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import type { PortfolioItem } from "@/data/portfolio";

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
    <section className="w-full py-16 sm:py-20 md:py-24 bg-[#fffef7] border-b border-[#e2e0d2]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex flex-col gap-14 sm:gap-18">
        
        {/* ============================================================ */}
        {/* 6. PHOTOGRAPHER BLOCK: Bio Card & Fellowship Profile          */}
        {/* ============================================================ */}
        <div className="bg-[#fbf9f0] border border-[#e8e6d9] p-8 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#888888] font-semibold">
                FELLOWSHIP PROFILE
              </span>
              <h3 className="font-sans font-light text-2xl sm:text-3xl text-black">
                {currentItem.photographer}
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#444444] leading-relaxed max-w-2xl">
                {currentItem.photographerBio ||
                  `${currentItem.photographer} is an alumnus of IIP Nepal specializing in documentary and street photography across Nepal.`}
              </p>
              <div className="font-mono text-xs text-[#777777] uppercase tracking-wider pt-2">
                Class of {currentItem.year} • {currentItem.location}
              </div>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end items-center">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] py-3 px-6 rounded-full border border-black bg-black text-[#fffef7] hover:bg-[#ffd001] hover:text-black transition-colors"
              >
                <span>All Fellow Stories</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* ARCHIVAL TRAVERSAL: Previous & Next Project Navigation       */}
        {/* ============================================================ */}
        <div className="border-t border-[#e2e0d2] pt-10 sm:pt-14">
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
                    Previous Story
                  </span>
                  <span className="font-sans font-light text-lg sm:text-xl text-black group-hover:opacity-75 transition-opacity">
                    {prevItem.title}
                  </span>
                  <span className="font-mono text-xs text-[#777777]">
                    {prevItem.photographer} • {prevItem.location}
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
                    Next Story
                  </span>
                  <span className="font-sans font-light text-lg sm:text-xl text-black group-hover:opacity-75 transition-opacity">
                    {nextItem.title}
                  </span>
                  <span className="font-mono text-xs text-[#777777]">
                    {nextItem.photographer} • {nextItem.location}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full border border-[#cccccc] group-hover:border-black group-hover:bg-black group-hover:text-white transition-all flex items-center justify-center shrink-0 mt-0.5 order-1 md:order-2">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
