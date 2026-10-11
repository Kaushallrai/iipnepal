export interface SiteContactInfo {
  phone: string;
  phoneDisplay: string;
  email: string;
  address: string;
  addressShort: string;
  mapsUrl: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface NavLinkItem {
  label: string;
  href: string;
}

export const siteConfig = {
  brand: {
    primary: "IIP",
    secondary: "NEPAL",
    fullName: "Indian Institute of Photography Nepal",
    tagline: "Photography Education // Kathmandu Centre · Est. 2011",
    establishedYear: "2011",
    partner: "White Hat Events",
    director: "Additya Shrestha",
  },
  contact: {
    phone: "+9779802364760",
    phoneDisplay: "+977 9802364760",
    whatsapp: "+9779802364760",
    whatsappDisplay: "+977 9802364760",
    email: "info@iipnepal.com",
    address: "Jyoti Bhawan, Kanti Path, Kathmandu, Bagmati Province 44600",
    addressShort: "Jyoti Bhawan, Kanti Path, Kathmandu",
    mapsUrl: "https://maps.app.goo.gl/792XAZpWFHjY1zWt6",
  } as SiteContactInfo,
  socials: [
    {
      platform: "Instagram",
      url: "https://www.instagram.com/iipnepal/",
      label: "IIP Nepal on Instagram",
    },
    {
      platform: "Facebook",
      url: "https://www.facebook.com/iipnepal",
      label: "IIP Nepal on Facebook",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/company/iipnepal/",
      label: "IIP Nepal on LinkedIn",
    },
    {
      platform: "YouTube",
      url: "https://www.youtube.com/@iipnepal",
      label: "IIP Nepal on YouTube",
    },
  ] as SocialLink[],
  legal: {
    copyright: "INSTITUTE OF PHOTOGRAPHY NEPAL © 2026",
    termsUrl: "/terms",
    termsLabel: "Terms of Admission",
    privacyUrl: "/privacy",
    privacyLabel: "Privacy Policy",
    faqUrl: "/faq",
    faqLabel: "FAQ",
  },
};

export const navigationData = {
  navItems: [
    { label: "Courses", href: "/courses" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About Us", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ] as NavLinkItem[],
  enrollCta: {
    label: "Enroll Now",
    href: "/enroll",
  },
  loginCta: {
    label: "Login",
    href: "/login",
  },
};

export const footerData = {
  microEyebrow: "PHOTOGRAPHY EDUCATION // KATHMANDU CENTRE · EST. 2011",
  institutionStatement:
    "Founded in partnership with White Hat Events and led by alumnus Additya Shrestha, IIP Nepal unites decades of photographic heritage and fine art mentorship, redefining visual storytelling in the Himalayan subcontinent.",
  links: [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Get In Touch", href: "/contact" },
  ] as NavLinkItem[],
  discoveryCta: {
    heading: "Kathmandu Admissions Desk & Studio",
    description:
      "Open Sunday through Friday, 10:00 AM – 5:00 PM at Jyoti Bhawan, Kanti Path. Walk-in consultations and course portfolio reviews by prior appointment.",
  },
};
