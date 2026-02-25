'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Users, Wifi, Tv, ShowerHead, Home } from 'lucide-react';

interface RoomImage {
  src: string;
  alt: string;
}

interface RoomCardProps {
  room: {
    id: string;
    type: string;
    slug: string;
    capacity: number;
    description: string;
    amenities: string[];
    images: RoomImage[];
  };
}

const amenityIcons: Record<string, any> = {
  wifi: Wifi,
  tv: Tv,
  shower: ShowerHead,
  balcony: Home,
};

const amenityLabels: Record<string, string> = {
  wifi: 'WiFi',
  tv: 'TV',
  shower: 'Salle de bain',
  balcony: 'Balcon',
};

export function RoomCard({ room }: RoomCardProps) {
  return (
    <div
      className="card-lift overflow-hidden"
      style={{
        background: 'var(--cream)',
        borderRadius: '2px',
        boxShadow: '0 2px 16px rgba(61,43,31,0.10)',
      }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden img-zoom">
        <Image
          src={room.images[0].src}
          alt={room.images[0].alt}
          fill
          className="object-cover"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Textile top stripe */}
        <div className="absolute top-0 left-0 right-0 h-1" style={{
          background: 'repeating-linear-gradient(90deg, #C4551A 0, #C4551A 8px, #D4892A 8px, #D4892A 16px, #2A7B6F 16px, #2A7B6F 24px, #D4892A 24px, #D4892A 32px)'
        }} />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3
            className="text-xl font-bold leading-tight"
            style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}
          >
            {room.type}
          </h3>
          <div
            className="flex items-center gap-1 text-sm ml-3 flex-shrink-0"
            style={{ color: 'var(--warm-brown-light)', fontFamily: "'Crimson Pro', serif" }}
          >
            <Users className="w-4 h-4" />
            <span>{room.capacity} pers.</span>
          </div>
        </div>

        <p
          className="text-sm mb-5 leading-relaxed line-clamp-2"
          style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--warm-brown-light)' }}
        >
          {room.description}
        </p>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-6">
          {room.amenities.map((amenity) => {
            const Icon = amenityIcons[amenity];
            return Icon ? (
              <div
                key={amenity}
                className="flex items-center gap-1.5 px-2.5 py-1 text-xs"
                style={{
                  background: 'rgba(196,85,26,0.08)',
                  color: 'var(--terracotta)',
                  borderRadius: '2px',
                  fontFamily: "'Crimson Pro', serif",
                }}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{amenityLabels[amenity]}</span>
              </div>
            ) : null;
          })}
        </div>

        {/* CTA */}
        <Link href={`/chambres/${room.slug}`}>
          <button
            className="w-full py-3 font-semibold tracking-wide transition-all duration-300 hover:opacity-90 text-sm"
            style={{
              background: 'var(--warm-brown)',
              color: 'var(--cream)',
              borderRadius: '2px',
              fontFamily: "'Playfair Display', serif",
              letterSpacing: '0.05em',
            }}
          >
            Voir les détails →
          </button>
        </Link>
      </div>
    </div>
  );
}