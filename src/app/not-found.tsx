import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/layout/Footer";

export default function NotFound(): React.JSX.Element {
  return (
    <main className="w-full min-h-screen bg-[#fffef7] text-black flex flex-col justify-between overflow-x-clip selection:bg-[#ffd001] selection:text-black">
      <section
        aria-labelledby="not-found-heading"
        className="w-full flex-1 flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 pt-28 pb-20 sm:pt-32 sm:pb-24"
      >
        <div className="w-full max-w-lg mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#ffd001] shrink-0 inline-block" />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#666666]">
              IIP Nepal
            </span>
          </div>

          <h1
            id="not-found-heading"
            className="font-sans font-semibold text-7xl sm:text-8xl md:text-[120px] leading-none tracking-[-0.04em] text-black mb-4"
          >
            404
          </h1>

          <p className="font-sans font-normal text-lg sm:text-xl text-black tracking-[-0.02em] mb-2">
            Page not found
          </p>

          <p className="font-sans font-normal text-sm sm:text-base text-[#666666] leading-relaxed max-w-md mb-8">
            The page you are looking for isn&apos;t available right now.
          </p>

          <Link
            href="/"
            className="w-full sm:w-auto max-w-full min-h-[44px] inline-flex items-center justify-center gap-2 rounded-[1440px] bg-black text-[#fffef7] hover:bg-[#ffd001] hover:text-black transition-colors duration-150 px-6 py-3 font-mono text-xs sm:text-[13px] tracking-[0.14em] uppercase font-medium whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
            <span>Return Home</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
