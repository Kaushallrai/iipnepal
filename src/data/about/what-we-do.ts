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
      title: "Manual Camera Optics",
      description:
        "Master exposure mechanics, aperture control, and prime lenses across 5 certificate tracks. Move beyond auto mode into deliberate creative command.",
    },
    {
      number: "[ 02 ]",
      title: "Guided Field Assignments",
      description:
        "Shoot in Kathmandu's historic gallis, morning courtyards, and studio lighting labs through structured, real-world weekly briefs.",
    },
    {
      number: "[ 03 ]",
      title: "1-on-1 Mentor Reviews",
      description:
        "Direct review with faculty on every shoot. Dissect contact sheets, frame geometry, and lighting toward an exhibition-grade portfolio.",
    },
  ],
};
