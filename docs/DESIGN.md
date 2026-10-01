# IIP Nepal — Style Reference
> A photography school in film grain. Build bright ivory editorial sections around dark, human-scale documentary photography of students and their work.
 
**Theme:** light
 
Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components. The current IIP site uses a white, yellow, and black theme; this system keeps that identity. The yellow hex `#ffc61a` is a placeholder and should be swapped for the exact yellow from the IIP logo.
 
IIP Nepal — editorial photography school in warm film grain. The system alternates an ivory canvas with immersive, dark photographic moments, using near-black ink and warm-white type instead of cool digital neutrals. Huge, tightly tracked Geist headlines occupy decisive blocks of space, while Fragment Mono turns navigation, labels, and course metadata into tiny technical annotations. Surfaces stay flat and lightly bordered; pill actions and rounded media frames soften the otherwise direct, poster-like composition. A single IIP yellow, carried over from the existing site, marks the primary action and small highlights, always paired with near-black ink.
 
## Tokens — Colors
 
| Name | Value | Token | Role |
|------|-------|-------|------|
| Charcoal Ink | `#1f1915` | `--color-charcoal-ink` | Primary text, dark photographic overlays, dark page bands, logo marks, and iconography |
| Workshop Ivory | `#f2efe9` | `--color-workshop-ivory` | Page canvas, light hero fields, and broad editorial section backgrounds |
| Paper White | `#fffdf6` | `--color-paper-white` | Warm light text over dark media, light pill actions, and high-contrast light surfaces |
| Studio White | `#ffffff` | `--color-studio-white` | Filled pill actions, form fields, and compact elevated surfaces |
| Soft Paper | `#f7f5f1` | `--color-soft-paper` | Large display text on dark imagery and the palest alternate surface |
| Drafting Line | `#e6e3dd` | `--color-drafting-line` | Hairline borders, card fills, image frames, and dividers |
| Quiet Graphite | `#6b6661` | `--color-quiet-graphite` | Secondary body copy and subdued supporting descriptions |
| Faded Graphite | `#8d8883` | `--color-faded-graphite` | Tertiary metadata, low-emphasis icons, and supporting labels |
| IIP Yellow | `#ffc61a` | `--color-iip-yellow` | Brand accent: Enroll button fill, tag chips, text highlights, and active-state markers. Always paired with Charcoal Ink text; never used as text color on ivory or white (insufficient contrast) and never as a large section fill |
 
## Tokens — Typography
 
### Geist — Primary editorial and interface family. Use 400 at 120px (52px on mobile) for the hero display headline; its -8px tracking and 0.93 line-height make the message read as a compressed poster rather than a conventional education-site headline. Use 500 for section titles, body hierarchy, and interface controls. · `--font-geist`
- **Substitute:** Arial, sans-serif
- **Weights:** 400, 500
- **Sizes:** 11px, 14px, 16px, 24px, 32px, 40px, 72px, 120px
- **Line height:** 0.93, 1.00, 1.12, 1.20, 1.50, 1.60
- **Letter spacing:** -8px at 120px; approximately -3px at 72px; approximately -1.24px at 40px; approximately -0.99px at 32px; -0.5px at 24px; +0.4px at 16px
- **Role:** Primary editorial and interface family. Use 400 at 120px for the home hero display headline and 500 for subordinate headings, body hierarchy, and controls.
### Fragment Mono — Technical microtype for all-caps navigation, small labels, course metadata (duration, level), and form labels. At 11px with +0.3px tracking, it gives the interface its darkroom-notation character against the expressive Geist display type. · `--font-fragment-mono`
- **Substitute:** IBM Plex Mono, monospace
- **Weights:** 400, 500
- **Sizes:** 11px
- **Line height:** 1.33, 1.50
- **Letter spacing:** +0.3px for tracked uppercase labels
- **Role:** Technical microtype for all-caps navigation, small labels, status text, and compact metadata.
### Type Scale
 
