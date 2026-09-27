import React from 'react';
import HeroSection from '../components/home/HeroSection';
import TrustStrip from '../components/home/TrustStrip';
import CategorySection from '../components/home/CategorySection';
import FeaturedEyewear from '../components/home/FeaturedEyewear';
import EyeCareSection from '../components/home/EyeCareSection';
import BrandShowcase from '../components/home/BrandShowcase';
import StorePreview from '../components/home/StorePreview';
import AppointmentCta from '../components/home/AppointmentCta';

/**
 * Dilip Opticals — Rajahmundry Homepage
 *
 * Section hierarchy:
 * 1. AnnouncementBar  (in Layout)
 * 2. Navbar           (in Layout)
 * 3. Hero
 * 4. Trust Strip
 * 5. Shop by Category
 * 6. Featured Eyewear
 * 7. Eye Care
 * 8. Selected Brands
 * 9. Visit Our Store
 * 10. Appointment CTA
 * 11. Footer          (in Layout)
 */
export function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <CategorySection />
      <FeaturedEyewear />
      <EyeCareSection />
      <BrandShowcase />
      <StorePreview />
      <AppointmentCta />
    </>
  );
}

export default HomePage;
