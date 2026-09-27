import React, { useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../../data/siteConfig';
import Button from '../common/Button';

export function MobileNav({ isOpen, onClose }) {
  const location = useLocation();

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Escape key close
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape' && isOpen) onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  const handleLinkClick = (e, path) => {
    onClose();
    if (path === '/#eye-care' && location.pathname === '/') {
      e.preventDefault();
      setTimeout(() => {
        const el = document.getElementById('eye-care');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    }
  };

  const drawerVariants = {
    hidden: { x: '100%' },
    visible: {
      x: 0,
      transition: { duration: 0.38, ease: [0.16, 1, 0.3, 1] },
    },
    exit: {
      x: '100%',
      transition: { duration: 0.28, ease: [0.4, 0, 1, 1] },
    },
  };

  const listVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.05, delayChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 16 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-nav-backdrop open"
            onClick={onClose}
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-nav-drawer open"
            aria-label="Mobile navigation"
            role="dialog"
            aria-modal="true"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Brand identity header */}
            <div className="mobile-brand-box">
              <span className="brand-title">{siteConfig.brand.name}</span>
              <span className="brand-subtitle">Rajahmundry, Andhra Pradesh</span>
            </div>

            {/* Nav links */}
            <motion.ul
              className="mobile-nav-links"
              variants={listVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.li variants={itemVariants}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive && !location.hash ? 'active' : ''
                  }
                  onClick={onClose}
                  end
                >
                  Home
                </NavLink>
              </motion.li>

              {siteConfig.navigation.map((item) => {
                const isAnchor = item.path.includes('#');
                return (
                  <motion.li key={item.path} variants={itemVariants}>
                    {isAnchor ? (
                      <Link
                        to={item.path}
                        onClick={(e) => handleLinkClick(e, item.path)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <NavLink
                        to={item.path}
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        onClick={onClose}
                        end={item.path === '/'}
                      >
                        {item.label}
                      </NavLink>
                    )}
                  </motion.li>
                );
              })}
            </motion.ul>

            {/* Footer CTA */}
            <div className="mobile-nav-footer">
              <Button
                to="/contact"
                variant="primary"
                size="md"
                fullWidth
                onClick={onClose}
                id="mobile-book-test-cta"
              >
                Book an Eye Test
              </Button>

              <Link
                to="/stores"
                className="mobile-contact-card"
                onClick={onClose}
                aria-label="View our Rajahmundry store location"
              >
                <span className="mobile-contact-line">
                  <MapPin size={14} aria-hidden="true" />
                  <span>Rajahmundry, Andhra Pradesh</span>
                </span>
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

export default MobileNav;
