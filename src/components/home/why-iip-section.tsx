"use client";

import { Smartphone, BookOpen, Layers, Users } from "lucide-react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

interface ProgramPillar {
  icon: typeof Smartphone;
  number: string;
  title: string;
  description: string;
}

const PILLARS: ProgramPillar[] = [
  {
    icon: Smartphone,
    number: "01",
    title: "Short-Term & Online Courses",
    description:
      "1-Month Online Mobile Photography and Basic Photography courses designed to develop creative and technical fundamentals rapidly for all learners.",
  },
  {
    icon: BookOpen,
    number: "02",
    title: "Foundation Photography",
    description:
      "3-Month Online Foundation and Pro Level Foundation courses providing structured training across camera mechanics, composition, and visual thinking.",
  },
  {
    icon: Layers,
    number: "03",
    title: "Mentor-Led Pro Advanced",
    description:
      "6-Month intensive mentor-led diploma program taking students deep into studio strobe lighting, documentary fieldwork, and professional commercial execution.",
  },
  {
    icon: Users,
    number: "04",
    title: "Regional Leadership & Mentorship",
    description:
      "Led by IIP alumnus Additya Shrestha alongside experienced mentors including Jhaggu Roka and Kishor Shrestha, backed by the global IIP Foundation.",
  },
];

export function WhyIipSection() {
  return (
    <section
      aria-label="About IIP Nepal & Mission"
      className="w-full bg-[var(--color-workshop-ivory)] py-18 sm:py-20 lg:py-24 border-b border-[var(--color-drafting-line)]"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header: Vision Statement as Primary Display */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <ScrollReveal yOffset={14} duration={0.5}>
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-faded-graphite)] block mb-3">
              Vision & Institute Mission
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.08} yOffset={16} duration={0.6}>
            <h2 className="font-sans font-medium text-[var(--color-charcoal-ink)] text-[24px] sm:text-[30px] lg:text-[34px] leading-[1.18] tracking-[-0.8px] text-balance">
              “To emerge as an Institute of National Importance, guiding and inculcating knowledge in learners from world over to become artists, thinkers, and leaders.”
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.16} yOffset={14} duration={0.6}>
            <p className="font-sans text-[15px] leading-relaxed text-[var(--color-quiet-graphite)] max-w-2xl mt-4">
              IIP Nepal offers short-term courses, weekend workshops, and diploma programs, designed to develop both creative and technical photography skills at our Kathmandu Centre.
            </p>
          </ScrollReveal>
        </div>

        {/* 4-Column Grid with Harmonious Gestalt Proportions */}
        <ScrollReveal yOffset={18} duration={0.6} stagger={0.08}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 sm:gap-y-12">
            {PILLARS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.number} className="flex flex-col gap-3 group">
                  {/* Top metadata line with icon and mono index */}
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--color-drafting-line)]">
                    <div className="w-8 h-8 rounded-full bg-white border border-[var(--color-drafting-line)] flex items-center justify-center text-[var(--color-charcoal-ink)] group-hover:bg-[var(--color-iip-yellow)] transition-colors duration-200">
                      <Icon className="w-3.5 h-3.5 text-[var(--color-charcoal-ink)]" aria-hidden="true" />
                    </div>
                    <span className="font-mono text-[11px] text-[var(--color-faded-graphite)] tracking-[0.15em]">
                      {item.number}
                    </span>
                  </div>

                  {/* Heading */}
                  <h3 className="font-sans font-medium text-[18px] leading-snug tracking-[-0.3px] text-[var(--color-charcoal-ink)] mt-1">
                    {item.title}
                  </h3>

                  {/* Body copy */}
                  <p className="font-sans text-[14px] leading-relaxed text-[var(--color-quiet-graphite)]">
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
