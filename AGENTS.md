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

## 5. Content Strategy & Original Content Preservation (MANDATORY)
The redesign MUST preserve and prioritize the authentic, original content from the legacy IIP Nepal website (`https://www.iipnepal.com/`).
* **Preserve Original Content**: Always use the original headings, mission statements, institutional text, actual course offerings, and team/contact details (e.g., regional partner led by IIP alumnus Additya Shrestha, mentors Jhaggu Roka & Kishor Shrestha, short-term courses, weekend workshops, and diploma programs). Do NOT replace the real original website text with arbitrary or made-up slogans.
* **Gap Filling Only When Missing**: You may only add additional content and editorial depth where information is genuinely missing (e.g. detailed week-by-week syllabus breakdowns, specific technical gear checklists, extended FAQs).
* **Zero Generic Fillers**: Never use `lorem ipsum` or generic placeholder brackets. Keep any supplemental copy strictly grounded in genuine photography education and Kathmandu-based mentorship.

## 6. MCP (Model Context Protocol) Usage
You have access to powerful MCP servers. You must use them proactively:
* **Context7 (`context7`)**: If you are unsure about the latest Next.js App Router syntax, Prisma methods, or GSAP 3 imports, you MUST use Context7 to query the official documentation before writing hallucinated code.
* **Supabase (`supabase`)**: Use this to execute SQL and verify the database schema matches your Prisma models.
* **Playwright (`playwright`)**: Use this to take visual screenshots of components after you build them to ensure they match the `DESIGN.md` aesthetics.

## 7. Progress Tracking & Git Version Control (GitHub MCP)
* **Check off tasks:** Update `ROADMAP.md` to check off tasks ONLY after the component has passed the `/critique` and `/animate` phases.
* **Auto-Commit:** Immediately after checking off a task in the Roadmap, you MUST use the **GitHub MCP** (or local `git` commands) to stage, commit, and push the code. You are responsible for creating branches and opening Pull Requests for major features.

## 8. Core Context Files
Whenever you build or start a project, consult:
* **`docs/BRIEF.md`**: Master redesign report, route hierarchy, and legacy website context (`https://www.iipnepal.com/`). You MUST read this before building any page.
* **`docs/DESIGN.md`**: Visual tokens, color hexes, typography scales, surfaces, and UI components.
* **`docs/INSTALL.md`**: Strict rules and CLI commands for installing dependencies.
* **`docs/ARCHITECTURE.md`**: Routing and database schema.
* **`docs/PRD.md` & `docs/MVP.md`**: Scope limitations.
* **`docs/AGENT_SKILLS.md`**: A list of all available commands and skills.
