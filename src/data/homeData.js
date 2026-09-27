/**
 * DILIP OPTICALS — RAJAHMUNDRY
 * HOMEPAGE DATA & CONFIGURATION
 * 
 * Principle: LESS BUT BETTER.
 * Clean, authentic, local, and intentional content for Dilip Opticals in Rajahmundry.
 */

export const heroData = {
  brandEyebrow: 'DILIP OPTICALS',
  locationEyebrow: 'RAJAHMUNDRY',
  eyebrow: 'Dilip Opticals • Rajahmundry',
  titleLines: [
    'SEE LIFE',
    'IN A NEW',
    'PERSPECTIVE.',
  ],
  supportingText:
    'Premium eyewear and thoughtful eye care for everyday vision and style.',
  primaryCta: {
    label: 'BOOK AN EYE TEST',
    path: '/contact',
  },
  secondaryCta: {
    label: 'EXPLORE EYEWEAR',
    path: '/eyewear',
  },
  image: '/images/boutique_interior.jpg',
  imageAlt: 'Dilip Opticals premium optical boutique interior in Rajahmundry, Andhra Pradesh',
  badgeTitle: 'RAJAHMUNDRY STORE',
  badgeSubtitle: 'Dilip Opticals',
};

/**
 * "Shop by Category" — Visual Category Showcase
 * Categories:
 * 1. Optical Frames
 * 2. Sunglasses
 * 3. Men's Eyewear
 * 4. Women's Eyewear
 * 5. Kids Eyewear
 * 
 * Minimal copy, image-led cards with subtle hover.
 */
export const categoriesData = [
  {
    id: 'cat-optical',
    slug: 'optical',
    label: 'Daily vision',
    title: 'Optical Frames',
    description: 'Precision daily vision',
    image: '/images/cat_optical_frames.jpg',
    fallbackType: 'optical',
    path: '/eyewear?category=optical',
  },
  {
    id: 'cat-sunglasses',
    slug: 'sunwear',
    label: 'Sunwear',
    title: 'Sunglasses',
    description: 'UV protection & tint',
    image: '/images/cat_sunglasses.jpg',
    fallbackType: 'sunglasses',
    path: '/eyewear?category=sunwear',
  },
  {
    id: 'cat-mens',
    slug: 'mens',
    label: 'For him',
    title: "Men's Eyewear",
    description: 'Durable structured fit',
    image: '/images/cat_mens_eyewear.jpg',
    fallbackType: 'mens',
    path: '/eyewear?category=mens',
  },
  {
    id: 'cat-womens',
    slug: 'womens',
    label: 'For her',
    title: "Women's Eyewear",
    description: 'Contemporary sculpted profiles',
    image: '/images/cat_womens_eyewear.jpg',
    fallbackType: 'womens',
    path: '/eyewear?category=womens',
  },
  {
    id: 'cat-kids',
    slug: 'kids',
    label: 'For children',
    title: 'Kids Eyewear',
    description: 'Flexible resilient designs',
    image: '/images/cat_kids_eyewear.jpg',
    fallbackType: 'kids',
    path: '/eyewear?category=kids',
  },
];

/**
 * Featured Eyewear — 4 Demo Products
 * Clearly separated demo frames with "View Details" (no fabricated prices or quantities).
 */
export const featuredProductsData = [
  {
    id: 'demo-classic-square',
    name: 'Classic Square Frame',
    category: 'Optical Frames',
    categorySlug: 'optical',
    shape: 'Classic Square',
    material: 'Acetate',
    style: 'Tortoise square',
    priceDisplay: 'View Details',
    priceVerified: false,
    tag: 'Demo Collection',
    image: '/images/prod_classic_square.jpg',
    fallbackType: 'square',
    ctaText: 'View Details',
    path: '/eyewear/demo-classic-square',
  },
  {
    id: 'demo-minimal-round',
    name: 'Minimal Round Frame',
    category: 'Titanium / Optical',
    categorySlug: 'optical',
    shape: 'Panto Round',
    material: 'Titanium',
    style: 'Minimal round',
    priceDisplay: 'View Details',
    priceVerified: false,
    tag: 'Demo Collection',
    image: '/images/prod_minimal_round.jpg',
    fallbackType: 'round',
    ctaText: 'View Details',
    path: '/eyewear/demo-minimal-round',
  },
  {
    id: 'demo-modern-aviator',
    name: 'Modern Aviator',
    category: 'Sunglasses',
    categorySlug: 'sunwear',
    shape: 'Contemporary Aviator',
    material: 'Metal alloy',
    style: 'Modern aviator',
    priceDisplay: 'View Details',
    priceVerified: false,
    tag: 'Demo Collection',
    image: '/images/prod_modern_aviator.jpg',
    fallbackType: 'aviator',
    ctaText: 'View Details',
    path: '/eyewear/demo-modern-aviator',
  },
  {
    id: 'demo-everyday-rectangle',
    name: 'Everyday Rectangle',
    category: 'Optical Frames',
    categorySlug: 'optical',
    shape: 'Clean Rectangle',
    material: 'Lightweight alloy',
    style: 'Everyday rectangle',
    priceDisplay: 'View Details',
    priceVerified: false,
    tag: 'Demo Collection',
    image: '/images/prod_everyday_rectangle.jpg',
    fallbackType: 'rectangle',
    ctaText: 'View Details',
    path: '/eyewear/demo-everyday-rectangle',
  },
];

