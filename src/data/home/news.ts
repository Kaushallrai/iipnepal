export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  slug: string;
  link: string;
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
      date: "October 2026",
      excerpt:
        "Student fieldwork from Langtang, Patan, and Bhaktapur takes center stage at Nepal Art Council, celebrating documentary excellence and living cultural heritage.",
      image: "/images/portfolio-artisan.webp",
      slug: "kathmandu-annual-exhibition-2026",
      link: "/portfolio",
    },
    {
      id: "additya-shrestha-vision",
      title: "Additya Shrestha on IIP Vision",
      date: "September 2026",
      excerpt:
        "Director and alumnus Additya Shrestha speaks on launching the Indian Institute of Photography in Kathmandu with White Hat Events.",
      image: "/images/flagship-mentor-darkroom.webp",
      slug: "additya-shrestha-vision",
      link: "/about",
    },
    {
      id: "high-altitude-fieldwork-everest",
      title: "High-Altitude Fieldwork in Everest",
      date: "August 2026",
      excerpt:
        "Master class students complete an intensive 14-day documentary expedition, capturing glacial recession and Sherpa traditions at 4,800m.",
      image: "/images/portfolio-himalayas.webp",
      slug: "high-altitude-fieldwork-everest",
      link: "/portfolio",
    },
  ],
};
