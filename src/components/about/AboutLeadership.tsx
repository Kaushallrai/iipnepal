"use client";

import React from "react";
import Image from "next/image";
import LineReveal from "@/components/animations/LineReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function AboutLeadership(): React.JSX.Element {
  return (
    <section className="section_about-leadership w-full bg-[#fffef7] text-black py-16 sm:py-20 md:py-24 lg:py-28 border-b border-[#e2e0d2]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Darkroom Archive Photo */}
          <div className="lg:col-span-6">
            <ScrollReveal variant="scale-up" duration={1} distance={20} start="top 88%">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:h-[420px] lg:h-[520px] bg-black border border-[#e2e0d2] overflow-hidden">
                <Image
                  src="/images/flagship-mentor-darkroom.jpg"
                  alt="IIP Nepal Faculty Mentorship and Darkroom Printing"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 50vw"
                  className="object-cover object-center grayscale contrast-110"
                />
                {/* Bottom Architectural Caption Strip */}
                <div className="absolute bottom-0 inset-x-0 p-3.5 sm:p-4 bg-black/90 backdrop-blur-xs border-t border-white/10 text-white flex items-center justify-between">
                  <div className="flex flex-col pr-2">
                    <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#ffd001]">
                      Kathmandu Studio Director
                    </span>
                    <span className="font-sans text-xs sm:text-sm font-medium text-white mt-0.5 truncate">
                      Additya Shrestha · IIP Alumnus & Regional Head
                    </span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-[#ffd001] shrink-0" />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Direction & Philosophy (Zero Clutter Icons) */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3 sm:mb-4 select-none">
              <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#888888] font-medium">
                Leadership & Vision
              </span>
            </div>

            <LineReveal
              as="h2"
              className="font-sans font-light text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.12] tracking-[-0.03em] text-black mb-3 sm:mb-4"
              lines={[
                "Mentoring visual artists and photographers",
                "without background barriers.",
              ]}
            />

            {/* Official IIP Quote */}
            <blockquote className="w-full my-2 sm:my-3 p-4 sm:p-5 md:p-6 bg-[#f8f7f0] border-l-2 border-[#ffd001] font-sans text-sm sm:text-base md:text-lg text-black/90 italic leading-relaxed">
              &ldquo;IIP Academy is looking for dedicated students who want to become tomorrow’s art leaders. We seek innovators, storytellers, collaborators, problem solvers, dreamers, leaders. Whatever your background, you are welcome.&rdquo;
            </blockquote>

            <p className="mt-3 text-xs sm:text-sm md:text-base text-[#555555] font-normal leading-[1.65]">
              We believe anyone willing to make the commitment deserves access to professional-level training. No prior art or design degree is required. Each student works with a personal counselor to align with the right course track and build a distinctive portfolio.
            </p>

            <div className="w-full mt-6 pt-5 sm:pt-6 border-t border-[#e2e0d2] grid grid-cols-2 gap-3 sm:gap-4">
              <div>
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#888888] block">
                  Location
                </span>
                <span className="text-xs sm:text-sm font-medium text-black mt-1 block">
                  Jyoti Bhawan, Kanti Path
                </span>
              </div>
              <div>
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#888888] block">
                  Affiliation
                </span>
                <span className="text-xs sm:text-sm font-medium text-black mt-1 block truncate">
                  Indian Institute of Photography
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
