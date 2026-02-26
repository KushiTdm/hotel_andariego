'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#chambres', label: 'Habitaciones' },
    { href: '#activites', label: 'Actividades' },
    { href: '#contact', label: 'Contacto' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 sm:py-4"
      style={{ background: 'linear-gradient(to bottom, rgba(61,43,31,0.9), transparent)' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
          <div
            className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full overflow-hidden"
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-wider hover:opacity-80 transition-opacity"
              style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--cream)' }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-sm transition-colors"
          style={{ color: 'var(--cream)' }}
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 px-4 py-4 shadow-lg"
          style={{
            background: 'rgba(61,43,31,0.98)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base uppercase tracking-wider py-2 hover:opacity-80 transition-opacity"
                style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--cream)' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}