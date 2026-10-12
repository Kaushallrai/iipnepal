import type { Metadata } from "next";
import React from "react";
import Footer from "@/components/layout/Footer";
import ContactMap from "@/components/contact/ContactMap";
import ContactForm from "@/components/contact/ContactForm";
import LineReveal from "@/components/animations/LineReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Phone, MessageSquare, Mail, Navigation } from "lucide-react";
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
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-[#888888] font-semibold mb-3 select-none">
              <span className="w-2 h-2 rounded-full bg-[#ffd001] shadow-[0_0_8px_rgba(255,208,1,0.6)] shrink-0 inline-block" />
              <span>{eyebrow}</span>
            </div>
            <LineReveal
              as="h1"
              className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.08] tracking-[-0.035em] text-black"
              lines={headingLines}
            />
          </div>

          {/* 2-Column Desktop Layout: Form Left, Address / Hours / Map Right */}
          <div className="pt-10 sm:pt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-start">
            
            {/* LEFT COLUMN (7 cols): Admissions Inquiry Form */}
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

            {/* RIGHT COLUMN (5 cols): Direct Action Pills + Address + Hours + Map */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              
              {/* Direct Action Pills Row */}
              <div className="flex flex-col gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#888888] font-semibold pb-2 border-b border-[#e2e0d2]">
                  Direct Action Channels
                </span>

                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href={channels.phone.href}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#f4f2e9] hover:bg-[#ffd001] text-black font-mono text-xs uppercase tracking-[0.14em] font-semibold transition-all border border-[#e2e0d2] no-underline"
                    aria-label={`Call ${channels.phone.value}`}
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call</span>
                  </a>

                  <a
                    href={channels.whatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#f4f2e9] hover:bg-[#25D366] hover:text-white text-black font-mono text-xs uppercase tracking-[0.14em] font-semibold transition-all border border-[#e2e0d2] no-underline"
                    aria-label="WhatsApp"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={channels.email.href}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#f4f2e9] hover:bg-black hover:text-white text-black font-mono text-xs uppercase tracking-[0.14em] font-semibold transition-all border border-[#e2e0d2] no-underline"
                    aria-label="Email"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email</span>
                  </a>

                  <a
                    href={channels.location.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#f4f2e9] hover:bg-[#ffd001] text-black font-mono text-xs uppercase tracking-[0.14em] font-semibold transition-all border border-[#e2e0d2] no-underline"
                    aria-label="Directions"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Directions</span>
                  </a>
                </div>
              </div>

              {/* Studio Location & Hours Card */}
              <div className="bg-[#fdfcf5] border border-[#e2e0d2] p-6 sm:p-7 flex flex-col gap-5">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#888888] block mb-1">
                    Kathmandu Studio & Darkroom
                  </span>
                  <div className="font-sans font-medium text-base text-black">
                    Jyoti Bhawan, 1st Floor, Kanti Path, Kathmandu
                  </div>
                  <div className="font-mono text-xs text-[#666666] mt-0.5">
                    Near Jamal / Durbar Marg Intersection
                  </div>
                </div>

                <div className="pt-4 border-t border-[#ece9dc]">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#888888] block mb-1">
                    Studio & Admissions Hours
                  </span>
                  <div className="font-sans text-sm text-[#333333]">
                    Sunday - Friday: 10:00 AM - 5:00 PM
                  </div>
                  <div className="font-mono text-xs text-[#777777] mt-0.5">
                    Saturday: Closed for darkroom processing
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

          </div>

        </div>
      </header>

      {/* ARCHITECTURAL FOOTER */}
      <Footer />
    </main>
  );
}