/**
 * Eye Care Section Data
 * Editorial Split Layout:
 * Heading: "YOUR VISION. YOUR STYLE."
 * Services: Eye Testing, Prescription Eyewear, Contact Lenses, Frame Care
 */
export const eyeCareData = {
  eyebrow: 'Optical Care',
  title: 'YOUR VISION. YOUR STYLE.',
  description:
    'At Dilip Opticals in Rajahmundry, frame selection and optical care sit together. We help you choose eyewear that feels considered — and we support the vision that goes with it.',
  image: '/images/eyecare_editorial.jpg',
  imageAlt: 'Personalized optical fitting and prescription consultation at Dilip Opticals Rajahmundry',
  badgeTitle: 'Dilip Opticals',
  badgeSubtitle: 'Rajahmundry Optical Care',
  services: [
    {
      id: 'service-eye-testing',
      title: 'Eye Testing',
      description: 'Refraction checks and visual acuity testing to determine your exact corrective prescription.',
      iconName: 'Eye',
    },
    {
      id: 'service-prescription-eyewear',
      title: 'Prescription Eyewear',
      description: 'Single vision, bifocal, and progressive lenses fitted with accurate facial measurements.',
      iconName: 'Glasses',
    },
    {
      id: 'service-contact-lenses',
      title: 'Contact Lenses',
      description: 'Personalized trial fittings and advice for daily or monthly wear soft contact lenses.',
      iconName: 'Disc',
    },
    {
      id: 'service-frame-care',
      title: 'Frame Care',
      description: 'Ultrasonic cleaning, temple realignment, screw tightening, and nose pad adjustments.',
      iconName: 'Wrench',
    },
  ],
};

/**
 * Selected Brands Data
 * Restrained typographic presentation: Fastrack, IDEE, Crizal, Bausch + Lomb, Vogue, St. Mark's
 */
export const brandShowcaseData = {
  eyebrow: 'In store',
  title: 'SELECTED BRANDS & LENS TECHNOLOGIES',
  subtitle: 'Names we work with, presented quietly — without implying what is on the shelf today.',
  disclaimer:
    'Brand availability may vary by store and current collection.',
  brands: [
    { id: 'brand-fastrack', name: 'Fastrack', description: 'Youth & trend-forward eyewear' },
    { id: 'brand-idee', name: 'IDEE', description: 'Contemporary frame designs' },
    { id: 'brand-crizal', name: 'Crizal', description: 'Anti-glare & clarity lens coatings' },
    { id: 'brand-bausch-lomb', name: 'Bausch + Lomb', description: 'Contact lens solutions' },
    { id: 'brand-vogue', name: 'Vogue', description: 'Fashion designer eyewear' },
    { id: 'brand-st-marks', name: "St. Mark's", description: 'Classic everyday optical frames' },
  ],
};

/**
 * Store Preview Data: "VISIT DILIP OPTICALS"
 * Focus on Rajahmundry, Andhra Pradesh with verified/placeholder data.
 */
export const storePreviewData = {
  eyebrow: 'Rajahmundry',
  title: 'VISIT US IN RAJAHMUNDRY',
  subtitle: 'A local optical boutique for everyday vision, considered frames, and in-person care.',
  storeName: 'Dilip Opticals',
  area: 'Rajahmundry, Andhra Pradesh',
  city: 'Rajahmundry',
  state: 'Andhra Pradesh',
  addressPlaceholder: '[Exact store address — to be verified]',
  phonePlaceholder: '[Store phone — to be verified]',
  hours: '[Opening hours — to be verified]',
  hoursVerified: false,
  phoneVerified: false,
  addressVerified: false,
  directionsPlaceholderUrl: 'https://maps.google.com/?q=Dilip+Opticals+Rajahmundry',
  image: '/images/boutique_interior.jpg',
  imageAlt: 'Dilip Opticals Rajahmundry store interior and display counters',
  capabilities: [
    'In-store computerized eye testing',
    'Prescription frame dispensing & contouring',
    'Contact lens consultation & trial fits',
    'Complimentary frame adjustment & cleaning',
  ],
};

export const trustStripData = [
  {
    id: 'ts-frames',
    iconName: 'Glasses',
    title: 'Eyewear',
    description: 'Optical frames and sunglasses for everyday wear.',
  },
  {
    id: 'ts-care',
    iconName: 'Eye',
    title: 'Eye care',
    description: 'Eye testing and prescription support in store.',
  },
  {
    id: 'ts-lenses',
    iconName: 'Sparkles',
    title: 'Lenses',
    description: 'Contact lenses and spectacle lenses, as available.',
  },
  {
    id: 'ts-local',
    iconName: 'ShieldCheck',
    title: 'Rajahmundry',
    description: 'A local optical boutique, not a distant chain.',
  },
];

/**
 * Appointment CTA Section Data
 */
export const appointmentCtaData = {
  title: 'READY TO SEE DIFFERENTLY?',
  subtitle:
    'Visit Dilip Opticals in Rajahmundry for eyewear and optical care.',
  primaryCta: {
    label: 'BOOK AN EYE TEST',
    path: '/contact',
  },
  secondaryCta: {
    label: 'CONTACT US',
    path: '/contact',
  },
};

