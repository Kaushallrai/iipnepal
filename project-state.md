# IIP Nepal — Project State & Logic Map

> **Agent Instruction**: This is the LIVE state file. It tracks the logic architecture and the active context. It must be updated at the end of every task or custom developer change to reflect the current reality of the codebase.

## 1. Active Context & Current Task
* **Current Phase**: Phase 3 — Home Page Implementation
* **Current Task**: **Task 3.3 — Course Previews Grid** (Pending execution)
* **Status**: Task 3.2 (Why IIP Section) completed. Awaiting developer confirmation to proceed with Task 3.3.
* **Next Immediate Step**: Build the Course Previews Grid on Workshop Ivory `#f2efe9`:
  * Fetch featured courses from Prisma database (`prisma.course.findMany({ where: { featured: true }, take: 3 })`) with fallback seed data if database is empty.
  * Three-column editorial grid matching `DESIGN.md` (Drafting Line `#e6e3dd` card fills, 16px radius, 12px padding, 4:3 course images with 8px radius, Fragment Mono metadata row, and "View course →" text link with yellow hover underline).
  * Section header with Eyebrow Capsule (`COURSES`), Geist 500 title, and an "Explore Courses →" action link.

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

### Components & Layout
* **Global Navbar (`src/components/layout/navbar.tsx`)**: 65px sticky bar with scroll-aware dual modes (transparent over dark hero, Workshop Ivory with Drafting Line border on light sections). Includes Fragment Mono uppercase links, Yellow "Enroll" pill, and accessible full-screen mobile menu drawer with body-scroll locking.
* **Global Footer (`src/components/layout/footer.tsx`)**: 1px Drafting Line bordered editorial footer on Workshop Ivory `#f2efe9`. Contains Jyoti Bhawan Kathmandu campus address, telephone, opening hours, curriculum links, legal links, and IIP Foundation attribution.
* **Hero Section (`src/components/home/hero-section.tsx`)**: Photographic display hero on Charcoal Ink `#1f1915` with authentic Kathmandu documentary photography, 120px Geist display typography, Dark Hero Glass Pill ("Explore Courses"), Yellow Pill ("Enroll at IIP"), and GSAP load-in animations.
* **Why IIP Section (`src/components/home/why-iip-section.tsx`)**: 4-column text-led differentiator grid on Workshop Ivory with optical physics, 1-on-1 critiques, Kathmandu expeditions, and curated gallery exhibitions.
* **Course Previews Grid (`src/components/home/courses-preview-section.tsx`)**: *(Pending Task 3.3)*.

### Animations & Motion (GSAP)
* **GSAP Registry (`src/components/animations/gsap-registry.tsx`)**: Safe client plugin registration for `ScrollTrigger` and `@gsap/react`, with global `prefers-reduced-motion` handling and trigger cleanup on unmount.
* **Scroll Reveal (`src/components/animations/scroll-reveal.tsx`)**: Reusable wrapper for editorial staggered scroll reveals (Y-axis translation + opacity fade, 0.4s–0.6s).

## 3. Recent Changes Log
* **[2026-10-01]**: Completed Task 3.2 — Built `WhyIipSection` in `src/components/home/why-iip-section.tsx`, mounted on Home page, and verified clean build.
* **[2026-10-01]**: Completed Task 3.1 — Created authentic Kathmandu documentary photography asset `public/images/hero-photographer.jpg`, built `HeroSection` in `src/components/home/hero-section.tsx`, mounted in `src/app/page.tsx`, and verified clean build.
* **[2026-10-01]**: Completed Task 2.3 — Installed `gsap`, `@gsap/react`, and `framer-motion`. Built `GsapRegistry` and `ScrollReveal` components in `src/components/animations/`, and integrated `GsapRegistry` into `src/app/layout.tsx`. Verified build.
* **[2026-10-01]**: Completed Task 2.2 — Built and integrated `Footer` in `src/components/layout/footer.tsx` and `src/app/layout.tsx`. Verified build.
* **[2026-10-01]**: Completed Task 2.1 — Built and integrated responsive `Navbar` in `src/components/layout/navbar.tsx` and `src/app/layout.tsx`. Installed `lucide-react`. Verified clean production build.
* **[2026-10-01]**: Project initialized (Next.js 16, Tailwind 4, Prisma).
