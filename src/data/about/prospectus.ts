export interface ProspectusItem {
  id: string;
  code: string;
  title: string;
  level: string;
  description: string;
  pdfUrl: string;
  actionLabel?: string;
}

export interface AboutProspectusData {
  eyebrow: string;
  headingLines: string[];
  subheading: string;
  items: ProspectusItem[];
}

export const aboutProspectusData: AboutProspectusData = {
  eyebrow: "Course Syllabi & Academic Affiliation",
  headingLines: [
    "Official course syllabi and",
    "IIP academic affiliation.",
  ],
  subheading:
    "Review comprehensive Kathmandu curriculum breakdowns and schedules, or access the Indian Institute of Photography academic prospectus for degree programs.",
  items: [
    {
      id: "kathmandu-syllabi",
      code: "SYLLABI",
      title: "Kathmandu Photography Course Syllabi",
      level: "5 Certificate Tracks",
      description:
        "Complete curriculum outlines, equipment prerequisites, weekly workloads, and studio shoot schedules for all 5 programs.",
      pdfUrl: "/courses",
      actionLabel: "View Course Syllabi",
    },
    {
      id: "admissions-dossier",
      code: "ADMISSIONS",
      title: "Admissions Consultation & Studio Visit",
      level: "Kathmandu Centre",
      description:
        "Speak directly with faculty regarding gear advice, rolling monthly intakes, or schedule a tour of our studio facilities at Jyoti Bhawan.",
      pdfUrl: "/contact",
      actionLabel: "Contact Admissions Desk",
    },
    {
      id: "iip-degree-affiliation",
      code: "DEGREE AF.",
      title: "IIP India Higher Education Prospectus",
      level: "Academic Affiliation (IIP Academy)",
      description:
        "Official institutional partnership with Indian Institute of Photography. Multi-year undergraduate and postgraduate degree curriculum guide.",
      pdfUrl: "https://www.iipacademy.edu.in/images/IIPCCA%20PROSPECTUS.pdf",
      actionLabel: "Download IIP Prospectus",
    },
  ],
};
