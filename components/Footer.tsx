'use client';

import Image from 'next/image';
import { Instagram, Facebook } from 'lucide-react';
import hotelData from '@/data/hotel.json';

const TikTokIcon = (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
  </svg>
);

export function Footer() {
  return (
    <footer
      className="relative textile-border-top pt-8"
      style={{ background: 'var(--warm-brown)', color: 'var(--cream)' }}
    >
      <div className="max-w-7xl mx-auto px-4 pb-10">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div
                className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0"
                style={{ background: 'var(--cream)', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}
              >
                <Image
                  src="/assets/logo/logo_andariego.png"
                  alt="Hotel El Andariego Logo"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="64px"
                />
              </div>
              <div>
                <h3
                  className="text-2xl font-bold leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif", color: 'var(--ochre-light)' }}
                >
                  {hotelData.name}
                </h3>
                <p
                  className="italic text-sm"
                  style={{ fontFamily: "'Crimson Pro', serif", color: 'rgba(245,239,224,0.7)' }}
                >
                  {hotelData.tagline}
                </p>
              </div>
            </div>
            <p
              className="text-sm mt-3"
              style={{ color: 'rgba(245,239,224,0.5)', fontFamily: "'Crimson Pro', serif" }}
            >
              {hotelData.address.street}
              <br />
              {hotelData.address.city}, {hotelData.address.country}
            </p>
          </div>

          <div>
            <h4
              className="font-semibold mb-4 uppercase tracking-wider text-sm"
              style={{ color: 'var(--ochre-light)', fontFamily: "'Playfair Display', serif" }}
            >
              Información
            </h4>
            <ul
              className="space-y-2 text-sm"
              style={{ fontFamily: "'Crimson Pro', serif", color: 'rgba(245,239,224,0.7)' }}
            >
              <li>• {hotelData.pets}</li>
              <li>• {hotelData.cancellationPolicy}</li>
              <li>• Pago: {hotelData.paymentMethods.join(', ')}</li>
            </ul>
          </div>

          <div>
            <h4
              className="font-semibold mb-4 uppercase tracking-wider text-sm"
              style={{ color: 'var(--ochre-light)', fontFamily: "'Playfair Display', serif" }}
            >
              Horarios
            </h4>
            <p
              className="text-sm"
              style={{
                fontFamily: "'Crimson Pro', serif",
                color: 'rgba(245,239,224,0.7)',
                lineHeight: '2',
              }}
            >
              Recepción abierta 24h
              <br />
              Check-in: 14:00
              <br />
              Check-out: 12:00
            </p>
          </div>

          <div>
            <h4
              className="font-semibold mb-4 uppercase tracking-wider text-sm"
              style={{ color: 'var(--ochre-light)', fontFamily: "'Playfair Display', serif" }}
            >
              Síguenos
            </h4>
            <div className="flex gap-3">
              <a
                href={hotelData.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                style={{ background: 'var(--terracotta)', color: 'var(--cream)' }}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={hotelData.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                style={{ background: 'var(--terracotta)', color: 'var(--cream)' }}
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={hotelData.socialMedia.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                style={{ background: 'var(--terracotta)', color: 'var(--cream)' }}
                aria-label="TikTok"
              >
                {TikTokIcon}
              </a>
            </div>
          </div>
        </div>

        <div
          className="h-1 mb-6 rounded-full"
          style={{
            background:
              'repeating-linear-gradient(90deg, var(--terracotta) 0px, var(--terracotta) 16px, var(--ochre) 16px, var(--ochre) 32px, var(--teal) 32px, var(--teal) 48px, var(--ochre) 48px, var(--ochre) 64px)',
          }}
        />

        <div
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
          style={{ color: 'rgba(245,239,224,0.45)', fontFamily: "'Crimson Pro', serif" }}
        >
          <p>© 2026 {hotelData.name} · Otavalo, Ecuador. Todos los derechos reservados.</p>
          <div className="flex items-center gap-2">
            <span>Web development by</span>
            <a
              href="https://neuraweb.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:opacity-80"
              style={{ color: 'var(--ochre-light)' }}
            >
              <Image
                src="/assets/logo/neurawebW.webp"
                alt="NeuraWeb"
                width={90}
                height={24}
                className="h-6 w-auto"
              />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 text-center" style={{ borderTop: '1px solid rgba(245,239,224,0.1)' }}>
          <p
            className="text-xs leading-relaxed max-w-3xl mx-auto"
            style={{ color: 'rgba(245,239,224,0.35)', fontFamily: "'Crimson Pro', serif" }}
          >
            Website designed and optimized to convert visitors into guests. Need a professional website
            for your hotel or tourism business?{' '}
            <a
              href="https://neuraweb.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:underline"
              style={{ color: 'var(--ochre-light)' }}
            >
              Learn about NeuraWeb
            </a>
            {' '}— Specialists in web development for the tourism sector in Ecuador.
          </p>
        </div>
      </div>
    </footer>
  );
}