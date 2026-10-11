export interface HeroData {
  imageSrc: string;
  imageMobileSrc?: string;
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
  imageSrc: "/images/hero-photographer.webp",
  imageAlt: "IIP Nepal Photography Studio & Education",
  brandPrimary: "IIP",
  brandSecondary: "NEPAL",
  announcementTitle: "LEARN PHOTOGRAPHY THROUGH GUIDED PRACTICE",
  announcementText:
    "Master your craft through structured assignments, field shooting briefs, and personal 1-on-1 mentor feedback at the IIP Kathmandu centre.",
  ctaText: "[ EXPLORE COURSES ]",
  ctaHref: "#courses",
  bottomBar: {
    leftText: "KATHMANDU CENTRE",
    rightText: "EST. 2011",
  },
  editorialTag: {
    primary: "IIP",
    symbol: "✱",
    secondary: "NEPAL",
  },
  loadingLabel: "LOADING",
};
