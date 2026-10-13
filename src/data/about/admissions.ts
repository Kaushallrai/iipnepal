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
  eyebrow: "Admissions Journey // 3 Clear Steps",
  headingLines: [
    "From your first enquiry to",
    "one-on-one mentor onboarding.",
  ],
  steps: [
    {
      number: "01",
      title: "Select Your Course & Inquire",
      description:
        "Choose from 5 certificate tracks. Speak with our admissions desk to match your experience level and creative goals.",
    },
    {
      number: "02",
      title: "Studio Consultation & Gear Review",
      description:
        "Meet faculty at Jyoti Bhawan. Review camera requirements, tour the lighting lab, and confirm your schedule.",
    },
    {
      number: "03",
      title: "Enrollment & Mentor Onboarding",
      description:
        "Complete registration, receive student resources, and start hands-on studio sessions and guided field shoots.",
    },
  ],
};
