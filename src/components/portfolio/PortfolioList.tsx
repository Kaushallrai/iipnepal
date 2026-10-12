"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/animations/ScrollReveal";
import type { PortfolioItem } from "@/data/portfolio";

export interface PortfolioListProps {
  items: PortfolioItem[];
}

export default function PortfolioList({ items }: PortfolioListProps): React.JSX.Element {
  // Only student stories are in the portfolio archive (director darkroom series lives in About)
  const studentItems = items.filter((item) => item.id !== "portfolio-05");

  if (studentItems.length === 0) {
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
        
        {/* Photo-First Editorial Masonry Grid: D 3-col (first spans 2), T 2-col, M 1-col */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 items-start">
          {studentItems.map((item, idx) => {
            const isFirst = idx === 0;

            // Varied aspect ratios for rhythm (on mobile: 4:5 consistently)
            let ratioClass = "aspect-[4/5]";
            if (isFirst) {
              ratioClass = "aspect-[4/5] sm:aspect-[16/10]";
            } else if (idx % 3 === 1) {
              ratioClass = "aspect-[4/5] sm:aspect-[1/1]";
            } else if (idx % 3 === 2) {
              ratioClass = "aspect-[4/5] sm:aspect-[3/2]";
            }

            return (
              <ScrollReveal
                key={item.id}
                variant="fade-up"
                distance={20}
                duration={0.7}
                delay={(idx % 3) * 0.1}
                className={`w-full ${isFirst ? "lg:col-span-2" : ""}`}
              >
                <Link
                  href={`/portfolio/${item.slug}`}
                  className="group block w-full no-underline text-inherit"
                  aria-label={`View story ${item.title} by ${item.photographer}`}
                >
                  {/* Photo: Sharp 0px, high visual impact, completely free of tags or numbers */}
                  <div
                    className={`relative w-full ${ratioClass} overflow-hidden bg-black mb-3.5 border border-[#e8e6d9]`}
                  >
                    <Image
                      src={item.image || item.coverImage}
                      alt={`${item.title} by ${item.photographer}`}
                      fill
                      sizes={
                        isFirst
                          ? "(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 66vw"
                          : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      }
                      priority={idx === 0}
                      className="object-cover object-center grayscale contrast-108 group-hover:scale-104 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Title: 20px 300 Light */}
                  <h2 className="font-sans font-light text-[20px] leading-snug text-black group-hover:text-black mb-1">
                    {item.title}
                  </h2>

                  {/* Student Name: 14px Graphite (#666666) */}
                  <div className="font-sans text-[14px] text-[#666666]">
                    {item.photographer}
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
