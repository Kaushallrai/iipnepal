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
    "We train photographers and visual storytellers through manual camera craft, lighting control, and practical field assignments.",
  description:
    "Kathmandu's premier mentor-led institute delivering studio strobe labs, field masterclasses, and 1-on-1 portfolio critiques.",
  stats: [
    {
      value: "14+",
      label: "Years of photographic training heritage in Kathmandu.",
      icon: "camera",
      delay: 0,
    },
    {
      value: "500+",
      label: "Alumni practicing in documentary, studio, and commercial media.",
      icon: "alumni",
      delay: 0.15,
    },
    {
      value: "100%",
      label: "Hands-on field shoots, studio lighting labs, and mentor critiques.",
      icon: "practical",
      delay: 0.3,
    },
  ],
};
