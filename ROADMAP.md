# IIP Nepal - Task-Based Roadmap

This document outlines the step-by-step implementation tasks. The Agent must complete these in order, applying the Skill Pipeline (Foundation -> Taste -> Critique -> Animate) for every UI task.

## Phase 1: Project Initialization & Architecture
- [x] **Task 1.1:** Initialize Next.js (App Router) project with TypeScript and Tailwind CSS.
- [x] **Task 1.2:** Configure `globals.css` with the CSS Variables defined in `docs/DESIGN.md`. (Skill: `taste`)
- [ ] **Task 1.3:** Configure custom fonts (`Geist` and `Fragment Mono`) in Next.js layout.
- [ ] **Task 1.4:** Initialize Prisma (`prisma init`), write the `schema.prisma` for Courses and Portfolio, and connect to Supabase. (Skill: `prisma-expert`)

## Phase 2: Global Layouts & Primitives
- [ ] **Task 2.1:** Build the Global Navbar.
  - [ ] Scaffold structure.
  - [ ] Apply `taste` styling.
  - [ ] Apply `impeccable` rules (ensure mobile accessibility).
- [ ] **Task 2.2:** Build the Global Footer.
- [ ] **Task 2.3:** Initialize GSAP provider/registry for Next.js App Router. (Skill: `antigravity-design-expert`)

## Phase 3: Home Page Implementation
- [ ] **Task 3.1: Hero Section.**
  - [ ] Scaffold structure.
  - [ ] Apply large `Geist` typography (`taste`).
  - [ ] Apply `impeccable` rules to ensure editorial feel.
  - [ ] Apply `emil-kowalski` rules to add subtle load-in animations.
- [ ] **Task 3.2: Why IIP Section.**
- [ ] **Task 3.3: Course Previews Grid.** (Requires database fetch)
- [ ] **Task 3.4: Portfolio Teaser.** Implement masonry layout.

## Phase 4: Dynamic Routes & Data (Courses & Portfolio)
- [ ] **Task 4.1:** Build `/courses` directory page. Fetch from Prisma.
- [ ] **Task 4.2:** Build `/courses/[slug]` dynamic page. 
- [ ] **Task 4.3:** Build `/portfolio` directory page.
- [ ] **Task 4.4:** Build `/portfolio/[slug]` dynamic page.
- *Note: All pages must be audited using `impeccable` rules for UX and `emil-kowalski` rules for smooth page transitions.*

## Phase 5: Forms & Integrations
- [ ] **Task 5.1:** Build `/enroll` form. Validate inputs and save to Supabase.
- [ ] **Task 5.2:** Build `/contact` form.
- [ ] **Task 5.3:** Set up email notifications (e.g., via Resend) for form submissions.

## Phase 6: Final Polish & Audit
- [ ] **Task 6.1:** Run an `impeccable` audit across all major routes.
- [ ] **Task 6.2:** Apply `emil-kowalski` rules to review animations and check GSAP performance.
- [ ] **Task 6.3:** Final deployment to Vercel.
