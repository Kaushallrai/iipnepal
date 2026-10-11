# IIP Nepal Website — Problem Fixes & Master UX Redesign Roadmap

> **Master Roadmap & Implementation Blueprint**
> Generated from in-depth re-analysis of `problem-fixes.md`, client directives, and `taste/SKILL.md` design engineering principles.
>
> **Core Client & Design Directives**:
> 1. **Strategic Text Reduction**: Cut marketing fluff ruthlessly. Hero subtext ≤ 20 words, quotes ≤ 3 lines, eliminate duplicate closing CTAs, collapse deep technical specs and syllabus modules behind accordions. Remove external degree catalogues (MFA, BFA, etc.) from the Nepal centre's sales flow.
> 2. **Visual-First (Add More Photos)**: Photography institute pages must be visual products. Generate unique, high-resolution photography assets across all 6 portfolio projects and Kathmandu studio/fieldwork sections. Eliminate duplicate placeholder image cycling.
> 3. **Comparison & Decision-Making**: Enable side-by-side comparison of all 5 courses (Level, Duration, Delivery Mode, Equipment, Fee, Outcome) without opening 5 tabs.
> 4. **Full Responsiveness Across All Screens**: Explicit mobile (<640px), tablet (768–1024px), and desktop (1024px+) layouts with `min-h-[100dvh]` viewport stability and touch-friendly controls.
> 5. **Execution Protocol**: Commit changes **after each phase**, not after every individual task. Skipped/deferred tasks (Legal/FAQ 1.4 and Pinned Usability 4.3) remain deferred for now as instructed.

---

## 📊 Phase Progress & Release Tracking

| Phase | Category | Scope | Status | Commit Checkpoint |
| :--- | :--- | :--- | :---: | :---: |
| **Phase 1** | Accuracy, Truth & Enrolment Flow | Pricing, unverified claims, intake dates, enrolment form fallback | Completed ✅ | `fix(phase-1): reconcile pricing, claims, and enrollment fallback` |
| **Phase 2** | Homepage Streamlining & Visual Elevation | Hero dual CTAs, What We Do metrics, pinned course integrity, How It Works 4 stages, clutter reduction | Completed ✅ | `feat(phase-2): streamline homepage content and visual elevation` |
| **Phase 3** | Course Architecture & Detail Pages | Collapsible syllabus modules, workload transparency, equipment reconciliation, duplicate CTA removal | Completed ✅ | `feat(phase-3): course detail collapsible syllabus and decision hierarchy` |
| **Phase 4** | Portfolio Showcase & Photo Generation | Unique gallery assets for all 6 projects, educational outcomes, collapsible technical specs | In Progress 🔄 | `feat(phase-4): unique portfolio photography assets and curatorial polish` |
| **Phase 5** | About Page Deep Reduction & Studio Photos | Remove external degree catalog, 3-step admissions, Kathmandu studio imagery, duplicate CTA cleanup | Ready 📋 | `feat(phase-5): streamline about page and add kathmandu studio imagery` |
| **Phase 6** | Cross-Device Responsive & Final Polish | Mobile/tablet/desktop verification, viewport stability, typography scales, build check | Ready 📋 | `chore(phase-6): responsive polish across all screens and build verification` |

---

## Phase 1: Accuracy, Truth & Enrolment Flow

*Focus: Eliminate conflicting numbers, remove unverified guarantees, ensure admissions enquiry works reliably.*

### [x] Task 1.1: Reconcile Course Pricing & Eliminate Promotional Discrepancies
- **Audit Findings**:
  - Homepage previously showed Pro Foundation at Rs. 32,000 (discounted from Rs. 56,000) and Pro Advanced at Rs. 44,800.
  - Actual approved fees: Pro Foundation is Rs. 26,800; Pro Advanced is Rs. 56,000.
  - Strikethrough fake promotional discounts confuse prospective students.
