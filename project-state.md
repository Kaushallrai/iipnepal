# IIP Nepal — Project State & Logic Map

> **Agent Instruction**: This is the LIVE state file. It tracks the logic architecture and the active context. It must be updated at the end of every task or custom developer change to reflect the current reality of the codebase.

## 1. Active Context & Current Task
* **Current Phase**: Phase 2 — Global Layouts & Primitives
* **Current Task**: **Task 2.3 — Initialize GSAP Provider/Registry** (Pending execution)
* **Status**: Task 2.2 (Global Footer) completed; awaiting developer confirmation to proceed with Task 2.3.
* **Next Immediate Step**: Configure GSAP with `@gsap/react` and `ScrollTrigger` in Next.js App Router for macro scroll reveals, respecting prefers-reduced-motion and keeping motion cleanly separated from Framer micro-interactions.

## 2. Logic & Function Map
*(This section maps where core logic, state, and functions reside to prevent redundant reading)*

### Configuration & Infrastructure
* **Styling (`src/app/globals.css`)**: Contains all Tailwind v4 `@theme` mappings and core CSS variables (colors, spacing, radii) imported directly from `docs/DESIGN.md`.
* **Database Models (`prisma/schema.prisma`)**: Defines the data layer: `Course`, `PortfolioItem`, `EnrollmentLead`, `ContactMessage`.
* **Typography (`src/app/layout.tsx`)**: Configures and injects Next.js optimized fonts (`Geist` for sans/display, `Fragment Mono` for technical text).

### Libs & Clients
* **Prisma Client (`src/lib/prisma.ts`)**: Singleton initialization of Prisma client for Next.js SSR/API routes.
* **Supabase Client (`src/lib/supabase.ts`)**: Initializes standard client and service-role client for direct BaaS queries/storage.
* **Utilities (`src/lib/utils.ts`)**: `cn()` utility combining `clsx` and `tailwind-merge`.

### Components & Layout
* **Global Navbar (`src/components/layout/navbar.tsx`)**: 65px sticky bar with scroll-aware dual modes (transparent over dark hero, Workshop Ivory with Drafting Line border on light sections). Includes Fragment Mono uppercase links, Yellow "Enroll" pill, and accessible full-screen mobile menu drawer with body-scroll locking.
* **Global Footer (`src/components/layout/footer.tsx`)**: 1px Drafting Line bordered editorial footer on Workshop Ivory `#f2efe9`. Contains Jyoti Bhawan Kathmandu campus address, telephone, opening hours, curriculum links, legal links, and IIP Foundation attribution.
* **GSAP Registry (`src/components/animations/...`)**: *(Pending Task 2.3)*.

## 3. Recent Changes Log
* **[2026-10-01]**: Completed Task 2.2 — Built and integrated `Footer` in `src/components/layout/footer.tsx` and `src/app/layout.tsx`. Verified build.
* **[2026-10-01]**: Completed Task 2.1 — Built and integrated responsive `Navbar` in `src/components/layout/navbar.tsx` and `src/app/layout.tsx`. Installed `lucide-react`. Verified clean production build.
* **[2026-10-01]**: Rewrote `project-state.md` to function as a strict Logic Map and Active Context tracker.
* **[2026-10-01]**: Verified successful production build (`npm run build`).
* **[2026-10-01]**: Created `src/lib/prisma.ts` and `src/lib/supabase.ts`.
* **[2026-10-01]**: Project initialized (Next.js 16, Tailwind 4, Prisma).
