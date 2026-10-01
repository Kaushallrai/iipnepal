# IIP Nepal — Project State & Logic Map

> **Agent Instruction**: This is the LIVE state file. It tracks the logic architecture and the active context. It must be updated at the end of every task or custom developer change to reflect the current reality of the codebase.

## 1. Active Context & Current Task
* **Current Phase**: Phase 3 — Home Page Implementation
* **Current Task**: **Task 3.4 — Portfolio Teaser (Masonry Layout)** (Pending execution)
* **Status**: Task 3.3 updated to showcase all 5 authentic courses with spacious editorial layouts (`max-w-[1440px]`, `px-6 to xl:px-24`, `py-24 to lg:py-40`). Awaiting developer confirmation to proceed with Task 3.4.
* **Layout & Spacing Standards**: To prevent a compact/cramped interface, all sections adhere to expansive editorial margins:
  * Maximum container width: `max-w-[1440px] mx-auto`.
  * Horizontal screen breathing room: `px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24`.
  * Section vertical breathing room: `py-24 sm:py-32 lg:py-40`.
* **Content Preservation Mandate**: All copy, course titles, mission statements, and faculty mentions MUST be preserved from the original website (`https://www.iipnepal.com/`). Additional editorial details are only added if genuinely missing.
* **Next Immediate Step**: Build the Student Portfolio Teaser section on Workshop Ivory `#f2efe9`:
  * Eyebrow Capsule (`STUDENT WORK · PORTFOLIO`), Geist 500 section title ("Student Works & Field Stories"), and a "View Portfolio →" link.
  * Editorial masonry grid with free-ratio photographic crops (8px radius, 16px gaps), Fragment Mono 11px uppercase captions (photographer, title, location), and subtle 1.03 scale hover state.

## 2. Logic & Function Map
*(This section maps where core logic, state, and functions reside to prevent redundant reading)*

### Configuration & Infrastructure
* **Styling (`src/app/globals.css`)**: Contains all Tailwind v4 `@theme` mappings and core CSS variables (colors, spacing, radii) imported directly from `docs/DESIGN.md`.
* **Database Models (`prisma/schema.prisma`)**: Defines the data layer: `Course`, `PortfolioItem`, `EnrollmentLead`, `ContactMessage`.
* **Typography (`src/app/layout.tsx`)**: Configures and injects Next.js optimized fonts (`Geist` for sans/display, `Fragment Mono` for technical text).

### Libs & Clients
* **Prisma Client (`src/lib/prisma.ts`)**: Singleton initialization of Prisma client for Next.js SSR/API routes.
* **Supabase Client (`src/lib/supabase.ts`)**: Initializes standard client and service-role client for direct BaaS queries/storage.
* **Utilities (`src/lib/utils.ts`)**: `cn()` utility combining `clsx` and `tailwind-merge`.
* **Courses Data (`src/lib/courses-data.ts`)**: Authentic dataset containing all 5 official IIP Nepal courses with unique Kathmandu photography assets.

### Components & Layout
* **Global Navbar (`src/components/layout/navbar.tsx`)**: 70px sticky bar with scroll-aware dual modes (transparent over dark hero, Workshop Ivory with Drafting Line border on light sections). Wide `max-w-[1440px]` container with generous responsive screen padding.
* **Global Footer (`src/components/layout/footer.tsx`)**: Expansive editorial footer on Workshop Ivory `#f2efe9` (`max-w-[1440px] px-6 to xl:px-24`). Contains Kathmandu campus address, telephone (+977 9802364760), faculty mentors (Additya Shrestha, Jhaggu Roka, Kishor Shrestha), authentic course links, and IIP Foundation India affiliation.
* **Hero Section (`src/components/home/hero-section.tsx`)**: Spacious photographic display hero on Charcoal Ink `#1f1915` with authentic Kathmandu documentary photography, original "Welcome to the IIP Centre Nepal" title, regional partnership notice with Additya Shrestha, Yellow "Register Online" Pill, and Glass "Courses Available" Pill.
* **Why IIP Section (`src/components/home/why-iip-section.tsx`)**: Expansive 4-column differentiator grid presenting the authentic mission statement ("Institute of National Importance in promoting Cultural and Creative Arts...") and official course pillars (Short-term, Foundation, Pro Advanced, Mentorship).
* **Course Previews Grid (`src/components/home/courses-preview-section.tsx`)**: Showcases all 5 authentic courses in a spacious responsive grid with 4:3 images, duration pills, and yellow-underline hover interactions.
* **Portfolio Teaser (`src/components/home/portfolio-teaser-section.tsx`)**: *(Pending Task 3.4)*.

### Animations & Motion (GSAP)
* **GSAP Registry (`src/components/animations/gsap-registry.tsx`)**: Safe client plugin registration for `ScrollTrigger` and `@gsap/react`, with global `prefers-reduced-motion` handling and trigger cleanup on unmount.
* **Scroll Reveal (`src/components/animations/scroll-reveal.tsx`)**: Reusable wrapper for editorial staggered scroll reveals (Y-axis translation + opacity fade, 0.4s–0.6s).

## 3. Recent Changes Log
* **[2026-10-01]**: Layout Spacing & Course Count Fix — Expanded `CoursesPreviewSection` to showcase all 5 authentic courses (instead of 3). Expanded horizontal screen margins (`max-w-[1440px]`, `px-6 to xl:px-24`) and vertical padding (`py-24 to lg:py-40`) across Navbar, Hero, WhyIip, CoursesPreview, and Footer to eliminate compact feel and provide generous breathing room.
* **[2026-10-01]**: Completed Task 3.3 — Generated authentic course photography assets, created `src/lib/courses-data.ts`, built `CoursesPreviewSection` in `src/components/home/courses-preview-section.tsx`, mounted on Home page, and verified build.
* **[2026-10-01]**: Content Realignment — Extracted full original content from `https://www.iipnepal.com/`. Updated `AGENTS.md` to enforce strict original content preservation. Updated `HeroSection`, `WhyIipSection`, and `Footer` with exact original headings, mission, team, and course titles.
* **[2026-10-01]**: Completed Task 3.2 — Built `WhyIipSection` in `src/components/home/why-iip-section.tsx`, mounted on Home page, and verified clean build.
* **[2026-10-01]**: Completed Task 3.1 — Created authentic Kathmandu documentary photography asset `public/images/hero-photographer.jpg`, built `HeroSection` in `src/components/home/hero-section.tsx`, mounted in `src/app/page.tsx`, and verified clean build.
* **[2026-10-01]**: Completed Task 2.3 — Installed `gsap`, `@gsap/react`, and `framer-motion`. Built `GsapRegistry` and `ScrollReveal` components in `src/components/animations/`, and integrated `GsapRegistry` into `src/app/layout.tsx`. Verified build.
* **[2026-10-01]**: Completed Task 2.2 — Built and integrated `Footer` in `src/components/layout/footer.tsx` and `src/app/layout.tsx`. Verified build.
* **[2026-10-01]**: Completed Task 2.1 — Built and integrated responsive `Navbar` in `src/components/layout/navbar.tsx` and `src/app/layout.tsx`. Installed `lucide-react`. Verified clean production build.
* **[2026-10-01]**: Project initialized (Next.js 16, Tailwind 4, Prisma).
