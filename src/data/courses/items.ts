export interface CourseItem {
  id: string;
  number: string;
  slug: string;
  title: string;
  duration: string;
  level: string;
  courseType: string;
  tagline: string;
  totalFee: string;
  payableFee: string;
  discount?: string;
  description: string;
  coverImage: string;
  featured: boolean;
  intake: string;
  certification: string;
  assignmentsCount: string;
  whatYoullLearn: string[];
  prerequisites: string[];
  courseAdvantage: string[];
  courseStructure: string[];
  deliveryMode: string;
  equipment: string;
  keyOutcome: string;
  howThisCourseWorks: string[];
  faqs: { question: string; answer: string }[];
  paymentOptions: string[];
}

export const masterCoursesList: CourseItem[] = [
  {
    id: "course-1",
    number: "01",
    slug: "mobile-photography-course",
    title: "Mobile Photography Course",
    duration: "1 Month",
    level: "Beginner",
    deliveryMode: "100% Online",
    equipment: "Smartphone (iOS / Android)",
    keyOutcome: "Master smartphone manual controls, composition, and mobile editing.",
    courseType: "Mobile Photography Course",
    tagline: "Pocket-Sized Vision, Manual Smartphone Controls & Creative Mobile Editing",
    totalFee: "Rs. 5,200",
    payableFee: "Rs. 4,160",
    discount: "20% off",
    description:
      "Learn professional photography using just your smartphone. This comprehensive course teaches you how to master camera settings, composition, and mobile editing.",
    coverImage: "/images/course-mobile.webp",
    featured: true,
    intake: "Rolling Monthly Intake",
    certification: "Official IIP Certificate of Completion",
    assignmentsCount: "10 Structured Lessons & 4 Curated Photo Projects",
    whatYoullLearn: [
      "Master all camera settings and manual exposure on your smartphone",
      "Apply professional editorial and documentary composition techniques",
      "Edit photos using mobile editing apps like Snapseed & Lightroom Mobile",
      "Create a curated, exhibition-ready mobile photography portfolio",
      "Understand natural lighting, shadows, and angle dynamics for punchy shots",
    ],
    prerequisites: [
      "Modern smartphone (iOS or Android) capable of running mobile editing apps (Lightroom Mobile / Snapseed)",
      "Basic familiarity with mobile phone operations and camera settings",
      "Estimated commitment of 3-5 hours per week for lessons, practical shooting, and editing",
    ],
    courseAdvantage: [
      "Learn from anywhere, anytime at your own pace",
      "Personal mentor assigned to each student for dedicated critique",
      "Interactive one-on-one sessions via the student dashboard",
      "Downloadable course guides, cheat sheets, and visual references",
      "Recognized IIP Certificate upon course completion",
      "Lifetime access to syllabus updates and alumni workshops",
      "Membership in the exclusive IIP Global Student Community",
    ],
    courseStructure: [
      "Introduction to Mobile Photography & Visual Mindset",
      "Understanding Smartphone Camera Hardware & Native Controls",
      "Composition Rules for Mobile: Leading Lines, Framing & Rule of Thirds",
      "Natural Lighting Techniques: Golden Hour, Harsh Sun & Diffused Light",
      "Portrait Photography: Depth of Field, Distance & Subject Connection",
      "Landscape & Kathmandu Street Photography Practices",
      "Mobile Photo Editing: Colour Grading & Curve Adjustments in Lightroom",
      "Social Media Optimization, Storytelling & Visual Curation",
      "Practical Field Assignments (Curated Frames Per Project)",
      "Final Portfolio Review & Mentor Evaluation",
    ],
    howThisCourseWorks: [
      "Enrollment: Receive personal login credentials to the IIP Student Control Panel within 24 hours.",
      "Learning: Read structured chapter materials, study visual breakdowns, and shoot field exercises.",
      "Practice: Complete shooting briefs and upload your curated photographs for mentor critique.",
      "Critique: Your assigned IIP mentor critically examines your photographs on technical and artistic parameters.",
      "Certification: Receive your official IIP certificate upon finishing all modules and portfolio review.",
    ],
    faqs: [
      {
        question: "Is this course suitable for complete beginners?",
        answer:
          "Yes, this course is designed specifically for absolute beginners. No prior photography experience or technical camera knowledge is required.",
      },
      {
        question: "Do I need an expensive iPhone or professional camera?",
        answer:
          "No, this course is engineered for smartphone photography. Any modern smartphone with a functioning camera (iOS or Android) will work perfectly.",
      },
      {
        question: "How long do I have access to the learning materials?",
        answer:
          "You receive lifetime access to the digital course materials, student dashboard, and future updates even after graduation.",
      },
      {
        question: "What is the tuition refund and withdrawal policy?",
        answer:
          "Tuition refund and withdrawal requests are governed by official IIP academic regulations. Students may consult the admissions desk prior to course commencement.",
      },
    ],
    paymentOptions: [
      "Online Payment — eSewa, Khalti, Debit / Credit Card, Net Banking",
      "Direct Bank Transfer (Nepal Investment Mega Bank / Nabil Bank)",
      "Counter Payment at Jyoti Bhawan, Kanti Path, Kathmandu",
    ],
  },
  {
    id: "course-2",
    number: "02",
    slug: "beginners-course",
    title: "Basic Photography Course",
    duration: "1 Month",
    level: "Beginner",
    deliveryMode: "100% Online",
    equipment: "DSLR or Mirrorless Camera",
    keyOutcome: "Master camera exposure triangle (aperture, shutter, ISO) and creative controls.",
    courseType: "Basic Photography Course",
    tagline: "Master the Exposure Triangle, Manual Camera Controls & Creative Composition",
    totalFee: "Rs. 12,000",
    payableFee: "Rs. 9,600",
    discount: "20% off",
    description:
      "Start your photography journey with our comprehensive beginner-friendly course covering camera basics, composition, and practical shooting techniques.",
    coverImage: "/images/course-basic.webp",
    featured: true,
    intake: "Rolling Monthly Intake",
    certification: "Official IIP Certificate of Basic Photography",
    assignmentsCount: "10 Learning Modules & 4 Practical Project Submissions",
    whatYoullLearn: [
      "Understand all camera mechanics, shooting modes (M, Av/A, Tv/S), and sensor dynamics",
      "Master the exposure triangle (Aperture, Shutter Speed, ISO) for deliberate creative intent",
      "Apply composition rules: Rule of Thirds, Golden Ratio, Negative Space, and Symmetry",
      "Capture professional-quality portraits, street documentation, and landscapes",
      "Foundational RAW image development and digital post-processing basics",
    ],
    prerequisites: [
      "DSLR or Mirrorless camera with manual exposure modes (or bridge camera with manual dials)",
      "Computer, tablet, or smartphone to access learning materials and upload assignments",
      "Estimated commitment of 4-6 hours per week (1-2 hrs theory study, 3-4 hrs shooting and editing)",
    ],
    courseAdvantage: [
      "Step-by-step professional guidance structured by master educators",
      "One-on-one mentor interaction and constructive image critiques",
      "24/7 online course availability tailored for busy working professionals",
      "Evaluation-based progress tracking ensuring measurable skill growth",
      "Downloadable study guides, camera cheat sheets, and lighting recipes",
      "Recognized IIP Certificate of Completion upon graduation",
      "Lifelong access to the IIP Alumni Club and photo walks in Kathmandu",
    ],
    courseStructure: [
      "Introduction to Photography: Optics, Sensors & Camera Anatomy",
      "Understanding Camera Modes: Full Manual vs Aperture/Shutter Priority",
      "The Exposure Triangle: Balancing Aperture, Shutter Speed & ISO",
      "Depth of Field & Creative Bokeh Control",
      "Composition Masterclass: Framing, Dynamic Diagonals & Balance",
      "Natural and Artificial Lighting Fundamentals",
      "Portraiture Basics: Environmental & Natural Light Portraits",
      "Landscape & Street Photography in Urban Spaces",
      "RAW Image Processing: Basic Color Balancing & Tonal Contrast",
      "Final Curated Portfolio Submission & Graduation Critique",
    ],
    howThisCourseWorks: [
      "Read: Log in to your IIP dashboard and master each chapter module at your own pace.",
      "Interact: Connect directly with faculty mentors for questions and technical clarifications.",
      "Shoot: Take your camera into the field and execute the practical assignment brief.",
      "Submit: Upload your 2-3 best curated photographs for each core project to the student dashboard.",
      "Review: IIP mentors critically examine your work on technical execution and creative merit.",
    ],
    faqs: [
      {
        question: "Can I do this course without a DSLR camera?",
        answer:
          "A DSLR, mirrorless, or bridge camera with manual exposure modes is required for this course so you can master aperture, shutter speed, and optical lens controls. If you only shoot on a smartphone, we recommend enrolling in our Mobile Photography Course instead.",
      },
      {
        question: "How many hours per week should I dedicate?",
        answer:
          "We recommend committing approximately 4 to 6 hours per week: 1-2 hours for module study and 3-4 hours for shooting and editing practical assignments.",
      },
      {
        question: "Will I get an official certificate after completion?",
        answer:
          "Yes, every student who completes all assignments and achieves passing evaluation receives an official IIP Certificate.",
      },
      {
        question: "What if I require extra time to finish my assignments?",
        answer:
          "You can request a complimentary course extension for genuine personal or professional reasons with no extra tuition fees.",
      },
    ],
    paymentOptions: [
      "Online Payment (eSewa, Khalti, Debit / Credit Card, Net Banking)",
      "Direct Bank Transfer (Nepal Investment Mega Bank / Nabil Bank)",
      "Counter Payment at Jyoti Bhawan, Kanti Path, Kathmandu",
    ],
  },
  {
    id: "course-3",
    number: "03",
    slug: "foundation-course",
    title: "Foundation Photography Course",
    duration: "3 Months",
    level: "Foundation",
    deliveryMode: "100% Online",
    equipment: "DSLR / Mirrorless Camera + Computer",
    keyOutcome: "Develop comprehensive photographic technique, light direction, and structured portfolio.",
    courseType: "Foundation Photography Course",
    tagline: "Comprehensive Foundation: Lighting Mastery, Visual Storytelling & Lifelong Mentorship",
    totalFee: "Rs. 19,500",
    payableFee: "Rs. 15,600",
    discount: "20% off",
    description:
      "A comprehensive foundation course covering every vital topic related to photography along with skill development.",
    coverImage: "/images/course-foundation.webp",
    featured: true,
    intake: "Rolling Monthly Intake",
    certification: "Official IIP Certified Foundation Diploma",
    assignmentsCount: "10 Structured Modules (Deep One-on-One Critique)",
    whatYoullLearn: [
      "Gain the expertise to operate any digital camera system with complete instinctive fluency",
      "Detailed understanding of advanced visual literacy, semiotics, and narrative storytelling",
      "Professional critical judgment in spotting compositions and predicting natural light changes",
      "Creative mastery of artificial and continuous lighting setups",
      "Lifelong mentorship connection with IIP faculty to guide your artistic evolution",
      "High aesthetic confidence and a cohesive 20-frame exhibition-ready portfolio",
    ],
    prerequisites: [
      "DSLR or Mirrorless camera with interchangeable lens capabilities",
      "Computer capable of managing photos and accessing the student portal",
      "Estimated commitment of 5-7 hours per week for learning modules, field shoots, and mentor reviews",
    ],
    courseAdvantage: [
      "Convenience of flexible learning from home with institutional rigor",
      "Friendly personal tutors and intensive 1-on-1 photo assessments",
      "Structured 10-module curriculum tested and refined since 2010",
      "24/7 availability of control panel chapters, audio notes, and examples",
      "Evaluation-based progress where no student gets left behind",
      "Rapid learning method — study theory, shoot field brief, receive detailed report",
      "Lifelong mentor relationship for tips, exhibitions, and portfolio guidance",
      "IIP Certificate with verification ID recognised across South Asia",
    ],
    courseStructure: [
      "Foundations of Photography & Visual Culture",
      "Advanced Camera Handling & Optimal Sensor Performance",
      "Lens Optics: Focal Lengths, Perspective Compression & Distortion",
      "Visual Literacy: Reading Photographs as Art & Communication",
      "Practical Field Assignments: Kathmandu Heritage & Documentaries",
      "Introduction to Natural & Available Lighting in Complex Environments",
      "Travel & Street Photography in Unpredictable Lighting Conditions",
      "Field Equipment Selection: Filters, Tripods & Backup Strategies",
      "Color Theory, Black & White Aesthetics & RAW Post-Processing",
      "Final Curated Portfolio Project & Comprehensive Graduation Critique",
    ],
    howThisCourseWorks: [
      "Heritage Program: IIP's most renowned online diploma, running continuously since 2010.",
      "Read: Study in-depth chapters, visual case studies, and compositional diagrams in your portal.",
      "Interact: Message and consult your personal mentor whenever technical questions arise.",
      "Shoot: Venture into real shooting environments guided by the chapter's practical assignment.",
      "Submit: Upload your curated assignment photographs to the IIP student dashboard for each module.",
      "Critique: Your mentor grades each photo with line-by-line artistic and technical notes.",
    ],
    faqs: [
      {
        question: "Is this course a pre-recorded video class or interactive?",
        answer:
          "This is not a generic pre-recorded video course. It is an interactive, mentor-led program where dedicated faculty review, grade, and annotate every single photograph you submit.",
      },
      {
        question: "What qualification do I receive upon completion?",
        answer:
          "You receive an official IIP Foundation Photography Certificate of Completion backed by the Indian Institute of Photography.",
      },
      {
        question: "What benefits do I receive as an IIP alumnus?",
        answer:
          "You remain permanently connected to the IIP network for gallery exhibitions, photo contests, print sales, and community photo expeditions across Nepal.",
      },
      {
        question: "Can I take this course alongside university or full-time work?",
        answer:
          "Yes! The self-paced modules are designed to integrate seamlessly into your schedule, requiring 5-7 hours of flexible study and weekend shooting per week.",
      },
    ],
    paymentOptions: [
      "Online Payment — eSewa, Khalti, Debit / Credit Card, Net Banking",
      "Direct Bank Transfer (Nepal Investment Mega Bank / Nabil Bank)",
      "Counter Payment at Jyoti Bhawan, Kanti Path, Kathmandu",
    ],
  },
  {
    id: "course-4",
    number: "04",
    slug: "pro-level-foundation-photography-course",
    title: "Pro-Level Foundation Photography Course",
    duration: "3 Months",
    level: "Pro Foundation",
    deliveryMode: "Kathmandu Studio & Hybrid",
    equipment: "DSLR or Mirrorless + External Flash/Hotshoe",
    keyOutcome: "Bridge fundamentals into commercial briefs with live studio sessions and client simulation.",
    courseType: "Pro-Level Foundation Photography Course",
    tagline: "Intensive Mentor-Led Accelerator with Weekly Live Critique & Studio Practice",
    totalFee: "Rs. 26,800",
    payableFee: "Rs. 26,800",
    description:
      "An intensive mentor-led foundation photography course that takes you from beginner to professional level.",
    coverImage: "/images/course-pro-foundation.webp",
    featured: true,
    intake: "Rolling Monthly Intake",
    certification: "Official IIP Pro Level Foundation Certificate with Priority Placement",
    assignmentsCount: "Weekly Commercial Briefs & Personal Mentorship",
    whatYoullLearn: [
      "Professional-grade camera handling under studio and high-pressure field conditions",
      "Advanced lighting setups: Strobe systems, softboxes, reflectors, and modifiers",
      "High-end post-processing and commercial color grading in Adobe Lightroom & Photoshop",
      "Creation of an industry-standard portfolio formatted for commercial clients",
      "Foundational business knowledge: Pitching, client communications, contracts, and licensing",
    ],
    prerequisites: [
      "DSLR or Mirrorless camera with hot-shoe support and zoom/prime lenses",
      "Laptop or desktop computer capable of running editing software",
      "Estimated commitment of 6-8 hours per week including weekend practicals and live critiques",
    ],
    courseAdvantage: [
      "Dedicated senior mentor assigned for individual portfolio cultivation",
      "Weekly live critique sessions with working commercial photographers",
      "Rigorous practical assignments modeled on actual client editorial briefs",
      "Industry networking opportunities with creative directors in Kathmandu",
      "Professional portfolio book design guidance and digital website curation",
      "Career consultation and priority referral for commercial productions",
      "Official IIP Pro Certificate with digital verification credential",
    ],
    courseStructure: [
      "Advanced Camera Operations, Dynamic Range & Tethered Shooting",
      "Professional Composition Techniques for Commercial & Editorial Art",
      "Studio Lighting Fundamentals: Monolights, Continuous Keys & Fill Ratios",
      "Portrait Photography Mastery: Posing, Expressions & Character Study",
      "Commercial Product Photography Basics: Reflections, Glass & Textures",
      "Post-Processing Workflow: Non-destructive RAW Editing & Retouching",
      "Editorial Storyboarding & Visual Series Conceptualization",
      "The Business of Photography: Pricing, Contracts, Invoicing & Rights",
    ],
    howThisCourseWorks: [
      "Enrollment: Receive full dashboard access and welcome briefing within 24 hours.",
      "Live Sessions: Attend weekly mentor-led interactive workshops and critique rooms.",
      "Studio & Field Briefs: Execute commercial photography assignments under strict technical parameters.",
      "Personalised Feedback: Receive video and audio notes on your raw and retouched files.",
      "Portfolio Graduation: Deliver your completed 15-frame commercial showcase for panel defense.",
    ],
    faqs: [
      {
        question: "What makes this course different from regular online courses?",
        answer:
          "This is a high-intensity, mentor-led accelerator. You work closely with senior working photographers, join weekly live critique calls, and complete commercial-grade briefs.",
      },
      {
        question: "Do I need prior photography experience?",
        answer:
          "Basic familiarity with manual camera controls is helpful, but the mentor tailors your learning trajectory to ensure foundational mastery before advancing into studio production.",
      },
      {
        question: "What equipment is required for studio modules?",
        answer:
          "A DSLR or mirrorless camera with manual controls. For studio lighting, we teach principles using available lights and speedlights, and students can also access our Kathmandu studio facilities.",
      },
      {
        question: "Do you offer career guidance after completion?",
        answer:
          "Yes, graduates receive dedicated portfolio guidance, tips on finding commercial clients, and access to the IIP freelance referral network.",
      },
    ],
    paymentOptions: [
      "Online Payment (eSewa, Khalti, Debit / Credit Card, Net Banking)",
      "Direct Bank Transfer (Nepal Investment Mega Bank / Nabil Bank)",
      "Counter Payment at Jyoti Bhawan, Kanti Path, Kathmandu",
    ],
  },
  {
    id: "course-5",
    number: "05",
    slug: "pro-level-advanced-photography-course",
    title: "Pro-Level Advanced Photography Course",
    duration: "6 Months",
    level: "Advanced",
    deliveryMode: "Kathmandu Studio Masterclass",
    equipment: "Full-Frame / Mirrorless System + Studio Lights",
    keyOutcome: "Flagship commercial masterclass covering fashion, product, advanced lighting, and studio business.",
    courseType: "Pro-Level Advanced Photography Course",
    tagline: "Flagship Commercial Masterclass: Fashion, Product, Studio Lighting & Business",
    totalFee: "Rs. 56,000",
    payableFee: "Rs. 56,000",
    description:
      "An advanced mentor-led course for photographers looking to master advanced techniques, develop their style, and launch a commercial photography career.",
    coverImage: "/images/course-pro.webp",
    featured: true,
    intake: "Quarterly Intake // Limited Seats",
    certification: "Official IIP Pro Advanced Master Diploma & Career Placement Support",
    assignmentsCount: "Real Commercial Productions & Exhibition Portfolio",
    whatYoullLearn: [
      "Master multi-light studio setups, high-speed sync, and complex editorial lighting",
      "Execute high-concept fashion, editorial lookbooks, and luxury product campaigns",
      "Deep understanding of client brand identity, art direction, and pitch deck creation",
      "Advanced commercial retouching: Frequency separation, dodge & burn, color harmony",
      "Launch and scale a profitable photography studio with sustainable business strategies",
      "Graduate with an exhibition-grade 25-frame commercial master portfolio",
    ],
    prerequisites: [
      "Completion of an IIP Foundation course or equivalent commercial experience",
      "DSLR or Mirrorless camera system with standard and telephoto/prime lenses",
      "Working knowledge of Adobe Lightroom and Photoshop",
      "Estimated commitment of 8-10 hours per week for studio lighting, client simulations, and post-production",
    ],
    courseAdvantage: [
      "Direct 1-on-1 mentorship from top commercial and fine art photographers",
      "Real-world client project simulation with critique from industry directors",
      "Business development blueprint: Rate cards, licensing models, and negotiation",
      "Lifelong industry connections and access to IIP creative partner network",
      "High-prestige Master Diploma certified by the Indian Institute of Photography",
      "Dedicated graduation showcase and portfolio exhibition opportunity",
      "Priority career placement assistance and agency representation recommendations",
    ],
    courseStructure: [
      "Advanced Studio Lighting: Multi-point Strobes, Grids & Light Shaping",
      "Commercial Advertising Photography: Brief Analysis & Creative Direction",
      "Fashion & Editorial Photography: Model Direction, Styling & Moodboards",
      "Commercial Product Photography: Liquids, Macro, Jewelry & E-commerce",
      "Event & High-End Documentary Coverage in Uncontrolled Lighting",
      "Advanced Digital Darkroom: Retouching Architecture & Commercial Cleanups",
      "Personal Brand Building: Website Design, Social Strategy & Positioning",
      "Client Relationship Management, Quoting, Estimations & Rights Licensing",
      "Pricing Strategy: Commercial Day Rates vs Usage Rights & Royalties",
      "Final Major Project: Full Campaign Execution & Industry Portfolio Defense",
    ],
    howThisCourseWorks: [
      "Phase 1 (Months 1-2): Master advanced technical lighting, modifiers, and tethered studio workflows.",
      "Phase 2 (Months 3-4): Execute real commercial briefs covering fashion, product, and architectural documentation.",
      "Phase 3 (Month 5): Build your personal studio identity, pricing structures, and client acquisition framework.",
      "Phase 4 (Month 6): Produce and defend your final major campaign portfolio under mentor review.",
    ],
    faqs: [
      {
        question: "Who is the ideal candidate for this 6-month masterclass?",
        answer:
          "This program is designed for photographers who already understand foundational camera mechanics and want to transition into high-paying commercial, editorial, or fashion careers.",
      },
      {
        question: "What kind of projects will I work on during the program?",
        answer:
          "You will execute industry-standard commercial projects including fashion editorials, luxury product shoots, commercial portraits, and documentary photo essays.",
      },
      {
        question: "Do you provide job placement assistance after graduation?",
        answer:
          "Yes! We provide dedicated career coaching, agency introductions, portfolio reviews with creative directors, and priority referrals for commercial shoots across Nepal and regional markets.",
      },
      {
        question: "Can I pay the tuition fee in installments?",
        answer:
          "Yes, for our 6-month Pro-Level Advanced course, installment plans can be arranged through admissions at Jyoti Bhawan.",
      },
    ],
    paymentOptions: [
      "Online Payment (eSewa, Khalti, Debit / Credit Card, Net Banking)",
      "Direct Bank Transfer (Nepal Investment Mega Bank / Nabil Bank)",
      "Flexible Installment Plan (Inquire via Admissions)",
      "Counter Payment at Jyoti Bhawan, Kanti Path, Kathmandu",
    ],
  },
];
