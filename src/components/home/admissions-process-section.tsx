"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

const ADMISSION_STEPS = [
  { step: "01", title: "Connect with IIP’s career counselling team", desc: "Speak directly with our academic mentors to choose the right photography course." },
  { step: "02", title: "Getting to know you", desc: "Share your creative aspirations, current camera experience, and learning goals." },
  { step: "03", title: "Portfolio submission", desc: "Optional review of any past photography or visual work with our faculty." },
  { step: "04", title: "Complete your application", desc: "Fill out the straightforward online registration form in 10-15 minutes." },
  { step: "05", title: "Let’s talk funding / payment options", desc: "Explore transparent fees, early discounts (up to 20% off), and payment plans." },
  { step: "06", title: "Register for classes", desc: "Receive your student portal credentials and course syllabus within 24 hours." },
  { step: "07", title: "Welcome to Academy", desc: "Begin your personal mentorship journey with IIP Nepal and IIP Foundation." },
];

export function AdmissionsProcessSection() {
  return (
    <section
      aria-label="Admissions & How It Works"
      className="w-full bg-[var(--color-workshop-ivory)] py-28 sm:py-36 lg:py-48 border-b border-[var(--color-drafting-line)]"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
          {/* Left Column: Authentic Statement & Invitation */}
          <div className="lg:col-span-5">
            <ScrollReveal yOffset={14} duration={0.5}>
              <span className="font-mono text-[11.5px] uppercase tracking-[0.25em] text-[var(--color-faded-graphite)] block mb-3">
                Admissions & Enrollment
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.08} yOffset={16} duration={0.6}>
              <h2 className="font-sans font-medium text-[var(--color-charcoal-ink)] text-[30px] sm:text-[38px] lg:text-[44px] leading-[1.12] tracking-[-1.2px] mb-6">
                Here’s How it Works
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.16} yOffset={14} duration={0.6}>
              <p className="font-sans text-[16px] leading-[1.7] text-[var(--color-charcoal-ink)] font-normal mb-5">
                “IIP Academy is looking for dedicated students who want to become tomorrow’s art leaders. We seek innovators, storytellers, collaborators, problem solvers, dreamers, leaders—despite any background/stream you are, you are welcome!”
              </p>
              <p className="font-sans text-[15px] leading-[1.7] text-[var(--color-quiet-graphite)] mb-8">
                Now, if you think IIP Academy is the right place for you, the next step is to apply. You’ll find that the application process isn’t that difficult at all, especially when you’re well-informed. Prospective students who apply are assigned their own personal admissions counselor.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.24} yOffset={12} duration={0.5}>
              <Link
                href="/enroll"
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-iip-yellow)] text-[var(--color-charcoal-ink)] hover:bg-[#f5bc14] active:scale-[0.98] transition-all font-sans font-medium text-[15px] py-3.5 px-7 rounded-[1440px]"
              >
                <span>Apply Online</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </ScrollReveal>
          </div>

          {/* Right Column: Authentic 7 Steps */}
          <div className="lg:col-span-7">
            <ScrollReveal yOffset={20} duration={0.6} stagger={0.06}>
              <div className="flex flex-col border-t border-[var(--color-drafting-line)]">
                {ADMISSION_STEPS.map((s) => (
                  <div
                    key={s.step}
                    className="py-4.5 sm:py-5 border-b border-[var(--color-drafting-line)] flex items-start gap-4 sm:gap-6 group"
                  >
                    <span className="font-mono text-[12px] text-[var(--color-faded-graphite)] tracking-[0.2em] pt-0.5 w-7 shrink-0">
                      {s.step}
                    </span>
                    <div className="flex-1 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                      <h3 className="font-sans font-medium text-[16.5px] sm:text-[17.5px] text-[var(--color-charcoal-ink)] tracking-[-0.3px]">
                        {s.title}
                      </h3>
                      <p className="font-sans text-[13.5px] text-[var(--color-quiet-graphite)] sm:text-right max-w-xs">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
