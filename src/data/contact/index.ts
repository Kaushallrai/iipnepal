export interface ContactChannel {
  label: string;
  value: string;
  href: string;
  caption?: string;
}

export interface ContactPageData {
  meta: {
    title: string;
    description: string;
  };
  eyebrow: string;
  headingLines: string[];
  subheading: string;
  channels: {
    phone: ContactChannel;
    whatsapp: ContactChannel;
    email: ContactChannel;
    hours: ContactChannel;
  };
  map: {
    locationName: string;
    address: string;
    mapsUrl: string;
  };
  form: {
    title: string;
    subtitle: string;
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
    title: "Contact | IIP Nepal — Indian Institute of Photography",
    description:
      "Reach out to IIP Nepal in Kathmandu. Admissions consultations, studio visits at Jyoti Bhawan, Kanti Path, or submit an inquiry for photography programs.",
  },
  eyebrow: "Contact // Kathmandu",
  headingLines: [
    "Get in touch.",
  ],
  subheading:
    "Have questions about our programs or admissions? Reach out directly or send us an enquiry.",
  channels: {
    phone: {
      label: "Phone",
      value: "+977 9802364760",
      href: "tel:+9779802364760",
      caption: "Admissions Desk",
    },
    whatsapp: {
      label: "WhatsApp",
      value: "Direct Chat",
      href: "https://wa.me/9779802364760?text=Hello%20IIP%20Nepal%2C%20I%20would%20like%20to%20inquire%20about%20photography%20courses.",
      caption: "Fast Response",
    },
    email: {
      label: "Email",
      value: "info@iipnepal.com",
      href: "mailto:info@iipnepal.com",
      caption: "Inquiries & Portfolios",
    },
    hours: {
      label: "Studio Hours",
      value: "10:00 – 17:00",
      href: "https://maps.app.goo.gl/792XAZpWFHjY1zWt6",
      caption: "Sunday – Friday",
    },
  },
  map: {
    locationName: "IIP Nepal · Jyoti Bhawan",
    address: "Jyoti Bhawan, Kanti Path, Kathmandu",
    mapsUrl: "https://maps.app.goo.gl/792XAZpWFHjY1zWt6",
  },
  form: {
    title: "Admissions Enquiry",
    subtitle: "Fill in the details below and our team will get back to you within 24 hours.",
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
