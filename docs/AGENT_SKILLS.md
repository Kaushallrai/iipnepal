# AI Development Resources & Skills

This document tracks the specific AI Agent skills, playbooks, and repositories utilized for the IIP Nepal website. 
*Note: Redundant skills (like AAS design-taste) have been explicitly removed to prevent agent confusion.*

## 1. The Build Pipeline (Order of Operations)
To use these skills effectively, you must invoke them **sequentially** based on the stage of the feature you are building. Do not load motion skills while building database queries.

### Stage 1: The Foundation (Logic & Data)
*Build the raw React components, fetch data, and establish routing.*
*   **Active Skills:** `nextjs-best-practices`, `react-patterns`, `prisma-expert`
*   **Prompt Example:** *"Using the `nextjs-best-practices` skill, scaffold the `/courses` route and fetch data using Prisma. Do not style it yet."*

### Stage 2: The Art Direction (Structure & Styling)
*Apply the `DESIGN.md` tokens and build the layout.*
*   **Active Skills:** `taste`, `tailwind-patterns`
*   **Prompt Example:** *"Read `docs/DESIGN.md`. Using the `taste` skill and `tailwind-patterns`, style the courses grid using our custom Charcoal Ink and Geist typography."*

### Stage 3: The UX Critique (Refinement)
*Have the AI review its own work before you approve it.*
*   **Active Skills:** `impeccable`
*   **Prompt Example:** *"Run an `impeccable` critique on this component. Check for accessibility, typography hierarchy, and ensure it doesn't look like generic AI slop."*

### Stage 4: The Motion Engineering (Polish)
*Add the final premium feel. Use Emil for micro-interactions (buttons) and Antigravity for macro-interactions (scroll triggers).*
*   **Active Skills:** `emil-kowalski`, `antigravity-design-expert`
*   **Prompt Example:** *"Using the `emil-kowalski` rules, add a subtle hover state to the Course Cards. Then, using the `antigravity-design-expert` skill, implement a GSAP ScrollTrigger so the images fade in softly as the user scrolls."*

---

## 2. Core Repositories Reference
*   **Taste Skill**: `tasteskill.dev`
*   **Impeccable**: `github.com/pbakaus/impeccable`
*   **Emil Kowalski**: `github.com/emilkowalski/skills`
*   **AAS**: `github.com/sickn33/agentic-awesome-skills`
