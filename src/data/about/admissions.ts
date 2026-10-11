export interface AdmissionsStep {
  number: string;
  title: string;
  description: string;
}

export interface AboutAdmissionsData {
  eyebrow: string;
  headingLines: string[];
  steps: AdmissionsStep[];
}

export const aboutAdmissionsData: AboutAdmissionsData = {
  eyebrow: "Admissions Process // 3 Simple Steps",
  headingLines: [
    "From your first enquiry to",
    "one-on-one mentor onboarding.",
  ],
  steps: [
    {
      number: "01",
      title: "Select Your Course & Inquire",
      description:
        "Choose a program that fits your experience level and artistic goals, or contact our admissions desk for personalized track guidance.",
    },
    {
      number: "02",
      title: "Advisory Consultation & Registration",
      description:
        "Speak directly with an instructor to review equipment requirements, confirm schedule availability, and register your details.",
    },
    {
      number: "03",
      title: "Enrollment & Mentor Onboarding",
      description:
        "Finalize your registration, receive student portal credentials, and start your one-on-one photography mentorship and practical shooting assignments.",
    },
  ],
};
