"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { ORIGINAL_PORTFOLIO_ITEMS, PortfolioItem } from "@/lib/portfolio-data";

interface PortfolioTeaserProps {
  items?: PortfolioItem[];
}

export function PortfolioTeaserSection({ items }: PortfolioTeaserProps) {
  const portfolioList =
    items && items.length > 0 ? items : ORIGINAL_PORTFOLIO_ITEMS;
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.85;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      aria-label="Student Work & Portfolio"
      className="w-full bg-[var(--color-bone-white)] py-24 sm:py-32 lg:py-40 border-b border-[var(--color-hairline)]"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 sm:mb-18 lg:mb-20">
          <div>
            <ScrollReveal yOffset={14} duration={0.5}>
              <span className="font-mono text-[12px] uppercase tracking-[0.25em] text-[var(--color-graphite)] block mb-3">
                Student Work & Fieldwork
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.08} yOffset={16} duration={0.6}>
              <h2 className="font-sans font-light text-[var(--color-ink-black)] text-[30px] sm:text-[38px] lg:text-[54px] leading-[1.05] tracking-[-0.023em]">
                Portfolio & Student Projects
              </h2>
            </ScrollReveal>
          </div>

          <div className="flex items-center gap-4 self-start sm:self-end">
            {/* Tablet/Mobile Carousel Controls */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => scrollCarousel("left")}
                aria-label="Previous portfolio photos"
                className="w-9 h-9 rounded-full border border-[var(--color-ash)] hover:border-[var(--color-ink-black)] flex items-center justify-center text-[var(--color-ink-black)] transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel("right")}
                aria-label="Next portfolio photos"
                className="w-9 h-9 rounded-full border border-[var(--color-ash)] hover:border-[var(--color-ink-black)] flex items-center justify-center text-[var(--color-ink-black)] transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <ScrollReveal delay={0.16} yOffset={12} duration={0.5}>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 font-sans font-normal text-[15px] text-[var(--color-ink-black)] group transition-colors pb-1"
              >
                <span className="group-hover:border-b-2 group-hover:border-[var(--color-iip-yellow)] transition-all">
                  View full portfolio
                </span>
                <ArrowRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[var(--color-ink-black)]"
                  aria-hidden="true"
                />
              </Link>
            </ScrollReveal>
          </div>
        </div>

        {/* Mobile & Tablet: Horizontal Touch Snap Carousel / Desktop: Editorial Grid */}
        <div
          ref={carouselRef}
          className="flex lg:grid lg:grid-cols-12 gap-8 lg:gap-12 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory pb-6 scrollbar-none"
        >
          {portfolioList.map((item, index) => {
            const colSpan =
              index === 0
                ? "lg:col-span-7"
                : index === 1
                ? "lg:col-span-5"
                : index === 2
                ? "lg:col-span-5"
                : "lg:col-span-7";

            const aspectClass =
              index === 0
                ? "aspect-[16/10]"
                : index === 1
                ? "aspect-[4/3]"
                : index === 2
                ? "aspect-[4/3]"
                : "aspect-[16/10]";

            return (
              <div
                key={item.id}
                className={`${colSpan} min-w-[280px] sm:min-w-[340px] md:min-w-[400px] lg:min-w-0 snap-start flex-shrink-0 lg:flex-shrink`}
              >
                <ScrollReveal delay={index * 0.08} yOffset={20} duration={0.6}>
                  <Link
                    href={`/portfolio/${item.slug}`}
                    className="group block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-iip-yellow)]"
                  >
                    {/* Sharp 0px Image Frame — No AI bento curves or fake shadows */}
                    <div
                      className={`relative ${aspectClass} w-full overflow-hidden bg-black/5 border border-[var(--color-hairline)]`}
                    >
                      <Image
                        src={item.coverImage}
                        alt={`${item.title} by ${item.photographer}`}
                        fill
                        sizes="(max-width: 768px) 85vw, 60vw"
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-103"
                      />
                      {/* Floating Category Pill */}
                      <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 text-white font-mono text-[10.5px] uppercase tracking-[0.2em]">
                        {item.category}
                      </div>
                    </div>

                    {/* Metadata & Title */}
                    <div className="mt-4 flex flex-col gap-1.5">
                      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-graphite)]">
                        <span>{item.photographer}</span>
                        <span>{item.year} · {item.location}</span>
                      </div>

                      <h3 className="font-sans font-light text-[20px] sm:text-[22px] leading-snug tracking-[-0.018em] text-[var(--color-ink-black)] group-hover:underline underline-offset-4 decoration-[var(--color-iip-yellow)] decoration-2">
                        {item.title}
                      </h3>

                      <p className="font-sans text-[14px] leading-[1.65] text-[var(--color-graphite)] line-clamp-2">
                        {item.summary}
                      </p>
                    </div>
                  </Link>
                </ScrollReveal>
              </div>
            );
          })}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex lg:hidden items-center justify-center gap-2 pt-4 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-ash)]">
          <span>← Swipe horizontally to browse portfolio work →</span>
        </div>
      </div>
    </section>
  );
}
