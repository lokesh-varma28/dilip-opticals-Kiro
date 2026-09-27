import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable Button — renders as <button>, <Link>, or <a> depending on props.
 * Supports all design system variants and sizes.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  type = 'button',
  icon: Icon,
  iconPosition = 'right',
  fullWidth = false,
  disabled = false,
  className = '',
  id,
  target,
  rel,
  style,
  ...rest
}) {
  const iconSize = size === 'sm' ? 13 : size === 'lg' ? 17 : 15;

  const classes = [
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    fullWidth ? 'btn-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <span className="btn-icon btn-icon-left" aria-hidden="true">
          <Icon size={iconSize} strokeWidth={1.8} />
        </span>
      )}
      <span className="btn-text">{children}</span>
      {Icon && iconPosition === 'right' && (
        <span className="btn-icon btn-icon-right" aria-hidden="true">
          <Icon size={iconSize} strokeWidth={1.8} />
        </span>
      )}
    </>
  );

  if (to && !disabled) {
    return (
      <Link to={to} className={classes} id={id} style={style} {...rest}>
        {content}
      </Link>
    );
  }

  if (href && !disabled) {
    return (
      <a
        href={href}
        className={classes}
        id={id}
        style={style}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
      id={id}
      style={style}
      {...rest}
    >
      {content}
    </button>
  );
}

export default Button;
