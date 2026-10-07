"use client";

import React from "react";
import Link from "next/link";
import LineReveal from "@/components/animations/LineReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function PortfolioCta(): React.JSX.Element {
  return (
    <section
      data-theme="dark"
      className="section_portfolio-cta w-full bg-[#0a0a0a] text-[#fffef7] py-20 sm:py-24 md:py-28 lg:py-32 select-none border-t border-[#222222]"
    >
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 lg:gap-16">
          
          {/* Statement */}
          <div className="max-w-2xl flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3 sm:mb-4 select-none">
              <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#888888] font-medium">
                Admissions 2026 // Kathmandu
              </span>
            </div>

            <LineReveal
              as="h2"
              lines={["Develop Your Visual Voice at IIP."]}
              className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[58px] xl:text-[64px] leading-[1.08] tracking-[-0.035em] text-[#fffef7] mb-3 sm:mb-4"
            />

            <p className="font-sans font-normal text-sm sm:text-base md:text-lg text-[#aaaaaa] max-w-xl leading-relaxed">
              Mentor-led fieldwork, wet darkroom masterclasses, and one-on-one portfolio critiques at Jyoti Bhawan, Kanti Path.
            </p>
          </div>

          {/* Actions */}
          <ScrollReveal variant="fade-up" distance={16} duration={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center font-mono text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase bg-[#ffd001] text-black px-9 py-4 rounded-full hover:bg-white transition-all text-center leading-none shadow-md"
              >
                Explore Courses
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-mono text-xs sm:text-sm font-normal tracking-[0.16em] uppercase bg-transparent text-[#fffef7] border border-white/20 px-9 py-4 rounded-full hover:border-[#ffd001] hover:text-[#ffd001] transition-all text-center leading-none"
              >
                Get In Touch
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
