"use client";

import React, { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowUpRight, Check } from "lucide-react";
import { contactData } from "@/data/contact";

export interface CourseOption {
  id: string;
  number: string;
  title: string;
  duration: string;
  slug: string;
}

export const COURSES: CourseOption[] = contactData.form.courseOptions;

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  program: string;
  details: string;
}

export default function ContactForm(): React.JSX.Element {
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
    // Lightweight client simulation
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
    <div
      className="form_component w-full"
      style={{
        fontFamily: "'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {isSubmitted ? (
        <div
          role="status"
          aria-live="polite"
          className="form_success-wrapper bg-black text-[#fffef7] p-8 sm:p-10 md:p-12 lg:p-14 flex flex-col items-start gap-4 transition-all duration-500 border border-black"
        >
          {/* Signal Yellow Success Badge */}
          <div className="w-12 h-12 rounded-full bg-[#ffd001] text-black flex items-center justify-center font-bold text-xl mb-1 shadow-[0_0_16px_rgba(255,208,1,0.6)]">
            <Check className="w-6 h-6 stroke-[2.5]" />
          </div>
          <h3 className="font-light text-2xl sm:text-3xl lg:text-4xl tracking-[-0.03em] text-[#fffef7]">
            Thank you! Your enquiry has been received.
          </h3>
          <p className="font-light text-[14px] sm:text-[15px] text-[#aaaaaa] leading-[1.65] max-w-[44ch]">
            Our admissions director and faculty at the Kathmandu Centre will review
            your portfolio background and get in touch within 24 hours.
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
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.18em] text-[#ffd001] hover:underline cursor-pointer"
          >
            <span>Send another inquiry</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="form_form grid grid-cols-2 gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-5 sm:gap-y-6 md:gap-y-7 lg:gap-y-8"
        >
          {/* First Name */}
          <div className="form_field-wrapper col-span-1 flex flex-col items-start">
            <label
              htmlFor="first-name"
              className="form_field-label font-mono text-[10px] sm:text-[11px] md:text-[12px] uppercase tracking-[0.14em] text-[#666666] mb-1 sm:mb-1.5"
            >
              First name *
            </label>
            <input
              id="first-name"
              name="firstName"
              type="text"
              required
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Aarav"
              className="form_input w-full bg-transparent border-0 border-b border-[#cccccc] focus:border-black text-black text-[15px] sm:text-[16px] md:text-[17px] font-normal py-2 sm:py-2.5 px-0 placeholder:text-[#888888] outline-none transition-colors duration-200"
            />
          </div>

          {/* Last Name */}
          <div className="form_field-wrapper col-span-1 flex flex-col items-start">
            <label
              htmlFor="last-name"
              className="form_field-label font-mono text-[10px] sm:text-[11px] md:text-[12px] uppercase tracking-[0.14em] text-[#666666] mb-1 sm:mb-1.5"
            >
              Last name *
            </label>
            <input
              id="last-name"
              name="lastName"
              type="text"
              required
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Shrestha"
              className="form_input w-full bg-transparent border-0 border-b border-[#cccccc] focus:border-black text-black text-[15px] sm:text-[16px] md:text-[17px] font-normal py-2 sm:py-2.5 px-0 placeholder:text-[#888888] outline-none transition-colors duration-200"
            />
          </div>

          {/* Email Address */}
          <div className="form_field-wrapper col-span-2 sm:col-span-1 flex flex-col items-start">
            <label
              htmlFor="email-address"
              className="form_field-label font-mono text-[10px] sm:text-[11px] md:text-[12px] uppercase tracking-[0.14em] text-[#666666] mb-1 sm:mb-1.5"
            >
              Email address *
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="aarav@example.com"
              className="form_input w-full bg-transparent border-0 border-b border-[#cccccc] focus:border-black text-black text-[15px] sm:text-[16px] md:text-[17px] font-normal py-2 sm:py-2.5 px-0 placeholder:text-[#888888] outline-none transition-colors duration-200"
            />
          </div>

          {/* Phone Number */}
          <div className="form_field-wrapper col-span-2 sm:col-span-1 flex flex-col items-start">
            <label
              htmlFor="phone-number"
              className="form_field-label font-mono text-[10px] sm:text-[11px] md:text-[12px] uppercase tracking-[0.14em] text-[#666666] mb-1 sm:mb-1.5"
            >
              Phone number (optional)
            </label>
            <input
              id="phone-number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+977"
              className="form_input w-full bg-transparent border-0 border-b border-[#cccccc] focus:border-black text-black text-[15px] sm:text-[16px] md:text-[17px] font-normal py-2 sm:py-2.5 px-0 placeholder:text-[#888888] outline-none transition-colors duration-200"
            />
          </div>

          {/* Program of Interest */}
          <div className="form_field-wrapper col-span-2 flex flex-col items-start w-full">
            <label
              htmlFor="program-select"
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
                id="program-select"
                className="form_input w-full bg-transparent border-0 border-b border-[#cccccc] focus:border-black text-black text-[14px] sm:text-[15px] md:text-[16px] font-normal py-2 sm:py-2.5 px-0 outline-none transition-colors duration-200 cursor-pointer rounded-none shadow-none ring-0 focus:ring-0"
              >
                <SelectValue placeholder="Select a photography program" />
              </SelectTrigger>
              <SelectContent className="bg-[#fffef7] border border-[#e2e0d2] shadow-2xl rounded-none max-h-80 w-[calc(100vw-3rem)] sm:w-[460px]">
                {COURSES.map((course) => (
                  <SelectItem
                    key={course.id}
                    value={course.id}
                    className="py-2.5 px-3 rounded-none text-sm cursor-pointer data-[highlighted]:bg-[#ffd001] data-[highlighted]:text-black transition-colors"
                  >
                    <span className="font-mono text-xs text-black/50 mr-2 shrink-0">
                      {course.number}
                    </span>
                    <span className="font-normal text-black mr-2">
                      {course.title}
                    </span>
                    <span className="font-mono text-[11px] text-[#666666]">
                      ({course.duration})
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Question or Message */}
          <div className="form_field-wrapper col-span-2 flex flex-col items-start">
            <label
              htmlFor="project-details"
              className="form_field-label font-mono text-[10px] sm:text-[11px] md:text-[12px] uppercase tracking-[0.14em] text-[#666666] mb-1 sm:mb-1.5"
            >
              Question or message (optional)
            </label>
            <textarea
              id="project-details"
              name="details"
              rows={3}
              value={formData.details}
              onChange={handleChange}
              placeholder="Tell us about your photographic goals, camera gear, or any questions regarding admissions..."
              className="form_input w-full bg-transparent border-0 border-b border-[#cccccc] focus:border-black text-black text-[14px] sm:text-[15px] md:text-[16px] font-normal py-2 sm:py-2.5 px-0 placeholder:text-[#888888] outline-none resize-none transition-colors duration-200"
            />
          </div>

          {/* Action Submit Button */}
          <div className="button-group col-span-2 pt-2 sm:pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn is-icon group relative inline-flex items-center justify-center gap-3.5 bg-black hover:bg-[#ffd001] text-[#fffef7] hover:text-black py-4 px-9 sm:px-11 rounded-full transition-colors duration-300 overflow-hidden cursor-pointer select-none w-full sm:w-auto whitespace-nowrap min-h-[44px]"
            >
              {/* Sliding Signal Yellow Box on Hover */}
              <span className="btn__circle-wrap absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                <span className="btn__rect absolute bottom-0 left-0 right-0 w-full h-0 bg-[#ffd001] transition-[height] duration-400 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:h-full pointer-events-none" />
              </span>

              {/* Text */}
              <span className="btn__text relative z-[2] font-mono text-xs sm:text-[13px] font-bold uppercase tracking-[0.16em] leading-none transition-transform duration-300 group-hover:translate-x-1 whitespace-nowrap">
                {isSubmitting ? "SENDING..." : "SUBMIT ENQUIRY"}
              </span>

              {/* Angled Arrow SVG Slot */}
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
          </div>

          {/* Privacy Note without border-t */}
          <div className="col-span-2 pt-1 text-left">
            <p className="font-mono text-[11px] text-[#888888]">
              By submitting, you agree to our{" "}
              <a href="/terms" className="underline hover:text-black transition-colors">
                admissions policies
              </a>
              . We respect your privacy.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
