import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Glasses, Sparkles, Eye, ShieldCheck } from 'lucide-react';
import { trustStripData } from '../../data/homeData';

const iconMap = { Glasses, Sparkles, Eye, ShieldCheck };

export function TrustStrip({ data = trustStripData, className = '' }) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      className={`trust-strip-section${className ? ` ${className}` : ''}`}
      aria-label="What we offer"
    >
      <div className="container">
        <motion.div
          className="row g-4 g-lg-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {data.map((item) => {
            const IconComponent = iconMap[item.iconName] || Glasses;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="col-12 col-sm-6 col-lg-3"
              >
                <div className="trust-strip-card h-100">
                  <div className="trust-strip-icon-wrap" aria-hidden="true">
                    <IconComponent size={20} strokeWidth={1.6} />
                  </div>
                  <div className="trust-strip-content">
                    <h3 className="trust-strip-title">{item.title}</h3>
                    <p className="trust-strip-desc">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default TrustStrip;
