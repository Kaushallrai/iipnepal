import type { Metadata } from "next";
import React from "react";
import Footer from "@/components/layout/Footer";
import ContactMap from "@/components/contact/ContactMap";
import ContactForm from "@/components/contact/ContactForm";
import LineReveal from "@/components/animations/LineReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { ArrowUpRight } from "lucide-react";
import { contactData } from "@/data/contact";

export const metadata: Metadata = {
  title: contactData.meta.title,
  description: contactData.meta.description,
};

export default function ContactPage(): React.JSX.Element {
  const { eyebrow, headingLines, channels, map, form } = contactData;

  return (
    <main
      className="min-h-screen bg-[#fffef7] text-black overflow-x-clip selection:bg-[#ffd001] selection:text-black"
      style={{
        fontFamily: "'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* 2. CREATIVE GIANTS ARCHITECTURAL CONTACT SECTION */}
      <header className="section_contact pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-20 md:pb-24">
        <div className="padding-global w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="contact_component flex flex-col gap-10 sm:gap-12 md:gap-14 lg:gap-16">
            
            {/* ============================================================== */}
            {/* TOP ROW: Editorial Statement + Direct Contact Channels         */}
            {/* ============================================================== */}
            <div className="contact_content-top grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 md:gap-8 lg:gap-12 items-start">
              {/* Left Column: Signature Creative Giants Light Display Statement */}
              <div className="md:col-span-7 lg:col-span-6 flex flex-col items-start">
                <div className="eyebrow-wrap flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-[#888888] font-medium mb-3 sm:mb-4 select-none">
                  <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
                  <span>{eyebrow}</span>
                </div>
                <LineReveal
                  as="h1"
                  className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[58px] xl:text-[64px] leading-[1.08] tracking-[-0.035em] text-black"
                  lines={headingLines}
                />
              </div>

              {/* Right Column: Direct Channels with Glowing Yellow Eyebrow Dots */}
              <div className="md:col-span-5 lg:col-start-8 lg:col-span-5 flex flex-col justify-end">
                <ScrollReveal variant="stagger-children" stagger={0.08} delay={0.15}>
                  <div className="contact_info-wrap grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    {/* Phone Item */}
                    <div className="scroll-item contact_info-item flex flex-col gap-1.5">
                      <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.16em] text-[#888888]">
                        {channels.phone.label}
                      </span>
                      <a
                        href={channels.phone.href}
                        className="eyebrow-wrap inline-flex items-center gap-2.5 text-base sm:text-lg lg:text-xl font-normal text-black hover:text-[#ffd001] transition-colors no-underline group"
                        aria-label={`Call ${channels.phone.value}`}
                      >
                        <span className="eyebrow-dot w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block group-hover:scale-125 transition-transform" />
                        <span>{channels.phone.value}</span>
                      </a>
                    </div>

                    {/* WhatsApp Item */}
                    <div className="scroll-item contact_info-item flex flex-col gap-1.5">
                      <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.16em] text-[#888888]">
                        {channels.whatsapp.label}
                      </span>
                      <a
                        href={channels.whatsapp.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="eyebrow-wrap inline-flex items-center gap-2.5 text-base sm:text-lg lg:text-xl font-normal text-black hover:text-[#ffd001] transition-colors no-underline group"
                        aria-label={`WhatsApp admissions chat at ${channels.whatsapp.value}`}
                      >
                        <span className="eyebrow-dot w-2 h-2 rounded-full bg-[#25D366] shadow-[0_0_8px_rgba(37,211,102,0.6)] shrink-0 inline-block group-hover:scale-125 transition-transform" />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>

                    {/* Email Item */}
                    <div className="scroll-item contact_info-item flex flex-col gap-1.5 sm:col-span-2 pt-2 border-t border-[#e2e0d2]">
                      <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.16em] text-[#888888]">
                        {channels.email.label}
                      </span>
                      <a
                        href={channels.email.href}
                        className="eyebrow-wrap inline-flex items-center gap-2.5 text-base sm:text-lg lg:text-xl font-normal text-black hover:text-[#ffd001] transition-colors no-underline group"
                        aria-label={`Email ${channels.email.value}`}
                      >
                        <span className="eyebrow-dot w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block group-hover:scale-125 transition-transform" />
                        <span>{channels.email.value}</span>
                      </a>
                    </div>

                    {/* Location Item (Spans across bottom of info block) */}
                    <div className="scroll-item contact_info-item sm:col-span-2 flex flex-col gap-1.5 pt-3 border-t border-[#e2e0d2]">
                      <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.16em] text-[#888888]">
                        {channels.location.label}
                      </span>
                      <a
                        href={channels.location.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="eyebrow-wrap inline-flex items-center gap-2.5 text-sm sm:text-[15px] font-normal text-black hover:text-[#ffd001] transition-colors no-underline group"
                        aria-label={`Open ${channels.location.value} in Google Maps`}
                      >
                        <span className="eyebrow-dot w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block group-hover:scale-125 transition-transform" />
                        <span>{channels.location.value}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#888888] group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
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
                <ScrollReveal variant="fade-up" duration={0.9} start="top 85%">
                  <ContactMap
                    locationName={map.locationName}
                    address={map.address}
                    mapsUrl={map.mapsUrl}
                  />
                </ScrollReveal>
              </div>

              {/* RIGHT: Minimalist Creative Giants Enquiry Form */}
              <div className="lg:col-start-8 lg:col-span-5 w-full flex flex-col">
                <ScrollReveal variant="fade-up" duration={0.9} delay={0.1} start="top 85%">
                  <div className="mb-6 flex items-center justify-between pb-3 border-b border-[#e2e0d2]">
                    <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#888888]">
                      {form.title}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#888888]">
                      {form.studioBadge}
                    </span>
                  </div>
                  <ContactForm />
                </ScrollReveal>
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
