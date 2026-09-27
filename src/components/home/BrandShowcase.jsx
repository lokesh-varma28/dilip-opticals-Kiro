import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { brandShowcaseData } from '../../data/homeData';

export function BrandShowcase({ data = brandShowcaseData, className = '' }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className={`section-sm brand-showcase-section${className ? ` ${className}` : ''}`}
      aria-labelledby="brands-heading"
    >
      <div className="container">
        <SectionHeading
          id="brands-heading"
          title={data.title}
          subtitle="Names we carry, presented without overstating what is on the shelf today."
          align="center"
        />

        <motion.ul
          className="row g-0 brand-name-row"
          aria-label="Selected brands and lens technologies"
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {data.brands.map((brand) => (
            <li key={brand.id} className="col-6 col-md-4 col-lg-2 brand-name-item">
              {brand.name}
            </li>
          ))}
        </motion.ul>

        <p className="brand-disclaimer-note" role="note">
          {data.disclaimer}
        </p>
      </div>
    </section>
  );
}

export default BrandShowcase;
