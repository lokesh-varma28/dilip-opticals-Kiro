import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ImagePlaceholder from '../common/ImagePlaceholder';

export function CategoryCard({ category, className = '' }) {
  const {
    title,
    label,
    image,
    fallbackType = 'optical',
    path = '/eyewear',
  } = category;

  return (
    <Link
      to={path}
      className={`category-card-item${className ? ` ${className}` : ''}`}
      aria-label={`Explore ${title}`}
    >
      {/* Portrait image */}
      <div className="category-card-media">
        <ImagePlaceholder
          src={image}
          alt={`${title} — Dilip Opticals Rajahmundry`}
          type={fallbackType}
          aspectRatio="3/4"
        />
      </div>

      {/* Card content */}
      <div className="category-card-content">
        {label && (
          <span className="category-card-label" aria-hidden="true">
            {label}
          </span>
        )}
        <h3 className="category-card-title">{title}</h3>
        <span className="category-card-link" aria-hidden="true">
          Explore
          <ArrowRight size={13} className="category-card-arrow" />
        </span>
      </div>
    </Link>
  );
}

export default CategoryCard;
