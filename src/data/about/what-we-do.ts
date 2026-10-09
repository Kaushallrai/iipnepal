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
      title: "Degree & Diploma Syllabi",
      description:
        "Structured pathways including MFA, BFA, Dual Diplomas (DDPC), and Foundation modules benchmarked against international photography standards.",
    },
    {
      number: "[ 02 ]",
      title: "Darkroom & Chemistry Labs",
      description:
        "Dedicated analog darkroom facilities at Jyoti Bhawan for black-and-white film processing, contact printing, and silver gelatin enlargements.",
    },
    {
      number: "[ 03 ]",
      title: "Mentorship & Critique",
      description:
        "One-on-one evaluations on every single practical photo assignment submitted, refining technical discipline and personal artistic vision.",
    },
  ],
};
