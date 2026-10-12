# IIP Nepal - problem-fix.md

UI/UX plan only, no code. Built with the design-taste-frontend skill (Section numbers below refer to it) on top of your fixed Creative Giants tokens. Nothing in your tokens changes: Bone White canvas, Switzer 300/400, black pills, 0px cards and images, no shadows, rationed colour, the 24/32/48/64 gutter tiers.

Scope: I read the text and structure of home, courses, a course page, portfolio, a portfolio story, about, FAQ, contact and enroll. I did not see rendered screens, so mobile notes are inferred. Demo images reused across pages are fine for now and are not listed as problems.

---

## 0. Design read, dials, mode

**Reading this as:** redesign (preserve) of a photography institute site for prospective students and parents in Nepal, with an editorial poster language, leaning toward the existing Creative Giants tokens + Tailwind v4 + Switzer + shadcn primitives + Motion.

| Dial | Value | Why |
|---|---|---|
| DESIGN_VARIANCE | 6 | Keep the existing offset grids and full-bleed bands, calm inner pages |
| MOTION_INTENSITY | 7 | Existing pinned sections and smooth scroll (+1), motion only where it tells the story |
| VISUAL_DENSITY | 3 | Gallery feel, photos lead, text is annotation |

**Mode: Redesign, Preserve.** Never changed silently (Section 11.F): URL slugs (`/courses/[slug]`, `/portfolio/[slug]`), primary nav labels, logo, form field names and order, legal copy, analytics hooks. Add OG tags without changing existing titles (SEO baseline).

### Where the skill bends to your design system
| Skill default | Your system | Decision |
|---|---|---|
| Lucide discouraged | Spec says lucide, stroke 1.5 | Keep lucide (project already depends on it) |
| No pure black | Ink Black #000 in tokens | Keep, it is a token |
| Warm cream palette banned | Bone White #fffef7 is the brand | Keep, the brief names it |
| Dark mode mandatory | Light, print-emulating editorial | Light only is allowed for this brief (Section 8) |
| Eyebrow above every section | Section Title Block has one | Keep the style, **use fewer** (see rule 3 below) |
| One theme per page | Navy Ink card is the one dark field | Fine, it is a card, not a flipped section |

---

## 1. Problems found

### A. Performance and structure
| # | Problem | Fix |
|---|---|---|
| 1 | Every image is requested at `w=3840` (no proper `sizes`), so phones download desktop files | `sizes` per layout, max 1600px, WebP/AVIF, hero `priority`, lazy-load the rest, blur-up placeholder to protect CLS |
| 2 | Home renders the courses and portfolio sections twice (desktop pinned version plus a second version) | One markup per section. Pin at 1024px and wider only, snap carousel below, same DOM |
| 3 | Footer repeats address and phone three times | One contact column (address, hours, phone, email), nothing repeated |
| 4 | Home and contact lack Open Graph/Twitter tags; some `og:url` / `og:image` point to iipnepal.com | Add to every page, confirm the final domain |
| 5 | "Print Dimension 24 ×" is cut off on a story | Finish the value or remove the field (it is being removed anyway) |

### B. Content that contradicts itself
- FAQ describes a "Foundation Course (1 Month)" and a "Diploma in Photography (3 Months)". Neither exists in the course list.
- FAQ says Mobile and Foundation are hybrid. The course page says Foundation is "100% Online". About sells darkroom and strobe labs that online courses can't include.
- Weekly time: 5-7 hours (course page), 6-8 hours (its FAQ), 4-6 hours (general FAQ).
- Course names vary: "Mobile Photography Course" / "Online Mobile Photography Course"; "Pro-Level" / "Pro Level"; "Basic" / "Beginners" / "1-Month Online Basic".
- Home calls Aayushree's work "medium-format"; the portfolio page lists a Sony α7R V (full-frame).
- The 20% discount has no end date, so it reads as permanent.

**Fix:** one data source per course (name, duration, mode, hours, price, equipment). Every page reads from it.

