"use client";

import React from "react";
import Link from "next/link";
import {
  Camera,
  Award,
  CheckCircle2,
  BookOpen,
  ArrowUpRight,
  Compass,
} from "lucide-react";
import type { PortfolioItem } from "@/data/portfolio";

export interface PortfolioProjectDetailsProps {
  item: PortfolioItem;
}

export default function PortfolioProjectDetails({
  item,
}: PortfolioProjectDetailsProps): React.JSX.Element {
  // Clean mentor display name
  const mentorName = item.mentor
    ? item.mentor.split("·")[0].replace("Mentor", "").trim()
    : "IIP Faculty Board";

  return (
    <section
      id="project-details"
      className="w-full py-16 sm:py-20 bg-[#fffef7] border-b border-[#e2e0d2]"
    >
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* Section Header: Open Editorial Headline */}
        <div className="pb-8 mb-10 border-b border-[#e2e0d2] flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#888888] font-semibold">
              Archival Record
            </span>
            <h2 className="font-sans font-light text-2xl sm:text-3xl md:text-4xl text-black tracking-[-0.03em] leading-tight">
              Curatorial Notes &amp; Technical Rig.
            </h2>
          </div>
          <div className="font-mono text-xs text-[#777777] uppercase tracking-wider">
            Series [{item.number}] · {item.discipline}
          </div>
        </div>

        {/* 2-Column Asymmetric Content Layout: No cards, pure typography and hairline dividers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column (7 cols): Artist Statement, Faculty Evaluation & Fieldwork Methodology */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            
            {/* Fellow Artist Statement */}
            <div className="flex flex-col gap-3.5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ca8a04]" />
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#888888] font-semibold">
                  Fellow Artist Statement
                </span>
              </div>

              <blockquote className="font-sans font-light text-lg sm:text-xl md:text-2xl text-[#1a1a1a] italic leading-relaxed">
                &ldquo;{item.statement}&rdquo;
              </blockquote>

              <div className="pt-1 font-mono text-xs text-[#777777] uppercase tracking-wider">
                {item.photographer} · Class of {item.year} · {item.location}
              </div>
            </div>

            {/* Curatorial Evaluation & Faculty Note */}
            <div className="pt-8 border-t border-[#e2e0d2] flex flex-col gap-3">
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#ca8a04] font-semibold flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#ca8a04]" />
                  Faculty Evaluation
                </span>
                <span className="font-mono text-[11px] text-[#777777] uppercase tracking-wider">
                  Mentor: {mentorName}
                </span>
              </div>

              <p className="font-sans text-sm sm:text-base text-[#3a3a3a] leading-relaxed">
                {item.curatorNotes}
              </p>
            </div>

            {/* Fieldwork Protocol & Methodology: Open Editorial List (No Cards) */}
            {item.fieldNotes && item.fieldNotes.length > 0 && (
              <div className="pt-8 border-t border-[#e2e0d2] flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#888888]" />
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#888888] font-semibold">
                    Fieldwork Protocol &amp; Methodology
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pt-1">
                  {item.fieldNotes.map((note, nIdx) => (
                    <div
                      key={nIdx}
                      className="flex items-start gap-3 py-2.5 border-b border-[#e8e6d9]"
                    >
                      <span className="font-mono text-xs text-[#ca8a04] font-bold shrink-0 mt-0.5">
                        0{nIdx + 1}.
                      </span>
                      <span className="font-sans text-xs sm:text-sm text-[#444444] leading-relaxed">
                        {note}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column (5 cols): Technical Rig Ledger & Academic Provenance (No Cards) */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            
            {/* Technical Specifications Ledger: Open Architectural Table */}
            <div className="flex flex-col gap-5 pt-0">
              <div className="flex items-center justify-between pb-3 border-b border-[#e2e0d2]">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-black font-semibold">
                  <Camera className="w-4 h-4 text-[#ca8a04]" />
                  <span>Technical Rig &amp; Exposure</span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#777777]">
                  Archival Spec
                </span>
              </div>

              {/* Data Definition List with subtle hairline rows */}
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-xs font-mono">
                <div className="border-b border-[#eceae0] pb-2.5">
                  <dt className="text-[#888888] uppercase tracking-wider mb-1 text-[11px]">Camera Body</dt>
                  <dd className="font-medium text-black text-sm">{item.specs?.camera || "35mm Camera"}</dd>
                </div>
                <div className="border-b border-[#eceae0] pb-2.5">
                  <dt className="text-[#888888] uppercase tracking-wider mb-1 text-[11px]">Focal Optics</dt>
                  <dd className="font-medium text-black text-sm">{item.specs?.lens || "Prime Optics"}</dd>
                </div>
                <div className="border-b border-[#eceae0] pb-2.5">
                  <dt className="text-[#888888] uppercase tracking-wider mb-1 text-[11px]">Sensor / Medium</dt>
                  <dd className="font-medium text-black text-sm truncate">
                    {item.specs?.filmOrSensor || item.medium}
                  </dd>
                </div>
                <div className="border-b border-[#eceae0] pb-2.5">
                  <dt className="text-[#888888] uppercase tracking-wider mb-1 text-[11px]">Exposure Formula</dt>
                  <dd className="font-medium text-[#ca8a04] text-sm">{item.specs?.exposure || "Manual Shutter"}</dd>
                </div>
                <div className="sm:col-span-2 pt-1 border-b border-[#eceae0] pb-2.5">
                  <dt className="text-[#888888] uppercase tracking-wider mb-1 text-[11px]">Print Dimensions &amp; Paper</dt>
                  <dd className="font-medium text-black text-xs leading-normal">
                    {item.specs?.dimensions || "Archival Exhibition Print"}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Academic Track & Competencies: Open Editorial Block (No Cards) */}
            <div className="flex flex-col gap-5 pt-6 border-t border-[#e2e0d2]">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-black font-semibold pb-3 border-b border-[#e2e0d2]">
                <BookOpen className="w-4 h-4 text-[#ca8a04]" />
                <span>Academic Track Provenance</span>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#888888]">
                  Completed Course
                </span>
                <span className="font-sans font-light text-base sm:text-lg text-black leading-snug">
                  {item.course}
                </span>
              </div>

              {/* Mastered Skills Badges */}
              {item.outcomes?.skills && item.outcomes.skills.length > 0 && (
                <div className="pt-3 border-t border-[#eceae0] flex flex-col gap-2.5">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#888888]">
                    Mastered Core Competencies
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {item.outcomes.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f2efe4] text-black font-mono text-[11px] uppercase tracking-wider border border-[#e2e0d2]"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#ca8a04]" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Course Link CTA */}
              {item.relatedCourseSlug && (
                <div className="pt-3">
                  <Link
                    href={`/courses/${item.relatedCourseSlug}`}
                    className="inline-flex items-center justify-between w-full p-3 rounded-full bg-black text-[#fffef7] hover:bg-[#ffd001] hover:text-black font-mono text-xs uppercase tracking-[0.16em] font-semibold transition-colors px-6"
                  >
                    <span>Explore Academic Track</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
