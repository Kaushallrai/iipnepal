import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/data/site";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | IIP Nepal",
  description:
    "Learn how the Indian Institute of Photography Nepal collects, protects, and handles student registration and enquiry information.",
  openGraph: {
    title: "Privacy Policy | IIP Nepal",
    description:
      "Privacy statement and data protection guidelines for students and visitors of IIP Nepal.",
    url: "https://iipnepal.com/privacy",
    type: "website",
  },
};

export default function PrivacyPage(): React.JSX.Element {
  return (
    <main
      className="min-h-screen bg-[#fffef7] text-black overflow-x-clip selection:bg-[#ffd001] selection:text-black"
      style={{
        fontFamily: "'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <article className="pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-20 sm:pb-28">
        <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          
          {/* Top Eyebrow & Headline */}
          <div className="flex flex-col items-start gap-4 pb-10 sm:pb-12 md:pb-14 border-b border-[#e2e0d2]">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-[#888888] font-medium select-none">
              <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
              <span>Data Protection & Privacy // Kathmandu Centre</span>
            </div>
            
            <h1 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[58px] leading-[1.08] tracking-[-0.035em] text-black max-w-4xl">
              Privacy Policy & Student Data Protection.
            </h1>

            <p className="font-sans font-normal text-sm sm:text-base md:text-lg text-[#666666] max-w-3xl leading-relaxed">
              This policy explains what information is collected when you browse iipnepal.com, submit an inquiry, or register for courses at our Kathmandu centre, and how that information is safeguarded.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#888888] pt-2">
              <span>Last Revised: January 2026</span>
              <span>•</span>
              <span>IIP Nepal · White Hat Events</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pt-12 sm:pt-16 items-start">
            
            {/* Sidebar Navigation */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col gap-4 p-6 bg-[#faf8ee] border border-[#e2e0d2]">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#888888] font-medium">
                Summary Overview
              </span>
              <nav className="flex flex-col gap-2.5 font-mono text-xs">
                <a href="#information-collected" className="text-[#444444] hover:text-black hover:underline transition-colors">
                  01. Information We Collect
                </a>
                <a href="#purpose" className="text-[#444444] hover:text-black hover:underline transition-colors">
                  02. Purpose of Collection
                </a>
                <a href="#data-storage" className="text-[#444444] hover:text-black hover:underline transition-colors">
                  03. Data Security & Storage
                </a>
                <a href="#third-parties" className="text-[#444444] hover:text-black hover:underline transition-colors">
                  04. Third-Party Sharing
                </a>
                <a href="#your-rights" className="text-[#444444] hover:text-black hover:underline transition-colors">
                  05. Your Rights & Choices
                </a>
                <a href="#contact" className="text-[#444444] hover:text-black hover:underline transition-colors">
                  06. Privacy Inquiries
                </a>
              </nav>

              <div className="pt-4 border-t border-[#e2e0d2]">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-black font-semibold hover:underline"
                >
                  <span>Contact Admissions Desk</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </aside>

            {/* Reading Column */}
            <div className="lg:col-span-8 flex flex-col gap-12 sm:gap-16 max-w-[70ch]">
              
              <section id="information-collected" className="flex flex-col gap-4">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#ca8a04] font-semibold">
                  Section 01
                </span>
                <h2 className="font-sans font-light text-2xl sm:text-3xl text-black tracking-[-0.03em]">
                  Information We Collect
                </h2>
                <div className="font-sans text-sm sm:text-base text-[#444444] leading-relaxed space-y-3.5">
                  <p>
                    When you interact with our website or admissions services, we collect information you voluntarily provide:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-[#555555] font-mono">
                    <li>Contact details: Full name, telephone/mobile number, and email address</li>
                    <li>Academic preferences: Chosen photography course, batch timings, and prior shooting experience</li>
                    <li>Enrollment metadata: Batch schedule preferences, transaction reference IDs, and optional portfolio notes</li>
                    <li>Visitor interactions: Standard non-identifying server logs and essential cookies used for session management</li>
                  </ul>
                </div>
              </section>

              <section id="purpose" className="flex flex-col gap-4 pt-8 border-t border-[#e2e0d2]">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#ca8a04] font-semibold">
                  Section 02
                </span>
                <h2 className="font-sans font-light text-2xl sm:text-3xl text-black tracking-[-0.03em]">
                  Purpose of Collection
                </h2>
                <div className="font-sans text-sm sm:text-base text-[#444444] leading-relaxed space-y-3.5">
                  <p>
                    Your data is gathered strictly to facilitate your education and provide transparent admissions services:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-[#555555]">
                    <li>To verify course availability and contact you via phone or WhatsApp regarding batch confirmation</li>
                    <li>To issue student portal credentials, course syllabi, and assignment briefs</li>
                    <li>To assign personal faculty mentors for 1-on-1 critiques and darkroom scheduling</li>
                    <li>To process verified certificates upon module graduation</li>
                  </ul>
                  <p>
                    We do not engage in automated spam, commercial mailing list sales, or third-party marketing telemarketing.
                  </p>
                </div>
              </section>

              <section id="data-storage" className="flex flex-col gap-4 pt-8 border-t border-[#e2e0d2]">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#ca8a04] font-semibold">
                  Section 03
                </span>
                <h2 className="font-sans font-light text-2xl sm:text-3xl text-black tracking-[-0.03em]">
                  Data Security & Storage
                </h2>
                <div className="font-sans text-sm sm:text-base text-[#444444] leading-relaxed space-y-3.5">
                  <p>
                    All online registration data is transmitted via industry-standard TLS encryption. Physical admissions records maintained at our Jyoti Bhawan offices are kept in secure administration facilities accessible only to designated admissions officers.
                  </p>
                  <p>
                    We retain applicant records for the duration of the enrolled academic period plus standard archival audit terms required under Nepalese educational and accounting regulations.
                  </p>
                </div>
              </section>

              <section id="third-parties" className="flex flex-col gap-4 pt-8 border-t border-[#e2e0d2]">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#ca8a04] font-semibold">
                  Section 04
                </span>
                <h2 className="font-sans font-light text-2xl sm:text-3xl text-black tracking-[-0.03em]">
                  Third-Party Sharing
                </h2>
                <div className="font-sans text-sm sm:text-base text-[#444444] leading-relaxed space-y-3.5">
                  <p>
                    <strong>We do not sell, rent, or trade your personal information.</strong> Data is shared only with:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-[#555555]">
                    <li>IIP Faculty & Mentors assigned directly to your course track</li>
                    <li>White Hat Events administration managing Kathmandu operational facilities</li>
                    <li>Indian Institute of Photography central verification board for official certificate issuance</li>
                    <li>Authorized payment gateways (eSewa / Khalti / Banks) solely to verify transaction codes</li>
                  </ul>
                </div>
              </section>

              <section id="your-rights" className="flex flex-col gap-4 pt-8 border-t border-[#e2e0d2]">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#ca8a04] font-semibold">
                  Section 05
                </span>
                <h2 className="font-sans font-light text-2xl sm:text-3xl text-black tracking-[-0.03em]">
                  Your Rights & Choices
                </h2>
                <div className="font-sans text-sm sm:text-base text-[#444444] leading-relaxed space-y-3.5">
                  <p>
                    You have the right to request access to the personal data we hold about you, request corrections to outdated contact info, or ask for the deletion of non-essential records after course completion.
                  </p>
                  <p>
                    If you prefer not to receive reminder calls or WhatsApp notifications about upcoming photo exhibitions, notify our desk at any time and we will update your communication preference immediately.
                  </p>
                </div>
              </section>

              <section id="contact" className="flex flex-col gap-4 pt-8 border-t border-[#e2e0d2]">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#ca8a04] font-semibold">
                  Section 06
                </span>
                <h2 className="font-sans font-light text-2xl sm:text-3xl text-black tracking-[-0.03em]">
                  Privacy Inquiries & Data Officer
                </h2>
                <div className="font-sans text-sm sm:text-base text-[#444444] leading-relaxed space-y-3.5">
                  <p>
                    For privacy inquiries or data update requests, please contact:
                  </p>
                  <div className="p-5 bg-white border border-[#e2e0d2] text-xs font-mono space-y-1.5">
                    <p className="text-black font-semibold">IIP NEPAL PRIVACY DESK</p>
                    <p className="text-[#666666]">Email: {siteConfig.contact.email}</p>
                    <p className="text-[#666666]">Office: {siteConfig.contact.addressShort}</p>
                    <p className="text-[#666666]">Phone: {siteConfig.contact.phoneDisplay}</p>
                  </div>
                </div>
              </section>

            </div>

          </div>

        </div>
      </article>

      <Footer />
    </main>
  );
}
