# IIP Nepal - Product Requirements Document (PRD)

## 1. Project Overview
The IIP Nepal (Indian Institute of Photography Nepal) project is a complete website redesign aimed at presenting IIP as a modern, professional photography education institute. The goal is to move away from standard templates and create a highly visual, editorial-style experience that drives course enrollment.

## 2. Target Audience
* Aspiring photographers looking for foundational courses.
* Advanced photographers seeking specialized workshops or classes.
* Visitors looking to view high-quality photography portfolios.

## 3. Core User Journey
The website is designed around a progressive disclosure of information:
`Home -> Interest -> Explore -> Detailed Information -> Decision -> Enroll`

## 4. Site Architecture & Pages
The website consists of 11 core routes. Dynamic routing will be used for courses and portfolios to ensure scalability.

### Primary Navigation
* **Home (`/`)**: Compact introduction, Hero, Why IIP, Course/Portfolio previews.
* **Courses (`/courses`)**: Overview of educational offerings.
* **Course Detail (`/courses/[slug]`)**: In-depth syllabus, requirements, and outcomes.
* **Portfolio (`/portfolio`)**: High-quality gallery of student and institute work.
* **Portfolio Detail (`/portfolio/[slug]`)**: Detailed view of specific projects.
* **About (`/about`)**: Institute background and mission.
* **Contact (`/contact`)**: General inquiries.

### Action Pages
* **Enroll (`/enroll`)**: The primary conversion action.
* **Login (`/login`)**: Secondary action for existing users.
* **Terms (`/terms`)** & **Privacy (`/privacy`)**: Legal pages.

## 5. Functional Requirements
* **CMS Integration**: Courses and Portfolio items must be manageable via a database (Supabase) so staff can add new content without code changes.
* **Dynamic Routing**: Automatic generation of `/courses/[slug]` and `/portfolio/[slug]` pages based on database entries.
* **Forms**: Contact and Enrollment forms with validation and data storage.

## 6. Non-Functional & Design Requirements
* **Aesthetics**: "Editorial photography school in warm film grain." Must adhere strictly to `DESIGN.md` tokens (Geist font, Charcoal Ink, Workshop Ivory).
* **Performance**: Highly optimized image loading (crucial for a photography site).
* **Motion**: Premium, fluid interactions using GSAP.
* **Responsiveness**: Flawless experience across mobile, tablet, and desktop.
