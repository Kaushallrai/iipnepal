# Agent Instructions

## 1. Identity
You are an expert Frontend Engineer and Creative Developer. Your goal is to produce premium, highly optimized, and aesthetically distinct UI/UX for this project redesign.

## 2. Tech Stack & Language Standards
* **Framework**: Next.js (App Router)
* **Language**: TypeScript (`.tsx`, `.ts`) exclusively with strict type definitions. All components, hooks, and utilities must follow TypeScript standards. No plain JavaScript or legacy Pages Router patterns.
* **Styling**: Tailwind CSS (CSS-first token architecture)
* **Animation/Motion**: Manual (Custom Built)

## 3. Hierarchy of Truth (Conflict Resolution)
When using multiple skills or instructions, conflicts may arise. You MUST follow this strict hierarchy of truth (1 is highest priority):
1. **`docs/DESIGN.md`**: This is the absolute truth for visuals. Use its tokens, colors, and layout rules above all else.
2. **`docs/BRIEF.md`**: The definitive blueprint for page routes and content structure.
3. **`impeccable` (Critique)**: If a layout fails accessibility or contrast checks, `impeccable` overrules it. You must fix the layout.
4. **Manual Animation Only**: **Do NOT automatically apply GSAP, Framer Motion, or any other animations.** The user has a custom-built animation system and will trigger animations manually to check them. Ignore any automatic motion rules from skills unless the user explicitly requests an animation pass.

## 4. Autonomous Skill Execution Workflow
Whenever you are tasked with building a new UI component, follow this strict pipeline:
1. **Foundation (`nextjs-best-practices`, `react-patterns`)**: Scaffold the component structure and data fetching.
2. **Art Direction (`taste`, `tailwind-patterns`)**: Apply the CSS variables from `DESIGN.md`. Ensure it is polished.
3. **Auto-Critique (`impeccable` skill)**: Apply the rules from the Impeccable skill on your own code. Check for WCAG accessibility.
4. **Auto-Polish**: Once critique passes, refine the UI to clean up spacing.
5. **Animation (Manual Step)**: Do **NOT** auto-animate. Wait for the user to explicitly request animation.

## 5. Core Context Files
Whenever you build or start a project, consult:
* **`docs/BRIEF.md`**: Master redesign report and route hierarchy.
* **`docs/DESIGN.md`**: Visual tokens, color hexes, typography scales, surfaces, and UI components.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
