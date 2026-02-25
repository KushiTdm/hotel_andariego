'use client';

import { MapPin, Phone, Mail } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import hotelData from '@/data/hotel.json';

const WhatsAppIcon = (
  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

interface ContactProps {
  whatsappMessage: string;
}

export function Contact({ whatsappMessage }: ContactProps) {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Dirección',
      content: (
        <>
          {hotelData.address.street}
          <br />
          {hotelData.address.city}, {hotelData.address.country}
        </>
      ),
    },
    {
      icon: Phone,
      title: 'Teléfono',
      content: (
        <a
          href={`tel:${hotelData.contact.phone}`}
          className="hover:underline"
          style={{ color: 'var(--warm-brown-light)' }}
        >
          {hotelData.contact.phone}
        </a>
      ),
    },
    {
      icon: Mail,
      title: 'Correo',
      content: (
        <a
          href={`mailto:${hotelData.contact.email}`}
          className="hover:underline break-all"
          style={{ color: 'var(--warm-brown-light)' }}
        >
          {hotelData.contact.email}
        </a>
      ),
    },
  ];

  return (
    <section id="contact" className="py-24 px-4" style={{ backgroundColor: 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Contáctanos" />

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6 mb-10">
              {contactInfo.map(({ icon: Icon, title, content }) => (
                <div key={title} className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 flex-shrink-0 flex items-center justify-center"
                    style={{ background: 'var(--terracotta)', borderRadius: '2px' }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3
                      className="font-semibold mb-1"
                      style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}
                    >
                      {title}
                    </h3>
                    <p style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--warm-brown-light)' }}>
                      {content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() =>
                window.open(
                  `https://wa.me/593995941029?text=${encodeURIComponent(whatsappMessage)}`,
                  '_blank'
                )
              }
              className="group relative w-full py-4 font-semibold uppercase transition-all duration-300 overflow-hidden"
              style={{
                background: 'var(--warm-brown)',
                color: 'var(--cream)',
                borderRadius: '2px',
                fontFamily: "'Playfair Display', serif",
                letterSpacing: '0.15em',
                fontSize: '13px',
                boxShadow: '0 4px 20px rgba(61,43,31,0.2)',
              }}
            >
              <span
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{
                  background:
                    'repeating-linear-gradient(90deg, var(--terracotta) 0, var(--terracotta) 8px, var(--ochre) 8px, var(--ochre) 16px, var(--teal) 16px, var(--teal) 24px, var(--ochre) 24px, var(--ochre) 32px)',
                }}
              />
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              />
              <span className="relative flex items-center justify-center gap-3">
                {WhatsAppIcon}
                Contactar por WhatsApp
              </span>
            </button>
          </div>

          <div
            className="h-96 md:h-full min-h-[400px] rounded-sm overflow-hidden shadow-2xl"
            style={{ border: '3px solid var(--cream-dark)' }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d574.8358474852208!2d-78.26338687869436!3d0.2277127532065272!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2a159e0868a07d%3A0x831a3453673fa63d!2sEl%20Andariego!5e0!3m2!1ses!2sus!4v1771900601922!5m2!1ses!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Hotel El Andariego — carte Otavalo"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}