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
  eyebrow: "Curriculum & Academic Affiliation",
  headingLines: [
    "Course syllabi and institutional",
    "academic affiliation.",
  ],
  subheading:
    "Review curriculum breakdowns for Kathmandu certificate tracks, or access the Indian Institute of Photography degree syllabus.",
  items: [
    {
      id: "kathmandu-syllabi",
      code: "SYLLABI",
      title: "Kathmandu Course Syllabi",
      level: "5 Certificate Tracks",
      description:
        "Complete curriculum outlines, camera prerequisites, and studio schedules across all 5 certificate tracks.",
      pdfUrl: "/courses",
      actionLabel: "View Course Tracks",
    },
    {
      id: "admissions-dossier",
      code: "CAMPUS DESK",
      title: "Studio Tour & Consultation",
      level: "Jyoti Bhawan, Kanti Path",
      description:
        "Schedule a tour of our lighting lab and darkroom at Jyoti Bhawan. Meet mentors for gear advice and schedule options.",
      pdfUrl: "/contact",
      actionLabel: "Admissions Consultation",
    },
    {
      id: "iip-degree-affiliation",
      code: "AFFILIATION",
      title: "Parent Institute Prospectus",
      level: "IIP India Academic Prospectus",
      description:
        "Academic curriculum overview and degree affiliation guide through parent institute Indian Institute of Photography.",
      pdfUrl: "https://www.iipacademy.edu.in/images/IIPCCA%20PROSPECTUS.pdf",
      actionLabel: "Parent Prospectus",
    },
  ],
};
