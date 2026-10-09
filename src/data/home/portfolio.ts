export interface HomePortfolioItem {
  id: string;
  number: string;
  tag: string;
  discipline: string;
  title: string;
  photographer: string;
  mentor: string;
  location: string;
  year: string;
  image: string;
  medium: string;
  description: string;
  slug: string;
}

export interface HomePortfolioData {
  eyebrow: string;
  heading: string;
  subheading: string;
  viewAllText: string;
  viewAllHref: string;
  items: HomePortfolioItem[];
}

export const homePortfolioData: HomePortfolioData = {
  eyebrow: "Curated Portfolio & Fieldwork",
  heading: "Exhibition-Grade Visual Stories Born in Nepal.",
  subheading:
    "Three curated fieldwork documentary projects showcasing raw street reality, high-altitude alpine silence, and living cultural crafts.",
  viewAllText: "VIEW ALL WORKS",
  viewAllHref: "/portfolio",
  items: [
    {
      id: "portfolio-01",
      number: "01",
      tag: "DOCUMENTARY & STREET",
      discipline: "35mm Street Fieldwork",
      title: "The Living Market of Asan",
      photographer: "Suman Maharjan",
      mentor: "Additya Shrestha · Fellow",
      location: "Asan Chowk, Old Kathmandu",
      year: "2025",
      image: "/images/portfolio-street.webp",
      medium: "Natural Sunlight · f/2.8 Prime",
      description:
        "A raw visual dissection of morning commerce and floral market vendors in Kathmandu's historic square, capturing generational trade and natural street light.",
      slug: "living-market-of-asan",
    },
    {
      id: "portfolio-02",
      number: "02",
      tag: "ALPINE LANDSCAPE",
      discipline: "Silver-Gelatin Fine Art",
      title: "Echoes of the High Himalayas",
      photographer: "Prashant Shrestha",
      mentor: "Alpine Expeditionary Workshop",
      location: "Annapurna Sanctuary, 4,130m",
      year: "2025",
      image: "/images/portfolio-himalayas.webp",
      medium: "Medium Format · Zone System V",
      description:
        "Silver-gelatin inspired capture of morning mist drifting through alpine valleys below the Annapurna range, exploring high-altitude silence and glacial scale.",
      slug: "echoes-of-the-high-himalayas",
    },
    {
      id: "portfolio-03",
      number: "03",
      tag: "CULTURAL HERITAGE",
      discipline: "Intimate Environmental Study",
      title: "Masters of Copper Repoussé",
      photographer: "Aayushree Shakya",
      mentor: "Master Crafts Archive Fellowship",
      location: "Patan Durbar Courtyard",
      year: "2026",
      image: "/images/portfolio-artisan.webp",
      medium: "85mm Prime · Diffused Daylight",
      description:
        "Intimate medium-format portraiture examining Newari copper repoussé craftsmanship, hand chisels, and centuries-old metallurgical heritage in Lalitpur.",
      slug: "masters-of-copper-repousse",
    },
  ],
};
