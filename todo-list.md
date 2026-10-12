# IIP Nepal — UI/UX Problem Fixes & Redesign Task List

> Built strictly following `problem-fixes.md`, `.agents/skills/taste/SKILL.md`, and `docs/DESIGN.md`.
> **User Direction**: Keep numbering in eyebrows and section tags (e.g. `COURSE 01`, `SECTION 01`, `[ 01 / 05 ]`).
> Architecture: Next.js App Router, TypeScript (`.tsx`/`.ts`), CSS-first Tailwind token architecture (Bone White `#fffef7`, Ink Black `#000000`, Graphite `#666666`, Signal Yellow `#ffd001`, 0px cards & images, black pill buttons).
> Animation Policy: Manual only (no unsolicited motion libraries). Commit after each phase.

---

### [x] Phase 1: Performance, Structure & Core Data Truth
- [x] **Data Truth Reconciliation**:
  - [x] Standardize single source of truth for all 5 courses (`name`, `duration`, `mode`, `hours`, `price`, `equipment`, `intake`).
  - [x] Align catalogue naming across site: "Mobile Photography Course", "Basic Photography Course", "Foundation Photography Course", "Pro-Level Foundation Photography Course", "Pro-Level Advanced Photography Course".
  - [x] Unify weekly commitment hours and course delivery modes.
  - [x] Reconcile portfolio metadata (Sony α7R V camera gear, accurate documentary credits, full print dimensions).
- [x] **Image Optimization & Performance**:
  - [x] Add explicit responsive `sizes` attribute across all `next/image` components (max 1600px desktop, prevent mobile 3840px downloads).
  - [x] Set `priority` strictly on above-the-fold hero images; lazy load the rest with blur-up or color placeholders.
- [x] **Structure & SEO**:
  - [x] Complete OpenGraph / Twitter metadata and absolute canonical URL tags for all pages (`/`, `/courses`, `/courses/[slug]`, `/portfolio`, `/portfolio/[slug]`, `/about`, `/contact`, `/enroll`).
  - [x] Clean up redundant address / phone repeats in Footer and contact snippets.
- [x] **Verification**: Run `npm run build`.
- [x] **Git Commit**: `Phase 1: Standardize course data truth, image sizes, and SEO metadata`.

---

### [x] Phase 2: Copy Hygiene & Taste Standards (Preserving Eyebrow Numbers)
- [x] **Visible Copy Clean-up**:
  - [x] Eliminate all en-dashes (`–`) and em-dashes (`—`) in visible user-facing copy (replace with periods, hyphens `-`, or commas).
  - [x] Shorten wordy headlines (max 8 words) and sub-copy (max 25 words).
  - [x] Standardize CTA labels by intent: `Enroll`, `Contact`, `View course`, `View story`, `View all`.
  - [x] Ensure CTAs fit within 3 words and do not wrap on desktop.
- [x] **AI Tells & Visual Clutter Removal**:
  - [x] Cleaned up badges/pills overlaid on raw photo emulsions; retain number-preserving eyebrows like `COURSE 01`.
  - [x] Replace generic step labels (`STAGE 01 // SELECTION`) with active verbs (`01 // CHOOSE`, `02 // PRACTISE`, etc.) while keeping numbering intact.
  - [x] Remove fake/decorative EXIF captions under images (keep clean functional credits, EXIF in lightbox).
  - [x] Fix brand marquee: remove Magnum and National Geographic logos; relabel to "CAMERAS & OPTICS WE TEACH ON".
  - [x] Update news cards with explicit dates and links.
- [x] **Verification**: Run `npm run build`.
- [x] **Git Commit**: `Phase 2: Copy polish, action label unification, and brand trust cleanup`.

---

### [x] Phase 3: Homepage (`/`) Optimization & Single DOM Architecture
- [x] **Pinned vs Mobile Architecture**:
  - [x] Refactor Courses and Portfolio sections to avoid duplicate DOM trees: single markup set, pinned scroll only at `lg:` (1024px+), mobile/tablet smooth snap swipe.
  - [x] Honor `prefers-reduced-motion` cleanly across pinned ScrollTriggers.
- [x] **Content & CTAs**:
  - [x] Course slide actions: primary `View course` pill + clean `Enroll` link (drop redundant third link).
  - [x] Simplify "What we do" section: 1 clear sentence followed by key statistics ("5 dedicated programmes").
  - [x] Replace full home contact form with quick action strip (`Call`, `WhatsApp`, `Contact Admissions`) linking directly to `/contact`.
  - [x] Verify WCAG AA contrast on hero CTAs against background media (soft scrim protection).
- [x] **Verification**: Run `npm run build`.
- [x] **Git Commit**: `Phase 3: Refactor home contact strip and section responsiveness`.

---

