import React, { useState } from 'react';

/**
 * ImagePlaceholder component
 * 
 * Renders verified local images when available, or displays a refined,
 * editorial vector placeholder tailored to optical eyewear frames.
 * Ensures zero broken image links and maintains commercial aesthetic.
 */
export function ImagePlaceholder({
  src,
  alt = 'Dilip Opticals Eyewear',
  type = 'square',
  aspectRatio = '16/10',
  className = '',
  badge,
  loading = 'lazy',
  fetchPriority,
  style = {},
}) {
  const [hasError, setHasError] = useState(false);
  const shouldRenderImage = src && !hasError;

  // Render SVG silhouette based on frame type
  const renderFrameVector = () => {
    switch (type) {
      case 'round':
        return (
          <svg viewBox="0 0 240 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="frame-vector-svg">
            <circle cx="65" cy="45" r="28" stroke="#1d2024" strokeWidth="3.5" />
            <circle cx="175" cy="45" r="28" stroke="#1d2024" strokeWidth="3.5" />
            <path d="M93 42C105 37 135 37 147 42" stroke="#9e7d48" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M37 42L12 38" stroke="#9e7d48" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M203 42L228 38" stroke="#9e7d48" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="65" cy="45" r="23" stroke="#9e7d48" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.6" />
            <circle cx="175" cy="45" r="23" stroke="#9e7d48" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.6" />
          </svg>
        );

      case 'aviator':
        return (
          <svg viewBox="0 0 240 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="frame-vector-svg">
            {/* Left Teardrop */}
            <path
              d="M35 36C35 24 50 20 70 20C92 20 102 26 102 42C102 58 88 68 68 68C48 68 35 56 35 36Z"
              stroke="#1d2024"
              strokeWidth="3.5"
              fill="rgba(30, 41, 59, 0.08)"
            />
            {/* Right Teardrop */}
            <path
              d="M138 42C138 26 148 20 170 20C190 20 205 24 205 36C205 56 192 68 172 68C152 68 138 58 138 42Z"
              stroke="#1d2024"
              strokeWidth="3.5"
              fill="rgba(30, 41, 59, 0.08)"
            />
            {/* Brow Bar & Bridge */}
            <path d="M70 19L170 19" stroke="#9e7d48" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M102 36C112 33 128 33 138 36" stroke="#9e7d48" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M35 34L12 30" stroke="#9e7d48" strokeWidth="2" strokeLinecap="round" />
            <path d="M205 34L228 30" stroke="#9e7d48" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );

      case 'rectangle':
        return (
          <svg viewBox="0 0 240 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="frame-vector-svg">
            <rect x="32" y="24" width="72" height="42" rx="6" stroke="#1d2024" strokeWidth="3.5" />
            <rect x="136" y="24" width="72" height="42" rx="6" stroke="#1d2024" strokeWidth="3.5" />
            <path d="M104 40C114 36 126 36 136 40" stroke="#9e7d48" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M32 38L10 35" stroke="#9e7d48" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M208 38L230 35" stroke="#9e7d48" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        );

      case 'womens':
        return (
          <svg viewBox="0 0 240 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="frame-vector-svg">
            {/* Subtle Cat-Eye */}
            <path
              d="M32 30C32 20 48 18 68 18C90 18 102 24 102 38C102 54 86 64 68 64C48 64 34 52 32 30Z"
              stroke="#1d2024"
              strokeWidth="3.5"
            />
            <path
              d="M138 38C138 24 150 18 172 18C192 18 208 20 208 30C206 52 192 64 172 64C154 64 138 54 138 38Z"
              stroke="#1d2024"
              strokeWidth="3.5"
            />
            {/* Uplifted Wings */}
            <path d="M32 30L22 22" stroke="#9e7d48" strokeWidth="3" strokeLinecap="round" />
            <path d="M208 30L218 22" stroke="#9e7d48" strokeWidth="3" strokeLinecap="round" />
            <path d="M102 36C112 32 128 32 138 36" stroke="#9e7d48" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        );

      case 'kids':
        return (
          <svg viewBox="0 0 240 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="frame-vector-svg">
            <rect x="38" y="24" width="64" height="42" rx="14" stroke="#1d2024" strokeWidth="3.5" />
            <rect x="138" y="24" width="64" height="42" rx="14" stroke="#1d2024" strokeWidth="3.5" />
            <path d="M102 42C112 38 128 38 138 42" stroke="#9e7d48" strokeWidth="3" strokeLinecap="round" />
            <path d="M38 42L18 40" stroke="#9e7d48" strokeWidth="3" strokeLinecap="round" />
            <path d="M202 42L222 40" stroke="#9e7d48" strokeWidth="3" strokeLinecap="round" />
          </svg>
        );

      case 'sunglasses':
        return (
          <svg viewBox="0 0 240 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="frame-vector-svg">
            <rect x="30" y="20" width="76" height="48" rx="8" fill="#1e2229" stroke="#14161a" strokeWidth="3" />
            <rect x="134" y="20" width="76" height="48" rx="8" fill="#1e2229" stroke="#14161a" strokeWidth="3" />
            <path d="M106 38C114 34 126 34 134 38" stroke="#9e7d48" strokeWidth="3" strokeLinecap="round" />
            <path d="M30 36L10 32" stroke="#9e7d48" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M210 36L230 32" stroke="#9e7d48" strokeWidth="2.5" strokeLinecap="round" />
            {/* Glare Reflection Line */}
            <path d="M42 26L78 58" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
            <path d="M146 26L182 58" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
          </svg>
        );

      case 'store':
        return (
          <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="frame-vector-svg">
            {/* Floor */}
            <rect x="20" y="130" width="200" height="2" fill="#d4cec4" />
            {/* Back wall */}
            <rect x="20" y="30" width="200" height="100" fill="#ede7da" />
            {/* Display counter */}
            <rect x="50" y="95" width="140" height="35" rx="2" fill="#c8bfb2" stroke="#b5ac9e" strokeWidth="1" />
            <rect x="50" y="90" width="140" height="8" rx="1" fill="#ddd6cb" />
            {/* Frame display on counter */}
            <circle cx="95" cy="88" r="8" stroke="#1d2024" strokeWidth="1.8" fill="none" />
            <circle cx="115" cy="88" r="8" stroke="#1d2024" strokeWidth="1.8" fill="none" />
            <path d="M103 86C107 84 111 84 115 86" stroke="#9e7d48" strokeWidth="1.2" strokeLinecap="round" />
            {/* Wall shelves */}
            <rect x="30" y="55" width="80" height="2" fill="#b5ac9e" />
            <rect x="130" y="55" width="80" height="2" fill="#b5ac9e" />
            {/* Shelf items */}
            <rect x="38" y="46" width="14" height="9" rx="1" stroke="#1d2024" strokeWidth="1.2" fill="none" />
            <rect x="58" y="46" width="14" height="9" rx="1" stroke="#1d2024" strokeWidth="1.2" fill="none" />
            <rect x="78" y="46" width="14" height="9" rx="1" stroke="#1d2024" strokeWidth="1.2" fill="none" />
            <rect x="138" y="46" width="14" height="9" rx="1" stroke="#1d2024" strokeWidth="1.2" fill="none" />
            <rect x="158" y="46" width="14" height="9" rx="1" stroke="#1d2024" strokeWidth="1.2" fill="none" />
            <rect x="178" y="46" width="14" height="9" rx="1" stroke="#1d2024" strokeWidth="1.2" fill="none" />
            {/* Signage stripe */}
            <rect x="20" y="30" width="200" height="16" fill="#1A1918" />
            <text x="120" y="42" textAnchor="middle" fontFamily="Georgia, serif" fontSize="8" fill="#FBF9F5" letterSpacing="3">DILIP OPTICALS</text>
          </svg>
        );

      case 'square':
      default:
        return (
          <svg viewBox="0 0 240 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="frame-vector-svg">
            <path
              d="M32 40C32 26 44 18 68 18C92 18 104 26 104 40C104 54 92 62 68 62C44 62 32 54 32 40Z"
              stroke="#1d2024"
              strokeWidth="3.5"
            />
            <path
              d="M136 40C136 26 148 18 172 18C196 18 208 26 208 40C208 54 196 62 172 62C148 62 136 54 136 40Z"
              stroke="#1d2024"
              strokeWidth="3.5"
            />
            <path d="M104 36C114 32 126 32 136 36" stroke="#9e7d48" strokeWidth="3" strokeLinecap="round" />
            <path d="M32 36L10 32" stroke="#9e7d48" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M208 36L230 32" stroke="#9e7d48" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        );
    }
  };

  return (
    <div
      className={`image-placeholder-stage ${className}`}
      style={{ aspectRatio, ...style }}
      role={shouldRenderImage ? undefined : 'img'}
      aria-label={shouldRenderImage ? undefined : alt}
    >
      {badge && <span className="image-placeholder-badge">{badge}</span>}

      {shouldRenderImage ? (
        <img
          src={src}
          alt={alt}
          loading={loading}
          fetchPriority={fetchPriority}
          onError={() => setHasError(true)}
          className="image-placeholder-img"
        />
      ) : (
        <div className="image-placeholder-fallback">
          {/* Subtle grid line backdrop */}
          <div className="image-placeholder-grid" aria-hidden="true" />
          {renderFrameVector()}
          <span className="image-placeholder-brand">DILIP OPTICALS</span>
        </div>
      )}
    </div>
  );
}

export default ImagePlaceholder;
