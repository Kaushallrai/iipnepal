"use client";

import { useState, useRef } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { LineReveal } from "@/components/animations/line-reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const TESTIMONIALS = [
  {
    quote:
      "IIP Nepal transformed my perspective on street photography. The mentors don't just teach camera settings—they teach you how to read light, respect human dignity, and work patiently in Kathmandu's historic squares.",
    author: "Rohan Maharjan",
    role: "Commercial & Street Photographer",
    location: "Kathmandu",
    course: "Pro Level Foundation Photography Course (Alumnus)",
  },
  {
    quote:
      "The one-on-one portfolio critiques with veteran mentors gave me the clarity and confidence to exhibit my work. There is no other institute in Nepal with this level of disciplined darkroom and fieldwork mentorship.",
    author: "Sneha Shrestha",
    role: "Documentary Fellow",
    location: "Lalitpur",
    course: "Pro Level Advanced Photography Course (Alumna)",
  },
  {
    quote:
      "From camera fundamentals to mastering manual exposure and fine art printing, IIP offers the most rigorous photographic education. Joining the academy was the defining turning point in my visual storytelling.",
    author: "Aarav Karki",
    role: "Travel & Editorial Photographer",
    location: "Pokhara",
    course: "1-Month Online Basic & Weekend Workshop",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useGSAP(
    () => {
      const el = quoteRef.current;
      if (!el) return;

      gsap.fromTo(
        el,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    },
    { scope: sectionRef, dependencies: [activeIndex] }
  );

  const current = TESTIMONIALS[activeIndex];

  return (
    <section
      ref={sectionRef}
      aria-label="Student and Alumni Testimonials"
      className="w-full bg-[var(--color-bone-white)] py-20 sm:py-28 lg:py-34 border-b border-[var(--color-hairline)] select-none"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Block with Circular Controls */}
        <div className="flex items-end justify-between border-b border-[var(--color-hairline)] pb-6 mb-12 sm:mb-16">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.25em] text-[var(--color-graphite)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-ink-black)] inline-block" />
              <span>TESTIMONIALS // ALUMNI VOICES</span>
            </div>
            <h2 className="font-sans font-light text-[28px] sm:text-[38px] lg:text-[46px] leading-tight text-[var(--color-ink-black)]">
              What Our Students Say
            </h2>
          </div>

          {/* Creative Giants Circular Outline Navigation Controls */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--color-graphite)] mr-2 hidden sm:inline">
              [ 0{activeIndex + 1} / 0{TESTIMONIALS.length} ]
            </span>
            <button
              type="button"
              onClick={prevTestimonial}
              className="w-11 h-11 rounded-full border border-[var(--color-hairline)] flex items-center justify-center text-[var(--color-ink-black)] hover:border-[var(--color-ink-black)] active:scale-95 transition-all"
              aria-label="Previous Testimonial"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={nextTestimonial}
              className="w-11 h-11 rounded-full border border-[var(--color-hairline)] flex items-center justify-center text-[var(--color-ink-black)] hover:border-[var(--color-ink-black)] active:scale-95 transition-all"
              aria-label="Next Testimonial"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Minimalist Quote Body */}
        <div ref={quoteRef} className="max-w-4xl flex flex-col gap-8">
          <Quote className="w-10 h-10 text-[var(--color-ash)] opacity-60" aria-hidden="true" />

          <p className="font-sans font-light text-[24px] sm:text-[34px] lg:text-[40px] leading-[1.25] tracking-[-0.025em] text-[var(--color-ink-black)] text-pretty">
            “{current.quote}”
          </p>

          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 pt-4 border-t border-[var(--color-hairline)]">
            <span className="font-sans font-medium text-[16px] text-[var(--color-ink-black)]">
              {current.author}
            </span>
            <span className="font-mono text-[11.5px] uppercase tracking-[0.18em] text-[var(--color-graphite)]">
              {current.role} · {current.location}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-ash)] sm:ml-auto">
              {current.course}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
