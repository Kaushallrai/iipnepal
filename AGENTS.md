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

## 6. Responsive Design Rules (MANDATORY)
Every component, page, and layout you produce **MUST** be fully responsive across all screen sizes. Consult `docs/DESIGN.md` (Standardized Layout Rules table) and `src/app/globals.css` (responsive media queries) as the source of truth. The rules below are non-negotiable.

### 6.1 Breakpoint System (from `globals.css`)
Always design mobile-first and layer up through these tiers:

| Tier | Breakpoint | Tailwind Prefix | Page Gutter | Section Padding (Y) |
|------|-----------|-----------------|-------------|---------------------|
| Mobile | `< 640px` | _(default)_ | 24px (`px-6`) | 96px (`py-24`) |
| Small Tablet | `≥ 640px` | `sm:` | 32px (`sm:px-8`) | 112px (`sm:py-28`) |
| Tablet | `≥ 768px` | `md:` | 48px (`md:px-12`) | 128px (`md:py-32`) |
| Desktop | `≥ 1024px` | `lg:` | 64px (`lg:px-16`) | 144px (`lg:py-36`) |

### 6.2 Button Rules — No Overflow, No Text Wrapping
Buttons are critical interactive surfaces. They must **never** break layout:
* **Single-line text only**: Every button MUST use `whitespace-nowrap` to prevent text from wrapping to a second line.
* **No overflow**: Buttons MUST NOT overflow their parent container. Use `max-w-full` on buttons inside narrow containers.
* **Text truncation over wrapping**: If a button label risks being too long on mobile, apply `truncate` (`overflow-hidden text-ellipsis whitespace-nowrap`) rather than letting it wrap.
* **Responsive padding**: Use responsive padding on buttons — e.g. `px-4 py-2.5 sm:px-5 md:px-6` — so they breathe on desktop but compress gracefully on mobile.
* **Minimum touch target**: Buttons must be at least 44×44px on touch devices. Use `min-h-[44px]` and sufficient horizontal padding.
* **Button groups**: When multiple buttons sit side-by-side, wrap them in a `flex flex-wrap gap-3` container so they stack vertically on narrow screens instead of overflowing.
* **Full-width on mobile when needed**: Prefer `w-full sm:w-auto` for primary CTAs inside narrow mobile layouts so they fill available space without overflow.
* **Font size scaling**: Button text should be `text-[14px] sm:text-[15px] md:text-[16px]` at most. Never use heading-scale text inside a button.

### 6.3 Text & Content Containment — No Overflow Off Screen
No text, image, or element may escape the viewport or its parent:
* **Global overflow guard**: `html` and `body` already have `overflow-x: hidden; max-width: 100%;` in `globals.css`. Never remove these.
* **All containers**: Use `overflow-hidden` or `overflow-x-hidden` on any container with children that might extend beyond it (carousels, grids with large items, absolute-positioned elements).
* **Long text**: Apply `break-words` (`overflow-wrap: break-word; word-break: break-word;`) on any text container that may receive user-generated or dynamic content.
* **Headlines**: Display headlines scale down via CSS custom properties: `84px → 64px → 44px → 34px` across breakpoints (already defined in `globals.css`). Always use the CSS variable `var(--text-display)` etc., so scaling is automatic.
* **Prose / body text**: Never set a fixed width on body text. Use `max-w-prose` (65ch) or percentage-based widths for readability. Text should reflow naturally.
* **Horizontal scrolling is a bug**: If any page section scrolls horizontally on any viewport, it is a defect and must be fixed immediately.
* **Images**: All images must use `max-w-full h-auto` (or `w-full` with `object-cover`) to prevent them from blowing out their containers.

### 6.4 Responsive Typography
Follow the fluid scale already defined in `globals.css` media queries:

| Role | Mobile (`< 768px`) | Tablet (`md`) | Desktop (`lg`) |
|------|---------------------|---------------|----------------|
| Display | 44px | 64px | 84px |
| Heading | 34px | 44px | 54px |
| Heading-sm | 26px | 30px | 34px |
| Subheading | 18px | 20px | 20px |
| Body | 16px | 16px | 16px |
| Body-sm | 14px | 14px | 14px |
| Caption | 12px | 12px | 12px |

* Always use the CSS variables (`var(--text-display)`, `var(--text-heading)`, etc.) so responsive scaling propagates from `globals.css` media queries.
* Subheading on mobile: consider `text-[18px] md:text-[20px]` if not using the CSS variable.

### 6.5 Grid & Flex Responsive Patterns
* **Card grids**: Default to `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` for standard card layouts. Never use a fixed 3-column grid that doesn't collapse on mobile.
* **Two-column layouts**: Use `flex flex-col md:flex-row` so content stacks on mobile and sits side-by-side on tablet+.
* **Gap scaling**: Use responsive gaps — `gap-6 sm:gap-8 md:gap-10 lg:gap-12` — to prevent cramped layouts on small screens and overly sparse layouts on large ones.
* **`max-w-[105rem] mx-auto`**: Every full-width section must be capped at the project's max content width (1680px) and centered, per `DESIGN.md`.
* **No fixed pixel widths on layout containers**: Never use `w-[500px]` or similar on a container that must be responsive. Use `w-full max-w-[500px]` instead.
* **Aspect ratios**: Use `aspect-video`, `aspect-square`, or `aspect-[4/3]` on media containers instead of fixed height values that break on resize.

### 6.6 Spacing & Layout Utilities (from `globals.css`)
Always prefer the standardized utility classes over ad-hoc values:
* **`.padding-global`** / **`.container-global`** — applies responsive page gutters + max-width + auto centering.
* **`.section-py`** — applies responsive vertical section padding.
* **`.section-header-mb`** — applies responsive header bottom margin.
* **`.section-content-gap`** — applies responsive content gap.
* When building new sections, compose these classes: `<section class="section-py"><div class="padding-global">...</div></section>`.

### 6.7 Touch & Interaction (Mobile)
* **Touch targets**: All interactive elements (buttons, links, icons) must be at least 44×44px on mobile.
* **Hover states**: Always pair `:hover` with responsive alternatives. On touch devices hover is unreliable — ensure the default (non-hovered) state is fully functional and visually clear.
* **Tap spacing**: Maintain at least 8px between adjacent tappable elements to prevent mis-taps.

### 6.8 Responsive Pre-Ship Checklist
Before delivering any component or page, mentally verify:
- [ ] Does it look correct at **375px** (iPhone SE), **430px** (iPhone 15 Pro Max), **768px** (iPad), **1024px** (small laptop), and **1440px** (desktop)?
- [ ] Do all buttons show text on a single line with no overflow?
- [ ] Is there any horizontal scrollbar at any viewport? (If yes → fix it.)
- [ ] Do grids collapse from multi-column to single-column on mobile?
- [ ] Are headlines using the CSS variable scale and shrinking on mobile?
- [ ] Are all images constrained to their containers?
- [ ] Is body text readable (16px minimum) and not clipped or overflowing?
- [ ] Are touch targets ≥ 44px on mobile?
- [ ] Does the page use `.padding-global` / `.section-py` for consistent spacing?

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
