import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import CategoryCard from '../products/CategoryCard';
import { categoriesData } from '../../data/homeData';

export function CategorySection({ categories = categoriesData, className = '' }) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.07,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 14 },
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
      className={`section category-section${className ? ` ${className}` : ''}`}
      aria-labelledby="shop-by-category-heading"
    >
      <div className="container">
        <SectionHeading
          id="shop-by-category-heading"
          title="SHOP BY CATEGORY"
          subtitle="Frames for daily vision, sun protection, and every member of the family."
          align="center"
        />

        <motion.div
          className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3 g-lg-4 justify-content-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {categories.map((category) => (
            <motion.div key={category.id} variants={itemVariants} className="col">
              <CategoryCard category={category} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default CategorySection;
