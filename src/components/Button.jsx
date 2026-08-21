import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable Button component with smooth Left-to-Right Hover Fill effect
 * 
 * @param {string} variant - Base styling variant ('teal', 'coral', 'dark', 'outline', 'white')
 * @param {string} fillVariant - The fill color on hover ('coral' (#ff7f50), 'teal' (#5d9c95), 'dark', 'white')
 * @param {string} to - Optional route path (renders as <Link> if provided)
 * @param {string} href - Optional external link (renders as <a> if provided)
 * @param {string} className - Additional custom Tailwind/CSS classes
 */
export default function Button({
  children,
  variant = 'teal',
  fillVariant = 'coral',
  to,
  href,
  onClick,
  className = '',
  type = 'button',
  ...props
}) {
  // Base variant backgrounds & text
  const variantStyles = {
    teal: 'bg-[#5d9c95] text-white',
    coral: 'bg-[#ff7f50] text-white',
    dark: 'bg-[#222222] text-white',
    outline: 'bg-transparent border-2 border-[#5d9c95] text-[#5d9c95] hover:text-white hover:border-[#ff7f50]',
    white: 'bg-white text-slate-800 shadow-md',
  };

  // Fill effect mapping to CSS class
  const fillClassMap = {
    coral: 'btn-fill-coral',
    teal: 'btn-fill-teal',
    dark: 'btn-fill-dark',
    white: 'btn-fill-white',
  };

  const selectedFillClass = fillClassMap[fillVariant] || 'btn-fill-coral';
  const baseVariantClass = variantStyles[variant] || variantStyles.teal;

  const combinedClasses = `
    ${baseVariantClass}
    ${selectedFillClass}
    font-bold px-8 py-3.5 rounded-lg text-lg
    cursor-pointer select-none
    ${className}
  `.trim().replace(/\s+/g, ' ');

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses} {...props}>
      <span className="relative z-10">{children}</span>
    </button>
  );
}
