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
    "We train photographers, visual storytellers, and image-makers through manual camera craft, lighting control, and practical field assignments across Kathmandu.",
  description:
    "Official Kathmandu centre of the Indian Institute of Photography, delivering 5 mentor-led certificate tracks, studio strobe lighting, and 1-on-1 critiques at Jyoti Bhawan, Kanti Path.",
  stats: [
    {
      value: "14+",
      label: "Years of IIP photographic training heritage (Est. 2011 in Kathmandu).",
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
      label: "Practical field shoots, studio lighting labs, and 1-on-1 mentor critiques.",
      icon: "practical",
      delay: 0.3,
    },
  ],
};
