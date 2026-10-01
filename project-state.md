# IIP Nepal — Project State & Context Manifest
> **Purpose**: This living document serves as the single source of truth for the codebase's current state, architecture, design tokens, data models, and roadmap. Any AI agent or developer can read this file to immediately understand the project without needing to read the entire workspace.

---

## 1. Project Overview & Brand Identity

* **Project**: Indian Institute of Photography Nepal (IIP Nepal) Website Redesign
* **Legacy Reference**: `https://www.iipnepal.com/`
* **Address / Authenticity**: Jyoti Bhawan, Kanti Path, Kathmandu 44600, Nepal | Phone: `+977 9802364760`
* **Core Metaphor & Tone**: *"A photography school in film grain."* Editorial, minimal, cinematic, modern. Bright ivory editorial sections framed around dark, human-scale documentary photography of students and their craft.
* **Content Rule**: Always write rich, authentic photography education copy (darkroom chemistry, manual exposure, studio lighting, Kathmandu field work). **Never use lorem ipsum or generic placeholders.**

---

## 2. Tech Stack & Configuration

| Layer | Technology | Version / Notes |
|---|---|---|
| **Framework** | Next.js (App Router) | `16.3.8` (TypeScript, React 19.2.8) |
| **Styling** | Tailwind CSS | v4 (`@import "tailwindcss";` + `@theme` in `globals.css`) |
| **Database / ORM** | Prisma + PostgreSQL | Prisma `6.19.3` connected to Supabase |
| **Icons** | Lucide React | Tiny monochrome/graphite 16–20px line icons |
| **Motion** | GSAP + Framer Motion | GSAP for macro scroll; Framer/CSS for micro-interactions |
| **Fonts** | Geist & Fragment Mono | Loaded via `next/font/google` in `src/app/layout.tsx` |

---

## 3. Design System & Tokens (`docs/DESIGN.md`)

### Color Palette
* **Charcoal Ink** (`#1f1915` | `var(--color-charcoal-ink)`): Primary typography, dark hero overlays, dark bands, logo.
* **Workshop Ivory** (`#f2efe9` | `var(--color-workshop-ivory)`): Default canvas background for all light editorial sections.
* **Paper White** (`#fffdf6` | `var(--color-paper-white)`): Warm text on dark imagery, light pill actions.
* **Studio White** (`#ffffff` | `var(--color-studio-white)`): Form fields, pill buttons, elevated surfaces.
* **Soft Paper** (`#f7f5f1` | `var(--color-soft-paper)`): Pale alternate surface, display headlines on dark backgrounds.
* **Drafting Line** (`#e6e3dd` | `var(--color-drafting-line)`): 1px hairline borders, card fills, and dividers. No drop shadows.
* **Quiet Graphite** (`#6b6661` | `var(--color-quiet-graphite)`): Secondary body text.
* **Faded Graphite** (`#8d8883` | `var(--color-faded-graphite)`): Tertiary metadata, status text, icons.
* **IIP Yellow** (`#ffc61a` | `var(--color-iip-yellow)`): Primary conversion accent ("Enroll" pills, tag chips, active markers). **Always paired with Charcoal Ink text (`#1f1915`). Never used for large background fills or body text.**

### Typography
* **Primary Editorial**: `Geist` (Weights: 400, 500)
  * Hero Display: `400` @ 120px desktop (52px mobile), line-height 0.93, letter-spacing `-8.04px`.
  * Page Title: `400` @ 72px desktop (40px mobile), letter-spacing `-3px`.
  * Section Title: `500` @ 40px desktop (28px mobile), letter-spacing `-1.2px`.
  * Card Title: `500` @ 24px desktop (20px mobile), letter-spacing `-0.5px`.
  * Body: `400` @ 16px desktop (15px mobile), line-height 1.6.
* **Technical Monospace**: `Fragment Mono` (Weights: 400)
  * Navigation, labels, and course metadata: `11px`, line-height 1.5, uppercase with `+0.3px` tracking.

### Shapes & Elevation
* **Buttons**: `1440px` pill radius.
* **Cards & Media Frames**: `16px` radius (`8px` for inner images).
* **Inputs**: `12px` radius, 48px height.
* **Elevation**: Zero drop shadows. Visual depth is created strictly by surface shifts (`#f2efe9` → `#ffffff` → `#e6e3dd`) and `1px solid #e6e3dd` hairlines.

---

## 4. Database Schema (`prisma/schema.prisma`)

1. **`Course`** (`courses` table)
   * `id`, `slug` (unique), `title`, `tagline`, `description`, `curriculum` (JSON), `duration`, `level`, `courseType`, `coverImage`, `featured` (bool).
   * Relations: `portfolioItems[]`, `enrollmentLeads[]`.
