# IIP Nepal Website — Problem Fixes & UX Audit Todo List

> Master tracking list generated from `problem-fixes.md` (UX & Content Audit).
> **Workflow Rule**: Problems will be tackled sequentially. Before proceeding with each item, user approval is requested.

---

## 📊 Overview & Progress Tracker

| Priority | Category | Total Tasks | Completed | In Progress | Pending |
| :--- | :--- | :---: | :---: | :---: | :---: |
| **Phase 1** | Accuracy & Functional Integrity (Release Blockers) | 4 | 3 | 0 | 1 |
| **Phase 2** | Course Architecture & Decision-Making | 4 | 0 | 0 | 4 |
| **Phase 3** | Content Streamlining & Reduction | 3 | 0 | 0 | 3 |
| **Phase 4** | Interaction, Accessibility & Mobile Polish | 3 | 0 | 0 | 3 |
| **Total** | | **14** | **3** | **0** | **11** |

---

## Phase 1: High Priority — Accuracy & Functional Integrity (Release Blockers)

### [x] Task 1.1: Reconcile Course Pricing & Fees Across All Pages
- **Status**: Completed ✅
- **Resolution**:
  - Reconciled Course 4 (Pro-Level Foundation) in `src/data/home/courses.ts` to `payableFee: "Rs. 26,800"` (totalFee: `"Rs. 26,800"`), matching catalog and detail pages.
  - Reconciled Course 5 (Pro-Level Advanced) in `src/data/home/courses.ts` to `payableFee: "Rs. 56,000"` (totalFee: `"Rs. 56,000"`), matching catalog and detail pages.
  - Updated `HomeCourseItem` type so `discount?: string` is optional.
  - Updated `CoursesSection.tsx` cards and pinned desktop preview to conditionally display strikethrough original fees and discount tags only when a discount actually applies (`course.discount && course.totalFee !== course.payableFee`).
  - Verified with full TypeScript check (`npx tsc --noEmit`).
