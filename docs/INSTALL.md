# Project Installation & Initialization Rules

## The Goal
When you (the Agent) begin executing **Phase 1 (Task 1.1)** of the `ROADMAP.md`, you MUST use the exact commands listed below. This guarantees that the project is initialized with the absolute latest versions of our core tech stack, preventing legacy bugs and outdated syntax.

## 1. Next.js Foundation
Always use `create-next-app@latest` to pull the newest Next.js App Router version.
**Command to run:**
```bash
npx create-next-app@latest ./ --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
```
*(Run this in the root directory. This sets up Tailwind, TypeScript, and the `/src/app` directory automatically).*

## 2. Motion Libraries
We use GSAP for macro-interactions and Framer Motion for micro-interactions.
**Command to run:**
```bash
npm install gsap @gsap/react framer-motion
```

## 3. Database & Backend (Supabase + Prisma)
Install the official Supabase JS client and the Prisma ORM.
**Commands to run:**
```bash
npm install @supabase/supabase-js @prisma/client
npm install prisma --save-dev
npx prisma init
```

## 4. UI Primitives (shadcn/ui)
We use `shadcn/ui` to scaffold complex, accessible components. Initialize it with the latest version.
**Command to run:**
```bash
npx shadcn@latest init
```
*(When prompted by the `shadcn` CLI, proceed with the default setup. Immediately after initialization, you MUST overwrite the CSS variables in `globals.css` with the specific Charcoal Ink and Workshop Ivory tokens (and the `@theme` block for Tailwind v4) found in `docs/DESIGN.md`)*.

## Important Agent Warning:
Do **NOT** guess package names. Do **NOT** use outdated npm packages. If a command fails, query the `context7` MCP server to find the latest documentation for that package before trying again.
