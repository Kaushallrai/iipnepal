import Link from "next/link";
import { ArrowUpRight, Camera, Mail, MapPin, Phone, Users } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full bg-[var(--color-workshop-ivory)] border-t border-[var(--color-drafting-line)] text-[var(--color-charcoal-ink)] transition-colors">
      {/* Main Footer Content */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 pt-16 sm:pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
          {/* Column 1: Brand & Original Overview (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 group w-fit focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-iip-yellow)]"
              aria-label="IIP Nepal Homepage"
            >
              <div className="w-7 h-7 rounded-full bg-[var(--color-charcoal-ink)] text-[var(--color-paper-white)] flex items-center justify-center">
                <Camera className="w-3.5 h-3.5 text-[var(--color-iip-yellow)]" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-medium text-lg tracking-tight leading-none text-[var(--color-charcoal-ink)]">
                  IIP <span className="font-normal opacity-85">NEPAL</span>
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--color-quiet-graphite)] leading-tight mt-0.5">
                  Indian Institute of Photography
                </span>
              </div>
            </Link>

            <p className="font-sans text-[14px] leading-relaxed text-[var(--color-quiet-graphite)] max-w-sm">
              Official regional partner in Nepal, led by IIP alumnus Additya Shrestha. Offering short-term courses, weekend workshops, and diploma programs to develop creative and technical photography skills.
            </p>

            <div className="pt-1">
              <a
                href="https://www.iipfoundationindia.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[var(--color-faded-graphite)] uppercase tracking-[0.2px] hover:text-[var(--color-charcoal-ink)] transition-colors"
              >
                <span>Affiliated with IIP Foundation India</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-charcoal-ink)] font-medium">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2 font-sans text-[14px] text-[var(--color-quiet-graphite)]">
              <li>
                <Link href="/" className="hover:text-[var(--color-charcoal-ink)] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-[var(--color-charcoal-ink)] transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-[var(--color-charcoal-ink)] transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[var(--color-charcoal-ink)] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[var(--color-charcoal-ink)] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/enroll"
                  className="inline-flex items-center gap-1 font-medium text-[var(--color-charcoal-ink)] hover:text-black transition-colors"
                >
                  Register Online
                  <ArrowUpRight className="w-3 h-3 text-[var(--color-iip-yellow)]" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Original Courses at Kathmandu Centre (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-charcoal-ink)] font-medium">
              Kathmandu Centre Courses
            </h3>
            <ul className="flex flex-col gap-2 font-sans text-[13.5px] text-[var(--color-quiet-graphite)]">
              <li>
                <Link href="/courses/mobile-photography-course" className="hover:text-[var(--color-charcoal-ink)] transition-colors">
                  Online Mobile Photography (1 Mo)
                </Link>
              </li>
              <li>
                <Link href="/courses/beginners-course" className="hover:text-[var(--color-charcoal-ink)] transition-colors">
                  1-Month Online Basic Course
                </Link>
              </li>
              <li>
                <Link href="/courses/foundation-course" className="hover:text-[var(--color-charcoal-ink)] transition-colors">
                  3-Month Online Foundation Course
                </Link>
              </li>
              <li>
                <Link href="/courses/pro-level-foundation-photography-course" className="hover:text-[var(--color-charcoal-ink)] transition-colors">
                  Pro Level Foundation (Mentor-led)
                </Link>
              </li>
              <li>
                <Link href="/courses/pro-level-advanced-photography-course" className="hover:text-[var(--color-charcoal-ink)] transition-colors">
                  Pro Level Advanced (6 Months)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Kathmandu Contact & Faculty Mentors (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-charcoal-ink)] font-medium">
              Contact & Mentors
            </h3>
            <ul className="flex flex-col gap-2.5 font-sans text-[13.5px] text-[var(--color-quiet-graphite)]">
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
                <a href="tel:+9779802364760" className="hover:text-[var(--color-charcoal-ink)] transition-colors">
                  +977 9802364760
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[var(--color-charcoal-ink)] shrink-0" aria-hidden="true" />
                <a href="mailto:info@iipnepal.com" className="hover:text-[var(--color-charcoal-ink)] transition-colors">
                  info@iipnepal.com
                </a>
              </li>
              <li className="pt-1 flex flex-col gap-0.5 text-[11.5px] font-mono text-[var(--color-faded-graphite)]">
                <span className="flex items-center gap-1.5 text-[var(--color-quiet-graphite)]">
                  <Users className="w-3 h-3" aria-hidden="true" />
                  Mentors:
                </span>
                <span>Additya Shrestha (Lead)</span>
                <span>Jhaggu Roka · Kishor Shrestha</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-Footer Divider & Metadata */}
        <div className="pt-6 border-t border-[var(--color-drafting-line)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[11px] text-[var(--color-faded-graphite)] uppercase tracking-[0.15em] text-center sm:text-left">
            © {currentYear} Indian Institute of Photography Nepal. Official Regional Partner.
          </p>

          <div className="flex items-center gap-5 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-quiet-graphite)]">
            <Link href="/terms" className="hover:text-[var(--color-charcoal-ink)] transition-colors">
              Terms
            </Link>
            <span className="text-[var(--color-drafting-line)]" aria-hidden="true">
              ·
            </span>
            <Link href="/privacy" className="hover:text-[var(--color-charcoal-ink)] transition-colors">
              Privacy
            </Link>
            <span className="text-[var(--color-drafting-line)]" aria-hidden="true">
              ·
            </span>
            <Link href="/login" className="hover:text-[var(--color-charcoal-ink)] transition-colors">
              Portal Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
