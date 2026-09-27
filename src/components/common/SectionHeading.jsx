import React from 'react';

/**
 * Reusable SectionHeading — eyebrow + title + optional subtitle + optional action.
 * align: 'left' | 'center' | 'right'
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  as: HeadingTag = 'h2',
  showAccentLine = true,
  className = '',
  action,
  id,
}) {
  const containerClass = [
    'section-heading',
    `section-heading-${align}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClass}>
      {eyebrow && (
        <div className="section-eyebrow">
          {showAccentLine && align !== 'right' && (
            <span className="section-eyebrow-line" aria-hidden="true" />
          )}
          <span>{eyebrow}</span>
          {showAccentLine && align === 'right' && (
            <span className="section-eyebrow-line" aria-hidden="true" />
          )}
        </div>
      )}

      {title && (
        <HeadingTag className="section-title" id={id}>
          {title}
        </HeadingTag>
      )}

      {subtitle && (
        <p className="section-subtitle">{subtitle}</p>
      )}

      {action && (
        <div style={{ marginTop: 'var(--space-5)' }}>{action}</div>
      )}
    </div>
  );
}

export default SectionHeading;
