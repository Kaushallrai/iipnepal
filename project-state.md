# IIP Nepal — Project Execution State

> **Quick Context for Agents**:
> This document tracks execution history, current progress, and immediate next steps. Update this file as tasks start and complete.

---

## 1. What Has Happened Till Now

### Completed Tasks
* **Task 1.1 — Next.js Foundation**: Initialized Next.js 16 (App Router) with TypeScript, React 19, and Tailwind CSS v4.
* **Task 1.2 — Design System & CSS Variables**: Configured `src/app/globals.css` with exact tokens from `docs/DESIGN.md` (Charcoal Ink `#1f1915`, Workshop Ivory `#f2efe9`, Drafting Line `#e6e3dd`, IIP Yellow `#ffc61a`, etc.) and `@theme` mappings.
* **Task 1.3 — Typography**: Configured `Geist` (sans) and `Fragment_Mono` (mono) in `src/app/layout.tsx` via `next/font/google`.
* **Task 1.4 — Database & Backend**:
  * Configured `prisma/schema.prisma` with `Course`, `PortfolioItem`, `EnrollmentLead`, and `ContactMessage`.
  * Created Prisma singleton client at `src/lib/prisma.ts`.
  * Created Supabase client at `src/lib/supabase.ts`.
* **Verification**: Production build verified (`npm run build` succeeds cleanly with 0 TypeScript/Turbopack errors).

---

## 2. What Is Currently Being Done

* **Active Phase**: Phase 2 — Global Layouts & Primitives
* **Active Task**: **Task 2.1 — Build the Global Navbar**
* **Status**: Awaiting confirmation / ready to build.
* **Scope & Requirements**:
  * **Layout**: Sticky 65px horizontal bar (`--nav-height: 65px`).
  * **Surfaces**: Workshop Ivory (`#f2efe9`) with `1px solid #e6e3dd` bottom border on light sections; transparent with low-contrast divider when overlaid on the home hero.
  * **Brand**: IIP Nepal logo/wordmark at far left.
  * **Links**: Fragment Mono 11px uppercase (`HOME`, `COURSES`, `PORTFOLIO`, `ABOUT`, `CONTACT`) with `+0.3px` tracking.
  * **Actions**: Far right plain `LOGIN` link and `#ffc61a` IIP Yellow Pill button for `ENROLL` (`#1f1915` text, 1440px radius).
  * **Mobile**: Responsive hamburger toggle opening an accessible full-screen ivory drawer with large Geist links and bottom CTA.

---

## 3. What To Do After

1. **Task 2.2 — Build the Global Footer**:
   * Editorial footer on Workshop Ivory with 1px top border.
   * Address: *Jyoti Bhawan, Kanti Path, Kathmandu 44600*.
   * Contact info: Phone `+977 9802364760`, email, legal links (`/terms`, `/privacy`), and "An Education Wing of IIP Foundation" credit.
2. **Task 2.3 — GSAP Provider / Motion Registry**:
   * Set up GSAP client wrapper for Next.js App Router for macro scroll reveals.
3. **Phase 3 — Home Page**:
   * Task 3.1: Hero Section (full-bleed dark documentary photograph, 120px Geist display headline, Dark Hero Glass Pill + Yellow Pill).
   * Task 3.2: Why IIP Section (4-column text-led grid, no heavy card borders).
   * Task 3.3: Course Previews Grid (3 course cards fetched from database).
   * Task 3.4: Portfolio Teaser (masonry preview with link to `/portfolio`).
   * Task 3.5: Closing CTA Band (`#1f1915` band with Yellow Pill).
4. **Phase 4 — Dynamic Routes**:
   * Courses directory (`/courses`) and course detail (`/courses/[slug]`).
   * Portfolio directory (`/portfolio`) and story detail (`/portfolio/[slug]`).
5. **Phase 5 — Forms & Integrations**:
   * 4-step progressive enrollment flow at `/enroll`.
   * Contact form at `/contact`.
6. **Phase 6 — Audit & Deployment**:
   * Impeccable accessibility & contrast audit.
   * Performance check and Vercel deployment.
