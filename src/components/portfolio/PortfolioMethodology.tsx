"use client";

import React from "react";
import LineReveal from "@/components/animations/LineReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function PortfolioMethodology(): React.JSX.Element {
  return (
    <section className="w-full py-14 sm:py-18 md:py-22 border-t border-b border-[#e2e0d2] bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="pb-8 sm:pb-12 border-b border-[#e2e0d2]">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#777777] block mb-2">
            Academic Methodology // Kathmandu Studio
          </span>

          <LineReveal
            as="h2"
            lines={["The Residency & Production Standard."]}
            className="font-sans font-light text-3xl sm:text-4xl lg:text-5xl text-black tracking-[-0.035em]"
          />
        </div>

        {/* 2-Column Institutional Deep Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 pt-8 sm:pt-12">
          
          {/* Column 1: Fieldwork */}
          <ScrollReveal variant="fade-up" distance={20} duration={0.7}>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffd001] shrink-0" />
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-black font-semibold">
                  01 / Documentary Fieldwork & Ethical Proximity
                </span>
              </div>

              <h3 className="font-sans font-light text-2xl text-black">
                Patience Before the Shutter
              </h3>

              <p className="font-sans font-normal text-sm text-[#555555] leading-relaxed">
                At IIP Nepal, photography students are taught that visual acuity begins long before the camera is raised. In historic trading quarters like Asan, Patan, and Bhaktapur, students spend weeks observing ambient dawn light, understanding merchant routines, and establishing cultural respect.
              </p>

              <p className="font-sans font-normal text-sm text-[#555555] leading-relaxed">
                Working with prime focal lengths (35mm and 50mm) forces physical proximity and accountability. Rather than shooting voyeuristic telephoto snapshots, students develop genuine connections that translate into dignified, exhibition-ready imagery.
              </p>
            </div>
          </ScrollReveal>

          {/* Column 2: Darkroom & Printmaking */}
          <ScrollReveal variant="fade-up" distance={20} duration={0.7} delay={0.1}>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffd001] shrink-0" />
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-black font-semibold">
                  02 / The Physical Print & Archival Longevity
                </span>
              </div>

              <h3 className="font-sans font-light text-2xl text-black">
                Tactile Chemistry Over Discardable Pixels
              </h3>

              <p className="font-sans font-normal text-sm text-[#555555] leading-relaxed">
                Every major portfolio body of work must culminate in physical printmaking. Inside our darkroom suite at Jyoti Bhawan, Kanti Path, students master silver halide enlargers, chemical development curves, and fiber-base baryta paper processing.
              </p>

              <p className="font-sans font-normal text-sm text-[#555555] leading-relaxed">
                Under the mentorship of alumnus Additya Shrestha, students evaluate contact sheets with 8x optical loupes, testing contrast grades to ensure deep velvety D-max blacks and delicate shadow gradations that satisfy international museum preservation standards.
              </p>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
