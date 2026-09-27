/**
 * DILIP OPTICALS — RAJAHMUNDRY
 * CONFIGURABLE BRAND & SITE CONFIGURATION
 * 
 * Note: All business details below are structured to be easily configurable
 * once final legal, contact, and operational information is verified.
 */

import { featuredProductsData } from './homeData';

export const siteConfig = {
  brand: {
    name: 'Dilip Opticals',
    shortName: 'Dilip',
    tagline: 'See Life In A New Perspective.',
    descriptor: 'Rajahmundry',
    city: 'Rajahmundry',
    state: 'Andhra Pradesh',
    country: 'India',
    announcement: {
      tag: 'Dilip Opticals',
      text: 'Rajahmundry optical care and considered eyewear',
      actionText: 'Book Eye Test',
      actionUrl: '/contact',
      enabled: true,
    },
    contactPhone: '+91 (Store Contact Placeholder)',
    contactWhatsapp: '+91 (WhatsApp Contact Placeholder)',
    contactEmail: 'contact@dilipopticals.com',
    appointmentEmail: 'appointments@dilipopticals.com',
  },

  navigation: [
    { label: 'Eyewear', path: '/eyewear' },
    { label: 'Eye Care', path: '/#eye-care' },
    { label: 'Stores', path: '/stores' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ],

  // Non-numerical value propositions
  trustMetrics: [
    { value: 'Precision', label: 'Prescription Eyewear' },
    { value: 'Curated', label: 'Fashion Frames' },
    { value: 'Comfort', label: 'Contact Lenses' },
    { value: 'Care', label: 'Dedicated Eye Care' },
  ],

  craftsmanshipPillars: [
    {
      id: 'pillar-optics',
      title: 'Precision Optical Refraction',
      subtitle: 'Clear Vision',
      description: 'Computerized refraction checks and visual acuity testing to determine your exact corrective prescription.',
    },
    {
      id: 'pillar-materials',
      title: 'Curated Frames & Acetates',
      subtitle: 'Quality Materials',
      description: 'Handpicked lightweight beta-titanium, rich bio-acetates, and resilient metal alloy frames designed for all-day comfort.',
    },
    {
      id: 'pillar-bespoke',
      title: 'Personalized Facial Fit',
      subtitle: 'Individual Comfort',
      description: 'Bridge contour adjustment, pantoscopic tilt calibration, and temple curvature customized to your face profile.',
    },
    {
      id: 'pillar-laboratory',
      title: 'In-Store Lens Edging Studio',
      subtitle: 'Accurate Assembly',
      description: 'Equipped for precise lens mounting, anti-reflective coatings, blue-shield filtering, and lifelong maintenance.',
    },
  ],

  categories: [
    {
      id: 'optical',
      name: 'Optical Frames',
      tagline: 'Daily Vision',
      description: 'Lightweight, architecturally balanced frames for clear daily vision and executive style.',
      count: 'Curated Collection',
      slug: 'optical',
    },
    {
      id: 'sunwear',
      name: 'Designer Sunglasses',
      tagline: 'UV Protection',
      description: 'Curated polarized and tinted lenses providing comprehensive ultraviolet protection in bold silhouettes.',
      count: 'Curated Collection',
      slug: 'sunwear',
    },
    {
      id: 'mens',
      name: "Men's Eyewear",
      tagline: 'Structured Fit',
      description: 'Durable rectangular, navigator, and minimalist lightweight frames built for everyday resilience.',
      count: 'Curated Collection',
      slug: 'mens',
    },
    {
      id: 'womens',
      name: "Women's Eyewear",
      tagline: 'Sculpted Elegance',
      description: 'Cat-eye, geometric round, and rich acetate designs in contemporary flattering colorways.',
      count: 'Curated Collection',
      slug: 'womens',
    },
    {
      id: 'kids',
      name: 'Kids Eyewear',
      tagline: 'Flexible & Safe',
      description: 'Flexible, lightweight, and resilient frames designed specifically for active youth.',
      count: 'Curated Collection',
      slug: 'kids',
    },
  ],

  // Sample Frames for catalog and detail view
  sampleFrames: [
    ...featuredProductsData.map((f) => ({
      id: f.id,
      name: f.name,
      series: f.category,
      category: f.categorySlug,
      shape: f.shape,
      material: f.material,
      colorway: f.colorway,
      price: f.priceDisplay,
      tag: f.tag,
      dimensions: 'Standard Optical Fit',
      weight: 'Featherlight',
      description: `${f.name} offers refined daily comfort and balanced facial aesthetics. Can be fitted with prescription single vision, progressive, or blue-filter lenses.`,
      features: f.features,
    })),
    // Backward-compatible entries for previous routes
    {
      id: 'dilip-aerolite-01',
      name: 'Minimal Round Frame',
      series: 'Titanium Series',
      category: 'optical',
      shape: 'Panto Geometric',
      material: 'Pure Beta-Titanium',
      colorway: 'Antique Bronze & Slate',
      price: 'Price on Request',
      tag: 'Curated Frame',
      dimensions: '49-19-145 mm',
      weight: '9.4 grams',
      description: 'Engineered with clean architectural lines, micro-grooved rims, and silicone-encased titanium nose pads.',
      features: ['Featherlight design', 'Screwless barrel hinge', 'Titanium nose pads', 'Prescription ready'],
    },
    {
      id: 'monarch-acetate-44',
      name: 'Classic Square Frame',
      series: 'Acetate Collection',
      category: 'optical',
      shape: 'Classic Square',
      material: 'Handcrafted Bio-Acetate',
      colorway: 'Dark Havana Tortoise',
      price: 'Price on Request',
      tag: 'Curated Frame',
      dimensions: '48-21-145 mm',
      weight: '22 grams',
      description: 'Sculpted from premium acetate, hand-beveled across the browline with custom wire-core temples.',
      features: ['Multi-barrel riveted hinge', 'Keyhole bridge', 'Polished finish', 'Prescription ready'],
    },
    {
      id: 'solaris-gold-88',
      name: 'Modern Aviator',
      series: 'Sunwear Collection',
      category: 'sunwear',
      shape: 'Modern Aviator',
      material: 'Gold Alloy Frame',
      colorway: 'Brushed Gold with Forest Tint',
      price: 'Price on Request',
      tag: 'Polarized',
      dimensions: '58-14-142 mm',
      weight: '16.5 grams',
      description: 'A contemporary reimagining of the iconic navigator, fitted with UV400 polarized lenses.',
      features: ['UV400 Polarized', 'Hydrophobic coating', 'Sweat-bar brow reinforcement', 'Protective case included'],
    },
    {
      id: 'celeste-round-09',
      name: 'Everyday Rectangle',
      series: 'Everyday Series',
      category: 'optical',
      shape: 'Clean Rectangle',
      material: 'Fine Alloy with Acetate Tips',
      colorway: 'Matte Onyx & Ruthenium',
      price: 'Price on Request',
      tag: 'Daily Essential',
      dimensions: '52-18-140 mm',
      weight: '14.2 grams',
      description: 'Subtle sophistication featuring slim metallic rims with comfortable curved paddle tips.',
      features: ['Hypoallergenic nose pads', 'Ultra-slim profile', 'Durable rim lock', 'Prescription ready'],
    },
  ],

  boutiques: [
    {
      id: 'store-rajahmundry',
      city: 'Rajahmundry',
      flagship: true,
      name: 'Dilip Opticals — Main Store',
      neighborhood: 'Rajahmundry, Andhra Pradesh',
      address: '[Store Address / Commercial Center, Rajahmundry, Andhra Pradesh]',
      phone: '+91 (Store Contact Placeholder)',
      hours: '[Opening hours — to be verified]',
      amenities: [
        'Computerized Eye Testing Setup',
        'Prescription Eyewear Consultation',
        'Contact Lens Trials & Fitting',
        'Walk-in Frame Realignment & Ultrasonic Cleaning',
      ],
    },
  ],

  heritageStory: {
    title: 'Precision Vision & Curated Frames',
    subtitle: 'Dilip Opticals — Rajahmundry',
    foundingNarrative:
      'Dilip Opticals is a local optical boutique in Rajahmundry. We focus on considered eyewear, careful fitting, and optical care that belongs in everyday life — not in a distant luxury capital.',
    craftPhilosophy:
      'We combine computerized optical refraction with personalized frame styling. Every pair of spectacles is carefully fitted to your facial measurements, ensuring both visual clarity and lasting all-day comfort.',
    masterOpticiansNote:
      '“An optical frame is the most visible accessory you will ever wear. It sits at the emotional center of every human conversation. It should fit comfortably and reflect your personality with effortless grace.” — Dilip Opticals',
  },
};

export default siteConfig;
