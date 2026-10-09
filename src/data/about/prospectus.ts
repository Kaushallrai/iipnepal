export interface ProspectusItem {
  id: string;
  code: string;
  title: string;
  level: string;
  description: string;
  pdfUrl: string;
}

export interface AboutProspectusData {
  eyebrow: string;
  headingLines: string[];
  subheading: string;
  items: ProspectusItem[];
}

export const aboutProspectusData: AboutProspectusData = {
  eyebrow: "Prospectus & Academic Catalogues",
  headingLines: [
    "Official syllabi, degree roadmaps,",
    "and professional curricula.",
  ],
  subheading:
    "Review comprehensive curriculum breakdowns, fee structures, faculty profiles, and graduation credentials for upcoming academic terms.",
  items: [
    {
      id: "mfa",
      code: "MFA",
      title: "Master of Fine Arts in Photography",
      level: "Postgraduate Degree",
      description:
        "Advanced research-led curriculum covering visual theory, personal thesis authorship, darkroom printing, and curatorial practice.",
      pdfUrl: "https://www.iipacademy.edu.in/images/IIPCCA%20PROSPECTUS.pdf",
    },
    {
      id: "bfa",
      code: "BFA",
      title: "Bachelor of Fine Arts in Photography",
      level: "Undergraduate Degree",
      description:
        "Comprehensive multi-year program covering camera optics, lighting physics, analog processes, and professional editorial ethics.",
      pdfUrl: "https://www.iipacademy.edu.in/images/IIPCCA%20PROSPECTUS.pdf",
    },
    {
      id: "ddpc",
      code: "DDPC",
      title: "Dual Diploma in Professional Photography",
      level: "Professional Diploma",
      description:
        "Career-focused dual credential emphasizing commercial studio assignments, portraiture, fashion, and business management.",
      pdfUrl: "https://www.iipacademy.edu.in/images/IIPCCA%20PROSPECTUS.pdf",
    },
    {
      id: "opdp",
      code: "OPDP",
      title: "Online Professional Development Program",
      level: "Distance Learning",
      description:
        "Structured remote curriculum with weekly one-on-one virtual critiques, home assignments, and accredited certification.",
      pdfUrl: "https://www.iipacademy.edu.in/images/IIPCCA%20PROSPECTUS.pdf",
    },
    {
      id: "pro-foundation",
      code: "FOUNDATION",
      title: "Pro Foundation & Advanced Course Catalogue",
      level: "Certificate Track",
      description:
        "Intensive 3 to 6-month hands-on modules in manual camera controls, metering, light direction, and creative studio shoots.",
      pdfUrl: "https://iipnepal.com/files/ONLINE%20CATALOUGE%2022.pdf",
    },
    {
      id: "teenschool",
      code: "TEENSCHOOL",
      title: "TeenSchool Creative Arts Prospectus",
      level: "Youth Immersion",
      description:
        "Visual storytelling and photographic fundamentals designed for high-school students and emerging creators.",
      pdfUrl: "https://iipnepal.com/files/tsatschoolpdf.pdf",
    },
  ],
};
