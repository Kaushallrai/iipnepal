import type { Metadata } from "next";
import React from "react";
import Footer from "@/components/layout/Footer";
import ContactMap from "@/components/contact/ContactMap";
import ContactForm from "@/components/contact/ContactForm";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Admissions | IIP Nepal — Indian Institute of Photography",
  description:
    "Contact IIP Nepal in Kathmandu. Reach our admissions director, schedule a darkroom visit at Jyoti Bhawan, Kanti Path, or submit a photography course enquiry.",
};

export default function ContactPage(): React.JSX.Element {
  return (
    <main
      className="min-h-screen bg-[#fffef7] text-black overflow-x-clip selection:bg-[#ffd001] selection:text-black"
      style={{
        fontFamily: "'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* 2. CREATIVE GIANTS ARCHITECTURAL CONTACT SECTION */}
      <header className="section_contact pt-32 sm:pt-36 md:pt-40 lg:pt-48 pb-16 sm:pb-20 md:pb-24 lg:pb-32">
        <div className="padding-global w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="contact_component flex flex-col gap-10 sm:gap-12 md:gap-14 lg:gap-16">
            
            {/* ============================================================== */}
            {/* TOP ROW: Editorial Statement + Direct Contact Channels         */}
            {/* ============================================================== */}
            <div className="contact_content-top grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 md:gap-8 lg:gap-12 items-start">
              {/* Left Column: Signature Creative Giants Light Display Statement */}
              <div className="md:col-span-7 lg:col-span-6 flex flex-col items-start">
                <div className="eyebrow-wrap flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#888888] mb-3 sm:mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
                  <span>Get in touch</span>
                </div>
                <h1 className="heading-style-h4 font-light text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[46px] leading-[1.12] tracking-[-0.035em] text-black">
                  Contact us directly or submit a form enquiry and a member of the team will be in touch.
                </h1>
              </div>

              {/* Right Column: Direct Channels with Glowing Yellow Eyebrow Dots */}
              <div className="md:col-span-5 lg:col-start-8 lg:col-span-5 flex flex-col justify-end">
                <div className="contact_info-wrap grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  {/* Phone Item */}
                  <div className="contact_info-item flex flex-col gap-1.5">
                    <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.16em] text-[#888888]">
                      Phone Number
                    </span>
                    <a
                      href="tel:+9779802364760"
                      className="eyebrow-wrap inline-flex items-center gap-2.5 text-base sm:text-lg lg:text-xl font-normal text-black hover:text-[#ffd001] transition-colors no-underline group"
                      aria-label="Call +977 9802364760"
                    >
                      <span className="eyebrow-dot w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block group-hover:scale-125 transition-transform" />
                      <span>+977 9802364760</span>
                    </a>
                  </div>

                  {/* Email Item */}
                  <div className="contact_info-item flex flex-col gap-1.5">
                    <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.16em] text-[#888888]">
                      Email Address
                    </span>
                    <a
                      href="mailto:info@iipnepal.com"
                      className="eyebrow-wrap inline-flex items-center gap-2.5 text-base sm:text-lg lg:text-xl font-normal text-black hover:text-[#ffd001] transition-colors no-underline group"
                      aria-label="Email info@iipnepal.com"
                    >
                      <span className="eyebrow-dot w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block group-hover:scale-125 transition-transform" />
                      <span>info@iipnepal.com</span>
                    </a>
                  </div>

                  {/* Location Item (Spans across bottom of info block) */}
                  <div className="contact_info-item sm:col-span-2 flex flex-col gap-1.5 pt-3 border-t border-[#e2e0d2]">
                    <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.16em] text-[#888888]">
                      Studio & Darkroom Location
                    </span>
                    <a
                      href="https://maps.app.goo.gl/792XAZpWFHjY1zWt6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="eyebrow-wrap inline-flex items-center gap-2.5 text-sm sm:text-[15px] font-normal text-black hover:text-[#ffd001] transition-colors no-underline group"
                      aria-label="Open Jyoti Bhawan location in Google Maps"
                    >
                      <span className="eyebrow-dot w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block group-hover:scale-125 transition-transform" />
                      <span>Jyoti Bhawan, Kanti Path, Kathmandu, Bagmati 44600</span>
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
            {/* BOTTOM ROW: Left Map (col 1-6) + Right Form (col 8-12)          */}
            {/* ============================================================== */}
            <div className="contact_content-bottom grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-12 items-start">
              {/* LEFT: Clean Creative Giants Map Graphic in Grey-White-Black with Yellow Pin */}
              <div className="lg:col-span-6 w-full flex flex-col">
                <ContactMap
                  locationName="IIP NEPAL · JYOTI BHAWAN"
                  address="Jyoti Bhawan, Kanti Path, Kathmandu"
                  mapsUrl="https://maps.app.goo.gl/792XAZpWFHjY1zWt6"
                />
              </div>

              {/* RIGHT: Minimalist Creative Giants Enquiry Form */}
              <div className="lg:col-start-8 lg:col-span-5 w-full flex flex-col">
                <div className="mb-6 flex items-center justify-between pb-3 border-b border-[#e2e0d2]">
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#888888]">
                    Admissions Enquiry
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#888888]">
                    Kathmandu Studio
                  </span>
                </div>
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* 3. SITE FOOTER */}
      <Footer />
    </main>
  );
}
