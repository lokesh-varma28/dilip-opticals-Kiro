import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';
import ImagePlaceholder from '../common/ImagePlaceholder';
import { eyeCareData } from '../../data/homeData';

const EASE = [0.16, 1, 0.3, 1];

export function EyeCareSection({ data = eyeCareData, className = '' }) {
  const shouldReduceMotion = useReducedMotion();
  const dur = (d) => (shouldReduceMotion ? 0 : d);

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.08 },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: dur(0.5), ease: EASE },
    },
  };

  return (
    <section
      className={`section eyecare-section${className ? ` ${className}` : ''}`}
      id="eye-care"
      aria-labelledby="eye-care-heading"
    >
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">

          {/* ── Image column ──────────────────────────────────────────── */}
          <motion.figure
            className="col-12 col-lg-5 order-2 order-lg-1 eyecare-image-column"
            initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: dur(0.75), ease: EASE }}
          >
            <div className="eyecare-image-frame">
              <ImagePlaceholder
                src={data.image}
                alt={data.imageAlt}
                type="round"
                aspectRatio="4/3"
              />
            </div>
            <figcaption className="eyecare-image-caption">
              {data.badgeTitle} · {data.badgeSubtitle}
            </figcaption>
          </motion.figure>

          {/* ── Content column ────────────────────────────────────────── */}
          <motion.div
            className="col-12 col-lg-7 order-1 order-lg-2 eyecare-content-column"
            initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: dur(0.65), ease: EASE, delay: dur(0.1) }}
          >
            <p className="section-eyebrow">
              <span className="section-eyebrow-line" aria-hidden="true" />
              <span>{data.eyebrow}</span>
            </p>

            <h2
              className="eyecare-split-title"
              id="eye-care-heading"
            >
              {data.title}
            </h2>

            <p className="eyecare-body-text">{data.description}</p>

            {/* Numbered services list */}
            <motion.ol
              className="eyecare-services-list"
              aria-label="Services offered"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              {data.services.map((service, idx) => (
                <motion.li
                  key={service.id}
                  variants={rowVariants}
                  className="service-row"
                >
                  <span className="service-number" aria-hidden="true">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="service-copy">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-desc">{service.description}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ol>

            <div className="eyecare-action-row">
              <Button
                to="/contact"
                variant="primary"
                size="md"
                icon={ArrowRight}
                id="eyecare-book-test-cta"
              >
                Book an Eye Test
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default EyeCareSection;
