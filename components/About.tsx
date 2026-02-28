'use client';

import Image from 'next/image';
import { CheckCircle, Award, Star, Users } from 'lucide-react';
import hotelData from '@/data/hotel.json';

const aboutFeatures = [
  { icon: CheckCircle, title: 'Ubicación céntrica', sub: 'A 2 min del mercado' },
  { icon: Award, title: 'Servicio auténtico', sub: 'Equipo local 24/7' },
  { icon: Star, title: 'Vista panorámica', sub: 'Terraza con vista a las montañas' },
  { icon: Users, title: 'Todo tipo de viajeros', sub: 'Ideal para parejas, familias y mochileros' },
];

export function About() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4" style={{ backgroundColor: 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div className="relative h-[350px] sm:h-[420px] md:h-[520px] rounded-sm overflow-hidden img-zoom shadow-2xl">
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
              className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 w-full h-full rounded-sm -z-10 hidden sm:block"
              style={{ border: '3px solid var(--terracotta)', opacity: 0.4 }}
            />
            <div
              className="absolute -top-3 sm:-top-5 -left-3 sm:-left-5 w-18 h-18 sm:w-24 sm:h-24 flex flex-col items-center justify-center rounded-full shadow-lg text-center"
              style={{ background: 'var(--terracotta)', color: 'white' }}
            >
              <span className="text-xl sm:text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                16
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-wider leading-tight">habitaciones</span>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rotate-45" style={{ background: 'var(--terracotta)', opacity: 0.7 }} />
              <span
                className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em]"
                style={{ color: 'var(--terracotta)', fontFamily: "'Crimson Pro', serif" }}
              >
                Nuestra historia
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}
            >
              Bienvenidos a
              <br />
              <em style={{ color: 'var(--terracotta)' }}>Otavalo</em>
            </h2>

            <p
              className="text-base sm:text-lg mb-4 sm:mb-5 leading-relaxed"
              style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--warm-brown-light)' }}
            >
              Desde 2016 ofrecemos un espacio acogedor que combina comodidad y ubicación estratégica,
              a pocos pasos de la emblemática Plaza de los Ponchos, donde cada sábado se vive la feria
              artesanal más grande de Sudamérica.
            </p>
            <p
              className="text-base sm:text-lg mb-4 sm:mb-5 leading-relaxed"
              style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--warm-brown-light)' }}
            >
              Situado en el corazón de Otavalo, capital artesanal del Ecuador, nuestro hotel es el
              punto de partida ideal para descubrir la riqueza cultural de la ciudad, sus lagunas y
              las comunidades indígenas que conservan tradiciones milenarias.
            </p>
            <p
              className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed"
              style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--warm-brown-light)' }}
            >
              Contamos con 16 habitaciones distribuidas en tres pisos, con capacidad para recibir
              hasta 35 viajeros en un ambiente cálido que refleja la identidad local.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-10">
              {aboutFeatures.map(({ icon: Icon, title, sub }) => (
                <div key={title} className="flex items-start gap-2 sm:gap-3">
                  <div
                    className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center"
                    style={{ background: 'rgba(196,85,26,0.12)', borderRadius: '2px' }}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: 'var(--terracotta)' }} />
                  </div>
                  <div>
                    <p
                      className="font-semibold text-xs sm:text-sm"
                      style={{ color: 'var(--warm-brown)', fontFamily: "'Playfair Display', serif" }}
                    >
                      {title}
                    </p>
                    <p className="text-xs sm:text-sm" style={{ color: 'var(--warm-brown-light)' }}>
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
