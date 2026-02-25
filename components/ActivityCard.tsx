'use client';

import Image from 'next/image';

interface ActivityCardProps {
  name: string;
  image: string;
  imageAlt: string;
  description: string;
  walk: string | null;
  car: string | null;
  color: string;
  highlight?: boolean;
}

export function ActivityCard({
  name,
  image,
  imageAlt,
  description,
  walk,
  car,
  color,
  highlight = false,
}: ActivityCardProps) {
  return (
    <div
      className="card-lift overflow-hidden group"
      style={{
        borderRadius: '2px',
        background: 'white',
        boxShadow: highlight
          ? '0 4px 24px rgba(196,85,26,0.18)'
          : '0 2px 12px rgba(61,43,31,0.08)',
      }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Colored top border */}
        <div className="absolute top-0 left-0 right-0 h-1 z-10" style={{ background: color }} />
        {/* Woven band */}
        <div
          className="absolute top-1 left-0 right-0 h-0.5 z-10"
          style={{
            background:
              'repeating-linear-gradient(90deg, var(--terracotta) 0, var(--terracotta) 8px, var(--ochre) 8px, var(--ochre) 16px, var(--teal) 16px, var(--teal) 24px, var(--ochre) 24px, var(--ochre) 32px)',
          }}
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Accent line */}
        <div className="w-8 h-0.5 mb-3" style={{ background: color }} />
        <h3
          className="text-xl font-bold leading-tight mb-2"
          style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}
        >
          {name}
        </h3>
        <p
          className="text-sm mb-4 leading-relaxed"
          style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--warm-brown-light)' }}
        >
          {description}
        </p>

        {/* Distance badges */}
        <div className="flex flex-wrap gap-2">
          {walk && (
            <div
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm"
              style={{
                background: 'rgba(196,85,26,0.08)',
                border: '1px solid rgba(196,85,26,0.15)',
              }}
            >
              <span className="text-base">🚶</span>
              <span
                className="text-sm font-semibold"
                style={{ fontFamily: "'Playfair Display', serif", color: 'var(--terracotta)' }}
              >
                {walk}
              </span>
              <span
                className="text-xs"
                style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--warm-brown-light)' }}
              >
                a pie
              </span>
            </div>
          )}
          {car && (
            <div
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm"
              style={{
                background: 'rgba(42,123,111,0.08)',
                border: '1px solid rgba(42,123,111,0.15)',
              }}
            >
              <span className="text-base">🚗</span>
              <span
                className="text-sm font-semibold"
                style={{ fontFamily: "'Playfair Display', serif", color: 'var(--teal)' }}
              >
                {car}
              </span>
              <span
                className="text-xs"
                style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--warm-brown-light)' }}
              >
                en carro
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}