
# IIP Website Redesign — Project Report
 
## 1. Project Overview
 
The project is a **complete redesign of the IIP (Indian Institute of Photography Nepal) website (https://www.iipnepal.com/).**.
 
The goal is not to simply reproduce the existing website. The new website should present IIP as a **modern, professional photography education institute**, with a much cleaner visual identity, better information architecture, stronger presentation of courses and student work, and a smoother path toward enrollment.
 
The redesign should feel:
 
* Modern
* Professional
* Minimal
* Photography-focused
* Premium without being excessive
* Visually engaging
* Easy to navigate
* Responsive across desktop, tablet, and mobile
* Fast and maintainable
 
The website should prioritize **useful content and strong visual communication** rather than filling pages with unnecessary sections.
 
---
 
# 2. Main Objectives
 
The redesigned website should accomplish several things:
 
### Present IIP clearly
 
Visitors should quickly understand:
 
* What IIP is
* What IIP offers
* Why someone would study photography at IIP
* What courses are available
* What students can achieve
* How to enroll/contact IIP
 
### Showcase photography
 
Photography should be a major part of the visual experience.
 
The website should make good use of:
 
* Photography
* Student work
* Portfolio projects
* Course imagery
* Editorial-style layouts
* Large visual sections
 
The imagery should feel intentional rather than simply being used as decoration.
 
### Improve the user journey
 
The main visitor journey should be straightforward:
 
```text
Discover IIP
     ↓
Understand IIP
     ↓
Explore Courses
     ↓
View Course Details
     ↓
See Portfolio / Student Work
     ↓
Decide to Enroll
     ↓
Enroll / Contact
```
 
---
 
# 3. Website Pages
 
The agreed website structure is:
 
```text
├── Home
├── Courses
│   └── Course Detail
├── Portfolio
│   └── Portfolio Detail
├── About
├── Contact
├── Enroll
├── Login
├── Terms
└── Privacy
```
 
### Total
 
**11 page types/routes**
 
### Routes
 
```text
/                       → Home
 
/courses                → Courses
/courses/[slug]         → Course Detail
 
/portfolio              → Portfolio
/portfolio/[slug]       → Portfolio Detail
 
/about                  → About
 
/contact                → Contact
 
/enroll                 → Enroll
 
/login                  → Login
 
/terms                  → Terms
 
/privacy                → Privacy
```
 
Dynamic routes should be used for courses and portfolio items rather than creating separate hardcoded pages.
 
For example:
 
```text
/courses/basic-photography
/courses/advanced-photography
/courses/film-photography
```
 
can all use:
 
```text
/courses/[slug]
```
 
Similarly:
 
```text
/portfolio/project-one
/portfolio/project-two
```
 
can use:
 
```text
/portfolio/[slug]
```
 
---
 
# 4. Navigation
 
The navigation should remain simple.
 
### Primary navigation
 
```text
Home
Courses
Portfolio
About
Contact
```
 
### Primary CTA
 
```text
Enroll
```
 
### Secondary action
 
```text
Login
```
 
The navbar should **not be overloaded**.
 
We specifically moved away from having **Workshops** as a primary navigation item and preferred **Contact** instead.
 
---
 
# 5. Homepage
 
The homepage should be **compact**.
 
One of the important decisions was:
 
> Don't add sections simply because modern websites usually have them.
 
For example, **Featured Courses** was specifically removed because it wasn't considered necessary.
 
The homepage should contain only sections that actually help visitors understand IIP or move toward an important action.
 
A possible structure is:
 
```text
Home
│
├── Hero
├── Why IIP
├── Courses Preview
├── Portfolio / Student Work
├── About / Introduction
└── Enrollment CTA
```
 
The exact sections should be determined during design based on the actual content available.
 
### Hero
 
The hero should immediately communicate:
 
* IIP's identity
* Photography education
* What makes the institute relevant
* A clear action such as exploring courses or enrolling
 
It should be visually strong because photography is the central subject of the website.
 
### Why IIP
 
This section should answer:
 
> "Why should I consider IIP?"
 
Rather than generic marketing text, it should communicate actual differentiators and useful information.
 
### Courses Preview
 
A concise introduction to the available courses.
 
It should encourage users to:
 
```text
Explore Courses →
```
 
rather than attempting to display every course in detail on the homepage.
 
### Portfolio / Student Work
 
Photography should have a strong visual presence.
 
This section can introduce the portfolio and demonstrate the type/quality of work associated with IIP.
 
```text
View Portfolio →
```
 
### Final CTA
 
A clear final action:
 
```text
Ready to start your photography journey?
 
Enroll at IIP →
```
 
---
 
# 6. Courses
 
The Courses page should allow users to understand the available educational programs quickly.
 
Potential information:
 
* Course name
* Short description
* Duration
* Course type
* Key information
* Photography
* CTA
 
The page should not become a giant wall of text.
 
The visual design should make it easy to scan different courses.
 
---
 
# 7. Course Detail
 
Every course should have its own dedicated page.
 
Example:
 
```text
/courses/[slug]
```
 
The detail page should provide substantially more information than the Courses listing.
 
Potential content:
 
```text
Course Hero
Course Overview
What You'll Learn
Course Structure
Duration
Who It's For
Requirements
Learning Experience
Important Information
Enrollment CTA
```
 
The exact sections should depend on the actual course information available from IIP.
 
The design should prioritize **information hierarchy** so users can understand the course without feeling overwhelmed.
 
---
 
# 8. Portfolio
 
Portfolio is an important part of the redesigned website.
 
It should showcase photography work rather than functioning like a generic project grid.
 
Potential presentation:
 
```text
Portfolio
│
├── Project / Work
├── Project / Work
├── Project / Work
├── Project / Work
└── ...
```
 
The visual layout can make stronger use of:
 
* Large photography
* Masonry/grid layouts where appropriate
* Editorial compositions
* Hover interactions
* Image-focused storytelling
 
However, visual effects should not compromise usability or performance.
 
---
 
# 9. Portfolio Detail
 
Each portfolio item can have its own page:
 
```text
/portfolio/[slug]
```
 
The page can contain:
 
* Project title
* Photography
* Project description
* Photographer/student information where appropriate
* Project metadata
* Image gallery
* Related work
* Navigation to other projects
 
This allows individual projects to feel like proper photography stories rather than just cards in a grid.
 
---
 
# 10. About
 
The About page should explain IIP itself.
 
It should communicate:
 
* Who IIP is
* Its background
* Its purpose
* Photography education philosophy
* What students can expect
* Relevant institutional information
 
The page should feel authentic and informative rather than being filled with generic corporate language.
 
---
 
# 11. Faculty
 
**Faculty is NOT a separate page in the redesigned structure.**
 
We previously included:
 
```text
About
└── Faculty
    └── Faculty Detail
```
 
but this was removed after checking the existing IIP website and reconsidering the actual information architecture.
 
If faculty information is useful, it can be incorporated into the **About page** or another relevant section without creating separate routes.
 
---
 
# 12. Contact
 
Contact should be straightforward.
 
It should provide:
 
* Contact information
* Location
* Phone
* Email
* Social links where appropriate
* Contact form if required
* Map/location information if useful
 
The important thing is that a visitor shouldn't have to search around the website to figure out how to contact IIP.
 
---
 
# 13. Enroll
 
Enrollment is one of the primary conversion actions.
 
The page should provide the information and form necessary for someone interested in joining IIP.
 
Potential flow:
 
```text
Choose Course
      ↓
Provide Details
      ↓
Submit Enrollment
      ↓
Confirmation
```
 
The actual form fields should be based on IIP's requirements rather than adding unnecessary information.
 
---
 
# 14. Login
 
Login is included as a separate page.
 
```text
/login
```
 
It should not compete with the primary public-facing navigation.
 
The login experience can later connect to whatever student/admin functionality the project requires.
 
---
 
# 15. Terms & Privacy
 
Two basic legal pages:
 
```text
/terms
/privacy
```
 
These should remain visually simple and readable.
 
They don't need the same elaborate design treatment as the marketing pages.
 
---
 
# 16. Responsive Design
 
The entire website should be designed for:
 
### Desktop
 
```text
1 primary desktop layout
```
 
### Tablet
 
```text
1 tablet layout
```
 
### Mobile
 
```text
1 mobile layout
```
 
The goal isn't simply to shrink the desktop design.
 
Layouts should be intentionally adapted for each viewport.
 
Important considerations include:
 
* Navigation
* Typography
* Image crops
* Grid layouts
* Spacing
* CTA placement
* Forms
* Portfolio galleries
* Course information
 
---
 
# 17. Reusable Components
 
We specifically decided **not to predefine the component architecture yet**.
 
Instead:
 
> Build pages first, identify repeated patterns, and then extract genuinely reusable components.
 
For example, if the same course card appears on multiple pages, it should become reusable.
 
But we shouldn't create dozens of tiny components just for the sake of abstraction.
 
The principle is:
 
```text
Build → Identify repetition → Extract → Reuse
```
 
The project should therefore have a component system, but its exact structure should evolve naturally from the actual design.
 
---
 
# 18. Recommended Technical Structure
 
The initial structure should remain clean and relatively lightweight:
 
```text
iip/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx
│   │   ├── courses/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── portfolio/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   └── enroll/
│   │       └── page.tsx
│   │
│   ├── login/
│   │   └── page.tsx
│   ├── terms/
│   │   └── page.tsx
│   ├── privacy/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── globals.css
│
├── components/
│   └── # Reusable components created as needed
│
├── lib/
│   ├── data/
│   ├── constants.ts
│   └── utils.ts
│
├── types/
├── hooks/
│
├── public/
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── .env.local
├── .gitignore
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```
 
---
 
# 19. Design Direction
 
The visual identity should feel appropriate for a **photography institute**, rather than a generic education website.
 
### Direction
 
**Editorial + minimal + cinematic + modern.**
 
Photography should be allowed to dominate visually.
 
Use:
 
* Strong typography
* Large imagery
* Generous whitespace
* Interesting editorial layouts
* Subtle motion
* Clean navigation
* Strong visual hierarchy
* Carefully chosen transitions
 
Avoid:
 
* Excessive gradients
* Generic SaaS-style cards
* Too many floating elements
* Excessive glassmorphism
* Unnecessary animations
* Excessive blur
* Overloaded homepage
* Generic stock-education aesthetics
 
The design should feel **crafted**, not like a template.
 
---
 
# 20. Animation & Interaction
 
Animations should enhance the photography/editorial experience rather than become the focus.
 
Possible uses:
 
* Hero image transitions
* Image reveal animations
* Subtle page transitions
* Scroll-based reveals
* Hover interactions
* Typography movement
* Portfolio transitions
 
But:
 
> **Performance and usability come before animation.**
 
Animations should remain smooth on lower-powered devices as well.
 
---
 
# 21. Content Philosophy
 
The website should answer the visitor's questions quickly.
 
Every section should have a reason to exist.
 
Before adding a section, ask:
 
> Does this help the visitor understand IIP, evaluate a course, see the quality of work, or take an important action?
 
If not, it probably doesn't belong on the page.
 
This is especially important for the homepage.
 
---
 
# 22. Information Architecture
 
The overall architecture should remain simple:
 
```text
                    IIP
                     │
       ┌─────────────┼─────────────┐
       ↓             ↓             ↓
    Courses       Portfolio       About
       │             │
       ↓             ↓
 Course Detail   Portfolio Detail
       │
       ↓
     Enroll
       │
       ↓
    Contact
```
 
Supporting pages:
 
```text
Login
Terms
Privacy
```
 
---
 
# 23. Core Design Principle
 
The redesigned website should **not try to show everything immediately**.
 
Instead:
 
```text
Home
 ↓
Interest
 ↓
Explore
 ↓
Detailed information
 ↓
Decision
 ↓
Enroll
```
 
The homepage introduces IIP.
 
The Courses page explains the education.
 
The Course Detail page provides depth.
 
The Portfolio demonstrates the work.
 
The About page establishes the institute.
 
The Contact and Enroll pages provide the next action.
 
That gives the website a clear purpose without making it unnecessarily large.
