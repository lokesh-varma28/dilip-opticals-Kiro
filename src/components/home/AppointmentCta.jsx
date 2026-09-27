import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Button from '../common/Button';
import { appointmentCtaData } from '../../data/homeData';

const EASE = [0.16, 1, 0.3, 1];

export function AppointmentCta({ data = appointmentCtaData, className = '' }) {
  const shouldReduceMotion = useReducedMotion();
  const dur = (d) => (shouldReduceMotion ? 0 : d);

  return (
    <section
      className={`section appointment-cta-section${className ? ` ${className}` : ''}`}
      aria-labelledby="final-cta-heading"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-9">
            <motion.div
              className="appointment-cta-box"
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: dur(0.65), ease: EASE }}
            >
              <div className="appointment-cta-content">
                <h2 className="appointment-cta-title" id="final-cta-heading">
                  {data.title}
                </h2>

                <p className="appointment-cta-subtitle">{data.subtitle}</p>

                <div className="appointment-cta-buttons">
                  <Button
                    to={data.primaryCta.path}
                    variant="light"
                    size="lg"
                    id="cta-book-eye-test"
                  >
                    {data.primaryCta.label}
                  </Button>

                  <Button
                    to={data.secondaryCta.path}
                    variant="light-outline"
                    size="lg"
                    id="cta-contact-us"
                  >
                    {data.secondaryCta.label}
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppointmentCta;
