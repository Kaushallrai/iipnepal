# IIP Nepal — Project State & Logic Map

> **Agent Instruction**: This is the LIVE state file. It tracks the logic architecture and the active context. It must be updated at the end of every task or custom developer change to reflect the current reality of the codebase.

## 1. Active Context & Current Task
* **Current Phase**: Phase 4 — Dynamic Routes & Data (`/courses`, `/courses/[slug]`, `/portfolio`, `/portfolio/[slug]`)
* **Mandatory Directive**: **STRICT ORIGINAL CONTENT PRESERVATION (100% Verbatim)** — Retain all original text, titles, headings, course names, descriptions, fees, mission statements, and faculty mentors from `https://www.iipnepal.com/`. Do NOT rewrite or paraphrase original content. ONLY add additional content if something is genuinely missing.
* **Style System (`docs/DESIGN.md`)**:
  - **Canvas**: Bone White `#fffef7`.
  - **Text**: Ink Black `#000000`, Graphite `#666666`, Ash `#aaaaaa`, Hairline `#e3e0d6`.
  - **Accents**: IIP Yellow `#ffc61a` (primary Enroll action), Navy Ink `#101731` (closing CTA & dark hero base).
  - **Typography**: Switzer / Inter single-family. Weight 300 (`font-light`) for display and headlines (20px and up) with tight tracking (`-0.02em` to `-0.04em`), weight 400 for body/labels/buttons. **Never bold a heading (no weight 500+).**
  - **Border Radii**: `0px` (sharp!) for all cards, photographs, frames, inputs, and editorial containers. `1440px` pill radius strictly for interactive buttons, pills, tags, and menu triggers.
  - **Button Padding**: Generous padding (`py-3.5 px-7` or `py-4 px-8` / `px-9`, min-height 48px–52px).
  - **Nomenclature**: ALWAYS use "Enroll", "Enroll Now", "Enrollment", "Enroll Online". NEVER use "Register" or "Registration".
  - **CTAs**: Use "Contact Us" buttons instead of raw telephone numbers inside button capsules.
  - **Mobile & Tablet Touch Snapping**: Courses and Portfolio sections feature horizontal swipe/snap carousels with arrow controls and category pills rather than endless vertical card stacks.
  - **Decluttered Footer**: Clean, spacious 3-column footer on Bone White with 1px hairline divider, Contact Us pill, Enroll Online pill, and no duplicate clutter.
  - **Unique Photography**: Every card and section uses a distinct, authentic Kathmandu documentary photograph (no duplicate photos anywhere).

## 2. Logic & Function Map

### Configuration & Infrastructure
* **Styling (`src/app/globals.css`)**: Contains all Tailwind v4 `@theme` mappings and core CSS variables from `docs/DESIGN.md`: Bone White canvas, Ink Black, Hairline rules, Switzer typography, 0px card/image radii, 1440px pill buttons.
* **Database Models (`prisma/schema.prisma`)**: Defines the data layer: `Course`, `PortfolioItem`, `EnrollmentLead`, `ContactMessage`.
* **Typography (`src/app/layout.tsx`)**: Configures and injects Next.js optimized fonts (`Inter` for Switzer single-family 300 & 400 weights, `Fragment Mono` for technical labels).

### Components & Layout
* **Global Navbar (`src/components/layout/navbar.tsx`)**: Sticky header with transparent mode over dark hero and Bone White mode on scroll. Features "Enroll" yellow pill button with generous touch padding and responsive mobile menu.
* **Global Footer (`src/components/layout/footer.tsx`)**: Decluttered, serene editorial footer on Bone White with 1px hairline divider, "Contact Us" and "Enroll Online" buttons, clean navigation, and Kathmandu Centre contact info.
* **Hero Section (`src/components/home/hero-section.tsx`)**: Full-bleed documentary photography hero with weight-300 poster display headline ("Welcome to the IIP Centre Nepal!"), Yellow "Enroll Online" Pill with generous padding, and Glass "Explore Courses" Pill.
* **Why IIP Section (`src/components/home/why-iip-section.tsx`)**: 4-column differentiator grid with clean line icons, weight-300 headings, and whitespace separation.
* **Courses Preview Section (`src/components/home/courses-preview-section.tsx`)**: Sharp 0px card design with interactive filter tabs, 12px metadata, and responsive horizontal touch snap carousel for mobile/tablet with arrow controls.
* **Portfolio Teaser Section (`src/components/home/portfolio-teaser-section.tsx`)**: Sharp 0px editorial frames with authentic, distinct Kathmandu photographs, and responsive horizontal snap carousel for mobile/tablet.
* **Admissions Process Section (`src/components/home/admissions-process-section.tsx`)**: Verbatim 7-step admissions process with "Enroll Online" button.
* **Closing CTA Section (`src/components/home/closing-cta-section.tsx`)**: Navy Ink banner with weight-300 poster headline, "Enroll Now" pill, and "Contact Us" pill.

## 3. Recent Changes Log
* **[2026-10-01]**: Complete Design System & UX Realignment (per updated `docs/DESIGN.md`):
  - Rewrote and unified `docs/DESIGN.md` incorporating the art-book / oversized editorial poster system.
  - Updated `AGENTS.md` and `project-state.md` with strict rules: 0px sharp card/image corners, 1440px pill buttons with generous padding, "Enroll" instead of "Register", "Contact Us" instead of phone numbers on buttons, mobile/tablet horizontal snap carousels, and decluttered footer.
  - Updated `src/app/globals.css` with Bone White (`#fffef7`), Ink Black (`#000000`), Switzer single-family type, 0px card/image radii, 1440px button pills.
  - Updated `src/app/layout.tsx` to load Inter (300, 400) for Switzer font system.
  - Replaced "Register" with "Enroll" across all components (`Navbar`, `HeroSection`, `CoursesPreviewSection`, `AdmissionsProcessSection`, `ClosingCtaSection`, `Footer`).
  - Increased button padding across all interactive elements (`px-7 py-3.5` to `px-9 py-4`).
  - Decluttered `Footer` into an airy, elegant 3-column layout on Bone White with a "Contact Us" button.
  - Replaced raw phone number button in `ClosingCtaSection` with a "Contact Us" button.
  - Added horizontal swipe/snap carousels with arrow controls for tablet and mobile in `CoursesPreviewSection` and `PortfolioTeaserSection`.
  - Guaranteed 100% unique, distinct photography across all sections.
  - Verified with clean `npm run build` and Playwright visual testing across desktop (1440x900) and mobile (390x844).
