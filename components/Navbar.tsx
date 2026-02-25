'use client';

import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      style={{ background: 'linear-gradient(to bottom, rgba(61,43,31,0.9), transparent)' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden"
            style={{ background: 'var(--cream)', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}
          >
            <Image
              src="/assets/logo/logo_andariego.png"
              alt="Hotel El Andariego Logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <span
              className="text-lg md:text-xl font-bold block leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", color: 'var(--cream)' }}
            >
              El Andariego
            </span>
            <span
              className="text-xs uppercase tracking-[0.2em]"
              style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--ochre-light)' }}
            >
              Hotel · Otavalo
            </span>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="#chambres"
            className="text-sm uppercase tracking-wider hover:opacity-80 transition-opacity"
            style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--cream)' }}
          >
            Habitaciones
          </Link>
          <Link
            href="#activites"
            className="text-sm uppercase tracking-wider hover:opacity-80 transition-opacity"
            style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--cream)' }}
          >
            Actividades
          </Link>
          <Link
            href="#contact"
            className="text-sm uppercase tracking-wider hover:opacity-80 transition-opacity hidden sm:block"
            style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--cream)' }}
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
}