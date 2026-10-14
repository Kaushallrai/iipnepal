"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import type { PortfolioItem } from "@/data/portfolio";

export interface PortfolioDetailBentoProps {
  item: PortfolioItem;
}

export default function PortfolioDetailBento({ item }: PortfolioDetailBentoProps): React.JSX.Element {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  // Fallback captions if gallery array is shorter than 8
  const defaultCaptionsFallback = [
    item.title,
    "Stepped temple shadows and morning devotees.",
    "Fieldwork documentation in historic gallis.",
    "Detail study: Weathered hands and traditional tools.",
    "Perspective observation: Morning vendors entering the square.",
    "Low-angle sunrise cutting through timber eaves.",
    "Ambient morning mist reflecting across damp stone paving.",
    "Exhibition master print in the archive lab.",
  ];

  // Curate exactly 8 photographic plates with image url & caption
  const plates = Array.from({ length: 8 }, (_, idx) => {
    const galleryItem = item.gallery?.[idx];
    return {
      url: galleryItem?.url || item.coverImage,
      caption: galleryItem?.caption || defaultCaptionsFallback[idx] || item.title,
    };
  });

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

  return (
    <>
      <section className="w-full pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-14 sm:pb-18 md:pb-20 bg-[#fffef7] border-b border-[#e2e0d2]">
        <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          
          {/* 1. Unified Archival Breadcrumb with Yellow Signal Dot */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 sm:mb-8 border-b border-[#e2e0d2] text-xs font-mono uppercase tracking-[0.22em] text-[#888888] select-none">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 min-w-0">
              <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
              <Link href="/portfolio" className="hover:text-black transition-colors font-medium shrink-0">
                Portfolio Archive
              </Link>
              <span>/</span>
              <span className="text-[#888888] hidden sm:inline-block">
                {item.category || item.tag}
              </span>
              <span className="hidden sm:inline-block">/</span>
              <span className="text-black font-semibold truncate max-w-[200px] sm:max-w-none">
                {item.title}
              </span>
            </nav>

            <div className="text-black font-mono text-xs uppercase tracking-[0.22em] shrink-0">
              Series [{item.number}] · Class of {item.year}
            </div>
          </div>

          {/* 2. Unified Exhibition Header Lockup (Exact alignment with catalog pages) */}
          <div className="pb-8 sm:pb-10 lg:pb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#666666] mb-3">
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

              <h1 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.08] tracking-[-0.035em] text-black mb-3">
                {item.title}
              </h1>

              <p className="font-sans font-normal text-sm sm:text-base md:text-[17px] text-[#555555] leading-relaxed max-w-2xl">
                {item.summary || item.tagline}
              </p>
            </div>

            {/* Lightbox Trigger Button */}
            <div className="shrink-0 flex items-center gap-3">
              <button
                type="button"
                onClick={() => openLightbox(0)}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-black text-[#fffef7] hover:bg-[#ffd001] hover:text-black font-mono text-xs uppercase tracking-[0.16em] font-semibold transition-colors cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Open Lightbox (8 Plates)</span>
              </button>
            </div>
          </div>

          {/* 3. Pure Photographic Bento Grid: 100% Flush, Zero Empty Spaces, No Cards */}
          <div className="pt-8 sm:pt-10 border-t border-[#e2e0d2] flex flex-col gap-6 sm:gap-8">
            
            {/* ROW 1: Bento Hero Block (8 cols Left) + Stacked Duo on Right (4 cols) with 100% flush alignment */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
              
              {/* Plate 1 (Master / Featured Plate): 8 cols, flex-1 ensures exact height match to right column */}
              <div className="lg:col-span-8 flex flex-col justify-between group">
                <div
                  onClick={() => openLightbox(0)}
                  className="relative w-full aspect-[16/10] lg:aspect-auto lg:flex-1 min-h-[340px] bg-neutral-900 overflow-hidden cursor-pointer"
                >
                  <Image
                    src={plates[0].url}
                    alt={plates[0].caption}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover object-center grayscale contrast-105 group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-black/80 text-white flex items-center gap-1 shadow-xs">
                      <Maximize2 className="w-3 h-3" />
                      <span>Enlarge</span>
                    </span>
                  </div>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-[#555555] leading-snug">
                  {plates[0].caption}
                </p>
              </div>

              {/* Right Column: 4 cols containing Plate 2 & Plate 3 stacked to fill all space beside Plate 1 */}
              <div className="lg:col-span-4 flex flex-col justify-between gap-5 sm:gap-6">
                
                {/* Plate 2 */}
                <div className="flex flex-col group">
                  <div
                    onClick={() => openLightbox(1)}
                    className="relative w-full aspect-[16/10] bg-neutral-900 overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={plates[1].url}
                      alt={plates[1].caption}
                      fill
                      sizes="(max-width: 1024px) 100vw, 34vw"
                      className="object-cover object-center grayscale contrast-105 group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-black/80 text-white flex items-center gap-1 shadow-xs">
                        <Maximize2 className="w-3 h-3" />
                        <span>Enlarge</span>
                      </span>
                    </div>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-[#555555] leading-snug">
                    {plates[1].caption}
                  </p>
                </div>

                {/* Plate 3 (Fills empty space beneath Plate 2 completely) */}
                <div className="flex flex-col group">
                  <div
                    onClick={() => openLightbox(2)}
                    className="relative w-full aspect-[16/10] bg-neutral-900 overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={plates[2].url}
                      alt={plates[2].caption}
                      fill
                      sizes="(max-width: 1024px) 100vw, 34vw"
                      className="object-cover object-center grayscale contrast-105 group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-black/80 text-white flex items-center gap-1 shadow-xs">
                        <Maximize2 className="w-3 h-3" />
                        <span>Enlarge</span>
                      </span>
                    </div>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-[#555555] leading-snug">
                    {plates[2].caption}
                  </p>
                </div>

              </div>

            </div>

            {/* ROW 2: Balanced Duo (Plates 4, 5: 6 cols each) with 100% flush alignment, ZERO empty space */}
            <ScrollReveal variant="fade-up" distance={20} duration={0.8} className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-start">
                
                {/* Plate 4: 6 cols */}
                <div className="flex flex-col group">
                  <div
                    onClick={() => openLightbox(3)}
                    className="relative w-full aspect-[16/10] bg-neutral-900 overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={plates[3].url}
                      alt={plates[3].caption}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center grayscale contrast-105 group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-black/80 text-white flex items-center gap-1 shadow-xs">
                        <Maximize2 className="w-3 h-3" />
                        <span>Enlarge</span>
                      </span>
                    </div>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-[#555555] leading-snug">
                    {plates[3].caption}
                  </p>
                </div>

                {/* Plate 5: 6 cols */}
                <div className="flex flex-col group">
                  <div
                    onClick={() => openLightbox(4)}
                    className="relative w-full aspect-[16/10] bg-neutral-900 overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={plates[4].url}
                      alt={plates[4].caption}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center grayscale contrast-105 group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-black/80 text-white flex items-center gap-1 shadow-xs">
                        <Maximize2 className="w-3 h-3" />
                        <span>Enlarge</span>
                      </span>
                    </div>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-[#555555] leading-snug">
                    {plates[4].caption}
                  </p>
                </div>

              </div>
            </ScrollReveal>

            {/* ROW 3: Balanced Triptych (Plates 6, 7, 8: 4 cols each) with 100% flush alignment, ZERO empty space */}
            <ScrollReveal variant="fade-up" distance={20} duration={0.8} className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-start">
                {[5, 6, 7].map((idx) => (
                  <div key={idx} className="flex flex-col group">
                    <div
                      onClick={() => openLightbox(idx)}
                      className="relative w-full aspect-[4/3] bg-neutral-900 overflow-hidden cursor-pointer"
                    >
                      <Image
                        src={plates[idx].url}
                        alt={plates[idx].caption}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-center grayscale contrast-105 group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-black/80 text-white flex items-center gap-1 shadow-xs">
                          <Maximize2 className="w-3 h-3" />
                          <span>Enlarge</span>
                        </span>
                      </div>
                    </div>
                    <p className="mt-2 text-xs sm:text-sm text-[#555555] leading-snug">
                      {plates[idx].caption}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* 4. Fullscreen Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xs flex flex-col justify-between select-none animate-in fade-in duration-200"
        >
          {/* Top Bar */}
          <div className="w-full px-6 py-4 flex items-center justify-between border-b border-white/10 text-white font-mono text-xs uppercase tracking-wider">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#ffd001]" />
              <span>
                Plate 0{activeLightboxIndex + 1} of 0{plates.length} {"//"} {item.title}
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

          {/* Bottom Bar: Clean Caption Only */}
          <div className="w-full px-6 py-4 bg-black border-t border-white/10 text-white flex items-center justify-between gap-3 text-xs">
            <p className="font-sans text-xs sm:text-sm text-white/90">
              {plates[activeLightboxIndex].caption}
            </p>
            <span className="font-mono text-[11px] text-white/50 shrink-0 uppercase tracking-wider">
              [ 0{activeLightboxIndex + 1} / 0{plates.length} ]
            </span>
          </div>
        </div>
      )}
    </>
  );
}
