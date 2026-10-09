export interface WhatWeDoStat {
  value: string;
  label: string;
  icon: "camera" | "alumni" | "practical" | "globe" | "audience" | "prism";
  delay?: number;
}

export interface WhatWeDoData {
  eyebrow: string;
  heading: string;
  description: string;
  stats: WhatWeDoStat[];
}

export const whatWeDoData: WhatWeDoData = {
  eyebrow: "What we do",
  heading:
    "We train photographers, visual storytellers, and image-makers through manual camera craft, darkroom chemistry, and practical field assignments across Kathmandu.",
  description:
    "As the Nepal centre of the Indian Institute of Photography, established with White Hat Events, we offer structured photography courses for beginners and working professionals. Our training combines technical camera controls, studio strobe lighting, monochrome darkroom printing, and individual mentor reviews on every submitted assignment.",
  stats: [
    {
      value: "14+",
      label: "Years of photography education and training heritage.",
      icon: "camera",
      delay: 0,
    },
    {
      value: "500+",
      label: "Alumni working across documentary, commercial, and editorial photography.",
      icon: "alumni",
      delay: 0.15,
    },
    {
      value: "100%",
      label: "Hands-on field shoots, studio lighting labs, and mentor critique.",
      icon: "practical",
      delay: 0.3,
    },
  ],
};
