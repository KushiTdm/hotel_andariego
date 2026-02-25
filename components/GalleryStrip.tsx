'use client';

import Image from 'next/image';
import hotelData from '@/data/hotel.json';

export function GalleryStrip() {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: 'var(--warm-brown)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {hotelData.galleryStrip.map((image, i) => (
            <div key={i} className="relative h-48 md:h-64 rounded-sm overflow-hidden img-zoom">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{ background: 'linear-gradient(to top, rgba(61,43,31,0.5), transparent)' }}
              />
            </div>
          ))}
        </div>
        <p
          className="text-center mt-6 text-sm uppercase tracking-[0.3em]"
          style={{ color: 'var(--ochre-light)', fontFamily: "'Crimson Pro', serif" }}
        >
          Otavalo · Imbabura · Ecuador
        </p>
      </div>
    </section>
  );
}