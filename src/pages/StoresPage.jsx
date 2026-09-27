import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Sparkles, Check, Calendar } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';

export function StoresPage() {
  return (
    <>
      {/* Header Banner */}
      <div className="page-header">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Store Location</span>
          </nav>

          <SectionHeading
            eyebrow="Rajahmundry Store"
            title="Visit Dilip Opticals"
            subtitle="Visit our store in Rajahmundry for accurate refraction checks, frame adjustments, and personalized eyewear consultations."
            align="left"
            showAccentLine={false}
          />
        </div>
      </div>

      {/* Stores Grid */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ maxWidth: '640px', marginBottom: '4rem' }}>
            {siteConfig.boutiques.map((store) => (
              <div key={store.id} className="store-card">
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span className="store-city">{store.city}</span>
                    <span
                      style={{
                        fontSize: '0.68rem',
                        padding: '2px 8px',
                        background: 'var(--color-accent-soft)',
                        color: 'var(--color-accent)',
                        borderRadius: '2px',
                        fontWeight: '600',
                        letterSpacing: 'var(--tracking-wider)',
                        textTransform: 'uppercase',
                      }}
                    >
                      Main Store
                    </span>
                  </div>
                  <h3 className="store-name">{store.name}</h3>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                    {store.neighborhood}
                  </div>
                </div>

                <div className="store-detail-item">
                  <MapPin size={18} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <p className="store-address">{store.address}</p>
                </div>

                <div className="store-detail-item">
                  <Phone size={16} color="var(--color-accent)" style={{ flexShrink: 0 }} />
                  <a href={`tel:${store.phone.replace(/[^0-9+]/g, '')}`} style={{ color: 'inherit', fontWeight: '500' }}>
                    {store.phone}
                  </a>
                </div>

                <div className="store-detail-item">
                  <Clock size={16} color="var(--color-accent)" style={{ flexShrink: 0 }} />
                  <span>{store.hours}</span>
                </div>

                {/* Amenities List */}
                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem', marginTop: 'auto' }}>
                  <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: 'var(--tracking-eyebrow)', color: 'var(--color-text-muted)', marginBottom: '0.6rem' }}>
                    In-Store Services
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {store.amenities.map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: 'var(--color-text-secondary)' }}>
                        <Check size={13} color="var(--color-accent)" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  to="/contact"
                  variant="primary"
                  size="md"
                  fullWidth
                  icon={Calendar}
                >
                  Book an Eye Test
                </Button>
              </div>
            ))}
          </div>

          {/* Store Atmosphere Banner */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
              padding: '3rem',
              background: '#f4efe8',
              borderRadius: 'var(--radius-xs)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <div>
              <div className="section-eyebrow">
                <Sparkles size={14} color="var(--color-accent)" />
                <span>Personal Care</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '1rem' }}>
                Complimentary Frame Alignment & Adjustments
              </h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Every pair of spectacles deserves comfortable alignment. Visit Dilip Opticals in Rajahmundry for ultrasound cleaning, temple curvature adjustment, and nose pad replacement.
              </p>
              <Button to="/contact" variant="primary" size="md">
                Book an Eye Test
              </Button>
            </div>

            <div style={{ borderRadius: 'var(--radius-xs)', overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}>
              <img
                src="/images/boutique_interior.jpg"
                alt="Dilip Opticals showroom interior"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default StoresPage;
