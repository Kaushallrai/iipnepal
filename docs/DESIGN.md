# IIP Nepal — Style Reference (Based on https://www.creativegiants.art)
> An oversized editorial poster on cream paper, directly modeled after the architecture of [Creative Giants](https://www.creativegiants.art/). One enormous condensed poster wordmark, one full-bleed photographic band with overlay, architectural hairline grid guidelines, inverted dark flagship showcases, and a deep black editorial footer with a colossal bottom wordmark.

**Theme:** light · **Primary Reference Site:** [https://www.creativegiants.art](https://www.creativegiants.art/)

This document defines the visual system for IIP Nepal by directly adapting the award-winning layout, typography, surface progression, and component patterns of **Creative Giants** (`https://www.creativegiants.art/`) while honoring the authentic IIP Nepal identity and original content:
1. **Top Chrome**: A whisper-weight header directly on the Bone White (`#fffef7`) canvas with zero heavy background. Circular camera mark + all-caps tracking microtype on the left (`PHOTOGRAPHY EDUCATION // KATHMANDU CENTRE · EST. 2011`), desktop nav links, and pill actions on the right (Yellow Pill "Enroll" + Black Pill "Menu").
2. **Display Poster Wordmark & 100dvh Hero**: A colossal, sculptural headline (`IIP NEPAL`) rendered in condensed architectural poster lettering (`Bebas Neue` / `--font-poster`) spanning edge-to-edge across the screen at poster scale on cream paper, followed by a full-bleed documentary photo band. The entire hero section fits 100% within the viewport height (`h-[calc(100dvh-72px)] sm:h-[calc(100dvh-80px)]`) without causing vertical scrollbar overflow. Animated with Creative Giants' signature GSAP clipPath entrance sequence (`clipPath: inset(0% 0% 100% 0%)` for top wordmark, fading in the headline, `clipPath: inset(100% 0% 0% 0%)` for the image band, and staggered overlay reveal).
3. **Hero Image Band & Dual Actions**: Full-bleed edge-to-edge documentary photography directly under the poster headline, with bottom-left location tag (`KATHMANDU, NEPAL // EST. 2011`), statement headline (`Welcome to the IIP Centre Nepal!`), authentic welcoming narrative, and dual generous action pills (`Enroll Online` in IIP Yellow and `Explore Courses` in Hero Glass).
4. **Architectural Grid Guidelines**: Subtle 5-column vertical 1px hairline rules (`rgba(0,0,0,0.04)`) spanning down the page, providing Swiss architectural discipline.
5. **"What We Do" / Manifesto Section**: A 12px all-caps eyebrow (`WHAT WE DO // VISION & MISSION`), an oversized 44px–46px Switzer weight-300 light manifesto quote, supporting narrative, a drawing 1px hairline divider, and a 3-metric statistics grid (`13+`, `5,000+`, `100%`) with 1px-stroke line icons. No repetitive pillar cards.
6. **Curriculum & Courses Grid with Chromatic Cards**: 3-column sharp 0px card layout, circular outline arrow controls (`←` `→`), category filter pills, horizontal touch snap carousel for mobile/tablet, and signature pastel card surfaces (`#a5ebd6` Mint Wash, `#ffacea` Candy Pink, `#a5c8eb` Powder Blue) for intentional color ruptures.
7. **Creative Giants Pinned Horizontal Parallax Projects Section (`section_projects-scroll theme-dark`)**: Signature full-width deep black (`#0a0a0a`) section showcasing Student Work & Fieldwork / Portfolio & Student Projects.
   - **Desktop (`(min-width: 991px)`)**: Pinned horizontal scroll container via GSAP ScrollTrigger (`pin: true`, `pinSpacing: true`, `scrub: 1.2`, `anticipatePin: 1`). Slides translate across `x: -scrollWidth`. Each slide features Creative Giants' 3-column layout with multi-speed parallax:
     - Left column (`projects-scroll_content-left`): Eyebrow (`PROJECT 01`), display headline, photographer credit (`xPercent: -18`, `scrub: 3`).
     - Middle column (`projects-scroll_content-middle`): Sharp documentary photo frame with authentic Nepal imagery (`xPercent: -45`, `scrub: 3`).
     - Right column (`projects-scroll_content-right`): Underlined category tags, narrative summary, and "Explore Project ↗" CTA (`xPercent: -75`, `scrub: 3`).
   - **Bottom Fixed Progress Bar & Counter**: 1px hairline progress track with active indicator width (`0% -> 100%`), number counter (`01 / 04`), and "All Projects" pill button.
   - **Tablet / Mobile Fallback (`< 991px`)**: Horizontal touch snap carousel on `#0a0a0a` deep black background with circular chevron navigation controls (`←` `→`).
8. **Closing CTA & Deep Black Editorial Footer**: Deep black (`#0a0a0a`) closing canvas with verbatim closing CTA ("Ready to Start Your Photography Journey?"), generous pill buttons ("Enroll Now" and "Contact Us"), followed by full-width editorial link list rows with right-up arrows (`HOME ↗`, `COURSES ↗`, `PORTFOLIO ↗`, `ABOUT IIP ↗`, `ENROLL ONLINE ↗`, `CONTACT US ↗`), contact coordinates, and culminating in the colossal `IIP NEPAL` display poster wordmark stretching edge-to-edge across the bottom in muted stone/white.

---

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Bone White | `#fffef7` | `--color-bone-white` | The only page canvas. Also card surfaces and text on dark photography or Navy Ink. Replaces pure `#ffffff` everywhere |
| Ink Black | `#000000` | `--color-ink-black` | Primary text, icons, outlines, Dark Pill fill |
| Graphite | `#666666` | `--color-graphite` | Secondary body copy, captions, metadata, eyebrow labels |
| Ash | `#aaaaaa` | `--color-ash` | Input borders, outline pills, inactive links, carousel controls. Borders only — never body text |
| Hairline | `#e3e0d6` | `--color-hairline` | Dividers, footer top rule, frame rules on the cream canvas |
| IIP Yellow | `#ffc61a` | `--color-iip-yellow` | **Enroll button fill, tag chips, hover underline highlights, active markers.** Always paired with Ink Black text. Never as text on cream, never as a section fill |
| Navy Ink | `#101731` | `--color-navy-ink` | The only dark field besides photography: one featured accent card or the closing CTA overlay base. Text inverts to Bone White |
| Powder Blue | `#a5c8eb` | `--color-powder-blue` | Pastel card tint |
| Mint Wash | `#a5ebd6` | `--color-mint-wash` | Pastel card tint |
| Candy Pink | `#ffacea` | `--color-candy-pink` | Pastel card tint |
| Magenta Bloom | `#8a0467` | `--color-magenta-bloom` | 1px editorial tag border on image edges, tiny decorative hits only |
| Forest Teal | `#03624c` | `--color-forest-teal` | 1px editorial tag border on image edges, tiny decorative hits only |
| Charcoal Scale | `#4d4c4a` | `--color-charcoal-scale` | Start of the dark-footer gradient variant only |

**Color rules**
- Pastels, Magenta, and Teal are **accents, never floods**. Max one chromatic card per row.
- Yellow is the only CTA color. Pastels and Navy are never used for buttons.
- No blue, green, or purple as UI accents (links, focus, states). Interface stays black, cream, and gray, with yellow as the exception.

---

## Tokens — Typography

### Switzer — single-family system · `--font-switzer`
- **Substitute:** Inter (300, 400), or any geometric humanist sans with a true 300 weight
- **Weights:** 300 for display and headlines (20px and up), 400 for body, metadata, and UI controls
- **Sizes:** 12, 14, 16, 20, 34, 54, 84
- **Line height:** 1.00 – 1.43
- **Letter spacing:** tightens as size grows — `-0.04em` at 84px, `-0.023em` at 54px, `-0.02em` at 34px, `-0.018em` at 20px and below
- **Role:** One family for everything. Weight 300 at poster sizes keeps the hairline strokes airbrushed on the cream canvas; weight 400 is used wherever text is small so it stays legible.

**Never bold a Switzer heading.** Do not use 500+ anywhere.

**Accessibility note:** weight 300 is only used at 20px and above. Body, captions, labels, buttons, and form text are weight 400.

### Type Scale

| Role | Weight | Size (desktop / mobile) | Line Height | Letter Spacing | Token |
|------|--------|-------------------------|-------------|----------------|-------|
| caption / label (all-caps) | 400 | 12px / 12px | 1.43 | 0.04em | `--text-caption` |
| body-sm | 400 | 14px / 14px | 1.43 | -0.018em | `--text-body-sm` |
| body | 400 | 16px / 16px | 1.5 | -0.018em | `--text-body` |
| subheading / card-title | 300 | 20px / 20px | 1.4 | -0.018em | `--text-subheading` |
| heading-sm | 300 | 34px / 26px | 1.25 | -0.02em | `--text-heading-sm` |
| heading | 300 | 54px / 34px | 1.0 | -0.023em | `--text-heading` |
| display | 300 | 84px / 44px | 1.0 | -0.04em | `--text-display` |

Display is for poster statements: never more than two lines. Used for the home hero, page titles, and the closing CTA.

---

## Tokens — Spacing & Shapes

**Base unit:** 8px · **Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 8 | 8px | `--spacing-8` |
| 16 | 16px | `--spacing-16` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 112 | 112px | `--spacing-112` |

### Border Radius

| Element | Value |
|---------|-------|
| buttons | 1440px |
| pills | 1440px |
| tags | 1440px |
| cards | 0px |
| images | 0px |
| inputs | 0px |
| panels | 0px |

**The rule:** fully rounded is for **interactive elements only** (buttons, pills, tags, the Menu trigger, carousel arrows). Editorial surfaces — images, cards, frames, form fields — stay sharp.

### Shadows
None. No drop shadows anywhere. Separation comes from whitespace, color tint, scale, and 1px hairlines.

### Layout
- **Page model:** full-bleed. Content runs edge to edge with consistent side padding: 16px mobile, 24px tablet, 32px desktop (48px on screens above 1600px).
- **Text measure:** body copy blocks are capped at ~680px; legal pages at 720px.
- **Section padding:** 112px desktop, 80px tablet, 64px mobile
- **Section gap:** 64px (48px on mobile)
- **Card padding:** 24px (only on tinted cards)
- **Element gap:** 8px
- **Breakpoints:** mobile below 768px, tablet 768–1023px, desktop 1024px and up. Each viewport gets its own intentional layout, not a shrunk desktop.

---

## Components

### Top Navigation
**Role:** Persistent public navigation. Chrome that recedes.

No background fill — the cream page is the header. ~16px vertical padding, full-bleed, ~64px tall. IIP logo mark at the far left. Desktop links in 12px Switzer 400 all-caps: **Home, Courses, Portfolio, About, Contact**. At the far right: a plain **Login** text link and the **Yellow Pill** labeled Enroll. Over the dark hero photograph the bar is transparent with Bone White text. Sticky, with a Bone White fill and 1px Hairline bottom border once the user scrolls past the hero.

On mobile: logo and a **Pill Menu Button** (Ink Black fill, Bone White text) that opens a full-screen Bone White overlay with large weight-300 links and the Yellow Pill at the bottom.

### Yellow Pill Button
**Role:** The single primary conversion control (Enroll) — header, course pages, closing CTA.

`#ffc61a` fill, Ink Black text, 16px Switzer 400, no border, 1440px radius, 12px 24px padding. Hover: slightly darker yellow. Visible in the nav at all times.

### Dark Pill Button
**Role:** Secondary action on cream (e.g. "Explore Courses" on light sections, Menu trigger).

Ink Black fill, Bone White text, 16px Switzer 400, 1440px radius, 12px 24px padding, no border.

### Outline Pill
**Role:** Tertiary action, filters, tag chips on cream.

Transparent fill, Ink Black text, 1px Ash border, 1440px radius. Hover: border darkens to Ink Black, nothing else changes.

### Hero Glass Pill
**Role:** Secondary action placed directly over dark photography ("Explore Courses" in the hero).

`rgba(255,254,247,0.16)` fill, 1px `rgba(255,254,247,0.32)` border, Bone White text, 1440px radius, 12px 24px padding. This is the only place glass is allowed.

### Text Link With Arrow
**Role:** Navigation to deeper pages.

Switzer 400 in Ink Black with a trailing arrow ("Explore Courses →", "View Portfolio →", "View course →"). On hover, a 2px IIP Yellow underline appears; text stays Ink Black. Never browser-default blue.

### Photographic Display Hero
**Role:** Opening statement on the home page.

A full-bleed, darkened documentary photograph of a student or mentor at work in Kathmandu — muted, warm gray, no glossy grade, no stock devices. No border radius, no shadow. The display headline (84px, weight 300, `-0.04em`, Bone White) sits bottom-left with 32px padding, preceded by a 12px all-caps Bone White meta line (for example "KATHMANDU, NEPAL"). Beneath it: the Hero Glass Pill (Explore Courses) and the Yellow Pill (Enroll). The tagline "The World is Yours" can anchor the message. Motion: a subtle image fade-in only.

### Section Title Block
**Role:** Section opener. Replaces the old "Eyebrow Capsule".

An optional 12px all-caps Graphite label on a single line, followed by a 34–54px weight-300 statement headline. No background, no rules, no capsule. Separation by whitespace alone: 48–64px above the title block, 32px below the headline. Use the eyebrow label sparingly — strong headlines stand on their own.

### Editorial Statement Block
**Role:** Manifesto-style introduction for the About intro and About page.

Large weight-300 copy (54px) in Ink Black on Bone White, left-aligned, never more than a few lines. Content comes from IIP's actual mission — original copy only. 48px gap before the following visual.

### Why IIP Grid
**Role:** Text-led overview of real differentiators.

Four columns on the cream canvas (two on tablet, one on mobile). No card borders, no fills. Each column: a 16–20px 1px-stroke Ink Black line icon (Lucide), a 20px weight-300 heading, and 14–16px Graphite supporting copy. 16px internal gaps, 32px column gaps. Whitespace separates, nothing else.

### Course Card
**Role:** Scannable summary of a course on the Courses page and the home preview.

No border, no shadow, no radius. A 4:3 sharp-cornered image on top. 16px below: a 20px weight-300 title in Ink Black. 8px below: a 14px Graphite description, 3-line clamp. Then a 12px all-caps metadata row (for example "3 MONTHS · MENTOR-LED") and a "View course →" link. Optional 1px Magenta or Teal border on the image edge as an editorial tag.

**Composition:** avoid a monotonous identical grid. For the five courses, use an editorial layout — two flagship mentor-led diplomas on the first row, three modular courses on the second. On desktop, up to three columns with 48px column gaps; two on tablet; one on mobile.

### Chromatic Accent Card
**Role:** The occasional pop of color in a card grid.

One of Powder Blue, Mint Wash, or Candy Pink as the card surface with 24–32px padding and Ink Black text — or Navy Ink with Bone White text for a featured block. 0px radius. **Never more than one per row.**

### Portfolio Grid
**Role:** Image-led showcase of student and project work.

Masonry or editorial grid, free-ratio so each photograph keeps its composition. Sharp corners, 16px gaps. Captions in 12px all-caps below, or revealed on hover. Hover: image scales to 1.03 inside an overflow-hidden frame with a caption fade (disabled under `prefers-reduced-motion`).

### Portfolio Detail
Opens with a Hero Image Band, followed by title, short story, 12px all-caps metadata, a full-width gallery, related work, and previous/next navigation. Each project reads as a photo story.

### Hero Image Band
**Role:** Full-bleed editorial photography.

Full viewport width, no radius, no shadow. Meta text (12px all-caps) and a 34px weight-300 headline sit bottom-left, 32px from the left and bottom edges, in Bone White. The UI yields entirely to the photograph.

### Course Detail Layout
**Role:** In-depth information at /courses/[slug].

Open with a Hero Image Band carrying the course title, duration, type, and the Yellow Pill. Then sections in order: Overview, What You'll Learn, Course Structure, Who It's For, Requirements, Important Information, Enrollment CTA. On desktop, a sticky summary panel (Bone White, 1px Hairline border, 0px radius, 32px padding) shows duration, type, and an Enroll pill; on mobile it becomes a fixed bottom bar.

### Form Field
**Role:** Inputs for Enroll, Contact, and Login.

Transparent fill on Bone White, 1px Ash border, 0px radius, 48px height, Switzer 16px weight 400. Labels sit above in 12px all-caps Graphite. Focus: 2px Ink Black ring. Errors: Ink Black text, 2px Ink Black border, and an icon — never color alone.

### Enrollment Steps Indicator
**Role:** Progress marker for the Enroll flow.

Four 12px all-caps labels (CHOOSE COURSE, YOUR DETAILS, SUBMIT, CONFIRMATION) separated by 1px Hairline rules. Active step Ink Black, the rest Graphite.

### Carousel Arrow Control
**Role:** Next/previous on card rows.

32px circle, 1px Ash border, transparent fill, 16px Ink Black chevron. Hover: border darkens to Ink Black only. Floats at the right edge of the section title.

### Tag / Category Pill
**Role:** Small labels and filters.

8px 12px padding, 1440px radius, 12px all-caps. Default: Ink Black text, transparent fill, 1px Ash border. Accent: IIP Yellow fill, Ink Black text, no border.

### Top Navigation Bar
**Role:** Persistent public editorial navigation. Chrome that recedes.

No heavy background fill — the Bone White (`#fffef7`) canvas is the header with subtle 1px hairline border on scroll. Navigation links are directly visible in desktop view (`Home`, `Courses`, `Portfolio`, `About`, `Contact`) in 12px font-mono uppercase tracking (`0.25em`). At the far right: Yellow Pill "Enroll" (`#ffc61a`) with Ink Black text. Standalone desktop "Menu" button toggle is removed; on mobile/tablet a lightweight responsive menu handles navigation cleanly.

### Closing CTA (Compact Height)
**Role:** High-impact closing conversion before Get In Touch / Footer.

Sleek, decreased height (`py-14 sm:py-20 lg:py-24`) on `#0a0a0a` deep black background. Headline "Ready to Start Your Photography Journey?" rendered in Switzer 300 / font-light with signature Creative Giants line-by-line masked reveals. Dual action pills: Yellow Pill "Enroll Now" and translucent glass "Contact Us".

### Animated Admissions Timeline
**Role:** Clear 7-step admission process with interactive timeline motion.

An editorial timeline layout featuring an animated vertical 1px hairline track that draws/fills active progress on scroll. Steps 01 to 07 illuminate as scroll passes each node. Step titles and descriptions enter via staggered line reveals.

### Testimonials Section
**Role:** Authentic student and alumni reviews modeled after Creative Giants.

Minimalist quotation slider featuring oversized weight-300 typography (`text-[26px] sm:text-[36px] lg:text-[42px]`), circular outline arrow navigation controls (`←` `→`), subtle counter indicator, and line-by-line quote reveals.

### Brand & Partner Marquee
**Role:** Institutional validation and photography affiliations.

Full-width continuous smooth linear marquee ticker (`#fffef7` canvas with 1px top and bottom hairline borders) featuring authentic IIP partners: IIP Foundation, Canon Professional Services, Nikon School, Photo Kathmandu, National Geographic Contributors, Patan Museum, and Nepal Tourism Board.

### News & Fieldwork Dispatches
**Role:** Editorial journal and field updates.

Grid of documentary story cards featuring sharp 0px photography frames, subtle hover scale (`scale: 1.05`), category tags, and "Read Dispatch ↗" arrow links.

### Get In Touch Section
**Role:** Editorial contact and inquiry invitation directly modeled after Creative Giants' `section_contact-cta`.

Two-column editorial split: left column features a 12px all-caps eyebrow ("GET IN TOUCH"), display headline ("Speak to us."), narrative invitation, and Kathmandu campus coordinates; right column features a clean inquiry form with sharp 0px inputs and Yellow Pill "Send Enquiry" button.

### Footer
**Role:** Full-width editorial links, contact details, and colossal bottom poster wordmark.

Deep black (`#0a0a0a`) surface with full-width link list rows with trailing right-up arrows (`↗`) separated by 1px hairlines. Links reveal with stagger on scroll into view. The colossal `IIP NEPAL` display poster wordmark stretches edge-to-edge across the bottom with subtle scroll parallax.

### Creative Giants Animation System & Parallax
- **Signature Line-by-Line Reveal (`[js-line-animation]`)**: Major headings, quotes, and manifesto lines are wrapped in `overflow: hidden` line containers (`.line`) with inner elements (`.line-inner`) that animate `fromTo({ yPercent: 100 }, { yPercent: 0, duration: 0.7s, ease: "power3.out", stagger: 0.08s })` triggered on scroll.
- **Hero Entrance Sequence**: ClipPath wipe on top header (`clipPath: inset(0% 0% 100% 0%)`), colossal wordmark fade & slide, image band vertical clipPath wipe (`clipPath: inset(100% 0% 0% 0%)`), and line-by-line overlay text stagger.
- **Scroll Parallax**: Multi-speed scroll parallax applied to documentary image bands (`yPercent: -20` to `yPercent: -40`), background layers, and bottom footer wordmark.

### Legal Page Body
**Role:** Terms and Privacy.

Single column, max-width 720px, Switzer 16px / 1.7 in Ink Black on Bone White, with weight-300 headings at 34px. No imagery or decoration.

---

## Do's and Don'ts

### Do
- Use Bone White `#fffef7` as the only page background.
- Set headlines in weight 300 at 20px and above; push display type to 84px with `-0.04em` tracking (44px on mobile).
- Use weight 400 for body, labels, buttons, and form text.
- Apply the 1440px pill radius to every button, tag, and menu trigger. Keep cards, images, frames, and inputs sharp.
- Let full-bleed photographs carry the visual weight; let UI chrome recede.
- Keep one primary CTA — the Yellow Pill "Enroll" — visible in the nav at all times.
- Ration color: chromatic cards are one-per-row, borders are 1px.
- Keep section gaps at 48–64px and let whitespace be the primary structural tool.
- Left-align content. Only the Section Title Block and hero are allowed to dominate the viewport width.
- Add a section only if it helps visitors understand IIP, evaluate a course, see student work, or take action.

### Don't
- Don't bold headlines or use any weight above 400.
- Don't use pure `#ffffff`. The warm off-white is the signature.
- Don't use drop shadows, gradients (except the dark-footer variant), heavy blur, or glassmorphism outside the Hero Glass Pill.
- Don't round cards, images, frames, or inputs.
- Don't fill a CTA with anything other than IIP Yellow, Ink Black, or the outline/glass pills.
- Don't use IIP Yellow as text or as a large fill.
- Don't put a capsule eyebrow above every section header.
- Don't exceed two lines on a display headline.
- Don't turn the Why IIP grid into bordered cards.
- Don't use bright stock-education photography, giant-device mockups, or fake setups.
- Don't alternate dark and light bands; the dark moments are the hero, the closing CTA, and at most one Navy Ink accent card.
- Don't animate anything but opacity and transform, 300–600ms, and always respect `prefers-reduced-motion`.

---

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Canvas | `#fffef7` | Page background everywhere |
| 1 | Card Tint | `#a5ebd6` / `#ffacea` / `#a5c8eb` | Pastel accent card surfaces, one per row |
| 2 | IIP Yellow | `#ffc61a` | Enroll pill, tag chips — never a section fill |
| 3 | Inverted Field | `#101731` | Featured accent card or CTA overlay base; text inverts to Bone White |

## Elevation

No meaningful elevation. Do not add box-shadows to cards, buttons, panels, or modals. Hierarchy comes from scale, color tint, whitespace, and 1px Hairline rules.

---

## Imagery

Editorial photography dominates: full-bleed, sharp-cornered, no rounded masks. Treatment is documentary and atmospheric — students at work, mentors teaching, hands on cameras, Kathmandu light — muted and warm, never staged. Hero images are 16:9; course cards use consistent 4:3 crops; portfolio uses free-ratio masonry so each photograph keeps its composition. Student work is shown large and uncropped where possible, with `alt` text and blur placeholders on every image. No illustration, no 3D, no product mockups. Icons are tiny 1px-stroke Lucide line marks (16–20px) in Ink Black or Graphite. Density is image-led; text is a quiet annotation layer.

---

## Layout

Full-bleed page model with consistent side padding. Every section opens with a Section Title Block and 48–64px of negative space. Content is left-aligned. The only sticky element is the header (plus the course-page summary panel). The home page follows the compact structure from `BRIEF.md`.

| Page | Pattern |
|------|---------|
| Home | Full-bleed photo hero, Why IIP, Courses Preview (editorial composition), Student Work, About intro, Closing CTA |
| Courses | Section Title Block (page title in display type), then editorial course grid |
| Course Detail | Hero Image Band, structured information, sticky summary panel |
| Portfolio / Detail | Large masonry image grid; detail pages as photo stories |
| About | Statement block, institute story, faculty included inline (no separate faculty pages) |
| Contact | Contact details, form, and map |
| Enroll | Short stepped form with Enrollment Steps Indicator |
| Login | Minimal centered form, kept out of the primary nav |
| Terms / Privacy | Plain readable text column |

---

## Agent Prompt Guide

**Quick Color Reference**
- text: `#000000`
- background: `#fffef7`
- secondary text: `#666666`
- border / outline: `#aaaaaa`
- divider: `#e3e0d6`
- primary action: `#ffc61a` fill with `#000000` text
- pastel card surface: `#a5ebd6`, `#ffacea`, or `#a5c8eb`
- featured dark card: `#101731` with `#fffef7` text
- accent hairlines: `#8a0467`, `#03624c` (1px only)

**Example Component Prompts**

1. *Hero:* Full-bleed dark documentary photograph, no radius. Bottom-left, 32px padding: a 12px all-caps Bone White meta line, then an 84px Switzer weight-300 headline, `-0.04em`, line-height 1.0, Bone White, max two lines. Below it, a Hero Glass Pill ("Explore Courses") and an IIP Yellow pill ("Enroll").
2. *Top nav:* Transparent, ~64px, Bone White text over the hero. 12px all-caps Switzer 400 links (Home, Courses, Portfolio, About, Contact), plain "Login" text link, and a `#ffc61a` pill "Enroll" with Ink Black text at the far right.
3. *Course card:* No border, 0px radius. 4:3 sharp image, 20px weight-300 title in Ink Black 16px below it, 14px Graphite description with a 3-line clamp, a 12px all-caps metadata row, and a "View course →" link.
4. *Why IIP:* Four columns on Bone White, no card borders. 1px-stroke line icons, 20px weight-300 headings in Ink Black, 14–16px Graphite copy, 32px column gaps.
5. *Closing CTA:* Full-bleed muted photograph with a dark overlay, a Bone White weight-300 headline ("Ready to start your photography journey?"), and a single `#ffc61a` pill "Enroll at IIP →".

---

## Similar Brands

- **Pentagram** — Oversized editorial display headlines, light-weight typography, and minimal chrome on a neutral canvas.
- **Locomotive** — Studio-as-art-book treatment: cream canvas, large weight-300 statements, sharp full-bleed imagery, pill-shaped controls.
- **Magnum Photos** — Image-first presentation where the interface stays out of the way.
- **A24** — Dark cinematic photography paired with oversized quiet typography.
- **B-Reel** — Single-line display headline, edge-to-edge hero, near-white canvas with rationed accents.

---

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-bone-white: #fffef7;
  --color-ink-black: #000000;
  --color-graphite: #666666;
  --color-ash: #aaaaaa;
  --color-hairline: #e3e0d6;
  --color-iip-yellow: #ffc61a; /* placeholder: swap for exact logo yellow */
  --color-navy-ink: #101731;
  --color-powder-blue: #a5c8eb;
  --color-mint-wash: #a5ebd6;
  --color-candy-pink: #ffacea;
  --color-magenta-bloom: #8a0467;
  --color-forest-teal: #03624c;
  --color-charcoal-scale: #4d4c4a;

  /* Typography — Font Family */
  --font-switzer: 'Switzer', Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale (desktop) */
  --text-caption: 12px;
  --leading-caption: 1.43;
  --tracking-caption: 0.04em;
  --text-body-sm: 14px;
  --leading-body-sm: 1.43;
  --tracking-body-sm: -0.018em;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.018em;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.018em;
  --text-heading-sm: 34px;
  --leading-heading-sm: 1.25;
  --tracking-heading-sm: -0.02em;
  --text-heading: 54px;
  --leading-heading: 1;
  --tracking-heading: -0.023em;
  --text-display: 84px;
  --leading-display: 1;
  --tracking-display: -0.04em;

  /* Typography — Weights */
  --font-weight-light: 300;
  --font-weight-regular: 400;

  /* Spacing */
  --spacing-unit: 8px;
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-112: 112px;

  /* Layout */
  --nav-height: 64px;
  --section-gap: 64px;
  --card-padding: 24px;
  --element-gap: 8px;
  --page-padding: 32px;

  /* Border Radius */
  --radius-full: 1440px;
  --radius-buttons: 1440px;
  --radius-pills: 1440px;
  --radius-tags: 1440px;
  --radius-cards: 0px;
  --radius-images: 0px;
  --radius-inputs: 0px;

  /* Surfaces */
  --surface-canvas: #fffef7;
  --surface-card-tint: #a5ebd6;
  --surface-card-tint-pink: #ffacea;
  --surface-card-tint-blue: #a5c8eb;
  --surface-inverted-field: #101731;
}

/* Tablet */
@media (max-width: 1023px) {
  :root { --page-padding: 24px; --section-gap: 56px; }
}

/* Mobile overrides */
@media (max-width: 767px) {
  :root {
    --page-padding: 16px;
    --section-gap: 48px;
    --text-heading-sm: 26px;
    --text-heading: 34px;
    --text-display: 44px;
    --tracking-display: -0.035em;
  }
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-bone-white: #fffef7;
  --color-ink-black: #000000;
  --color-graphite: #666666;
  --color-ash: #aaaaaa;
  --color-hairline: #e3e0d6;
  --color-iip-yellow: #ffc61a;
  --color-navy-ink: #101731;
  --color-powder-blue: #a5c8eb;
  --color-mint-wash: #a5ebd6;
  --color-candy-pink: #ffacea;
  --color-magenta-bloom: #8a0467;
  --color-forest-teal: #03624c;
  --color-charcoal-scale: #4d4c4a;

  /* Typography */
  --font-switzer: 'Switzer', Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --text-body-sm: 14px;
  --text-body: 16px;
  --text-subheading: 20px;
  --text-heading-sm: 34px;
  --text-heading: 54px;
  --text-display: 84px;

  /* Spacing */
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-112: 112px;

  /* Border Radius */
  --radius-full: 1440px;
}
```