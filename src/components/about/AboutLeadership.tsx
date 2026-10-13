"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import LineReveal from "@/components/animations/LineReveal";
import { aboutLeadershipData } from "@/data/about/leadership";

export default function AboutLeadership(): React.JSX.Element {
  return (
    <section className="section_about-leadership w-full bg-[#fffef7] text-black py-20 sm:py-24 md:py-28 lg:py-32 border-b border-[#e2e0d2]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Left Column: Darkroom Archive Photo */}
          <div className="lg:col-span-6">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:h-[420px] lg:h-[500px] bg-black border border-[#e2e0d2] overflow-hidden">
              <Image
                src={aboutLeadershipData.photoSrc}
                alt={aboutLeadershipData.photoAlt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 50vw"
                className="object-cover object-center grayscale contrast-110"
              />
              {/* Bottom Architectural Caption Strip */}
              <div className="absolute bottom-0 inset-x-0 p-3.5 sm:p-4 bg-black/90 backdrop-blur-xs border-t border-white/10 text-white flex items-center justify-between">
                <div className="flex flex-col pr-2">
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#ffd001]">
                    {aboutLeadershipData.directorBadge}
                  </span>
                  <span className="font-sans text-xs sm:text-sm font-medium text-white mt-0.5 truncate">
                    {aboutLeadershipData.directorName}
                  </span>
                </div>
                <span className="w-2 h-2 rounded-full bg-[#ffd001] shrink-0" />
              </div>
            </div>
          </div>

          {/* Right Column: Direction & Philosophy */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3 sm:mb-4 select-none">
              <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#888888] font-medium">
                {aboutLeadershipData.eyebrow}
              </span>
            </div>

            <LineReveal
              as="h2"
              className="font-sans font-light text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.12] tracking-[-0.03em] text-black mb-3 sm:mb-4"
              lines={aboutLeadershipData.headingLines}
            />

            <p className="mt-2 text-sm sm:text-base text-[#444444] font-normal leading-relaxed">
              {aboutLeadershipData.narrative}
            </p>

            <div className="w-full mt-6 pt-5 sm:pt-6 border-t border-[#e2e0d2] grid grid-cols-2 gap-4">
              <div>
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#888888] block">
                  Studio Base
                </span>
                <span className="text-xs sm:text-sm font-medium text-black mt-1 block">
                  Jyoti Bhawan, Kanti Path
                </span>
              </div>
              <div>
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#888888] block">
                  Academic Provenance
                </span>
                <span className="text-xs sm:text-sm font-medium text-black mt-1 block truncate">
                  IIP Alumnus & Regional Head
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-black text-white hover:bg-[#ffd001] hover:text-black font-mono text-xs uppercase tracking-wider font-semibold transition-all text-center min-h-[44px] touch-manipulation whitespace-nowrap"
              >
                <span>Mentored Course Tracks</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-1.5 font-mono text-xs uppercase tracking-wider text-black hover:text-[#ca8a04] py-3 px-4 transition-colors text-center min-h-[44px] touch-manipulation whitespace-nowrap"
              >
                <span>Speak with Additya →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