| Role | Family | Weight | Size (desktop / mobile) | Line Height | Letter Spacing | Token |
|------|--------|--------|-------------------------|-------------|----------------|-------|
| nav | Fragment Mono | 400 | 11px / 11px | 1.5 | 0.3px | `--text-nav` |
| label | Fragment Mono | 400 | 11px / 11px | 1.5 | 0.3px | `--text-label` |
| body-small | Geist | 400 | 14px / 14px | 1.6 | 0px | `--text-body-small` |
| body | Geist | 400 | 16px / 15px | 1.6 | 0px | `--text-body` |
| button-label | Geist | 500 | 16px / 15px | 1.5 | 0.496px | `--text-button-label` |
| card-title | Geist | 500 | 24px / 20px | 1.2 | -0.5px | `--text-card-title` |
| section-title | Geist | 500 | 40px / 28px | 1.12 | -1.2px | `--text-section-title` |
| page-title | Geist | 400 | 72px / 40px | 1.0 | -3px | `--text-page-title` |
| display | Geist | 400 | 120px / 52px | 0.93 | -8.04px | `--text-display` |
 
## Tokens — Spacing & Shapes
 
**Base unit:** 4px
 
**Density:** comfortable
 
### Spacing Scale
 
| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |
| 120 | 120px | `--spacing-120` |
 
### Border Radius
 
| Element | Value |
|---------|-------|
| cards | 16px |
| links | 8px |
| images | 8px |
| inputs | 12px |
| buttons | 1440px |
| media-frame | 16px |
| large-panels | 24px |
 
### Layout
 
- **Container:** max-width 1280px; side padding 24px desktop, 20px tablet, 16px mobile
- **Section padding:** 120px desktop, 80px tablet, 64px mobile
- **Section gap:** 40px
- **Card padding:** 12px
- **Element gap:** 8px
- **Breakpoints:** mobile below 768px, tablet 768–1023px, desktop 1024px and up. Each viewport gets its own intentional layout rather than a shrunk desktop.
## Components
 
### Transparent Top Navigation
**Role:** Persistent public navigation over both light sections and dark hero media.
 
Use a 65px-tall sticky horizontal bar with a 1px solid #e6e3dd bottom divider on light sections; over the dark hero, use a transparent bar with a low-contrast light divider. Render the IIP logo at the far left and Fragment Mono navigation at 11px/400, +0.3px tracking, uppercase: **Home, Courses, Portfolio, About, Contact**. At the far right place a plain **Login** text link and the Enroll pill. On mobile show the logo and a menu button that opens a full-screen ivory overlay with large Geist links and the Enroll pill at the bottom.
 
### Yellow Pill Button
**Role:** Primary conversion control (Enroll) in the header, course pages, and the closing CTA.
 
Use #ffc61a fill, #1f1915 text, no border, 1440px radius, and 12px vertical padding with 16px or 20px horizontal padding. This is the single primary CTA and stays visible at all times; on hover darken the fill slightly.
 
### Light Pill Navigation Button
**Role:** Secondary control in the header and light sections.
 
Use #ffffff or #fffdf6 fill, #1f1915 text, a 1px solid #e6e3dd border, 1440px radius, and 12px vertical padding with 16px or 20px horizontal padding.
 
### Dark Pill Button
**Role:** Alternate conversion control on yellow-free light bands.
 
Use #1f1915 fill, #fffdf6 text, 1440px radius, and 12px 20px padding. Use sparingly; the Yellow Pill is the default for "Enroll at IIP →".
 
### Dark Hero Glass Pill
**Role:** Conversion control placed directly over dark photography.
 
Use rgba(255,253,246,0.16) fill with a 1px solid rgba(255,253,246,0.32) border, #fffdf6 label text, 1440px radius, and 12px 20px padding. Used for "Explore Courses" in the hero.
 
### Text Link With Arrow
**Role:** Secondary navigation to deeper pages.
 
Geist 500 in #1f1915 with a trailing arrow ("Explore Courses →", "View Portfolio →", "View course →"); gain a 2px #ffc61a underline highlight on hover (the text stays #1f1915).
 
### Photographic Display Hero
**Role:** Opening full-bleed editorial statement on the home page.
 
