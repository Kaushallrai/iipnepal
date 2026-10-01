"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { ORIGINAL_PORTFOLIO_ITEMS, PortfolioItem } from "@/lib/portfolio-data";

interface PortfolioTeaserProps {
  items?: PortfolioItem[];
}

export function PortfolioTeaserSection({ items }: PortfolioTeaserProps) {
  const portfolioList =
    items && items.length > 0 ? items : ORIGINAL_PORTFOLIO_ITEMS;

  return (
    <section
      aria-label="Student Work & Portfolio"
      className="w-full bg-[var(--color-workshop-ivory)] py-28 sm:py-36 lg:py-48 border-b border-[var(--color-drafting-line)]"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header with Generous Separation */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-20 sm:mb-24 lg:mb-28">
          <div>
            <ScrollReveal yOffset={14} duration={0.5}>
              <span className="font-mono text-[11.5px] uppercase tracking-[0.25em] text-[var(--color-faded-graphite)] block mb-3">
                Student Work & Fieldwork
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.08} yOffset={16} duration={0.6}>
              <h2 className="font-sans font-medium text-[var(--color-charcoal-ink)] text-[30px] sm:text-[38px] lg:text-[44px] leading-[1.12] tracking-[-1.2px]">
                Portfolio & Student Projects
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.16} yOffset={12} duration={0.5}>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 font-sans font-medium text-[15px] text-[var(--color-charcoal-ink)] hover:text-black group transition-colors self-start sm:self-end pb-1.5"
            >
              <span className="group-hover:border-b-2 group-hover:border-[var(--color-iip-yellow)] transition-all">
                View full portfolio
              </span>
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[var(--color-charcoal-ink)]"
                aria-hidden="true"
              />
            </Link>
          </ScrollReveal>
        </div>

        {/* Editorial Masonry Grid (2 Large on Top, 2 Balanced Below) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 lg:gap-12">
          {portfolioList.map((item, index) => {
            // Asymmetric editorial grid columns
            const colSpan =
              index === 0
                ? "md:col-span-7"
                : index === 1
                ? "md:col-span-5"
                : index === 2
                ? "md:col-span-5"
                : "md:col-span-7";

            const aspectClass =
              index === 0
                ? "aspect-[16/10]"
                : index === 1
                ? "aspect-[4/3]"
                : index === 2
                ? "aspect-[4/3]"
                : "aspect-[16/10]";

            return (
              <div key={item.id} className={colSpan}>
                <ScrollReveal delay={index * 0.08} yOffset={20} duration={0.6}>
                  <Link
                    href={`/portfolio/${item.slug}`}
                    className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-iip-yellow)] rounded-[16px]"
                  >
                    {/* Image Frame */}
                    <div
                      className={`relative ${aspectClass} w-full overflow-hidden rounded-[16px] bg-black/10 border border-[var(--color-drafting-line)]`}
                    >
                      <Image
                        src={item.coverImage}
                        alt={`${item.title} by ${item.photographer}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 60vw"
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-103"
                      />
                      {/* Subtle hover gradient */}
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />

                      {/* Floating Category Tag */}
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-[1440px] bg-black/70 backdrop-blur-md text-white font-mono text-[10.5px] uppercase tracking-[0.25px]">
                        {item.category}
                      </div>
                    </div>

                    {/* Metadata & Title */}
                    <div className="mt-4 sm:mt-5 flex flex-col gap-1.5">
                      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.25px] text-[var(--color-faded-graphite)]">
                        <span>{item.photographer}</span>
                        <span>{item.year} · {item.location}</span>
                      </div>

                      <h3 className="font-sans font-medium text-[20px] sm:text-[22px] leading-snug tracking-[-0.4px] text-[var(--color-charcoal-ink)] group-hover:underline underline-offset-4 decoration-[var(--color-iip-yellow)] decoration-2">
                        {item.title}
                      </h3>

                      <p className="font-sans text-[14.5px] leading-[1.65] text-[var(--color-quiet-graphite)] line-clamp-2">
                        {item.summary}
                      </p>
                    </div>
                  </Link>
                </ScrollReveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
