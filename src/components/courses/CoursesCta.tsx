"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Phone, MapPin } from "lucide-react";
import LineReveal from "@/components/animations/LineReveal";
import { coursesPageData } from "@/data/courses/page";

export default function CoursesCta(): React.JSX.Element {
  const { cta } = coursesPageData;

  return (
    <section
      data-theme="dark"
      className="section_courses-cta w-full bg-[#0a0a0a] text-[#fffef7] py-20 sm:py-24 md:py-28 lg:py-32 select-none border-t border-[#222222]"
    >
      {/* Full space layout: NO inner bordered card! */}
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 lg:gap-16">
          
          {/* Left: Statement & Vision */}
          <div className="max-w-3xl flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3 sm:mb-4 select-none">
              <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
              <LineReveal
                as="span"
                lines={[cta.eyebrow]}
                className="font-mono text-xs uppercase tracking-[0.22em] text-[#888888] font-medium"
              />
            </div>

            <LineReveal
              as="h2"
              lines={[cta.heading]}
              className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[58px] xl:text-[64px] leading-[1.08] tracking-[-0.035em] text-[#fffef7] mb-3 sm:mb-4"
            />

            <p className="font-sans font-normal text-sm sm:text-base md:text-lg text-[#aaaaaa] max-w-2xl leading-relaxed">
              {cta.description}
            </p>

            <div className="flex flex-wrap items-center gap-8 pt-3 font-mono text-xs sm:text-[13px] text-[#888888]">
              <span className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#ffd001]" />
                <span>{cta.address}</span>
              </span>
              <span className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#ffd001]" />
                <a href={`tel:${cta.phone}`} className="hover:text-white transition-colors">
                  {cta.phoneDisplay}
                </a>
              </span>
            </div>
          </div>

          {/* Right: Direct Actions */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 shrink-0">
            <Link
              href={cta.enrollHref}
              className="inline-flex items-center justify-center gap-2 font-mono text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase bg-[#ffd001] text-black px-9 py-4 rounded-full hover:bg-white transition-all shadow-md text-center leading-none whitespace-nowrap min-h-[44px]"
            >
              <span>{cta.enrollText}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              href={cta.contactHref}
              className="inline-flex items-center justify-center gap-2 font-mono text-xs sm:text-sm font-normal tracking-[0.16em] uppercase bg-transparent text-[#fffef7] border border-white/20 px-9 py-4 rounded-full hover:border-[#ffd001] hover:text-[#ffd001] transition-all text-center leading-none whitespace-nowrap min-h-[44px]"
            >
              <span>{cta.contactText}</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