Fill the hero with muted, dark documentary photography of students at work; place the content in the left portion of the image and let the subject occupy the opposing side. Set the display headline in Geist 400 at 120px, 111.6px line-height, -8px tracking, and #f7f5f1; use #fffdf6 for the compact supporting copy (the tagline "The World is Yours" can anchor the message). Two actions sit below: the Dark Hero Glass Pill (Explore Courses) and the Yellow Pill (Enroll). Motion is limited to a subtle image fade-in.
 
### Eyebrow Capsule
**Role:** Centered or left-aligned section label above titles.
 
Use a minimal outlined capsule with a 1px solid #e6e3dd border, 1440px radius, 8px horizontal internal gaps, and Fragment Mono 11px uppercase text (for example WHY IIP, COURSES, STUDENT WORK). Pair with a small mono icon rather than a filled color marker.
 
### Editorial Statement Block
**Role:** Centered manifesto-style introduction for the About intro on the home page and the About page.
 
Set large Geist 500 copy in #1f1915 on #f2efe9, centered in a narrow multi-line block. Keep the lettering tightly tracked at large sizes and leave a 40px gap before the following visual. Content comes from IIP's actual mission, not generic marketing copy.
 
### Photo Frame
**Role:** Contained showcase of a single large image beneath a statement or inside the About page.
 
Present the photograph on a #ffffff surface with 1px solid #e6e3dd framing and 16px corner radius, with an 8px-radius image inside. Use 32px internal padding when the frame includes a caption or metadata.
 
