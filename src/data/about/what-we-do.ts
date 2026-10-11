export interface AboutPillar {
  number: string;
  title: string;
  description: string;
}

export interface AboutWhatWeDoData {
  eyebrow: string;
  headingLines: string[];
  disciplines: string[];
  pillars: AboutPillar[];
}

export const aboutWhatWeDoData: AboutWhatWeDoData = {
  eyebrow: "What We Do // Academy & Studio",
  headingLines: [
    "We teach photography through darkroom craft,",
    "manual camera optics, and guided assignments across Kathmandu.",
  ],
  disciplines: [
    "Visual Storytelling",
    "Analog Darkroom Chemistry",
    "Studio Strobe Lighting",
    "Photojournalism & Documentary",
    "Commercial Fashion",
    "Architectural Documentation",
    "Editorial Curation & Exhibitions",
  ],
  pillars: [
    {
      number: "[ 01 ]",
      title: "Manual Optics & Camera Craft",
      description:
        "Mastering exposure mechanics, focal optics, and visual geometry across 5 structured certificate tracks from beginner foundation to commercial production.",
    },
    {
      number: "[ 02 ]",
      title: "Darkroom & Studio Lighting Labs",
      description:
        "Dedicated facilities at Jyoti Bhawan for analog black-and-white film processing, darkroom printing, and commercial strobe light-shaping.",
    },
    {
      number: "[ 03 ]",
      title: "1-on-1 Mentorship & Portfolio Review",
      description:
        "Individual faculty critique on every single practical field shooting assignment submitted, curating exhibition-grade graduation portfolios.",
    },
  ],
};
