"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { LineReveal } from "@/components/animations/LineReveal";
import { Phone, Mail, MessageSquare, ArrowUpRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { homeContactData, type CourseOption } from "@/data/home/contact";

export type { CourseOption };

export const COURSES: CourseOption[] = homeContactData.courses;

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  program: string;
  details: string;
}

export default function ContactSection(): React.JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    program: COURSES[2].id, // Default to 03 Foundation Course
    details: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Pre-select course if present in URL query params (?course=...)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const urlParams = new URLSearchParams(window.location.search);
    const courseSlug = urlParams.get("course");
    if (courseSlug) {
      const match = COURSES.find(
        (c) => c.slug === courseSlug || c.id === courseSlug
      );
      if (match) {
        const timer = setTimeout(() => {
          setFormData((prev) => ({ ...prev, program: match.id }));
        }, 0);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate lightweight client submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
      aria-label="Contact and Admissions Section"
      className="section_contact-cta theme-light relative w-full bg-[#fffef7] text-black overflow-hidden pt-12 sm:pt-16 md:pt-20 lg:pt-32 pb-14 sm:pb-18 md:pb-24 lg:pb-36 select-none border-t border-[#eae8dc]"
      style={{
        fontFamily: "'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <div className="padding-global w-full px-6 sm:px-8 md:px-12 lg:px-16 max-w-[105rem] mx-auto">
        <div className="contact-cta_component grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 md:gap-8 lg:gap-20 xl:gap-24 items-start">
          {/* LEFT COLUMN: Editorial Brand Statement & Direct Channels */}
          <div className="contact-cta_content md:col-span-5 lg:col-span-5 flex flex-col justify-between md:min-h-full">
            <div className="header-wrap flex flex-col items-start">
              {/* Eyebrow with glowing Signal Yellow dot */}
              <div className="eyebrow-wrap flex items-center gap-2.5 text-xs sm:text-[13px] font-mono uppercase tracking-[0.22em] text-black font-semibold mb-2 sm:mb-3 md:mb-4">
                <span className="eyebrow-dot w-2 h-2 rounded-full bg-[#ffd001] shrink-0 inline-block shadow-[0_0_8px_rgba(255,208,1,0.6)]" />
                <div>{homeContactData.eyebrow}</div>
              </div>

              {/* Masked Headline in Switzer Light Display */}
              <LineReveal
                as="h2"
                lines={[homeContactData.heading]}
                className="heading-style-h1 font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[72px] xl:text-[80px] leading-[1.05] tracking-[-0.035em] text-black mb-3 sm:mb-4 md:mb-5 lg:mb-6"
              />

              {/* Explanatory Narrative */}
              <p className="text-size-regular text-color-secondary font-light text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] leading-[1.55] md:leading-[1.62] text-[#666666] tracking-[-0.018em] max-w-[42ch]">
                {homeContactData.description}
              </p>

              {/* MOBILE ONLY: Ultra-compact, 1-tap quick action pills (Zero unnecessary scrolling) */}
              <div className="md:hidden flex flex-col gap-2 w-full pt-3 pb-1">
                <div className="grid grid-cols-3 gap-2 w-full">
                  <a
                    href={`tel:${homeContactData.phone}`}
                    className="inline-flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-full bg-[#f4f2e9] hover:bg-[#ffd001] active:bg-[#ffd001] text-black font-mono text-[11px] tracking-[0.04em] uppercase border border-[#e2e0d2] transition-colors"
                    aria-label={`Call Admissions at ${homeContactData.phoneDisplay}`}
                  >
                    <Phone className="w-3 h-3 text-[#666666]" aria-hidden="true" />
                    <span>Call</span>
                  </a>
                  <a
                    href="https://wa.me/9779802364760?text=Hello%20IIP%20Nepal%2C%20I%20would%20like%20to%20inquire%20about%20photography%20courses."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-full bg-[#f4f2e9] hover:bg-[#25D366] hover:text-white active:bg-[#25D366] active:text-white text-black font-mono text-[11px] tracking-[0.04em] uppercase border border-[#e2e0d2] transition-colors"
                    aria-label="Chat on WhatsApp"
                  >
                    <MessageSquare className="w-3 h-3 text-[#666666]" aria-hidden="true" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={`mailto:${homeContactData.email}`}
                    className="inline-flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-full bg-[#f4f2e9] hover:bg-[#ffd001] active:bg-[#ffd001] text-black font-mono text-[11px] tracking-[0.04em] uppercase border border-[#e2e0d2] transition-colors"
                    aria-label={`Email faculty at ${homeContactData.email}`}
                  >
                    <Mail className="w-3 h-3 text-[#666666]" aria-hidden="true" />
                    <span>Email</span>
                  </a>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-1 text-[11px] font-mono uppercase tracking-[0.08em] text-[#777777] px-1 pt-0.5">
                  <span>{homeContactData.studioName}</span>
                  <span>Jyoti Bhawan, Kanti Path</span>
                </div>
              </div>
            </div>

            {/* TABLET & DESKTOP: Architectural Studio Contact Block */}
            <div className="contact-details_wrap hidden md:flex flex-col gap-4 md:gap-5 lg:gap-6 mt-8 md:mt-10 lg:mt-14 pt-6 md:pt-8 lg:pt-10 border-t border-[#e2e0d2]">
              <div className="flex flex-col gap-0.5 md:gap-1">
                <span className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.16em] text-[#888888]">
                  {homeContactData.studioName}
                </span>
                <span className="font-normal text-[14px] md:text-[15px] lg:text-[16px] text-black">
                  {homeContactData.studioAddress}
                </span>
              </div>

              <div className="flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-10">
                <div className="flex flex-col gap-0.5 md:gap-1">
                  <span className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.16em] text-[#888888]">
                    {homeContactData.phoneLabel}
                  </span>
                  <a
                    href={`tel:${homeContactData.phone}`}
                    className="font-normal text-[14px] md:text-[15px] lg:text-[16px] text-black hover:text-[#ffd001] transition-colors"
                  >
                    {homeContactData.phoneDisplay}
                  </a>
                </div>

                <div className="flex flex-col gap-0.5 md:gap-1">
                  <span className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.16em] text-[#888888]">
                    {homeContactData.emailLabel}
                  </span>
                  <a
                    href={`mailto:${homeContactData.email}`}
                    className="font-normal text-[14px] md:text-[15px] lg:text-[16px] text-black hover:text-[#ffd001] transition-colors"
                  >
                    {homeContactData.email}
                  </a>
                </div>
              </div>

              {/* Dedicated Contact Page & Interactive Map Link */}
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-black hover:text-[#666666] transition-colors no-underline group"
                >
                  <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0" />
                  <span className="underline decoration-black/30 underline-offset-4 group-hover:decoration-black">
                    Open Dedicated Contact Page & Studio Map
                  </span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Creative Giants Minimalist Form */}
          <div className="form_component md:col-span-7 lg:col-span-7 w-full">
            {isSubmitted ? (
              <div
                role="status"
                className="form_success-wrapper bg-black text-[#fffef7] p-6 sm:p-10 md:p-12 lg:p-14 flex flex-col items-start gap-4 transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-full bg-[#ffd001] text-black flex items-center justify-center font-bold text-lg mb-1">
                  ✓
                </div>
                <h3 className="font-light text-2xl sm:text-3xl tracking-[-0.03em] text-[#fffef7]">
                  Thank you! Your submission has been received.
                </h3>
                <p className="font-light text-[14px] sm:text-[15px] text-[#aaaaaa] leading-[1.6] max-w-[40ch]">
                  Our faculty and admissions director will review your details
                  and get in touch within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      firstName: "",
                      lastName: "",
                      email: "",
                      phone: "",
                      program: COURSES[2].id,
                      details: "",
                    });
                  }}
                  className="mt-3 inline-flex items-center text-xs font-mono uppercase tracking-[0.16em] text-[#ffd001] hover:underline cursor-pointer"
                >
                  Send another inquiry →
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="form_form grid grid-cols-2 gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-5 sm:gap-y-6 md:gap-y-7 lg:gap-y-9"
              >
                {/* First Name - 1 col on mobile, tablet & desktop */}
                <div className="form_field-wrapper col-span-1 flex flex-col items-start">
                  <label
                    htmlFor="First-Name"
                    className="form_field-label font-mono text-[10px] sm:text-[11px] md:text-[12px] uppercase tracking-[0.14em] text-[#666666] mb-1 sm:mb-1.5"
                  >
                    First name *
                  </label>
                  <input
                    id="First-Name"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Aarav"
                    className="form_input w-full bg-transparent border-0 border-b border-[#cccccc] focus:border-black text-black text-[15px] sm:text-[16px] md:text-[17px] font-normal py-2 sm:py-2.5 px-0 placeholder:text-[#aaaaaa] outline-none transition-colors duration-200"
                  />
                </div>

                {/* Last Name - 1 col on mobile, tablet & desktop */}
                <div className="form_field-wrapper col-span-1 flex flex-col items-start">
                  <label
                    htmlFor="Last-Name"
                    className="form_field-label font-mono text-[10px] sm:text-[11px] md:text-[12px] uppercase tracking-[0.14em] text-[#666666] mb-1 sm:mb-1.5"
                  >
                    Last name *
                  </label>
                  <input
                    id="Last-Name"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Shrestha"
                    className="form_input w-full bg-transparent border-0 border-b border-[#cccccc] focus:border-black text-black text-[15px] sm:text-[16px] md:text-[17px] font-normal py-2 sm:py-2.5 px-0 placeholder:text-[#aaaaaa] outline-none transition-colors duration-200"
                  />
                </div>

                {/* Email Address - full width on mobile, 1 col on tablet/desktop */}
                <div className="form_field-wrapper col-span-2 sm:col-span-1 flex flex-col items-start">
                  <label
                    htmlFor="Email-Address"
                    className="form_field-label font-mono text-[10px] sm:text-[11px] md:text-[12px] uppercase tracking-[0.14em] text-[#666666] mb-1 sm:mb-1.5"
                  >
                    Email address *
                  </label>
                  <input
                    id="Email-Address"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="aarav@example.com"
                    className="form_input w-full bg-transparent border-0 border-b border-[#cccccc] focus:border-black text-black text-[15px] sm:text-[16px] md:text-[17px] font-normal py-2 sm:py-2.5 px-0 placeholder:text-[#aaaaaa] outline-none transition-colors duration-200"
                  />
                </div>

                {/* Phone Number - full width on mobile, 1 col on tablet/desktop */}
                <div className="form_field-wrapper col-span-2 sm:col-span-1 flex flex-col items-start">
                  <label
                    htmlFor="Phone-Number"
                    className="form_field-label font-mono text-[10px] sm:text-[11px] md:text-[12px] uppercase tracking-[0.14em] text-[#666666] mb-1 sm:mb-1.5"
                  >
                    Phone number (optional)
                  </label>
                  <input
                    id="Phone-Number"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+977"
                    className="form_input w-full bg-transparent border-0 border-b border-[#cccccc] focus:border-black text-black text-[15px] sm:text-[16px] md:text-[17px] font-normal py-2 sm:py-2.5 px-0 placeholder:text-[#aaaaaa] outline-none transition-colors duration-200"
                  />
                </div>

                {/* Program / Course of Interest — shadcn Select */}
                <div className="form_field-wrapper col-span-2 flex flex-col items-start w-full">
                  <label
                    htmlFor="Program-Interest"
                    className="form_field-label font-mono text-[10px] sm:text-[11px] md:text-[12px] uppercase tracking-[0.14em] text-[#666666] mb-1 sm:mb-1.5"
                  >
                    Program of interest
                  </label>
                  <Select
                    value={formData.program}
                    onValueChange={(val) =>
                      setFormData((prev) => ({ ...prev, program: val }))
                    }
                  >
                    <SelectTrigger
                      id="Program-Interest"
                      className="form_input w-full bg-transparent border-0 border-b border-[#cccccc] focus:border-black text-black text-[14px] sm:text-[15px] md:text-[16px] font-normal py-2 sm:py-2.5 px-0 outline-none transition-colors duration-200 cursor-pointer rounded-none shadow-none ring-0 focus:ring-0"
                    >
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#fffef7] border border-[#e2e0d2] shadow-xl rounded-xl max-h-80 w-[calc(100vw-3rem)] sm:w-[460px]">
                      {COURSES.map((course) => (
                        <SelectItem
                          key={course.id}
                          value={course.id}
                          className="py-2.5 px-3 rounded-lg text-sm cursor-pointer data-[highlighted]:bg-[#ffd001] data-[highlighted]:text-black transition-colors"
                        >
                          <span className="font-mono text-xs text-black/50 mr-2 shrink-0">
                            {course.number}
                          </span>
                          <span className="font-normal text-black">
                            {course.title}
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Question or Message */}
                <div className="form_field-wrapper col-span-2 flex flex-col items-start">
                  <label
                    htmlFor="Project-Details"
                    className="form_field-label font-mono text-[10px] sm:text-[11px] md:text-[12px] uppercase tracking-[0.14em] text-[#666666] mb-1 sm:mb-1.5"
                  >
                    Question or message (optional)
                  </label>
                  <textarea
                    id="Project-Details"
                    name="details"
                    rows={2}
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Tell us about your photographic goals, camera gear, or any questions regarding admissions..."
                    className="form_input w-full bg-transparent border-0 border-b border-[#cccccc] focus:border-black text-black text-[14px] sm:text-[15px] md:text-[16px] font-normal py-2 sm:py-2.5 px-0 placeholder:text-[#aaaaaa] outline-none resize-none transition-colors duration-200"
                  />
                </div>

                {/* Action Submit Button & Fast WhatsApp Action */}
                <div className="button-group col-span-2 pt-2 sm:pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn is-icon group relative inline-flex items-center justify-center gap-3.5 bg-black hover:bg-[#ffd001] text-[#fffef7] hover:text-black py-3.5 sm:py-4 px-8 sm:px-10 rounded-full transition-colors duration-300 overflow-hidden cursor-pointer select-none w-full sm:w-auto"
                  >
                    {/* Animated Sliding Background */}
                    <span className="btn__circle-wrap absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                      <span className="btn__rect absolute bottom-0 left-0 right-0 w-full h-0 bg-[#ffd001] transition-[height] duration-400 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:h-full pointer-events-none" />
                    </span>

                    {/* Text */}
                    <span className="btn__text relative z-[2] font-mono text-xs sm:text-[13px] font-bold uppercase tracking-[0.16em] leading-none transition-transform duration-300 group-hover:translate-x-1">
                      {isSubmitting ? "SENDING..." : "SUBMIT ENQUIRY"}
                    </span>

                    {/* Arrow Icon */}
                    <span className="btn__icon-slot relative z-[2] w-3.5 h-3.5 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="w-3.5 h-3.5"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.86031 0.00280762H14V12.1417H12.8189V2.01904L0.83515 14.0028L0 13.1677L11.9838 1.18389H1.86031V0.00280762Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </button>

                  <a
                    href="https://wa.me/9779802364760?text=Hello%20IIP%20Nepal%2C%20I%20would%20like%20to%20inquire%20about%20photography%20courses."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center sm:justify-start gap-2 font-mono text-xs uppercase tracking-wider text-[#25D366] hover:text-[#128C7E] transition-colors py-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#25D366] shadow-[0_0_6px_rgba(37,211,102,0.6)]" />
                    <span>Direct WhatsApp Chat</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Privacy Note */}
                <div className="col-span-2 pt-2 border-t border-[#eae8dc] text-left">
                  <p className="font-mono text-[11px] text-[#888888]">
                    We respect your privacy. Inquiries are reviewed directly by admissions counselors. Read our{" "}
                    <Link href="/terms" className="underline hover:text-black transition-colors">
                      terms of admission
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="underline hover:text-black transition-colors">
                      privacy policy
                    </Link>
                    .
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
