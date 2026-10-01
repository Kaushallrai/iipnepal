import Link from "next/link";
import { ArrowUpRight, Camera, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full bg-[var(--color-bone-white)] border-t border-[var(--color-hairline)] text-[var(--color-ink-black)]">
      {/* Editorial Decluttered Footer */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 pt-20 sm:pt-24 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 sm:mb-20">
          {/* Column 1: Brand & Action (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <Link
              href="/"
              className="inline-flex items-center gap-3 group w-fit focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-iip-yellow)]"
              aria-label="IIP Nepal Homepage"
            >
              <div className="w-7 h-7 rounded-full bg-[var(--color-ink-black)] text-[var(--color-bone-white)] flex items-center justify-center">
                <Camera className="w-3.5 h-3.5 text-[var(--color-iip-yellow)]" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-normal text-xl tracking-tight leading-none text-[var(--color-ink-black)]">
                  IIP <span className="font-light opacity-80">NEPAL</span>
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[var(--color-graphite)] leading-tight mt-1">
                  Indian Institute of Photography
                </span>
              </div>
            </Link>

            <p className="font-sans text-[15px] leading-relaxed text-[var(--color-graphite)] max-w-md">
              Official regional partner in Nepal, led by IIP alumnus Additya Shrestha. Developing creative vision and manual exposure mastery through darkroom discipline and Kathmandu fieldwork.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[var(--color-ink-black)] text-[var(--color-bone-white)] hover:bg-black/85 active:scale-[0.98] transition-all font-sans font-normal text-[14px] py-3.5 px-7 rounded-[1440px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-iip-yellow)]"
              >
                Contact Us
              </Link>
              <Link
                href="/enroll"
                className="inline-flex items-center justify-center bg-[var(--color-iip-yellow)] text-[var(--color-ink-black)] hover:bg-[#f5bc14] active:scale-[0.98] transition-all font-sans font-normal text-[14px] py-3.5 px-7 rounded-[1440px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ink-black)]"
              >
                Enroll Online
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-black)] font-medium">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3 font-sans text-[14.5px] text-[var(--color-graphite)]">
              <li>
                <Link href="/" className="hover:text-[var(--color-ink-black)] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-[var(--color-ink-black)] transition-colors">
                  Courses & Syllabi
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-[var(--color-ink-black)] transition-colors">
                  Student Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[var(--color-ink-black)] transition-colors">
                  About IIP
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[var(--color-ink-black)] transition-colors">
                  Contact & Campus
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Kathmandu Campus Contact (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-black)] font-medium">
              Kathmandu Centre
            </h3>
            <ul className="flex flex-col gap-3.5 font-sans text-[14px] text-[var(--color-graphite)]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[var(--color-ink-black)] shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  Jyoti Bhawan, Kanti Path,
                  <br />
                  Kathmandu 44600, Nepal
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[var(--color-ink-black)] shrink-0" aria-hidden="true" />
                <a href="tel:+9779802364760" className="hover:text-[var(--color-ink-black)] transition-colors">
                  +977 9802364760
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[var(--color-ink-black)] shrink-0" aria-hidden="true" />
                <a href="mailto:info@iipnepal.com" className="hover:text-[var(--color-ink-black)] transition-colors">
                  info@iipnepal.com
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://www.iipfoundationindia.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[var(--color-ash)] uppercase tracking-[0.2px] hover:text-[var(--color-ink-black)] transition-colors"
                >
                  <span>An Education Wing of IIP Foundation</span>
                  <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-Footer Divider & Metadata */}
        <div className="pt-8 border-t border-[var(--color-hairline)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[11px] text-[var(--color-graphite)] uppercase tracking-[0.18em] text-center sm:text-left">
            © {currentYear} Indian Institute of Photography Nepal. Official Regional Partner.
          </p>

          <div className="flex items-center gap-5 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-graphite)]">
            <Link href="/terms" className="hover:text-[var(--color-ink-black)] transition-colors">
              Terms
            </Link>
            <span className="text-[var(--color-hairline)]" aria-hidden="true">·</span>
            <Link href="/privacy" className="hover:text-[var(--color-ink-black)] transition-colors">
              Privacy
            </Link>
            <span className="text-[var(--color-hairline)]" aria-hidden="true">·</span>
            <Link href="/login" className="hover:text-[var(--color-ink-black)] transition-colors">
              Student Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
