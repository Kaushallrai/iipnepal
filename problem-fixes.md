# IIP Nepal website UX audit

Your redesign at [iipnepal.vercel.app](https://iipnepal.vercel.app/) has a strong visual identity. I would keep your current design direction and focus on making the content more trustworthy, easier to understand, and better at converting visitors into students.

The problem is not simply that the website has too much text. Some information is repeated, some important decisions are harder than they need to be, and some claims need verification before you present them as facts.

I reviewed the homepage, course directory, all five course-detail pages, portfolio, About, Contact, enrollment flow, and the relevant pages on the original [iipnepal.com](https://iipnepal.com/) site.

## 1. The biggest problems to fix first

1\. Course information is inconsistent

The homepage lists the Pro-Level Foundation course at Rs. 32,000, discounted from Rs. 56,000. The Courses page and its detail page list Rs. 26,800. The homepage also shows the Advanced course at Rs. 44,800 after a discount, while its detail page and the original website list Rs. 56,000. This is the highest-priority issue because prospective students could make decisions based on the wrong fee.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://iipnepal.vercel.app\&sz=32)

Indian Institute of Photography Nepal

+4



2\. Some claims may promise more than the actual Nepal centre offers

Your redesign mentions darkroom facilities, studio labs, degree programmes, hundreds of alumni, career assistance, accredited certification, and extensive fieldwork. These may be legitimate, but they need to be confirmed as offerings or facts applicable to IIP Nepal specifically. The original website's local course list is considerably narrower.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://iipnepal.vercel.app\&sz=32)

Indian Institute of Photography

+2



3\. Users cannot immediately distinguish the courses

The listings give course names, durations and prices, but delivery mode, equipment requirements, expected workload and differences between the two foundation-level courses need clearer emphasis. Users should be able to compare all five programmes without opening five separate pages.

4\. The portfolio needs to prove educational outcomes

The visual storytelling is good for the brand, but a prospective student needs to know what students actually produce, who created each photograph, what they learned, and how mentorship improved their work. Equipment terminology and editorial descriptions should support the images rather than compete with them.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://iipnepal.vercel.app\&sz=32)

iipnepal.vercel.app



5\. The enrolment journey needs verification

The version of `/enroll` I could inspect exposed “Loading Admissions Dossier...” instead of the actual form. This could be a limitation of automated page rendering rather than a confirmed problem for visitors, so test the live page in a browser before concluding that it is broken. If the form remains stuck on loading, treat it as a release blocker.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://iipnepal.vercel.app\&sz=32)

Indian Institute of Photography



My recommendation is to fix these issues before making substantial layout changes. They affect credibility, comprehension and enrolment more directly than visual refinements would.

## 2. Homepage: what to keep, shorten and improve

Your homepage currently introduces IIP Nepal, explains the teaching approach, showcases the five courses, describes the learning process, presents the portfolio, includes testimonials and brand logos, displays six news items, and ends with a contact form and another CTA.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://iipnepal.vercel.app\&sz=32)

Indian Institute of Photography Nepal



The content is relevant overall. The main improvement is to make every section answer a distinct question rather than repeatedly promoting the same idea.

### A. Hero section

Problem: “Welcome to the IIP Centre Nepal” communicates the institute's identity, but it doesn't immediately explain the benefit of studying there.

The introductory sentence focuses on the launch and partnership rather than what a potential student can learn.

Keep: Your existing photography-focused hero image, layout, typography and visual treatment.

Change the messaging to something along these lines:

SUGGESTED HERO COPY

# Learn photography through guided practice and personal mentor feedback.

Choose a course that fits your experience, practise your skills through structured assignments, and receive feedback to help improve your photography.

Explore courses →

Talk to admissions

Confirm that the mentorship and assignment model accurately describes every course before publishing this copy.

The objective is not to add more text. It's to make the existing space answer three things: what IIP teaches, how students learn, and what to do next.

Also review these smaller details:

- Replace “Enroll Now — Intake 2026” if it doesn't represent a confirmed, current intake. Your course pages describe rolling monthly intake for several programmes, so a generic year-based label may confuse visitors.

- Use one consistent establishment date. The header says “Est. 2026”, while other sections describe the Kathmandu centre as established in 2011. Clarify whether these refer to the local centre, the partnership, or IIP's wider history.&#x20;

  [image](https://www.google.com/s2/favicons?domain=https://iipnepal.vercel.app\&sz=32)

  Indian Institute of Photography Nepal

  +1

- Keep Login available for existing students, but treat it as a secondary action to course exploration and enrolment.

### B. “What we do” and the statistics section

The section is useful, but the statistics need to be both accurate and meaningful to a prospective student.

| Current content                        | Recommended fix                                                                                           |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 14+ years of photography education     | Specify whose experience this represents: IIP as a wider institution or the Nepal centre.                 |
| 500+ alumni                            | Confirm the number and explain whether it refers to IIP globally or Nepal graduates.                      |
| 100% hands-on                          | Explain the actual practical learning method and which courses include physical studio or field sessions. |
| Long description of technical training | Reduce it to one short paragraph describing the learning experience.                                      |

Keep three clear reasons to choose IIP, such as personal feedback, structured photography assignments, and a recognised IIP course certificate, provided the client confirms those claims.

The user should understand the value of the teaching model without reading another lengthy explanation.

### C. Courses section — keep your pinned interaction

Since your course section uses a pinned presentation with a list, I would not remove it just because the same course information appears more than once in the extracted page content. The text extraction alone cannot tell us whether that repetition is visible to visitors.

Instead, improve the way this interaction communicates course choices.

[JONBOB - Commercial Photography](https://images.openai.com/static-rsc-4/wAMlCwdeIzyhffSnfBGWHik_QsnrtAUGcRvWCFT_yedl_s2xpW8Wsl2htG_Gjt-92RVmcmx7lKOUteDb1-T8E3rOCmw6z_eSCv1VZtmmCqF60Hzkq2b1mvq0Wl0jPuX3rQhn9sRfg0AJviWyz0pcTuNajE69st1NUaX8DvOWGDc?purpose=inline)

Featured course panel

Keep the large image and selected-course presentation. Show just the course name, level, duration, delivery mode, fee and one sentence describing its outcome. Keep the main CTA prominent.

[One-on-one tutoring | Phototec](https://images.openai.com/static-rsc-4/uk297tbhKVnxkUTpnetmQGv-ik4g2FQ-d_fcIBirv7S4rphtiCUf6oH_wusAQRsMqKNUXAxPXDweSvsFkKIDiYL_QUkAyeVKtDZI3RWCAMznbmzl6qP8fNGUQyy-z51nrN1U4hKcqukksnGegeW7GkdZ-Cbj8O715bAzU0yvySI?purpose=inline)

Course list beside the panel

Make each row a compact comparison: course name, level, duration and price. Selecting a row should clearly update the featured panel, with an obvious active state.

Use the existing layout rather than adding another section to explain the same courses.

Check the interaction in three situations: ordinary desktop scrolling, touchscreen scrolling, and mobile. On smaller screens, a pinned interaction must not hijack the page's vertical scrolling or make users scroll past a large panel to reach the next section.

### D. How the course works

Your current four stages—enrolment, learning, practice, and review/certification—are worth keeping.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://iipnepal.vercel.app\&sz=32)

Indian Institute of Photography Nepal



However, the homepage doesn't need the entire operational explanation.

Keep each stage to a title and a single sentence:

1. Choose your course — Select a programme that fits your experience and goals.
2. Learn and practise — Follow the learning material and complete photography assignments.
3. Receive feedback — Submit your work for mentor review and improvement guidance.
4. Complete your course — Explain the applicable completion and certificate requirements.

This section should help people picture themselves learning, not serve as a detailed course manual. Keep the additional information on each course page.

### E. Portfolio section

Keep your portfolio showcase and its pinned/list interaction. The problem isn't that you have a lot of photographs; showing the quality of student work is valuable for a photography institute.

Improve the information surrounding the images:

- Prioritise the photographs over lengthy literary descriptions.
- Show the photographer's name, course, location and one concise explanation of the work.
- Add a short “What this project demonstrates” caption, such as composition, lighting, storytelling or editing.
- Use “View project” and “Explore related course” as clear actions.
- Keep detailed camera equipment and technical information on the individual project pages.

Most importantly, make sure the work is authentic student or alumni work and that the photographer credits and permissions are correct. The original portfolio page provides only a brief introduction, whereas your redesign contains detailed named projects and attribution. Those additions need client verification.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://iipnepal.com\&sz=32)

Photography Courses in Nepal

+1



### F. Testimonials, partner logos and news

These are the homepage elements I would reduce most aggressively.

Testimonials: Four long testimonials occupy substantial space. Keep two or three strong, authentic reviews instead. Ideally each should identify the student, course taken, and a specific outcome. A director's statement about the institute should not be presented as though it were an independent student testimonial.

Brand logos: Your homepage displays photography equipment manufacturers and well-known photography organisations. Visitors could interpret these as sponsors or official partners. Keep partner logos only for genuine, authorised relationships. Otherwise, remove the strip or replace it with relevant course information.

News and opinion: Six news cards are a lot for a site whose main goal is helping students find and enrol in courses. Keep a maximum of three recent, genuine stories. If IIP Nepal doesn't have regularly maintained news, remove the section for now rather than filling the homepage with articles that may not be verifiable. The existing original `/news` page is essentially empty, so there is no established news archive that the redesign needs to preserve.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://iipnepal.com\&sz=32)

Photography Courses in Nepal

+1



Closing CTA: Your contact section already contains a form, and the footer contains another “Ready to begin your journey” prompt. Keep one purposeful closing CTA and avoid repeating the same pitch immediately after the enquiry form.

## 3. Courses directory: `/courses`

Your course directory is one of the most important pages because it helps users decide which programme to investigate. It already has five courses and level filters.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://iipnepal.vercel.app\&sz=32)

Indian Institute of Photography



The improvement I recommend is better comparison—not a different card design.

### What each course card should communicate

Use a consistent order for all five cards:

[Travel and adventure photograhy — Vanessa martin quintana](https://images.openai.com/static-rsc-4/lznm1jdOxoRgkXMWDpNiqvLVRKsSjGHkK_Fwf4esN6VAIsaLcnhlwzl82angT8kLgZ9QN7Huh_JUCjBj6Lh2bZE2b8BCAuCMYqvj4uqIRajjHKypoEIW0nm_8wO-SFJ5nB_KXnUoZx76c4t041EdbQSUE1Pt6TDdDQAnV7EXkKo?purpose=inline)

BEGINNER · ONLINE · 1 MONTH

Online Mobile Photography Course

Learn composition, smartphone camera settings and mobile editing.

## Rs. 4,160

Regular fee Rs. 5,200, if the current discount is confirmed.

View course →

This is an example of the information hierarchy, not a recommendation to change your existing card styling.

Each card should answer:

- Level: Who is the course intended for?
- Delivery: Online, in person or hybrid?
- Duration: How long does it take?
- Equipment: Smartphone, DSLR/mirrorless camera, or additional equipment?
- Outcome: What will the student learn or produce?
- Fee: What is the actual payable amount?
- Next step: Where does each CTA lead?

Use these labels consistently. The current directory describes all five programmes as mentor-led courses in Kathmandu, while the course names and descriptions indicate that some are online. That distinction needs to be explicit, not left to the detail page.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://iipnepal.vercel.app\&sz=32)

Indian Institute of Photography

+1



### Fix the course-level terminology

Your filters use Beginner, Foundation and Advanced, while the Pro-Level Foundation course is labelled “Foundation / Pro Level.”

That creates ambiguity. Establish one simple level classification with the client and use it everywhere, including filters, cards, course details and related-course suggestions.

Also remove the recurring “35MM ARCHIVE” label from cards unless it communicates something meaningful to students. A level or delivery-mode label would be more useful.

### Correct the fee information

The following is the pricing consistency check from the public pages I reviewed:

| Course                 | Current course-directory/detail price | Issue                                                      |
| ---------------------- | ------------------------------------- | ---------------------------------------------------------- |
| Mobile Photography     | Rs. 4,160                             | Discount from Rs. 5,200; verify current validity           |
| Basic Photography      | Rs. 9,600                             | Discount from Rs. 12,000; verify current validity          |
| Foundation Photography | Rs. 15,600                            | Discount from Rs. 19,500; verify current validity          |
| Pro-Level Foundation   | Rs. 26,800                            | Conflicts with the homepage's Rs. 32,000 promotional price |
| Pro-Level Advanced     | Rs. 56,000                            | Conflicts with the homepage's Rs. 44,800 promotional price |

The original course pages also list Rs. 26,800 for Pro-Level Foundation and Rs. 56,000 for Pro-Level Advanced. Confirm the intended current prices with the client, then make every occurrence consistent.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://iipnepal.com\&sz=32)

Photography Courses in Nepal

+5



Do not show an old price with a discount simply because it looks attractive. The sale price, regular price and discount must reflect the actual fee policy.

Finally, keep the primary action on the directory focused on helping users explore the right course. The course detail page should then provide the full syllabus and a clear enrolment action.

## 4. Course detail pages: all five programmes

The five course pages share a common structure: overview, specifications, fee, syllabus, learning outcomes, prerequisites, enrolment, FAQs and related programmes. That consistency is good. The opportunity is to make the information more useful and less repetitive.

### Recommended improvements to the shared template

| Section                  | Keep                                               | Fix                                                                                                                          |
| ------------------------ | -------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Course title and hero    | Course image, title, level and concise description | Explain the intended student and outcome in plain language.                                                                  |
| Programme specifications | Duration, instruction, intake, credential and fee  | Add delivery mode and equipment requirements where appropriate.                                                              |
| Syllabus                 | The actual curriculum                              | Group detailed modules into collapsible sections so visitors can scan the course first.                                      |
| Learning outcomes        | Concrete learning outcomes                         | Avoid repeating module names in slightly different wording.                                                                  |
| Prerequisites            | Camera and software requirements                   | Make the required equipment consistent with the course description and FAQs.                                                 |
| Fees and enrolment       | Payable fee and CTA                                | Explain what the fee includes and link to the applicable refund policy. Avoid repeating the same price block multiple times. |
| FAQs                     | Course-specific questions                          | Confirm that each question expands to reveal a useful answer.                                                                |
| Related courses          | Relevant alternatives                              | Recommend courses based on the student's level and learning goals.                                                           |

### Specific fixes for each course

Online Mobile Photography Course

The course is well positioned for beginners who don't want to purchase a professional camera. Keep that benefit prominent.

Change phrases such as “professional camera controls” and “mobile darkroom editing” where they obscure what students actually learn. Make the syllabus describe smartphone settings, composition, lighting, mobile editing applications and practical assignments in familiar language.

Clarify which smartphone capabilities are required, if any, and ensure the listed equipment and editing tools reflect what the course really supports.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://iipnepal.vercel.app\&sz=32)

Indian Institute of Photography



1-Month Online Basic Photography Course

This page has a useful beginner-friendly structure, but there is a potential contradiction in the equipment information: the prerequisites emphasise a DSLR/mirrorless camera or bridge camera, while an FAQ answer suggests that a smartphone with manual controls may also be suitable.

Ask the client which devices are genuinely acceptable and state the answer once in the prerequisites. Do not make users discover conflicting requirements halfway down the page.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://iipnepal.vercel.app\&sz=32)

Indian Institute of Photography



3-Month Online Foundation Photography Course

Keep the emphasis on learning fundamental photography techniques and developing a stronger portfolio. Make its distinction from the one-month Basic course obvious: why would a beginner choose this longer programme instead?

Useful comparison points include the depth of the syllabus, amount of practice, mentor support, and expected final outcome. Verify claims such as lifelong mentorship before prominently promising them.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://iipnepal.vercel.app\&sz=32)

Indian Institute of Photography



Pro-Level Foundation Photography Course

The detail page already lists its three-month duration and Rs. 26,800 fee correctly, but the level label needs clarification.

Its distinctive value should be clear: who should take it, what prior knowledge is expected, whether weekly live sessions are included, and how it differs from the three-month Foundation programme. If the live critiques and commercial assignments are the key differentiators, surface them in the summary rather than making users hunt through the curriculum.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://iipnepal.vercel.app\&sz=32)

Indian Institute of Photography



Pro-Level Advanced Photography Course

This page has useful advanced topics, including commercial work, studio lighting, fashion, product photography and business skills. Make the expected starting level immediately clear: your current page says applicants should have completed an IIP Foundation course or have equivalent experience.

Also distinguish the advanced programme's intake schedule from the rolling intake described on other course pages. Confirm that “Quarterly Intake” and “Limited Seats” are current, and explain the practical requirements for completing this course.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://iipnepal.vercel.app\&sz=32)

Indian Institute of Photography



### Make the workload explicit

Your course-detail pages say that students submit five photographs per module for mentor feedback. Some courses have ten modules. If that means five separate submissions for every module, a student could be expected to submit approximately fifty photographs over a one-month course.

Confirm that this is the actual workload. If it is, explain the expected time commitment before someone pays. If the requirement is different, correct the wording. Clear workload expectations are more useful than another paragraph promoting the course's quality.

### Make the detailed pages shorter without losing useful information

You don't need to delete entire sections. Instead:

- Show the price, duration, delivery mode, prerequisites and key outcomes immediately.
- Keep a full syllabus accessible, but let users expand module groups.
- Keep learning outcomes to a short set of concrete results.
- Place detailed technical specifications and extended explanations behind expandable sections.
- Keep a clear enrolment CTA available on long pages, especially on mobile.
- Remove the generic closing CTA if it appears immediately after another near-identical call to action.

One important content check: some of the course pages use phrases such as “accredited IIP certification” and “100% Satisfaction Guarantee.” Use the exact certification and refund wording approved by IIP, and link to the applicable policy. Don't imply external accreditation or a universal refund guarantee without confirmation.

Your crawled course pages show some FAQ questions without their answers in the extracted text. That might simply mean the answers are hidden inside collapsed accordions. Expand every FAQ in the actual website and verify that each answer exists and displays correctly.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://iipnepal.vercel.app\&sz=32)

Indian Institute of Photography

+2



## 5. Portfolio directory and project-detail pages

I reviewed the `/portfolio` directory and its six project pages:

- The Living Market of Asan
- Echoes of the High Himalayas
- Masters of Copper Repoussé
- Devotion at Nyatapola Square
- The Silver Chemistry: Darkroom Archive
- Monsoon Rhythms of Kathmandu

The detail pages have a consistent structure with a lead image, photographer, location, course association, gallery plates, field notes, technical information and related projects. The structure itself is suitable for a photography institute.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://iipnepal.vercel.app\&sz=32)

IIP Nepal Archive

+5



### What I would change

On the portfolio directory: make it easy to explore the actual work. The filters for Street & Documentary, Alpine Landscape, Cultural Heritage, Portrait & Culture, and Darkroom & Archive can stay. Use strong images and concise captions; don't require users to read long descriptions before they understand the work.

On each project page: keep the image gallery, photographer attribution, course association and mentor feedback. These are relevant to prospective students because they demonstrate what the programme may help them create.

Shorten or collapse the “Artist & Field Notes,” detailed equipment specifications, exposure information, and print-edition details. Those details are useful to photography enthusiasts, but they are secondary to the main questions a prospective student has:

- What did the student create?
- What skills did they use?
- Which course helped them develop those skills?
- What could I learn by taking the same course?

Consider adding a small “What this project demonstrates” section. It could explain, for example, how a project demonstrates composition, available-light photography, visual storytelling or editing—only where supported by the actual work.

Keep “Explore related course” prominent but secondary to viewing the photographs.

Most importantly, validate the content. The redesigned portfolio contains detailed names, dates, quoted field notes, camera models, technical exposures and mentor assessments that I could not verify from the old portfolio page, which only provides a short introductory description. That doesn't prove the new information is incorrect; it means the client needs to approve it before publication. Don't present illustrative projects, placeholder names, or sample testimonials as genuine student work.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://iipnepal.com\&sz=32)

Photography Courses in Nepal

+1



## 6. About page: the largest content-reduction opportunity

Your About page is the page I would shorten most. It contains the introduction, statistics, teaching areas, the director's profile, a leadership statement, a seven-step admissions journey, multiple degree and diploma prospectuses, and a further admissions CTA.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://iipnepal.vercel.app\&sz=32)

Indian Institute of Photography

+2



The issue is that these sections mix information about the Kathmandu centre with broader IIP Academy programmes.

### Keep these sections

1. About IIP Nepal: a short explanation of the local centre and its relationship with the Indian Institute of Photography.
2. How students learn: the actual teaching method, mentor feedback and practical work.
3. People: the director and the instructors who teach or support the advertised programmes.
4. The physical centre: authentic photographs of the actual Kathmandu location and facilities, if applicable.
5. Admissions: a brief explanation of what a prospective student needs to do next.

You can present this in your existing layout and typography. There is no need to introduce new design components.

### What to remove or consolidate

Degree and diploma catalogues: the About page lists MFA, BFA, DDPC, OPDP and TeenSchool programmes. These are not listed among the five courses in your redesigned course directory. Keep them here only if IIP Nepal genuinely offers them, or clearly distinguish them as programmes provided by another IIP Academy centre. Otherwise, remove them from the Nepal centre's main sales journey.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://iipnepal.vercel.app\&sz=32)

Indian Institute of Photography



Seven-step admissions journey: reduce this to the actual admissions process, perhaps three steps:

1. Choose a course or ask for guidance.
2. Submit an enquiry or registration.
3. Confirm enrolment and receive the instructions needed to begin.

Use this only if it reflects the real process. Your course pages describe online registration and student portal access, whereas the About page describes portfolio assessment, tuition planning and studio clearance. Confirm which steps actually apply to each programme and remove unnecessary steps.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://iipnepal.com\&sz=32)

Photography Courses in Nepal

+1



Duplicated teaching topics: the list of photography disciplines appears twice in the extracted page content. If this is a deliberate marquee loop, keep the visual animation, but ensure the repeated copy isn't unnecessarily announced twice by screen readers and respects reduced-motion preferences.

Broken prospectus link: I tested a catalogue download linked from the About page, and the `ONLINE CATALOUGE 22.pdf` URL returns a 404 error. Repair the file link or remove it; a broken official prospectus undermines trust.&#x20;

Internal Error



The About page should leave a prospective student with a clear understanding of what IIP Nepal is, who teaches, how courses work, and where to ask questions—not a catalogue of every programme associated with the wider institution.

## 7. Contact page: make asking a question easier

The current Contact page includes a phone number, email address, Kathmandu location and admissions form. Those are the right basics.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://iipnepal.vercel.app\&sz=32)

Indian Institute of Photography



The main issue is the form's wording. “Project or mentorship details” sounds more appropriate for requesting a photography commission or special mentorship than for somebody who wants to enrol in a course.

I would change it to:

| Field                 | Recommendation                                                   |
| --------------------- | ---------------------------------------------------------------- |
| First name            | Keep                                                             |
| Last name             | Keep if needed; otherwise make optional                          |
| Email                 | Keep                                                             |
| Phone number          | Clearly indicate whether it is required                          |
| Programme of interest | Keep, with all five course options                               |
| Question or message   | Make optional and use instead of “Project or mentorship details” |

Keep the form short, explain what happens after submission if the client can confirm that process, and provide clear success and error feedback. Add a privacy-policy link near the submit action.

Keep the address and Google Maps link. Make the phone number, email address and map clearly actionable on mobile.

If IIP accepts admissions enquiries through WhatsApp or another channel, provide that as an additional contact option. Confirm the contact method and number with the client instead of assuming it is configured.

Finally, this form should be tested end to end: submit valid information, submit invalid information, inspect the confirmation, and verify that the enquiry reaches the intended recipient.

## 8. Enrolment page: `/enroll`

This page deserves a separate test because it is where a visitor becomes a potential student.

The version available to my page crawl displayed “Loading Admissions Dossier...” rather than the registration form. That is a warning to investigate, not conclusive proof that the form is broken for actual visitors.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://iipnepal.vercel.app\&sz=32)

Indian Institute of Photography



Test the route manually, including a direct visit to a course-specific URL such as `/enroll?course=mobile-photography-course`.

The page should:

- Load a working form reliably, including when a visitor opens the link directly.
- Show the selected course and preselect it in the form.
- Let the student verify the course and fee before submitting.
- Avoid making the student enter the course name again after selecting “Enroll” on a course page.
- Explain whether the form requests enrolment, submits an application, or simply sends an enquiry.
- Show clear validation, confirmation and error messages.

The CTA must describe the actual action. If a visitor submits an enquiry and staff contact them before enrolment is confirmed, “Request enrolment” or “Submit enrolment enquiry” may be more accurate than “Enroll Now.” If enrolment really is immediate, keep the stronger label.

Also clarify whether payment is made on the website, through a subsequent payment instruction, or at the centre. Don't make users assume they have paid or secured a place merely because they submitted a form.

## 9. FAQ, Terms, Privacy and the news content

### FAQ

A dedicated FAQ page was part of your proposed site structure, but I couldn't access a separate `/faq` page through the website crawl. Course pages do contain their own FAQ sections.

You should either provide a working, accessible FAQ page linked from the footer or remove the unused route from the planned site structure. A global FAQ should answer questions shared across courses, including equipment, learning format, registration, certificates, payments and refunds. Keep course-specific questions on the corresponding course pages.

### Terms and Privacy

The footer exposes a combined “Terms & Privacy” link, but I couldn't verify its destination or contents through the crawl. Test the actual link and ensure the relevant pages load.

The policies should clearly explain the applicable enrolment, cancellation, refund and payment conditions. The privacy policy should explain what information the enquiry and registration forms collect, how it is used, and how someone can contact IIP about their information.

### News

Keep the existing news section only if the stories are genuine and the client intends to maintain them. Three accurate, recent updates are more useful than six unmaintained cards.

If there is little news to publish, removing the section is better than forcing content into the homepage. Your existing portfolio is already a more relevant way to demonstrate photography and learning outcomes.

## 10. The information to cut, keep, add and verify

Here is the consolidated content strategy I would give the client.

| Action                 | What it means for your redesign                                                                                                                                                                                |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Keep                   | Current visual identity, hero photography, course catalogue, course-detail pages, portfolio galleries, actual testimonials, contact information and the pinned presentation of courses and portfolio work.     |
| Shorten                | Homepage explanations, repeated course descriptions, the four-step learning explanation, testimonials, technical portfolio notes and the About page's admissions journey.                                      |
| Remove, if unnecessary | Unmaintained news, irrelevant degree prospectuses, unverified partner logos, duplicate marketing paragraphs and repeated footer CTAs.                                                                          |
| Add or clarify         | Delivery mode, equipment requirements, expected workload, clear course comparisons, authentic student outcomes, working enquiry feedback and accurate enrolment instructions.                                  |
| Verify with the client | All fees and discounts, establishment dates, alumni counts, physical facilities, programme availability, certificates and accreditation, testimonials, portfolio credits, refund promises and payment methods. |

## 11. Recommended homepage order

I would preserve the existing sections and move toward this content order rather than redesigning the page.

01

Hero

State who the courses are for and what students learn.

02

Why IIP

Three accurate, specific reasons to choose the institute.

03

Courses

Keep your pinned course interaction; simplify comparisons.

04

Student work

Use the portfolio to demonstrate what students can achieve.

05

How learning works

Explain the learning process in three or four short steps.

06

Testimonials or mentors

Use a few verified, credible voices.

07

FAQ

Answer the most common objections before enrolment.

08

Enquiry and footer

Provide one clear closing action and complete contact details.

If genuine news is available, place up to three current items where they support the portfolio or student work. Otherwise, don't force a news section into this sequence.

## 12. What to fix first

Use this implementation order to avoid spending time on lower-impact changes before the fundamentals are correct.

Priority 1 — Accuracy and functionality

Reconcile all five course prices, verify the course claims and portfolio credits, fix broken prospectus links, check legal pages, and test the entire enrolment and enquiry flow.

Priority 2 — Decision-making

Improve the hero message, make online/in-person delivery obvious, standardise course levels, clarify equipment requirements, and make the five course cards easier to compare.

Priority 3 — Reduce content

Shorten About, compress homepage prose, simplify portfolio descriptions, reduce testimonials and news items, and remove the irrelevant degree catalogue content if it isn't offered locally.

Priority 4 — Interaction testing

Check the pinned sections, course filters, accordions, CTAs and forms on desktop and mobile. Verify that the existing interactions remain easy to navigate with touch, keyboard and reduced-motion settings.

The last step is a functionality check, not a request to redesign your responsive layouts. Your visual direction can stay intact.

## My final recommendation

Your redesigned website has the right foundation for a photography institute. The most valuable improvement is to make it a better student decision-making experience.

A visitor should be able to understand the institute, compare the five courses, see authentic examples of student work, know what each course requires, understand the fee and confidently enquire or enrol. Every section should support one of those tasks.

I would start with the price inconsistencies, the unverified content, the About-page reduction, the course-comparison information and the enrolment flow. Those changes should have a greater effect on usability and credibility than another round of visual redesign.

One final point: the audit is based on the public pages and content I could retrieve. The live behaviour of the pinned sections, responsive layouts, forms and accordion answers still needs manual browser testing before you make implementation decisions.