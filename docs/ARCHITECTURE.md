# IIP Nepal - Architecture Document

## 1. Tech Stack Overview
The application will be built using the following modern web stack as outlined in `techstack.md`:
* **Framework**: Next.js (App Router) for Server-Side Rendering (SSR) and seamless API integrations.
* **Styling**: Tailwind CSS for utility-first styling, integrated with custom CSS variables mapped to `DESIGN.md` tokens.
* **Database / ORM**: Prisma ORM interacting with a PostgreSQL database.
* **Backend / BaaS**: Supabase (PostgreSQL, Storage, and potentially Auth later).
* **Animations**: GSAP & Framer Motion for high-performance, premium UI interactions.

## 2. Infrastructure & Deployment
* **Hosting**: Vercel (recommended for Next.js) or a comparable node-based edge network.
* **Database**: Supabase Cloud.
* **Media Storage**: Supabase Storage buckets (optimized for high-res photography).

## 3. High-Level Folder Structure
```text
/iipnepal
├── /app
│   ├── (marketing)
│   │   ├── /about
│   │   ├── /contact
│   │   ├── /enroll
│   │   └── page.tsx        # Homepage
│   ├── /courses
│   │   ├── [slug]/page.tsx # Course Detail
│   │   └── page.tsx        # Course Directory
│   ├── /portfolio
│   │   ├── [slug]/page.tsx # Portfolio Detail
│   │   └── page.tsx        # Portfolio Directory
│   ├── layout.tsx
│   └── globals.css         # Tailwind directives & CSS variable tokens
├── /components
│   ├── /ui                 # Reusable primitive components (buttons, inputs)
│   ├── /layout             # Navbar, Footer
│   └── /animations         # GSAP wrapper components
├── /lib
│   ├── prisma.ts           # Prisma client instantiation
│   └── utils.ts            # Helper functions
├── /prisma
│   └── schema.prisma       # Database schema models
└── public/                 # Static assets (fonts, default images)
```

## 4. Database Schema (Prisma Draft)
The primary data models to support dynamic routing:

1. **Course**:
   * Fields: `id`, `slug`, `title`, `description`, `curriculum`, `duration`, `level`, `coverImage`.
2. **PortfolioItem**:
   * Fields: `id`, `slug`, `title`, `photographerName`, `description`, `images` (Array), `courseId` (Relation).
3. **EnrollmentLead**:
   * Fields: `id`, `studentName`, `email`, `phone`, `courseId` (Relation), `status`, `createdAt`.
4. **ContactMessage**:
   * Fields: `id`, `name`, `email`, `message`, `createdAt`.

## 5. Design System Implementation Architecture
* **Tokens**: `DESIGN.md` colors (`--color-charcoal-ink`, etc.) will be defined in `globals.css` using Tailwind v4's `@theme` block.
* **Typography**: Geist (sans-serif) will be loaded via the `geist` NPM package, and Fragment Mono (monospace) will be loaded via `next/font` for optimal performance.
* **Motion**: GSAP will be initialized globally in a provider or custom hook, used primarily for scroll triggers (`ScrollTrigger`) and heavy DOM animations, while Framer Motion can be used for simpler page transitions.
