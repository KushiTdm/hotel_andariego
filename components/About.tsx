'use client';

import Image from 'next/image';
import { CheckCircle, Award, Star, Users } from 'lucide-react';
import hotelData from '@/data/hotel.json';

const aboutFeatures = [
  { icon: CheckCircle, title: 'Ubicación céntrica', sub: 'A 2 min del mercado' },
  { icon: Award, title: 'Servicio auténtico', sub: 'Equipo local 24/7' },
  { icon: Star, title: 'Vista panorámica', sub: 'Terraza hacia los Andes' },
  { icon: Users, title: 'Para todos', sub: 'Parejas a mochileros' },
];

export function About() {
  return (
    <section className="py-24 px-4" style={{ backgroundColor: 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative h-[520px] rounded-sm overflow-hidden img-zoom shadow-2xl">
              <Image
                src={hotelData.about.image.src}
                alt={hotelData.about.image.alt}
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div
              className="absolute -bottom-4 -right-4 w-full h-full rounded-sm -z-10"
              style={{ border: '3px solid var(--terracotta)', opacity: 0.4 }}
            />
            <div
              className="absolute -top-5 -left-5 w-24 h-24 flex flex-col items-center justify-center rounded-full shadow-lg text-center"
              style={{ background: 'var(--terracotta)', color: 'white' }}
            >
              <span className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                16
              </span>
              <span className="text-xs uppercase tracking-wider leading-tight">habitaciones</span>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rotate-45" style={{ background: 'var(--terracotta)', opacity: 0.7 }} />
              <span
                className="text-sm uppercase tracking-[0.3em]"
                style={{ color: 'var(--terracotta)', fontFamily: "'Crimson Pro', serif" }}
              >
                Nuestra historia
              </span>
            </div>

            <h2
              className="text-5xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}
            >
              Bienvenido a
              <br />
              <em style={{ color: 'var(--terracotta)' }}>Otavalo</em>
            </h2>

            <p
              className="text-lg mb-5 leading-relaxed"
              style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--warm-brown-light)' }}
            >
              Situado en el corazón de Otavalo, capital artesanal de los Andes, nuestro hotel es el
              punto de partida ideal para explorar el famoso mercado kichwa, las lagunas andinas y
              las comunidades indígenas con tradiciones milenarias.
            </p>
            <p
              className="text-lg mb-8 leading-relaxed"
              style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--warm-brown-light)' }}
            >
              Con {hotelData.info.rooms} habitaciones distribuidas en tres pisos, recibimos hasta{' '}
              {hotelData.info.capacity} viajeros en un ambiente cálido que refleja el alma andina.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {aboutFeatures.map(({ icon: Icon, title, sub }) => (
                <div key={title} className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 flex-shrink-0 flex items-center justify-center"
                    style={{ background: 'rgba(196,85,26,0.12)', borderRadius: '2px' }}
                  >
                    <Icon className="w-5 h-5" style={{ color: 'var(--terracotta)' }} />
                  </div>
                  <div>
                    <p
                      className="font-semibold text-sm"
                      style={{ color: 'var(--warm-brown)', fontFamily: "'Playfair Display', serif" }}
                    >
                      {title}
                    </p>
                    <p className="text-sm" style={{ color: 'var(--warm-brown-light)' }}>
                      {sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}