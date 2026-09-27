import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ShieldCheck, HeartHandshake, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';

export function AboutPage() {
  const { heritageStory } = siteConfig;

  return (
    <>
      {/* Header Banner */}
      <div className="page-header">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Our Story</span>
          </nav>

          <SectionHeading
            eyebrow={heritageStory.subtitle}
            title={heritageStory.title}
            subtitle="Four decades of dedication to the craft of ophthalmic calibration, master opticianry, and architectural eyewear design."
            align="left"
            showAccentLine={false}
          />
        </div>
      </div>

      {/* Main Heritage Narrative */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', marginBottom: '5rem' }}>
            <div>
              <div className="section-eyebrow">
                <span className="section-eyebrow-line" aria-hidden="true" />
                <span>The Founding Vision</span>
              </div>
              <h2 className="section-title" style={{ fontSize: '2.2rem', marginBottom: '1.25rem' }}>
                Eyewear as Facial Architecture
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.75', color: 'var(--color-text-secondary)', marginBottom: '1.25rem' }}>
                {heritageStory.foundingNarrative}
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.75', color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
                {heritageStory.craftPhilosophy}
              </p>

              <div
                style={{
                  borderLeft: '2px solid var(--color-accent)',
                  paddingLeft: '1.5rem',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.2rem',
                  fontStyle: 'italic',
                  color: 'var(--color-text-primary)',
                  lineHeight: '1.6',
                }}
              >
                {heritageStory.masterOpticiansNote}
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div
                style={{
                  borderRadius: 'var(--radius-xs)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-luxury)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <img
                  src="/images/hero_eyewear.jpg"
                  alt="Precision crafted Japanese titanium eyewear by Dilip Opticals"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>

          {/* Core Values / Craftsmanship Standards */}
          <div style={{ marginBottom: '5rem' }}>
            <SectionHeading
              eyebrow="Our Commitments"
              title="Principles We Never Compromise"
              align="center"
            />

            <div className="grid-3">
              <div
                style={{
                  padding: '2.25rem',
                  background: 'var(--color-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-xs)',
                }}
              >
                <Award size={28} color="var(--color-accent)" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.6rem' }}>Clinical Refraction Standard</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: '1.6', margin: 0 }}>
                  We dedicate a minimum of 40 minutes per eye examination. Our optometrists measure binocular coordination, corneal thickness, and night-vision pupillary expansion.
                </p>
              </div>

              <div
                style={{
                  padding: '2.25rem',
                  background: 'var(--color-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-xs)',
                }}
              >
                <ShieldCheck size={28} color="var(--color-accent)" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.6rem' }}>Honest Material Provenance</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: '1.6', margin: 0 }}>
                  We reject injected plastics and fragile pot metals. Every frame is wrought from pure medical-grade beta-titanium, buffalo horn, or genuine cotton-derived Mazzucchelli bio-acetate.
                </p>
              </div>

              <div
                style={{
                  padding: '2.25rem',
                  background: 'var(--color-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-xs)',
                }}
              >
                <HeartHandshake size={28} color="var(--color-accent)" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.6rem' }}>Lifetime Custodianship</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: '1.6', margin: 0 }}>
                  Our relationship does not end at delivery. Every Dilip Opticals frame enjoys lifetime ultrasonic sanitization, screw replacement, and ergonomic nose pad rebalancing.
                </p>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div
            style={{
              padding: '3rem',
              backgroundColor: 'var(--color-dark-bg)',
              color: 'var(--color-dark-text-primary)',
              borderRadius: 'var(--radius-xs)',
              textAlign: 'center',
            }}
          >
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: '#ffffff', marginBottom: '0.75rem' }}>
              Experience Dilip Opticals in Person
            </h3>
            <p style={{ color: 'var(--color-dark-text-secondary)', maxWidth: '560px', margin: '0 auto 2rem auto', fontSize: '1rem', lineHeight: '1.7' }}>
              Visit our store in Rajahmundry for personalized eye testing and curated frame fittings.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Button to="/stores" variant="accent" size="lg" icon={ArrowRight}>
                Visit Our Store
              </Button>
              <Button to="/contact" variant="light-outline" size="lg">
                Book an Eye Test
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
