"use client";

import React, { useState } from "react";
import { LineReveal } from "@/components/animations/LineReveal";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  program: string;
  details: string;
}

const PROGRAM_OPTIONS = [
  "One-Year Professional Diploma in Photography",
  "Commercial & Fashion Photography",
  "Documentary & Visual Storytelling",
  "Weekend Foundation Course",
  "Portfolio Assessment & Mentorship",
  "Other / General Inquiry",
];

export default function ContactSection(): React.JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    program: PROGRAM_OPTIONS[0],
    details: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
      aria-label="Contact and Admissions Section"
      className="section_contact-cta theme-light relative w-full bg-[#fffef7] text-black overflow-hidden pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-24 sm:pb-28 md:pb-32 lg:pb-36 select-none border-t border-[#eae8dc]"
      style={{
        fontFamily: "'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <div className="padding-global w-full px-6 sm:px-8 md:px-12 lg:px-16 max-w-[105rem] mx-auto">
        <div className="contact-cta_component grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 sm:gap-16 lg:gap-24 items-start">
          {/* LEFT COLUMN: Editorial Brand Statement & Direct Channels */}
          <div className="contact-cta_content flex flex-col justify-between h-full">
            <div className="header-wrap flex flex-col items-start">
              {/* Eyebrow with glowing Signal Yellow dot */}
              <div className="eyebrow-wrap flex items-center gap-2.5 text-xs sm:text-[13px] font-mono uppercase tracking-[0.22em] text-black font-semibold mb-3 sm:mb-4">
                <span className="eyebrow-dot w-2 h-2 rounded-full bg-[#ffd001] shrink-0 inline-block shadow-[0_0_8px_rgba(255,208,1,0.6)]" />
                <div>Get in touch</div>
              </div>

              {/* Masked Headline in Switzer Light Display */}
              <LineReveal
                as="h2"
                lines={["Speak to us."]}
                className="heading-style-h1 font-sans font-light text-4xl sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[80px] leading-[1.04] tracking-[-0.035em] text-black mb-5 sm:mb-6"
              />

              {/* Explanatory Narrative */}
              <p className="text-size-regular text-color-secondary font-light text-[15px] sm:text-[16px] md:text-[17px] leading-[1.62] text-[#666666] tracking-[-0.018em] max-w-[42ch]">
                If you want to start a course, share a portfolio idea, or simply
                schedule a one-on-one darkroom visit in Kathmandu, we want to
                hear from you.
              </p>
            </div>

            {/* Direct Studio Contact Cards */}
            <div className="contact-details_wrap mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-[#e2e0d2] flex flex-col gap-5 sm:gap-6">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.16em] text-[#888888]">
                  Kathmandu Centre
                </span>
                <span className="font-normal text-[15px] sm:text-[16px] text-black">
                  Lalitpur, Bagmati Province, Nepal
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-10">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.16em] text-[#888888]">
                    Direct Admissions
                  </span>
                  <a
                    href="tel:+9779802364760"
                    className="font-normal text-[15px] sm:text-[16px] text-black hover:text-[#ffd001] transition-colors"
                  >
                    +977 9802364760
                  </a>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.16em] text-[#888888]">
                    Faculty Email
                  </span>
                  <a
                    href="mailto:info@iipnepal.com"
                    className="font-normal text-[15px] sm:text-[16px] text-black hover:text-[#ffd001] transition-colors"
                  >
                    info@iipnepal.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Creative Giants Minimalist Form */}
          <div className="form_component w-full">
            {isSubmitted ? (
              <div
                role="status"
                className="form_success-wrapper bg-black text-[#fffef7] p-8 sm:p-12 md:p-14 flex flex-col items-start gap-4 transition-all duration-500 animate-fade-in"
              >
                <div className="w-10 h-10 rounded-full bg-[#ffd001] text-black flex items-center justify-center font-bold text-lg mb-2">
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
                      program: PROGRAM_OPTIONS[0],
                      details: "",
                    });
                  }}
                  className="mt-4 inline-flex items-center text-xs font-mono uppercase tracking-[0.16em] text-[#ffd001] hover:underline"
                >
                  Send another inquiry →
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="form_form grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-8 sm:gap-y-10"
              >
                {/* First Name */}
                <div className="form_field-wrapper flex flex-col items-start">
                  <label
                    htmlFor="First-Name"
                    className="form_field-label font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.14em] text-[#666666] mb-1.5"
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
                    className="form_input w-full bg-transparent border-0 border-b border-[#cccccc] focus:border-black text-black text-[16px] sm:text-[17px] font-normal py-2.5 px-0 placeholder:text-[#aaaaaa] outline-none transition-colors duration-200"
                  />
                </div>

                {/* Last Name */}
                <div className="form_field-wrapper flex flex-col items-start">
                  <label
                    htmlFor="Last-Name"
                    className="form_field-label font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.14em] text-[#666666] mb-1.5"
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
                    className="form_input w-full bg-transparent border-0 border-b border-[#cccccc] focus:border-black text-black text-[16px] sm:text-[17px] font-normal py-2.5 px-0 placeholder:text-[#aaaaaa] outline-none transition-colors duration-200"
                  />
                </div>

                {/* Email Address */}
                <div className="form_field-wrapper flex flex-col items-start">
                  <label
                    htmlFor="Email-Address"
                    className="form_field-label font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.14em] text-[#666666] mb-1.5"
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
                    className="form_input w-full bg-transparent border-0 border-b border-[#cccccc] focus:border-black text-black text-[16px] sm:text-[17px] font-normal py-2.5 px-0 placeholder:text-[#aaaaaa] outline-none transition-colors duration-200"
                  />
                </div>

                {/* Phone Number */}
                <div className="form_field-wrapper flex flex-col items-start">
                  <label
                    htmlFor="Phone-Number"
                    className="form_field-label font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.14em] text-[#666666] mb-1.5"
                  >
                    Phone number
                  </label>
                  <input
                    id="Phone-Number"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+977"
                    className="form_input w-full bg-transparent border-0 border-b border-[#cccccc] focus:border-black text-black text-[16px] sm:text-[17px] font-normal py-2.5 px-0 placeholder:text-[#aaaaaa] outline-none transition-colors duration-200"
                  />
                </div>

                {/* Program / Course of Interest */}
                <div className="form_field-wrapper sm:col-span-2 flex flex-col items-start">
                  <label
                    htmlFor="Program-Interest"
                    className="form_field-label font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.14em] text-[#666666] mb-1.5"
                  >
                    Program of interest
                  </label>
                  <select
                    id="Program-Interest"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="form_input w-full bg-transparent border-0 border-b border-[#cccccc] focus:border-black text-black text-[15px] sm:text-[16px] font-normal py-2.5 px-0 outline-none transition-colors duration-200 cursor-pointer"
                  >
                    {PROGRAM_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#fffef7] text-black">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Project / Inquiry Details */}
                <div className="form_field-wrapper sm:col-span-2 flex flex-col items-start">
                  <label
                    htmlFor="Project-Details"
                    className="form_field-label font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.14em] text-[#666666] mb-1.5"
                  >
                    Project or mentorship details
                  </label>
                  <textarea
                    id="Project-Details"
                    name="details"
                    rows={3}
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Tell us about your photographic experience, equipment, or questions..."
                    className="form_input w-full bg-transparent border-0 border-b border-[#cccccc] focus:border-black text-black text-[15px] sm:text-[16px] font-normal py-2.5 px-0 placeholder:text-[#aaaaaa] outline-none resize-none transition-colors duration-200"
                  />
                </div>

                {/* Action Submit Button (Exact Creative Giants Sliding Pill Button) */}
                <div className="button-group sm:col-span-2 pt-4 flex items-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn is-icon group relative inline-flex items-center gap-3.5 bg-black hover:bg-[#ffd001] text-[#fffef7] hover:text-black py-4 px-10 rounded-full transition-colors duration-300 overflow-hidden cursor-pointer select-none"
                  >
                    {/* Animated Sliding Background */}
                    <span className="btn__circle-wrap absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                      <span className="btn__rect absolute bottom-0 left-0 right-0 w-full h-0 bg-[#ffd001] transition-[height] duration-400 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:h-full pointer-events-none" />
                    </span>

                    {/* Text */}
                    <span className="btn__text relative z-[2] font-mono text-xs sm:text-[13px] font-bold uppercase tracking-[0.16em] leading-none transition-transform duration-300 group-hover:translate-x-1">
                      {isSubmitting ? "SENDING..." : "SEND ENQUIRY"}
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
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