### C. Skill violations already on the site (AI tells)
| Tell (skill section) | Where | Fix |
|---|---|---|
| Em-dash anywhere (9.G) | Home H2 "How Learning Works - From Choice to Certification", "Plates 02 - 04", and similar in titles and captions | Zero em-dashes or en-dashes in visible copy. Use a period, comma or hyphen |
| Section-number eyebrows and pagination (9.F) | `PORTFOLIO // 01`, `[ 01 ]`, `01/05`, `[ 01 / 03 ]`, `PLATE 01 // ARCHIVE 01`, `Archive Series 01` | Remove all numbering. The title is the label |
| Generic step labels (9.F) | `STAGE 01 // SELECTION` ... `STAGE 04` | Use verbs: Choose, Practise, Get feedback, Graduate |
| Pills and labels overlaid on images (9.F) | `100% ONLINE`, `20% off`, `IIP NEPAL // MENTOR-LED`, `PLATE 02` on photos | Remove from images. Put facts below the image or in the price block. Title and location text on the full-bleed band stays (your Hero Image Band spec) |
| Photo-credit captions as decoration (9.F) | "Master Frame: ... 1/125s · f/2.8 · ISO 800", "Detail study: ... 07:00 AM" | One plain functional line. EXIF only in the lightbox |
| Poetic or performative labels (9.F) | "Academic Provenance", "Archival Plates", "Student Field Notes & Residency Diary", "Academic Dossier // Student Curatorial Notes" | Plain labels or none: "About this story", "Behind the shoot" |
| Eyebrow restraint (4.7) | Nearly every section has one | Max 1 per 3 sections (rule 3 below) |
| Duplicate CTA intent (4.5) | Enroll: "Enroll Now", "Enroll in Course", "Enroll in This Program", "Direct Enrollment". Contact: "Talk to Admissions", "Speak with Additya", "Contact Admissions", "Get In Touch", "Submit Admissions Enquiry", "Speak to us". View: "View Course", "Explore Syllabus", "Curriculum→", "Explore Story", "Explore Student Story", "View Exhibition Plates" | **One label per intent: Enroll, Contact, View course, View story, View all.** Nav labels stay as they are |
| CTA wrap (4.5) | "View Exhibition Plates", "Open Dedicated Contact Page & Studio Map→" | 3 words max, one line at desktop |
| Content density (4.9) | Headlines of 15-25 words ("We train photographers and visual storytellers through...") | Headline 8 words or fewer, sub-copy 25 words or fewer |
| Spec-sheet and long-list defaults (4.9) | "Camera Rig & Exhibition Print Details", 6 long outcome bullets, 10 long module titles | Group, disclose or move to the lightbox (see pages) |
| Quotes over 3 lines, dash attribution (4.10) | Artist statement and mentor evaluation; "- Name" style | 3-line clamp with "Read more"; name on its own line, no dash |
| Equal 3-up feature cards (9.C) | Outcome cards, 3 steps | Asymmetric grouping (see course page) |
| Copy self-audit (4.9) | "raw visual dissection", "sacred geometry meets raw street survival", "Silver-gelatin inspired capture", "Faculty Admissions" label above the info@ email | Plain sentences. Fix the mislabelled contact line |
| Logo wall trust (4.8) | Marquee labelled "Mastered by Students" includes National Geographic and Magnum | Remove those two, relabel "Cameras and tools we teach on" |
| Dated or unlinked news (4.9) | News cards have no date, no link | Add both, or cut to two |

