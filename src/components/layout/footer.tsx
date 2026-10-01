import Link from "next/link";
import { ArrowUpRight, Camera, Mail, MapPin, Phone, Users } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full bg-[var(--color-workshop-ivory)] border-t border-[var(--color-drafting-line)] text-[var(--color-charcoal-ink)] transition-colors">
      {/* Main Footer Content with Generous Screen Margins */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 pt-20 sm:pt-28 pb-14 sm:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-14 mb-16 sm:mb-20">
          {/* Column 1: Brand & Original Overview (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <Link
              href="/"
              className="inline-flex items-center gap-2 group w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-iip-yellow)] rounded-sm"
              aria-label="IIP Nepal Homepage"
            >
              <div className="w-7 h-7 rounded-full bg-[var(--color-charcoal-ink)] text-[var(--color-paper-white)] flex items-center justify-center">
                <Camera className="w-3.5 h-3.5 text-[var(--color-iip-yellow)]" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-medium text-xl tracking-tight leading-none text-[var(--color-charcoal-ink)]">
                  IIP <span className="font-normal opacity-85">NEPAL</span>
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--color-quiet-graphite)] leading-tight">
                  Indian Institute of Photography
                </span>
              </div>
            </Link>

            <p className="font-sans text-[14px] leading-relaxed text-[var(--color-quiet-graphite)] max-w-sm">
              Official regional partner in Nepal, led by IIP alumnus Additya Shrestha. Offering short-term courses, weekend workshops, and diploma programs to develop creative and technical photography skills.
            </p>

            {/* Accreditation Badge */}
            <div className="pt-2">
              <a
                href="https://www.iipfoundationindia.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-drafting-line)] bg-white/50 text-[11px] font-mono text-[var(--color-faded-graphite)] uppercase tracking-[0.3px] hover:text-[var(--color-charcoal-ink)] hover:border-[var(--color-charcoal-ink)]/30 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-iip-yellow)]" aria-hidden="true" />
                Affiliated with IIP Foundation India
                <ArrowUpRight className="w-3 h-3 opacity-60" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.3px] text-[var(--color-charcoal-ink)] font-medium">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5 font-sans text-[14px] text-[var(--color-quiet-graphite)]">
              <li>
                <Link
                  href="/"
                  className="hover:text-[var(--color-charcoal-ink)] transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="hover:text-[var(--color-charcoal-ink)] transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-[var(--color-charcoal-ink)] transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[var(--color-charcoal-ink)] transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[var(--color-charcoal-ink)] transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/enroll"
                  className="inline-flex items-center gap-1 font-medium text-[var(--color-charcoal-ink)] hover:text-black transition-colors"
                >
                  Register Online
                  <ArrowUpRight className="w-3.5 h-3.5 text-[var(--color-iip-yellow)]" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Original Courses at Kathmandu Centre (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.3px] text-[var(--color-charcoal-ink)] font-medium">
              Kathmandu Centre Courses
            </h3>
            <ul className="flex flex-col gap-2.5 font-sans text-[14px] text-[var(--color-quiet-graphite)]">
              <li>
                <Link
                  href="/courses/mobile-photography"
                  className="hover:text-[var(--color-charcoal-ink)] transition-colors"
                >
                  Online Mobile Photography (1 Mo)
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/basic-photography"
                  className="hover:text-[var(--color-charcoal-ink)] transition-colors"
                >
                  1-Month Online Basic Course
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/foundation-course"
                  className="hover:text-[var(--color-charcoal-ink)] transition-colors"
                >
                  3-Month Online Foundation Course
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/pro-level-foundation"
                  className="hover:text-[var(--color-charcoal-ink)] transition-colors"
                >
                  Pro Level Foundation (Mentor-led)
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/pro-level-advanced"
                  className="hover:text-[var(--color-charcoal-ink)] transition-colors"
                >
                  Pro Level Advanced (6 Months)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Kathmandu Contact & Faculty Mentors (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.3px] text-[var(--color-charcoal-ink)] font-medium">
              Contact & Mentors
            </h3>
            <ul className="flex flex-col gap-3 font-sans text-[14px] text-[var(--color-quiet-graphite)]">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[var(--color-charcoal-ink)] shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  Jyoti Bhawan, Kanti Path,
                  <br />
                  Kathmandu, Nepal
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[var(--color-charcoal-ink)] shrink-0" aria-hidden="true" />
                <a
                  href="tel:+9779802364760"
                  className="hover:text-[var(--color-charcoal-ink)] transition-colors"
                >
                  +977 9802364760
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[var(--color-charcoal-ink)] shrink-0" aria-hidden="true" />
                <a
                  href="mailto:info@iipnepal.com"
                  className="hover:text-[var(--color-charcoal-ink)] transition-colors"
                >
                  info@iipnepal.com
                </a>
              </li>
              <li className="pt-1 flex flex-col gap-1 text-[12px] font-mono text-[var(--color-faded-graphite)]">
                <span className="flex items-center gap-1.5 text-[var(--color-quiet-graphite)]">
                  <Users className="w-3.5 h-3.5" aria-hidden="true" />
                  Mentors & Team:
                </span>
                <span>Additya Shrestha (Lead)</span>
                <span>Jhaggu Roka · Kishor Shrestha</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-Footer Divider & Metadata */}
        <div className="pt-8 border-t border-[var(--color-drafting-line)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[11px] text-[var(--color-faded-graphite)] uppercase tracking-[0.2px] text-center sm:text-left">
            © {currentYear} Indian Institute of Photography Nepal. Official Regional Partner.
          </p>

          <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.3px] text-[var(--color-quiet-graphite)]">
            <Link
              href="/terms"
              className="hover:text-[var(--color-charcoal-ink)] transition-colors focus-visible:underline"
            >
              Terms of Service
            </Link>
            <span className="text-[var(--color-drafting-line)]" aria-hidden="true">
              ·
            </span>
            <Link
              href="/privacy"
              className="hover:text-[var(--color-charcoal-ink)] transition-colors focus-visible:underline"
            >
              Privacy Policy
            </Link>
            <span className="text-[var(--color-drafting-line)]" aria-hidden="true">
              ·
            </span>
            <Link
              href="/login"
              className="hover:text-[var(--color-charcoal-ink)] transition-colors focus-visible:underline"
            >
              Portal Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
