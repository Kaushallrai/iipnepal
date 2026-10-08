export interface PortfolioGalleryImage {
  url: string;
  caption: string;
  aspectRatio?: "portrait" | "landscape" | "wide" | "square";
  shotLocation?: string;
}

export interface PortfolioSpecs {
  camera: string;
  lens: string;
  filmOrSensor: string;
  exposure: string;
  dimensions: string;
}

export interface PortfolioItem {
  id: string;
  number: string;
  slug: string;
  title: string;
  tagline: string;
  tag: string;
  category: string;
  discipline: string;
  photographer: string;
  photographerBio: string;
  mentor: string;
  course: string;
  courseSlug: string;
  year: string;
  location: string;
  coverImage: string;
  image: string; // compatibility alias for coverImage
  aspectRatio: "portrait" | "landscape" | "wide";
  medium: string;
  summary: string;
  description: string; // compatibility alias for summary
  statement: string;
  curatorNotes: string;
  specs: PortfolioSpecs;
  fieldNotes: string[];
  gallery: PortfolioGalleryImage[];
  relatedCourseSlug: string;
  featured?: boolean;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "portfolio-01",
    number: "01",
    slug: "living-market-of-asan",
    title: "The Living Market of Asan",
    tagline: "Predawn Commerce, Floral Vendors & Generational Light in Old Kathmandu",
    tag: "DOCUMENTARY & STREET",
    category: "Street & Documentary",
    discipline: "35mm Street Fieldwork",
    photographer: "Suman Maharjan",
    photographerBio:
      "Kathmandu-born documentary photographer specializing in dawn street life, Newari morning rituals, and disappearing traditional commerce across the Valley.",
    mentor: "Additya Shrestha · Lead Mentor & Fellow",
    course: "Pro Level Foundation Photography Course (Mentor-led)",
    courseSlug: "pro-level-foundation-photography-course",
    year: "2025",
    location: "Asan Chowk, Old Kathmandu",
    coverImage: "/images/portfolio-street.webp",
    image: "/images/portfolio-street.webp",
    aspectRatio: "landscape",
    medium: "35mm Prime · Natural Sunlight · Tri-X 400 Tone",
    summary:
      "A raw visual dissection of morning commerce and floral market vendors in Kathmandu's historic square, capturing generational trade and natural street light.",
    description:
      "A raw visual dissection of morning commerce and floral market vendors in Kathmandu's historic square, capturing generational trade and natural street light.",
    statement:
      "In the predawn chill of Asan Chowk, commerce begins long before words are spoken. Between heaps of orange marigolds, hand-beaten brass measuring bowls, and steaming glasses of spiced chiya, there is an unspoken rhythm that has endured for centuries. This body of work was shot exclusively between 04:30 AM and 07:00 AM over an eight-week fieldwork residency, observing that fleeting sliver of time when sacred geometry meets raw street survival.",
    curatorNotes:
      "Suman's project demonstrates an extraordinary command of available ambient light and proximity. Working at arm's length with a 35mm prime lens without intruding on the merchants requires patience, cultural empathy, and sharp reflex timing. The deep contrast tonalities honor classical Magnum documentary traditions while rooted unapologetically in Kathmandu.",
    specs: {
      camera: "Leica M10-R Monochrome",
      lens: "Summicron-M 35mm f/2 ASPH",
      filmOrSensor: "35mm Full-Frame Sensor (40.89 MP)",
      exposure: "1/125s · f/2.8 · ISO 800",
      dimensions: "24 × 36 in Archival Pigment on Hahnemühle Photo Rag",
    },
    fieldNotes: [
      "Predawn arrival at 04:30 before supply trucks unload fresh marigolds from Dhading",
      "Street vapor illuminated by low-pressure sodium lamps creating natural rim lighting",
      "Close-quarters contact with third-generation spice merchants near Annapurna Temple",
      "Patience required: standing motionless for up to 40 minutes for the scene to settle",
    ],
    gallery: [
      {
        url: "/images/portfolio-street.webp",
        caption: "Master Frame: Dawn commerce and floral transactions at Asan Chowk crossroads.",
        aspectRatio: "landscape",
        shotLocation: "Asan Chowk Central Junction, 05:40 AM",
      },
      {
        url: "/images/portfolio-devotee.webp",
        caption: "Stepped temple shadows and morning devotees offering prayers before opening shop.",
        aspectRatio: "portrait",
        shotLocation: "Annapurna Temple Steps, 06:15 AM",
      },
      {
        url: "/images/hero-photographer.webp",
        caption: "Fieldwork documentation: Working close with prime focal lengths in narrow gallis.",
        aspectRatio: "landscape",
        shotLocation: "Bhedasingh Alley, 06:45 AM",
      },
      {
        url: "/images/portfolio-artisan.webp",
        caption: "Detail study: Weathered hands measuring dried spices on brass balance scales.",
        aspectRatio: "portrait",
        shotLocation: "Chhatrapati Spice Stalls, 07:00 AM",
      },
    ],
    relatedCourseSlug: "pro-level-foundation-photography-course",
    featured: true,
  },
  {
    id: "portfolio-02",
    number: "02",
    slug: "echoes-of-the-high-himalayas",
    title: "Echoes of the High Himalayas",
    tagline: "Glacial Scale, Cloud Inversions & Monolithic Silence in the Annapurna Sanctuary",
    tag: "ALPINE LANDSCAPE",
    category: "Alpine Landscape",
    discipline: "Silver-Gelatin Fine Art",
    photographer: "Prashant Shrestha",
    photographerBio:
      "Expeditionary landscape photographer and high-altitude trekker dedicated to Himalayan glacial geology, Zone System black-and-white tonalities, and atmospheric scale.",
    mentor: "Alpine Expeditionary Workshop · IIP Nepal",
    course: "Pro Level Advanced Photography Course (Mentor-led)",
    courseSlug: "pro-level-advanced-photography-course",
    year: "2025",
    location: "Annapurna Sanctuary, 4,130m",
    coverImage: "/images/portfolio-himalayas.webp",
    image: "/images/portfolio-himalayas.webp",
    aspectRatio: "wide",
    medium: "Medium Format · Ansel Adams Zone System V · B+W Optical Filter",
    summary:
      "Silver-gelatin inspired capture of morning mist drifting through alpine valleys below the Annapurna range, exploring high-altitude silence and glacial scale.",
    description:
      "Silver-gelatin inspired capture of morning mist drifting through alpine valleys below the Annapurna range, exploring high-altitude silence and glacial scale.",
    statement:
      "At 4,000 meters above sea level, sound travels differently. When the wind drops, the only perceptible vibration is the creak of moraine ice and rockfall kilometers away. I did not want to make postcard vistas of tourist peaks; I wanted to render the austere, monolithic silence of stone, cloud, and ice where human scale is reduced to a whisper.",
    curatorNotes:
      "An exemplary application of the Zone System in extreme Himalayan contrasts. Prashant maintained delicate shadow detail in slate scree while preventing the sunlit snowfields from blowing out into pure white. The print carries a physical, tactile weight.",
    specs: {
      camera: "Fujifilm GFX 100S Medium Format",
      lens: "GF 45-100mm f/4 R LM OIS WR",
      filmOrSensor: "43.8 × 32.9mm Medium Format Sensor (102 MP)",
      exposure: "1/250s · f/11 · ISO 100",
      dimensions: "30 × 45 in Silver-Gelatin Emulsion Print",
    },
    fieldNotes: [
      "Acclimatization base at Machapuchare Base Camp (MBC) before final summit approach",
      "Temperature at exposure: -9°C; batteries kept inside down jackets until shutter release",
      "Deep red optical contrast filter used to cut atmospheric haze and darken high-altitude sky",
      "Exposure calculated across 7 spot meter points using Zone System values",
    ],
    gallery: [
      {
        url: "/images/portfolio-himalayas.webp",
        caption: "Amphitheater Ridge: Mist drifting through alpine valley floor at dawn.",
        aspectRatio: "wide",
        shotLocation: "Annapurna Base Camp, 4,130m, 05:50 AM",
      },
      {
        url: "/images/course-foundation.webp",
        caption: "High-altitude rock ridge piercing morning cloud inversion.",
        aspectRatio: "landscape",
        shotLocation: "Deurali Ridge Viewpoint, 3,200m",
      },
      {
        url: "/images/course-pro.webp",
        caption: "Glacial terminal moraine detail: slate, ice, and compressed shale.",
        aspectRatio: "landscape",
        shotLocation: "South Annapurna Glacier, 4,050m",
      },
      {
        url: "/images/flagship-mentor-darkroom.webp",
        caption: "Exhibition print review: Checking tonal gradation in the IIP darkroom archive.",
        aspectRatio: "wide",
        shotLocation: "IIP Darkroom, Kathmandu",
      },
    ],
    relatedCourseSlug: "pro-level-advanced-photography-course",
    featured: true,
  },
  {
    id: "portfolio-03",
    number: "03",
    slug: "masters-of-copper-repousse",
    title: "Masters of Copper Repoussé",
    tagline: "Sacred Metallurgy, Hand Chisels & Centuries of Newari Guild Heritage in Patan",
    tag: "CULTURAL HERITAGE",
    category: "Cultural Heritage",
    discipline: "Intimate Environmental Study",
    photographer: "Aayushree Shakya",
    photographerBio:
      "Lalitpur native and documentary visual artist chronicling living artisanal guilds, metal casting traditions, and intangible cultural heritage in Patan.",
    mentor: "Master Crafts Archive Fellowship · IIP Nepal",
    course: "Pro Level Advanced Photography Course (Mentor-led)",
    courseSlug: "pro-level-advanced-photography-course",
    year: "2026",
    location: "Patan Durbar Courtyard, Lalitpur",
    coverImage: "/images/portfolio-artisan.webp",
    image: "/images/portfolio-artisan.webp",
    aspectRatio: "portrait",
    medium: "85mm Prime · Diffused Courtyard Daylight · Silver Tones",
    summary:
      "Intimate medium-format portraiture examining Newari copper repoussé craftsmanship, hand chisels, and centuries-old metallurgical heritage in Lalitpur.",
    description:
      "Intimate medium-format portraiture examining Newari copper repoussé craftsmanship, hand chisels, and centuries-old metallurgical heritage in Lalitpur.",
    statement:
      "The rhythmic sound of steel hammers tapping warm copper sheets has echoed through Patan's courtyards since the Licchavi kings. The master coppersmiths shape sacred iconography without laser measurements or blueprints, guided entirely by iconography passed down through ten generations. My camera entered their workshops not to objectify, but to honor the quiet dignity of their craft.",
    curatorNotes:
      "Aayushree's environmental portraits breathe with dignity. Notice how the metallic sheen of polished copper reflects soft skylight into the eyes and calloused hands of the master artisan. The rendering rejects exoticism in favor of architectural and human truth.",
    specs: {
      camera: "Sony α7R V Full-Frame",
      lens: "FE 85mm f/1.4 GM",
      filmOrSensor: "35mm Full-Frame Exmor R CMOS (61.0 MP)",
      exposure: "1/160s · f/2.2 · ISO 400",
      dimensions: "20 × 30 in Warm Platinum Rag Print",
    },
    fieldNotes: [
      "Natural skylight entering through 200-year-old carved Newari timber lattice windows",
      "Close documentation of custom hand chisels tempered in local charcoal forges",
      "Oral history interviews conducted in Nepal Bhasa over four weekend studio sessions",
      "Zero artificial flash used to preserve the meditative atmosphere of the atelier",
    ],
    gallery: [
      {
        url: "/images/portfolio-artisan.webp",
        caption: "Master artisan tooling repoussé copper details with tempered steel chisels.",
        aspectRatio: "portrait",
        shotLocation: "Okubahal Workshop, Patan, 11:30 AM",
      },
      {
        url: "/images/course-basic.webp",
        caption: "Courtyard perspective: Raw copper sheets aging beside carved courtyard columns.",
        aspectRatio: "landscape",
        shotLocation: "Patan Durbar Periphery",
      },
      {
        url: "/images/portfolio-devotee.webp",
        caption: "Completed sacred vessel placed for morning consecration in courtyard shrine.",
        aspectRatio: "portrait",
        shotLocation: "Kwa Baha Courtyard, Lalitpur",
      },
      {
        url: "/images/flagship-mentor-darkroom.webp",
        caption: "Master print inspection: Verifying midtone silver separation under critique lamps.",
        aspectRatio: "wide",
        shotLocation: "IIP Print Lab, Kathmandu",
      },
    ],
    relatedCourseSlug: "pro-level-advanced-photography-course",
    featured: true,
  },
  {
    id: "portfolio-04",
    number: "04",
    slug: "devotion-at-nyatapola",
    title: "Devotion at Nyatapola Square",
    tagline: "Sacred Pagoda Architecture, Morning Incense & Timeless Ritual in Bhaktapur",
    tag: "PORTRAIT & DEVOTION",
    category: "Portrait & Culture",
    discipline: "Environmental Portraiture",
    photographer: "Anil Thapa",
    photographerBio:
      "Bhaktapur-based photographer exploring sacred architecture, daily morning devotions, and the relationship between monumental scale and intimate human prayer.",
    mentor: "Heritage Documentary Group · IIP Nepal",
    course: "3-Month Online Foundation Photography Course",
    courseSlug: "foundation-course",
    year: "2026",
    location: "Taumadhi Square, Bhaktapur",
    coverImage: "/images/portfolio-devotee.webp",
    image: "/images/portfolio-devotee.webp",
    aspectRatio: "portrait",
    medium: "50mm Prime · Morning Golden Hour · High-Contrast Monochrome",
    summary:
      "Natural-light environmental portrait capturing morning rituals, incense plumes, and architectural shadows beside Nepal's tallest five-roofed pagoda.",
    description:
      "Natural-light environmental portrait capturing morning rituals, incense plumes, and architectural shadows beside Nepal's tallest five-roofed pagoda.",
    statement:
      "At sunrise, Taumadhi Square transforms into an open sanctuary. Devotees circumambulate the ancient brick plinth, butter lamps flicker against red clay, and the colossal stairway of Nyatapola casts forty-meter shadows across the stones. I wanted to capture the quiet, enduring faith that grounds daily life in the ancient Malla city.",
    curatorNotes:
      "Anil uses the massive verticality of the brick pagoda to frame intimate human gestures. The composition guides the eye effortlessly from the folded hands of the devotee to the soaring rooflines without losing human warmth.",
    specs: {
      camera: "Nikon Z7 II",
      lens: "NIKKOR Z 50mm f/1.8 S",
      filmOrSensor: "35mm Full-Frame BSI CMOS (45.7 MP)",
      exposure: "1/320s · f/2.5 · ISO 200",
      dimensions: "24 × 36 in Archival C-Type Matte",
    },
    fieldNotes: [
      "05:30 AM arrival during the ringing of dawn temple bells",
      "Incense smoke acting as a natural optical diffuser in early low-angle sun",
      "Respectful non-disruptive distance maintained throughout sacred pradakshina rites",
      "Monochrome conversion tuned to match 19th-century salt print tonal curves",
    ],
    gallery: [
      {
        url: "/images/portfolio-devotee.webp",
        caption: "Devotee in contemplation beside the Guardian Statues of Nyatapola.",
        aspectRatio: "portrait",
        shotLocation: "Taumadhi Square Plinth, 06:10 AM",
      },
      {
        url: "/images/portfolio-street.webp",
        caption: "Morning tea vendors assembling wooden carts as devotees complete prayers.",
        aspectRatio: "landscape",
        shotLocation: "Dattatreya Square Gateway, 06:40 AM",
      },
      {
        url: "/images/course-foundation.webp",
        caption: "Five tiers of timber and terracotta tiles cutting into dawn mist.",
        aspectRatio: "landscape",
        shotLocation: "Nyatapola Temple Spire, Bhaktapur",
      },
      {
        url: "/images/hero-photographer.webp",
        caption: "Field composition study: Aligning low perspective angles against pagoda stairs.",
        aspectRatio: "landscape",
        shotLocation: "Bhaktapur Durbar Area",
      },
    ],
    relatedCourseSlug: "foundation-course",
    featured: false,
  },
  {
    id: "portfolio-05",
    number: "05",
    slug: "silver-gelatin-darkroom",
    title: "The Silver Chemistry: Darkroom Archive",
    tagline: "Amber Safelight, Fiber-Base Baryta Prints & The Tactile Alchemy of Silver Halide",
    tag: "DARKROOM & ARCHIVE",
    category: "Darkroom & Archive",
    discipline: "Master Darkroom Printmaking",
    photographer: "Additya Shrestha & Fellows",
    photographerBio:
      "Founder of IIP Nepal and master printer preserving wet darkroom heritage, chemical silver-gelatin printing, and historical photographic archives in Nepal.",
    mentor: "Master Darkroom Residency · IIP Nepal",
    course: "Pro Level Advanced Photography Course (Mentor-led)",
    courseSlug: "pro-level-advanced-photography-course",
    year: "2026",
    location: "IIP Darkroom, Kanti Path, Kathmandu",
    coverImage: "/images/flagship-mentor-darkroom.webp",
    image: "/images/flagship-mentor-darkroom.webp",
    aspectRatio: "wide",
    medium: "Silver Halide Enlarging · Fiber-Base Baryta · Red Safelight",
    summary:
      "Master darkroom archive documenting the tactile chemistry of red-light enlarging, fiber-base development, and exhibition printmaking in Kathmandu.",
    description:
      "Master darkroom archive documenting the tactile chemistry of red-light enlarging, fiber-base development, and exhibition printmaking in Kathmandu.",
    statement:
      "In a world inundated with millions of disposable digital images every second, the wet darkroom demands deliberate slowness, patience, and physical craft. There is an irreplaceable sensory revelation when an exposed sheet of silver paper is submerged into a tray of developer and the image appears under red safelight. This archive honors darkroom craftsmanship as both rigorous science and tactile poetry.",
    curatorNotes:
      "A manifesto in chemical form. These prints demonstrate tonal control, deep velvety d-max blacks, and microscopic highlight gradations that can only be achieved through meticulous analogue craft and chemical mastery.",
    specs: {
      camera: "Leica M6 & De Vere 504 Enlarger",
      lens: "Schneider-Kreuznach Componon-S 80mm f/4",
      filmOrSensor: "Ilford HP5 Plus 400 & Multigrade FB Classic",
      exposure: "12.5s Base Exposure · Grade 3.5 Contrast Filter",
      dimensions: "20 × 24 in Double-Weight Fiber-Base Silver Gelatin",
    },
    fieldNotes: [
      "Continuous darkroom sessions between 14:00 and 21:00 under calibrated amber safelight",
      "Testing paper development curves with 1/2 stop exposure test strips",
      "Two-bath archival fixation followed by selenium toning for 100-year permanence",
      "Prints air-dried on archival fiberglass drying screens over 48 hours",
    ],
    gallery: [
      {
        url: "/images/flagship-mentor-darkroom.webp",
        caption: "Master enlarger head and chemical development tray under safelight glow.",
        aspectRatio: "wide",
        shotLocation: "IIP Main Darkroom Suite, Kanti Path",
      },
      {
        url: "/images/portfolio-artisan.webp",
        caption: "Inspection: Checking shadow micro-contrast with an 8x Peak grain magnifier.",
        aspectRatio: "portrait",
        shotLocation: "Wash & Toning Bay, IIP Lab",
      },
      {
        url: "/images/portfolio-street.webp",
        caption: "Archival print flattening using heated mechanical dry mount press.",
        aspectRatio: "landscape",
        shotLocation: "Finishing Room, Kathmandu Centre",
      },
      {
        url: "/images/course-pro.webp",
        caption: "Final portfolio review: Mentor Additya Shrestha inspecting exhibition set.",
        aspectRatio: "landscape",
        shotLocation: "Exhibition Gallery Wall, IIP Nepal",
      },
    ],
    relatedCourseSlug: "pro-level-advanced-photography-course",
    featured: false,
  },
  {
    id: "portfolio-06",
    number: "06",
    slug: "monsoon-rhythms-of-kathmandu",
    title: "Monsoon Rhythms of Kathmandu",
    tagline: "Rain-Slicked Asphalt, Neon Reflections & Mobile Computational Storytelling",
    tag: "STREET & DOCUMENTARY",
    category: "Street & Documentary",
    discipline: "Smartphone Visual Essay",
    photographer: "Bikash Tamang",
    photographerBio:
      "Visual storyteller focusing on street reflections, urban transitions, and everyday metropolitan resilience across modern Kathmandu.",
    mentor: "Mobile Photography Studio · IIP Nepal",
    course: "Online Mobile Photography Course",
    courseSlug: "mobile-photography-course",
    year: "2026",
    location: "New Road & Sundhara, Kathmandu",
    coverImage: "/images/course-mobile.webp",
    image: "/images/course-mobile.webp",
    aspectRatio: "landscape",
    medium: "Smartphone Computational RAW · Pro Mode · Ambient Reflections",
    summary:
      "A kinetic visual essay captured entirely on modern mobile sensors, exploring rainy season reflections, neon puddles, and hurried commutes in central Kathmandu.",
    description:
      "A kinetic visual essay captured entirely on modern mobile sensors, exploring rainy season reflections, neon puddles, and hurried commutes in central Kathmandu.",
    statement:
      "You don't need ten kilograms of heavy camera bodies to tell a profound story. The best camera is truly the one you have with you when a sudden monsoon cloudburst turns New Road into a shimmering mirror of red brake lights and colorful umbrellas. Mobile photography gave me the invisibility to step directly into the downpour without intimidating anyone.",
    curatorNotes:
      "Bikash demonstrates that compositional geometry, timing, and intent transcend equipment costs. The color balance, reflections, and puddle symmetry rival traditional large-sensor street projects.",
    specs: {
      camera: "Apple iPhone 15 Pro",
      lens: "24mm f/1.78 Main Camera Lens",
      filmOrSensor: "48 MP Quad-Pixel Computational RAW",
      exposure: "1/200s · f/1.78 · ISO 160",
      dimensions: "16 × 24 in Archival Luster Print",
    },
    fieldNotes: [
      "Shot during July torrential monsoon downpours in downtown Kathmandu",
      "Utilizing puddle reflections along the curb for dynamic symmetrical compositions",
      "Manual exposure lock on highlights to prevent blown-out neon reflections",
      "Finished using mobile darkroom curves in Lightroom Mobile",
    ],
    gallery: [
      {
        url: "/images/course-mobile.webp",
        caption: "Commuters braving heavy afternoon monsoon rain near New Road Gate.",
        aspectRatio: "landscape",
        shotLocation: "New Road Gate, Kathmandu, 04:30 PM",
      },
      {
        url: "/images/portfolio-street.webp",
        caption: "Bazaar awnings dripping rainwater onto glistening stone cobbles.",
        aspectRatio: "landscape",
        shotLocation: "Indra Chowk Crossroad, 05:00 PM",
      },
      {
        url: "/images/hero-photographer.webp",
        caption: "Documentary photographer framing low-angle water reflections.",
        aspectRatio: "landscape",
        shotLocation: "Sundhara Plaza Walkway",
      },
      {
        url: "/images/portfolio-devotee.webp",
        caption: "Sheltering under ancient timber temple eaves until the rain subsides.",
        aspectRatio: "portrait",
        shotLocation: "Annapurna Temple Shelter, 05:45 PM",
      },
    ],
    relatedCourseSlug: "mobile-photography-course",
    featured: false,
  },
];