### D. UX
- Courses index cards repeat description, equipment, outcome, price and two buttons.
- Course page shows price twice, has a generic FAQ that conflicts with the main FAQ, no next intake date, no student work, and related courses show only higher-priced ones.
- Portfolio index cards carry about 100 words each. Photos are not the hero.
- Portfolio story: statement appears twice, camera specs three times, four photos only, "Inspect" button on every image, and mentor and outcome blocks bury the photos.
- Home has a full contact form that duplicates `/contact`.
- Input borders in Ash (#aaa) on Bone White are about 2.3:1 and fail the 3:1 UI-contrast minimum. Use Graphite (#666) for field borders (Section 4.5, form contrast).
- Enroll page returned no form in my scrape. Verify on a phone.

---

## 2. Rules every page follows

1. **Type:** headlines 300, never bold. Body and UI at 16px and under use 400. Display never above 2 lines. Page titles about 6 words.
2. **Hero (inner pages):** fits the first viewport. Max 4 text elements: one eyebrow or none, headline, sub-copy (20 words max, 4 lines max), CTAs (1 primary, 1 secondary). Top padding max `pt-24` (96px token). Use `min-h-[100dvh]`, never `h-screen`. No tagline or trust strip inside the hero.
3. **Eyebrows:** at most `ceil(sections / 3)` per page. Hero counts as one. If a section has one, the next two do not. Plain topic words only, no numbers.
4. **Layout families:** each family at most once per page, at least 4 families across 8 sections. No 3 image+text splits in a row. Split headers (big headline left, small paragraph floating right) are out: stack headline then 65ch body.
5. **Cards only when they carry hierarchy.** Otherwise whitespace or a hairline. Pastel cards max one per row. Navy Ink is the single dark field per page.
6. **Buttons:** black pill, Bone text, no colour-filled CTA, `:active` scale 0.98. Ghost buttons over photos need a scrim. Hero `[ BRACKET ]` pattern stays on the home hero.
7. **Long content:** accordion (first item open), 3-line clamp with "Read more", snap-scroll row with the 32px arrow controls, or tabs. Never a longer list.
8. **Images:** tap opens a swipeable lightbox. No "Inspect" buttons. Blur-up placeholders, descriptive alt text. When real photos replace demo images: at least 8 unique per story (gen-tool first, Picsum seed placeholders second, labelled empty slots third, never div fake screenshots).
9. **Dots and separators:** no decorative dots, middle dot at most once per line.
10. **Forms:** label above field, helper in markup, error below, no placeholder-as-label. Empty, loading (skeleton) and error states for every form. Success state after submit.
11. **Motion must be motivated:** pinned courses and portfolio sections are storytelling sequences (fine). Reveals use `whileInView` once. Everything respects `prefers-reduced-motion`. No `window` scroll listeners; use ScrollTrigger or `useScroll`. One marquee per page max.
12. **Sticky:** header only (your system). Repeat the Enroll pill after long content instead of a sticky bar.

---

## 3. Page by page

Breakpoints: **M** below 640 | **ST** 640-767 | **T** 768-1023 | **D** 1024 and up (max 105rem).

### Home (keep, copy-and-behaviour tweaks only)
1. Pin courses and portfolio at **D only**. Below D: same markup as a snap carousel. Pinned scroll about one viewport per slide, correct skeleton (`start: "top top"`, pin the wrapper, scrub inner track), reduced motion turns pinning off, `#courses` lands at slide 1.
2. Course slide actions: `View course` (primary) and a small `Enroll` text link. Drop "Curriculum→".
3. Learning process: verb labels (Choose, Practise, Get feedback, Graduate), remove `STAGE 0X` and `[ 0X ]`.
4. Copy: remove em-dashes, shorten H2s to 8 words or fewer.
5. Testimonials: 3 lines max, student photo, name + course + town.
6. Marquee: one only, drop Magnum and National Geographic.
7. News: date and link on each, or two cards.
8. Contact form block becomes a strip: `Call`, `WhatsApp`, `Contact`. Full form lives on `/contact`.
9. Third stat ("100% Hands-on") becomes "5 programmes".
10. Hero CTAs over the photo: confirm WCAG AA against the image (add a soft scrim). Keep LCP under 2.5s with `priority` on the hero image.

### Courses index `/courses`
Sections: hero, filter + grid, closing CTA.
- Hero: display title (2 lines max), sub-copy 20 words max, no eyebrow.
- Filter: pills, horizontal scroll on M.
- Card (varied image ratios, not a rigid 3 equal grid): image, title (20px 300), one-line outcome (14px Graphite), duration and mode on one line, price, one link `View course`. Whole card clickable, no second button. No badges on the image.
- **D** 3-column masonry-style grid, **T** 2, **ST/M** 1 with 4:3 image. Max one pastel card per row.
- **D only:** `Compare` toggle turning the grid into a table (Duration, Mode, Camera, Price, Level). **M:** no table.

### Course `/courses/[slug]`
Sections (8): hero, price band, outcomes, how it works, syllabus, student work, details + FAQ, progression. Eyebrows: hero (level) and syllabus only.

1. **Hero** (`pt-24`, split 7/5): level eyebrow, heading ("Foundation Photography"), sub-copy ("Three months of guided shooting and 1-on-1 mentor feedback, ending in a 20-frame portfolio."), `Enroll` pill + `Contact` text link. Right: cover image 4:5.
2. **Price band** (Navy Ink card, the page's only dark field, not sticky): 4 facts (duration, mode, hours per week, intake), price, struck old price, next intake date, `Enroll` pill. Price appears here and nowhere else.
3. **Outcomes** (asymmetric 3-cell bento, exact cell count): one large Mint card with the headline outcome, one image cell, one cream cell. "See all 6" opens the rest. No equal 3-up cards.
4. **How it works:** three plain steps stacked on the left (Learn, Shoot, Get feedback), one sample mentor-feedback image on the right. This is the page's one image+text split.
5. **Syllabus:** phase **tabs** on D and T (modules listed 2 columns), accordion on M. Module titles shortened ("Camera controls and sensor", "Lens optics", "Reading photographs").
6. **Student work:** snap row of 4 photos linked to stories, no captions beyond the student name.
7. **Details + FAQ:** left, grouped details (what you need, payment, refund link) as 3 clusters with one divider each, not row-by-row hairlines. Right, 4 course-specific FAQ accordions plus a link to the full FAQ.
8. **Progression:** previous and next course as two large cards (one pastel), then a closing `Enroll` pill.

```
D                                   T                       M / ST
+----------------+---------------+  heading, sub-copy       heading, sub-copy
| eyebrow        |               |  Enroll | Contact        Enroll | Contact
| heading        |  cover 4:5    |  cover 16:9              cover 4:3
| sub-copy, CTAs |               |  NAVY price band         NAVY price band
+----------------+---------------+  bento (2 cols)          bento stacked
| NAVY price band, full width    |  steps | feedback img    steps, then img
+--------------------------------+  tabs syllabus           accordion syllabus
| bento (large + image + small)  |  student work snap       student work snap
| steps | feedback image         |  details, then FAQ       details, then FAQ
| syllabus tabs (2-col modules)  |  progression 2-up        progression stacked
| student work snap row          |                          closing Enroll
| details | FAQ                  |
| progression 2-up + Enroll      |
+--------------------------------+
```

### Portfolio index `/portfolio`
Sections: hero, filter + grid, closing CTA.
- Hero: display title, one line of sub-copy, no eyebrow. Curatorial quote becomes one small line above the closing CTA (3 lines max, name on its own line).
- Card = **photo first**: image (varied ratios 4:5, 1:1, 3:2 for rhythm), title (20px 300), student name (14px Graphite). Nothing else. No tags or numbers on the image. Category lives in the filter pills only.
- **D** 3-column masonry, first story spans 2 columns. **T** 2 columns. **M** 1 column, 4:5.
- The director's darkroom series moves to About (it is not a student story).

### Portfolio story `/portfolio/[slug]` (redesign)
A real student portfolio is an edited sequence of 8 to 14 photos around one theme, a short intro, one-line captions and a credit. It is 90% photographs. Gear, settings and mentor notes go in a small credits area or the lightbox.

Also offer a second format: **Graduation set**, the "20-frame exhibition-ready portfolio" the Foundation course promises, shown as a clean 20-image grid.

Sections (7), eyebrows: none needed (the photos are the structure).
1. **Cover band:** full-bleed photo (85vh D, 70svh M, `100dvh` units). 12px caps location and 34px title in Bone White at bottom-left over a scrim (your Hero Image Band). `Portfolio` back link above.
2. **Intro:** one paragraph, 60 words max, 20px. Credits beside it as 4 plain lines: student, place, year, course (link). Gear is one optional line.
3. **Photo story (the main thing):** 8-14 photos in 3 or 4 groups. Each group starts with one plain 20px sentence (not a caps label), e.g. "Marigolds arrive before the first chiya." Layout rhythm: full-bleed wide, 7/5 pair, centred portrait with caption beside it, triptych, full-bleed wide. Captions: one line, 14px Graphite.
4. **Voices:** artist statement (3-line clamp) and one mentor line, side by side on D, stacked below. Names on their own line, no dash.
5. **Behind the shoot (optional):** 3-4 process shots in a snap row.
6. **Photographer:** photo, one-line bio, `View story` links to their other work.
7. **Next story:** large full-width image card, then one slim `View course` link to the course they studied.

Removed: duplicate statement, three spec blocks, Technical Mastery panel, Academic Provenance block, Inspect buttons, Print Dimension, photo numbering, PLATE labels.

```
D                                        T                      M
[ cover band 85vh, title bottom-left ]   cover 70vh             cover 70svh
intro (cols 3-8)  | credits (cols 9-12)  intro, credits below   intro, credits 2x2
sentence 1                               sentence               sentence
[ full-bleed wide ........................ ]  wide = full width      all photos single column
[ photo 7 cols ][ portrait 5 cols ]      7/5 = 2 equal columns  portrait pairs stay 2-up
[ portrait centred ] caption beside      triptych = 1 big + 2   only if both are 3:4
[ img ][ img ][ img ]                    statement, mentor      captions below
statement | mentor line                  behind the shoot snap  tap = swipe lightbox
behind the shoot (snap) | photographer   next story full width  behind the shoot = snap row
[ next story, full width ]
```
Motion: cover image eases in, photos reveal once on scroll (`whileInView`), lightbox with swipe. Reduced motion shows everything static.

### About `/about`
Sections: hero, three pillars, facilities, team, CTA. Eyebrows: at most 2.
- Hero: display headline, 20-word sub-copy. 2 stats instead of 4 (the other two repeat the home page).
- Pillars: Learn, Practise, Get feedback as three lines with unequal widths, not 3 equal cards.
- Facilities (Print Lab, Studio B, Field Lab): the strongest content. **D** staggered 3-photo composition, **M** snap row. One-line captions, no pills on photos.
- Skills marquee becomes one static line of 4 tags (home keeps the page's one marquee).
- Team: portrait and quote for Additya, plus 2-3 faculty (face, name, specialty). The director's darkroom series sits here.
- Align darkroom and strobe claims with which courses actually include them.

### FAQ `/faq`
- Order: hero, search, category pills, accordions (first open), contact CTA.
- Category pills scroll horizontally on M. Answers 2-3 sentences, link out for detail.
- Fix every contradiction in section 1B first.

### Contact `/contact`
- Order: hero, hours and "reply within 24 hours", three large actions (Call, WhatsApp, Email), form, map.
- **D:** form left, address + map right. **T/M:** actions, form, map behind a "Show map" toggle with an `Open in Maps` pill.
- Form fields stay exactly as they are (names and order are preserved). Merging the two name fields would need your approval.
- Inline error text below fields, skeleton on submit, clear success state, Graphite field borders.

### Enroll `/enroll`
1. Choose course (selectable cards, pre-selected from `?course=`).
2. Your details (keep existing field names and order).
3. Pay or confirm (eSewa, Khalti, bank transfer, pay at the centre, installment note).
- Plain "Step 1 of 3" progress line. Course summary visible inline (right column on D, collapsed card at top on M), not sticky. WhatsApp as an alternative at every step. Loading, error and success states.

### Footer
Hairline top. **D** 4 columns (brand + one line, Explore, Contact + hours, Social), **T** 2 columns, **M** contact first with call, WhatsApp, map pills, then links in 2 columns. Legal row below. No repeated address.

---

## 4. Copy rewrites (examples)

| Now | Better |
|---|---|
| How Learning Works - From Choice to Certification. | How learning works |
| Exhibition-Grade Visual Stories Born in Nepal. | Student stories from Nepal |
| STAGE 01 // SELECTION: Choose Your Course | Choose your course |
| A raw visual dissection of morning commerce... | Eight weeks of dawn shoots in Asan, one 35mm lens, and a lot of waiting. |
| Open Dedicated Contact Page & Studio Map→ | Contact |
| Faculty Admissions (above info@iipnepal.com) | Email |
| 3-Month Online Foundation Photography Course | Foundation Photography |

---

## 5. Pre-flight (condensed)

- [ ] Zero em-dashes or en-dashes in visible copy
- [ ] Eyebrow count within `ceil(sections / 3)` per page, show numbers it is fine as it it with number
- [ ] One CTA label per intent (Enroll, Contact, View course, View story, View all)
- [ ] CTAs on one line at D, AA contrast, scrim over photos
- [ ] Forms: labels above, AA contrast, Graphite borders, empty/loading/error/success states
- [ ] Hero fits viewport, 4 text elements max, `pt-24` max, `min-h-[100dvh]`
- [ ] No pills, numbers or credit captions over or under images
- [ ] Layout families not repeated, no 3 equal feature cards, no zigzag of 3
- [ ] One marquee per page, motion motivated, reduced motion honoured, no scroll listeners
- [ ] Mobile collapse stated for every section (done above)
- [ ] `sizes` set on every image, LCP under 2.5s, CLS under 0.1
- [ ] Slugs, nav labels, logo, form fields unchanged

---

## 6. Priority

**First (trust and speed)**
1. Image `sizes`, one DOM per home section, OG tags.
2. Reconcile course data and FAQ contradictions.
3. Strip the AI tells: dashes, numbering, step labels, image pills, credit captions, duplicate CTA labels.

**Then (core pages)**
4. Portfolio story and index (photo-first).
5. Course page order with the Navy price band.
6. Footer, enroll flow, form states and contrast.

**Then (polish)**
7. Home copy and behaviour tweaks.
8. About, FAQ, contact refinements.