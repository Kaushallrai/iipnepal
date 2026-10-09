export interface EnrollPageData {
  meta: {
    title: string;
    description: string;
  };
  eyebrow: string;
  heading: string;
  deskPhone: {
    label: string;
    value: string;
    href: string;
  };
  deskEmail: {
    label: string;
    value: string;
    href: string;
  };
  studioLocation: {
    label: string;
    value: string;
    href: string;
  };
  batchSchedules: string[];
  paymentMethods: {
    id: string;
    title: string;
    description: string;
  }[];
}

export const enrollData: EnrollPageData = {
  meta: {
    title: "Enroll in Photography Courses | IIP Nepal — Indian Institute of Photography",
    description:
      "Enroll in accredited photography courses in Kathmandu, Nepal. 1-on-1 mentor critiques, structured assignments, and professional certification at IIP Nepal.",
  },
  eyebrow: "Admissions 2026 // Intake Open",
  heading: "Enroll at IIP Nepal and begin your one-on-one mentorship.",
  deskPhone: {
    label: "Admissions Desk",
    value: "+977 9802364760",
    href: "tel:+9779802364760",
  },
  deskEmail: {
    label: "Email Enquiries",
    value: "info@iipnepal.com",
    href: "mailto:info@iipnepal.com",
  },
  studioLocation: {
    label: "Studio & Darkroom Location",
    value: "Jyoti Bhawan, Kanti Path, Kathmandu, Bagmati 44600",
    href: "https://maps.app.goo.gl/792XAZpWFHjY1zWt6",
  },
  batchSchedules: [
    "Flexible Online Mentorship (Weekly 1-on-1 Reviews)",
    "Weekend Intensive Batch (Saturday & Sunday Sessions)",
    "Kathmandu Studio Morning Batch (07:00 AM - 09:00 AM)",
    "Kathmandu Studio Evening Batch (04:30 PM - 06:30 PM)",
  ],
  paymentMethods: [
    {
      id: "esewa-khalti",
      title: "eSewa / Khalti QR",
      description: "Instant mobile wallet payment across Nepal with instant transaction confirmation.",
    },
    {
      id: "bank-transfer",
      title: "Direct Bank Transfer",
      description: "Nepal Investment Mega Bank / Nabil Bank account details provided upon registration.",
    },
    {
      id: "studio-cashier",
      title: "Studio Counter / Cashier",
      description: "Pay directly at our admissions office at Jyoti Bhawan, Kanti Path, Kathmandu.",
    },
  ],
};
