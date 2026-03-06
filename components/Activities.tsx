'use client';

import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { ActivityCard } from './ActivityCard';

const activities = [
  {
    name: 'Plaza de Ponchos',
    image: '/assets/activities/plaza_de_ponchos.webp',
    imageAlt: 'Mercado artesanal Plaza de Ponchos en Otavalo, Ecuador',
    description: 'El mercado artesanal indígena más grande de América Latina',
    walk: '2 min',
    car: null,
    color: 'var(--terracotta)',
    highlight: true,
  },
  {
    name: 'Cascada de Peguche',
    image: '/assets/activities/cascada_de_peguche.webp',
    imageAlt: 'Cascada de Peguche, cascada sagrada kichwa cerca de Otavalo',
    description: 'Cascada sagrada kichwa en el corazón del bosque andino',
    walk: '45 min',
    car: '10 min',
    color: 'var(--teal)',
    highlight: false,
  },
  {
    name: 'Lagunas de Mojanda',
    image: '/assets/activities/lagunas_de_mojanda.webp',
    imageAlt: 'Lagunas de Mojanda, lagos de cráter en los Andes ecuatorianos',
    description: 'Tres lagos de cráter a 3.700 m de altitud, panorama excepcional',
    walk: null,
    car: '30 min',
    color: 'var(--ochre)',
    highlight: false,
  },
  {
    name: 'Laguna de Cuicocha',
    image: '/assets/activities/laguna_de_cuicocha.webp',
    imageAlt: 'Laguna de Cuicocha, lago volcánico en la caldera del Cotacachi',
    description: 'Lago volcánico en la caldera del Cotacachi, isla central mítica',
    walk: null,
    car: '40 min',
    color: 'var(--indigo)',
    highlight: false,
  },
  {
    name: 'Parque Cóndor',
    image: '/assets/activities/parque_condor.webp',
    imageAlt: 'Parque Cóndor, centro de rehabilitación de aves rapaces cerca de Otavalo',
    description: 'Centro de rehabilitación de aves rapaces con vuelos en libertad',
    walk: null,
    car: '20 min',
    color: 'var(--warm-brown)',
    highlight: false,
  },
  {
    name: 'Mirador Lago San Pablo',
    image: '/assets/activities/mirador_lago_san_pablo.webp',
    imageAlt: 'Mirador del Lago San Pablo, vista panorámica del lago sagrado de Otavalo',
    description: 'Vista panorámica espectacular del lago sagrado al pie del Imbabura',
    walk: null,
    car: '15 min',
    color: 'var(--teal)',
    highlight: false,
  },
];

export function Activities() {
  const [currentMobileSlide, setCurrentMobileSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isSwiping = useRef(false);          // ← NEW

  const nextMobileSlide = () => {
    setCurrentMobileSlide((prev) => (prev + 1) % activities.length);
  };

  const prevMobileSlide = () => {
    setCurrentMobileSlide((prev) => (prev - 1 + activities.length) % activities.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
    isSwiping.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
    if (Math.abs(touchEndX.current - touchStartX.current) > 10) {
      isSwiping.current = true;
    }
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (isSwiping.current && diff > 50) {
      nextMobileSlide();
    } else if (isSwiping.current && diff < -50) {
      prevMobileSlide();
    }
    isSwiping.current = false;
  };

  return (
    <section id="activites" className="py-16 sm:py-20 md:py-24 px-4" style={{ backgroundColor: 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Qué explorar desde el hotel"
          subtitle="Sucre 10-07 y Colón — Tu experiencia en Otavalo comienza aquí."
        />

        {/* Mobile Carousel - visible only on small screens */}
        <div className="sm:hidden relative">
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(-${currentMobileSlide * 100}%)`,
              }}
            >
              {activities.map((place) => (
                <div key={place.name} className="w-full flex-shrink-0 px-1">
                  <ActivityCard {...place} />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation arrows */}
          <button
            onClick={prevMobileSlide}
            className="absolute left-0 top-1/2 z-10 w-10 h-10 flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              background: 'var(--terracotta)',
              color: 'white',
              borderRadius: '50%',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              transform: 'translateY(-50%)',
            }}
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextMobileSlide}
            className="absolute right-0 top-1/2 z-10 w-10 h-10 flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              background: 'var(--terracotta)',
              color: 'white',
              borderRadius: '50%',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              transform: 'translateY(-50%)',
            }}
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Mobile dots indicator */}
          <div className="flex justify-center gap-1.5 mt-4">
            {activities.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentMobileSlide(i)}
                className="transition-all duration-300"
                style={{
                  width: currentMobileSlide === i ? '20px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: currentMobileSlide === i ? 'var(--terracotta)' : 'var(--cream-dark)',
                }}
                aria-label={`Ir a la actividad ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Tablet and Desktop Grid - hidden on mobile */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {activities.map((place) => (
            <ActivityCard key={place.name} {...place} />
          ))}
        </div>
      </div>
    </section>
  );
}