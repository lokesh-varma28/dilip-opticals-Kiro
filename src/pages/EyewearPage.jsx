import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SlidersHorizontal } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';

export function EyewearPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'All Collections' },
    { id: 'titanium', label: 'Bespoke Titanium' },
    { id: 'optical', label: 'Optical Frames' },
    { id: 'sunwear', label: 'Designer Sunwear' },
  ];

  const displayedFrames = selectedCategory === 'all'
    ? siteConfig.sampleFrames
    : siteConfig.sampleFrames.filter((f) => f.category === selectedCategory);

  return (
    <>
      {/* Header Banner */}
      <div className="page-header">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Eyewear Collections</span>
          </nav>

          <SectionHeading
            eyebrow="Curated Eyewear"
            title="Haute Lunetterie & Architectural Silhouettes"
            subtitle="Engineered for discerning vision. Browse our portfolio of ultra-light Japanese titanium, sculptural Italian acetates, and bespoke ophthalmic editions."
            align="left"
            showAccentLine={false}
          />
        </div>
      </div>

      {/* Catalog Layout Shell */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {/* Visual Filter Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              paddingBottom: '1.5rem',
              marginBottom: '2.5rem',
              borderBottom: '1px solid var(--border-subtle)',
            }}
          >
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {filterOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setSelectedCategory(opt.id)}
                  style={{
                    padding: '0.5rem 1.1rem',
                    fontSize: '0.8rem',
                    letterSpacing: 'var(--tracking-wide)',
                    textTransform: 'uppercase',
                    fontFamily: 'var(--font-sans)',
                    borderRadius: 'var(--radius-xs)',
                    border: '1px solid',
                    borderColor: selectedCategory === opt.id ? 'var(--color-text-primary)' : 'var(--border-light)',
                    backgroundColor: selectedCategory === opt.id ? 'var(--color-text-primary)' : 'transparent',
                    color: selectedCategory === opt.id ? '#ffffff' : 'var(--color-text-secondary)',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)',
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              <SlidersHorizontal size={16} />
              <span>Showing {displayedFrames.length} Curated Editions</span>
            </div>
          </div>

          {/* Frames Grid */}
          <div className="grid-3" style={{ marginBottom: '4rem' }}>
            {displayedFrames.map((frame) => (
              <Link
                key={frame.id}
                to={`/eyewear/${frame.id}`}
                className="frame-card"
                aria-label={`View details of ${frame.name}`}
              >
                <div className="frame-image-box">
                  <span className="frame-tag-badge">{frame.tag}</span>
                  {/* Luxury Glasses Vector Silhouette */}
                  <svg viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="55" cy="40" r="22" stroke="#1d2024" strokeWidth="3" />
                    <circle cx="145" cy="40" r="22" stroke="#1d2024" strokeWidth="3" />
                    <path d="M77 38C87 34 113 34 123 38" stroke="#9e7d48" strokeWidth="2.5" />
                    <path d="M33 38L12 34" stroke="#9e7d48" strokeWidth="2" strokeLinecap="round" />
                    <path d="M167 38L188 34" stroke="#9e7d48" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="frame-content">
                  <span className="frame-series">{frame.series}</span>
                  <h3 className="frame-name">{frame.name}</h3>
                  <span className="frame-material">{frame.material}</span>
                  <div className="frame-price-row">
                    <span className="frame-price">{frame.price}</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--color-accent)', fontWeight: '600' }}>
                      View Details →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Consultation Note */}
          <div
            style={{
              padding: '2.5rem',
              backgroundColor: 'var(--color-bg-subtle)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-xs)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.5rem',
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.4rem', color: 'var(--color-text-primary)' }}>
                Bespoke Lens Customization & Prescription Inquiries
              </h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-secondary)', maxWidth: '620px' }}>
                Every frame can be fitted with single-vision, progressive, digital blue-shield, or tinted sunglasses lenses by Carl Zeiss Vision or Essilor in our in-house lab.
              </p>
            </div>
            <Button to="/contact" variant="primary" size="md">
              Inquire with Optometrist
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default EyewearPage;
