"use client";

import React from "react";
import type { PortfolioItem } from "@/data/portfolio";
import LineReveal from "@/components/animations/LineReveal";
import { User, Award, CheckCircle2, BookOpen, Compass } from "lucide-react";

export interface PortfolioDetailStoryProps {
  item: PortfolioItem;
}

export default function PortfolioDetailStory({ item }: PortfolioDetailStoryProps): React.JSX.Element {
  const mentorName = item.mentor.split("·")[0].replace("Mentor", "").trim();

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 border-b border-[#e2e0d2] bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 sm:pb-8 border-b border-[#e2e0d2] mb-10 sm:mb-14">
          <div>
            <div className="flex items-center gap-2 mb-3 select-none">
              <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#888888] font-medium">
                Academic Dossier // Student Curatorial Notes
              </span>
            </div>
            <LineReveal
              as="h2"
              lines={["Student Perspective & Faculty Review."]}
              className="font-sans font-light text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.12] text-black tracking-[-0.03em]"
            />
          </div>

          <div className="font-mono text-xs text-[#777777] uppercase tracking-wider shrink-0">
            Series {item.number} · {item.discipline}
          </div>
        </div>

        {/* 2-Column Split: Student Background & Artist Statement on Left, Faculty Critique & Outcomes on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Student Bio & Full Artist Statement */}
          <div className="lg:col-span-6 flex flex-col gap-8 sm:gap-10">
            
            {/* Student Photographer Profile Card */}
            <div className="p-6 sm:p-8 bg-[#fdfcf5] border border-[#e2e0d2] flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#eae8dc]">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-full bg-[#eae8dc] text-black font-semibold flex items-center justify-center font-mono text-xs">
                    {item.photographer.charAt(0)}
                  </span>
                  <div>
                    <h3 className="font-sans text-base sm:text-lg font-medium text-black">
                      {item.photographer}
                    </h3>
                    <span className="font-mono text-[11px] text-[#777777] uppercase tracking-wider">
                      Student Fellow · Class of {item.year}
                    </span>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-[#fffef7] border border-[#e2e0d2] font-mono text-[10px] uppercase tracking-wider text-[#666666]">
                  {item.category}
                </span>
              </div>

              {/* Student Bio */}
              <p className="font-sans font-light text-sm sm:text-[15px] text-[#444444] leading-relaxed">
                {item.photographerBio}
              </p>

              {/* Location context */}
              <div className="pt-2 text-xs font-mono text-[#888888] flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-[#ca8a04]" />
                <span>Fieldwork Location: {item.location}</span>
              </div>
            </div>

            {/* Complete Artist Statement */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#888888] flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-[#ca8a04]" />
                <span>Artist Statement & Project Brief</span>
              </span>

              <p className="font-sans font-light text-sm sm:text-base text-[#333333] leading-relaxed">
                {item.statement}
              </p>
            </div>

            {/* Student Field Notes & Shoot Diary */}
            {item.fieldNotes && item.fieldNotes.length > 0 && (
              <div className="border border-[#e2e0d2] bg-[#fdfcf5] p-5 sm:p-6 flex flex-col gap-3">
                <span className="font-mono text-xs uppercase tracking-wider text-black font-medium pb-2 border-b border-[#eae8dc] flex items-center justify-between">
                  <span>Student Field Notes & Residency Diary</span>
                  <span className="text-[#888888]">({item.fieldNotes.length} entries)</span>
                </span>
                <ul className="flex flex-col gap-2.5 font-mono text-xs text-[#555555]">
                  {item.fieldNotes.map((note, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="text-[#ca8a04] font-semibold">[{String(idx + 1).padStart(2, "0")}]</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>

          {/* Right Column: Faculty Evaluation, Academic Outcomes & Technical Specs */}
          <div className="lg:col-span-6 flex flex-col gap-8 sm:gap-10">
            
            {/* Faculty Critique Review Card */}
            <div className="p-6 sm:p-8 bg-black text-[#fffef7] flex flex-col gap-4 shadow-md">
              <div className="flex items-center justify-between pb-3 border-b border-white/15">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#ffd001]">
                  <Award className="w-4 h-4" />
                  <span>Faculty Mentor Evaluation</span>
                </div>
                <span className="font-mono text-[11px] text-white/60 uppercase">
                  {mentorName}
                </span>
              </div>

              <blockquote className="font-sans font-light text-sm sm:text-base text-white/90 leading-relaxed italic">
                “{item.curatorNotes}”
              </blockquote>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-white/50 uppercase tracking-wider">
                <span>Evaluator: {item.mentor}</span>
                <span>IIP Academic Board</span>
              </div>
            </div>

            {/* Practical Learning Outcomes */}
            {item.outcomes && (
              <div className="p-6 sm:p-8 bg-[#fdfcf5] border border-[#e2e0d2] flex flex-col gap-4">
                <div className="pb-2 border-b border-[#eae8dc]">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#888888]">
                    Learning Outcomes & Technical Mastery
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-black font-semibold">
                    Core Skills Demonstrated:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {item.outcomes.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#eae8dc] text-black font-mono text-xs rounded-full"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#059669]" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#eae8dc]">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#888888] block mb-1">
                    Academic Takeaway:
                  </span>
                  <p className="font-sans font-light text-sm text-[#444444] leading-relaxed">
                    {item.outcomes.takeaway}
                  </p>
                </div>
              </div>
            )}

            {/* Technical Rig Specifications Box */}
            <div className="p-5 sm:p-6 border border-[#e2e0d2] flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#888888] pb-2 border-b border-[#e2e0d2]">
                Camera Rig & Exhibition Print Details
              </span>

              <dl className="grid grid-cols-2 gap-y-3 gap-x-4 font-mono text-xs">
                <div>
                  <dt className="text-[#888888] uppercase tracking-wider text-[10.5px]">Sensor / Medium</dt>
                  <dd className="font-medium text-black mt-0.5 truncate">{item.specs.filmOrSensor}</dd>
                </div>
                <div>
                  <dt className="text-[#888888] uppercase tracking-wider text-[10.5px]">Exposure Formula</dt>
                  <dd className="font-medium text-black mt-0.5 truncate">{item.specs.exposure}</dd>
                </div>
                <div>
                  <dt className="text-[#888888] uppercase tracking-wider text-[10.5px]">Master Optics</dt>
                  <dd className="font-medium text-black mt-0.5 truncate">{item.specs.lens}</dd>
                </div>
                <div>
                  <dt className="text-[#888888] uppercase tracking-wider text-[10.5px]">Print Dimension</dt>
                  <dd className="font-medium text-black mt-0.5 truncate">{item.specs.dimensions.split(" ")[0]} {item.specs.dimensions.split(" ")[1]}</dd>
                </div>
              </dl>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
