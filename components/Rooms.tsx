'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { RoomCard } from './RoomCard';
import hotelData from '@/data/hotel.json';

export function Rooms() {
  const [roomSlide, setRoomSlide] = useState(0);
  const roomsPerSlide = 3;
  const totalSlides = Math.ceil(hotelData.rooms.length / roomsPerSlide);

  const nextSlide = () => setRoomSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setRoomSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  const visibleRooms = hotelData.rooms.slice(
    roomSlide * roomsPerSlide,
    roomSlide * roomsPerSlide + roomsPerSlide
  );

  return (
    <section id="chambres" className="py-24 px-4" style={{ backgroundColor: 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Nuestras Habitaciones"
          subtitle="Desde dormitorios acogedores hasta habitaciones familiares espaciosas, encuentra tu nido andino ideal"
        />

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 z-10 w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              background: 'var(--terracotta)',
              color: 'white',
              borderRadius: '50%',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              transform: 'translateY(-50%) translateX(-50%)',
            }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 z-10 w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              background: 'var(--terracotta)',
              color: 'white',
              borderRadius: '50%',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              transform: 'translateY(-50%) translateX(50%)',
            }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="overflow-hidden mx-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleRooms.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }, (_, i) => (
              <button
                key={i}
                onClick={() => setRoomSlide(i)}
                className="w-3 h-3 rounded-full transition-all duration-300"
                style={{
                  background: roomSlide === i ? 'var(--terracotta)' : 'var(--cream-dark)',
                  transform: roomSlide === i ? 'scale(1.2)' : 'scale(1)',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}