export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  photographer: string;
  course: string;
  year: string;
  location: string;
  coverImage: string;
  aspectRatio: "portrait" | "landscape" | "wide";
  summary: string;
}

export const ORIGINAL_PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "port-1",
    slug: "asan-morning-bazaar",
    title: "Morning Light at Asan Chowk",
    category: "Street & Documentary",
    photographer: "Bikash Tamang",
    course: "Pro Level Foundation Photography Course (Mentor-led)",
    year: "2025",
    location: "Asan Chowk, Kathmandu",
    coverImage: "/images/portfolio-street.jpg",
    aspectRatio: "landscape",
    summary:
      "A candid study of morning commerce and floral market vendors in Kathmandu's historic square, capturing natural street light and generational trade.",
  },
  {
    id: "port-2",
    slug: "annapurna-dawn-silence",
    title: "Silent Ridges of Annapurna",
    category: "Fine Art Landscape",
    photographer: "Pooja Gurung",
    course: "Pro Level Advanced Photography Course (Mentor-led)",
    year: "2025",
    location: "Annapurna Range, Gandaki",
    coverImage: "/images/portfolio-himalayas.jpg",
    aspectRatio: "wide",
    summary:
      "Black and white silver-gelatin inspired capture of morning mist drifting through alpine valleys below the Annapurna range at sunrise.",
  },
  {
    id: "port-3",
    slug: "patan-coppersmith-craft",
    title: "The Hands of Patan",
    category: "Cultural Heritage",
    photographer: "Srijana Shakya",
    course: "Pro Level Advanced Photography Course (Mentor-led)",
    year: "2026",
    location: "Patan Durbar Courtyard",
    coverImage: "/images/portfolio-artisan.jpg",
    aspectRatio: "portrait",
    summary:
      "Intimate medium-format portraiture examining Newari copper repoussé craftsmanship and centuries-old metallurgical heritage in Lalitpur.",
  },
  {
    id: "port-4",
    slug: "bhaktapur-temple-devotee",
    title: "Devotion at Nyatapola",
    category: "Portrait & Culture",
    photographer: "Anil Thapa",
    course: "1-Month Online Basic Photography Course",
    year: "2026",
    location: "Taumadhi Square, Bhaktapur",
    coverImage: "/images/portfolio-devotee.jpg",
    aspectRatio: "portrait",
    summary:
      "Natural-light environmental portrait capturing morning rituals and architectural shadows beside the ancient stepped temple.",
  },
];
