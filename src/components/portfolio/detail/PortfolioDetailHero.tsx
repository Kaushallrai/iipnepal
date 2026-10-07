"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import type { PortfolioItem } from "@/lib/portfolio-data";
import LineReveal from "@/components/animations/LineReveal";

export interface PortfolioDetailHeroProps {
  item: PortfolioItem;
}

export default function PortfolioDetailHero({ item }: PortfolioDetailHeroProps): React.JSX.Element {
  const [selectedFrameIndex, setSelectedFrameIndex] = useState<number>(0);
  const [showLightbox, setShowLightbox] = useState<boolean>(false);

  const mentorName = item.mentor.split("·")[0].replace("Mentor", "").trim();
  const currentFrame = item.gallery[selectedFrameIndex] || item.gallery[0] || {
    url: item.coverImage,
    caption: item.title,
    shotLocation: item.location,
  };

  const openLightbox = (index?: number) => {
    if (typeof index === "number") {
      setSelectedFrameIndex(index);
    }
    setShowLightbox(true);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  };

  const closeLightbox = useCallback(() => {
    setShowLightbox(false);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
    }
  }, []);

  const handlePrevFrame = useCallback(() => {
    setSelectedFrameIndex((prev) =>
      prev === 0 ? item.gallery.length - 1 : prev - 1
    );
  }, [item.gallery.length]);

  const handleNextFrame = useCallback(() => {
    setSelectedFrameIndex((prev) =>
      prev === item.gallery.length - 1 ? 0 : prev + 1
    );
  }, [item.gallery.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!showLightbox) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") handlePrevFrame();
      if (e.key === "ArrowRight") handleNextFrame();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showLightbox, closeLightbox, handlePrevFrame, handleNextFrame]);

  return (
    <section className="w-full pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-14 md:pb-16 border-b border-[#e2e0d2] bg-[#fffef7]">
      <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex flex-col gap-6 sm:gap-8 lg:gap-10">
        
        {/* 1. ARCHIVAL BREADCRUMB BAR */}
        <div className="flex items-center justify-between pb-5 sm:pb-6 border-b border-[#e2e0d2] text-xs font-mono uppercase tracking-[0.2em] text-[#888888]">
          <nav aria-label="Breadcrumb" className="flex items-center gap-3">
            <Link href="/portfolio" className="hover:text-black transition-colors">
              Archive
            </Link>
            <span>/</span>
            <span className="text-[#555555] hidden sm:inline-block">{item.category}</span>
            <span className="hidden sm:inline-block">/</span>
            <span className="text-black font-semibold truncate max-w-[200px] sm:max-w-none">
              {item.title}
            </span>
          </nav>

          <span className="text-black font-semibold hidden md:inline-block">
            Catalog No. {item.number} // {item.year}
          </span>
        </div>

        {/* 2. COMPACT EDITORIAL TITLE & SUMMARY */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8">
          <div className="max-w-4xl flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3 sm:mb-4 select-none">
              <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#888888] font-medium">
                Fieldwork Exhibition // {item.discipline}
              </span>
            </div>

            <LineReveal
              as="h1"
              lines={[item.title]}
              className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[58px] xl:text-[64px] leading-[1.08] tracking-[-0.035em] text-black mb-3 sm:mb-4"
            />

            <p className="font-sans font-normal text-sm sm:text-base md:text-lg text-[#555555] leading-relaxed max-w-3xl">
              {item.tagline || item.summary}
            </p>
          </div>

          <div className="font-mono text-xs text-[#777777] uppercase tracking-wider flex items-center gap-3 shrink-0 self-start lg:self-end pb-1">
            <span className="text-black font-semibold">{item.gallery.length} Curated Frames</span>
            <span>•</span>
            <span>{item.location}</span>
          </div>
        </div>

        {/* 3. ARCHITECTURAL METADATA STRIP (QUICK SPECS AT A GLANCE) */}
        <div className="w-full py-4 px-5 sm:px-6 bg-[#f8f7ed] border border-[#e2e0d2] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 font-mono text-xs">
          <div className="flex flex-col gap-0.5">
            <span className="text-[#888888] text-[10px] uppercase tracking-wider">Photographer</span>
            <span className="text-black font-semibold truncate">{item.photographer}</span>
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="text-[#888888] text-[10px] uppercase tracking-wider">Location</span>
            <span className="text-black font-medium truncate">{item.location}</span>
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="text-[#888888] text-[10px] uppercase tracking-wider">Academic Track</span>
            <span className="text-black font-medium truncate">{item.course.split("(")[0].trim()}</span>
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="text-[#888888] text-[10px] uppercase tracking-wider">Faculty Mentor</span>
            <span className="text-black font-medium truncate">{mentorName}</span>
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="text-[#888888] text-[10px] uppercase tracking-wider">Camera Rig</span>
            <span className="text-black font-medium truncate">{item.specs.camera.split(" ")[0]} · {item.specs.lens.split(" ")[0]}</span>
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="text-[#888888] text-[10px] uppercase tracking-wider">Archival Series</span>
            <span className="text-black font-semibold uppercase tracking-wider">{item.gallery.length} Frames Cataloged</span>
          </div>
        </div>

        {/* 4. REFINED 2/3 + 1/3 PHOTOGRAPHIC EXHIBITION STAGE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-start">
          
          {/* LEFT 2/3: ACTIVE MASTER FRAME DISPLAY & CAPTION (COL 1-8) */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {/* The Master Image Viewer with Balanced Photographic Proportions */}
            <div
              onClick={() => openLightbox()}
              className="relative w-full aspect-[16/10] sm:aspect-[16/10] max-h-[540px] xl:max-h-[600px] overflow-hidden bg-[#0d0d0d] select-none border border-[#e2e0d2] cursor-pointer group"
            >
              <Image
                src={currentFrame.url}
                alt={currentFrame.caption}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 67vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-102"
              />

              {/* Archival Negative Stamp */}
              <div className="absolute top-3.5 left-3.5 bg-black/85 text-white font-mono text-[9px] sm:text-[10px] uppercase tracking-widest px-2.5 py-1 backdrop-blur-xs">
                FRAME 0{selectedFrameIndex + 1} OF 0{item.gallery.length} // ARCHIVE {item.number}
              </div>

              <div className="absolute top-3.5 right-3.5 bg-[#ffd001] text-black font-mono text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1">
                {item.year}
              </div>

              {/* Inspect Overlay Trigger */}
              <div className="absolute bottom-3.5 right-3.5 bg-black/85 hover:bg-black text-white font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 flex items-center gap-1.5 transition-colors">
                <Maximize2 className="w-3 h-3 text-[#ffd001]" />
                <span>Fullscreen Inspect</span>
              </div>
            </div>

            {/* Frame Caption, Details & Quick Traversal */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs border-b border-[#e2e0d2] pb-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                <span className="text-black font-semibold uppercase tracking-wider text-xs shrink-0">
                  Frame 0{selectedFrameIndex + 1}:
                </span>
                <span className="font-sans text-xs sm:text-sm text-[#333333]">
                  {currentFrame.caption}
                </span>
                {currentFrame.shotLocation && (
                  <span className="text-[#888888] text-[11px] font-mono uppercase tracking-wider shrink-0">
                    — {currentFrame.shotLocation}
                  </span>
                )}
              </div>

              {/* Traversal Controls */}
              <div className="flex items-center gap-3 shrink-0 self-start sm:self-auto">
                <button
                  type="button"
                  onClick={handlePrevFrame}
                  aria-label="Previous frame"
                  className="px-2.5 py-1 border border-[#e2e0d2] hover:border-black text-black text-xs font-mono transition-colors cursor-pointer"
                >
                  ← Prev
                </button>

                <span className="text-[#888888] text-xs font-mono tabular-nums">
                  0{selectedFrameIndex + 1} / 0{item.gallery.length}
                </span>

                <button
                  type="button"
                  onClick={handleNextFrame}
                  aria-label="Next frame"
                  className="px-2.5 py-1 border border-[#e2e0d2] hover:border-black text-black text-xs font-mono transition-colors cursor-pointer"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT 1/3: ALL PORTFOLIO FRAMES DIRECTORY (COL 9-12) */}
          <div className="lg:col-span-4 flex flex-col bg-[#faf9f3] border border-[#e2e0d2] p-4 sm:p-5">
            {/* Archival Column Header */}
            <div className="pb-3 border-b border-[#e2e0d2] flex items-center justify-between">
              <div className="flex items-center gap-2 select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffd001] shrink-0" />
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-black font-semibold">
                  Exhibition Archive
                </span>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#888888]">
                {item.gallery.length} Total Frames
              </span>
            </div>

            {/* Scrollable Frame List with Custom Delicate Scrollbar */}
            <div className="flex flex-col gap-2.5 pt-3 max-h-[440px] sm:max-h-[480px] lg:max-h-[520px] xl:max-h-[560px] overflow-y-auto pr-1">
              {item.gallery.map((galleryImage, gIdx) => {
                const isSelected = selectedFrameIndex === gIdx;
                return (
                  <button
                    key={gIdx}
                    type="button"
                    onClick={() => setSelectedFrameIndex(gIdx)}
                    className={`group/frame flex items-start gap-3 p-2.5 text-left border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#fffef7] border-l-4 border-l-[#ffd001] border-y-[#222222] border-r-[#222222] shadow-xs"
                        : "bg-white hover:bg-[#fffef7] border-[#e2e0d2] hover:border-[#888888]"
                    }`}
                  >
                    {/* Frame Thumbnail */}
                    <div className="relative w-20 sm:w-22 h-14 sm:h-15 shrink-0 overflow-hidden bg-black border border-[#e2e0d2]">
                      <Image
                        src={galleryImage.url}
                        alt={galleryImage.caption}
                        fill
                        sizes="88px"
                        className={`object-cover transition-all duration-300 ${
                          isSelected ? "scale-103" : "grayscale opacity-80 group-hover/frame:grayscale-0 group-hover/frame:opacity-100"
                        }`}
                      />
                      <div className="absolute bottom-1 right-1 bg-black/85 text-white font-mono text-[8px] uppercase tracking-wider px-1 py-0.2">
                        0{gIdx + 1}
                      </div>
                    </div>

                    {/* Frame Meta & Caption */}
                    <div className="flex flex-col gap-1 min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className={`font-mono text-[10px] uppercase tracking-wider ${
                          isSelected ? "text-black font-bold" : "text-[#777777]"
                        }`}>
                          Frame 0{gIdx + 1}
                        </span>
                        {isSelected && (
                          <span className="font-mono text-[9px] uppercase tracking-widest text-black bg-[#ffd001] px-1.5 py-0.2 font-semibold">
                            Active
                          </span>
                        )}
                      </div>

                      <span className={`font-sans text-xs leading-snug line-clamp-2 ${
                        isSelected ? "text-black font-medium" : "text-[#555555] group-hover/frame:text-black"
                      }`}>
                        {galleryImage.caption}
                      </span>

                      {galleryImage.shotLocation && (
                        <span className="font-mono text-[10px] text-[#888888] truncate pt-0.5">
                          {galleryImage.shotLocation}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Traversal Note & Course Bridge */}
            <div className="pt-3 mt-3 border-t border-[#e2e0d2] flex items-center justify-between font-mono text-[11px]">
              <span className="text-[#888888]">Curriculum Project</span>
              <Link
                href={`/courses/${item.relatedCourseSlug}`}
                className="inline-flex items-center gap-1 text-black hover:text-[#555555] transition-colors font-medium"
              >
                <span>View Syllabus</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

        </div>

      </div>

      {/* FULL-SCREEN LIGHTBOX MODAL */}
      {showLightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Full-screen frame view"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col justify-between p-4 sm:p-6 md:p-8 select-none"
        >
          {/* Top Lightbox Bar */}
          <div className="w-full flex items-center justify-between text-white font-mono text-xs border-b border-white/15 pb-4">
            <span className="text-white/80 uppercase tracking-widest">
              FRAME 0{selectedFrameIndex + 1} OF 0{item.gallery.length} // {item.title}
            </span>

            <button
              type="button"
              onClick={closeLightbox}
              className="p-2 text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>

          {/* Central Image with Frame Navigation Controls */}
          <div className="relative flex-1 w-full max-h-[80vh] my-4 flex items-center justify-center">
            <div className="relative w-full h-full max-w-5xl">
              <Image
                src={currentFrame.url}
                alt={currentFrame.caption}
                fill
                priority
                className="object-contain"
              />
            </div>

            <button
              type="button"
              onClick={handlePrevFrame}
              aria-label="Previous frame"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
            </button>

            <button
              type="button"
              onClick={handleNextFrame}
              aria-label="Next frame"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>

          {/* Bottom Lightbox Caption */}
          <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-white/80 font-mono text-xs border-t border-white/15 pt-4">
            <p className="font-sans text-xs sm:text-sm text-white">
              {currentFrame.caption}
            </p>
            <span className="text-[#ffd001] text-[11px]">
              Photographed by {item.photographer} • {currentFrame.shotLocation || item.location}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
