export interface TimelineStep {
  number: string;
  phase: string;
  title: string;
  description: string;
}

export interface HowItWorksData {
  eyebrow: string;
  heading: string;
  subheading: string;
  steps: TimelineStep[];
}

export const howItWorksData: HowItWorksData = {
  eyebrow: "Curriculum Roadmap",
  heading: "How This Course Works — From Enrollment to Certification.",
  subheading:
    "A structured, mentor-led online learning progression — combining practical shoot assignments, dedicated faculty critiques, and certified completion.",
  steps: [
    {
      number: "01",
      phase: "PHASE 01 // ENROLLMENT",
      title: "Enrollment & Portal Access",
      description:
        "After course enrollment, receive your verified login credentials within 24 hours to access your personal student control panel, chapters, and resources.",
    },
    {
      number: "02",
      phase: "PHASE 02 // LEARNING",
      title: "Online Modules & Guided Shoots",
      description:
        "Access course content through the control panel — read theory chapters, examine real-world photographic examples, and head out to shoot pictures.",
    },
    {
      number: "03",
      phase: "PHASE 03 // PRACTICE",
      title: "Assignments & Photo Submissions",
      description:
        "Put your knowledge to work by completing practical assignments and uploading your selected 5 best photographs per chapter directly to the portal.",
    },
    {
      number: "04",
      phase: "PHASE 04 // REVIEW & CERTIFICATE",
      title: "Mentor Feedback & Certification",
      description:
        "Our experienced mentors review and provide actionable feedback on each submitted photograph, leading to your accredited IIP certificate upon completion.",
    },
  ],
};
