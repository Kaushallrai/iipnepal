"use client";

import React from "react";
import { MapPin, ArrowUpRight } from "lucide-react";

export interface ContactMapProps {
  locationName?: string;
  address?: string;
  mapsUrl?: string;
}

export default function ContactMap({
  locationName = "IIP NEPAL · JYOTI BHAWAN",
  address = "Jyoti Bhawan, Kanti Path, Kathmandu",
  mapsUrl = "https://maps.app.goo.gl/792XAZpWFHjY1zWt6",
}: ContactMapProps): React.JSX.Element {
  return (
    <div
      className="contact_image-wrap relative w-full h-[480px] sm:h-[540px] lg:h-[600px] bg-[#f5f4ee] border border-[#e2e0d2] overflow-hidden group select-none"
      style={{
        fontFamily: "'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative w-full h-full cursor-pointer no-underline"
        aria-label={`Open ${locationName} location in Google Maps`}
      >
        {/* 1. EMBEDDED GOOGLE MAP (ll= CENTERS AT JYOTI BHAWAN WITHOUT RENDERING A DUPLICATE PIN) */}
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#ebe9e1]">
          <iframe
            title="Jyoti Bhawan Kanti Path Map"
            src="https://maps.google.com/maps?ll=27.7111277,85.3147123&z=17&t=m&output=embed"
            className="border-0 pointer-events-none select-none"
            style={{
              /* Clean light grey, white, and black theme filter */
              filter: "grayscale(100%) contrast(1.08) brightness(1.02)",
              position: "absolute",
              top: "-42px",
              left: "-12px",
              width: "calc(100% + 24px)",
              height: "calc(100% + 86px)",
            }}
            loading="lazy"
            tabIndex={-1}
          />
        </div>

        {/* 2. SINGLE LUCIDE MAP PIN (EXACT GOOGLE MAP STYLE IN SIGNAL YELLOW & BLACK, NO DUPLICATE PIN) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full z-10 flex flex-col items-center pointer-events-none">
          {/* Studio Label Pill */}
          <div className="mb-1 px-2.5 py-1 rounded-full bg-black text-[#fffef7] text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.14em] shadow-md border border-white/10 flex items-center gap-1.5 whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ffd001] shrink-0" />
            <span className="font-semibold text-white">IIP NEPAL</span>
            <span className="text-[#888888]">·</span>
            <span className="text-[#cccccc]">JYOTI BHAWAN</span>
          </div>

          {/* Lucide MapPin Icon (Yellow fill, Black stroke, inner center dot) */}
          <div className="relative flex items-center justify-center">
            <MapPin
              className="w-9 h-9 text-black fill-[#ffd001] drop-shadow-[0_3px_5px_rgba(0,0,0,0.3)]"
              strokeWidth={1.75}
              aria-hidden="true"
            />
          </div>

          {/* Contact Shadow under pin tip */}
          <div className="w-2.5 h-0.5 rounded-full bg-black/25 blur-[1px] -mt-0.5" />
        </div>

        {/* 3. TOP-RIGHT PILL: OPEN IN GOOGLE MAPS */}
        <div className="absolute top-4 right-4 z-10">
          <div className="inline-flex items-center gap-2 py-2 px-3.5 rounded-full bg-black group-hover:bg-[#ffd001] text-white group-hover:text-black border border-black transition-colors duration-300 shadow-sm">
            <span className="font-mono text-[11px] font-semibold tracking-[0.14em] uppercase">
              Open in Google Maps
            </span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* 4. BOTTOM-LEFT CHIP: LOCATION DETAILS */}
        <div className="absolute bottom-4 left-4 z-10">
          <div className="bg-black backdrop-blur-xs px-3.5 py-2 border border-[#e2e0d2] text-black shadow-xs">
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#ffd001]">
              Kathmandu Studio
            </div>
            <div className="text-xs font-normal text-white mt-0.5 tracking-wider">
              {address}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
