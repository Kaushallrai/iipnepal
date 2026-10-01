"use client";

import { Aperture, Eye, Compass, Award } from "lucide-react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

interface Differentiator {
  icon: typeof Aperture;
  number: string;
  title: string;
  description: string;
}

const DIFFERENTIATORS: Differentiator[] = [
  {
    icon: Aperture,
    number: "01",
    title: "Manual Discipline & Darkroom",
    description:
      "We strip away automatic digital shortcuts. Students begin by mastering optical physics, manual triangle exposure, and traditional silver halide darkroom chemistry.",
  },
  {
    icon: Eye,
    number: "02",
    title: "Weekly 1-on-1 Print Critiques",
    description:
      "Direct weekly mentorship with practicing photojournalists and documentary artists. You learn to defend your sequencing, critique contact sheets, and establish visual voice.",
  },
  {
    icon: Compass,
    number: "03",
    title: "Kathmandu Valley Expeditions",
    description:
      "Field projects in Patan, Bhaktapur, and the inner alleys of Kanti Path. Learn to work with real communities, changing ambient sunlight, and fast-moving documentary subjects.",
  },
  {
    icon: Award,
    number: "04",
    title: "Juried Gallery Exhibitions",
    description:
      "Education culminates in a curated public exhibition in Kathmandu. Graduate with a physical print portfolio, exhibition credits, and IIP Foundation network access.",
  },
];

export function WhyIipSection() {
  return (
    <section
      aria-label="Why IIP Nepal"
      className="w-full bg-[var(--color-workshop-ivory)] py-20 sm:py-24 lg:py-32 border-b border-[var(--color-drafting-line)]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Eyebrow + Title */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <ScrollReveal yOffset={16} duration={0.5}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[1440px] border border-[var(--color-drafting-line)] bg-white/60 mb-5 text-[11px] font-mono uppercase tracking-[0.3px] text-[var(--color-faded-graphite)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-charcoal-ink)]" aria-hidden="true" />
              Why IIP Nepal
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} yOffset={18} duration={0.6}>
            <h2 className="font-sans font-medium text-[var(--color-charcoal-ink)] text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.12] tracking-[-1.2px] text-balance">
              Education Grounded in the Raw Realities of Visual Craft.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2} yOffset={16} duration={0.6}>
            <p className="font-sans text-[15px] sm:text-base leading-relaxed text-[var(--color-quiet-graphite)] max-w-2xl mt-4">
              We reject templated digital coursework. At IIP Nepal, photography is taught as an intimate dialogue between optical discipline, light measurement, and cultural empathy.
            </p>
          </ScrollReveal>
        </div>

        {/* 4-Column Text-Led Grid (No heavy card borders, clean whitespace) */}
        <ScrollReveal yOffset={20} duration={0.6} stagger={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 sm:gap-y-16">
            {DIFFERENTIATORS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.number} className="flex flex-col gap-4 group">
                  {/* Top metadata line with icon and mono index */}
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--color-drafting-line)]/70">
                    <div className="w-9 h-9 rounded-full bg-white/80 border border-[var(--color-drafting-line)] flex items-center justify-center text-[var(--color-charcoal-ink)] group-hover:bg-[var(--color-iip-yellow)] transition-colors duration-200">
                      <Icon className="w-4 h-4 text-[var(--color-charcoal-ink)]" aria-hidden="true" />
                    </div>
                    <span className="font-mono text-[12px] text-[var(--color-faded-graphite)] tracking-[0.2em]">
                      {item.number}
                    </span>
                  </div>

                  {/* Heading */}
                  <h3 className="font-sans font-medium text-[20px] sm:text-[22px] leading-tight tracking-[-0.5px] text-[var(--color-charcoal-ink)]">
                    {item.title}
                  </h3>

                  {/* Body copy */}
                  <p className="font-sans text-[15px] leading-relaxed text-[var(--color-quiet-graphite)]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
