"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
  Award,
  CheckCircle2,
  MapPin,
  Quote,
} from "lucide-react";
import type { PortfolioItem } from "@/data/portfolio";

export interface PortfolioDetailBentoProps {
  item: PortfolioItem;
}

export default function PortfolioDetailBento({ item }: PortfolioDetailBentoProps): React.JSX.Element {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  // 4 distinct exhibition plates
  const plates = [
    {
      url: item.gallery?.[0]?.url || item.coverImage,
      caption: item.gallery?.[0]?.caption || item.title,
      label: "PLATE 01 // MASTER",
      location: item.gallery?.[0]?.shotLocation || item.location,
      specs: item.specs?.exposure || "1/125s · f/2.8 · ISO 800",
      optics: `${item.specs?.camera || "Leica M10-R"} · ${item.specs?.lens || "35mm f/2 ASPH"}`,
    },
    {
      url: item.gallery?.[1]?.url || "/images/portfolio-devotee.webp",
      caption: item.gallery?.[1]?.caption || "Stepped temple shadows and morning devotees.",
      label: "PLATE 02 // STUDY",
      location: item.gallery?.[1]?.shotLocation || item.location,
      specs: "1/250s · f/2 · ISO 400",
      optics: "35mm Prime · Natural Light",
    },
    {
      url: item.gallery?.[2]?.url || "/images/hero-photographer.webp",
      caption: item.gallery?.[2]?.caption || "Fieldwork documentation: working close with prime focal lengths.",
      label: "PLATE 03 // AMBIENCE",
      location: item.gallery?.[2]?.shotLocation || item.location,
      specs: "1/125s · f/4 · ISO 800",
      optics: "Available Ambient Window Light",
    },
    {
      url: item.gallery?.[3]?.url || "/images/portfolio-artisan.webp",
      caption: item.gallery?.[3]?.caption || "Detail study: Weathered hands measuring dried spices.",
      label: "PLATE 04 // DETAIL",
      location: item.gallery?.[3]?.shotLocation || item.location,
      specs: "1/60s · f/2.8 · ISO 1600",
      optics: "Close-Quarters Handheld Texture",
    },
  ];

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  };

  const closeLightbox = useCallback(() => {
    setActiveLightboxIndex(null);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
    }
  }, []);

  const handlePrev = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) =>
      prev === 0 ? plates.length - 1 : (prev as number) - 1
    );
  }, [activeLightboxIndex, plates.length]);

  const handleNext = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) =>
      prev === plates.length - 1 ? 0 : (prev as number) + 1
    );
  }, [activeLightboxIndex, plates.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    if (activeLightboxIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIndex, closeLightbox, handlePrev, handleNext]);

  // Clean mentor name
  const mentorName = item.mentor
    ? item.mentor.split("·")[0].replace("Mentor", "").trim()
    : "IIP Faculty Board";

  // Concise statement quote
  const shortStatement =
    item.statement
      ?.split(". ")
      .slice(0, 2)
      .join(". ")
      .replace(/\.$/, "") + "." || item.summary;

  return (
    <>
      <section className="w-full pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-18 md:pb-20 bg-[#fffef7] border-b border-[#e2e0d2]">
        <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          
          {/* 1. ARCHIVAL BREADCRUMB */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 sm:pb-6 border-b border-[#e2e0d2] text-xs font-mono uppercase tracking-[0.18em] text-[#777777]">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2.5">
              <Link href="/portfolio" className="hover:text-black transition-colors font-medium">
                Portfolio Archive
              </Link>
              <span>/</span>
              <span className="text-black font-semibold truncate max-w-[200px] sm:max-w-none">
                {item.title}
              </span>
            </nav>

            <div className="text-black font-mono text-xs uppercase tracking-[0.18em]">
              Series [{item.number}] · Class of {item.year}
            </div>
          </div>

          {/* 2. EDITORIAL HEADER */}
          <div className="pt-6 sm:pt-8 pb-8 sm:pb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl flex flex-col gap-2.5">
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#666666]">
                <span className="px-2.5 py-0.5 rounded-full bg-[#f2efe4] text-black font-semibold border border-[#e2e0d2]">
                  {item.category || item.tag}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-black font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#ca8a04]" />
                  {item.location}
                </span>
                <span>•</span>
                <span>Fellow: {item.photographer}</span>
              </div>

              <h1 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.08] tracking-[-0.035em] text-black">
                {item.title}
              </h1>

              <p className="font-mono text-xs sm:text-sm text-[#555555] tracking-[0.04em] uppercase leading-relaxed max-w-2xl">
                {item.tagline || item.summary}
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <button
                type="button"
                onClick={() => openLightbox(0)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-black text-[#fffef7] hover:bg-[#ffd001] hover:text-black font-mono text-xs uppercase tracking-[0.16em] font-semibold transition-colors cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Open Lightbox Gallery</span>
              </button>
            </div>
          </div>

          {/* 3. BENTO GRID: IMAGE ON TOP, TEXT DIRECTLY BELOW IT (NOT ON SIDE LIKE LABEL) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            
            {/* CELL 1: MASTER PLATE (8 cols) — Image on top, details below */}
            <div className="col-span-12 lg:col-span-8 bg-[#fbf9f0] border border-[#e2e0d2] overflow-hidden flex flex-col justify-between">
              {/* Clean Image Frame */}
              <div
                onClick={() => openLightbox(0)}
                className="relative w-full aspect-[16/10] bg-[#0a0a0a] overflow-hidden cursor-pointer group"
              >
                <Image
                  src={plates[0].url}
                  alt={plates[0].caption}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover object-center grayscale contrast-105 group-hover:scale-102 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity font-mono text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-full bg-black/85 text-white flex items-center gap-1.5 shadow-sm">
                    <Maximize2 className="w-3 h-3" />
                    <span>View Lightbox</span>
                  </span>
                </div>
              </div>

              {/* Text Directly Below Image */}
              <div className="p-5 sm:p-6 flex flex-col gap-3">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-[#eae8dc]">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#ca8a04] font-semibold">
                    {plates[0].label}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#777777]">
                    {plates[0].location}
                  </span>
                </div>

                <p className="font-sans text-sm sm:text-base text-black leading-relaxed font-normal">
                  {plates[0].caption}
                </p>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#666666]">
                  <span className="text-black font-medium">{plates[0].optics}</span>
                  <span className="text-[#ca8a04] font-semibold">{plates[0].specs}</span>
                </div>
              </div>
            </div>

            {/* CELL 2: STUDY PLATE (4 cols) — Image on top, details below */}
            <div className="col-span-12 lg:col-span-4 bg-[#fbf9f0] border border-[#e2e0d2] overflow-hidden flex flex-col justify-between">
              {/* Clean Image Frame */}
              <div
                onClick={() => openLightbox(1)}
                className="relative w-full aspect-[4/3] lg:aspect-[16/10] bg-[#0a0a0a] overflow-hidden cursor-pointer group"
              >
                <Image
                  src={plates[1].url}
                  alt={plates[1].caption}
                  fill
                  sizes="(max-width: 1024px) 100vw, 34vw"
                  className="object-cover object-center grayscale contrast-105 group-hover:scale-102 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity font-mono text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-full bg-black/85 text-white flex items-center gap-1.5 shadow-sm">
                    <Maximize2 className="w-3 h-3" />
                    <span>View Lightbox</span>
                  </span>
                </div>
              </div>

              {/* Text Directly Below Image */}
              <div className="p-5 sm:p-6 flex flex-col gap-3">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-[#eae8dc]">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#ca8a04] font-semibold">
                    {plates[1].label}
                  </span>
                  <span className="font-mono text-[11px] text-[#777777]">
                    Study Frame
                  </span>
                </div>

                <p className="font-sans text-sm text-[#222222] leading-relaxed">
                  {plates[1].caption}
                </p>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#666666]">
                  <span>{plates[1].optics}</span>
                  <span className="text-[#ca8a04] font-semibold">{plates[1].specs}</span>
                </div>
              </div>
            </div>

            {/* CELL 3: AMBIENCE PLATE (4 cols) — Image on top, details below */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#fbf9f0] border border-[#e2e0d2] overflow-hidden flex flex-col justify-between">
              <div
                onClick={() => openLightbox(2)}
                className="relative w-full aspect-[4/3] bg-[#0a0a0a] overflow-hidden cursor-pointer group"
              >
                <Image
                  src={plates[2].url}
                  alt={plates[2].caption}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center grayscale contrast-105 group-hover:scale-102 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity font-mono text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-full bg-black/85 text-white flex items-center gap-1.5 shadow-sm">
                    <Maximize2 className="w-3 h-3" />
                    <span>View Lightbox</span>
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6 flex flex-col gap-3">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-[#eae8dc]">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#ca8a04] font-semibold">
                    {plates[2].label}
                  </span>
                  <span className="font-mono text-[11px] text-[#777777]">
                    Atmosphere
                  </span>
                </div>

                <p className="font-sans text-sm text-[#222222] leading-relaxed">
                  {plates[2].caption}
                </p>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#666666]">
                  <span>{plates[2].optics}</span>
                  <span className="text-[#ca8a04] font-semibold">{plates[2].specs}</span>
                </div>
              </div>
            </div>

            {/* CELL 4: DETAIL PLATE (4 cols) — Image on top, details below */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#fbf9f0] border border-[#e2e0d2] overflow-hidden flex flex-col justify-between">
              <div
                onClick={() => openLightbox(3)}
                className="relative w-full aspect-[4/3] bg-[#0a0a0a] overflow-hidden cursor-pointer group"
              >
                <Image
                  src={plates[3].url}
                  alt={plates[3].caption}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center grayscale contrast-105 group-hover:scale-102 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity font-mono text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-full bg-black/85 text-white flex items-center gap-1.5 shadow-sm">
                    <Maximize2 className="w-3 h-3" />
                    <span>View Lightbox</span>
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6 flex flex-col gap-3">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-[#eae8dc]">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#ca8a04] font-semibold">
                    {plates[3].label}
                  </span>
                  <span className="font-mono text-[11px] text-[#777777]">
                    Micro Study
                  </span>
                </div>

                <p className="font-sans text-sm text-[#222222] leading-relaxed">
                  {plates[3].caption}
                </p>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#666666]">
                  <span>{plates[3].optics}</span>
                  <span className="text-[#ca8a04] font-semibold">{plates[3].specs}</span>
                </div>
              </div>
            </div>

            {/* CELL 5: CURATORIAL DOSSIER TILE (4 cols) — Perfectly balances Row 2 */}
            <div className="col-span-12 md:col-span-12 lg:col-span-4 bg-[#fffef7] border border-[#e2e0d2] p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#e2e0d2] mb-4">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#888888] font-semibold flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#ca8a04]" />
                    Curatorial Review
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#f2efe4] text-black font-semibold border border-[#e2e0d2]">
                    Verified
                  </span>
                </div>

                {/* Pullquote */}
                <div className="mb-4">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#888888] mb-1.5">
                    <Quote className="w-3.5 h-3.5 text-[#ca8a04]" />
                    <span>Fellow Statement</span>
                  </div>
                  <blockquote className="font-sans font-light text-sm text-[#111111] italic leading-relaxed">
                    “{shortStatement}”
                  </blockquote>
                </div>

                {/* Faculty Verdict */}
                <div className="pt-3 border-t border-[#eae8dc]">
                  <span className="font-mono text-[11px] text-[#ca8a04] uppercase tracking-wider font-semibold block mb-1">
                    Mentor: {mentorName}
                  </span>
                  <p className="font-sans text-xs text-[#555555] leading-relaxed">
                    Exemplary framing and mastery of natural ambient light without intruding upon the rhythm of Asan.
                  </p>
                </div>
              </div>

              {/* Competencies Badges */}
              {item.outcomes?.skills && item.outcomes.skills.length > 0 && (
                <div className="pt-4 mt-3 border-t border-[#eae8dc]">
                  <div className="flex flex-wrap gap-1.5">
                    {item.outcomes.skills.slice(0, 2).map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#f5f2e8] text-black font-mono text-[10px] uppercase tracking-wider border border-[#e2e0d2]"
                      >
                        <CheckCircle2 className="w-2.5 h-2.5 text-[#ca8a04]" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* 4. TECHNICAL RIG LEDGER BAR (CLEAN HORIZONTAL METRICS) */}
          <div className="mt-8 sm:mt-10 p-5 sm:p-6 bg-[#fbf9f0] border border-[#e2e0d2] flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-3">
              <Camera className="w-4 h-4 text-[#ca8a04] shrink-0" />
              <span className="text-[#888888] uppercase tracking-wider text-[11px]">Technical Rig:</span>
              <span className="text-black font-medium">
                {item.specs?.camera || "Leica M10-R"} ({item.specs?.lens || "35mm f/2 ASPH"})
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-[#777777]">
              <span>Formula: <strong className="text-black">{item.specs?.exposure || "1/125s · f/2.8"}</strong></span>
              <span>•</span>
              <span>Sensor: <strong className="text-black">{item.specs?.filmOrSensor || "35mm Full-Frame"}</strong></span>
              <span>•</span>
              <span>Medium: <strong className="text-black">{item.medium || "Natural Light"}</strong></span>
            </div>
          </div>

        </div>
      </section>

      {/* 5. FULLSCREEN LIGHTBOX MODAL */}
      {activeLightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between select-none animate-in fade-in duration-200"
        >
          {/* Top Bar */}
          <div className="w-full px-6 py-4 flex items-center justify-between border-b border-white/10 text-white font-mono text-xs uppercase tracking-wider">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#ffd001]" />
              <span>
                Plate 0{activeLightboxIndex + 1} of 0{plates.length} // {item.title}
              </span>
            </div>

            <button
              type="button"
              onClick={closeLightbox}
              className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Centered Image View */}
          <div className="relative flex-1 flex items-center justify-center p-4 sm:p-8">
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 z-20 p-3 rounded-full bg-black/60 text-white/80 hover:text-white hover:bg-black/90 border border-white/15 transition-all cursor-pointer"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="relative w-full max-w-5xl h-[65vh] sm:h-[75vh]">
              <Image
                src={plates[activeLightboxIndex].url}
                alt={plates[activeLightboxIndex].caption}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="absolute right-4 sm:right-8 z-20 p-3 rounded-full bg-black/60 text-white/80 hover:text-white hover:bg-black/90 border border-white/15 transition-all cursor-pointer"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Bar: Caption & Exposure info */}
          <div className="w-full px-6 py-4 bg-black border-t border-white/10 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="text-[#ffd001] font-semibold">
                {plates[activeLightboxIndex].label}
              </span>
              <span className="hidden sm:inline text-white/40">•</span>
              <span className="text-white/80">
                {plates[activeLightboxIndex].caption}
              </span>
            </div>

            <div className="text-white/60 text-[11px] uppercase tracking-wider shrink-0">
              {item.specs?.camera} · {item.specs?.exposure}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
