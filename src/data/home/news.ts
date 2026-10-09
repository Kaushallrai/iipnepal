export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  slug: string;
}

export interface NewsData {
  eyebrow: string;
  heading: string;
  articles: NewsItem[];
}

export const newsData: NewsData = {
  eyebrow: "News & opinion",
  heading: "Stay up to date",
  articles: [
    {
      id: "kathmandu-annual-exhibition-2026",
      title: "Annual Photography Exhibition 2026",
      excerpt:
        "Student fieldwork from Langtang, Patan, and Bhaktapur takes center stage at Nepal Art Council, celebrating documentary excellence and living cultural heritage.",
      image: "/images/portfolio-artisan.webp",
      slug: "kathmandu-annual-exhibition-2026",
    },
    {
      id: "additya-shrestha-vision",
      title: "Additya Shrestha on IIP's Vision",
      excerpt:
        "Director and alumnus Additya Shrestha speaks with national media on launching the Indian Institute of Photography in Kathmandu with White Hat Events.",
      image: "/images/flagship-mentor-darkroom.webp",
      slug: "additya-shrestha-vision",
    },
    {
      id: "high-altitude-fieldwork-everest",
      title: "High-Altitude Fieldwork in Everest",
      excerpt:
        "Master class students complete an intensive 14-day high-altitude documentary expedition, capturing glacial recession and remote Sherpa traditions at 4,800m.",
      image: "/images/portfolio-himalayas.webp",
      slug: "high-altitude-fieldwork-everest",
    },
    {
      id: "mobile-photography-revolution",
      title: "The Mobile Photography Revolution",
      excerpt:
        "How modern smartphone sensor technology and RAW capture workflows are democratizing visual journalism for emerging Nepali creators.",
      image: "/images/course-mobile.webp",
      slug: "mobile-photography-revolution",
    },
    {
      id: "living-heritage-lalitpur",
      title: "Preserving Lalitpur's Sacred Crafts",
      excerpt:
        "A long-form photo essay by IIP fellows chronicling three generations of Patan brass artisans, woodcarvers, and temple restorers.",
      image: "/images/portfolio-devotee.webp",
      slug: "living-heritage-lalitpur",
    },
    {
      id: "darkroom-to-commercial-production",
      title: "Darkroom Craft to Studio Practice",
      excerpt:
        "Inside IIP Nepal's dedicated studio lighting and commercial portfolio labs, preparing students for advertising and editorial commissions.",
      image: "/images/course-pro.webp",
      slug: "darkroom-to-commercial-production",
    },
  ],
};
