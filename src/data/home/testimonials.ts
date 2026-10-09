export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
}

export interface TestimonialsData {
  eyebrow: string;
  testimonials: TestimonialItem[];
}

export const testimonialsData: TestimonialsData = {
  eyebrow: "TESTIMONIALS // ALUMNI VOICES",
  testimonials: [
    {
      id: "additya-shrestha",
      quote:
        "Studying at IIP gave me more than technical precision—it gave me an artistic voice. Bringing this institute home to Kathmandu has created a space where young Nepali visual storytellers master both fine art discipline and commercial industry readiness.",
      author: "Additya Shrestha",
      role: "Director & Alumnus, IIP Nepal",
      location: "Kathmandu",
    },
    {
      id: "prabin-maharjan",
      quote:
        "The mentor-led critique at IIP Nepal transformed my perspective entirely. Rather than simply capturing landscapes, I learned to compose light, patience, and narrative across the Himalayas.",
      author: "Prabin Maharjan",
      role: "Expedition & Documentary Photographer",
      location: "Pokhara / Himalayas",
    },
    {
      id: "sneha-tuladhar",
      quote:
        "The one-on-one evaluations on practical assignments pushed my boundaries far beyond camera settings. It gave me the creative confidence to exhibit my fieldwork internationally.",
      author: "Sneha Tuladhar",
      role: "Street & Editorial Photographer",
      location: "Lalitpur",
    },
    {
      id: "kishor-shrestha",
      quote:
        "Working with IIP's faculty gave me real-world studio discipline. From lighting ratios to client pitch decks, the academy bridges fine art photography with professional commercial execution.",
      author: "Kishor Shrestha",
      role: "Studio & Commercial Photographer",
      location: "Bhaktapur",
    },
  ],
};
