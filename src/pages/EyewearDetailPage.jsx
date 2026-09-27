import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, ShieldCheck, Check, Truck, RotateCcw } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import Button from '../components/common/Button';

export function EyewearDetailPage() {
  const { id } = useParams();

  // Find frame by route param ID, or fallback to first sample frame
  const frame = siteConfig.sampleFrames.find((f) => f.id === id) || siteConfig.sampleFrames[0];

  return (
    <>
      {/* Breadcrumb Navigation */}
      <div className="page-header" style={{ paddingBottom: '2rem', marginBottom: '2rem' }}>
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/eyewear">Eyewear</Link>
            <span>/</span>
            <span style={{ color: 'var(--color-text-primary)', fontWeight: '500' }}>{frame.name}</span>
          </nav>

          <Link
            to="/eyewear"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.82rem',
              color: 'var(--color-accent)',
              textTransform: 'uppercase',
              letterSpacing: 'var(--tracking-wider)',
              fontWeight: '600',
            }}
          >
            <ArrowLeft size={16} /> Back to Collection
          </Link>
        </div>
      </div>

      {/* Frame Detail Presentation Stage */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="frame-detail-layout">
            {/* Gallery Stage */}
            <div>
              <div className="frame-gallery-stage">
                {/* Architectural Eyewear Display */}
                <svg viewBox="0 0 240 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '85%', maxWidth: '420px' }}>
                  <rect x="25" y="25" width="75" height="50" rx="12" stroke="#1d2024" strokeWidth="4" />
                  <rect x="140" y="25" width="75" height="50" rx="12" stroke="#1d2024" strokeWidth="4" />
                  <path d="M100 45C110 40 130 40 140 45" stroke="#9e7d48" strokeWidth="3" strokeLinecap="round" />
                  <path d="M25 45L8 40" stroke="#9e7d48" strokeWidth="3" strokeLinecap="round" />
                  <path d="M215 45L232 40" stroke="#9e7d48" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>

              {/* Assurance Badges */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1rem',
                  marginTop: '1.5rem',
                  textAlign: 'center',
                }}
              >
                <div style={{ padding: '1rem', background: 'var(--color-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xs)' }}>
                  <ShieldCheck size={20} color="var(--color-accent)" style={{ margin: '0 auto 6px auto' }} />
                  <div style={{ fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase' }}>2-Year Warranty</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>Titanium & Hinges</div>
                </div>

                <div style={{ padding: '1rem', background: 'var(--color-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xs)' }}>
                  <Truck size={20} color="var(--color-accent)" style={{ margin: '0 auto 6px auto' }} />
                  <div style={{ fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase' }}>Insured Delivery</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>White-glove courier</div>
                </div>

                <div style={{ padding: '1rem', background: 'var(--color-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xs)' }}>
                  <RotateCcw size={20} color="var(--color-accent)" style={{ margin: '0 auto 6px auto' }} />
                  <div style={{ fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase' }}>Lifetime Tuning</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>Free at all salons</div>
                </div>
              </div>
            </div>

            {/* Frame Specifications & Inquiry Panel */}
            <div>
              <div style={{ marginBottom: '1.5rem' }}>
                <span className="frame-series" style={{ fontSize: '0.8rem', display: 'block', marginBottom: '6px' }}>
                  {frame.series}
                </span>
                <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', margin: '0 0 0.75rem 0', fontFamily: 'var(--font-serif)' }}>
                  {frame.name}
                </h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '1.4rem', fontFamily: 'var(--font-sans)', fontWeight: '600', color: 'var(--color-text-primary)' }}>
                    {frame.price}
                  </span>
                  <span style={{ fontSize: '0.75rem', padding: '3px 8px', background: 'var(--color-accent-soft)', color: 'var(--color-accent)', borderRadius: '2px', fontWeight: '600', textTransform: 'uppercase' }}>
                    {frame.tag}
                  </span>
                </div>
                <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--color-text-secondary)', margin: 0 }}>
                  {frame.description}
                </p>
              </div>

              {/* Key Features */}
              <div style={{ margin: '1.5rem 0' }}>
                <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: 'var(--tracking-eyebrow)', color: 'var(--color-text-primary)', marginBottom: '0.75rem' }}>
                  Craftsmanship Hallmarks
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
                  {frame.features.map((feat, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                      <Check size={14} color="var(--color-accent)" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications Table */}
              <table className="frame-specs-table" aria-label="Technical Specifications">
                <tbody>
                  <tr>
                    <td>Dimensions</td>
                    <td>{frame.dimensions}</td>
                  </tr>
                  <tr>
                    <td>Total Weight</td>
                    <td>{frame.weight}</td>
                  </tr>
                  <tr>
                    <td>Base Material</td>
                    <td>{frame.material}</td>
                  </tr>
                  <tr>
                    <td>Color Finish</td>
                    <td>{frame.colorway}</td>
                  </tr>
                  <tr>
                    <td>Lens Capability</td>
                    <td>Progressive, Single-Vision, Tinted, 1.74 High-Index</td>
                  </tr>
                </tbody>
              </table>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '2rem' }}>
                <Button
                  to="/contact"
                  variant="primary"
                  size="lg"
                  icon={Calendar}
                  fullWidth
                >
                  Schedule Private Fitting in Salon
                </Button>
                <Button
                  to="/stores"
                  variant="secondary"
                  size="md"
                  fullWidth
                >
                  Locate This Frame in Boutiques
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EyewearDetailPage;
