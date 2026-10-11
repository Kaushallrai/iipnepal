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
  eyebrow: "Learning Process",
  heading: "How Learning Works — From Choice to Certification.",
  subheading:
    "A structured, mentor-led progression combining guided lesson modules, practical field assignments, and dedicated mentor critique.",
  steps: [
    {
      number: "01",
      phase: "STAGE 01 // SELECTION",
      title: "Choose Your Course",
      description:
        "Select a programme that fits your camera experience, schedule, and creative photographic goals.",
    },
    {
      number: "02",
      phase: "STAGE 02 // PRACTICE",
      title: "Learn & Practise",
      description:
        "Study core optical theory, examine real-world examples, and complete practical field shooting briefs.",
    },
    {
      number: "03",
      phase: "STAGE 03 // MENTORSHIP",
      title: "Receive Feedback",
      description:
        "Submit your project work for individual mentor review, personalized critique, and improvement guidance.",
    },
    {
      number: "04",
      phase: "STAGE 04 // CERTIFICATE",
      title: "Complete Your Course",
      description:
        "Finalize your coursework and portfolio to receive your verified IIP Course Certificate.",
    },
  ],
};
