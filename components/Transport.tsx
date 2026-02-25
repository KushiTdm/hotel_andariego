'use client';

import Image from 'next/image';
import { SectionHeader } from './SectionHeader';
import { Car, Plane, Building2, CheckCircle } from 'lucide-react';

const transportServices = [
  {
    icon: Car,
    title: 'Transporte turístico',
    description: 'Servicio de transporte turístico por todo el Ecuador',
  },
  {
    icon: Plane,
    title: 'Traslados al aeropuerto',
    description: 'Recogida y entrega en el aeropuerto',
  },
  {
    icon: Building2,
    title: 'Transporte empresarial',
    description: 'Servicio profesional para empresas',
  },
];

export function Transport() {
  return (
    <section className="py-24 px-4 andean-pattern" style={{ backgroundColor: 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Servicio de Transporte"
          subtitle="Compañía de Transporte Turístico ANDARIEGOTUR"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image du Duster */}
          <div className="relative">
            <div
              className="relative h-[400px] md:h-[480px] rounded-sm overflow-hidden shadow-2xl"
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
              className="absolute -bottom-4 -right-4 w-full h-full rounded-sm -z-10"
              style={{ border: '3px solid var(--terracotta)', opacity: 0.3 }}
            />
          </div>

          {/* Contenu texte */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 flex items-center justify-center"
                style={{ background: 'var(--terracotta)', borderRadius: '2px' }}
              >
                <Car className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3
                  className="text-2xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}
                >
                  ANDARIEGOTUR
                </h3>
                <p
                  className="text-sm uppercase tracking-wider"
                  style={{ color: 'var(--terracotta)', fontFamily: "'Crimson Pro', serif" }}
                >
                  Compañía de Transporte Turístico
                </p>
              </div>
            </div>

            <p
              className="text-lg mb-8 leading-relaxed"
              style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--warm-brown-light)' }}
            >
              Además del hospedaje, ofrecemos servicio de transporte profesional para que explores
              Ecuador con total comodidad y seguridad. Nuestro equipo está disponible para llevarte
              a cualquier destino del país.
            </p>

            <div className="space-y-4 mb-8">
              {transportServices.map((service) => (
                <div
                  key={service.title}
                  className="flex items-start gap-4 p-4 rounded-sm"
                  style={{ background: 'rgba(196,85,26,0.05)' }}
                >
                  <div
                    className="w-12 h-12 flex-shrink-0 flex items-center justify-center"
                    style={{ background: 'var(--terracotta)', borderRadius: '50%' }}
                  >
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4
                      className="font-semibold mb-1"
                      style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}
                    >
                      {service.title}
                    </h4>
                    <p
                      className="text-sm"
                      style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--warm-brown-light)' }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="p-4 rounded-sm"
              style={{ background: 'var(--cream-dark)', borderLeft: '4px solid var(--teal)' }}
            >
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--teal)' }} />
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--warm-brown-light)' }}
                >
                  <strong style={{ color: 'var(--warm-brown)' }}>Vehículo disponible:</strong> Renault
                  Duster cómodo y seguro, ideal para recorrer los Andes ecuatorianos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}