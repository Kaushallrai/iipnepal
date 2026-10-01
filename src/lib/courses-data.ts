export interface CourseItem {
  id: string;
  slug: string;
  title: string;
  duration: string;
  level: string;
  courseType: string;
  totalFee: string;
  payableFee: string;
  discount?: string;
  description: string;
  coverImage: string;
  featured: boolean;
  whatYoullLearn: string[];
  prerequisites: string[];
  courseAdvantage: string[];
  courseStructure: string[];
  howThisCourseWorks: string[];
  faqs: { question: string; answer: string }[];
  paymentOptions: string[];
}

export const ORIGINAL_COURSES: CourseItem[] = [
  {
    id: "course-1",
    slug: "mobile-photography-course",
    title: "Online Mobile Photography Course",
    duration: "1 Month",
    level: "Beginner",
    courseType: "Online Mobile Photography Course",
    totalFee: "Rs. 5,200",
    payableFee: "Rs. 4,160",
    discount: "20% off",
    description:
      "Learn professional photography using just your smartphone. This comprehensive course teaches you how to master camera settings, composition, and mobile editing.",
    coverImage: "/images/course-mobile.jpg",
    featured: true,
    whatYoullLearn: [
      "Master all camera settings on your smartphone",
      "Apply professional composition techniques",
      "Edit photos using mobile apps like Snapseed, Lightroom Mobile",
      "Create a professional photography portfolio",
      "Understand lighting for better mobile shots",
    ],
    prerequisites: [
      "Smartphone with camera (any modern smartphone)",
      "Basic understanding of phone operations",
      "Willingness to learn and practice",
    ],
    courseAdvantage: [
      "Learn from anywhere, anytime",
      "Personal mentor assigned to each student",
      "Interactive one-on-one sessions",
      "Downloadable course materials",
      "Certificate on completion",
      "Lifetime access to course updates",
      "Join IIP student community",
    ],
    courseStructure: [
      "Introduction to Mobile Photography",
      "Understanding Smartphone Camera Settings",
      "Composition Rules for Mobile",
      "Natural Lighting Techniques",
      "Portrait Photography with Mobile",
      "Landscape and Travel Photography",
      "Mobile Photo Editing Apps",
      "Social Media Optimization",
      "Practical Assignments",
      "Final Portfolio Review",
    ],
    howThisCourseWorks: [
      "Enrollment: After enrollment, receive login credentials within 24 hours.",
      "Learning: Access course content through our control panel - read chapters, watch examples, shoot pictures.",
      "Practice: Complete assignments by uploading 5 pictures per chapter.",
      "Review: Our mentors review and provide feedback on each photograph.",
      "Certificate: Receive IIP certificate after successful completion.",
    ],
    faqs: [
      {
        question: "Is this course suitable for complete beginners?",
        answer:
          "Yes, this course is designed for absolute beginners. No prior photography experience is required.",
      },
      {
        question: "Do I need a professional camera?",
        answer:
          "No, this course is specifically designed for smartphone photography. Any modern smartphone with a camera will work.",
      },
      {
        question: "How long do I have access to the course?",
        answer:
          "You have lifetime access to the course materials even after completion.",
      },
      {
        question: "Is there a refund policy?",
        answer:
          "Yes, we offer 100% satisfaction guarantee. If you are not satisfied, your money will be refunded.",
      },
    ],
    paymentOptions: [
      "Online Payment - Debit Card, Credit Card, Net Banking",
      "Bank Transfer - Direct bank transfer",
      "DD/Cheque - Demand Draft or Cheque",
    ],
  },
  {
    id: "course-2",
    slug: "beginners-course",
    title: "1-Month Online Basic Photography Course",
    duration: "1 Month",
    level: "Beginner",
    courseType: "1-Month Online Basic Photography Course",
    totalFee: "Rs. 12,000",
    payableFee: "Rs. 9,600",
    discount: "20% off",
    description:
      "Start your photography journey with our comprehensive beginner-friendly course covering camera basics, composition, and practical shooting techniques.",
    coverImage: "/images/course-basic.jpg",
    featured: true,
    whatYoullLearn: [
      "Understand all camera settings and modes",
      "Master exposure triangle for perfect shots",
      "Apply composition rules effectively",
      "Capture professional-quality photos",
      "Basic photo editing skills",
    ],
    prerequisites: [
      "DSLR or Mirrorless camera (recommended)",
      "Basic computer skills",
      "Passion for learning photography",
    ],
    courseAdvantage: [
      "Step-by-step professional guidance",
      "One-on-one mentor interaction",
      "24/7 online course availability",
      "Evaluation-based progress tracking",
      "Downloadable course content",
      "IIP Certificate on completion",
      "Access to IIP Club community",
    ],
    courseStructure: [
      "Introduction to Photography",
      "Understanding Camera Modes",
      "Exposure Triangle (Aperture, Shutter, ISO)",
      "Composition Rules and Techniques",
      "Natural and Artificial Lighting",
      "Portrait Photography Basics",
      "Landscape Photography",
      "Basic Photo Editing",
      "Practical Assignments",
      "Portfolio Development",
    ],
    howThisCourseWorks: [
      "Step 1 - Read: Read and understand each chapter in your control panel.",
      "Step 2 - Interact: Interact with faculty for any clarifications.",
      "Step 3 - Shoot: Shoot pictures based on the chapters learned.",
      "Step 4 - Submit: Upload 5 pictures for each assignment in the control panel.",
      "Step 5 - Review: IIP Mentor critically examines your photographs on technical and creative aspects.",
    ],
    faqs: [
      {
        question: "Can I do this course without a DSLR camera?",
        answer:
          "While a DSLR is recommended, you can also use a bridge camera or even a smartphone with manual controls.",
      },
      {
        question: "How much time should I dedicate per week?",
        answer:
          "We recommend dedicating 5-7 hours per week for optimal learning and practice.",
      },
      {
        question: "Will I get a certificate after completion?",
        answer:
          "Yes, you will receive an IIP certificate upon successful completion of the course.",
      },
      {
        question: "What if I cannot complete the course in 1 month?",
        answer:
          "You can request an extension for genuine reasons at no additional cost.",
      },
    ],
    paymentOptions: [
      "Online Payment - Debit Card, Credit Card, Net Banking",
      "Bank Transfer - Direct bank transfer",
      "DD/Cheque - Demand Draft or Cheque",
    ],
  },
  {
    id: "course-3",
    slug: "foundation-course",
    title: "3-Month Online Foundation Photography Course",
    duration: "3 Months",
    level: "Foundation",
    courseType: "3-Month Online Foundation Photography Course",
    totalFee: "Rs. 19,500",
    payableFee: "Rs. 15,600",
    discount: "20% off",
    description:
      "A comprehensive foundation course covering every vital topic related to photography along with skill development.",
    coverImage: "/images/course-foundation.jpg",
    featured: true,
    whatYoullLearn: [
      "Expertise to handle your camera like a professional",
      "Detailed understanding of important photography topics",
      "Professional judgment in spotting or taking photos",
      "Creative use of DSLR camera",
      "A lifelong mentor to guide you",
      "Greater confidence and skills in taking better photographs",
    ],
    prerequisites: [
      "DSLR or Mirrorless camera",
      "Basic knowledge of computer operations",
      "Passion for photography",
    ],
    courseAdvantage: [
      "Convenience and comfortable learning from home",
      "Friendly personal tutors and one-to-one interaction",
      "Structured learning system with modules",
      "24x7 availability of online course",
      "Step by step professional guidance",
      "Evaluation based progress",
      "Rapid learning method - study, practice and quiz",
      "Lifelong mentors for tips and suggestions",
      "Downloadable course content",
      "IIP Certificate on Course Completion",
    ],
    courseStructure: [
      "Basics of Photography",
      "How to use Camera",
      "How to care for your camera",
      "Visual Literacy",
      "Practical Assignments",
      "Introduction to lighting",
      "Travel photography in natural lighting",
      "Equipment to carry",
      "Professional Portfolio",
      "Self-check quiz",
    ],
    howThisCourseWorks: [
      "Most successful Online Photography Course of IIP - running since 2010.",
      "READ: You will read the chapter and understand it (in your control panel).",
      "INTERACT: In case anything is not understood, you will interact with faculty.",
      "SHOOT PICTURES: On the basis of chapters you have to shoot pictures.",
      "SUBMIT: From the assignments, Upload 5 pictures in Control panel.",
      "GRADE and COMMENT: IIP Mentor will review your each photograph of each assignment submitted.",
    ],
    faqs: [
      {
        question: "Is this course a video tutorial or auto learning?",
        answer:
          "No, this course is not a recorded video course. It is a One on One interactive course where mentors review each and every photograph through the control panel.",
      },
      {
        question: "What about certification after completing the course?",
        answer:
          "Yes, you will get an IIP certified course certificate after successful completion.",
      },
      {
        question: "What benefits do I get after completing the course?",
        answer:
          "You stay connected for exhibitions, contests, earnings from your pictures, and opportunities to participate in photography events.",
      },
      {
        question: "What is the refund policy?",
        answer:
          "100% guaranteed - if you dont enjoy your course, your money is refundable.",
      },
    ],
    paymentOptions: [
      "Online Payment - Debit Card, Credit Card, Net Banking",
      "Bank Transfer - Direct bank transfer",
      "DD/Cheque - Demand Draft or Cheque",
    ],
  },
  {
    id: "course-4",
    slug: "pro-level-foundation-photography-course",
    title: "Pro Level Foundation Photography Course (Mentor-led)",
    duration: "3 Months",
    level: "Foundation",
    courseType: "Pro Level Foundation Photography Course (Mentor-led)",
    totalFee: "Rs. 26,800",
    payableFee: "Rs. 26,800",
    description:
      "An intensive mentor-led foundation photography course that takes you from beginner to professional level.",
    coverImage: "/images/course-pro-foundation.jpg",
    featured: true,
    whatYoullLearn: [
      "Professional-level camera handling",
      "Advanced composition and lighting skills",
      "Post-processing expertise",
      "Ready-to-use professional portfolio",
      "Understanding of photography business",
    ],
    prerequisites: [
      "DSLR or Mirrorless camera",
      "Basic photography knowledge (recommended)",
      "Dedication to learn and practice",
    ],
    courseAdvantage: [
      "Dedicated mentor for personalized guidance",
      "Weekly live sessions with experts",
      "Intensive practical assignments",
      "Industry exposure and networking",
      "Professional portfolio creation",
      "Career guidance and support",
      "IIP Certificate with priority placement",
    ],
    courseStructure: [
      "Advanced Camera Operations",
      "Professional Composition Techniques",
      "Studio Lighting Fundamentals",
      "Portrait Photography Mastery",
      "Commercial Photography Basics",
      "Post-Processing with Lightroom",
      "Portfolio Development",
      "Business of Photography",
    ],
    howThisCourseWorks: [
      "Enrollment: Get access to your personal learning dashboard within 24 hours.",
      "Weekly Sessions: Attend live mentor-led sessions every week.",
      "Practice: Complete intensive assignments with mentor feedback.",
      "Review: Get personalized review and improvement suggestions.",
      "Portfolio: Build your professional photography portfolio.",
    ],
    faqs: [
      {
        question: "What makes this course different from regular online courses?",
        answer:
          "This is a mentor-led course with dedicated personal mentor, weekly live sessions, and intensive practical training.",
      },
      {
        question: "Do I need prior photography experience?",
        answer:
          "Basic knowledge is recommended but not mandatory. The mentor will guide you based on your current level.",
      },
      {
        question: "What kind of camera do I need?",
        answer:
          "A DSLR or Mirrorless camera is recommended for this course.",
      },
    ],
    paymentOptions: [
      "Online Payment - Debit Card, Credit Card, Net Banking",
      "Bank Transfer - Direct bank transfer",
      "DD/Cheque - Demand Draft or Cheque",
    ],
  },
  {
    id: "course-5",
    slug: "pro-level-advanced-photography-course",
    title: "Pro Level Advanced Photography Course (Mentor-led)",
    duration: "6 Months",
    level: "Advanced",
    courseType: "Pro Level Advanced Photography Course (Mentor-led)",
    totalFee: "Rs. 56,000",
    payableFee: "Rs. 56,000",
    description:
      "An advanced mentor-led course for photographers looking to master advanced techniques, develop their style, and launch a commercial photography career.",
    coverImage: "/images/course-pro.jpg",
    featured: true,
    whatYoullLearn: [
      "Master advanced commercial photography techniques",
      "Build and manage photography business",
      "Create compelling visual stories",
      "Professional portfolio for career opportunities",
      "Industry-ready skills and networking",
    ],
    prerequisites: [
      "Completion of Foundation course or equivalent",
      "DSLR or Mirrorless camera with multiple lenses",
      "Basic post-processing knowledge",
    ],
    courseAdvantage: [
      "One-on-one mentorship from industry experts",
      "Real-world project experience",
      "Business development training",
      "Industry connections and networking",
      "Complete portfolio of commercial work",
      "Career placement assistance",
      "Priority certification with job support",
    ],
    courseStructure: [
      "Advanced Lighting Techniques",
      "Commercial Photography Mastery",
      "Fashion & Portfolio Photography",
      "Product Photography",
      "Event Photography",
      "Advanced Post-Processing",
      "Brand Building for Photographers",
      "Client Management",
      "Pricing and Business Strategy",
      "Final Major Project",
    ],
    howThisCourseWorks: [
      "Phase 1: Master advanced technical skills and lighting.",
      "Phase 2: Work on real commercial projects with mentor guidance.",
      "Phase 3: Build your business profile and client base.",
      "Phase 4: Complete final project and receive career guidance.",
    ],
    faqs: [
      {
        question: "Who should take this advanced course?",
        answer:
          "This course is ideal for photographers who have completed a foundation course or have equivalent experience and want to specialize in commercial photography.",
      },
      {
        question: "What kind of projects will I work on?",
        answer:
          "You will work on real commercial projects including product photography, fashion shoots, event coverage, and more.",
      },
      {
        question: "Do you provide job placement after the course?",
        answer:
          "Yes, we provide career guidance and priority placement assistance for eligible graduates.",
      },
    ],
    paymentOptions: [
      "Online Payment - Debit Card, Credit Card, Net Banking",
      "Bank Transfer - Direct bank transfer",
      "DD/Cheque - Demand Draft or Cheque",
    ],
  },
];
