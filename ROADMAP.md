# IIP Nepal - Task-Based Roadmap

This document outlines the step-by-step implementation tasks. The Agent must complete these in order, applying the Skill Pipeline (Foundation -> Taste -> Critique -> Animate) for every UI task.

## Phase 1: Project Initialization & Architecture
- [x] **Task 1.1:** Initialize Next.js (App Router) project with TypeScript and Tailwind CSS.
- [x] **Task 1.2:** Configure `globals.css` with the CSS Variables defined in `docs/DESIGN.md`. (Skill: `taste`)
- [x] **Task 1.3:** Configure custom fonts (`Geist` and `Fragment Mono`) in Next.js layout.
- [x] **Task 1.4:** Initialize Prisma (`prisma init`), write the `schema.prisma` for Courses and Portfolio, and connect to Supabase. (Skill: `prisma-expert`)

## Phase 2: Global Layouts & Primitives
- [x] **Task 2.1:** Build the Global Navbar.
  - [x] Scaffold structure.
  - [x] Apply `taste` styling.
  - [x] Apply `impeccable` rules (ensure mobile accessibility).
- [x] **Task 2.2:** Build the Global Footer.
- [x] **Task 2.3:** Initialize GSAP provider/registry for Next.js App Router. (Skill: `antigravity-design-expert`)

## Phase 3: Home Page Implementation (Creative Giants System)
- [x] **Task 3.1: Hero Section.**
  - [x] Exact Creative Giants entrance sequence (clipPath on top wordmark, colossal Bebas Neue wordmark, image band clipPath reveal).
  - [x] 100dvh sizing with zero scrollbar overflow.
  - [x] Direct navigation bar (Home, Courses, Portfolio, About, Contact + Enroll CTA) removing desktop menu button.
  - [x] LineReveal on overlay headline & scroll-driven parallax.
- [x] **Task 3.2: Why IIP Section.**
  - [x] Creative Giants `[js-line-animation]` line-by-line reveal.
  - [x] Drawing hairline border (`scaleX: 0 -> 1`).
  - [x] 3 Key metrics (`13+`, `5,000+`, `100%`) with line icons.
- [x] **Task 3.3: Course Previews Grid.** 5 core programs, chromatic cards, arrow controls, LineReveal.
- [x] **Task 3.4: Portfolio Teaser.** Pinned horizontal parallax scroll with calibrated speeds and zero text collisions / overlaps.
- [x] **Task 3.5: Admissions Process.** Animated vertical timeline track with scroll progress scrub and node activations.
- [x] **Task 3.6: Testimonials Section.** Creative Giants minimalist quote slider with circular outline controls.
- [x] **Task 3.7: Brand Marquee Section.** Continuous infinite linear partner ticker.
- [x] **Task 3.8: News & Dispatches Section.** Editorial cards with image zoom on hover and tags.
- [x] **Task 3.9: Closing CTA.** Decreased height, line-by-line reveal, dual actions.
- [x] **Task 3.10: Get In Touch Section.** Pre-footer split editorial contact and quick inquiry form.
- [x] **Task 3.11: Footer Animation.** Link rows stagger reveal and colossal bottom poster wordmark with scroll parallax.

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
