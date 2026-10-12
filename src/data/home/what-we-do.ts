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
  heading: "We train photographers through manual camera craft and mentor critique.",
  description:
    "Kathmandu's premier mentor-led institute delivering studio strobe labs, field masterclasses, and portfolio critiques.",
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
      value: "5",
      label: "Dedicated programmes from smartphone craft to commercial production.",
      icon: "practical",
      delay: 0.3,
    },
  ],
};
