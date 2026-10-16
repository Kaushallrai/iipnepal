import type { Metadata } from "next";
import React from "react";
import Footer from "@/components/layout/Footer";
import ContactMap from "@/components/contact/ContactMap";
import ContactForm from "@/components/contact/ContactForm";
import LineReveal from "@/components/animations/LineReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";
import AboutCta from "@/components/about/AboutCta";
import { Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import { contactData } from "@/data/contact";

export const metadata: Metadata = {
  title: contactData.meta.title,
  description: contactData.meta.description,
  openGraph: {
    title: contactData.meta.title,
    description: contactData.meta.description,
    url: "https://iipnepal.com/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: contactData.meta.title,
    description: contactData.meta.description,
  },
};

export default function ContactPage(): React.JSX.Element {
  const { eyebrow, headingLines, subheading, channels, map, form } = contactData;

  return (
    <main
      className="min-h-screen bg-[#fffef7] text-black overflow-x-clip selection:bg-[#ffd001] selection:text-black"
      style={{
        fontFamily: "'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <div className="section_contact pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-20 sm:pb-24 md:pb-28 lg:pb-32">
        <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          
          {/* ============================================================ */}
          {/* 1. CLEAN EDITORIAL HEADER (NO BORDERS, AIRY SPACING)         */}
          {/* ============================================================ */}
          <div className="max-w-3xl mb-12 sm:mb-14 lg:mb-16">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-[#888888] font-medium mb-3 select-none">
              <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
              <span>{eyebrow}</span>
            </div>
            
            <LineReveal
              as="h1"
              className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.08] tracking-[-0.035em] text-black"
              lines={headingLines}
            />

            <p className="font-sans text-sm sm:text-base md:text-lg text-[#555555] font-normal leading-relaxed mt-4 max-w-xl">
              {subheading}
            </p>
          </div>

          {/* ============================================================ */}
          {/* 2. SIDE-BY-SIDE: MAP ON LEFT, FORM ON RIGHT (DESKTOP)        */}
          {/* ============================================================ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-start">
            
            {/* LEFT COLUMN: Map + Direct Contact Channels */}
            <ScrollReveal variant="fade-up" distance={24} duration={0.8} className="order-2 lg:order-1 lg:col-span-5 w-full flex flex-col space-y-6 sm:space-y-7">
              {/* Map View */}
              <ContactMap
                locationName={map.locationName}
                address={map.address}
                mapsUrl={map.mapsUrl}
              />

              {/* Direct Action Touchpoints (Clean 2x2 grid, no dividing lines) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                
                {/* Phone */}
                <a
                  href={channels.phone.href}
                  className="p-4 bg-[#faf9f3] hover:bg-[#f3f1e7] transition-colors flex flex-col justify-between group no-underline min-h-[92px]"
                  aria-label={`Call ${channels.phone.value}`}
                >
                  <div className="flex items-center justify-between text-[#888888] mb-1.5">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em]">
                      {channels.phone.label}
                    </span>
                    <Phone className="w-3.5 h-3.5 group-hover:text-black transition-colors" />
                  </div>
                  <div className="font-sans text-sm sm:text-[15px] font-medium text-black group-hover:text-[#ca8a04] transition-colors">
                    {channels.phone.value}
                  </div>
                  <div className="font-mono text-[10px] text-[#777777] mt-1">
                    {channels.phone.caption}
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={channels.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#faf9f3] hover:bg-[#f3f1e7] transition-colors flex flex-col justify-between group no-underline min-h-[92px]"
                  aria-label="Direct WhatsApp Chat"
                >
                  <div className="flex items-center justify-between text-[#888888] mb-1.5">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em]">
                      {channels.whatsapp.label}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#25D366] shadow-[0_0_6px_rgba(37,211,102,0.6)]" />
                  </div>
                  <div className="font-sans text-sm sm:text-[15px] font-medium text-black group-hover:text-[#128C7E] flex items-center justify-between transition-colors">
                    <span>{channels.whatsapp.value}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#888888] group-hover:text-[#128C7E] transition-colors" />
                  </div>
                  <div className="font-mono text-[10px] text-[#777777] mt-1">
                    {channels.whatsapp.caption}
                  </div>
                </a>

                {/* Email */}
                <a
                  href={channels.email.href}
                  className="p-4 bg-[#faf9f3] hover:bg-[#f3f1e7] transition-colors flex flex-col justify-between group no-underline min-h-[92px]"
                  aria-label="Send Email"
                >
                  <div className="flex items-center justify-between text-[#888888] mb-1.5">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em]">
                      {channels.email.label}
                    </span>
                    <Mail className="w-3.5 h-3.5 group-hover:text-black transition-colors" />
                  </div>
                  <div className="font-sans text-sm sm:text-[15px] font-medium text-black group-hover:text-[#ca8a04] transition-colors truncate">
                    {channels.email.value}
                  </div>
                  <div className="font-mono text-[10px] text-[#777777] mt-1">
                    {channels.email.caption}
                  </div>
                </a>

                {/* Studio Hours */}
                <div className="p-4 bg-[#faf9f3] flex flex-col justify-between min-h-[92px]">
                  <div className="flex items-center justify-between text-[#888888] mb-1.5">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em]">
                      {channels.hours.label}
                    </span>
                    <Clock className="w-3.5 h-3.5 text-[#888888]" />
                  </div>
                  <div className="font-sans text-sm sm:text-[15px] font-medium text-black">
                    {channels.hours.value}
                  </div>
                  <div className="font-mono text-[10px] text-[#777777] mt-1">
                    {channels.hours.caption}
                  </div>
                </div>

              </div>
            </ScrollReveal>

            {/* RIGHT COLUMN: Minimal Borderless Admissions Form */}
            <ScrollReveal variant="fade-up" distance={24} duration={0.8} delay={0.1} className="order-1 lg:order-2 lg:col-span-7 w-full flex flex-col">
              <div className="mb-6 sm:mb-8">
                <h2 className="font-sans font-light text-2xl sm:text-3xl text-black tracking-[-0.03em]">
                  {form.title}
                </h2>
                <p className="font-sans text-xs sm:text-sm text-[#666666] mt-1 max-w-lg">
                  {form.subtitle}
                </p>
              </div>

              {/* BORDERLESS FORM: Direct on canvas with zero card border */}
              <ContactForm />
            </ScrollReveal>

          </div>

        </div>
      </div>

      {/* ADMISSIONS & ENROLLMENT ACTION CTA */}
      <ScrollReveal variant="fade-up" distance={24} duration={0.8} className="w-full">
        <AboutCta />
      </ScrollReveal>

      {/* ARCHITECTURAL FOOTER */}
      <Footer />
    </main>
  );
}
