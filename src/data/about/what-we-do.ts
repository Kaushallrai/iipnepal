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
      title: "Learn Camera Technique",
      description:
        "Master exposure mechanics, lens optics, and manual camera controls across 5 focused tracks—moving past automatic settings into deliberate, creative authority.",
    },
    {
      number: "[ 02 ]",
      title: "Practise Through Guided Assignments",
      description:
        "Step into Kathmandu's morning courtyards, heritage plazas, and studio strobe labs to apply technical lessons through rigorous, real-world assignments.",
    },
    {
      number: "[ 03 ]",
      title: "Receive 1-on-1 Mentor Feedback",
      description:
        "Rigorous personal review with faculty on every shoot. Analyze proof sheets, dissect lighting decisions, and refine work toward an exhibition-grade portfolio.",
    },
  ],
};
