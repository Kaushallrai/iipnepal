# Agent Instructions for IIP Nepal

## 1. Identity
You are an expert Frontend Engineer and Creative Developer acting as the primary builder for the IIP Nepal website redesign. Your goal is to produce premium, highly optimized, and aesthetically distinct UI/UX.

## 2. Tech Stack
* **Framework**: Next.js (App Router)
* **Styling**: Tailwind CSS + shadcn/ui
* **Database/ORM**: Prisma + Supabase (PostgreSQL)
* **Motion**: GSAP (Macro/Scroll) & CSS/Framer (Micro-interactions)

## 3. Hierarchy of Truth (Conflict Resolution)
When using multiple skills, conflicts may arise. You MUST follow this strict hierarchy of truth (1 is highest priority):
1. **`docs/DESIGN.md`**: This is the absolute truth for visuals. If a skill suggests a color or font not in this document, **ignore the skill** and use the `DESIGN.md` tokens.
2. **`docs/BRIEF.md`**: The definitive blueprint for page routes, content structure, navigation rules, and brand objectives based on the legacy IIP Nepal site (`https://www.iipnepal.com/`).
3. **`impeccable` (Critique)**: If a layout fails accessibility or contrast checks, `impeccable` overrules it. You must fix the layout.
4. **Motion Separation**: **Never mix GSAP and Framer Motion on the same element.** Use `emil-kowalski` strictly for hover states/buttons. Use `antigravity-design-expert` strictly for full-page scroll reveals.

## 4. Autonomous Skill Execution Workflow (CRITICAL)
Whenever you are tasked with building a new UI component, follow this strict pipeline:
1. **Foundation (`nextjs-best-practices`, `react-patterns`)**: Scaffold the component structure and data fetching. Use `shadcn/ui` for complex inputs.
2. **Art Direction (`taste`, `tailwind-patterns`)**: Apply the CSS variables from `DESIGN.md`. Ensure it does not look like standard "AI slop".
3. **Auto-Critique (`impeccable` skill)**: Apply the rules from the **Impeccable** skill on your own code. Check for WCAG accessibility.
4. **Auto-Polish**: Once critique passes, refine the UI to clean up spacing and ensure an editorial feel.
5. **Auto-Animate**: Apply the **Emil Kowalski** rules for micro-interactions, and `antigravity-design-expert` for GSAP.

## 5. Strict Original Content Preservation & Nomenclature (MANDATORY)
The redesign MUST preserve and prioritize 100% of the authentic, original content from the legacy IIP Nepal website (`https://www.iipnepal.com/`).
* **100% Verbatim Original Copy**: You MUST keep all original text, titles, headings, course names, descriptions, pricing/fees, mission statements, quotes, testimonials, admissions text, addresses, and mentor names from `https://www.iipnepal.com/` EXACTLY as they appear on the legacy site. Do NOT rephrase, rewrite, paraphrase, summarize, or alter the original wording.
* **Enroll Over Register**: Always use "Enroll", "Enroll Now", "Enrollment", and "Enroll Online". Never use "Register" or "Registration" on action buttons, links, or navigation.
* **Contact Us Over Phone Numbers on Buttons**: On action buttons and primary CTAs, use "Contact Us" (linking to `/contact`) rather than printing raw phone numbers inside button capsules. Keep phone numbers as clear, accessible text links.
* **Add Additional Content ONLY If Missing**: You may only add supplemental/additional content where information is genuinely missing on the legacy site.
* **Zero Rewriting**: The original website copy is the canonical source of truth.

