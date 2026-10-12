export interface BrandItem {
  id: string;
  name: string;
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export interface BrandsData {
  eyebrow: string;
  brands: BrandItem[];
}

export const brandsData: BrandsData = {
  eyebrow: "CAMERAS & OPTICS WE TEACH ON",
  brands: [
    {
      id: "nikon",
      name: "Nikon",
      src: "/images/brands/nikon.svg",
      alt: "Nikon Optics & Professional Imaging Systems",
      className: "h-7 sm:h-8 md:h-[36px]",
      width: 382,
      height: 108,
    },
    {
      id: "canon",
      name: "Canon",
      src: "/images/brands/canon.svg",
      alt: "Canon Professional Cameras & Cinema EOS",
      className: "h-7 sm:h-8 md:h-[36px]",
      width: 118,
      height: 25,
    },
    {
      id: "sony",
      name: "Sony",
      src: "/images/brands/sony.svg",
      alt: "Sony Alpha Imaging Technology",
      className: "h-6 sm:h-7 md:h-[32px]",
      width: 1280,
      height: 225,
    },
    {
      id: "fujifilm",
      name: "Fujifilm",
      src: "/images/brands/fujifilm.svg",
      alt: "Fujifilm X-Series & GFX Medium Format",
      className: "h-6 sm:h-7 md:h-[32px]",
      width: 1029,
      height: 171,
    },
    {
      id: "leica",
      name: "Leica",
      src: "/images/brands/leica.svg",
      alt: "Leica Camera Heritage & Rangefinders",
      className: "h-8 sm:h-9 md:h-[40px]",
      width: 768,
      height: 768,
    },
    {
      id: "hasselblad",
      name: "Hasselblad",
      src: "/images/brands/hasselblad.svg",
      alt: "Hasselblad Medium Format Photography",
      className: "h-5 sm:h-5.5 md:h-[26px]",
      width: 201,
      height: 19,
    },
    {
      id: "ilford-photo",
      name: "Ilford Photo",
      src: "/images/brands/ilford-photo.svg",
      alt: "Ilford Black and White Darkroom Chemistry & Film",
      className: "h-7 sm:h-8 md:h-[36px]",
      width: 500,
      height: 150,
    },
    {
      id: "kodak",
      name: "Kodak",
      src: "/images/brands/kodak.svg",
      alt: "Eastman Kodak Film Heritage",
      className: "h-7 sm:h-8 md:h-[36px]",
      width: 348,
      height: 89,
    },
    {
      id: "dji",
      name: "DJI",
      src: "/images/brands/dji.svg",
      alt: "DJI Aerial Cinematography & Gimbal Technology",
      className: "h-6.5 sm:h-7.5 md:h-[32px]",
      width: 24,
      height: 16,
    },
    {
      id: "white-hat-events",
      name: "White Hat Events",
      src: "/images/brands/white-hat-events.svg",
      alt: "White Hat Events Kathmandu Regional Partner",
      className: "h-6.5 sm:h-7.5 md:h-[34px]",
      width: 220,
      height: 48,
    },
  ],
};
