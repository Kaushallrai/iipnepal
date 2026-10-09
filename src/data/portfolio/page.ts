export interface PortfolioPageData {
  eyebrow: string;
  heading: string;
  description: string;
  manifesto: {
    eyebrow: string;
    quote: string;
    author: string;
  };
  cta: {
    eyebrow: string;
    heading: string;
    description: string;
    primaryCtaText: string;
    primaryCtaHref: string;
    secondaryCtaText: string;
    secondaryCtaHref: string;
  };
}

export const portfolioPageData: PortfolioPageData = {
  eyebrow: "IIP Nepal // Curatorial Archive",
  heading: "Student & Alumni Archive.",
  description:
    "Curated documentary fieldwork, high-altitude landscape studies, and wet darkroom silver chemistry produced during mentor-led residencies in Nepal.",
  manifesto: {
    eyebrow: "Curatorial Vision // Kathmandu",
    quote:
      "“A photograph in Nepal must never be an exercise in surface spectacle. It is a living archive of collective memory, sacred craft, and human truth.”",
    author: "Additya Shrestha / Founder and Lead Mentor",
  },
  cta: {
    eyebrow: "Admissions 2026 // Kathmandu",
    heading: "Develop Your Visual Voice at IIP.",
    description:
      "Mentor-led fieldwork, wet darkroom masterclasses, and one-on-one portfolio critiques at Jyoti Bhawan, Kanti Path.",
    primaryCtaText: "Explore Courses",
    primaryCtaHref: "/courses",
    secondaryCtaText: "Get In Touch",
    secondaryCtaHref: "/contact",
  },
};
