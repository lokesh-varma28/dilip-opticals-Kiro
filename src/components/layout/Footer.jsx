import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import Button from '../common/Button';

function InstagramIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="row g-4 g-lg-5 footer-top">

          {/* ── Brand column ──────────────────────────────────────────── */}
          <div className="col-12 col-md-6 col-lg-4 footer-brand">
            <div>
              <div className="footer-brand-title">{siteConfig.brand.name}</div>
              <div className="footer-brand-subtitle">{siteConfig.brand.descriptor}</div>
            </div>

            <p className="footer-tagline">
              Precision prescription eyewear, eye testing, and curated frames
              in Rajahmundry, Andhra Pradesh.
            </p>

            <div className="footer-badges">
              <span className="footer-badge">Rajahmundry</span>
              <span className="footer-badge">Prescription Eyewear</span>
              <span className="footer-badge">Eye Testing</span>
            </div>

            <div className="footer-social-wrap">
              <span className="footer-social-label">Connect</span>
              <div className="footer-social-links">
                <a
                  href="#instagram-placeholder"
                  className="footer-social-icon"
                  aria-label="Dilip Opticals on Instagram (placeholder)"
                  title="Instagram (placeholder)"
                >
                  <InstagramIcon size={15} />
                </a>
                <a
                  href="#whatsapp-placeholder"
                  className="footer-social-icon"
                  aria-label="Dilip Opticals on WhatsApp (placeholder)"
                  title="WhatsApp (placeholder)"
                >
                  <MessageCircle size={15} aria-hidden="true" />
                </a>
                <a
                  href={`mailto:${siteConfig.brand.contactEmail}`}
                  className="footer-social-icon"
                  aria-label="Email Dilip Opticals"
                  title="Email us"
                >
                  <Mail size={15} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* ── Quick Links ───────────────────────────────────────────── */}
          <nav className="col-6 col-md-3 col-lg-2" aria-label="Site navigation">
            <h3 className="footer-column-title">Navigate</h3>
            <ul className="footer-nav-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/eyewear">Eyewear</Link></li>
              <li><Link to="/#eye-care">Eye Care</Link></li>
              <li><Link to="/stores">Store</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>

          {/* ── Eyewear Categories ────────────────────────────────────── */}
          <nav className="col-6 col-md-3 col-lg-2" aria-label="Eyewear categories">
            <h3 className="footer-column-title">Collections</h3>
            <ul className="footer-nav-list">
              <li><Link to="/eyewear?category=optical">Optical Frames</Link></li>
              <li><Link to="/eyewear?category=sunwear">Sunglasses</Link></li>
              <li><Link to="/eyewear?category=mens">Men's Eyewear</Link></li>
              <li><Link to="/eyewear?category=womens">Women's Eyewear</Link></li>
              <li><Link to="/eyewear?category=kids">Kids Eyewear</Link></li>
            </ul>
          </nav>

          {/* ── Store & Contact ───────────────────────────────────────── */}
          <div className="col-12 col-md-6 col-lg-4">
            <h3 className="footer-column-title">Rajahmundry Store</h3>
            <address className="footer-store-details" style={{ fontStyle: 'normal' }}>
              <div className="footer-contact-item">
                <MapPin size={15} className="footer-icon" aria-hidden="true" />
                <span>Rajahmundry, Andhra Pradesh</span>
              </div>
              <div className="footer-contact-item">
                <Phone size={15} className="footer-icon" aria-hidden="true" />
                <span>{siteConfig.brand.contactPhone}</span>
              </div>
              <div className="footer-contact-item">
                <Mail size={15} className="footer-icon" aria-hidden="true" />
                <span>{siteConfig.brand.contactEmail}</span>
              </div>
            </address>

            {/* Newsletter */}
            <div className="footer-newsletter-wrap">
              <span className="footer-newsletter-label">
                Frame updates
              </span>
              {subscribed ? (
                <div className="footer-subscribed-msg" role="status">
                  <CheckCircle2 size={15} aria-hidden="true" />
                  <span>Thank you for staying in touch.</span>
                </div>
              ) : (
                <form
                  className="footer-form"
                  onSubmit={handleSubscribe}
                  aria-label="Subscribe for store updates"
                >
                  <input
                    type="email"
                    className="footer-input"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-label="Email address for store updates"
                    autoComplete="email"
                  />
                  <Button
                    type="submit"
                    variant="accent"
                    size="sm"
                    icon={ArrowRight}
                    aria-label="Subscribe to updates"
                  >
                    Join
                  </Button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* ── Footer bottom bar ─────────────────────────────────────── */}
        <div className="row align-items-center justify-content-between pt-4 footer-bottom">
          <div className="col-12 col-md-auto mb-2 mb-md-0">
            <p className="mb-0">
              © {currentYear} {siteConfig.brand.name} — Rajahmundry.
            </p>
          </div>
          <div className="col-12 col-md-auto">
            <ul className="footer-bottom-links mb-0">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/stores">Store</Link></li>
              <li><Link to="/contact">Book Eye Test</Link></li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
