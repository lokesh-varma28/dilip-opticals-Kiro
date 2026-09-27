import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Button from '../components/common/Button';

export function NotFoundPage() {
  return (
    <div
      className="container"
      style={{
        textAlign: 'center',
        padding: 'clamp(5rem, 10vw, 8rem) 1rem',
      }}
    >
      <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
        <span className="section-eyebrow-line" aria-hidden="true" />
        <span>404 Not Found</span>
        <span className="section-eyebrow-line" aria-hidden="true" />
      </div>

      <h1
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          marginBottom: '1rem',
        }}
      >
        Vision Beyond Horizons
      </h1>

      <p
        style={{
          color: 'var(--color-text-secondary)',
          maxWidth: '480px',
          margin: '0 auto 2.5rem auto',
          lineHeight: '1.7',
        }}
      >
        The page you are looking for has been moved or does not exist in our current collection catalog.
      </p>

      <Button to="/" variant="primary" size="lg" icon={ArrowLeft} iconPosition="left">
        Return to Atelier Home
      </Button>
    </div>
  );
}

export default NotFoundPage;
