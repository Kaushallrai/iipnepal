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

### [ ] Phase 2: Copy Hygiene & Taste Standards (Preserving Eyebrow Numbers)
- [ ] **Visible Copy Clean-up**:
  - [ ] Eliminate all en-dashes (`–`) and em-dashes (`—`) in visible user-facing copy (replace with periods, hyphens `-`, or commas).
  - [ ] Shorten wordy headlines (max 8 words) and sub-copy (max 25 words).
  - [ ] Standardize CTA labels by intent: `Enroll`, `Contact`, `View course`, `View story`, `View all`.
  - [ ] Ensure CTAs fit within 3 words and do not wrap on desktop.
- [ ] **AI Tells & Visual Clutter Removal**:
  - [ ] Remove badges/pills overlaid on raw photo emulsions (`100% ONLINE`, `20% off`, etc., moved to price/info blocks; retain number-preserving eyebrows like `COURSE 01`).
  - [ ] Replace generic step labels (`STAGE 01 // SELECTION`) with active verbs (`Choose`, `Practise`, `Get feedback`, `Graduate`) while keeping numbering intact (`01 Choose`, etc.).
  - [ ] Remove fake/decorative EXIF captions under images (keep clean functional credits, EXIF in lightbox).
  - [ ] Fix brand marquee: remove Magnum and National Geographic logos; relabel to "Cameras & optics we teach on".
  - [ ] Update news cards with explicit dates and links.
- [ ] **Verification**: Run `npm run build`.
- [ ] **Git Commit**: `Phase 2: Copy polish, action label unification, and brand trust cleanup`.

---

### [ ] Phase 3: Homepage (`/`) Optimization & Single DOM Architecture
- [ ] **Pinned vs Mobile Architecture**:
  - [ ] Refactor Courses and Portfolio sections to avoid duplicate DOM trees: single markup set, pinned scroll only at `lg:` (1024px+), mobile/tablet smooth snap swipe.
  - [ ] Honor `prefers-reduced-motion` cleanly across pinned ScrollTriggers.
- [ ] **Content & CTAs**:
  - [ ] Course slide actions: primary `View course` pill + clean `Enroll` link (drop "Curriculum→").
  - [ ] Simplify "What we do" section: 1 clear sentence followed by key statistics ("5 programmes" instead of repetitive claims).
  - [ ] Replace full home contact form with quick action strip (`Call`, `WhatsApp`, `Contact`) linking directly to `/contact`.
  - [ ] Verify WCAG AA contrast on hero CTAs against background media (soft scrim protection).
- [ ] **Verification**: Run `npm run build`.
- [ ] **Git Commit**: `Phase 3: Refactor home pinned sections to single DOM and optimize CTAs`.

---

### [ ] Phase 4: Courses Directory (`/courses`) & Course Details (`/courses/[slug]`)
- [ ] **Courses Directory (`/courses`)**:
  - [ ] Compact hero (display title ≤ 2 lines, ≤ 20 words sub-copy, numbered eyebrow preserved).
  - [ ] Horizontal scrollable filter pills on mobile.
  - [ ] Asymmetric masonry-style grid of course cards (varied image ratios, title 20px 300, 1-line outcome, duration & mode, price, single `View course` pill).
  - [ ] Desktop-only `Compare` toggle table (Duration, Mode, Camera, Price, Level).
