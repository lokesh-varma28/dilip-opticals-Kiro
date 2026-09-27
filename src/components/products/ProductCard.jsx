import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ImagePlaceholder from '../common/ImagePlaceholder';

export function ProductCard({ product, className = '' }) {
  const {
    id,
    name,
    category,
    material,
    style,
    colorway,
    tag = 'Demo Collection',
    image,
    fallbackType = 'square',
    ctaText = 'View Details',
    path = `/eyewear/${id}`,
  } = product;

  const descriptor = [material, style || colorway].filter(Boolean).join(' · ');

  return (
    <article className={`product-card-wrap${className ? ` ${className}` : ''}`}>
      <Link to={path} className="product-card" aria-label={`${name} — ${category}. ${tag}.`}>

        {/* Image */}
        <div className="product-card-media">
          <ImagePlaceholder
            src={image}
            alt={`${name} — ${category}`}
            type={fallbackType}
            aspectRatio="4/5"
            badge={tag}
          />
        </div>

        {/* Body */}
        <div className="product-card-body">
          <span className="product-category">{category}</span>
          <h3 className="product-title">{name}</h3>
          {descriptor && (
            <p className="product-specs">{descriptor}</p>
          )}

          <div className="product-footer-row">
            <span className="product-demo-indicator">{tag}</span>
            <span className="product-cta-link">
              {ctaText}
              <ArrowRight
                size={12}
                className="product-cta-arrow"
                aria-hidden="true"
              />
            </span>
          </div>
        </div>

      </Link>
    </article>
  );
}

export default ProductCard;
