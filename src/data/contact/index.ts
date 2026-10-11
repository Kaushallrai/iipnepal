export interface ContactChannel {
  label: string;
  value: string;
  href: string;
  isExternal?: boolean;
}

export interface ContactPageData {
  meta: {
    title: string;
    description: string;
  };
  eyebrow: string;
  headingLines: string[];
  channels: {
    phone: ContactChannel;
    whatsapp: ContactChannel;
    email: ContactChannel;
    location: ContactChannel;
  };
  map: {
    locationName: string;
    address: string;
    mapsUrl: string;
  };
  form: {
    title: string;
    studioBadge: string;
    courseOptions: {
      id: string;
      number: string;
      title: string;
      duration: string;
      slug: string;
    }[];
  };
}

export const contactData: ContactPageData = {
  meta: {
    title: "Contact & Admissions | IIP Nepal — Indian Institute of Photography",
    description:
      "Contact IIP Nepal in Kathmandu. Reach our admissions director, schedule a studio visit at Jyoti Bhawan, Kanti Path, or submit a photography course enquiry.",
  },
  eyebrow: "Get in touch",
  headingLines: [
    "Contact us directly or submit a form enquiry",
    "and a member of the team will be in touch.",
  ],
  channels: {
    phone: {
      label: "Phone Number",
      value: "+977 9802364760",
      href: "tel:+9779802364760",
    },
    whatsapp: {
      label: "WhatsApp Admissions",
      value: "+977 9802364760",
      href: "https://wa.me/9779802364760?text=Hello%20IIP%20Nepal%2C%20I%20would%20like%20to%20inquire%20about%20photography%20courses.",
      isExternal: true,
    },
    email: {
      label: "Email Address",
      value: "info@iipnepal.com",
      href: "mailto:info@iipnepal.com",
    },
    location: {
      label: "Studio Location",
      value: "Jyoti Bhawan, Kanti Path, Kathmandu, Bagmati 44600",
      href: "https://maps.app.goo.gl/792XAZpWFHjY1zWt6",
      isExternal: true,
    },
  },
  map: {
    locationName: "IIP NEPAL · JYOTI BHAWAN",
    address: "Jyoti Bhawan, Kanti Path, Kathmandu",
    mapsUrl: "https://maps.app.goo.gl/792XAZpWFHjY1zWt6",
  },
  form: {
    title: "Admissions Enquiry",
    studioBadge: "Kathmandu Studio",
    courseOptions: [
      {
        id: "mobile-photography-course",
        number: "01",
        title: "Mobile Photography Course",
        duration: "1 Month",
        slug: "mobile-photography-course",
      },
      {
        id: "beginners-course",
        number: "02",
        title: "Basic Photography Course",
        duration: "1 Month",
        slug: "beginners-course",
      },
      {
        id: "foundation-course",
        number: "03",
        title: "Foundation Photography Course",
        duration: "3 Months",
        slug: "foundation-course",
      },
      {
        id: "pro-level-foundation-photography-course",
        number: "04",
        title: "Pro-Level Foundation Photography Course",
        duration: "3 Months",
        slug: "pro-level-foundation-photography-course",
      },
      {
        id: "pro-level-advanced-photography-course",
        number: "05",
        title: "Pro-Level Advanced Photography Course",
        duration: "6 Months",
        slug: "pro-level-advanced-photography-course",
      },
    ],
  },
};
