import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../products/ProductCard';
import { featuredProductsData } from '../../data/homeData';

export function FeaturedEyewear({ products = featuredProductsData, className = '' }) {
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
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.55,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      className={`section section-subtle featured-eyewear-section${className ? ` ${className}` : ''}`}
      aria-labelledby="featured-eyewear-heading"
    >
      <div className="container">

        {/* Section header */}
        <div className="row align-items-end mb-4 mb-lg-5">
          <div className="col-12 col-md-8">
            <p className="section-eyebrow">
              <span className="section-eyebrow-line" aria-hidden="true" />
              <span>Demo Collection</span>
            </p>
            <h2 className="section-title" id="featured-eyewear-heading">
              FEATURED EYEWEAR
            </h2>
            <p className="section-subtitle">
              Styles shown are labelled as demo collection — not live inventory.
            </p>
          </div>

          <div className="col-12 col-md-4 text-md-end mt-3 mt-md-0">
            <Link
              to="/eyewear"
              className="btn-link"
              id="featured-view-all-cta"
              aria-label="View all eyewear collections"
            >
              View All
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Product grid */}
        <motion.div
          className="row g-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={itemVariants} className="col-12 col-sm-6 col-lg-3">
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default FeaturedEyewear;
