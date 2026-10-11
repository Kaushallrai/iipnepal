# IIP Nepal — UI/UX Problem Fixes & Redesign Task List

> Based on `problem-fixes.md`, `.agents/skills/taste/SKILL.md`, and `docs/DESIGN.md`.
> Built with Next.js App Router, TypeScript, and CSS-first token architecture.
> Animation policy: Manual only (no automatic motion). Commits made after each phase.

---

### [x] Phase 1: Core Functionality, Missing Legal/FAQ Routes & Claim Reconciliation
- [x] Create dedicated `/terms` route with comprehensive terms for tuition, enrollment, cancellation, certificates, and student work rights.
- [x] Create dedicated `/privacy` route explaining data collection, contact forms, cookies, and student privacy rights.
- [x] Create dedicated `/faq` route with 5 core categories (Courses, Learning Format, Equipment, Fees & Enrollment, Certification) and expandable accordions.
- [x] Update `src/data/site.ts` to add separate `/terms`, `/privacy`, and `/faq` routes and fix `establishedYear` to `2011`.
- [x] Update `src/components/layout/Footer.tsx` with working links to Terms, Privacy, FAQ, and directory navigation.
- [x] Update `src/components/layout/Navbar.tsx` and mobile navigation drawer with complete links.
- [x] Reconcile factual claims across header, page transitions, and metadata: fix "Est. 2026" to "Est. 2011" (Kathmandu Centre established 2011, IIP heritage 14+ years).
- [x] Git Commit: Phase 1 complete.

---

### [x] Phase 2: Enrolment Page Streamlining & Form Optimization (`/enroll`)
- [x] Streamline `/enroll` layout into a clean, responsive 2-column view (course summary on left, application form on right; stacked on mobile).
- [x] Ensure automatic course pre-selection via `?course=slug` query parameter from all course buttons.
- [x] Build robust form with clean fields: Full Name, Phone, Email, Selected Course, Batch, Payment Method, and Optional Message.
- [x] Add active inline validation and accessible error states (WCAG AA contrast).
- [x] Include working links to `/terms` and `/privacy` in the agreement checkbox.
- [x] Implement clear, trustworthy confirmation state showing reference ID, selected course fee, and admissions follow-up protocol.
- [x] Git Commit: Phase 2 complete.

---

### [x] Phase 3: Courses Directory (`/courses`) & Course Details (`/courses/[slug]`)
- [x] **Courses Directory (`/courses`)**:
  - [x] Compact page intro ("Find your photography course" + 1 supporting line).
  - [x] Clear filter bar for Level (Beginner / Intermediate / Advanced / All) and Mode (Studio & In-person / Online).
  - [x] Photo-led course cards: course-specific authentic photo, title, level, duration, delivery mode, fee + discount badge, 1-sentence outcome, and "View Course" / "Enroll" actions.
  - [x] Distinguish Kathmandu in-person studio vs online modules.
  - [x] Short, punchy admissions CTA at page bottom.
- [x] **Course Details (`/courses/[slug]`)**:
  - [x] 01 Above-the-fold Hero: Course title, photo, level, duration, format, fee, and primary "Enroll Now" CTA.
  - [x] 02 Learning Outcomes: 3-4 concise skills with visual indicators.
  - [x] 03 Curriculum: Collapsible phase accordions (Foundations, Light & Technique, Field & Portfolio) replacing overwhelming flat lists.
  - [x] 04 Practical Learning: Genuine student work showcase and guided assignment details.
  - [x] 05 Decision & Enrollment: Equipment requirements, payment terms, and genuine FAQs (every question answered).
  - [x] Rename elaborate phrases (e.g., "Curricular Pathways // Alternate Tracks" -> "Related Courses").
- [x] Git Commit: Phase 3 complete.

---

### [x] Phase 4: Portfolio Archive (`/portfolio`) & Project Details (`/portfolio/[slug]`)
- [x] **Portfolio Archive (`/portfolio`)**:
  - [x] Concise editorial header + 1-sentence introduction.
  - [x] Functional category filters: All, Street, Landscape, Culture, Portraits, Darkroom.
  - [x] Asymmetric, gallery-like photographic grid with consistent borders and respectful aspect ratios.
  - [x] Concise captions: project title, photographer, location, and "Explore Story →" link (cut long text blocks).
- [x] **Portfolio Project Details (`/portfolio/[slug]`)**:
  - [x] Hero lead: Large photograph, project title, photographer, and location without technical clutter preceding the image.
  - [x] Photographic sequence: Archival plates with interactive fullscreen lightbox (keyboard navigation: Esc, Left, Right).
  - [x] Short project story: 2-3 sentences explaining concept and process.
  - [x] Collapsible / expandable panel for technical camera specifications (lens, sensor, chemistry, print edition).
  - [x] Course CTA bridging student work to relevant course track ("Master this craft").
- [x] Git Commit: Phase 4 complete.

---

### [x] Phase 5: About (`/about`) & Contact (`/contact`) Streamlining
- [x] **About Page (`/about`)**:
  - [x] 01 Our Story: "Photography Education in Kathmandu" — White Hat Events partnership, 14+ years IIP heritage, link to parent institute.
  - [x] 02 How We Teach: 3 clear visual blocks (Camera Optics, Guided Fieldwork, 1-on-1 Critique).
  - [x] 03 Meet the Mentor: Authentic portrait of Additya Shrestha (Studio Director), short bio, credentials.
  - [x] 04 Learning Environment: Studio lighting labs, analog darkroom, and field expeditions.
  - [x] 05 Student Work & Course Pathways: Featured student projects and direct course CTA.
  - [x] Clarify degree programs vs local certificate tracks: label international degree pathways as parent IIP affiliation.
- [x] **Contact Page (`/contact`)**:
  - [x] Balanced 2-column layout on desktop, stacked on mobile.
  - [x] Left: Direct channels (Call, WhatsApp direct link, Email, Google Maps directions).
  - [x] Right: Streamlined contact form with clear field validation and instant success state.
- [x] Git Commit: Phase 5 complete.

---

### [x] Phase 6: Homepage Consistency, Taste Audit, & Responsiveness Verification
- [x] Homepage (`/`):
  - [x] Preserve existing composition and pinned hero/sections.
  - [x] Condense "What we do" explanation to 1 clear sentence followed by key statistics.
  - [x] Verify all claims match (Est. 2011, catalogue alignment, pricing consistency).
- [x] Taste Audit (`taste.md` principles):
  - [x] Palette consistency: Bone White `#fffef7`, Ink Black `#000000`, Graphite `#666666`, Signal Yellow `#ffd001`.
  - [x] Typography: Switzer 300 display, 400 body/UI, tight letter-spacing on display.
  - [x] Buttons & Shapes: 1440px pill buttons, 0px sharp cards/images.
  - [x] WCAG AA contrast compliance on all interactive elements and forms.
  - [x] Mobile & tablet responsiveness check across all viewport sizes.
  - [x] Production build validation (`next build`).
- [x] Git Commit: Phase 6 complete.
