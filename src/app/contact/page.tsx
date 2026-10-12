import type { Metadata } from "next";
import React from "react";
import Footer from "@/components/layout/Footer";
import ContactMap from "@/components/contact/ContactMap";
import ContactForm from "@/components/contact/ContactForm";
import LineReveal from "@/components/animations/LineReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { ArrowUpRight, Phone, MessageSquare, Mail, MapPin } from "lucide-react";
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
  const { eyebrow, headingLines, channels, map, form } = contactData;

  return (
    <main
      className="min-h-screen bg-[#fffef7] text-black overflow-x-clip selection:bg-[#ffd001] selection:text-black"
      style={{
        fontFamily: "'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <header className="section_contact pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-20 md:pb-24">
        <div className="w-full max-w-[105rem] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          
          {/* Page Intro Header */}
          <div className="max-w-4xl pb-8 sm:pb-12 border-b border-[#e2e0d2]">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-[#888888] font-medium mb-3 select-none">
              <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
              <span>{eyebrow}</span>
            </div>
            <LineReveal
              as="h1"
              className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.08] tracking-[-0.035em] text-black"
              lines={headingLines}
            />
          </div>

          {/* 2-Column Balanced Layout: Channels & Map Left, Form Right */}
          <div className="pt-10 sm:pt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-start">
            
            {/* LEFT COLUMN: Direct Channels + Location & Map */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              
              {/* Direct Contact Channels Box */}
              <div className="flex flex-col gap-4">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#888888] pb-2 border-b border-[#e2e0d2]">
                  Direct Admissions Channels
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                  {/* Phone */}
                  <a
                    href={channels.phone.href}
                    className="p-4 bg-white border border-[#e2e0d2] hover:border-black transition-colors flex items-center justify-between group no-underline"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#ffd001] text-black flex items-center justify-center shrink-0">
                        <Phone className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#888888]">
                          {channels.phone.label}
                        </span>
                        <span className="font-sans text-sm font-medium text-black">
                          {channels.phone.value}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#888888] group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={channels.whatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white border border-[#e2e0d2] hover:border-black transition-colors flex items-center justify-between group no-underline"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
                        <MessageSquare className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#888888]">
                          {channels.whatsapp.label}
                        </span>
                        <span className="font-sans text-sm font-medium text-black">
                          Chat on WhatsApp
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#888888] group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  {/* Email */}
                  <a
                    href={channels.email.href}
                    className="p-4 bg-white border border-[#e2e0d2] hover:border-black transition-colors flex items-center justify-between group no-underline sm:col-span-2 lg:col-span-1"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-black text-[#ffd001] flex items-center justify-center shrink-0">
                        <Mail className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#888888]">
                          {channels.email.label}
                        </span>
                        <span className="font-sans text-sm font-medium text-black truncate">
                          {channels.email.value}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#888888] group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  {/* Location Card */}
                  <div className="p-4 bg-white border border-[#e2e0d2] sm:col-span-2 lg:col-span-1 flex flex-col gap-2">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#f4f2e9] text-black flex items-center justify-center shrink-0 mt-0.5">
                        <MapPin className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#888888]">
                          {channels.location.label}
                        </span>
                        <span className="font-sans text-xs sm:text-sm text-black leading-relaxed">
                          {channels.location.value}
                        </span>
                      </div>
                    </div>

                    <a
                      href={channels.location.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-[#ca8a04] hover:text-black transition-colors pt-1 border-t border-[#f0eee3] self-start"
                    >
                      <span>Open in Google Maps</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Preview */}
              <div className="w-full">
                <ContactMap
                  locationName={map.locationName}
                  address={map.address}
                  mapsUrl={map.mapsUrl}
                />
              </div>

            </div>

            {/* RIGHT COLUMN: Streamlined Contact Form */}
            <div className="lg:col-span-7">
              <ScrollReveal variant="fade-up" duration={0.8}>
                <div className="bg-white p-6 sm:p-8 md:p-10 border border-[#e2e0d2]">
                  <div className="mb-6 flex items-center justify-between pb-3 border-b border-[#e2e0d2]">
                    <span className="font-mono text-xs uppercase tracking-[0.16em] text-black font-semibold">
                      {form.title}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#888888]">
                      {form.studioBadge}
                    </span>
                  </div>

                  <ContactForm />
                </div>
              </ScrollReveal>
            </div>

          </div>

        </div>
      </header>

      {/* 3. SITE FOOTER */}
      <Footer />
    </main>
  );
}
