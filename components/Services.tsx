'use client';

import { useState, useRef } from 'react';
import { Wifi, Coffee, Clock, Bus, Sparkles, UtensilsCrossed, Mountain, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import hotelData from '@/data/hotel.json';

const iconMap: Record<string, any> = {
  Wifi,
  Coffee,
  Clock,
  Bus,
  Sparkles,
  UtensilsCrossed,
  Mountain,
  ShowerHead: Sparkles,
  Home: Mountain,
  ParkingCircle: Mountain,
  Shirt: Sparkles,
};

export function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Grouper les services par paires pour l'affichage mobile
  const servicesPerSlide = 2;
  const totalSlides = Math.ceil(hotelData.services.length / servicesPerSlide);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 andean-pattern" style={{ backgroundColor: 'var(--cream-dark)' }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Servicios & Equipamiento"
          subtitle="Comodidad y detalles que harán de tu visita una experiencia memorable."
          colorOrder="teal"
        />

        {/* Mobile Carousel 2x2 - visible only on small screens */}
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
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 px-1">
                  <div className="grid grid-cols-2 gap-3">
                    {hotelData.services
                      .slice(slideIndex * servicesPerSlide, slideIndex * servicesPerSlide + servicesPerSlide)
                      .map((service) => {
                        const Icon = iconMap[service.icon] || Star;
                        return (
                          <div
                            key={service.id}
                            className="card-lift text-center p-3 rounded-sm"
                            style={{
                              background: 'var(--cream)',
                              borderTop: '3px solid var(--terracotta)',
                              boxShadow: '0 2px 12px rgba(61,43,31,0.08)',
                            }}
                          >
                            <div
                              className="w-10 h-10 flex items-center justify-center mx-auto mb-2"
                              style={{ background: 'var(--terracotta)', borderRadius: '50%' }}
                            >
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <h3
                              className="font-semibold mb-1 text-sm"
                              style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}
                            >
                              {service.name}
                            </h3>
                            <p
                              className="text-xs leading-relaxed"
                              style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--warm-brown-light)' }}
                            >
                              {service.description}
                            </p>
                          </div>
                        );
                      })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute -left-2 top-1/2 z-10 w-8 h-8 flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              background: 'var(--terracotta)',
              color: 'white',
              borderRadius: '50%',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              transform: 'translateY(-50%)',
            }}
            aria-label="Précédent"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-2 top-1/2 z-10 w-8 h-8 flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              background: 'var(--terracotta)',
              color: 'white',
              borderRadius: '50%',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              transform: 'translateY(-50%)',
            }}
            aria-label="Suivant"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Mobile dots indicator */}
          <div className="flex justify-center gap-1.5 mt-4">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className="transition-all duration-300"
                style={{
                  width: currentSlide === i ? '20px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: currentSlide === i ? 'var(--terracotta)' : 'var(--cream-dark)',
                }}
                aria-label={`Aller au groupe ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Tablet and Desktop Grid - hidden on mobile */}
        <div className="hidden sm:grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {hotelData.services.map((service) => {
            const Icon = iconMap[service.icon] || Star;
            return (
              <div
                key={service.id}
                className="card-lift text-center p-4 sm:p-5 md:p-7 rounded-sm"
                style={{
                  background: 'var(--cream)',
                  borderTop: '3px solid var(--terracotta)',
                  boxShadow: '0 2px 12px rgba(61,43,31,0.08)',
                }}
              >
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center mx-auto mb-3 sm:mb-4"
                  style={{ background: 'var(--terracotta)', borderRadius: '50%' }}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3
                  className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base"
                  style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="text-xs sm:text-sm leading-relaxed hidden sm:block"
                  style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--warm-brown-light)' }}
                >
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
