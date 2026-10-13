"use client";

import React, { useState } from "react";
import Image from "next/image";
import type { PortfolioItem } from "@/data/portfolio";

export interface PortfolioDetailStoryProps {
  item: PortfolioItem;
}

export default function PortfolioDetailStory({ item }: PortfolioDetailStoryProps): React.JSX.Element {
  const [statementExpanded, setStatementExpanded] = useState(false);

  // Clean mentor name without dashes
  const cleanMentorName = item.mentor
    .replace(/[·—–-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  // Behind the shoot frames
  const behindTheShootFrames = [
    {
      url: "/images/flagship-mentor-darkroom.webp",
      label: "Contact Sheet Inspection",
      caption: "Filtering down 200 RAW frames to the top 20 exhibition negatives.",
    },
    {
      url: "/images/portfolio/darkroom-safelight-print.webp",
      label: "Darkroom Chemistry",
      caption: "Balancing highlight exposures and test strips under amber safelight.",
    },
    {
      url: "/images/course-foundation.webp",
      label: "Fieldwork Staged",
      caption: "Working alongside natural light bounce in Kathmandu alleyways.",
    },
    {
      url: "/images/hero-photographer.webp",
      label: "Critique Table",
      caption: "1-on-1 sequencing review with senior mentor prior to print submission.",
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 border-b border-[#e2e0d2] bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex flex-col gap-16 sm:gap-20">
        
        {/* ============================================================ */}
        {/* 4. VOICES BLOCK: Artist Statement & Mentor Evaluation         */}
        {/* ============================================================ */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-start">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#888888] font-semibold mb-2">
              04 // VOICES & CRITIQUE
            </span>
            <h2 className="font-sans font-light text-2xl sm:text-3xl md:text-4xl text-black tracking-[-0.03em]">
              Artist & Mentor Perspectives.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-start">
            
            {/* Left: Artist Statement (3-line clamp + Toggle) */}
            <div className="bg-[#fbf9f0] border border-[#e8e6d9] p-7 sm:p-9 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#888888] block mb-3 font-semibold">
                  Photographer {item.photographer}
                </span>
                <p
                  className={`font-sans text-sm sm:text-base text-[#333333] leading-relaxed transition-all ${
                    statementExpanded ? "" : "line-clamp-3"
                  }`}
                >
                  &ldquo;{item.statement}&rdquo;
                </p>
              </div>

              <div className="pt-4 mt-2">
                <button
                  type="button"
                  onClick={() => setStatementExpanded((prev) => !prev)}
                  className="font-mono text-xs uppercase tracking-[0.14em] text-black hover:text-[#ca8a04] underline underline-offset-4 cursor-pointer"
                >
                  {statementExpanded ? "Collapse statement" : "Read full statement"}
                </button>
              </div>
            </div>

            {/* Right: Mentor Evaluation (Short: craft + narrative) */}
            <div className="bg-[#fdfcf7] border border-[#e8e6d9] p-7 sm:p-9 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#ca8a04] block mb-3 font-semibold">
                  Mentor Evaluation · {cleanMentorName}
                </span>
                <p className="font-sans text-sm sm:text-base text-[#333333] leading-relaxed mb-4">
                  Exceptional light control across challenging high-contrast field environments. The sequence maintains profound emotional resonance and authentic street intimacy.
                </p>
                <div className="font-mono text-xs text-[#888888] uppercase tracking-wider pt-2 border-t border-[#ece9dc]">
                  Outcome: Exhibition-Grade Portfolio Approved
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ============================================================ */}
        {/* 5. BEHIND THE SHOOT: Snap Row of 4 Behind-the-Scenes Images   */}
        {/* ============================================================ */}
        <div className="flex flex-col gap-8 pt-8 border-t border-[#e2e0d2]">
          <div className="flex flex-col items-start">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#888888] font-semibold mb-2">
              05 // BEHIND THE SHOOT
            </span>
            <h3 className="font-sans font-light text-2xl sm:text-3xl text-black tracking-[-0.03em]">
              Process, Fieldwork & Contact Sheets.
            </h3>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 sm:gap-8 scrollbar-none pb-4 -mx-6 px-6 sm:-mx-8 sm:px-8 md:-mx-12 md:px-12 lg:-mx-0 lg:px-0 lg:grid lg:grid-cols-4">
            {behindTheShootFrames.map((frame, idx) => (
              <div
                key={idx}
                className="w-[78vw] sm:w-[320px] lg:w-auto shrink-0 snap-start flex flex-col group"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black border border-[#e2e0d2] mb-3">
                  <Image
                    src={frame.url}
                    alt={frame.label}
                    fill
                    sizes="(max-width: 640px) 78vw, (max-width: 1024px) 320px, 25vw"
                    className="object-cover object-center grayscale contrast-110 group-hover:scale-104 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-black/80 text-white font-mono text-[9px] uppercase tracking-widest px-2 py-0.5">
                    {frame.label}
                  </div>
                </div>
                <p className="font-sans text-xs text-[#666666] leading-snug">
                  {frame.caption}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
