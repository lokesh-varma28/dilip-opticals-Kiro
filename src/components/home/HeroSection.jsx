import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import Button from '../common/Button';
import ImagePlaceholder from '../common/ImagePlaceholder';
import { heroData } from '../../data/homeData';

const EASE = [0.16, 1, 0.3, 1];

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const dur = (d) => (shouldReduceMotion ? 0 : d);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.07,
        delayChildren: shouldReduceMotion ? 0 : 0.03,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: dur(0.5), ease: EASE },
    },
  };

  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5 hero-row">

          {/* ── Left: Copy (Balanced 50/50 Desktop Composition) ───────── */}
          <motion.div
            className="col-12 col-lg-6 col-xl-6 hero-col-copy order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.p
              variants={itemVariants}
              className="hero-brand-header"
              aria-label={`${heroData.brandEyebrow} — ${heroData.locationEyebrow}`}
            >
              <span className="hero-brand-label">{heroData.brandEyebrow}</span>
              <span className="hero-brand-divider" aria-hidden="true" />
              <span className="hero-location-label">{heroData.locationEyebrow}</span>
            </motion.p>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="hero-title"
              id="hero-heading"
            >
              {heroData.titleLines.map((line) => (
                <span key={line} className="hero-title-line">
                  {line}
                </span>
              ))}
            </motion.h1>

            {/* Supporting copy */}
            <motion.p variants={itemVariants} className="hero-description">
              {heroData.supportingText}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="hero-cta-group">
              <Button
                to={heroData.primaryCta.path}
                variant="primary"
                size="lg"
                id="hero-book-test-cta"
              >
                {heroData.primaryCta.label}
              </Button>

              <Button
                to={heroData.secondaryCta.path}
                variant="secondary"
                size="lg"
                icon={ArrowRight}
                id="hero-explore-cta"
              >
                {heroData.secondaryCta.label}
              </Button>
            </motion.div>

            {/* Local identity note */}
            <motion.p variants={itemVariants} className="hero-local-note">
              <MapPin
                size={14}
                className="hero-note-icon"
                aria-hidden="true"
                strokeWidth={1.8}
              />
              Rajahmundry, Andhra Pradesh
            </motion.p>
          </motion.div>

          {/* ── Right: Image (Balanced 50/50 Desktop Composition) ──────── */}
          <div className="col-12 col-lg-6 col-xl-6 hero-col-media order-2">
            <div className="hero-media-wrapper">
              <motion.figure
                className="hero-image-card"
                aria-label={heroData.imageAlt}
                initial={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { opacity: 0, scale: 0.985 }
                }
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: dur(0.65),
                  ease: EASE,
                  delay: dur(0.1),
                }}
              >
                <ImagePlaceholder
                  src={heroData.image}
                  alt={heroData.imageAlt}
                  type="store"
                  aspectRatio="16/11"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Editorial caption overlay */}
                <figcaption className="hero-badge-overlay" aria-hidden="true">
                  <span className="hero-badge-title">{heroData.badgeTitle}</span>
                  <span className="hero-badge-sub">{heroData.badgeSubtitle}</span>
                </figcaption>
              </motion.figure>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;
