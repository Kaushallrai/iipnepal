import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/data/site";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Admission & Student Guidelines | IIP Nepal",
  description:
    "Official terms and conditions, admissions policies, tuition schedules, refund guidelines, and intellectual property rights at the Indian Institute of Photography Nepal.",
  openGraph: {
    title: "Terms of Admission & Student Guidelines | IIP Nepal",
    description:
      "Official admissions policies, tuition regulations, and student work rights for IIP Nepal photography courses.",
    url: "https://iipnepal.com/terms",
    type: "website",
  },
};

export default function TermsPage(): React.JSX.Element {
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
              <span>Institutional Governance // Kathmandu Centre</span>
            </div>
            
            <h1 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[58px] leading-[1.08] tracking-[-0.035em] text-black max-w-4xl">
              Terms of Admission & Student Guidelines.
            </h1>

            <p className="font-sans font-normal text-sm sm:text-base md:text-lg text-[#666666] max-w-3xl leading-relaxed">
              These guidelines define the relationship between students, applicants, and the Indian Institute of Photography Nepal (IIP Nepal), operated in partnership with White Hat Events at Jyoti Bhawan, Kanti Path, Kathmandu.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#888888] pt-2">
              <span>Effective Date: Academic Term 2026</span>
              <span>•</span>
              <span>Kathmandu Centre · Established 2011</span>
            </div>
          </div>

          {/* Main Legal Content (Clean reading column) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pt-12 sm:pt-16 items-start">
            
            {/* Table of Contents Sticky Sidebar */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col gap-4 p-6 bg-[#faf8ee] border border-[#e2e0d2]">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#888888] font-medium">
                Document Sections
              </span>
              <nav className="flex flex-col gap-2.5 font-mono text-xs">
                <a href="#admissions" className="text-[#444444] hover:text-black hover:underline transition-colors">
                  01. Admissions & Enrollment
                </a>
                <a href="#fees" className="text-[#444444] hover:text-black hover:underline transition-colors">
                  02. Tuition Fees & Payment Channels
                </a>
                <a href="#cancellation" className="text-[#444444] hover:text-black hover:underline transition-colors">
                  03. Cancellations & Refund Policy
                </a>
                <a href="#copyright" className="text-[#444444] hover:text-black hover:underline transition-colors">
                  04. Intellectual Property & Student Work
                </a>
                <a href="#studio" className="text-[#444444] hover:text-black hover:underline transition-colors">
                  05. Studio, Darkroom & Gear Guidelines
                </a>
                <a href="#certification" className="text-[#444444] hover:text-black hover:underline transition-colors">
                  06. Assessment & Certification
                </a>
                <a href="#contact-legal" className="text-[#444444] hover:text-black hover:underline transition-colors">
                  07. Inquiries & Administration
                </a>
              </nav>

              <div className="pt-4 border-t border-[#e2e0d2]">
                <Link
                  href="/enroll"
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-black font-semibold hover:underline"
                >
                  <span>Go to Admissions Registration</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </aside>

            {/* Structured Text Content */}
            <div className="lg:col-span-8 flex flex-col gap-12 sm:gap-16 max-w-[70ch]">
              
              {/* Section 1 */}
              <section id="admissions" className="flex flex-col gap-4">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#ca8a04] font-semibold">
                  Section 01
                </span>
                <h2 className="font-sans font-light text-2xl sm:text-3xl text-black tracking-[-0.03em]">
                  Admissions & Enrollment
                </h2>
                <div className="font-sans text-sm sm:text-base text-[#444444] leading-relaxed space-y-3.5">
                  <p>
                    Enrollment in IIP Nepal courses is open to applicants regardless of academic background. Admission is granted upon completion of the official registration form, submission of required identity verification, and payment of the designated tuition fee.
                  </p>
                  <p>
                    Certain advanced courses (e.g., Commercial Photography and Analog Darkroom Practice) may require a brief portfolio consultation or prerequisite review with faculty prior to seat confirmation to ensure proper skill alignment.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section id="fees" className="flex flex-col gap-4 pt-8 border-t border-[#e2e0d2]">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#ca8a04] font-semibold">
                  Section 02
                </span>
                <h2 className="font-sans font-light text-2xl sm:text-3xl text-black tracking-[-0.03em]">
                  Tuition Fees & Payment Channels
                </h2>
                <div className="font-sans text-sm sm:text-base text-[#444444] leading-relaxed space-y-3.5">
                  <p>
                    All tuition fees are stated in Nepalese Rupees (NPR) inclusive of standard curriculum materials and digital portal access. Advertised discounts or promotional offers are valid strictly within specified batch deadlines.
                  </p>
                  <p>
                    Accepted payment channels include:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-[#555555] font-mono">
                    <li>Digital wallets: eSewa, Khalti QR</li>
                    <li>Direct Bank Transfer: Nepal Investment Mega Bank (NIMB) / Nabil Bank</li>
                    <li>On-counter cash or card at Jyoti Bhawan, Kanti Path, Kathmandu</li>
                  </ul>
                  <p>
                    A student&apos;s enrollment is formally secured only once initial payment is confirmed by the IIP Nepal accounts desk.
                  </p>
                </div>
              </section>

              {/* Section 3 */}
              <section id="cancellation" className="flex flex-col gap-4 pt-8 border-t border-[#e2e0d2]">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#ca8a04] font-semibold">
                  Section 03
                </span>
                <h2 className="font-sans font-light text-2xl sm:text-3xl text-black tracking-[-0.03em]">
                  Cancellations & Refund Policy
                </h2>
                <div className="font-sans text-sm sm:text-base text-[#444444] leading-relaxed space-y-3.5">
                  <p>
                    We recognize that unexpected professional or personal circumstances occur. Our refund terms are designed to be equitable while protecting faculty scheduling and darkroom allocation:
                  </p>
                  <div className="p-4 bg-[#faf8ee] border border-[#e2e0d2] space-y-2 text-xs sm:text-sm font-sans text-[#333333]">
                    <p><strong>Notice 7+ days before batch commencement:</strong> Full refund of tuition minus an administrative processing fee of NPR 1,500.</p>
                    <p><strong>Notice 1 to 6 days before batch commencement:</strong> 70% refund of total tuition, or 100% transfer credit to a subsequent batch within 6 months.</p>
                    <p><strong>After batch commencement:</strong> Once course sessions begin, portal credentials are issued, and faculty mentorship is initialized, tuition fees are non-refundable.</p>
                  </div>
                  <p>
                    If IIP Nepal cancels a batch due to unforeseen operational causes, enrolled students will receive a 100% full refund immediately or priority placement in an alternative schedule.
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section id="copyright" className="flex flex-col gap-4 pt-8 border-t border-[#e2e0d2]">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#ca8a04] font-semibold">
                  Section 04
                </span>
                <h2 className="font-sans font-light text-2xl sm:text-3xl text-black tracking-[-0.03em]">
                  Intellectual Property & Student Work
                </h2>
                <div className="font-sans text-sm sm:text-base text-[#444444] leading-relaxed space-y-3.5">
                  <p>
                    <strong>Students retain 100% full copyright and ownership of all photographs, visual projects, and bodies of work created during their courses.</strong> IIP Nepal does not claim ownership over any student photography.
                  </p>
                  <p>
                    By submitting coursework and participating in student exhibitions, students grant IIP Nepal a non-exclusive, royalty-free license to feature selected images in the institute archive, website portfolio, exhibition catalogs, and social channels, always with prominent student photographer attribution.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section id="studio" className="flex flex-col gap-4 pt-8 border-t border-[#e2e0d2]">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#ca8a04] font-semibold">
                  Section 05
                </span>
                <h2 className="font-sans font-light text-2xl sm:text-3xl text-black tracking-[-0.03em]">
                  Studio, Darkroom & Gear Guidelines
                </h2>
                <div className="font-sans text-sm sm:text-base text-[#444444] leading-relaxed space-y-3.5">
                  <p>
                    Students accessing the studio strobe lab and analog darkroom at Jyoti Bhawan must follow all safety and equipment handling protocols demonstrated during orientation. Chemical handling in darkrooms requires mandatory adherence to lab ventilation and wash guidelines.
                  </p>
                  <p>
                    Students are responsible for their personal cameras, lenses, and memory cards. Studio strobes, modifiers, c-stands, and chemical enlargers provided by IIP Nepal remain institutional property and must be treated with professional care.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section id="certification" className="flex flex-col gap-4 pt-8 border-t border-[#e2e0d2]">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#ca8a04] font-semibold">
                  Section 06
                </span>
                <h2 className="font-sans font-light text-2xl sm:text-3xl text-black tracking-[-0.03em]">
                  Assessment & Certification
                </h2>
                <div className="font-sans text-sm sm:text-base text-[#444444] leading-relaxed space-y-3.5">
                  <p>
                    The official IIP Certificate of Completion is awarded upon fulfilling all course criteria:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-[#555555]">
                    <li>Minimum 80% attendance in scheduled lectures, labs, or online modules</li>
                    <li>Timely submission of all assigned field shooting briefs</li>
                    <li>Active participation in one-on-one mentor critique sessions</li>
                    <li>Completion and presentation of the final curated portfolio</li>
                  </ul>
                  <p>
                    Certificates are recognized by the Indian Institute of Photography network and alumni bodies across South Asia.
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section id="contact-legal" className="flex flex-col gap-4 pt-8 border-t border-[#e2e0d2]">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#ca8a04] font-semibold">
                  Section 07
                </span>
                <h2 className="font-sans font-light text-2xl sm:text-3xl text-black tracking-[-0.03em]">
                  Inquiries & Administration
                </h2>
                <div className="font-sans text-sm sm:text-base text-[#444444] leading-relaxed space-y-3.5">
                  <p>
                    For any questions regarding admissions terms, withdrawal petitions, or corporate group training agreements, contact our admissions office directly:
                  </p>
                  <div className="p-5 bg-white border border-[#e2e0d2] text-xs font-mono space-y-1.5">
                    <p className="text-black font-semibold">IIP NEPAL ADMISSIONS DESK</p>
                    <p className="text-[#666666]">Location: {siteConfig.contact.addressShort}</p>
                    <p className="text-[#666666]">Phone: {siteConfig.contact.phoneDisplay}</p>
                    <p className="text-[#666666]">Email: {siteConfig.contact.email}</p>
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
