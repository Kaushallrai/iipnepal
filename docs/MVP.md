# IIP Nepal - Minimum Viable Product (MVP)

## 1. MVP Scope
The MVP focuses on the core conversion funnel: discovering courses, viewing photography, and enrolling. It relies on the AI Agent Skill Pipeline (Taste -> Impeccable -> Emil Kowalski) to guarantee the frontend looks premium despite being built rapidly.

## 2. In-Scope for MVP

### Core UI Pages (See ROADMAP.md for implementation steps)
* **Home**: Hero, Why IIP, Featured Course Links, Portfolio Teaser.
* **Courses (List & Detail)**: Dynamic curriculum rendering.
* **Portfolio (List & Detail)**: High-resolution image galleries.
* **Contact & Enroll Forms**: Capturing student interest.
* **Static Pages**: About, Terms, Privacy.

### Core Architecture Features
* **Supabase + Prisma Integration**: Dynamic loading of courses and portfolio imagery.
* **Email Notifications (New)**: Integrated via Resend to notify staff of `/enroll` submissions.
* **Image Optimization (New)**: Essential requirement. All uploaded portfolio images must be compressed/optimized before saving to storage.

## 3. Out of Scope (Phase 2)
* **User Accounts / Student Portal**: The `/login` route will act as a placeholder.
* **Payment Processing**: Handled offline for MVP.
