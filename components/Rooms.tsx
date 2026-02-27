'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { RoomCard } from './RoomCard';
import hotelData from '@/data/hotel.json';

export function Rooms() {
  const [roomSlide, setRoomSlide] = useState(0);
  const roomsPerSlide = 3;
  const totalSlides = Math.ceil(hotelData.rooms.length / roomsPerSlide);
  const [currentMobileSlide, setCurrentMobileSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => setRoomSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setRoomSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  const visibleRooms = hotelData.rooms.slice(
    roomSlide * roomsPerSlide,
    roomSlide * roomsPerSlide + roomsPerSlide
  );

  // Mobile carousel navigation
  const nextMobileSlide = () => {
    setCurrentMobileSlide((prev) => (prev + 1) % hotelData.rooms.length);
  };

  const prevMobileSlide = () => {
    setCurrentMobileSlide((prev) => (prev - 1 + hotelData.rooms.length) % hotelData.rooms.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextMobileSlide();
    } else if (diff < -50) {
      prevMobileSlide();
    }
  };

  return (
    <section id="chambres" className="py-16 sm:py-20 md:py-24 px-4" style={{ backgroundColor: 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Nuestras Habitaciones"
          subtitle="DeEspacios pensados para viajeros individuales, escapadas en pareja, estadías familiares o experiencias compartidas."
        />

        {/* Mobile Carousel - visible only on small screens */}
        <div className="sm:hidden relative">
          <div
            ref={carouselRef}
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
              {hotelData.rooms.map((room) => (
                <div key={room.id} className="w-full flex-shrink-0 px-1">
                  <RoomCard room={room} />
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
            aria-label="Précédent"
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
            aria-label="Suivant"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Mobile dots indicator */}
          <div className="flex justify-center gap-1.5 mt-4">
            {hotelData.rooms.map((_, i) => (
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
                aria-label={`Aller à la chambre ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Tablet and Desktop Grid - hidden on mobile */}
        <div className="hidden sm:block relative">
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-0 top-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              background: 'var(--terracotta)',
              color: 'white',
              borderRadius: '50%',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              transform: 'translateY(-50%) translateX(-50%)',
            }}
            aria-label="Précédent"
          >
            <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-0 top-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              background: 'var(--terracotta)',
              color: 'white',
              borderRadius: '50%',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              transform: 'translateY(-50%) translateX(50%)',
            }}
            aria-label="Suivant"
          >
            <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>

          <div className="overflow-hidden mx-0 md:mx-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {visibleRooms.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
          </div>

          <div className="hidden md:flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }, (_, i) => (
              <button
                key={i}
                onClick={() => setRoomSlide(i)}
                className="w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300"
                style={{
                  background: roomSlide === i ? 'var(--terracotta)' : 'var(--cream-dark)',
                  transform: roomSlide === i ? 'scale(1.2)' : 'scale(1)',
                }}
                aria-label={`Aller au groupe ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}