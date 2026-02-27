'use client';

import Image from 'next/image';
import { SectionHeader } from './SectionHeader';
import { Car, Plane, Building2 } from 'lucide-react';

const transportServices = [
  {
    icon: Car,
    title: 'Transporte turístico',
    description: 'Servicio de transporte turístico por todo el Ecuador',
  },
  {
    icon: Plane,
    title: 'Traslados al aeropuerto',
    description: 'Traslado confiable y seguro desde y hacia el aeropuerto.',
  },
  {
    icon: Building2,
    title: 'Transporte empresarial',
    description: 'Servicio profesional para empresas',
  },
];

export function Transport() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 andean-pattern" style={{ backgroundColor: 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Servicio de Transporte"
          subtitle="Compañía de Transporte Turístico ANDARIEGOTUR"
        />

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Image du Duster */}
          <div className="relative order-2 md:order-1">
            <div
              className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[480px] rounded-sm overflow-hidden shadow-2xl"
            >
              <Image
                src="/assets/activities/renault_duster_suv.webp"
                alt="Renault Duster - Vehículo de transporte turístico de ANDARIEGOTUR"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Textile top border */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5 z-10"
                style={{
                  background:
                    'repeating-linear-gradient(90deg, #C4551A 0, #C4551A 12px, #D4892A 12px, #D4892A 24px, #2A7B6F 24px, #2A7B6F 36px, #D4892A 36px, #D4892A 48px)',
                }}
              />
            </div>
            <div
              className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 w-full h-full rounded-sm -z-10 hidden sm:block"
              style={{ border: '3px solid var(--terracotta)', opacity: 0.3 }}
            />
          </div>

          {/* Contenu texte */}
          <div className="order-1 md:order-2">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="flex items-center justify-center">
                <Image
                  src="/assets/logo/logo_andariegotour.jpg"
                  alt="Logo ANDARIEGOTUR"
                  width={168}
                  height={168}
                  className="object-contain"
                />
              </div>
            </div>

            <p
              className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed"
              style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--warm-brown-light)' }}
            >
              Además del hospedaje, ofrecemos servicio de transporte profesional para que explores
              Ecuador con total comodidad y seguridad. Nuestro equipo está disponible para llevarte
              a cualquier destino del país.
            </p>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {transportServices.map((service) => (
                <div
                  key={service.title}
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-sm"
                  style={{ background: 'rgba(196,85,26,0.05)' }}
                >
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center"
                    style={{ background: 'var(--terracotta)', borderRadius: '50%' }}
                  >
                    <service.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <h4
                      className="font-semibold mb-0.5 sm:mb-1 text-sm sm:text-base"
                      style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}
                    >
                      {service.title}
                    </h4>
                    <p
                      className="text-xs sm:text-sm"
                      style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--warm-brown-light)' }}
                    >
                      {service.description}
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