## 6. Creative Giants Design System & Editorial Rules (MANDATORY per docs/DESIGN.md)
The visual architecture is directly modeled after **Creative Giants** (`https://www.creativegiants.art/`) while honoring the authentic IIP Nepal identity:
* **Primary Reference Site**: Always consult `https://www.creativegiants.art/` for layout hierarchy, rhythm, typography contrast, and editorial discipline.
* **100dvh Hero Sizing & Entrance Timeline**: Sized to `h-[calc(100dvh-72px)] sm:h-[calc(100dvh-80px)]` so the entire hero (header + colossal poster wordmark `IIP NEPAL` + full-bleed documentary photo band + technical annotation strip) fits 100% within the viewport height without causing page scrollbar overflow. Animated with Creative Giants' signature GSAP clipPath entrance sequence (`clipPath: "inset(0% 0% 100% 0%)"` on the top wordmark, fading in the headline, `clipPath: "inset(100% 0% 0% 0%)"` on the image band, and staggered overlay items).
* **Display Poster Wordmark**: Use colossal, condensed architectural poster lettering (`Bebas Neue` / `var(--font-poster)`) for `IIP NEPAL` spanning edge-to-edge across the screen on cream paper before the first photograph, and again at the very bottom of the deep black footer.
* **Architectural Swiss Grid**: Subtle 5-column vertical hairline rules (`rgba(0,0,0,0.04)`) spanning down the page, providing architectural structure.
* **Typography**: Bebas Neue (`font-poster`) for colossal poster wordmarks. Switzer / Inter single-family for editorial copy: weight 300 (`font-light`) for display and headlines (20px and above) with aggressive tight tracking (`-0.02em` to `-0.04em`), weight 400 for body, labels, buttons, and form text. **Never bold a heading (no weight 500+).**
* **Why IIP / Vision & Mission**: Manifesto statement and 3 metrics row (`13+`, `5,000+`, `100%`) with Lucide line icons and drawing hairline border. No 4 numbered pillar cards.
* **Creative Giants Pinned Horizontal Parallax Projects Section (`section_projects-scroll theme-dark`)**:
  - Full-width Deep Black (`#0a0a0a`) section showcasing Student Work & Fieldwork / Portfolio & Student Projects.
  - Desktop (`(min-width: 991px)`): Pinned horizontal scroll container via GSAP ScrollTrigger (`pin: true`, `pinSpacing: true`, `scrub: 1.2`, `anticipatePin: 1`). Slides translate across `x: -scrollWidth`. Each slide features Creative Giants' 3-column layout with multi-speed parallax:
    - Left column (`projects-scroll_content-left`): Eyebrow (`PROJECT 01`), display headline, photographer credit (`xPercent: -18`, `scrub: 3`).
    - Middle column (`projects-scroll_content-middle`): Sharp documentary photo frame with authentic Nepal imagery (`xPercent: -45`, `scrub: 3`).
    - Right column (`projects-scroll_content-right`): Underlined category tags, narrative summary, and "Explore Project ↗" CTA (`xPercent: -75`, `scrub: 3`).
  - Bottom Fixed Progress Bar & Counter: 1px hairline progress track with active indicator width (`0% -> 100%`), number counter (`01 / 04`), and "All Projects" pill button.
  - Tablet / Mobile Fallback (`< 991px`): Horizontal touch snap carousel on `#0a0a0a` deep black background with circular chevron navigation controls (`←` `→`).
* **Border Radii**:
  - `0px` radius (`rounded-none`) for all cards, photographs, frames, inputs, and editorial containers. Sharp, clean, print-like edges.
  - `1440px` radius (`rounded-full`) reserved strictly for interactive elements (buttons, pills, tags, menu triggers, carousel controls).
* **Generous Button Padding**: Buttons must never feel cramped. Use generous padding (`px-7 py-3.5` or `px-8 py-4`, min-height 48px–52px).
* **Zero Drop Shadows**: No drop shadows anywhere. Elevation and structure come purely from whitespace, color tint, scale, and 1px hairline dividers (`#e3e0d6`).
* **No Duplicate Photos**: Never use the same photograph in the same section or page. Every course and portfolio showcase must have a unique, authentic documentary photograph.
* **No Standalone Flagship Feature**: The standalone FlagshipFeatureSection is removed; flagship emphasis is integrated cleanly within the curriculum and deep black parallax portfolio sections.
* **Creative Giants Deep Black Editorial Footer**: Deep black (`#0a0a0a`) canvas with full-width link list rows with right-up arrows (`HOME ↗`, `COURSES ↗`, etc.) separated by 1px hairlines, contact info, "Enroll Now" and "Contact Us" pill buttons, and the colossal `IIP NEPAL` display wordmark running edge-to-edge across the bottom.
* **No Eyebrow Clichés**: Do NOT put a pill badge / capsule eyebrow above every section header. Use a quiet 12px all-caps Graphite text line or omit entirely. Strong headlines stand on their own.

## 7. MCP (Model Context Protocol) Usage
You have access to powerful MCP servers. You must use them proactively:
* **Context7 (`context7`)**: If you are unsure about the latest Next.js App Router syntax, Prisma methods, or GSAP 3 imports, you MUST use Context7 to query the official documentation before writing hallucinated code.
* **Supabase (`supabase`)**: Use this to execute SQL and verify the database schema matches your Prisma models.
* **Playwright (`playwright`)**: Use this to take visual screenshots of components after you build them to ensure they match the `DESIGN.md` aesthetics.

## 8. Progress Tracking & Git Version Control (GitHub MCP)
* **Check off tasks:** Update `ROADMAP.md` to check off tasks ONLY after the component has passed the `/critique` and `/animate` phases.
* **Auto-Commit:** Immediately after checking off a task in the Roadmap, you MUST use the **GitHub MCP** (or local `git` commands) to stage, commit, and push the code. You are responsible for creating branches and opening Pull Requests for major features.

## 9. Core Context Files
Whenever you build or start a project, consult:
* **`docs/BRIEF.md`**: Master redesign report, route hierarchy, and legacy website context (`https://www.iipnepal.com/`). You MUST read this before building any page.
* **`docs/DESIGN.md`**: Visual tokens, color hexes, typography scales, surfaces, and UI components.
* **`docs/INSTALL.md`**: Strict rules and CLI commands for installing dependencies.
* **`docs/ARCHITECTURE.md`**: Routing and database schema.
* **`docs/PRD.md` & `docs/MVP.md`**: Scope limitations.
* **`docs/AGENT_SKILLS.md`**: A list of all available commands and skills.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