- **Target Files**:
  - [courses.ts](file:///home/enviisage/Documents/iipnepal/src/data/home/courses.ts)
  - [CoursesSection.tsx](file:///home/enviisage/Documents/iipnepal/src/components/home/CoursesSection.tsx)
- **Verification**: `npx tsc --noEmit` passed cleanly.

---

### [x] Task 1.2: Enrolment Journey Verification & Loading Blocker Resolution
- **Status**: Completed ✅
- **Resolution**:
  - Replaced empty spinner fallback in `src/app/enroll/page.tsx` with a rich editorial semantic layout shell (`EnrollmentFallback`) with headings, contact details, studio location, and skeleton preview — resolving the crawler/headless "Loading Admissions Dossier..." blocker.
  - Refactored `EnrollmentPageContent.tsx` to sync URL query parameter updates via `React.useEffect` cleanly.
  - Renamed submit action to `"SUBMIT ENROLMENT ENQUIRY"` with transparent notice that admissions staff will verify seat availability and provide payment details (eSewa / Khalti / Bank Transfer / Studio Cashier).
  - Clarified payment settlement section so prospective students understand no upfront online charge is taken on this form.
  - Replaced unverified "100% Satisfaction Guarantee" text with accurate academic and admissions policies confirmation.
  - Refined metadata in `src/app/enroll/page.tsx` and `src/data/enroll/index.ts` to remove unverified claims.
- **Target Files**:
  - [page.tsx](file:///home/enviisage/Documents/iipnepal/src/app/enroll/page.tsx)
  - [EnrollmentPageContent.tsx](file:///home/enviisage/Documents/iipnepal/src/components/enroll/EnrollmentPageContent.tsx)
  - [index.ts](file:///home/enviisage/Documents/iipnepal/src/data/enroll/index.ts)
- **Verification**: `npx tsc --noEmit` passed cleanly.

---

### [x] Task 1.3: Fix Broken Prospectus Link on About Page
- **Status**: Completed ✅
- **Resolution**:
  - Replaced broken `ONLINE CATALOUGE 22.pdf` (HTTP 404) with direct navigation to interactive course catalog (`/courses`) with explicit action label `"View Course Syllabi"`.
  - Replaced broken `tsatschoolpdf.pdf` (HTTP 404) with enquiry action (`/contact`) with action label `"Request Youth Prospectus"`.
  - Clearly differentiated IIP Academy partner degree programmes (MFA, BFA, DDPC, OPDP) with verified 200 OK prospectus link and action label `"Download IIP Prospectus"`.
  - Updated `AboutProspectus.tsx` to support both external PDF downloads and internal routing seamlessly without broken 404 links.
- **Target Files**:
  - [prospectus.ts](file:///home/enviisage/Documents/iipnepal/src/data/about/prospectus.ts)
  - [AboutProspectus.tsx](file:///home/enviisage/Documents/iipnepal/src/components/about/AboutProspectus.tsx)
- **Verification**: `npx tsc --noEmit` passed cleanly; links verified via curl.

---

### [ ] Task 1.4: Verify Legal Policies & FAQ Route Integrity
- **Audit Findings**:
  - Footer contains a combined `"Terms & Privacy"` link and refers to `/faq`, which was unverified in crawl.
  - Ensure links route to actual policy pages with clear refund/cancellation, admission, and privacy terms.
- **Target Files**:
  - `src/components/layout/Footer.tsx`
  - `src/app/terms/` or `src/app/privacy/` (check existing pages)
- **Verification**: Check footer links, ensure valid destination routes or in-dialog policy viewers.

---

## Phase 2: Medium Priority — Course Information Architecture & Decision-Making

### [ ] Task 2.1: Course Cards Information Hierarchy & Comparison Improvement
- **Audit Findings**:
  - Visitors cannot easily compare the 5 programmes without opening each individually.
  - Currently all courses are described with similar wording or marked Kathmandu-based even though several are 100% online.
  - Cards contain non-informative badges like `"35MM ARCHIVE"`.
- **Target Files**:
  - `src/components/courses/CoursesCatalog.tsx`
  - `src/components/courses/CoursesList.tsx`
  - `src/data/courses/items.ts`
- **Planned Fix**:
  - Standardize card information hierarchy:
    1. Level (Beginner / Foundation / Advanced)
    2. Delivery Mode (100% Online / Kathmandu Studio / Hybrid)
    3. Duration (1 Month / 3 Months)
    4. Equipment Required (Smartphone / DSLR or Mirrorless)
    5. Key Practical Outcome
    6. Payable Fee & Savings
    7. Primary Action ("View Syllabus" / "Enrol")
  - Remove redundant `"35MM ARCHIVE"` tags.

---

### [ ] Task 2.2: Standardize Course-Level Terminology Across the Site
- **Audit Findings**:
  - Filters use *Beginner*, *Foundation*, *Advanced*, while Pro-Level Foundation is ambiguously labeled *"Foundation / Pro Level"*.
  - Standardize into an unambiguous taxonomy across filters, card badges, and syllabus headers.
- **Target Files**:
  - `src/data/courses/page.ts`
  - `src/data/courses/items.ts`
  - `src/components/courses/CoursesCatalog.tsx`

---

### [ ] Task 2.3: Reconcile Course Equipment Prerequisites & Expected Workload
- **Audit Findings**:
  - 1-Month Basic Photography states DSLR/mirrorless is mandatory in prerequisites, but FAQ mentions smartphones with manual controls may work.
  - Assignment workload states "5 submissions per module" across 10 modules (50 photos in 1 month), creating ambiguity around real student time commitment.
- **Target Files**:
  - `src/data/courses/items.ts`
  - `src/components/courses/detail/CourseEssentialsSection.tsx`
  - `src/components/courses/detail/CourseTuitionFaqSection.tsx`
- **Planned Fix**:
  - Clarify device compatibility once in prerequisites and harmonize FAQ answers.
  - Define realistic weekly assignment workload (e.g. 2-3 curated weekly assignment photographs with mentor critique).

---

### [ ] Task 2.4: Homepage Hero Copy & Brand Messaging Alignment
- **Audit Findings**:
  - Hero focuses on launch & partnership announcements rather than student learning outcomes.
  - Intake label (`"Intake 2026"`) conflicts with rolling monthly intakes on individual course pages.
  - Conflicting establishment dates: Header says `"Est. 2026"`, while other copy refers to Kathmandu centre established in 2011.
- **Target Files**:
  - `src/data/home/hero.ts`
  - `src/components/home/HeroReveal.tsx`
  - `src/components/layout/Navbar.tsx`
- **Planned Fix**:
  - Focus hero headline & subtext on what students learn, guided practice, and mentor feedback.
  - Reconcile establishment dates (e.g., "Kathmandu Centre Est. 2011 · Digital Platform Redesign 2026").
  - Clarify intake status ("Rolling Monthly Intakes").

---

## Phase 3: Content Streamlining & Reduction

### [ ] Task 3.1: About Page Streamlining & Degree Programme Cleanup
- **Audit Findings**:
  - About page lists university degree & diploma prospectuses (MFA, BFA, DDPC, OPDP, TeenSchool) not offered directly by the Nepal centre.
  - Admissions process is depicted as a complex 7-step journey including studio clearance and tuition planning.
  - Photography disciplines marquee announces repeated text twice to screen readers.
- **Target Files**:
  - `src/data/about/prospectus.ts`
  - `src/data/about/admissions.ts`
  - `src/components/about/AboutProspectus.tsx`
  - `src/components/about/AboutHowItWorks.tsx`
- **Planned Fix**:
  - Focus prospectus on active Nepal centre certificate programmes.
  - Streamline admissions into 3 real steps: (1) Select Course & Enquire, (2) Advisory Consultation, (3) Confirm Registration & Portal Access.
  - Add `aria-hidden="true"` to duplicate marquee elements.

---

### [ ] Task 3.2: Homepage Content Streamlining (Stats, Reviews, Brands, News, CTAs)
- **Audit Findings**:
  - "What We Do" stats (14+ years, 500+ alumni) need clear attribution to IIP's legacy vs Kathmandu centre.
  - Testimonial section is long and includes a director statement formatted as a student review.
  - Partner/brand logos could mislead users into thinking brands are official corporate sponsors.
  - Six news items clutter the page when the primary goal is course discovery; original site news archive was empty.
  - Duplicate closing CTAs at the bottom of the homepage.
- **Target Files**:
  - `src/data/home/what-we-do.ts`
  - `src/data/home/testimonials.ts`
  - `src/data/home/brands.ts`
  - `src/data/home/news.ts`
  - `src/components/home/ContactSection.tsx`
- **Planned Fix**:
  - Streamline statistics to genuine, clear value props.
  - Select 2-3 authentic student reviews; separate leadership statements into their own context.
  - Clarify brand logos as "Industry Standard Tools & Cameras Mastered by Our Students".
  - Curate news down to top 3 relevant institute stories.
  - Eliminate redundant back-to-back CTA prompt before the footer.

---

### [ ] Task 3.3: Portfolio Experience & Student Outcomes Clarification
- **Audit Findings**:
  - Detail pages contain dense camera EXIF data and long literary descriptions that overshadow student learning outcomes.
  - Prospective students need to see what each project demonstrates (composition, lighting, visual storytelling) and which course enabled it.
- **Target Files**:
  - `src/data/portfolio/items.ts`
  - `src/components/portfolio/detail/PortfolioDetailStory.tsx`
  - `src/components/portfolio/PortfolioCatalog.tsx`
- **Planned Fix**:
  - Add a concise "What this project demonstrates" outcome block to portfolio projects.
  - Make technical camera specs collapsible or secondary.
  - Strengthen clear pathway from viewing student work to "Explore related course".

---

## Phase 4: Interaction, Accessibility & Mobile Polish

### [ ] Task 4.1: Contact Page Enquiry Form Polish
- **Audit Findings**:
  - Field label `"Project or mentorship details"` confuses students wanting general admission info.
  - Need clearer required/optional indicators, actionable WhatsApp contact option, and clear submission states.
- **Target Files**:
  - `src/components/contact/ContactForm.tsx`
  - `src/data/contact/index.ts`
- **Planned Fix**:
  - Change message field label to `"Question or message"`.
  - Add direct WhatsApp link for instant Kathmandu admissions guidance.
  - Test validation states and confirmation feedback.

---

### [ ] Task 4.2: Course Detail Syllabus & FAQ Accordion Verification
- **Audit Findings**:
  - Audit noted that crawlers found FAQ questions without immediately visible answers.
  - Long 10-module syllabi create excessive vertical scrolling on mobile.
- **Target Files**:
  - `src/components/courses/detail/CourseCurriculumSection.tsx`
  - `src/components/courses/detail/CourseTuitionFaqSection.tsx`
- **Planned Fix**:
  - Verify all FAQ accordions expand properly with valid answers and keyboard navigation.
  - Structure syllabus into expandable phase groups for scannability.

---

### [ ] Task 4.3: Responsive & Pinned Section Usability Audit
- **Audit Findings**:
  - Homepage pinned course comparison and portfolio sections must not hijack scrolling or trap users on mobile/touch screens.
- **Target Files**:
  - `src/components/home/CoursesSection.tsx`
  - `src/components/home/PortfolioSection.tsx`
- **Planned Fix**:
  - Test touch scrolling and mobile viewports. Ensure fallback to smooth native card flow without scroll trapping.

---

## 📌 Implementation Protocol
1. User confirms which task to work on.
2. Changes are made to the specified files according to Design tokens (`docs/DESIGN.md`) and Next.js / TypeScript rules.
3. Lint and build checks are performed (`npm run build` or `tsc --noEmit`).
4. Task is marked `[x]` in this `todo-list.md` and summarized for the user before moving to the next item.
