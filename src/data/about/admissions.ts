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
  eyebrow: "Admissions Playbook // 7-Step Journey",
  headingLines: [
    "Here’s how it works — from your first enquiry",
    "to darkroom accreditation.",
  ],
  steps: [
    {
      number: "01",
      title: "Connect with Career Counselling",
      description:
        "Direct consultation with our Kathmandu admissions team to identify the course track matching your experience and goals.",
    },
    {
      number: "02",
      title: "Discovery & Creative Background",
      description:
        "A personal discussion exploring your visual interests, technical foundation, and preferred genres.",
    },
    {
      number: "03",
      title: "Portfolio Submission",
      description:
        "Share 5 to 10 photographs for faculty assessment. No previous art experience is required for Foundation modules.",
    },
    {
      number: "04",
      title: "Application Completion",
      description:
        "Standard registration form completed with direct assistance from your assigned personal admissions counselor.",
    },
    {
      number: "05",
      title: "Tuition & Education Plan",
      description:
        "Review transparent fee structures, installment schedules, and equipment requirements.",
    },
    {
      number: "06",
      title: "Registration & Studio Clearance",
      description:
        "Receive student portal credentials, course syllabi, and darkroom safety clearance at Jyoti Bhawan.",
    },
    {
      number: "07",
      title: "Welcome to the Academy",
      description:
        "Begin practical shoots, studio lighting workshops, mentor critique sessions, and accredited certification.",
    },
  ],
};
