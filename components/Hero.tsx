'use client';

import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { AndeanButton } from './AndeanButton';
import hotelData from '@/data/hotel.json';

const WhatsAppIcon = (
  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

interface HeroProps {
  whatsappMessage: string;
}

export function Hero({ whatsappMessage }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={hotelData.hero.image.src}
          alt={hotelData.hero.image.alt}
          fill
          className="object-cover"
          priority
        />
        <div className="hero-overlay absolute inset-0" />
        {/* Andean geometric top border */}
        <div
          className="absolute top-0 left-0 right-0 h-3 z-10"
          style={{
            background:
              'repeating-linear-gradient(90deg, #C4551A 0px, #C4551A 16px, #D4892A 16px, #D4892A 32px, #2A7B6F 32px, #2A7B6F 48px, #D4892A 48px, #D4892A 64px)',
          }}
        />
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        {/* Kichwa-inspired ornament */}
        <div className="flex items-center justify-center gap-4 mb-6 fade-in-up delay-1">
          <div className="h-px w-16 opacity-60" style={{ background: 'var(--ochre)' }} />
          <span
            className="text-sm tracking-[0.35em] uppercase opacity-80"
            style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--ochre-light)' }}
          >
            Otavalo · Ecuador
          </span>
          <div className="h-px w-16 opacity-60" style={{ background: 'var(--ochre)' }} />
        </div>

        <h1
          className="text-6xl md:text-8xl font-bold mb-4 tracking-tight fade-in-up delay-2"
          style={{
            fontFamily: "'Playfair Display', serif",
            textShadow: '0 2px 30px rgba(0,0,0,0.4)',
          }}
        >
          {hotelData.name}
        </h1>

        <p
          className="text-xl md:text-2xl mb-3 font-light italic fade-in-up delay-3"
          style={{
            fontFamily: "'Crimson Pro', serif",
            color: 'var(--ochre-light)',
            letterSpacing: '0.05em',
          }}
        >
          {hotelData.tagline}
        </p>

        <p
          className="text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed fade-in-up delay-4"
          style={{ color: 'rgba(245,239,224,0.88)', fontFamily: "'Crimson Pro', serif" }}
        >
          {hotelData.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in-up delay-4">
          <AndeanButton href="#chambres">Descubrir habitaciones</AndeanButton>

          <AndeanButton
            variant="outline"
            onClick={() =>
              window.open(
                `https://wa.me/593995941029?text=${encodeURIComponent(whatsappMessage)}`,
                '_blank'
              )
            }
            icon={WhatsAppIcon}
          >
            Reservar por WhatsApp
          </AndeanButton>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="scroll-indicator absolute bottom-8 left-1/2"
        style={{ transform: 'translateX(-50%)' }}
      >
        <ChevronDown className="w-8 h-8 opacity-60" style={{ color: 'var(--ochre-light)' }} />
      </div>
    </section>
  );
}