2. **`PortfolioItem`** (`portfolio_items` table)
   * `id`, `slug` (unique), `title`, `photographerName`, `description`, `coverImage`, `galleryImages` (text array), `featured` (bool), `year`, `courseId` (relation to `Course`).
3. **`EnrollmentLead`** (`enrollment_leads` table)
   * `id`, `studentName`, `email`, `phone`, `message`, `status` (`LeadStatus`: `PENDING`, `CONTACTED`, `ENROLLED`, `ARCHIVED`), `courseId` (relation to `Course`).
4. **`ContactMessage`** (`contact_messages` table)
   * `id`, `name`, `email`, `phone`, `subject`, `message`, `status` (`MessageStatus`: `UNREAD`, `READ`, `ARCHIVED`).

---

## 5. Route Architecture (`docs/BRIEF.md`)

```text
src/app/
├── layout.tsx             # Root layout with Geist & Fragment Mono fonts
├── globals.css            # Tailwind v4 directives & DESIGN.md CSS variables
├── page.tsx               # Home: Hero, Why IIP, Courses Preview, Student Work, About intro, Closing CTA
├── courses/
│   ├── page.tsx           # Course directory listing
│   └── [slug]/page.tsx    # Comprehensive course detail with sticky summary
├── portfolio/
│   ├── page.tsx           # Student work masonry grid
│   └── [slug]/page.tsx    # Single photography story / gallery
├── about/page.tsx         # Institute story, mission manifesto, inline faculty
├── contact/page.tsx       # Location, telephone, inquiry form
├── enroll/page.tsx        # 4-step progressive enrollment flow
├── login/page.tsx         # Minimalist student/staff login card
├── terms/page.tsx         # Plain editorial legal column
└── privacy/page.tsx       # Plain editorial legal column
```

---

## 6. Roadmap Execution Status (`ROADMAP.md`)

### Phase 1: Project Initialization & Architecture
- [x] **Task 1.1:** Initialize Next.js (App Router) project with TypeScript & Tailwind CSS.
- [x] **Task 1.2:** Configure `globals.css` with CSS Variables from `docs/DESIGN.md`.
- [x] **Task 1.3:** Configure custom fonts (`Geist` and `Fragment Mono`) in Next.js layout.
- [x] **Task 1.4:** Initialize Prisma schema for Courses & Portfolio, connected to Supabase.

### Phase 2: Global Layouts & Primitives *(CURRENT PHASE)*
- [ ] **Task 2.1: Build the Global Navbar.** *(NEXT TASK)*
  - 65px sticky bar, transparent over dark hero, Workshop Ivory with 1px border over light sections.
  - Fragment Mono uppercase navigation (`HOME`, `COURSES`, `PORTFOLIO`, `ABOUT`, `CONTACT`).
  - Far right: `LOGIN` text link and `#ffc61a` IIP Yellow Pill `ENROLL`.
  - Accessible mobile full-screen overlay menu.
- [ ] **Task 2.2: Build the Global Footer.**
- [ ] **Task 2.3: Initialize GSAP provider/registry.**

### Phase 3: Home Page Implementation
- [ ] **Task 3.1: Hero Section** (Display headline 120px, dark documentary photo, Dark Hero Glass Pill + Yellow Pill).
- [ ] **Task 3.2: Why IIP Section** (4-column grid, no card borders).
- [ ] **Task 3.3: Course Previews Grid** (Prisma DB fetch, 3-card layout).
- [ ] **Task 3.4: Portfolio Teaser** (Masonry student work preview).

### Phase 4: Dynamic Routes & Data
- [ ] **Task 4.1 & 4.2:** Courses directory and `[slug]` detail.
- [ ] **Task 4.3 & 4.4:** Portfolio directory and `[slug]` detail.

### Phase 5 & 6: Forms, Integrations & Final Polish
- [ ] Enroll form, contact form, Resend integration, Impeccable accessibility audit, deployment.

---

## 7. Operating Rules for Agents
1. **User Confirmation**: Always ask the user if to proceed before starting each task.
2. **Hierarchy of Truth**: `DESIGN.md` (visuals/tokens) > `BRIEF.md` (IA/routes) > `impeccable` (accessibility) > motion rules.
3. **Motion Separation**: GSAP for macro scroll reveals; Framer/CSS for micro-interactions. Never combine both on a single element.
4. **No Placeholders**: Write real, educational, authentic Kathmandu photography copy.
5. **Progress & Git**: Check off tasks in `ROADMAP.md` only after critique & polish; keep git commits structured per task.
