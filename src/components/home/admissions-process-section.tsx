"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { LineReveal } from "@/components/animations/line-reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const ADMISSION_STEPS = [
  {
    step: "01",
    title: "Connect with IIP’s career counselling team",
    desc: "Speak directly with our academic mentors to choose the right photography course.",
  },
  {
    step: "02",
    title: "Getting to know you",
    desc: "Share your creative aspirations, current camera experience, and learning goals.",
  },
  {
    step: "03",
    title: "Portfolio submission",
    desc: "Optional review of any past photography or visual work with our faculty.",
  },
  {
    step: "04",
    title: "Complete your application",
    desc: "Fill out the straightforward online enrollment form in 10-15 minutes.",
  },
  {
    step: "05",
    title: "Let’s talk funding / payment options",
    desc: "Explore transparent fees, early discounts (up to 20% off), and payment plans.",
  },
  {
    step: "06",
    title: "Enroll in classes",
    desc: "Receive your student portal credentials and course syllabus within 24 hours.",
  },
  {
    step: "07",
    title: "Welcome to Academy",
    desc: "Begin your personal mentorship journey with IIP Nepal and IIP Foundation.",
  },
];

export function AdmissionsProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineTrackRef = useRef<HTMLDivElement>(null);
  const timelineProgressRef = useRef<HTMLDivElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);

  const [activeStep, setActiveStep] = useState(0);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const progressLine = timelineProgressRef.current;
      const stepsContainer = stepsContainerRef.current;
      if (!section || !progressLine || !stepsContainer) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(progressLine, { height: "100%" });
        return;
      }

      // Vertical timeline progress animation scrubbing as user scrolls down the steps
      gsap.to(progressLine, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: stepsContainer,
          start: "top 70%",
          end: "bottom 75%",
          scrub: 0.8,
        },
      });

      // Individual step activation and stagger line reveal
      const stepElements = stepsContainer.querySelectorAll(".timeline-step");
      stepElements.forEach((el, index) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 70%",
          end: "bottom 70%",
          onEnter: () => setActiveStep(index),
          onEnterBack: () => setActiveStep(index),
        });

        gsap.fromTo(
          el.querySelector(".step-content"),
          { opacity: 0, x: 20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              once: true,
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      aria-label="Admissions & How It Works"
      className="w-full bg-[var(--color-bone-white)] py-20 sm:py-28 lg:py-36 border-b border-[var(--color-hairline)]"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Authentic Statement & Invitation */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.25em] text-[var(--color-graphite)] mb-3 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-ink-black)] inline-block" />
              <span>Admissions & Enrollment</span>
            </div>

            <LineReveal
              as="h2"
              lines={["Here’s How", "it Works"]}
              className="font-sans font-light text-[var(--color-ink-black)] text-[32px] sm:text-[42px] lg:text-[52px] leading-[1.05] tracking-[-0.03em] mb-6"
              duration={0.75}
              stagger={0.08}
            />

            <p className="font-sans text-[15.5px] leading-[1.7] text-[var(--color-ink-black)] font-normal mb-5 text-pretty">
              “IIP Academy is looking for dedicated students who want to become tomorrow’s art leaders. We seek innovators, storytellers, collaborators, problem solvers, dreamers, leaders—despite any background/stream you are, you are welcome!”
            </p>

            <p className="font-sans text-[14.5px] leading-[1.7] text-[var(--color-graphite)] mb-8">
              Now, if you think IIP Academy is the right place for you, the next step is to apply. You’ll find that the application process isn’t that difficult at all, especially when you’re well-informed. Prospective students who apply are assigned their own personal admissions counselor.
            </p>

            <Link
              href="/enroll"
              className="inline-flex items-center justify-center gap-2.5 bg-[var(--color-iip-yellow)] text-[var(--color-ink-black)] hover:bg-[#f5bc14] active:scale-[0.98] transition-all font-sans font-normal text-[14.5px] py-3.5 px-8 rounded-[1440px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ink-black)]"
            >
              <span>Enroll Online</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Right Column: Animated Editorial Timeline */}
          <div className="lg:col-span-7 relative">
            <div
              ref={stepsContainerRef}
              className="relative pl-10 sm:pl-12 flex flex-col gap-8 sm:gap-10"
            >
              {/* Vertical Timeline Background Track */}
              <div
                ref={timelineTrackRef}
                aria-hidden="true"
                className="absolute left-3.5 sm:left-4 top-2 bottom-2 w-[1px] bg-[var(--color-hairline)]"
              >
                {/* Active Indicator Hairline Line that grows on scroll */}
                <div
                  ref={timelineProgressRef}
                  className="w-full bg-[var(--color-ink-black)] h-0 will-change-[height]"
                />
              </div>

              {/* 7 Timeline Steps */}
              {ADMISSION_STEPS.map((s, index) => {
                const isPassed = index <= activeStep;

                return (
                  <div
                    key={s.step}
                    className="timeline-step relative flex items-start group"
                  >
                    {/* Timeline Node Marker */}
                    <div
                      aria-hidden="true"
                      className={`absolute -left-10 sm:-left-12 top-0.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full border transition-all duration-300 flex items-center justify-center font-mono text-[11px] ${
                        isPassed
                          ? "bg-[var(--color-ink-black)] text-[var(--color-bone-white)] border-[var(--color-ink-black)]"
                          : "bg-[var(--color-bone-white)] text-[var(--color-ash)] border-[var(--color-hairline)]"
                      }`}
                    >
                      {isPassed && index < activeStep ? (
                        <Check className="w-3.5 h-3.5 text-[var(--color-iip-yellow)]" />
                      ) : (
                        <span>{s.step}</span>
                      )}
                    </div>

                    {/* Step Content */}
                    <div className="step-content flex-1 border-b border-[var(--color-hairline)] pb-7 group-last:border-b-0">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 sm:gap-4 mb-2">
                        <h3 className="font-sans font-normal text-[17px] sm:text-[18px] text-[var(--color-ink-black)] tracking-[-0.018em]">
                          {s.title}
                        </h3>
                        <span className="font-mono text-[11px] text-[var(--color-graphite)] uppercase tracking-[0.16em] shrink-0">
                          Step {s.step}
                        </span>
                      </div>
                      <p className="font-sans text-[14px] leading-relaxed text-[var(--color-graphite)] max-w-xl">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
