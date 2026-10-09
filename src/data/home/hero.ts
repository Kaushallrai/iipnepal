export interface HeroData {
  imageSrc: string;
  imageMobileSrc: string;
  imageAlt: string;
  brandPrimary: string;
  brandSecondary: string;
  announcementTitle: string;
  announcementText: string;
  ctaText: string;
  ctaHref: string;
  bottomBar: {
    leftText: string;
    rightText: string;
  };
  editorialTag: {
    primary: string;
    symbol: string;
    secondary: string;
  };
  loadingLabel: string;
}

export const heroData: HeroData = {
  imageSrc: "/images/hero-photographer-desk.webp",
  imageMobileSrc: "/images/hero-photographer-mobile.webp",
  imageAlt: "IIP Nepal Master Photographer Darkroom",
  brandPrimary: "IIP",
  brandSecondary: "NEPAL",
  announcementTitle: "WELCOME TO THE IIP CENTRE NEPAL",
  announcementText:
    "Indian Institute of Photography launches in Kathmandu with White Hat Events — led by alumnus Additya Shrestha.",
  ctaText: "[ EXPLORE COURSES ]",
  ctaHref: "#courses",
  bottomBar: {
    leftText: "KATHMANDU STUDIO",
    rightText: "EST. 2026",
  },
  editorialTag: {
    primary: "IIP",
    symbol: "✱",
    secondary: "NEPAL",
  },
  loadingLabel: "LOADING",
};