// Helper functions
export function getAllPortfolioItems(): PortfolioItem[] {
  return PORTFOLIO_ITEMS;
}

export function getPortfolioItemBySlug(slug: string): PortfolioItem | undefined {
  return PORTFOLIO_ITEMS.find((item) => item.slug === slug);
}

export function getRelatedPortfolioItems(currentSlug: string, count = 2): PortfolioItem[] {
  const currentItem = getPortfolioItemBySlug(currentSlug);
  if (!currentItem) return PORTFOLIO_ITEMS.slice(0, count);

  // First try to match same category, then fallback to other items
  const sameCategory = PORTFOLIO_ITEMS.filter(
    (item) => item.slug !== currentSlug && item.category === currentItem.category
  );
  const others = PORTFOLIO_ITEMS.filter(
    (item) => item.slug !== currentSlug && item.category !== currentItem.category
  );

  return [...sameCategory, ...others].slice(0, count);
}

export function getNextPortfolioItem(currentSlug: string): PortfolioItem {
  const currentIndex = PORTFOLIO_ITEMS.findIndex((item) => item.slug === currentSlug);
  if (currentIndex === -1 || currentIndex === PORTFOLIO_ITEMS.length - 1) {
    return PORTFOLIO_ITEMS[0];
  }
  return PORTFOLIO_ITEMS[currentIndex + 1];
}

export function getPreviousPortfolioItem(currentSlug: string): PortfolioItem {
  const currentIndex = PORTFOLIO_ITEMS.findIndex((item) => item.slug === currentSlug);
  if (currentIndex <= 0) {
    return PORTFOLIO_ITEMS[PORTFOLIO_ITEMS.length - 1];
  }
  return PORTFOLIO_ITEMS[currentIndex - 1];
}

export function getPortfolioCategories(): string[] {
  const categories = Array.from(new Set(PORTFOLIO_ITEMS.map((item) => item.category)));
  return ["All", ...categories];
}

export function getFeaturedPortfolioItems(): PortfolioItem[] {
  return PORTFOLIO_ITEMS.filter((item) => item.featured);
}

// Backward compatibility export
export const ORIGINAL_PORTFOLIO_ITEMS = PORTFOLIO_ITEMS;
