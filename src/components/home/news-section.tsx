"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { LineReveal } from "@/components/animations/line-reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const NEWS_ARTICLES = [
  {
    id: "news-1",
    title: "Kathmandu Valley Heritage Photo Walk: Newari Courtyards & Morning Light",
    category: "FIELDWORK // KATHMANDU",
    date: "OCTOBER 2026",
    image: "/images/portfolio-artisan.jpg",
    excerpt:
      "Students documented traditional repoussé coppersmiths and centuries-old bahals in Patan under manual exposure guidance.",
    slug: "heritage-photo-walk-kathmandu",
  },
  {
    id: "news-2",
    title: "Annual Student Exhibition: Voices from the High Himalayas",
    category: "EXHIBITION // PATAN",
    date: "SEPTEMBER 2026",
    image: "/images/portfolio-himalayas.jpg",
    excerpt:
      "Curated prints from alumni fieldwork across the Annapurna and Langtang trails exhibited at the Patan Cultural Pavilion.",
    slug: "annual-student-exhibition-2026",
  },
  {
    id: "news-3",
    title: "Darkroom & Digital Printing Masterclass at Kanti Path Campus",
    category: "ACADEMY // WORKSHOP",
    date: "AUGUST 2026",
    image: "/images/portfolio-street.jpg",
    excerpt:
      "A three-day immersive masterclass covering archival silver gelatin printing workflows, tonal separation, and fine art papers.",
    slug: "darkroom-printing-masterclass",
  },
];

export function NewsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const cards = cardsRef.current;
      if (!section || !cards) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      gsap.fromTo(
        cards.children,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.14,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cards,
            start: "top 80%",
            once: true,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      aria-label="News and Fieldwork Dispatches"
      className="w-full bg-[var(--color-bone-white)] py-20 sm:py-28 lg:py-34 border-b border-[var(--color-hairline)] select-none"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Block */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[var(--color-hairline)] pb-6 mb-12 sm:mb-16 gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.25em] text-[var(--color-graphite)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-ink-black)] inline-block" />
              <span>NEWS & OPINION // DISPATCHES</span>
            </div>
            <LineReveal
              as="h2"
              lines={["Stay Up to Date"]}
              className="font-sans font-light text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.05] tracking-[-0.03em] text-[var(--color-ink-black)]"
              duration={0.7}
              stagger={0.08}
            />
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--color-ink-black)] hover:text-[var(--color-graphite)] transition-colors group"
          >
            <span>Read All Dispatches</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* 3 Editorial News Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10"
        >
          {NEWS_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="flex flex-col gap-4 group cursor-pointer"
            >
              {/* Sharp 0px Photo Container with Creative Giants Zoom Effect */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-black border border-[var(--color-hairline)]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
              </div>

              {/* Metadata Tag Row */}
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--color-graphite)] pt-1">
                <span>{article.category}</span>
                <span className="text-[var(--color-ash)]">{article.date}</span>
              </div>

              {/* Title with Underline Effect on Hover */}
              <h3 className="font-sans font-light text-[19px] sm:text-[21px] leading-[1.3] text-[var(--color-ink-black)] group-hover:underline decoration-1 underline-offset-4 tracking-[-0.015em]">
                {article.title}
              </h3>

              <p className="font-sans text-[13.5px] leading-relaxed text-[var(--color-graphite)]">
                {article.excerpt}
              </p>

              <div className="pt-2 flex items-center gap-1.5 font-mono text-[11.5px] uppercase tracking-[0.2em] text-[var(--color-ink-black)] group-hover:text-[var(--color-graphite)] transition-colors">
                <span>Read Dispatch</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
