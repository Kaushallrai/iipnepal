"use client";

import React from "react";
import Link from "next/link";
import type { PortfolioItem } from "@/data/portfolio";
import LineReveal from "@/components/animations/LineReveal";

export interface PortfolioDetailStoryProps {
  item: PortfolioItem;
}

export default function PortfolioDetailStory({ item }: PortfolioDetailStoryProps): React.JSX.Element {
  // Extract concise statement (first 1-2 sentences) to keep it minimal
  const statementBrief = item.statement.split(". ").slice(0, 2).join(". ") + (item.statement.includes(". ") ? "." : "");
  // Extract concise mentor critique (first 2 sentences)
  const curatorBrief = item.curatorNotes.split(". ").slice(0, 2).join(". ") + (item.curatorNotes.includes(". ") ? "." : "");
  const mentorName = item.mentor.split("·")[0].replace("Mentor", "").trim();

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 border-b border-[#e2e0d2] bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Concise Artist Perspective */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3 sm:mb-4 select-none">
              <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#888888] font-medium">
                Curatorial Dossier // {item.category}
              </span>
            </div>

            <LineReveal
              as="h2"
              lines={["Artist & Field Notes."]}
              className="font-sans font-light text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.12] text-black tracking-[-0.03em] mb-4 sm:mb-6"
            />

            <blockquote className="border-l-2 border-[#ffd001] pl-5 py-1 font-sans font-light text-base sm:text-lg text-[#222222] italic leading-relaxed mb-4">
              “{statementBrief}”
            </blockquote>

            <span className="font-mono text-xs text-[#888888] uppercase tracking-wider">
              — {item.photographer}, Class of {item.year}
            </span>
          </div>

          {/* Right Column: Faculty Critique & Technical Footprint */}
          <div className="lg:col-span-7 flex flex-col gap-8 sm:gap-10">
            
            {/* Faculty Review Card */}
            <div className="p-6 sm:p-8 bg-[#fdfcf5] border border-[#e2e0d2] flex flex-col gap-3">
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-[#888888] pb-2 border-b border-[#e2e0d2]">
                <span>Faculty Review</span>
                <span className="text-black font-medium">{mentorName}</span>
              </div>
              <p className="font-sans font-light text-sm sm:text-base text-[#333333] leading-relaxed">
                {curatorBrief}
              </p>
            </div>

            {/* What This Project Demonstrates (Educational Outcome) */}
            {item.outcomes && (
              <div className="p-6 sm:p-8 bg-[#fffef7] border border-[#e2e0d2] border-l-4 border-l-[#ffd001] flex flex-col gap-4 shadow-sm">
                <div className="flex items-center justify-between pb-2.5 border-b border-[#eae8dc]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_6px_rgba(255,208,1,0.6)]" />
                    <span className="font-mono text-xs uppercase tracking-[0.16em] text-black font-semibold">
                      What This Project Demonstrates
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-[#666666] uppercase tracking-wider">
                    Educational Outcomes
                  </span>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2">
                  {item.outcomes.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 bg-[#f4f2e9] text-black border border-[#e2e0d2]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Takeaway Narrative */}
                <p className="font-sans font-light text-sm sm:text-[15px] text-[#333333] leading-relaxed">
                  {item.outcomes.takeaway}
                </p>

                {/* Link to Course */}
                <div className="pt-2 flex items-center justify-between font-mono text-xs border-t border-[#eae8dc]">
                  <span className="text-[#888888]">Mastered through {item.course.split("(")[0].trim()}</span>
                  <Link
                    href={`/courses/${item.relatedCourseSlug}`}
                    className="text-black font-medium hover:text-[#ffd001] transition-colors underline decoration-black/30 underline-offset-4"
                  >
                    View Syllabus →
                  </Link>
                </div>
              </div>
            )}

            {/* Technical Specifications Grid (Clean & Scannable) */}
            <div className="flex flex-col gap-4">
              <div className="pb-2.5 border-b border-[#e2e0d2] flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#888888]">
                  Technical Footprint
                </span>
                <span className="font-mono text-[11px] text-[#888888] uppercase tracking-wider">
                  Archival Standard
                </span>
              </div>

              <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 font-mono text-xs">
                <div>
                  <dt className="text-[#888888] uppercase tracking-wider mb-1 text-[11px]">Optics</dt>
                  <dd className="font-medium text-black text-xs sm:text-[13px] truncate">{item.specs.lens}</dd>
                </div>
                <div>
                  <dt className="text-[#888888] uppercase tracking-wider mb-1 text-[11px]">Sensor / Medium</dt>
                  <dd className="font-medium text-black text-xs sm:text-[13px] truncate">{item.specs.filmOrSensor.split("(")[0].trim()}</dd>
                </div>
                <div>
                  <dt className="text-[#888888] uppercase tracking-wider mb-1 text-[11px]">Exposure</dt>
                  <dd className="font-medium text-black text-xs sm:text-[13px] truncate">{item.specs.exposure}</dd>
                </div>
                <div>
                  <dt className="text-[#888888] uppercase tracking-wider mb-1 text-[11px]">Print Edition</dt>
                  <dd className="font-medium text-black text-xs sm:text-[13px] truncate">{item.specs.dimensions.split(" ")[0]} {item.specs.dimensions.split(" ")[1]}</dd>
                </div>
              </dl>
            </div>

            {/* Field Notes Accordion Disclosure */}
            {item.fieldNotes && item.fieldNotes.length > 0 && (
              <details className="group border border-[#e2e0d2] bg-[#fdfcf5] p-4 sm:p-5 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer list-none select-none font-mono text-xs uppercase tracking-wider text-[#666666] group-open:text-black">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#888888] group-open:bg-[#ffd001]" />
                    Fieldwork Methodology & Field Notes ({item.fieldNotes.length})
                  </span>
                  <span className="text-[#888888] group-open:rotate-180 transition-transform duration-200">
                    ↓
                  </span>
                </summary>
                <ul className="mt-4 pt-3 border-t border-[#eae8dc] flex flex-col gap-2.5 font-mono text-xs text-[#555555]">
                  {item.fieldNotes.map((note, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="text-black font-semibold">[{String(idx + 1).padStart(2, "0")}]</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </details>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
