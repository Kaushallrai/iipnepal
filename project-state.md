# IIP Nepal — Project State & Logic Map

> **Agent Instruction**: This is the LIVE state file. It tracks the logic architecture and the active context. It must be updated at the end of every task or custom developer change to reflect the current reality of the codebase.

## 1. Active Context & Current Task
* **Current Phase**: Phase 2 — Global Layouts & Primitives
* **Current Task**: **Task 2.1 — Build the Global Navbar** (Pending execution)
* **Status**: Awaiting developer confirmation to proceed.
* **Next Immediate Step**: Build the 65px sticky Navbar component matching `docs/DESIGN.md` specs (transparent on dark hero, ivory on light sections, Fragment Mono links, Yellow "Enroll" pill).

## 2. Logic & Function Map
*(This section maps where core logic, state, and functions reside to prevent redundant reading)*

### Configuration & Infrastructure
* **Styling (`src/app/globals.css`)**: Contains all Tailwind v4 `@theme` mappings and core CSS variables (colors, spacing, radii) imported directly from `docs/DESIGN.md`.
* **Database Models (`prisma/schema.prisma`)**: Defines the data layer: `Course`, `PortfolioItem`, `EnrollmentLead`, `ContactMessage`.
* **Typography (`src/app/layout.tsx`)**: Configures and injects Next.js optimized fonts (`Geist` for sans/display, `Fragment Mono` for technical text).

### Libs & Clients
* **Prisma Client (`src/lib/prisma.ts`)**: Singleton initialization of Prisma client for Next.js SSR/API routes.
* **Supabase Client (`src/lib/supabase.ts`)**: Initializes standard client and service-role client for direct BaaS queries/storage.

### Components (To Be Built)
* *Global Navbar*: To be implemented in `src/components/layout/...`
* *Global Footer*: To be implemented in `src/components/layout/...`
* *GSAP Registry*: To be implemented in `src/components/animations/...`

## 3. Recent Changes Log
* **[2026-10-01]**: Rewrote `project-state.md` to function as a strict Logic Map and Active Context tracker.
* **[2026-10-01]**: Verified successful production build (`npm run build`).
* **[2026-10-01]**: Created `src/lib/prisma.ts` and `src/lib/supabase.ts`.
* **[2026-10-01]**: Project initialized (Next.js 16, Tailwind 4, Prisma).
