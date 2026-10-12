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
  heading: "How Learning Works",
  subheading:
    "A structured, mentor-led progression combining guided lesson modules, practical field assignments, and dedicated mentor critique.",
  steps: [
    {
      number: "01",
      phase: "01 // CHOOSE",
      title: "Choose Your Course",
      description:
        "Select a programme that fits your camera experience, schedule, and creative photographic goals.",
    },
    {
      number: "02",
      phase: "02 // PRACTISE",
      title: "Learn & Practise",
      description:
        "Study core optical theory, examine real-world examples, and complete practical field shooting briefs.",
    },
    {
      number: "03",
      phase: "03 // FEEDBACK",
      title: "Receive Feedback",
      description:
        "Submit your project work for individual mentor review, personalized critique, and improvement guidance.",
    },
    {
      number: "04",
      phase: "04 // GRADUATE",
      title: "Graduate With Certificate",
      description:
        "Finalize your coursework and portfolio to receive your verified IIP Course Certificate.",
    },
  ],
};
