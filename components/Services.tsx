'use client';

import { Wifi, Coffee, Clock, Bus, Sparkles, UtensilsCrossed, Mountain, Star } from 'lucide-react';
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
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 andean-pattern" style={{ backgroundColor: 'var(--cream-dark)' }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Servicios & Equipamiento"
          subtitle="Todo para hacer tu estadía andina inolvidable"
          colorOrder="teal"
        />

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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