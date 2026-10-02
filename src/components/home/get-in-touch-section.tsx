"use client";

import { useState, useRef } from "react";
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { LineReveal } from "@/components/animations/line-reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function GetInTouchSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const formWrapRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const formWrap = formWrapRef.current;
      if (!section || !formWrap) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      gsap.fromTo(
        formWrap,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formWrap,
            start: "top 80%",
            once: true,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      ref={sectionRef}
      aria-label="Get in Touch"
      className="w-full bg-[var(--color-bone-white)] py-20 sm:py-28 lg:py-34 border-b border-[var(--color-hairline)] select-none"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Creative Giants Statement & Coordinates */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.25em] text-[var(--color-graphite)] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-ink-black)] inline-block" />
                <span>Get in touch</span>
              </div>

              <LineReveal
                as="h2"
                lines={["Speak to us."]}
                className="font-sans font-light text-[36px] sm:text-[48px] lg:text-[54px] leading-[1.05] tracking-[-0.035em] text-[var(--color-ink-black)] mb-5"
                duration={0.7}
                stagger={0.08}
              />

              <p className="font-sans text-[15.5px] sm:text-[16.5px] leading-[1.65] text-[var(--color-graphite)] mb-8 max-w-md">
                If you want to enroll in an upcoming cohort, schedule a campus visit, or simply ask a question about our syllabi, we want to hear from you.
              </p>

              {/* Campus Contact Information */}
              <div className="flex flex-col gap-4 border-t border-[var(--color-hairline)] pt-6 font-mono text-[11.5px] uppercase tracking-[0.18em] text-[var(--color-ink-black)]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[var(--color-graphite)] shrink-0 mt-0.5" />
                  <span>Jyoti Bhawan, Kanti Path, Kathmandu 44600, Nepal</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[var(--color-graphite)] shrink-0" />
                  <a href="tel:+9779802364760" className="hover:text-[var(--color-graphite)] transition-colors">
                    +977 9802364760
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[var(--color-graphite)] shrink-0" />
                  <a href="mailto:info@iipnepal.com" className="hover:text-[var(--color-graphite)] transition-colors">
                    info@iipnepal.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--color-hairline)] font-mono text-[10.5px] uppercase tracking-[0.2em] text-[var(--color-graphite)]">
              <span>Academic Hours: Sun – Fri · 9:00 AM – 6:00 PM</span>
            </div>
          </div>

          {/* Right Column: Editorial Inquiry Form */}
          <div ref={formWrapRef} className="lg:col-span-7">
            {submitted ? (
              <div className="border border-[var(--color-hairline)] p-8 sm:p-12 flex flex-col items-center justify-center text-center gap-4 bg-white/40">
                <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                <h3 className="font-sans font-light text-[26px] sm:text-[30px] text-[var(--color-ink-black)]">
                  Inquiry Received
                </h3>
                <p className="font-sans text-[15px] text-[var(--color-graphite)] max-w-md">
                  Thank you! An admissions counselor from our Kathmandu Centre will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="firstName"
                      className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-graphite)]"
                    >
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      required
                      placeholder="e.g. Additya"
                      className="w-full bg-transparent border border-[var(--color-hairline)] focus:border-[var(--color-ink-black)] rounded-none px-4 py-3 font-sans text-[15px] text-[var(--color-ink-black)] placeholder:text-[var(--color-ash)] outline-none transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="lastName"
                      className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-graphite)]"
                    >
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      required
                      placeholder="e.g. Shrestha"
                      className="w-full bg-transparent border border-[var(--color-hairline)] focus:border-[var(--color-ink-black)] rounded-none px-4 py-3 font-sans text-[15px] text-[var(--color-ink-black)] placeholder:text-[var(--color-ash)] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-graphite)]"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. name@domain.com"
                      className="w-full bg-transparent border border-[var(--color-hairline)] focus:border-[var(--color-ink-black)] rounded-none px-4 py-3 font-sans text-[15px] text-[var(--color-ink-black)] placeholder:text-[var(--color-ash)] outline-none transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="phone"
                      className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-graphite)]"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="+977"
                      className="w-full bg-transparent border border-[var(--color-hairline)] focus:border-[var(--color-ink-black)] rounded-none px-4 py-3 font-sans text-[15px] text-[var(--color-ink-black)] placeholder:text-[var(--color-ash)] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="courseInterest"
                    className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-graphite)]"
                  >
                    Course / Fieldwork Interest
                  </label>
                  <select
                    id="courseInterest"
                    className="w-full bg-[var(--color-bone-white)] border border-[var(--color-hairline)] focus:border-[var(--color-ink-black)] rounded-none px-4 py-3 font-sans text-[14.5px] text-[var(--color-ink-black)] outline-none transition-colors"
                  >
                    <option value="Pro Level Foundation">Pro Level Foundation Photography Course (Mentor-led)</option>
                    <option value="Pro Level Advanced">Pro Level Advanced Photography Course (Mentor-led)</option>
                    <option value="Online Basic">1-Month Online Basic Photography Course</option>
                    <option value="Sunday Workshop">Sunday Photography Course (Weekend Cohort)</option>
                    <option value="Custom Workshop">Custom Fieldwork / Campus Inquiry</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-graphite)]"
                  >
                    Message / Learning Goals
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your photographic aspirations or question..."
                    className="w-full bg-transparent border border-[var(--color-hairline)] focus:border-[var(--color-ink-black)] rounded-none px-4 py-3 font-sans text-[15px] text-[var(--color-ink-black)] placeholder:text-[var(--color-ash)] outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-[var(--color-iip-yellow)] text-[var(--color-ink-black)] hover:bg-[#f5bc14] active:scale-[0.98] transition-all font-sans font-normal text-[14.5px] py-3.5 px-8 rounded-[1440px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ink-black)]"
                  >
                    <span>Send Enquiry</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