- [ ] **Course Detail Page (`/courses/[slug]`)**:
  - [ ] Section 1: Hero (`pt-24`, split 7/5) with numbered level eyebrow, 4:5 cover photo, `Enroll` pill + `Contact` link.
  - [ ] Section 2: Navy Ink price band (the page's single dark field): duration, mode, hours/week, intake, price, struck old price, next intake, `Enroll` pill.
  - [ ] Section 3: Outcomes asymmetric 3-cell bento (large mint outcome card, image cell, cream cell).
  - [ ] Section 4: "How it works" 3 stacked steps (Learn, Shoot, Get feedback) + mentor feedback sample image.
  - [ ] Section 5: Syllabus with phase tabs on desktop/tablet (2-column modules), accordion on mobile. Shortened module titles.
  - [ ] Section 6: Student work snap row of 4 photos linked to portfolio stories.
  - [ ] Section 7: Details + FAQ (equipment, payment, refund clusters left; 4 course-specific FAQs right).
  - [ ] Section 8: Progression cards (previous & next course) + closing `Enroll` pill.
- [ ] **Verification**: Run `npm run build`.
- [ ] **Git Commit**: `Phase 4: Redesign courses directory and course detail pages with Navy price band and syllabus tabs`.

---

### [ ] Phase 5: Portfolio Archive (`/portfolio`) & Photo-First Story (`/portfolio/[slug]`)
- [ ] **Portfolio Archive (`/portfolio`)**:
  - [ ] Photo-first editorial layout: varied aspect ratios (4:5, 1:1, 3:2), title (20px 300), student name (14px Graphite).
  - [ ] 3-column desktop masonry (first story spans 2 columns), 2-column tablet, 1-column mobile.
  - [ ] Relocate director darkroom series to `/about` (keep student stories exclusively).
- [ ] **Portfolio Project Details (`/portfolio/[slug]`)**:
  - [ ] Section 1: Cover image band (85vh desktop, 70svh mobile) with location and title over scrim, back link.
  - [ ] Section 2: Intro (≤ 60 words) + 4-line credits block (student, place, year, course link).
  - [ ] Section 3: Photo story sequence (8-14 photos in rhythmic groups: full-bleed wide, 7/5 pair, centered portrait with caption, triptych).
  - [ ] Section 4: Voices block (artist statement with 3-line clamp + mentor evaluation line, names without dashes).
  - [ ] Section 5: Behind the shoot snap row.
  - [ ] Section 6: Photographer bio card + other stories.
  - [ ] Section 7: Next exhibition banner + `View course` link to their studied program.
  - [ ] Interactive swipeable lightbox for all photos.
- [ ] **Verification**: Run `npm run build`.
- [ ] **Git Commit**: `Phase 5: Redesign portfolio archive and photo-first project details with editorial rhythm and lightbox`.

---

### [ ] Phase 6: Admissions & Forms Optimization (`/enroll`, `/contact`, Footer)
- [ ] **Admissions Page (`/enroll`)**:
  - [ ] 3-step structured progression: 1) Choose course (selectable cards, pre-selected from `?course=`), 2) Your details, 3) Pay or confirm (eSewa, Khalti, bank transfer, centre).
  - [ ] Inline course summary on desktop right column / collapsed mobile card.
  - [ ] Accessible form states: empty, loading skeleton, field validation errors (WCAG AA), success confirmation.
- [ ] **Contact Page (`/contact`)**:
  - [ ] 2-column desktop layout (form left; address, hours, map right); stacked on mobile with map toggle.
  - [ ] Form contrast fix: use Graphite (`#666666`) border tokens instead of light ash.
  - [ ] Direct action pills: Call, WhatsApp, Email, Maps directions.
- [ ] **Architectural Footer**:
  - [ ] 4-column desktop layout (Brand + bio, Explore links, Contact + hours, Social channels).
  - [ ] Remove 3x repeated address strings; mobile contact-first actions + links.
  - [ ] Legal bottom row with Terms, Privacy, and copyright.
- [ ] **About Page (`/about`)**:
  - [ ] 2 stats instead of 4 (avoid home repetition); 3 pillars (Learn, Practise, Get feedback).
  - [ ] Staggered facilities photo composition (Print Lab, Studio B, Field Lab).
  - [ ] Team section featuring Additya Shrestha + darkroom heritage series.
- [ ] **Verification**: Run `npm run build`.
- [ ] **Git Commit**: `Phase 6: Optimize admissions flow, contact form contrast, about page, and footer architecture`.
