"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowUpRight, Check, Phone, MessageSquare } from "lucide-react";
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
  fullName: string;
  email: string;
  phone: string;
  program: string;
  details: string;
}

export default function ContactForm(): React.JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    program: COURSES[2]?.id || "foundation-photography-course",
    details: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
        setFormData((prev) => ({ ...prev, program: match.id }));
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
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
          className="form_success-wrapper bg-black text-[#fffef7] p-8 sm:p-10 md:p-12 flex flex-col items-start gap-5 transition-all duration-500 border border-black"
        >
          {/* Signal Yellow Success Badge */}
          <div className="w-12 h-12 rounded-full bg-[#ffd001] text-black flex items-center justify-center font-bold text-xl mb-1 shadow-[0_0_16px_rgba(255,208,1,0.6)]">
            <Check className="w-6 h-6 stroke-[2.5]" />
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#ffd001]">
              Enquiry Received
            </span>
            <h3 className="font-sans font-light text-2xl sm:text-3xl lg:text-4xl tracking-[-0.03em] text-[#fffef7]">
              Thank you, {formData.fullName}.
            </h3>
            <p className="font-sans text-sm sm:text-base text-[#cccccc] leading-relaxed max-w-lg mt-1">
              Your message has been routed to our admissions team at Jyoti Bhawan. An advisor will review your program interest and reach out via phone or email within standard studio operating hours.
            </p>
          </div>

          <div className="w-full pt-5 border-t border-white/20 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="tel:+9779802364760"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#ffd001] text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Admissions: +977 9802364760</span>
            </a>

            <a
              href="https://wa.me/9779802364760"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-wider transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp Desk</span>
            </a>
          </div>

          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                fullName: "",
                email: "",
                phone: "",
                program: COURSES[2]?.id || "",
                details: "",
              });
            }}
            className="font-mono text-xs text-[#888888] hover:text-[#ffd001] underline underline-offset-4 pt-2 cursor-pointer transition-colors"
          >
            Send another enquiry
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="form_form flex flex-col gap-6"
        >
          {errorMessage && (
            <div
              role="alert"
              className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs font-mono uppercase tracking-wider"
            >
              {errorMessage}
            </div>
          )}

          {/* Full Name */}
          <div className="form_field-wrapper flex flex-col items-start">
            <label
              htmlFor="full-name"
              className="form_field-label font-mono text-[11px] sm:text-xs uppercase tracking-[0.14em] text-[#666666] mb-1"
            >
              Full name *
            </label>
            <input
              id="full-name"
              name="fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Aarav Shrestha"
              className="form_input w-full bg-transparent border-0 border-b border-[#cccccc] focus:border-black text-black text-base font-normal py-2.5 px-0 placeholder:text-[#aaaaaa] outline-none transition-colors duration-200"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Email Address */}
            <div className="form_field-wrapper flex flex-col items-start">
              <label
                htmlFor="email-address"
                className="form_field-label font-mono text-[11px] sm:text-xs uppercase tracking-[0.14em] text-[#666666] mb-1"
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
                className="form_input w-full bg-transparent border-0 border-b border-[#cccccc] focus:border-black text-black text-base font-normal py-2.5 px-0 placeholder:text-[#aaaaaa] outline-none transition-colors duration-200"
              />
            </div>

            {/* Phone Number */}
            <div className="form_field-wrapper flex flex-col items-start">
              <label
                htmlFor="phone-number"
                className="form_field-label font-mono text-[11px] sm:text-xs uppercase tracking-[0.14em] text-[#666666] mb-1"
              >
                Phone number (optional)
              </label>
              <input
                id="phone-number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+977 98XXXXXXXX"
                className="form_input w-full bg-transparent border-0 border-b border-[#cccccc] focus:border-black text-black text-base font-normal py-2.5 px-0 placeholder:text-[#aaaaaa] outline-none transition-colors duration-200"
              />
            </div>
          </div>

          {/* Program of Interest */}
          <div className="form_field-wrapper flex flex-col items-start w-full">
            <label
              htmlFor="program-select"
              className="form_field-label font-mono text-[11px] sm:text-xs uppercase tracking-[0.14em] text-[#666666] mb-1"
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
                className="form_input w-full bg-transparent border-0 border-b border-[#cccccc] focus:border-black text-black text-base font-normal py-2.5 px-0 outline-none transition-colors duration-200 cursor-pointer rounded-none shadow-none ring-0 focus:ring-0"
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
          <div className="form_field-wrapper flex flex-col items-start">
            <label
              htmlFor="project-details"
              className="form_field-label font-mono text-[11px] sm:text-xs uppercase tracking-[0.14em] text-[#666666] mb-1"
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
              className="form_input w-full bg-transparent border-0 border-b border-[#cccccc] focus:border-black text-black text-sm sm:text-base font-normal py-2.5 px-0 placeholder:text-[#aaaaaa] outline-none resize-none transition-colors duration-200"
            />
          </div>

          {/* Privacy Note & Submit Button */}
          <div className="pt-2 flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-3 bg-black hover:bg-[#ffd001] text-white hover:text-black py-4 px-8 rounded-full transition-colors duration-300 font-mono text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] cursor-pointer select-none w-full sm:w-auto"
              >
                <span>{isSubmitting ? "Sending..." : "Submit Enquiry"}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <span className="font-mono text-[11px] text-[#888888] leading-tight">
                Direct Admissions Desk · Jyoti Bhawan
              </span>
            </div>

            <p className="font-mono text-[11px] text-[#777777] leading-relaxed">
              By submitting, your details will be handled under our{" "}
              <Link href="/privacy" className="text-black underline underline-offset-2 hover:text-[#ca8a04]">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
