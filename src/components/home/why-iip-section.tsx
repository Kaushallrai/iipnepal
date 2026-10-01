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
    title: "Online Mobile Photography Course",
    description:
      "1 Month duration. Learn professional photography using just your smartphone, covering camera settings, composition, and mobile editing apps.",
  },
  {
    icon: BookOpen,
    number: "02",
    title: "Basic & Foundation Photography",
    description:
      "1-Month Basic & 3-Month Foundation courses covering camera operations, exposure triangle, visual literacy, and practical assignments.",
  },
  {
    icon: Layers,
    number: "03",
    title: "Pro Level Mentor-Led Courses",
    description:
      "3-Month Pro Foundation & 6-Month Pro Advanced courses with dedicated one-on-one mentors, studio lighting, and commercial portfolio development.",
  },
  {
    icon: Users,
    number: "04",
    title: "Official Regional Partner",
    description:
      "Led by IIP alumnus Additya Shrestha alongside experienced mentors Jhaggu Roka and Kishor Shrestha, backed by IIP Foundation India.",
  },
];

export function WhyIipSection() {
  return (
    <section
      aria-label="About IIP Nepal & Mission"
      className="w-full bg-[var(--color-workshop-ivory)] py-28 sm:py-36 lg:py-44 border-b border-[var(--color-drafting-line)]"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header: Vision Statement with Generous Margin */}
        <div className="max-w-3xl mb-20 sm:mb-24 lg:mb-28">
          <ScrollReveal yOffset={14} duration={0.5}>
            <span className="font-mono text-[11.5px] uppercase tracking-[0.25em] text-[var(--color-faded-graphite)] block mb-5">
              Vision & Institute Mission
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.08} yOffset={16} duration={0.6}>
            <h2 className="font-sans font-medium text-[var(--color-charcoal-ink)] text-[26px] sm:text-[34px] lg:text-[40px] leading-[1.25] tracking-[-1px] text-balance">
              “To emerge as ‘Institute of National Importance in promoting Cultural and Creative Arts of India, globally’ by guiding and inculcating knowledge in learners mindset from world over to become artists, thinkers and leaders.”
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.16} yOffset={14} duration={0.6}>
            <p className="font-sans text-[16px] sm:text-[17px] leading-[1.7] text-[var(--color-quiet-graphite)] max-w-2xl mt-6">
              IIP Nepal offers short-term courses, weekend workshops, and diploma programs, designed to develop both creative and technical photography skills.
            </p>
          </ScrollReveal>
        </div>

        {/* 4-Column Grid with Expansive Breathing Room */}
        <ScrollReveal yOffset={20} duration={0.6} stagger={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 lg:gap-x-16 gap-y-14 sm:gap-y-16">
            {PILLARS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.number} className="flex flex-col gap-4 group">
                  {/* Top metadata line with icon and mono index */}
                  <div className="flex items-center justify-between pb-4 border-b border-[var(--color-drafting-line)]">
                    <div className="w-10 h-10 rounded-full bg-white border border-[var(--color-drafting-line)] flex items-center justify-center text-[var(--color-charcoal-ink)] group-hover:bg-[var(--color-iip-yellow)] transition-colors duration-200">
                      <Icon className="w-4 h-4 text-[var(--color-charcoal-ink)]" aria-hidden="true" />
                    </div>
                    <span className="font-mono text-[12px] text-[var(--color-faded-graphite)] tracking-[0.2em]">
                      {item.number}
                    </span>
                  </div>

                  {/* Heading with air */}
                  <h3 className="font-sans font-medium text-[20px] leading-snug tracking-[-0.4px] text-[var(--color-charcoal-ink)] mt-2">
                    {item.title}
                  </h3>

                  {/* Body copy */}
                  <p className="font-sans text-[15px] leading-[1.7] text-[var(--color-quiet-graphite)]">
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