- **Actions Completed / Required**:
  - [x] Standardized Course 4 (Pro Foundation) in `src/data/home/courses.ts` and `src/data/courses/items.ts` to `payableFee: "Rs. 26,800"`.
  - [x] Standardized Course 5 (Pro Advanced) in `src/data/home/courses.ts` and `src/data/courses/items.ts` to `payableFee: "Rs. 56,000"`.
  - [x] Updated `CoursesSection.tsx` and detail pages to display strikethroughs only where a real verified discount exists.
- **Target Files**:
  - [courses.ts](file:///home/enviisage/Documents/iipnepal/src/data/home/courses.ts)
  - [items.ts](file:///home/enviisage/Documents/iipnepal/src/data/courses/items.ts)
  - [CoursesSection.tsx](file:///home/enviisage/Documents/iipnepal/src/components/home/CoursesSection.tsx)

### [x] Task 1.2: Enrolment Page (`/enroll`) Crawler Fallback & Form Transparency
- **Audit Findings**:
  - Headless crawler / SSR previously displayed stuck "Loading Admissions Dossier..." message.
  - Form wording did not explain whether submission is an instant booking, application, or fee enquiry.
  - Unverified "100% Satisfaction Guarantee" text present.
- **Actions Completed / Required**:
  - [x] Built semantic SSR `EnrollmentFallback` layout in `src/app/enroll/page.tsx` with headings, studio address, and contact lines so crawler never hangs on blank state.
  - [x] Pre-populated course selection cleanly from URL query parameters (`/enroll?course=...`).
  - [x] Updated submit CTA to `"SUBMIT ENROLMENT ENQUIRY"` with transparent notice that staff verify seat availability and provide payment details (eSewa / Khalti / Bank Transfer / Studio Desk).
  - [x] Replaced unverified "100% Satisfaction Guarantee" with academic policy note.
- **Target Files**:
  - [page.tsx](file:///home/enviisage/Documents/iipnepal/src/app/enroll/page.tsx)
  - [EnrollmentPageContent.tsx](file:///home/enviisage/Documents/iipnepal/src/components/enroll/EnrollmentPageContent.tsx)

### [x] Task 1.3: Clean Up Broken Prospectus Links & Unverified External URLs
- **Audit Findings**:
  - `ONLINE CATALOUGE 22.pdf` and `tsatschoolpdf.pdf` returned HTTP 404 on the live site.
- **Actions Completed / Required**:
  - [x] Replaced 404 PDF links with direct routing to `/courses` ("View Course Syllabi") and `/contact` ("Request Youth Prospectus").
  - [x] Maintained verified external IIP Prospectus link for academic reference.
- **Target Files**:
  - [prospectus.ts](file:///home/enviisage/Documents/iipnepal/src/data/about/prospectus.ts)
  - [AboutProspectus.tsx](file:///home/enviisage/Documents/iipnepal/src/components/about/AboutProspectus.tsx)

### [ ] Task 1.4: Legal Policies & FAQ Route Integrity
- **Status**: **DEFERRED** (Skipped for now per user instruction ⏸️)
- Footer combined "Terms & Privacy" and standalone `/faq` routes to be tackled in a future pass.

> **Phase 1 Commit Checkpoint**: `git commit -m "fix(phase-1): reconcile pricing, claims, and enrollment fallback"`

---

## Phase 2: Homepage Experience & Visual Elevation

*Focus: Strategic text reduction, photo additions, dual hero CTAs, side-by-side course comparison, and elimination of marketing clutter.*

### [x] Task 2.1: Hero Section Alignment & Dual Action CTAs
- **Audit Findings**:
  - Headline needs to immediately convey what students learn and how mentorship works.
  - Hero previously only had a single link `[ EXPLORE COURSES ]`.
  - Date inconsistency: header/preloader had "Est. 2026", while institute was established in 2011.
  - Intake label: "Intake 2026" causes confusion; courses offer rolling monthly intake.
- **Detailed Action Plan**:
  - [x] Updated headline and subtext in `src/data/home/hero.ts` adhering to `taste` skill limits:
    - Headline: `"LEARN PHOTOGRAPHY THROUGH GUIDED PRACTICE"` (≤ 2 lines desktop).
    - Subtext: `"Master your craft through structured assignments, field shooting briefs, and personal 1-on-1 mentor feedback at the IIP Kathmandu centre."` (19 words, ≤ 20 words).
  - [x] Added dual CTAs in `HeroReveal.tsx`:
    - Primary CTA: `[ EXPLORE COURSES ]` (`#courses`).
    - Secondary CTA: `Talk to Admissions →` (`/contact`).
  - [x] Standardized establishment date to `"EST. 2011"` across hero bottom bar, navbar, and site footer.
  - [x] Replaced leftover `"Intake 2026"` badges with `"Rolling Monthly Intakes"`.
- **Target Files**:
  - [hero.ts](file:///home/enviisage/Documents/iipnepal/src/data/home/hero.ts)
  - [HeroReveal.tsx](file:///home/enviisage/Documents/iipnepal/src/components/home/HeroReveal.tsx)
  - [Navbar.tsx](file:///home/enviisage/Documents/iipnepal/src/components/layout/Navbar.tsx)

### [x] Task 2.2: "What We Do" Text Reduction & Verified Institutional Metrics
- **Audit Findings**:
  - Long description of technical training repeats the same sales pitch.
  - Statistics must clarify IIP heritage (South Asia) vs. local Kathmandu practical learning.
- **Detailed Action Plan**:
  - [x] Condensed description in `src/data/home/what-we-do.ts` to a single scannable, punchy paragraph.
  - [x] Kept 3 clear reasons to choose IIP:
    - `14+ Years`: IIP photographic training heritage across South Asia.
    - `500+ Alumni`: Working across documentary, commercial, and editorial photography.
    - `100% Practical`: Studio lighting sessions, field shoots, and 1-on-1 mentor critiques.
- **Target Files**:
  - [what-we-do.ts](file:///home/enviisage/Documents/iipnepal/src/data/home/what-we-do.ts)
  - [WhatWeDo.tsx](file:///home/enviisage/Documents/iipnepal/src/components/home/WhatWeDo.tsx)

### [x] Task 2.3: Homepage Pinned Courses Section — Design Preserved, Content Accurate
- **Audit Findings**:
  - User explicitly directed: *"dont change the design of the pinned section on homepage"*.
  - Keep Polaroid, vertical rail, and course rows layout completely intact.
  - Fees reconciled (Rs. 26,800 and Rs. 56,000) and delivery modes accurate.
- **Detailed Action Plan**:
  - [x] Preserved the exact pinned Polaroid layout, vertical rail, and course list design in `CoursesSection.tsx`.
  - [x] Reconciled all course pricing and removed phantom discount strikes.
  - [x] Maintained smooth mobile Swiper peek carousel fallback.
- **Target Files**:
  - [CoursesSection.tsx](file:///home/enviisage/Documents/iipnepal/src/components/home/CoursesSection.tsx)
  - [courses.ts](file:///home/enviisage/Documents/iipnepal/src/data/home/courses.ts)

### [x] Task 2.4: "How Learning Works" — Reduce from Operational Manual to 4 Crisp Steps
- **Audit Findings**:
  - Previously had verbose paragraphs with unverified claims ("uploading your selected 5 best photographs per chapter", "accredited IIP certificate").
- **Detailed Action Plan**:
  - [x] Rewrote `src/data/home/how-it-works.ts` into 4 single-sentence stages:
    1. **Choose Your Course** — Select a programme that fits your camera experience, schedule, and creative photographic goals.
    2. **Learn & Practise** — Study core optical theory, examine real-world examples, and complete practical field shooting briefs.
    3. **Receive Feedback** — Submit your project work for individual mentor review, personalized critique, and improvement guidance.
    4. **Complete Your Course** — Finalize your coursework and portfolio to receive your verified IIP Course Certificate.
  - [x] Eliminated the confusing "5 photos per chapter" requirement.
- **Target Files**:
  - [how-it-works.ts](file:///home/enviisage/Documents/iipnepal/src/data/home/how-it-works.ts)
  - [HowItWorks.tsx](file:///home/enviisage/Documents/iipnepal/src/components/home/HowItWorks.tsx)

### [x] Task 2.5: Homepage Visual Asset Expansion & Clutter Reduction (Brands, Testimonials, News, Order)
- **Audit Findings**:
  - Brand marquee can be misinterpreted as corporate sponsors rather than camera tools.
  - Testimonials had director PR quote mixed in; quotes need to be ≤ 3 lines (`taste` rule).
  - News section had 6 generic cards; existing archive is essentially empty.
  - Duplicate closing CTA pitch in footer right after Contact form.
- **Detailed Action Plan**:
  - [x] Retained 3 concise student testimonials with specific course badges and verified outcomes (≤ 3 lines each). Removed director quote.
  - [x] Added clear creative tools eyebrow above Brand marquee: `"Creative Tools // Systems & Optics Mastered by Students"` to eliminate corporate sponsor confusion.
  - [x] Streamlined news items in `src/data/home/news.ts` to top 3 verified stories.
  - [x] Replaced duplicate footer CTA with practical studio visiting hours and admissions desk info.
- **Target Files**:
  - [page.tsx](file:///home/enviisage/Documents/iipnepal/src/app/page.tsx)
  - [testimonials.ts](file:///home/enviisage/Documents/iipnepal/src/data/home/testimonials.ts)
  - [TestimonialsSection.tsx](file:///home/enviisage/Documents/iipnepal/src/components/home/TestimonialsSection.tsx)
  - [news.ts](file:///home/enviisage/Documents/iipnepal/src/data/home/news.ts)
  - [BrandSection.tsx](file:///home/enviisage/Documents/iipnepal/src/components/home/BrandSection.tsx)

> **Phase 2 Commit Checkpoint**: `git commit -m "feat(phase-2): streamline homepage content, compare courses, add imagery"`

---

## Phase 3: Course Architecture & Detail Pages

*Focus: Collapsible syllabus modules, transparent workload, clear equipment prerequisites, standard taxonomy, and duplicate CTA removal.*

### [x] Task 3.1: Course Directory (`/courses`) Uniform Comparison Cards
- **Audit Findings**:
  - Directory described all 5 programmes as mentor-led in Kathmandu, hiding that some are online.
  - Course-level taxonomy inconsistent ("Foundation / Pro Level" vs "Pro Foundation").
  - Confusing "35MM ARCHIVE" stamp on cards.
- **Detailed Action Plan**:
  - [x] Ensured uniform card anatomy across all 5 courses:
    - Level Badge (`BEGINNER`, `FOUNDATION`, `PRO FOUNDATION`, `ADVANCED`).
    - Delivery Mode (`100% ONLINE`, `KATHMANDU STUDIO & HYBRID`, `STUDIO MASTERCLASS`).
    - Duration (`1 MONTH`, `3 MONTHS`, `6 MONTHS`).
    - Equipment Requirements (`Smartphone (iOS / Android)`, `DSLR or Mirrorless Camera`).
    - Tangible Key Outcome (1 concise sentence).
    - Payable Fee (with valid discount if verified).
    - Clear Action (`View Course Syllabus →`).
  - [x] Standardized filter chips to cleanly filter by level.
- **Target Files**:
  - [items.ts](file:///home/enviisage/Documents/iipnepal/src/data/courses/items.ts)
  - [CoursesList.tsx](file:///home/enviisage/Documents/iipnepal/src/components/courses/CoursesList.tsx)

### [x] Task 3.2: Course Detail Syllabus — Interactive Collapsible Module Groups
- **Audit Findings**:
  - In `CourseCurriculumSection.tsx`, syllabus was previously rendered as a flat list of 8–10 module items.
  - Prospective students need to scan the course first and expand module groups to see topics, rather than facing a wall of text.
- **Detailed Action Plan**:
  - [x] Re-engineered `CourseCurriculumSection.tsx` into scan-first expandable module accordions:
    - Grouped modules into 3 structured phases (*Phase 01: Foundations & Camera Craft*, *Phase 02: Light Direction, Exposure & Composition*, *Phase 03: Practical Field Briefs & Portfolio Review*).
    - Added "Expand All / Collapse All" toggle.
    - Each phase expands with smooth WAI-ARIA disclosure attributes (`aria-expanded`, search-indexed CSS grid height).
- **Target Files**:
  - [CourseCurriculumSection.tsx](file:///home/enviisage/Documents/iipnepal/src/components/courses/detail/CourseCurriculumSection.tsx)
  - [items.ts](file:///home/enviisage/Documents/iipnepal/src/data/courses/items.ts)

### [x] Task 3.3: Specific Program Fixes & Equipment Conflict Resolution
- **Audit Findings**:
  - **Mobile Photography**: had jargon ("professional camera controls", "mobile darkroom editing"). Needs familiar smartphone language.
  - **1-Month Basic**: contradictory equipment note (prerequisite said DSLR, FAQ suggested smartphone).
  - **3-Month Foundation**: distinction from 1-Month Basic was unclear; claims of "lifelong mentorship" unverified.
  - **Pro Foundation**: live critiques and commercial briefs need clear surfacing.
  - **Pro Advanced**: prerequisite baseline (prior portfolio or Foundation completion) and quarterly intake need explicit statement.
  - **Workload**: students submitting "5 photos per chapter" for 10 chapters = 50 photos in 1 month! Needs realistic weekly time commitment.
- **Detailed Action Plan**:
  - [x] In `src/data/courses/items.ts`, revised each course:
    - Mobile: Focused on smartphone camera settings, natural light, composition, and mobile editing apps (Lightroom Mobile, Snapseed). Replaced satisfaction guarantee FAQ with transparent academic policy.
    - Basic: Strictly specified DSLR or Mirrorless camera with manual mode; explicitly directed smartphone users to the Mobile course. Workload: 4–6 hrs/week.
    - Foundation: Emphasized deeper storytelling, visual essays, and guided portfolio development. Replaced accredited certificate claim with official IIP Certificate of Completion. Workload: 5–7 hrs/week.
    - Pro Foundation: Surfaced weekly live mentor sessions, studio lighting equipment, and commercial client simulation briefs. Workload: 6–8 hrs/week.
    - Pro Advanced: Specified prerequisite portfolio review or IIP Foundation completion. Surfaced studio masterclasses and exhibition curation. Workload: 8–10 hrs/week.
  - [x] In `CourseTuitionFaqSection.tsx`, replaced "accredited IIP certification" with "verified IIP Certificate of Completion".
- **Target Files**:
  - [items.ts](file:///home/enviisage/Documents/iipnepal/src/data/courses/items.ts)
  - [CourseEssentialsSection.tsx](file:///home/enviisage/Documents/iipnepal/src/components/courses/detail/CourseEssentialsSection.tsx)
  - [CourseTuitionFaqSection.tsx](file:///home/enviisage/Documents/iipnepal/src/components/courses/detail/CourseTuitionFaqSection.tsx)

### [x] Task 3.4: Remove Duplicate Closing CTA from Course Detail Pages
- **Audit Findings**:
  - `CourseDetailPage` had `CourseTuitionFaqSection` with pricing & Enroll CTA, followed by `CourseRelatedSection`, immediately followed by `CourseEnrollCta` ("Ready to Enroll in the ... ? Tuition ... 100% Satisfaction Guarantee").
  - Back-to-back near-identical CTAs violated `taste` skill rules and the audit recommendations.
- **Detailed Action Plan**:
  - [x] Removed duplicate `CourseEnrollCta` from `src/app/courses/[slug]/page.tsx`.
  - [x] Retained the primary authoritative enrolment card cleanly inside `CourseTuitionFaqSection`.
  - [x] Eliminated all lingering references to "100% Satisfaction Guarantee".
- **Target Files**:
  - [page.tsx](file:///home/enviisage/Documents/iipnepal/src/app/courses/%5Bslug%5D/page.tsx)
  - [CourseEnrollCta.tsx](file:///home/enviisage/Documents/iipnepal/src/components/courses/detail/CourseEnrollCta.tsx)

> **Phase 3 Commit Checkpoint**: `git commit -m "feat(phase-3): course detail collapsible syllabus and decision hierarchy"`

---

## Phase 4: Portfolio Showcase & Visual Gallery Expansion

*Focus: Client request for MORE PHOTOS! Generate authentic unique assets for all 6 projects, highlight educational outcomes, collapse technical spec sheets.*

### [ ] Task 4.1: Photo Generation & Unique Image Sets for All 6 Projects
- **Audit Findings**:
  - Current portfolio projects recycle the same 4 images (`portfolio-street.webp`, `portfolio-artisan.webp`, `portfolio-himalayas.webp`, `portfolio-devotee.webp`) repeatedly across all galleries!
  - Client explicitly said: *"client said to add more photos"*. A photography institute MUST showcase authentic, distinct photography for each project!
- **Detailed Action Plan**:
  - [ ] Use `generate_image` to create unique, realistic, documentary-grade photographic plates for each of the 6 projects:
    1. **The Living Market of Asan** (Dawn street commerce, spice vendors, morning light, narrow alleys).
    2. **Echoes of the High Himalayas** (Alpine mist, Annapurna peaks, glacial valleys, prayer flags).
    3. **Masters of Copper Repoussé** (Intimate Newari coppersmith portraits, chisels, hammer blows, Patan courtyard).
    4. **Devotion at Nyatapola Square** (Bhaktapur pagoda morning light, incense plumes, temple steps, devotees).
    5. **The Silver Chemistry: Darkroom Archive** (Red safelight enlarging, chemical developing trays, fiber-base prints drying, loupe inspection).
    6. **Monsoon Rhythms of Kathmandu** (Rain-slicked asphalt, neon reflections, umbrellas at New Road Gate, mobile street perspective).
  - [ ] Save assets to `public/images/portfolio/` with descriptive filenames and proper aspect ratios.
  - [ ] Update `src/data/portfolio/items.ts` so every project has 4 unique, curated gallery plates (24 unique photos total).
- **Target Files**:
  - `public/images/portfolio/*`
  - [items.ts](file:///home/enviisage/Documents/iipnepal/src/data/portfolio/items.ts)

### [ ] Task 4.2: Portfolio Directory (`/portfolio`) Visual Exploration & Outcomes
- **Audit Findings**:
  - Directory should make it easy to explore the actual photography without forcing visitors to read long walls of text.
- **Detailed Action Plan**:
  - [ ] Ensure `PortfolioRoster.tsx` prioritizes the photograph first.
  - [ ] Keep concise 1–2 sentence synopsis and visible "Skills Demonstrated" badges (`Low-Light Metering`, `Specular Highlight Management`, etc.).
  - [ ] Understated, elegant "Explore Exhibition →" link.
- **Target Files**:
  - [PortfolioRoster.tsx](file:///home/enviisage/Documents/iipnepal/src/components/portfolio/PortfolioRoster.tsx)

### [ ] Task 4.3: Project Detail Story — Collapse Technical Specs & Emphasize Learning Outcomes
- **Audit Findings**:
  - Long literary artist statements, lens models, shutter speeds, and print dimensions compete with the visual photography.
  - Prospective students care most about: *What did the student produce? What skills did they learn? Which course taught them?*
- **Detailed Action Plan**:
  - [ ] In `PortfolioDetailStory.tsx`:
    - Keep artist statement and mentor critique concise (first 2 punchy sentences).
    - Promote "What This Project Demonstrates" prominently with direct link to the corresponding course syllabus.
    - Place deep technical footprint (optics, sensor size, exposure, print edition) and field notes inside an elegant expandable accordion disclosure so enthusiasts can inspect details without cluttering the page.
  - [ ] In `PortfolioDetailGallery.tsx`:
    - Ensure responsive photo grid and fullscreen lightbox navigate seamlessly with keyboard and touch swipe.
- **Target Files**:
  - [PortfolioDetailStory.tsx](file:///home/enviisage/Documents/iipnepal/src/components/portfolio/detail/PortfolioDetailStory.tsx)
  - [PortfolioDetailGallery.tsx](file:///home/enviisage/Documents/iipnepal/src/components/portfolio/detail/PortfolioDetailGallery.tsx)

> **Phase 4 Commit Checkpoint**: `git commit -m "feat(phase-4): unique portfolio photography assets and curatorial polish"`

---

## Phase 5: About Page Deep Reduction & Studio Photos

*Focus: Audit highlighted About page as the largest content-reduction opportunity. Remove external degree catalogue, consolidate admissions to 3 steps, add Kathmandu studio photos, remove duplicate CTAs.*

### [ ] Task 5.1: Remove External Degree & Diploma Catalogues from Nepal Sales Journey
- **Audit Findings**:
  - About page lists MFA, BFA, DDPC, OPDP, and TeenSchool prospectuses.
  - None of these are offered among the 5 courses in Nepal. Advertising them distorts the Nepal centre's offerings and creates confusion.
- **Detailed Action Plan**:
  - [ ] In `src/data/about/prospectus.ts` and `AboutProspectus.tsx`:
    - Remove the multi-card degree catalogue (MFA, BFA, DDPC, OPDP).
    - Replace with a concise, elegant **"IIP Academic Affiliation & Higher Education"** note:
      - Explains IIP Nepal's official relationship with the Indian Institute of Photography.
      - Provides a single clear link for students seeking multi-year degree programmes in India.
    - Keeps the main focus 100% on the local Kathmandu certificate and foundation tracks.
- **Target Files**:
  - [prospectus.ts](file:///home/enviisage/Documents/iipnepal/src/data/about/prospectus.ts)
  - [AboutProspectus.tsx](file:///home/enviisage/Documents/iipnepal/src/components/about/AboutProspectus.tsx)

### [ ] Task 5.2: Streamline Admissions Journey to 3 Realistic Steps
- **Audit Findings**:
  - Previous 7-step playbook included "Studio Clearance", "Tuition Planning", and "Portfolio Assessment" that don't match the online/studio registration flow.
- **Detailed Action Plan**:
  - [ ] Confirm `src/data/about/admissions.ts` reflects the 3 real steps:
    1. **Select Your Course & Inquire** — Review course tracks and submit an online enquiry.
    2. **Advisory Consultation & Registration** — Speak with an admissions advisor regarding camera gear, course schedules, and registration.
    3. **Enrolment & Mentor Onboarding** — Confirm seat, receive student portal credentials, and meet your mentor.
  - [ ] Ensure `AboutHowItWorks.tsx` renders this cleanly without unverified darkroom accreditation claims.
- **Target Files**:
  - [admissions.ts](file:///home/enviisage/Documents/iipnepal/src/data/about/admissions.ts)
  - [AboutHowItWorks.tsx](file:///home/enviisage/Documents/iipnepal/src/components/about/AboutHowItWorks.tsx)

### [ ] Task 5.3: Add Authentic Kathmandu Studio & Workshop Imagery to About Page
- **Audit Findings**:
  - Client requested MORE PHOTOS! About page currently only has one photo of director Additya Shrestha.
  - Prospective students need to see the Kathmandu physical centre, studio lighting setups, and practical workshop environment.
- **Detailed Action Plan**:
  - [ ] Generate authentic photographic assets for the Kathmandu studio (lighting strobes, studio critique session, camera gear workshop) using `generate_image`.
  - [ ] Embed visual gallery or studio feature block in `AboutPage` showing where students learn.
- **Target Files**:
  - `public/images/about/*`
  - [AboutLeadership.tsx](file:///home/enviisage/Documents/iipnepal/src/components/about/AboutLeadership.tsx)
  - [page.tsx](file:///home/enviisage/Documents/iipnepal/src/app/about/page.tsx)

### [ ] Task 5.4: Eliminate Duplicate Closing CTA on About Page
- **Audit Findings**:
  - `AboutPage` currently renders `AboutHowItWorks` (admissions), followed by `AboutProspectus`, followed by `AboutCta` (admissions sales pitch), followed immediately by `Footer`!
  - `AboutCta` is redundant and adds unnecessary scroll length.
- **Detailed Action Plan**:
  - [ ] Remove `AboutCta` from `src/app/about/page.tsx` or consolidate with the admissions consultation button.
  - [ ] Update page metadata to remove references to the 7-step process and unverified degree prospectuses.
- **Target Files**:
  - [page.tsx](file:///home/enviisage/Documents/iipnepal/src/app/about/page.tsx)

> **Phase 5 Commit Checkpoint**: `git commit -m "feat(phase-5): streamline about page and add kathmandu studio imagery"`

---

## Phase 6: Cross-Device Responsiveness, Accessibility & Final Polish

*Focus: Verify responsive layout stability across mobile, tablet, and desktop; check WAI-ARIA contrast and touch targets; pass build checks.*

### [ ] Task 6.1: Full Responsive & Viewport Stability Audit
- **Audit Findings**:
  - Mobile screens must never suffer from `h-screen` jumping (iOS Safari address bar).
  - Multi-column grids must cleanly collapse to 1 column on `< 768px`.
  - Buttons and interactive items must satisfy min 44px tap targets.
- **Detailed Action Plan**:
  - [ ] Audit all sections for `min-h-[100dvh]` and proper safe area insets (`env(safe-area-inset-bottom)`).
  - [ ] Check mobile navigation drawer, course filter pills, and contact forms on mobile (375px, 414px) and tablet (768px, 1024px).
  - [ ] Ensure horizontal carousels (Swiper in Courses, Portfolio, Testimonials) never block native vertical touch scroll.
- **Target Files**:
  - [Navbar.tsx](file:///home/enviisage/Documents/iipnepal/src/components/layout/Navbar.tsx)
  - [CoursesSection.tsx](file:///home/enviisage/Documents/iipnepal/src/components/home/CoursesSection.tsx)
  - [PortfolioSection.tsx](file:///home/enviisage/Documents/iipnepal/src/components/home/PortfolioSection.tsx)
  - [ContactSection.tsx](file:///home/enviisage/Documents/iipnepal/src/components/home/ContactSection.tsx)

### [ ] Task 6.2: `taste` Skill & WCAG AA Contrast / Typography Pre-Flight Check
- **Audit Findings**:
  - Check text contrast on all buttons, badges, and dark stages against WCAG AA (4.5:1 for body, 3:1 for large display text).
  - Ensure display headlines do not clip italic descenders (`leading-[1.1]`, `pb-1`).
  - Restrain eyebrows (max 1 eyebrow per 3 sections).
- **Detailed Action Plan**:
  - [ ] Audit every CTA button label to ensure zero wrapping at desktop.
  - [ ] Verify form input contrast and clear focus outlines.
  - [ ] Run full TypeScript compilation (`npx tsc --noEmit`) and production build verification (`npm run build`).
- **Target Files**:
  - Global codebase audit.

> **Phase 6 Commit Checkpoint**: `git commit -m "chore(phase-6): responsive polish across all screens and build verification"`

---

## 📌 Implementation Protocol & Commit Guardrails

1. **Phase Execution**: All tasks within a phase are implemented, cross-checked against requirements, and verified.
2. **Quality Verification**: Run `npx tsc --noEmit` to ensure strict zero-error TypeScript standards before committing.
3. **Commit Rule**: Execute `git commit` **after each phase is completed** (NEVER after individual sub-tasks), with clear, conventional commit messages matching the phase checkpoint titles.
4. **Skipped Items Preservation**: Tasks 1.4 and 4.3 remain deferred/skipped until user explicitly prompts for their review.
