# IIP Nepal — Project State & Logic Map

> **Agent Instruction**: This is the LIVE state file. It tracks the logic architecture and the active context. It must be updated at the end of every task or custom developer change to reflect the current reality of the codebase.

## 1. Active Context & Current Task
* **Current Phase**: Phase 4 — Dynamic Routes & Data (`/courses`, `/courses/[slug]`, `/portfolio`, `/portfolio/[slug]`)
* **Primary Reference Site**: **Creative Giants** (`https://www.creativegiants.art/`)
* **Mandatory Directive**: **STRICT ORIGINAL CONTENT PRESERVATION (100% Verbatim)** — Retain all original text, titles, headings, course names, descriptions, fees, mission statements, and faculty mentors from `https://www.iipnepal.com/`. Do NOT rewrite or paraphrase original copy. ONLY add additional content if something is genuinely missing.
* **Style System (`docs/DESIGN.md` modeled directly on Creative Giants)**:
  - **Canvas**: Bone White `#fffef7` for cream paper sections, Deep Black `#0a0a0a` for flagship inverted showcases, closing CTA, and footer.
  - **Text**: Ink Black `#000000`, Graphite `#666666`, Ash `#aaaaaa`, Hairline `#e3e0d6`, Bone White on dark fields.
  - **Accents**: IIP Yellow `#ffc61a` (primary Enroll action), Mint Wash `#a5ebd6` (signature pastel chromatic card tint).
  - **Typography**: Bebas Neue (`--font-poster`) for colossal poster wordmarks (`IIP NEPAL`). Switzer / Inter single-family for editorial copy: weight 300 (`font-light`) for display and headlines (20px and up) with tight tracking (`-0.02em` to `-0.04em`), weight 400 for body/labels/buttons. **Never bold a heading (no weight 500+).**
  - **Architectural Swiss Grid**: Subtle 5-column vertical 1px hairline rules (`rgba(0,0,0,0.04)`) spanning down the viewport.
  - **Border Radii**: `0px` (sharp!) for all cards, photographs, frames, inputs, and editorial containers. `1440px` pill radius strictly for interactive buttons, pills, tags, and menu triggers.
  - **Button Padding**: Generous padding (`py-3.5 px-8` or `py-4 px-9`, min-height 48px–52px).
  - **Nomenclature**: ALWAYS use "Enroll", "Enroll Now", "Enrollment", "Enroll Online". NEVER use "Register" or "Registration".
  - **CTAs**: Use "Contact Us" buttons instead of raw telephone numbers inside button capsules.
  - **Mobile & Tablet Touch Snapping**: Courses and Portfolio sections feature horizontal swipe/snap carousels with arrow controls and category pills rather than endless vertical card stacks.
  - **Creative Giants Deep Black Editorial Footer**: Deep black (`#0a0a0a`) canvas with full-width link list rows with `↗` arrows, contact coordinates, "Enroll Now" and "Contact Us" pill buttons, and the colossal `IIP NEPAL` display wordmark running edge-to-edge across the bottom.
  - **Unique Photography**: Every card and section uses a distinct, authentic Kathmandu documentary photograph (no duplicate photos anywhere).

## 2. Logic & Function Map

### Configuration & Infrastructure
* **Styling (`src/app/globals.css`)**: Contains all Tailwind v4 `@theme` mappings and core CSS variables from `docs/DESIGN.md`: Bone White canvas, Ink Black, Hairline rules, Bebas Neue poster font, Switzer typography, 0px card/image radii, 1440px pill buttons.
* **Database Models (`prisma/schema.prisma`)**: Defines the data layer: `Course`, `PortfolioItem`, `EnrollmentLead`, `ContactMessage`.
* **Typography (`src/app/layout.tsx`)**: Configures and injects Next.js optimized fonts (`Bebas Neue` for colossal poster wordmarks, `Inter` for Switzer single-family 300 & 400 weights, `Fragment Mono` for technical labels). Includes architectural Swiss grid guidelines.

### Components & Layout
* **Global Navbar (`src/components/layout/navbar.tsx`)**: Sticky header with circular camera mark, tracking microtype, desktop navigation links, Yellow "Enroll" pill button, and Black "Menu" pill button with full-screen editorial overlay.
* **Hero Section (`src/components/home/hero-section.tsx`)**: Colossal condensed poster wordmark (`IIP NEPAL`) spanning edge-to-edge on cream paper, followed by full-bleed edge-to-edge Kathmandu documentary photo band with bottom-left location and light-weight statement overlay.
* **Why IIP Section (`src/components/home/why-iip-section.tsx`)**: Creative Giants "WHAT WE DO" layout with manifesto statement, 3 key metrics row (`13+`, `5,000+`, `100%`) with line icons, and 4 program pillars.
* **Flagship Feature Section (`src/components/home/flagship-feature-section.tsx`)**: Creative Giants signature inverted dark feature section (`FLAGSHIP PROGRAMME // 01`) in Deep Black with underlined tags, authentic film negative review photograph, and action pills.
* **Courses Preview Section (`src/components/home/courses-preview-section.tsx`)**: Sharp 0px card design with interactive filter tabs, 12px metadata, Mint Wash chromatic accent card, and responsive horizontal touch snap carousel for mobile/tablet with circular arrow controls.
* **Portfolio Teaser Section (`src/components/home/portfolio-teaser-section.tsx`)**: Sharp 0px editorial frames with 4 authentic, distinct Kathmandu photographs, and responsive horizontal snap carousel for mobile/tablet.
* **Admissions Process Section (`src/components/home/admissions-process-section.tsx`)**: Verbatim admissions process with "Enroll Online" button.
* **Closing CTA Section (`src/components/home/closing-cta-section.tsx`)**: Deep Black banner with weight-300 poster headline, "Enroll Now" pill, and "Contact Us" pill.
* **Global Footer (`src/components/layout/footer.tsx`)**: Creative Giants deep black footer with full-width link list rows with right-up arrows (`HOME ↗`, `COURSES ↗`), Kathmandu contact info, and colossal edge-to-edge bottom wordmark (`IIP NEPAL`).

## 3. Recent Changes Log
* **[2026-10-01]**: Complete Redesign Overhaul Modeled Directly on `https://www.creativegiants.art/`:
  - Verified and integrated the exact Creative Giants visual architecture: colossal display poster headline, full-bleed image band, architectural Swiss grid lines, 3-metric statistics row, inverted dark flagship showcase, mobile/tablet touch snap carousels, and deep black editorial footer with colossal bottom wordmark.
  - Injected `Bebas_Neue` (`font-poster`) via `src/app/layout.tsx` and `src/app/globals.css`.
  - Rebuilt `HeroSection` with colossal `IIP NEPAL` wordmark spanning edge-to-edge, location microtype, and dual action pills.
  - Created `FlagshipFeatureSection` (`FLAGSHIP PROGRAMME // 01`) featuring 1-Year Professional Diploma in Deep Black with verified custom documentary photograph (`public/images/flagship-mentor-darkroom.jpg`).
  - Redesigned `Footer` into Creative Giants' signature deep black experience with full-width link rows, `↗` arrows, contact coordinates, and colossal bottom poster wordmark.
  - Updated `docs/DESIGN.md`, `AGENTS.md`, and `project-state.md` with explicit Creative Giants blueprint documentation.
  - Verified with 0 TypeScript/build errors via `npm run build` and visual inspection in Playwright.
