'use client';

import { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Users, Wifi, Tv, ShowerHead, Home, CheckCircle } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { RangePicker } from '@/components/RangePicker';
import hotelData from '@/data/hotel.json';

const amenityIcons: Record<string, { icon: any; label: string }> = {
  wifi: { icon: Wifi, label: 'WiFi gratis' },
  tv: { icon: Tv, label: 'Televisión' },
  shower: { icon: ShowerHead, label: 'Baño privado' },
  balcony: { icon: Home, label: 'Balcón' },
};

export default function RoomPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const room = hotelData.rooms.find((r) => r.slug === slug);

  const [checkIn, setCheckIn] = useState<Date | undefined>();
  const [checkOut, setCheckOut] = useState<Date | undefined>();
  const [guests, setGuests] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);

  if (!room) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: 'var(--cream)' }}
      >
        <div className="text-center">
          <h1
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}
          >
            Habitación no encontrada
          </h1>
          <Link href="/">
            <button
              className="px-6 py-3 text-white"
              style={{ background: 'var(--terracotta)', borderRadius: '2px' }}
            >
              Volver al inicio
            </button>
          </Link>
        </div>
      </div>
    );
  }

  // Images de la chambre
  const allImages = room.images;

  const nights =
    checkIn && checkOut
      ? Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))
      : 0;

  const generateWhatsAppMessage = () => {
    let message = `Hola! Me gustaría reservar una ${room.type}`;
    if (checkIn && checkOut) {
      message += `\n\nFechas:\n• Llegada: ${format(checkIn, 'PPP', { locale: es })}\n• Salida: ${format(checkOut, 'PPP', { locale: es })}\n• Duración: ${nights} noche${nights > 1 ? 's' : ''}`;
      message += `\n\nNúmero de personas: ${guests}`;
    } else {
      message += `\n\nNúmero de personas: ${guests}`;
    }
    return message;
  };

  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: 'var(--cream)', color: 'var(--warm-brown)' }}
    >
      <WhatsAppButton message={generateWhatsAppMessage()} variant="fixed" />

      {/* Textile top stripe */}
      <div
        className="h-2"
        style={{
          background:
            'repeating-linear-gradient(90deg, #C4551A 0, #C4551A 16px, #D4892A 16px, #D4892A 32px, #2A7B6F 32px, #2A7B6F 48px, #D4892A 48px, #D4892A 64px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 py-10">
        <Link href="/#chambres">
          <button
            className="flex items-center gap-2 mb-10 text-sm uppercase tracking-wider transition-opacity hover:opacity-70"
            style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--terracotta)' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a habitaciones
          </button>
        </Link>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Colonne gauche : images + infos */}
          <div className="lg:col-span-2">
            {/* Image principale */}
            <div
              className="relative h-[400px] md:h-[520px] overflow-hidden mb-4 shadow-2xl"
              style={{ borderRadius: '2px' }}
            >
              <Image
                src={allImages[currentImage].src}
                alt={allImages[currentImage].alt}
                fill
                className="object-cover"
                priority
              />
              <div
                className="absolute top-0 left-0 right-0 h-1.5"
                style={{
                  background:
                    'repeating-linear-gradient(90deg, #C4551A 0, #C4551A 12px, #D4892A 12px, #D4892A 24px, #2A7B6F 24px, #2A7B6F 36px, #D4892A 36px, #D4892A 48px)',
                }}
              />
            </div>

            {/* Miniatures */}
            <div className="flex gap-3 mb-10 flex-wrap">
              {allImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className="relative h-20 w-28 flex-shrink-0 overflow-hidden transition-all duration-300"
                  style={{
                    borderRadius: '2px',
                    outline:
                      currentImage === index ? '3px solid var(--terracotta)' : '3px solid transparent',
                    opacity: currentImage === index ? 1 : 0.55,
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="112px"
                  />
                </button>
              ))}
            </div>

            {/* Carte description */}
            <div
              className="p-8 mb-8"
              style={{
                background: 'white',
                boxShadow: '0 2px 20px rgba(61,43,31,0.08)',
                borderRadius: '2px',
                borderTop: '4px solid var(--terracotta)',
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-0.5" style={{ background: 'var(--terracotta)' }} />
                <span
                  className="text-xs uppercase tracking-[0.3em]"
                  style={{ color: 'var(--terracotta)', fontFamily: "'Crimson Pro', serif" }}
                >
                  Hotel El Andariego · Otavalo
                </span>
              </div>
              <h1
                className="text-4xl font-bold mb-4"
                style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}
              >
                {room.type}
              </h1>
              <div
                className="flex items-center gap-2 mb-6 text-sm"
                style={{ color: 'var(--warm-brown-light)', fontFamily: "'Crimson Pro', serif" }}
              >
                <Users className="w-4 h-4" />
                <span>
                  Hasta {room.capacity} persona{room.capacity > 1 ? 's' : ''}
                </span>
              </div>
              <p
                className="text-lg leading-relaxed mb-8"
                style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--warm-brown-light)' }}
              >
                {room.description}
              </p>
              <div style={{ borderTop: '1px solid var(--cream-dark)', paddingTop: '2rem' }}>
                <h2
                  className="text-2xl font-semibold mb-6"
                  style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}
                >
                  Equipamiento incluido
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {room.amenities.map((amenity) => {
                    const info = amenityIcons[amenity];
                    if (!info) return null;
                    const Icon = info.icon;
                    return (
                      <div key={amenity} className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                          style={{ background: 'rgba(196,85,26,0.1)', borderRadius: '2px' }}
                        >
                          <Icon className="w-5 h-5" style={{ color: 'var(--terracotta)' }} />
                        </div>
                        <span
                          style={{
                            fontFamily: "'Crimson Pro', serif",
                            color: 'var(--warm-brown-light)',
                          }}
                        >
                          {info.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Carte politique */}
            <div
              className="p-8"
              style={{
                background: 'white',
                boxShadow: '0 2px 20px rgba(61,43,31,0.08)',
                borderRadius: '2px',
                borderTop: '4px solid var(--teal)',
              }}
            >
              <h2
                className="text-2xl font-semibold mb-5"
                style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}
              >
                Información importante
              </h2>
              <div className="space-y-3">
                {[
                  hotelData.cancellationPolicy,
                  'Check-in: 14:00 | Check-out: 12:00',
                  hotelData.pets,
                  `Pago: ${hotelData.paymentMethods.join(', ')}`,
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: 'var(--teal)' }}
                    />
                    <span
                      style={{
                        fontFamily: "'Crimson Pro', serif",
                        color: 'var(--warm-brown-light)',
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne droite : réservation */}
          <div className="lg:col-span-1">
            <div
              className="sticky top-8 p-7 shadow-2xl"
              style={{
                background: 'white',
                borderRadius: '2px',
                borderTop: '4px solid var(--terracotta)',
              }}
            >
              <h3
                className="text-2xl font-bold mb-6"
                style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}
              >
                Reservar esta habitación
              </h3>

              <div className="space-y-4 mb-6">
                {/* Sélecteur de dates unique */}
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: 'var(--warm-brown)',
                    }}
                  >
                    Fechas de estadía
                  </label>
                  <RangePicker
                    checkIn={checkIn}
                    checkOut={checkOut}
                    onChange={(from, to) => {
                      setCheckIn(from);
                      setCheckOut(to);
                    }}
                  />
                  <div className="mt-1.5 text-xs" style={{ fontFamily: "'Crimson Pro', serif", minHeight: '18px' }}>
                    {checkIn && !checkOut && (
                      <span style={{ color: 'var(--terracotta)' }}>
                        → Haz clic ahora en la fecha de salida
                      </span>
                    )}
                    {checkIn && checkOut && nights > 0 && (
                      <span style={{ color: 'var(--teal)' }}>
                        ✓ {nights} noche{nights > 1 ? 's' : ''} seleccionada{nights > 1 ? 's' : ''}
                      </span>
                    )}
                  </div>
                </div>

                {/* Nombre de personnes */}
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: 'var(--warm-brown)',
                    }}
                  >
                    Número de personas
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full px-4 py-2.5 border focus:outline-none"
                    style={{
                      borderColor: 'var(--cream-dark)',
                      borderRadius: '2px',
                      fontFamily: "'Crimson Pro', serif",
                      color: 'var(--warm-brown)',
                      background: 'var(--cream)',
                    }}
                  >
                    {Array.from({ length: room.capacity }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n}>
                        {n} persona{n > 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Récap durée */}
              {checkIn && checkOut && nights > 0 && (
                <div className="mb-6 p-4" style={{ background: 'var(--cream)', borderRadius: '2px' }}>
                  <div className="flex justify-between">
                    <span
                      className="font-semibold"
                      style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}
                    >
                      Duración de estadía
                    </span>
                    <span
                      className="text-xl font-bold"
                      style={{ fontFamily: "'Playfair Display', serif", color: 'var(--terracotta)' }}
                    >
                      {nights} noche{nights > 1 ? 's' : ''}
                    </span>
                  </div>
                </div>
              )}

              <WhatsAppButton message={generateWhatsAppMessage()} size="lg" className="w-full mb-3" />
              <p
                className="text-xs text-center"
                style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--warm-brown-light)' }}
              >
                Reservación instantánea por WhatsApp
              </p>
            </div>
          </div>
        </div>

        {/* Autres chambres */}
        <div className="mt-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1" style={{ background: 'var(--cream-dark)' }} />
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}
            >
              Otras habitaciones
            </h2>
            <div className="h-px flex-1" style={{ background: 'var(--cream-dark)' }} />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {hotelData.rooms
              .filter((r) => r.id !== room.id)
              .slice(0, 3)
              .map((otherRoom) => (
                <Link key={otherRoom.id} href={`/chambres/${otherRoom.slug}`}>
                  <div
                    className="card-lift overflow-hidden cursor-pointer"
                    style={{
                      background: 'white',
                      borderRadius: '2px',
                      boxShadow: '0 2px 12px rgba(61,43,31,0.08)',
                    }}
                  >
                    <div className="relative h-48 img-zoom">
                      <Image
                        src={otherRoom.images[0].src}
                        alt={otherRoom.images[0].alt}
                        fill
                        className="object-cover"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3
                        className="font-semibold text-lg mb-1"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          color: 'var(--warm-brown)',
                        }}
                      >
                        {otherRoom.type}
                      </h3>
                      <p
                        className="text-sm"
                        style={{ color: 'var(--warm-brown-light)', fontFamily: "'Crimson Pro', serif" }}
                      >
                        Hasta {otherRoom.capacity} persona{otherRoom.capacity > 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}