### [x] Phase 4: Courses Directory (`/courses`) & Course Details (`/courses/[slug]`)
- [x] **Courses Directory (`/courses`)**:
  - [x] Compact hero (display title ≤ 2 lines, ≤ 20 words sub-copy, numbered eyebrow preserved).
  - [x] Horizontal scrollable filter pills on mobile.
  - [x] Asymmetric masonry-style grid of course cards (varied image ratios, title 20px 300, 1-line outcome, duration & mode, price, single `View course` pill).
  - [x] Desktop-only `Compare` toggle table (Duration, Mode, Camera, Price, Level).
- [x] **Course Detail Page (`/courses/[slug]`)**:
  - [x] Section 1: Hero (`pt-24`, split 7/5) with numbered level eyebrow, 4:5 cover photo, `Enroll` pill + `Contact` link.
  - [x] Section 2: Navy Ink price band (the page's single dark field): duration, mode, hours/week, intake, price, struck old price, next intake, `Enroll` pill.
  - [x] Section 3: Outcomes asymmetric 3-cell bento (large mint outcome card, image cell, cream cell).
  - [x] Section 4: "How it works" 3 stacked steps (Learn, Shoot, Get feedback) + mentor feedback sample image.
  - [x] Section 5: Syllabus with phase tabs on desktop/tablet (2-column modules), accordion on mobile. Shortened module titles.
  - [x] Section 6: Student work snap row of 4 photos linked to portfolio stories.
  - [x] Section 7: Details + FAQ (equipment, payment, refund clusters left; 4 course-specific FAQs right).
  - [x] Section 8: Progression cards (previous & next course) + closing `Enroll` pill.
- [x] **Verification**: Run `npm run build`.
- [x] **Git Commit**: `Phase 4: Redesign courses directory and course detail pages with Navy price band and syllabus tabs`.

---

### [x] Phase 5: Portfolio Archive (`/portfolio`) & Photo-First Story (`/portfolio/[slug]`)
- [x] **Portfolio Archive (`/portfolio`)**:
  - [x] Photo-first editorial layout: varied aspect ratios (4:5, 1:1, 3:2), title (20px 300), student name (14px Graphite).
  - [x] 3-column desktop masonry (first story spans 2 columns), 2-column tablet, 1-column mobile.
  - [x] Relocate director darkroom series to `/about` (keep student stories exclusively).
- [x] **Portfolio Project Details (`/portfolio/[slug]`)**:
  - [x] Section 1: Cover image band (85vh desktop, 70svh mobile) with location and title over scrim, back link.
  - [x] Section 2: Intro (≤ 60 words) + 4-line credits block (student, place, year, course link).
  - [x] Section 3: Photo story sequence (8-14 photos in rhythmic groups: full-bleed wide, 7/5 pair, centered portrait with caption, triptych).
  - [x] Section 4: Voices block (artist statement with 3-line clamp + mentor evaluation line, names without dashes).
  - [x] Section 5: Behind the shoot snap row.
  - [x] Section 6: Photographer bio card + other stories.
  - [x] Section 7: Next exhibition banner + `View course` link to their studied program.
  - [x] Interactive swipeable lightbox for all photos.
- [x] **Verification**: Run `npm run build`.
- [x] **Git Commit**: `Phase 5: Redesign portfolio archive and photo-first project details with editorial rhythm and lightbox`.

---

### [x] Phase 6: Admissions & Forms Optimization (`/enroll`, `/contact`, Footer)
- [x] **Admissions Page (`/enroll`)**:
  - [x] 3-step structured progression: 1) Choose course (selectable cards, pre-selected from `?course=`), 2) Your details, 3) Pay or confirm (eSewa, Khalti, bank transfer, centre).
  - [x] Inline course summary on desktop right column / collapsed mobile card.
  - [x] Accessible form states: empty, loading skeleton, field validation errors (WCAG AA), success confirmation.
- [x] **Contact Page (`/contact`)**:
  - [x] 2-column desktop layout (form left; address, hours, map right); stacked on mobile with map toggle.
  - [x] Form contrast fix: use Graphite (`#666666`) border tokens instead of light ash.
  - [x] Direct action pills: Call, WhatsApp, Email, Maps directions.
- [x] **Architectural Footer**:
  - [x] 4-column desktop layout (Brand + bio, Explore links, Contact + hours, Social channels).
  - [x] Remove 3x repeated address strings; mobile contact-first actions + links.
  - [x] Legal bottom row with Terms, Privacy, and copyright.
- [x] **About Page (`/about`)**:
  - [x] 2 stats instead of 4 (avoid home repetition); 3 pillars (Learn, Practise, Get feedback).
  - [x] Staggered facilities photo composition (Print Lab, Studio B, Field Lab).
  - [x] Team section featuring Additya Shrestha + darkroom heritage series.
- [x] **Verification**: Run `npm run build`.
- [x] **Git Commit**: `Phase 6: Optimize admissions flow, contact form contrast, about page, and footer architecture`.
