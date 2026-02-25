'use client';

import Link from 'next/link';

interface AndeanButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  size?: 'default' | 'lg';
  className?: string;
  icon?: React.ReactNode;
}

export function AndeanButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'default',
  className = '',
  icon,
}: AndeanButtonProps) {
  const isPrimary = variant === 'primary';
  const baseBg = isPrimary ? 'rgba(196,85,26,0.82)' : 'rgba(255,255,255,0.06)';
  const hoverBg = isPrimary ? 'rgba(196,85,26,0.95)' : 'rgba(255,255,255,0.1)';
  const borderColor = isPrimary ? 'rgba(212,137,42,0.6)' : 'rgba(245,239,224,0.5)';
  const innerBorderColor = isPrimary ? 'rgba(212,137,42,0.25)' : 'rgba(245,239,224,0.18)';
  const diamondColor = isPrimary ? 'var(--ochre)' : 'rgba(245,239,224,0.6)';

  const gradientPattern = isPrimary
    ? 'repeating-linear-gradient(90deg, var(--terracotta) 0, var(--terracotta) 5px, var(--ochre) 5px, var(--ochre) 10px, var(--teal) 10px, var(--teal) 15px, var(--ochre) 15px, var(--ochre) 20px)'
    : 'repeating-linear-gradient(90deg, rgba(245,239,224,0.5) 0, rgba(245,239,224,0.5) 5px, rgba(212,137,42,0.5) 5px, rgba(212,137,42,0.5) 10px, rgba(42,123,111,0.5) 10px, rgba(42,123,111,0.5) 15px, rgba(212,137,42,0.5) 15px, rgba(212,137,42,0.5) 20px)';

  const buttonContent = (
    <button
      onClick={onClick}
      className={`group relative overflow-hidden ${className}`}
      style={{
        fontFamily: "'Playfair Display', serif",
        letterSpacing: '0.18em',
        fontSize: size === 'lg' ? '14px' : '13px',
        width: size === 'lg' ? '100%' : 'auto',
      }}
    >
      {/* Outer decorative border */}
      <span
        className="absolute inset-0 pointer-events-none"
        style={{ border: `1px solid ${borderColor}`, margin: '3px' }}
      />
      {/* Inner decorative border */}
      <span
        className="absolute inset-0 pointer-events-none"
        style={{ border: `1px solid ${innerBorderColor}` }}
      />
      {/* Corner diamonds */}
      <span
        className="absolute top-0 left-0 w-3 h-3 flex items-center justify-center -translate-x-0.5 -translate-y-0.5"
        style={{ color: diamondColor, fontSize: '9px', lineHeight: 1 }}
      >
        ◆
      </span>
      <span
        className="absolute top-0 right-0 w-3 h-3 flex items-center justify-center translate-x-0.5 -translate-y-0.5"
        style={{ color: diamondColor, fontSize: '9px', lineHeight: 1 }}
      >
        ◆
      </span>
      <span
        className="absolute bottom-0 left-0 w-3 h-3 flex items-center justify-center -translate-x-0.5 translate-y-0.5"
        style={{ color: diamondColor, fontSize: '9px', lineHeight: 1 }}
      >
        ◆
      </span>
      <span
        className="absolute bottom-0 right-0 w-3 h-3 flex items-center justify-center translate-x-0.5 translate-y-0.5"
        style={{ color: diamondColor, fontSize: '9px', lineHeight: 1 }}
      >
        ◆
      </span>
      {/* Top gradient line */}
      <span
        className="absolute top-0 left-4 right-4 h-0.5"
        style={{ background: gradientPattern }}
      />
      {/* Bottom gradient line */}
      <span
        className="absolute bottom-0 left-4 right-4 h-0.5"
        style={{
          background: isPrimary
            ? 'repeating-linear-gradient(90deg, var(--teal) 0, var(--teal) 5px, var(--ochre) 5px, var(--ochre) 10px, var(--terracotta) 10px, var(--terracotta) 15px, var(--ochre) 15px, var(--ochre) 20px)'
            : 'repeating-linear-gradient(90deg, rgba(42,123,111,0.5) 0, rgba(42,123,111,0.5) 5px, rgba(212,137,42,0.5) 5px, rgba(212,137,42,0.5) 10px, rgba(245,239,224,0.5) 10px, rgba(245,239,224,0.5) 15px, rgba(212,137,42,0.5) 15px, rgba(212,137,42,0.5) 20px)',
        }}
      />
      {/* Background layers */}
      <span
        className="absolute inset-0"
        style={{ background: baseBg, backdropFilter: isPrimary ? 'none' : 'blur(8px)' }}
      />
      <span
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: hoverBg }}
      />
      {/* Content */}
      <span
        className="relative flex items-center justify-center gap-3 px-10 py-4 uppercase font-semibold tracking-widest"
        style={{ color: 'var(--cream)' }}
      >
        {icon}
        {children}
      </span>
    </button>
  );

  if (href) {
    return <Link href={href}>{buttonContent}</Link>;
  }

  return buttonContent;
}