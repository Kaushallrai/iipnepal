"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { CourseItem } from "@/data/courses";
import { enrollData } from "@/data/enroll";

export interface EnrollmentPageContentProps {
  courses: CourseItem[];
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  programSlug: string;
  batchSchedule: string;
  paymentMethod: string;
  notes: string;
  agreeTerms: boolean;
}

export default function EnrollmentPageContent({
  courses,
}: EnrollmentPageContentProps): React.JSX.Element {
  const searchParams = useSearchParams();
  const queryCourseSlug = searchParams.get("course");

  // Determine initial course from query param or default to foundation-course
  const initialCourseSlug = React.useMemo(() => {
    if (queryCourseSlug) {
      const match = courses.find(
        (c) => c.slug === queryCourseSlug || c.id === queryCourseSlug
      );
      if (match) return match.slug;
    }
    return courses[2]?.slug || courses[0]?.slug || "foundation-course";
  }, [queryCourseSlug, courses]);

  const [selectedSlug, setSelectedSlug] = useState<string>(initialCourseSlug);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    programSlug: initialCourseSlug,
    batchSchedule: enrollData.batchSchedules[0],
    paymentMethod: enrollData.paymentMethods[0].title,
    notes: "",
    agreeTerms: true,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    referenceId: string;
    studentName: string;
    courseTitle: string;
    payableFee: string;
    email: string;
    phone: string;
    paymentMethod: string;
    batchSchedule: string;
  } | null>(null);

  // Sync if URL query param changes
  const [prevQuerySlug, setPrevQuerySlug] = useState(queryCourseSlug);
  if (queryCourseSlug !== prevQuerySlug) {
    setPrevQuerySlug(queryCourseSlug);
    if (queryCourseSlug) {
      const match = courses.find(
        (c) => c.slug === queryCourseSlug || c.id === queryCourseSlug
      );
      if (match && match.slug !== selectedSlug) {
        setSelectedSlug(match.slug);
        setFormData((prev) => ({ ...prev, programSlug: match.slug }));
      }
    }
  }

  const currentCourse = React.useMemo(() => {
    return courses.find((c) => c.slug === selectedSlug) || courses[0];
  }, [courses, selectedSlug]);

  const handleProgramChange = (slug: string) => {
    setSelectedSlug(slug);
    setFormData((prev) => ({ ...prev, programSlug: slug }));
    if (typeof window !== "undefined") {
      const newUrl = `/enroll?course=${slug}`;
      window.history.replaceState({ ...window.history.state, as: newUrl, url: newUrl }, "", newUrl);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (formData.phone.replace(/[^0-9]/g, "").length < 8) {
      newErrors.phone = "Please enter a valid phone number.";
    }
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "Please agree to the enrollment guidelines.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const refId = `IIP-2026-${randomCode}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({
        referenceId: refId,
        studentName: `${formData.firstName} ${formData.lastName}`.trim(),
        courseTitle: currentCourse.title,
        payableFee: currentCourse.payableFee,
        email: formData.email,
        phone: formData.phone,
        paymentMethod: formData.paymentMethod,
        batchSchedule: formData.batchSchedule,
      });

      const anchor = document.getElementById("enrollment-anchor");
      if (anchor) {
        anchor.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 700);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      programSlug: selectedSlug,
      batchSchedule: enrollData.batchSchedules[0],
      paymentMethod: enrollData.paymentMethods[0].title,
      notes: "",
      agreeTerms: true,
    });
    setErrors({});
  };

  return (
    <section className="section_enrollment pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-20 md:pb-24">
      <div id="enrollment-anchor" className="padding-global w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="flex flex-col gap-10 sm:gap-12 md:gap-14 lg:gap-16">
          
          {/* ============================================================== */}
          {/* TOP ROW: Editorial Statement + Admissions Coordinates          */}
          {/* ============================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 md:gap-8 lg:gap-12 items-start">
            
            {/* Left: Signature Creative Giants Display Statement */}
            <div className="md:col-span-7 lg:col-span-6 flex flex-col items-start">
              <div className="eyebrow-wrap flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-[#888888] font-medium mb-3 sm:mb-4 select-none">
                <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
                <span>{enrollData.eyebrow}</span>
              </div>
              <h1 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[58px] xl:text-[64px] leading-[1.08] tracking-[-0.035em] text-black">
                {enrollData.heading}
              </h1>
            </div>

            {/* Right: Direct Admissions Channels */}
            <div className="md:col-span-5 lg:col-start-8 lg:col-span-5 flex flex-col justify-end">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                
                {/* Phone Item */}
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.16em] text-[#888888]">
                    {enrollData.deskPhone.label}
                  </span>
                  <a
                    href={enrollData.deskPhone.href}
                    className="eyebrow-wrap inline-flex items-center gap-2.5 text-base sm:text-lg lg:text-xl font-normal text-black hover:text-[#ca8a04] transition-colors no-underline group"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block group-hover:scale-125 transition-transform" />
                    <span>{enrollData.deskPhone.value}</span>
                  </a>
                </div>

                {/* Email Item */}
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.16em] text-[#888888]">
                    {enrollData.deskEmail.label}
                  </span>
                  <a
                    href={enrollData.deskEmail.href}
                    className="eyebrow-wrap inline-flex items-center gap-2.5 text-base sm:text-lg lg:text-xl font-normal text-black hover:text-[#ca8a04] transition-colors no-underline group"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block group-hover:scale-125 transition-transform" />
                    <span>{enrollData.deskEmail.value}</span>
                  </a>
                </div>

                {/* Location Item */}
                <div className="sm:col-span-2 flex flex-col gap-1.5 pt-3 border-t border-[#e2e0d2]">
                  <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.16em] text-[#888888]">
                    {enrollData.studioLocation.label}
                  </span>
                  <a
                    href={enrollData.studioLocation.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="eyebrow-wrap inline-flex items-center gap-2.5 text-sm sm:text-[15px] font-normal text-black hover:text-[#ca8a04] transition-colors no-underline group"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block group-hover:scale-125 transition-transform" />
                    <span>{enrollData.studioLocation.value}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#888888] group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

              </div>
            </div>

          </div>

          {/* ============================================================== */}
          {/* FULL-WIDTH HAIRLINE DIVIDER                                     */}
          {/* ============================================================== */}
          <div className="line-divide w-full h-[1px] bg-[#e2e0d2]" />

          {/* ============================================================== */}
          {/* BOTTOM ROW: Left Course Dossier (col 1-6) + Right Form (col 8-12) */}
          {/* ============================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-12 items-start">
            
            {/* ------------------------------------------------------------ */}
            {/* LEFT COLUMN: Editorial Master Visual & Selected Course Dossier */}
            {/* ------------------------------------------------------------ */}
            <div className="lg:col-span-6 w-full flex flex-col gap-6">
              
              {/* Master Visual Photo Plate */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-black border border-[#e2e0d2] select-none">
                <Image
                  src={currentCourse.coverImage || "/images/flagship-mentor-darkroom.webp"}
                  alt={currentCourse.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-all duration-500"
                />

                {/* Top Left Studio Badge */}
                <div className="absolute top-3 left-3 bg-black/80 text-white font-mono text-[9px] sm:text-[10px] uppercase tracking-widest px-2.5 py-1">
                  IIP KATHMANDU · STUDIO & DARKROOM
                </div>

                {/* Bottom Left Overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white/90 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider bg-black/75 px-3 py-1.5 backdrop-blur-xs">
                  <span>PROGRAM {currentCourse.number} {"//"} {currentCourse.level}</span>
                  <span className="text-[#ffd001]">{currentCourse.duration}</span>
                </div>
              </div>

              {/* Typographic Dossier Plate */}
              <div className="flex flex-col gap-4 p-6 sm:p-7 bg-[#faf8ee] border border-[#e2e0d2]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#888888] block mb-1">
                      Enrolled Program Track
                    </span>
                    <h3 className="font-sans font-light text-xl sm:text-2xl text-black leading-tight">
                      {currentCourse.title}
                    </h3>
                  </div>

                  <Link
                    href={`/courses/${currentCourse.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-black hover:underline shrink-0 pt-1"
                  >
                    <span>Syllabus</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Tuition Fee Breakdown */}
                <div className="pt-3 pb-3 border-t border-b border-[#e2e0d2] flex items-baseline justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#666666]">
                    Payable Tuition
                  </span>
                  
                  <div className="flex items-baseline gap-2.5">
                    {currentCourse.discount && (
                      <span className="font-mono text-xs text-[#888888] line-through tabular-nums">
                        {currentCourse.totalFee}
                      </span>
                    )}
                    <span className="font-mono text-xl sm:text-2xl font-normal text-black tabular-nums">
                      {currentCourse.payableFee}
                    </span>
                    {currentCourse.discount && (
                      <span className="font-mono text-[10px] uppercase tracking-wider bg-[#ffd001] text-black px-1.5 py-0.5 font-semibold">
                        {currentCourse.discount}
                      </span>
                    )}
                  </div>
                </div>

                {/* Key Course Inclusions */}
                <div className="space-y-1.5 font-sans text-xs sm:text-[13px] text-[#555555]">
                  <p>• 1-on-1 assigned faculty mentor for weekly individual photo critiques</p>
                  <p>• {currentCourse.assignmentsCount}</p>
                  <p>• {currentCourse.certification}</p>
                  <p>• Studio lighting and darkroom sessions at Jyoti Bhawan</p>
                </div>

                {/* What Happens Next Summary */}
                <div className="pt-3 border-t border-[#e2e0d2] flex flex-col gap-1.5 font-mono text-[11px] text-[#666666]">
                  <span className="uppercase tracking-wider text-black font-semibold">How enrollment works:</span>
                  <p>1. Submit your details on this form.</p>
                  <p>2. Admissions verifies batch seat and contacts you via phone/WhatsApp.</p>
                  <p>3. Settle tuition via eSewa, Khalti, or bank to begin mentorship.</p>
                </div>
              </div>

            </div>

            {/* ------------------------------------------------------------ */}
            {/* RIGHT COLUMN: Minimalist Enrollment Form                     */}
            {/* ------------------------------------------------------------ */}
            <div className="lg:col-start-8 lg:col-span-5 w-full flex flex-col">
              
              {/* Form Header */}
              <div className="mb-6 flex items-center justify-between pb-3 border-b border-[#e2e0d2]">
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#888888]">
                  Admissions Registration
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#888888]">
                  Kathmandu Studio
                </span>
              </div>

              {submittedData ? (
                /* Submission Confirmation State */
                <div
                  role="status"
                  aria-live="polite"
                  className="bg-black text-[#fffef7] p-8 sm:p-10 flex flex-col items-start gap-4 transition-all duration-300 border border-black"
                >
                  <div className="w-12 h-12 rounded-full bg-[#ffd001] text-black flex items-center justify-center font-bold text-xl mb-1 shadow-[0_0_16px_rgba(255,208,1,0.6)]">
                    <Check className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  
                  <h3 className="font-light text-2xl sm:text-3xl tracking-[-0.03em] text-[#fffef7]">
                    Enrolment application received.
                  </h3>
                  
                  <div className="font-mono text-xs text-[#ffd001] tracking-wider bg-[#ffd001]/10 px-3 py-1 border border-[#ffd001]/30">
                    APPLICATION REF: {submittedData.referenceId}
                  </div>

                  <p className="font-light text-[14px] text-[#cccccc] leading-[1.65]">
                    Welcome, <strong>{submittedData.studentName}</strong>. Your enrolment application for <strong>{submittedData.courseTitle}</strong> ({submittedData.payableFee}) has been registered in the Kathmandu admissions ledger.
                  </p>

                  <div className="w-full p-4 bg-white/5 border border-white/10 text-xs font-mono space-y-2 text-[#aaaaaa]">
                    <div className="text-white uppercase tracking-wider font-semibold">What happens next:</div>
                    <p>1. Our admissions counselor will review batch seating availability.</p>
                    <p>2. We will reach out via phone ({submittedData.phone}) or WhatsApp to confirm your schedule and provide payment coordinates (eSewa / Khalti / Bank Transfer / Studio counter).</p>
                    <p>3. Upon settlement, your official IIP Student Portal credentials and mentor orientation details will be issued.</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href="tel:+9779802364760"
                      className="inline-flex items-center gap-1.5 py-2.5 px-4 rounded-full bg-[#ffd001] text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-white transition-colors"
                    >
                      <span>Call Admissions Desk</span>
                    </a>
                    <a
                      href="https://wa.me/9779802364760"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 py-2.5 px-4 rounded-full border border-white/20 text-white font-mono text-xs uppercase tracking-wider hover:border-[#ffd001] hover:text-[#ffd001] transition-colors"
                    >
                      <span>WhatsApp Desk</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.18em] text-[#888888] hover:text-white hover:underline cursor-pointer"
                  >
                    <span>Submit another application</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                /* Minimalist Creative Giants Form */
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-5 sm:gap-y-6"
                >
                  {/* First Name */}
                  <div className="col-span-1 flex flex-col items-start">
                    <label
                      htmlFor="first-name"
                      className="font-mono text-[10px] sm:text-[11px] md:text-[12px] uppercase tracking-[0.14em] text-[#666666] mb-1 sm:mb-1.5"
                    >
                      First name *
                    </label>
                    <input
                      id="first-name"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Aarav"
                      className={`w-full bg-transparent border-0 border-b text-black text-[15px] sm:text-[16px] font-normal py-2 sm:py-2.5 px-0 placeholder:text-[#aaaaaa] outline-none transition-colors duration-200 ${
                        errors.firstName ? "border-red-600" : "border-[#666666] focus:border-black"
                      }`}
                    />
                    {errors.firstName && (
                      <span className="font-mono text-[10px] text-red-600 mt-1">
                        {errors.firstName}
                      </span>
                    )}
                  </div>

                  {/* Last Name */}
                  <div className="col-span-1 flex flex-col items-start">
                    <label
                      htmlFor="last-name"
                      className="font-mono text-[10px] sm:text-[11px] md:text-[12px] uppercase tracking-[0.14em] text-[#666666] mb-1 sm:mb-1.5"
                    >
                      Last name *
                    </label>
                    <input
                      id="last-name"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Shrestha"
                      className={`w-full bg-transparent border-0 border-b text-black text-[15px] sm:text-[16px] font-normal py-2 sm:py-2.5 px-0 placeholder:text-[#aaaaaa] outline-none transition-colors duration-200 ${
                        errors.lastName ? "border-red-600" : "border-[#666666] focus:border-black"
                      }`}
                    />
                    {errors.lastName && (
                      <span className="font-mono text-[10px] text-red-600 mt-1">
                        {errors.lastName}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="col-span-2 sm:col-span-1 flex flex-col items-start">
                    <label
                      htmlFor="email-address"
                      className="font-mono text-[10px] sm:text-[11px] md:text-[12px] uppercase tracking-[0.14em] text-[#666666] mb-1 sm:mb-1.5"
                    >
                      Email address *
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="aarav@example.com"
                      className={`w-full bg-transparent border-0 border-b text-black text-[15px] sm:text-[16px] font-normal py-2 sm:py-2.5 px-0 placeholder:text-[#aaaaaa] outline-none transition-colors duration-200 ${
                        errors.email ? "border-red-600" : "border-[#666666] focus:border-black"
                      }`}
                    />
                    {errors.email && (
                      <span className="font-mono text-[10px] text-red-600 mt-1">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="col-span-2 sm:col-span-1 flex flex-col items-start">
                    <label
                      htmlFor="phone-number"
                      className="font-mono text-[10px] sm:text-[11px] md:text-[12px] uppercase tracking-[0.14em] text-[#666666] mb-1 sm:mb-1.5"
                    >
                      Phone / WhatsApp *
                    </label>
                    <input
                      id="phone-number"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+977"
                      className={`w-full bg-transparent border-0 border-b text-black text-[15px] sm:text-[16px] font-normal py-2 sm:py-2.5 px-0 placeholder:text-[#aaaaaa] outline-none transition-colors duration-200 ${
                        errors.phone ? "border-red-600" : "border-[#666666] focus:border-black"
                      }`}
                    />
                    {errors.phone && (
                      <span className="font-mono text-[10px] text-red-600 mt-1">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* Program of Study Select (DROPDOWN WITH ALL 5 COURSES) */}
                  <div className="col-span-2 flex flex-col items-start w-full">
                    <label
                      htmlFor="program-select"
                      className="font-mono text-[10px] sm:text-[11px] md:text-[12px] uppercase tracking-[0.14em] text-[#666666] mb-1 sm:mb-1.5"
                    >
                      Photography Program *
                    </label>
                    <Select
                      value={selectedSlug}
                      onValueChange={handleProgramChange}
                    >
                      <SelectTrigger
                        id="program-select"
                        className="w-full bg-transparent border-0 border-b border-[#666666] focus:border-black text-black text-[14px] sm:text-[15px] md:text-[16px] font-normal py-2 sm:py-2.5 px-0 outline-none transition-colors duration-200 cursor-pointer rounded-none shadow-none ring-0 focus:ring-0"
                      >
                        <SelectValue placeholder="Select a photography program" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#fffef7] border border-[#e2e0d2] shadow-2xl rounded-none max-h-80 w-[calc(100vw-3rem)] sm:w-[480px]">
                        {courses.map((course) => (
                          <SelectItem
                            key={course.id}
                            value={course.slug}
                            className="py-2.5 px-3 rounded-none text-sm cursor-pointer data-[highlighted]:bg-[#ffd001] data-[highlighted]:text-black transition-colors"
                          >
                            <span className="font-mono text-xs text-black/50 mr-2 shrink-0">
                              {course.number}
                            </span>
                            <span className="font-normal text-black mr-2">
                              {course.title}
                            </span>
                            <span className="font-mono text-[11px] text-[#666666]">
                              ({course.payableFee})
                            </span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Preferred Batch Timing */}
                  <div className="col-span-2 flex flex-col items-start w-full">
                    <label
                      htmlFor="batch-select"
                      className="font-mono text-[10px] sm:text-[11px] md:text-[12px] uppercase tracking-[0.14em] text-[#666666] mb-1 sm:mb-1.5"
                    >
                      Preferred Schedule
                    </label>
                    <Select
                      value={formData.batchSchedule}
                      onValueChange={(val) =>
                        setFormData((prev) => ({ ...prev, batchSchedule: val }))
                      }
                    >
                      <SelectTrigger
                        id="batch-select"
                        className="w-full bg-transparent border-0 border-b border-[#666666] focus:border-black text-black text-[14px] sm:text-[15px] md:text-[16px] font-normal py-2 sm:py-2.5 px-0 outline-none transition-colors duration-200 cursor-pointer rounded-none shadow-none ring-0 focus:ring-0"
                      >
                        <SelectValue placeholder="Select schedule" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#fffef7] border border-[#e2e0d2] shadow-2xl rounded-none">
                        {enrollData.batchSchedules.map((schedule) => (
                          <SelectItem
                            key={schedule}
                            value={schedule}
                            className="py-2.5 px-3 text-sm rounded-none data-[highlighted]:bg-[#ffd001] data-[highlighted]:text-black"
                          >
                            {schedule}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Payment Settlement Preference */}
                  <div className="col-span-2 flex flex-col items-start w-full">
                    <label
                      htmlFor="payment-select"
                      className="font-mono text-[10px] sm:text-[11px] md:text-[12px] uppercase tracking-[0.14em] text-[#666666] mb-1"
                    >
                      Payment Settlement Method
                    </label>
                    <p className="font-mono text-[11px] text-[#777777] mb-2">
                      Payment is settled after admissions verification. No upfront charge is made on this form.
                    </p>
                    <Select
                      value={formData.paymentMethod}
                      onValueChange={(val) =>
                        setFormData((prev) => ({ ...prev, paymentMethod: val }))
                      }
                    >
                      <SelectTrigger
                        id="payment-select"
                        className="w-full bg-transparent border-0 border-b border-[#666666] focus:border-black text-black text-[14px] sm:text-[15px] md:text-[16px] font-normal py-2 sm:py-2.5 px-0 outline-none transition-colors duration-200 cursor-pointer rounded-none shadow-none ring-0 focus:ring-0"
                      >
                        <SelectValue placeholder="Select payment method" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#fffef7] border border-[#e2e0d2] shadow-2xl rounded-none">
                        {enrollData.paymentMethods.map((method) => (
                          <SelectItem
                            key={method.id}
                            value={method.title}
                            className="py-2.5 px-3 text-sm rounded-none data-[highlighted]:bg-[#ffd001] data-[highlighted]:text-black"
                          >
                            {method.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Notes / Aspirations */}
                  <div className="col-span-2 flex flex-col items-start">
                    <label
                      htmlFor="applicant-notes"
                      className="font-mono text-[10px] sm:text-[11px] md:text-[12px] uppercase tracking-[0.14em] text-[#666666] mb-1 sm:mb-1.5"
                    >
                      Camera gear or mentorship goals (Optional)
                    </label>
                    <textarea
                      id="applicant-notes"
                      name="notes"
                      rows={2}
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="e.g. Shooting with Sony A7III, focused on documentary portraiture..."
                      className="w-full bg-transparent border-0 border-b border-[#666666] focus:border-black text-black text-[14px] sm:text-[15px] font-normal py-2 sm:py-2.5 px-0 placeholder:text-[#aaaaaa] outline-none resize-none transition-colors duration-200"
                    />
                  </div>

                  {/* Agreement */}
                  <div className="col-span-2 pt-1">
                    <label htmlFor="agree-terms" className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        id="agree-terms"
                        type="checkbox"
                        checked={formData.agreeTerms}
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, agreeTerms: e.target.checked }));
                          if (errors.agreeTerms) setErrors((prev) => ({ ...prev, agreeTerms: undefined }));
                        }}
                        className="mt-0.5 w-4 h-4 accent-black rounded-none cursor-pointer"
                      />
                      <span className="font-sans text-xs text-[#555555] leading-relaxed">
                        I confirm that my application details are accurate and agree to IIP Nepal&apos;s{" "}
                        <Link href="/terms" target="_blank" className="underline underline-offset-2 text-black hover:text-[#ca8a04]">
                          terms of admission
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" target="_blank" className="underline underline-offset-2 text-black hover:text-[#ca8a04]">
                          privacy policy
                        </Link>
                        .
                      </span>
                    </label>
                    {errors.agreeTerms && (
                      <span className="font-mono text-[10px] text-red-600 mt-1 block">
                        {errors.agreeTerms}
                      </span>
                    )}
                  </div>

                  {/* Action Submit Button in Creative Giants Pill Style */}
                  <div className="col-span-2 pt-3 sm:pt-4 flex flex-col items-start gap-2.5">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn is-icon group relative inline-flex items-center justify-center gap-2 sm:gap-3.5 bg-black hover:bg-[#ffd001] text-[#fffef7] hover:text-black py-3.5 sm:py-4 px-5 sm:px-9 rounded-full transition-colors duration-300 overflow-hidden cursor-pointer select-none w-full sm:w-auto max-w-full min-h-[48px] whitespace-nowrap"
                    >
                      {/* Sliding Signal Yellow Box on Hover */}
                      <span className="btn__circle-wrap absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                        <span className="btn__rect absolute bottom-0 left-0 right-0 w-full h-0 bg-[#ffd001] transition-[height] duration-400 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:h-full pointer-events-none" />
                      </span>

                      {/* Text */}
                      <span className="btn__text relative z-[2] font-mono text-[11px] sm:text-xs md:text-[13px] font-bold uppercase tracking-[0.12em] sm:tracking-[0.16em] leading-none whitespace-nowrap transition-transform duration-300 group-hover:translate-x-1 truncate">
                        {isSubmitting ? "PROCESSING..." : "SUBMIT ENROLMENT APPLICATION"}
                      </span>

                      {/* Angled Arrow */}
                      <span className="btn__icon-slot relative z-[2] w-3.5 h-3.5 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </button>
                    <p className="font-mono text-[11px] text-[#777777] leading-relaxed">
                      * Submitting registers your priority application. Admissions staff will verify batch capacity and contact you directly with orientation and payment coordinates.
                    </p>
                  </div>

                </form>
              )}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
