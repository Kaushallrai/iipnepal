"use client";

import React from "react";
import { Camera, Award } from "lucide-react";
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

          </div>

          {/* Right Column (5 cols): Technical Rig Ledger (No Cards) */}
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

          </div>

        </div>

      </div>
    </section>
  );
}
