import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import Button from '../common/Button';
import ImagePlaceholder from '../common/ImagePlaceholder';
import { storePreviewData } from '../../data/homeData';

const EASE = [0.16, 1, 0.3, 1];

export function StorePreview({ data = storePreviewData, className = '' }) {
  const shouldReduceMotion = useReducedMotion();
  const dur = (d) => (shouldReduceMotion ? 0 : d);

  return (
    <section
      className={`section section-subtle store-preview-section${className ? ` ${className}` : ''}`}
      aria-labelledby="visit-rajahmundry-heading"
    >
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">

          {/* ── Info column ───────────────────────────────────────────── */}
          <motion.div
            className="col-12 col-lg-6 store-preview-info"
            initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: dur(0.6), ease: EASE }}
          >
            <p className="section-eyebrow">
              <span className="section-eyebrow-line" aria-hidden="true" />
              <span>{data.eyebrow}</span>
            </p>

            <h2 className="store-split-title" id="visit-rajahmundry-heading">
              {data.title}
            </h2>
            <p className="store-area-tag">{data.subtitle}</p>

            {/* Store meta */}
            <address className="store-meta-list" style={{ fontStyle: 'normal' }}>
              <div className="store-meta-item">
                <MapPin size={15} className="store-meta-icon" aria-hidden="true" />
                <div>
                  <span className="store-meta-label">Location</span>
                  <p className="store-meta-value">{data.addressPlaceholder}</p>
                </div>
              </div>

              <div className="store-meta-item">
                <Clock size={15} className="store-meta-icon" aria-hidden="true" />
                <div>
                  <span className="store-meta-label">Hours</span>
                  <p className="store-meta-value">{data.hours}</p>
                </div>
              </div>

              <div className="store-meta-item">
                <Phone size={15} className="store-meta-icon" aria-hidden="true" />
                <div>
                  <span className="store-meta-label">Phone</span>
                  <p className="store-meta-value">{data.phonePlaceholder}</p>
                </div>
              </div>
            </address>

            {/* Capabilities */}
            <ul className="store-capabilities-list" aria-label="In-store services">
              {data.capabilities.map((item) => (
                <li key={item}>
                  <svg
                    className="store-cap-icon"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2.5 7L5.5 10L11.5 4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="store-cta-row">
              <Button
                href={data.directionsPlaceholderUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
                icon={Navigation}
                id="store-directions-cta"
              >
                Get Directions
              </Button>
              <Button
                to="/contact"
                variant="secondary"
                size="md"
                id="store-call-cta"
              >
                Contact Store
              </Button>
            </div>

            <p className="store-placeholder-notice" role="note">
              Address, phone, and hours are placeholders pending store verification.
            </p>
          </motion.div>

          {/* ── Image column ──────────────────────────────────────────── */}
          <motion.div
            className="col-12 col-lg-6 store-preview-media"
            initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: dur(0.75), ease: EASE, delay: dur(0.08) }}
          >
            <div className="store-image-frame">
              <ImagePlaceholder
                src={data.image}
                alt={data.imageAlt}
                type="store"
                aspectRatio="16/11"
              />

              {/* Location panel overlay */}
              <div className="store-location-panel" aria-label="Store location">
                <span className="store-location-kicker">Dilip Opticals</span>
                <span className="store-location-city">{data.city}</span>
                <span className="store-location-state">{data.state}</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default StorePreview;