### Why IIP Grid
**Role:** Text-led overview of real differentiators (for example mentor-led programs, online and Kathmandu-based learning, career counseling, IIP's national network).
 
Use four evenly distributed columns on #f2efe9 (two on tablet, one on mobile) with a small #8d8883 line icon, Geist 500 heading in #1f1915, and #6b6661 supporting copy. Separate columns with whitespace rather than card borders; use 16px internal text gaps and 24px column gaps.
 
### Course Card
**Role:** Scannable summary of a single course on the Courses page and the home preview.
 
Use #e6e3dd fill, no shadow, 16px radius, and 12px padding. Top: 4:3 course image with 8px radius. Below: Fragment Mono course type label, Geist 500 24px title, one-line description in #6b6661, a mono metadata row (duration, level, for example "3 MONTHS · MENTOR-LED"), and a "View course →" text link. Grid: three columns on desktop, two on tablet, one on mobile.
 
### Course Detail Layout
**Role:** In-depth information for one course at /courses/[slug].
 
Open with a large image hero, course title, duration, course type, and the Enroll pill. Follow with sections in order: Overview, What You'll Learn, Course Structure, Who It's For, Requirements, Important Information, Enrollment CTA. On desktop, add a sticky summary card (#e6e3dd fill, 16px radius, 32px padding) with duration, type, and an Enroll button; on mobile convert it to a fixed bottom bar.
 
### Portfolio Grid
**Role:** Image-led showcase of student and project work.
 
Use a masonry or editorial grid with 8px-radius images and 16px gaps; captions in Fragment Mono 11px uppercase below or revealed on hover. Hover applies a slight image scale (1.03) and caption fade, disabled under reduced-motion. Portfolio detail pages show the title, short story, mono metadata, a full-width gallery, related work, and previous/next navigation.
 
### Form Field
**Role:** Inputs for Enroll, Contact, and Login.
 
Use #ffffff fill, 1px solid #e6e3dd border, 12px radius, 48px height, Geist 16px text. Labels sit above in Fragment Mono 11px uppercase. Focus shows a 2px #1f1915 ring; errors use #1f1915 text, a 2px #1f1915 border, and an icon, never color alone.
 
### Enrollment Steps Indicator
**Role:** Progress marker for the Enroll flow.
 
Show four mono labels (CHOOSE COURSE, YOUR DETAILS, SUBMIT, CONFIRMATION) separated by 1px #e6e3dd rules; the active step is #1f1915, the rest #8d8883.
 
### Closing CTA Band
**Role:** Final conversion moment on the home page and course pages.
 
Use a #1f1915 band with a large #f7f5f1 Geist headline ("Ready to start your photography journey?") and one Yellow Pill ("Enroll at IIP →").
 
### Footer
**Role:** Contact details and legal links on every page.
 
Use #f2efe9 with a 1px solid #e6e3dd top border. Include the IIP logo, address (Jyoti Bhawan, Kanti Path, Kathmandu 44600), phone (+977 9802364760), email, primary links, social links, and Terms and Privacy in Fragment Mono 11px. Keep the "An Education Wing of IIP Foundation" attribution as a small #8d8883 line.
 
### Legal Page Body
**Role:** Terms and Privacy.
 
Single narrow column, max-width 720px, Geist 16px/1.7 in #1f1915 on #f2efe9 with Geist 500 headings. No imagery or decoration.
 
## Do's and Don'ts
 
### Do
- Use #f2efe9 as the default page canvas and #1f1915 for primary text.
- Set display headlines in Geist 400 at 120px with 111.6px line-height and -8px letter-spacing for the home hero only; scale down to 52px on mobile.
- Use Fragment Mono 11px with +0.3px tracking for uppercase navigation, labels, and course metadata.
- Build the primary conversion button as a #ffc61a pill with #1f1915 text, 1440px radius, and 12px vertical padding; secondary buttons are #ffffff or #fffdf6 pills.
- Use 1px solid #e6e3dd dividers and frames instead of shadows for light-section structure.
- Use 16px radius for cards and media containers, with 8px radius for inset images.
- Reserve #ffc61a for the Enroll button, tag chips, hover highlights, and active markers, always with #1f1915 text.
- Keep one primary CTA (Enroll) visible in the nav at all times.
- Add a section only if it helps visitors understand IIP, evaluate a course, see student work, or take action.
### Don't
- Do not use blue, green, or purple as general interface accents; keep the working palette achromatic with #ffc61a as the exception.
- Do not use #ffc61a for large fills, section backgrounds, body text, or link text on light backgrounds.
- Do not replace the 1440px button radius with rounded rectangles such as 8px or 16px.
- Do not use drop shadows on #ffffff, #fffdf6, or #e6e3dd cards.
- Do not set headings in bold weights; use Geist 400 for display and page titles and Geist 500 for subordinate headings.
- Do not use pure #ffffff as the broad page background when #f2efe9 is available.
- Do not turn the Why IIP grid into four heavy bordered cards.
- Do not use bright stock-education photography; retain dark, muted documentary treatment behind light hero type.
- Do not use gradients, heavy blur, glassmorphism outside the hero pill, or floating decorative elements.
- Do not let animation hurt performance; animate only opacity and transform, 300–600ms, and respect prefers-reduced-motion.
## Surfaces
 
| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Workshop Ivory | `#f2efe9` | Default page canvas and broad editorial bands. |
| 1 | Soft Paper | `#f7f5f1` | Pale alternate field and light display text on dark imagery. |
| 2 | Studio White | `#ffffff` | Pills, form fields, and compact elevated controls. |
| 3 | Drafting Line | `#e6e3dd` | Framed cards, rules, and muted feature panels. |
| 4 | Charcoal Ink | `#1f1915` | Dark hero overlays, dark page bands, and primary foreground. |
 
## Elevation
 
Avoid cast shadows entirely. Hierarchy comes from the #f2efe9 → #ffffff → #e6e3dd surface progression, 1px #e6e3dd frames, translucent light overlays on dark photography, and nested 8px or 16px rounded media edges.
 
## Imagery
 
Imagery is dominant wherever it appears, because photography is the subject of the site. The opening visual is a full-bleed, darkened documentary-style photograph of a student or photographer at work, with subdued warm-gray color and no glossy color grade. Course cards use consistent 4:3 crops; hero images use 16:9; portfolio uses free-ratio masonry so each photograph keeps its composition. Student work is shown large and uncropped where possible, with `alt` text and blur placeholders on every image. Icons are tiny, mostly mono black or muted graphite line marks (Lucide, 16–20px); the page stays text-light outside photography sections.
 
## Layout
 
The site is a sequence of vertically stacked editorial sections on a #f2efe9 canvas, with a slim horizontal navigation bar repeated across the top. The home page opens with a full-bleed dark photographic hero: oversized left-aligned display text, compact supporting copy and actions below, and the human subject right-weighted. Light sections follow in this order: Why IIP (four-column grid), Courses Preview (three course cards and an "Explore Courses →" link), Student Work (portfolio teaser and "View Portfolio →"), a centered About introduction, and a closing dark CTA band. Content favors broad seams of empty canvas over dense stacking, and no more than one dark band appears in a row.
 
| Page | Pattern |
|------|---------|
| Home | Dark photo hero, Why IIP, Courses Preview, Student Work, About intro, Closing CTA |
| Courses | Ivory header with a grid of course cards |
| Course Detail | Image hero, structured information, sticky summary card |
| Portfolio / Detail | Large editorial image grid; detail pages as photo stories |
| About | Statement block, institute story, faculty included inline (no separate faculty pages) |
| Contact | Contact details, form, and map |
| Enroll | Short stepped form |
| Login | Centered minimal card, kept out of the primary nav |
| Terms / Privacy | Plain readable text column |
 
## Agent Prompt Guide
 
Quick Color Reference:
- Charcoal Ink: #1f1915 — Primary text, dark photographic overlays, dark page bands, logo marks, and iconography
- Workshop Ivory: #f2efe9 — Page canvas, light hero fields, and broad editorial section backgrounds
- Paper White: #fffdf6 — Warm light text over dark media, light pill actions, and high-contrast light surfaces
- Studio White: #ffffff — Filled pill actions, form fields, and compact elevated surfaces
- Soft Paper: #f7f5f1 — Large display text on dark imagery and the palest alternate surface
- Drafting Line: #e6e3dd — Hairline borders, card fills, image frames, and dividers
- Quiet Graphite: #6b6661 — Secondary body copy and subdued supporting descriptions
- Faded Graphite: #8d8883 — Tertiary metadata, low-emphasis icons, and supporting labels
- IIP Yellow: #ffc61a — Brand accent for the Enroll button, tag chips, and highlights; always with Charcoal Ink text
Create a full-bleed dark documentary-photo hero with a left-aligned Geist 400 headline at 120px, 111.6px line-height, -8px tracking in Soft Paper #f7f5f1; add a Dark Hero Glass Pill using Paper White #fffdf6 text and rgba(255,253,246,0.16) fill.
Create a 65px public top navigation on Workshop Ivory #f2efe9 with Fragment Mono 400 at 11px, +0.3px tracking, uppercase links (Home, Courses, Portfolio, About, Contact); finish with a Login text link and an IIP Yellow #ffc61a Yellow Pill Button labeled Enroll with Charcoal Ink #1f1915 text.
Create a centered editorial statement on Workshop Ivory #f2efe9 in Charcoal Ink #1f1915, followed by a Photo Frame with #ffffff fill, 1px Drafting Line #e6e3dd border, 16px radius, and 32px padding.
Create a Course Card grid on Workshop Ivory #f2efe9 with Drafting Line #e6e3dd card fills, 16px radius, 12px padding, 4:3 images with 8px radius, Fragment Mono metadata, and a "View course →" link.
Create a Why IIP Grid on Workshop Ivory #f2efe9 with #8d8883 line icons, Charcoal Ink #1f1915 Geist headings, Quiet Graphite #6b6661 body copy, 16px internal gaps, and no card borders.
Create a Closing CTA Band on Charcoal Ink #1f1915 with a Soft Paper #f7f5f1 headline and a single IIP Yellow #ffc61a pill reading "Enroll at IIP →".
 
## Similar Brands
 
- **A24** — Shares dark cinematic photography paired with oversized quiet typography and an editorial rather than conventionally corporate page rhythm.
- **Magnum Photos** — Shares image-first presentation where photography is the primary content and the interface stays out of the way.
- **Are.na** — Shares an editorial composition where pale canvas and small utility typography frame content rather than decorate it.
- **Vercel** — Shares restrained monochrome presentation, dense technical micro-navigation, and large high-contrast editorial type.
- **Notion** — Shares warm off-white surfaces, black-first typography, and sparse dividers.
## Quick Start
 
### CSS Custom Properties
 
```css
:root {
  /* Colors */
  --color-charcoal-ink: #1f1915;
  --color-workshop-ivory: #f2efe9;
  --color-paper-white: #fffdf6;
  --color-studio-white: #ffffff;
  --color-soft-paper: #f7f5f1;
  --color-drafting-line: #e6e3dd;
  --color-quiet-graphite: #6b6661;
  --color-faded-graphite: #8d8883;
  --color-iip-yellow: #ffc61a;
 
  /* Typography — Font Families */
  --font-geist: 'Geist', Arial, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-fragment-mono: 'Fragment Mono', 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
 
  /* Typography — Scale (desktop) */
  --text-nav: 11px;
  --leading-nav: 1.5;
  --tracking-nav: 0.3px;
  --text-label: 11px;
  --leading-label: 1.5;
  --tracking-label: 0.3px;
  --text-body-small: 14px;
  --leading-body-small: 1.6;
  --text-body: 16px;
  --leading-body: 1.6;
  --tracking-body: 0px;
  --text-button-label: 16px;
  --leading-button-label: 1.5;
  --tracking-button-label: 0.496px;
  --text-card-title: 24px;
  --leading-card-title: 1.2;
  --tracking-card-title: -0.5px;
  --text-section-title: 40px;
  --leading-section-title: 1.12;
  --tracking-section-title: -1.2px;
  --text-page-title: 72px;
  --leading-page-title: 1.0;
  --tracking-page-title: -3px;
  --text-display: 120px;
  --leading-display: 0.93;
  --tracking-display: -8.04px;
 
  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
 
  /* Spacing */
  --spacing-unit: 4px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-120: 120px;
 
  /* Layout */
  --container-max: 1280px;
  --nav-height: 65px;
  --section-gap: 40px;
  --card-padding: 12px;
  --element-gap: 8px;
 
  /* Border Radius */
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;
  --radius-full: 1440px;
 
  /* Named Radii */
  --radius-cards: 16px;
  --radius-links: 8px;
  --radius-images: 8px;
  --radius-inputs: 12px;
  --radius-buttons: 1440px;
  --radius-media-frame: 16px;
  --radius-large-panels: 24px;
 
  /* Surfaces */
  --surface-workshop-ivory: #f2efe9;
  --surface-soft-paper: #f7f5f1;
  --surface-studio-white: #ffffff;
  --surface-drafting-line: #e6e3dd;
  --surface-charcoal-ink: #1f1915;
}
 
/* Mobile overrides */
@media (max-width: 767px) {
  :root {
    --text-body: 15px;
    --text-button-label: 15px;
    --text-card-title: 20px;
    --text-section-title: 28px;
    --tracking-section-title: -0.8px;
    --text-page-title: 40px;
    --tracking-page-title: -1.5px;
    --text-display: 52px;
    --tracking-display: -2.5px;
  }
}
```
 
### Tailwind v4
 
```css
@theme {
  /* Colors */
  --color-charcoal-ink: #1f1915;
  --color-workshop-ivory: #f2efe9;
  --color-paper-white: #fffdf6;
  --color-studio-white: #ffffff;
  --color-soft-paper: #f7f5f1;
  --color-drafting-line: #e6e3dd;
  --color-quiet-graphite: #6b6661;
  --color-faded-graphite: #8d8883;
  --color-iip-yellow: #ffc61a;
 
  /* Typography */
  --font-geist: 'Geist', Arial, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-fragment-mono: 'Fragment Mono', 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
 
  /* Typography — Scale */
  --text-nav: 11px;
  --leading-nav: 1.5;
  --tracking-nav: 0.3px;
  --text-label: 11px;
  --leading-label: 1.5;
  --tracking-label: 0.3px;
  --text-body-small: 14px;
  --leading-body-small: 1.6;
  --text-body: 16px;
  --leading-body: 1.6;
  --text-button-label: 16px;
  --leading-button-label: 1.5;
  --tracking-button-label: 0.496px;
  --text-card-title: 24px;
  --leading-card-title: 1.2;
  --tracking-card-title: -0.5px;
  --text-section-title: 40px;
  --leading-section-title: 1.12;
  --tracking-section-title: -1.2px;
  --text-page-title: 72px;
  --leading-page-title: 1.0;
  --tracking-page-title: -3px;
  --text-display: 120px;
  --leading-display: 0.93;
  --tracking-display: -8.04px;
 
  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-120: 120px;
 
  /* Border Radius */
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;
  --radius-full: 1440px;
}
```