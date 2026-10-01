# Tech Stack - IIP Nepal

## 1. Core Framework
* **Next.js (App Router)**: React framework for server-side rendering, routing, and API endpoints.
* **TypeScript**: Strict typing across the codebase.

## 2. Styling & UI Components
* **Tailwind CSS**: Utility-first CSS framework.
* **shadcn/ui**: Unstyled, accessible component primitives (Radix UI) copied into the project. We will customize these primitives strictly using our `docs/DESIGN.md` tokens (Charcoal Ink, Geist) to avoid generic SaaS aesthetics.
* **GSAP (GreenSock)**: Used for all macro-interactions, scroll reveals, and parallax effects.
* **Framer Motion / CSS Transitions**: Restricted strictly to micro-interactions (hover states, button clicks) as per Emil Kowalski's guidelines.

## 3. Backend & Database
* **Prisma**: ORM for strict database schema typing and migrations.
* **Supabase**: Managed PostgreSQL database and asset storage (for portfolio imagery).
* **Resend**: Transactional email API for form notifications.

## 4. Agentic Integrations (MCPs)
* **GitHub MCP**: Used to automatically branch, commit, and create Pull Requests after completing atomic tasks.
* **Supabase MCP**: Used to execute SQL and verify schema integrity.
* **Playwright MCP**: Used for automated visual testing.