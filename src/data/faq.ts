export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  name: string;
  description: string;
  questions: FaqItem[];
}

export const faqData: FaqCategory[] = [
  {
    id: "courses",
    name: "Courses & Selection",
    description: "Guidance on choosing the right photography pathway for your goals and skill level.",
    questions: [
      {
        question: "Which course is right for a complete beginner?",
        answer:
          "For absolute beginners, we recommend either the 'Mobile Photography Course' (if shooting primarily with your smartphone) or the 'Foundation Photography Course' (if you own or plan to purchase a mirrorless or DSLR camera). Both courses start from zero, covering exposure fundamentals, framing geometry, and creative light observation without assuming prior technical knowledge.",
      },
      {
        question: "What is the difference between the Foundation Course and Diploma in Photography?",
        answer:
          "The Foundation Photography Course (1 Month) focuses on core manual camera mechanics, single-lens techniques, and foundational composition. The Comprehensive Diploma in Photography (3 Months) goes significantly deeper, including advanced studio strobe lighting setups, black-and-white analog darkroom printing at Jyoti Bhawan, narrative photojournalism, and building a professional curated graduation portfolio.",
      },
      {
        question: "Can I transfer to another course or batch after enrolling?",
        answer:
          "Yes. If your schedule changes or your counselor recommends an alternative track after your orientation session, you can transfer to a different batch or course within 7 days of enrollment, subject to seat availability.",
      },
    ],
  },
  {
    id: "format",
    name: "Learning Format & Schedules",
    description: "How classes are conducted, studio access at Jyoti Bhawan, and fieldwork across the valley.",
    questions: [
      {
        question: "Are classes conducted online, in-person in Kathmandu, or hybrid?",
        answer:
          "We offer both formats tailored to the program. The Mobile Photography and Foundation courses feature flexible hybrid access (online structured learning combined with local Kathmandu weekend shooting meetups). The Diploma in Photography and Commercial & Lighting masterclasses are fully in-person at our Jyoti Bhawan studio and analog darkroom in Kanti Path.",
      },
      {
        question: "Where are the studio lighting sessions and darkroom labs held?",
        answer:
          "All practical studio strobes, continuous lighting setups, print critique sessions, and chemical darkroom enlargements take place at the IIP Nepal centre: Jyoti Bhawan, Kanti Path, Kathmandu (directly accessible from Jamal and Durbar Marg).",
      },
      {
        question: "What are the typical class schedules and weekly time commitment?",
        answer:
          "Most courses require 4 to 6 hours of weekly commitment. Weekday evening batches run from 4:30 PM to 6:30 PM, while weekend intensive batches run on Saturdays and Sundays from 10:00 AM to 1:00 PM. Field expeditions across Kathmandu Valley are typically scheduled for early mornings when natural light is optimal.",
      },
    ],
  },
  {
    id: "equipment",
    name: "Camera & Equipment",
    description: "Gear prerequisites, smartphone requirements, and academy-provided studio hardware.",
    questions: [
      {
        question: "Do I need an expensive camera or DSLR before joining?",
        answer:
          "No. For our Mobile Photography course, any modern iOS or Android smartphone is sufficient. For camera courses, you do not need the latest flagship gear; an entry-level mirrorless or DSLR with a kit lens (such as 18-55mm or 50mm f/1.8) is ideal. Our admissions counselors offer free gear consultations before you buy anything.",
      },
      {
        question: "Does IIP Nepal provide studio lights, modifiers, and darkroom supplies?",
        answer:
          "Yes. Enrolled students receive complete access to our studio strobes, c-stands, octaboxes, umbrellas, reflectors, backdrops, and darkroom chemical enlargers during scheduled lab sessions. You do not need to buy personal studio lights or printing chemistry.",
      },
      {
        question: "What computer or software is required for digital editing modules?",
        answer:
          "For digital editing, Adobe Lightroom Classic and Photoshop are the industry standards taught in our curriculum. We provide guidance on student software licenses and low-spec computer configurations that run these tools smoothly.",
      },
    ],
  },
  {
    id: "fees",
    name: "Fees, Payment & Refunds",
    description: "Tuition transparency, accepted payment methods in Nepal, and cancellation terms.",
    questions: [
      {
        question: "How can I pay my tuition fees?",
        answer:
          "Tuition can be paid via eSewa, Khalti QR, direct bank transfer to our Nepal Investment Mega Bank (NIMB) or Nabil Bank account, or directly via cash or card at the Jyoti Bhawan admissions counter.",
      },
      {
        question: "Can tuition be paid in installments?",
        answer:
          "For 3-month Diploma and professional masterclasses, we offer a two-installment schedule (50% upon registration to secure your seat, and 50% midway through the program). Inquire with our admissions desk to arrange this.",
      },
      {
        question: "What is the refund and cancellation policy?",
        answer:
          "Cancellations requested 7 or more days prior to batch start receive a full refund minus an administrative processing fee of NPR 1,500. Cancellations made within 1 to 6 days before start receive a 70% refund or 100% transfer credit toward a future batch. Once classes begin and individual mentor assignments are initialized, tuition is non-refundable.",
      },
    ],
  },
  {
    id: "certification",
    name: "Certification & Career",
    description: "Academic credentials, faculty assessment, and recognition across the industry.",
    questions: [
      {
        question: "What certificate is awarded upon course completion?",
        answer:
          "Graduates receive the official IIP Certificate of Completion, verified and stamped by the Indian Institute of Photography academic board and White Hat Events. Each certificate includes an individualized verification serial code.",
      },
      {
        question: "What are the requirements to graduate and receive certification?",
        answer:
          "To graduate, students must attend at least 80% of scheduled sessions, complete all practical field shooting briefs, participate in one-on-one mentor critiques, and curate a final graduation portfolio that passes faculty review.",
      },
      {
        question: "Does the certificate help in commercial or documentary photography careers?",
        answer:
          "Yes. IIP alumni work across major media agencies, publications, advertising firms, fashion houses, and NGO visual documentation across South Asia. More importantly, the curated graduation portfolio developed under mentor critique serves as your real calling card for commercial clients.",
      },
    ],
  },
];
