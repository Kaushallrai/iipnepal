"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Maximize2, X, User, MapPin } from "lucide-react";
import type { PortfolioItem } from "@/data/portfolio";
import LineReveal from "@/components/animations/LineReveal";

export interface PortfolioDetailHeroProps {
  item: PortfolioItem;
  onOpenLightbox?: (index: number) => void;
}

export default function PortfolioDetailHero({
  item,
  onOpenLightbox,
}: PortfolioDetailHeroProps): React.JSX.Element {
  const [internalLightboxIndex, setInternalLightboxIndex] = useState<number | null>(null);

  const mentorName = item.mentor
    ? item.mentor.split("·")[0].replace("Mentor", "").trim()
    : "IIP Faculty Board";

  const masterFrame = item.gallery?.[0] || {
    url: item.coverImage || item.image,
    caption: item.title,
    shotLocation: item.location,
  };

  const openLightbox = (index = 0) => {
    if (onOpenLightbox) {
      onOpenLightbox(index);
    } else {
      setInternalLightboxIndex(index);
      if (typeof document !== "undefined") {
        document.body.style.overflow = "hidden";
      }
    }
  };

  const closeLightbox = useCallback(() => {
    setInternalLightboxIndex(null);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
    }
  }, []);

  const handlePrev = useCallback(() => {
    setInternalLightboxIndex((prev) => {
      if (prev === null || !item.gallery?.length) return null;
      return prev === 0 ? item.gallery.length - 1 : prev - 1;
    });
  }, [item.gallery]);

  const handleNext = useCallback(() => {
    setInternalLightboxIndex((prev) => {
      if (prev === null || !item.gallery?.length) return null;
      return prev === item.gallery.length - 1 ? 0 : prev + 1;
    });
  }, [item.gallery]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (internalLightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    if (internalLightboxIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [internalLightboxIndex, closeLightbox, handlePrev, handleNext]);

  return (
    <>
      <section className="w-full pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-14 md:pb-16 border-b border-[#e2e0d2] bg-[#fffef7]">
        <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          
          {/* 1. Breadcrumb & Student Project Reference */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 sm:pb-6 border-b border-[#e2e0d2] text-xs font-mono uppercase tracking-[0.18em] text-[#888888]">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2.5">
              <Link href="/portfolio" className="hover:text-black transition-colors">
                Portfolio
              </Link>
              <span>/</span>
              <span className="text-[#888888] hidden sm:inline-block">{item.category || item.tag}</span>
              <span className="hidden sm:inline-block">/</span>
              <span className="text-black font-semibold truncate max-w-[180px] sm:max-w-none">
                {item.title}
              </span>
            </nav>

            <div className="flex items-center gap-2 text-black font-medium">
              <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)]" />
              <span>Archive Series [{item.number}] · Class of {item.year}</span>
            </div>
          </div>

          {/* 2. Editorial Student Accreditation Block & Title */}
          <div className="pt-6 sm:pt-8 pb-6 sm:pb-8 max-w-5xl">
            {/* Student Byline Badge Pill */}
            <div className="flex flex-wrap items-center gap-2.5 mb-3 sm:mb-4 font-mono text-xs uppercase tracking-wider text-[#666666]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f2efe4] text-black font-semibold border border-[#e2e0d2]">
                <User className="w-3.5 h-3.5 text-[#ca8a04]" />
                <span>Student Photographer: {item.photographer}</span>
              </span>
              <span className="hidden sm:inline-block">•</span>
              <span className="inline-flex items-center gap-1.5 text-[#666666]">
                <MapPin className="w-3.5 h-3.5 text-[#888888]" />
                <span>{item.location}</span>
              </span>
            </div>

            {/* Display Title */}
            <LineReveal
              as="h1"
              lines={[item.title]}
              className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[60px] leading-[1.08] tracking-[-0.035em] text-black mb-3 sm:mb-4"
            />

            {/* Tagline / Subtitle */}
            <p className="font-mono text-xs sm:text-sm text-[#555555] tracking-[0.06em] uppercase leading-relaxed max-w-3xl">
              {item.tagline || item.summary}
            </p>
          </div>

          {/* 3. 2-Column Split: Master Photo Plate + Academic & Rig Factsheet */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 md:gap-10 lg:gap-14 xl:gap-16 items-start">
            
            {/* Left Column (7 cols): Master Photographic Plate */}
            <div className="md:col-span-7 flex flex-col gap-3">
              <div
                onClick={() => openLightbox(0)}
                className="relative w-full aspect-[16/10] overflow-hidden bg-black border border-[#e2e0d2] cursor-pointer group shadow-sm"
              >
                <Image
                  src={masterFrame.url}
                  alt={item.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-center grayscale contrast-110 group-hover:scale-104 transition-transform duration-700 ease-out"
                />

                {/* Top Overlay Stamps */}
                <div className="absolute top-3 left-3 bg-black/85 text-white font-mono text-[9px] uppercase tracking-widest px-2.5 py-1">
                  PLATE // [{item.number}] MASTER
                </div>

                <div className="absolute top-3 right-3 bg-black/85 text-white/90 font-mono text-[9.5px] uppercase tracking-wider px-2.5 py-1 border border-white/10 flex items-center gap-1.5 group-hover:bg-[#ffd001] group-hover:text-black transition-colors">
                  <Maximize2 className="w-3 h-3" />
                  <span>Fullscreen</span>
                </div>

                {/* Bottom Gear Strip Overlay */}
                {item.specs && (
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-white/90 bg-black/85 backdrop-blur-xs px-3 py-1.5 border border-white/10">
                    <span className="truncate max-w-[65%]">
                      {item.specs.camera} · {item.specs.lens}
                    </span>
                    <span className="text-[#ffd001] shrink-0 font-medium pl-1">
                      {item.specs.exposure}
                    </span>
                  </div>
                )}
              </div>

              {/* Minimal caption line beneath master frame */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs font-mono text-[#888888]">
                <span className="truncate">{masterFrame.caption || item.title}</span>
                {item.specs?.filmOrSensor && (
                  <span className="text-[#666666] font-medium">{item.specs.filmOrSensor}</span>
                )}
              </div>
            </div>

            {/* Right Column (5 cols): Academic Specifications & Student Statement */}
            <div className="md:col-span-5 flex flex-col justify-between gap-6 sm:gap-8">
              
              {/* Student Artist Statement Pullquote */}
              <div className="p-5 sm:p-6 bg-[#fbf9f0] border border-[#e8e6d9] flex flex-col gap-2.5">
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#888888] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffd001]" />
                  <span>Student Artist Statement</span>
                </span>
                <blockquote className="font-sans font-light text-sm sm:text-base text-[#222222] italic leading-relaxed">
                  “{item.statement?.split(". ").slice(0, 3).join(". ") || item.summary}.”
                </blockquote>
                <span className="font-mono text-[11px] text-[#777777] uppercase tracking-wider pt-2 border-t border-[#e8e6d9]">
                  {item.photographer}, {item.discipline || "Fellow"}
                </span>
              </div>

              {/* Technical Footprint & Academic Track Table */}
              <div className="flex flex-col gap-4">
                <div className="pb-2 border-b border-[#e2e0d2]">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#888888]">
                    Academic & Technical Specifications
                  </span>
                </div>

                <dl className="grid grid-cols-2 gap-y-4 gap-x-6 text-xs sm:text-[13px] font-mono">
                  <div>
                    <dt className="text-[#888888] uppercase tracking-wider mb-0.5 text-[10.5px]">Academic Track</dt>
                    <dd className="font-medium text-black text-xs sm:text-[13px] truncate">
                      {item.course ? item.course.split("(")[0].trim() : "Documentary"}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[#888888] uppercase tracking-wider mb-0.5 text-[10.5px]">Faculty Mentor</dt>
                    <dd className="font-medium text-black text-xs sm:text-[13px] truncate">{mentorName}</dd>
                  </div>
                  <div>
                    <dt className="text-[#888888] uppercase tracking-wider mb-0.5 text-[10.5px]">Camera Body</dt>
                    <dd className="font-medium text-black text-xs sm:text-[13px] truncate">{item.specs?.camera}</dd>
                  </div>
                  <div>
                    <dt className="text-[#888888] uppercase tracking-wider mb-0.5 text-[10.5px]">Optics / Lens</dt>
                    <dd className="font-medium text-black text-xs sm:text-[13px] truncate">{item.specs?.lens}</dd>
                  </div>
                </dl>
              </div>

              {/* Action Buttons: Stack on mobile, inline on tablet/desktop */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full">
                <a
                  href="#gallery"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#ffd001] hover:bg-black hover:text-[#fffef7] text-black font-mono text-xs uppercase tracking-[0.16em] font-semibold transition-all shadow-xs leading-none whitespace-nowrap cursor-pointer text-center"
                >
                  <span>Exhibition Plates ({item.gallery?.length || 1})</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </a>

                {item.relatedCourseSlug && (
                  <Link
                    href={`/courses/${item.relatedCourseSlug}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-black/5 hover:bg-black hover:text-white text-black font-mono text-xs uppercase tracking-[0.16em] transition-all leading-none whitespace-nowrap text-center"
                  >
                    <span>View Course</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#888888]" />
                  </Link>
                )}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Internal Fullscreen Lightbox if triggered from hero */}
      {internalLightboxIndex !== null && item.gallery && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Master Frame Fullscreen View"
          className="fixed inset-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 select-none"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white font-mono text-xs uppercase tracking-widest pb-4 border-b border-white/10">
            <span className="truncate max-w-[240px] sm:max-w-none">
              {item.title} {"//"} Plate 0{internalLightboxIndex + 1} of 0{item.gallery.length}
            </span>
            <div className="flex items-center gap-4">
              <span className="text-[#ffd001] hidden sm:inline-block text-[11px]">Use Arrow Keys to Navigate</span>
              <button
                type="button"
                onClick={closeLightbox}
                className="p-2 -m-2 hover:text-[#ffd001] transition-colors cursor-pointer flex items-center gap-1.5"
                aria-label="Close fullscreen view"
              >
                <span>Close</span>
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Centered Image with Prev/Next Controls */}
          <div className="relative w-full h-[68vh] sm:h-[74vh] flex items-center justify-center my-auto">
            {item.gallery[internalLightboxIndex] && (
              <div className="relative w-full h-full max-w-6xl max-h-[75vh]">
                <Image
                  src={item.gallery[internalLightboxIndex].url}
                  alt={item.gallery[internalLightboxIndex].caption || item.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
            )}

            {/* Left Traverse Arrow */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous image"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#ffd001] hover:text-black text-white border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
            >
              <span className="text-lg">←</span>
            </button>

            {/* Right Traverse Arrow */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next image"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#ffd001] hover:text-black text-white border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
            >
              <span className="text-lg">→</span>
            </button>
          </div>

          {/* Bottom Caption Bar */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-white/80 font-mono text-xs">
            <span className="text-white">
              {item.gallery[internalLightboxIndex]?.caption}
            </span>
            <span className="text-white/50 text-[11px]">
              Photographer: {item.photographer} · Class of {item.year}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
