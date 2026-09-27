import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import Button from '../common/Button';
import MobileNav from './MobileNav';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hash-based smooth scroll
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        const timer = setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 120);
        return () => clearTimeout(timer);
      }
    }
  }, [location.pathname, location.hash]);

  const handleNavClick = (e, item) => {
    if (item.path === '/#eye-care' && location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById('eye-care');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isEyeCareActive =
    location.pathname === '/' && location.hash === '#eye-care';

  return (
    <>
      <header
        className={`navbar-header${isScrolled ? ' scrolled' : ''}`}
        role="banner"
      >
        <div className="container navbar-container">
          {/* Brand */}
          <Link
            to="/"
            className="brand-link"
            aria-label="Dilip Opticals — Rajahmundry home"
          >
            <span className="brand-title">{siteConfig.brand.name}</span>
            <span className="brand-subtitle" aria-hidden="true">
              {siteConfig.brand.descriptor}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="navbar-nav" aria-label="Main navigation">
            <ul className="nav-links-desktop" role="list">
              {siteConfig.navigation.map((item) => {
                const isAnchor = item.path.includes('#');
                return (
                  <li key={item.path} className="nav-link-item">
                    {isAnchor ? (
                      <Link
                        to={item.path}
                        onClick={(e) => handleNavClick(e, item)}
                        className={isEyeCareActive ? 'active' : ''}
                        aria-current={isEyeCareActive ? 'page' : undefined}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <NavLink
                        to={item.path}
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        end={item.path === '/'}
                      >
                        {item.label}
                      </NavLink>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Actions */}
          <div className="navbar-actions">
            <Link
              to="/stores"
              className="navbar-icon-btn d-none d-sm-inline-flex"
              aria-label="Visit our Rajahmundry store"
              title="Store location"
            >
              <MapPin size={16} strokeWidth={1.8} aria-hidden="true" />
            </Link>

            <Button
              to="/contact"
              variant="primary"
              size="sm"
              className="navbar-consult-btn"
              id="navbar-book-test-cta"
            >
              Book Eye Test
            </Button>

            <button
              type="button"
              className={`hamburger-btn${mobileMenuOpen ? ' open' : ''}`}
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              <span className="hamburger-line line-1" aria-hidden="true" />
              <span className="hamburger-line line-2" aria-hidden="true" />
              <span className="hamburger-line line-3" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}

export default Navbar;
