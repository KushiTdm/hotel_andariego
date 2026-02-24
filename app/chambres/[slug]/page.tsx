'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Users, Wifi, Tv, ShowerHead, Home, CheckCircle } from 'lucide-react';
import { format, addDays } from 'date-fns';
import { fr } from 'date-fns/locale';
import { DatePicker } from '@/components/DatePicker';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import hotelData from '@/data/hotel.json';

const amenityIcons: Record<string, any> = {
  wifi: { icon: Wifi, label: 'WiFi gratuit' },
  tv: { icon: Tv, label: 'Télévision' },
  shower: { icon: ShowerHead, label: 'Salle de bain privée' },
  balcony: { icon: Home, label: 'Balcon' },
};

export default function RoomPage({ params }: { params: { slug: string } }) {
  const room = hotelData.rooms.find(r => r.slug === params.slug);
  const [checkIn, setCheckIn] = useState<Date | undefined>();
  const [checkOut, setCheckOut] = useState<Date | undefined>();
  const [guests, setGuests] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--cream)' }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}>
            Chambre non trouvée
          </h1>
          <Link href="/">
            <button className="px-6 py-3 text-white" style={{ background: 'var(--terracotta)', borderRadius: '2px' }}>
              Retour à l'accueil
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const generateWhatsAppMessage = () => {
    let message = `Bonjour! Je souhaite réserver une ${room.type}`;
    if (checkIn && checkOut) {
      const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
      const total = nights * room.price;
      message += `\n\nDates:\n• Arrivée: ${format(checkIn, 'PPP', { locale: fr })}\n• Départ: ${format(checkOut, 'PPP', { locale: fr })}\n• Durée: ${nights} nuit${nights > 1 ? 's' : ''}`;
      message += `\n\nNombre de personnes: ${guests}`;
      message += `\n\nTotal estimé: $${total}`;
    } else {
      message += `\n\nNombre de personnes: ${guests}`;
    }
    return message;
  };

  const nights = checkIn && checkOut
    ? Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))
    : 0;

  const minCheckOut = checkIn ? addDays(checkIn, 1) : addDays(new Date(), 1);

  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--cream)', color: 'var(--warm-brown)' }}>
      <WhatsAppButton message={generateWhatsAppMessage()} variant="fixed" />

      {/* Textile top stripe */}
      <div className="h-2" style={{
        background: 'repeating-linear-gradient(90deg, #C4551A 0, #C4551A 16px, #D4892A 16px, #D4892A 32px, #2A7B6F 32px, #2A7B6F 48px, #D4892A 48px, #D4892A 64px)'
      }} />

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Back link */}
        <Link href="/#chambres">
          <button
            className="flex items-center gap-2 mb-10 text-sm uppercase tracking-wider transition-opacity hover:opacity-70"
            style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--terracotta)' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux chambres
          </button>
        </Link>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left: images + info */}
          <div className="lg:col-span-2">
            {/* Main image */}
            <div className="relative h-[400px] md:h-[520px] overflow-hidden mb-4 shadow-2xl" style={{ borderRadius: '2px' }}>
              <Image
                src={room.images[currentImage].src}
                alt={room.images[currentImage].alt}
                fill
                className="object-cover"
                priority
              />
              {/* Textile stripe top */}
              <div className="absolute top-0 left-0 right-0 h-1.5" style={{
                background: 'repeating-linear-gradient(90deg, #C4551A 0, #C4551A 12px, #D4892A 12px, #D4892A 24px, #2A7B6F 24px, #2A7B6F 36px, #D4892A 36px, #D4892A 48px)'
              }} />
              {/* Price badge */}
              <div
                className="absolute bottom-5 right-5 px-5 py-2"
                style={{
                  background: 'var(--terracotta)',
                  color: 'white',
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: '700',
                  fontSize: '20px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                }}
              >
                ${room.price}<span className="text-sm font-normal opacity-80">/nuit</span>
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-3 mb-10">
              {room.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className="relative h-20 w-28 flex-shrink-0 overflow-hidden transition-all duration-300"
                  style={{
                    borderRadius: '2px',
                    outline: currentImage === index ? '3px solid var(--terracotta)' : '3px solid transparent',
                    opacity: currentImage === index ? 1 : 0.55,
                  }}
                >
                  <Image src={image.src} alt={image.alt} fill className="object-cover" />
                </button>
              ))}
            </div>

            {/* Room description card */}
            <div className="p-8 mb-8" style={{
              background: 'white',
              boxShadow: '0 2px 20px rgba(61,43,31,0.08)',
              borderRadius: '2px',
              borderTop: '4px solid var(--terracotta)'
            }}>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-0.5" style={{ background: 'var(--terracotta)' }} />
                <span className="text-xs uppercase tracking-[0.3em]" style={{ color: 'var(--terracotta)', fontFamily: "'Crimson Pro', serif" }}>
                  Hotel El Andariego · Otavalo
                </span>
              </div>

              <h1 className="text-4xl font-bold mb-4"
                style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}>
                {room.type}
              </h1>

              <div className="flex items-center gap-2 mb-6 text-sm"
                style={{ color: 'var(--warm-brown-light)', fontFamily: "'Crimson Pro', serif" }}>
                <Users className="w-4 h-4" />
                <span>Jusqu'à {room.capacity} personne{room.capacity > 1 ? 's' : ''}</span>
              </div>

              <p className="text-lg leading-relaxed mb-8"
                style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--warm-brown-light)' }}>
                {room.description}
              </p>

              {/* Amenities */}
              <div style={{ borderTop: '1px solid var(--cream-dark)', paddingTop: '2rem' }}>
                <h2 className="text-2xl font-semibold mb-6"
                  style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}>
                  Équipements inclus
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {room.amenities.map((amenity) => {
                    const info = amenityIcons[amenity];
                    if (!info) return null;
                    const Icon = info.icon;
                    return (
                      <div key={amenity} className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                          style={{ background: 'rgba(196,85,26,0.1)', borderRadius: '2px' }}>
                          <Icon className="w-5 h-5" style={{ color: 'var(--terracotta)' }} />
                        </div>
                        <span style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--warm-brown-light)' }}>
                          {info.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Policies card */}
            <div className="p-8" style={{
              background: 'white',
              boxShadow: '0 2px 20px rgba(61,43,31,0.08)',
              borderRadius: '2px',
              borderTop: '4px solid var(--teal)'
            }}>
              <h2 className="text-2xl font-semibold mb-5"
                style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}>
                Informations importantes
              </h2>
              <div className="space-y-3">
                {[
                  hotelData.cancellationPolicy,
                  'Check-in: 14h00 | Check-out: 12h00',
                  hotelData.pets,
                  `Paiement: ${hotelData.paymentMethods.join(', ')}`,
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--teal)' }} />
                    <span style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--warm-brown-light)' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: booking widget */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 p-7 shadow-2xl"
              style={{
                background: 'white',
                borderRadius: '2px',
                borderTop: '4px solid var(--terracotta)',
              }}>
              <h3 className="text-2xl font-bold mb-6"
                style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}>
                Réserver cette chambre
              </h3>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2"
                    style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}>
                    Date d'arrivée
                  </label>
                  <DatePicker
                    date={checkIn}
                    onDateChange={setCheckIn}
                    placeholder="Sélectionner la date"
                    minDate={new Date()}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2"
                    style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}>
                    Date de départ
                  </label>
                  <DatePicker
                    date={checkOut}
                    onDateChange={setCheckOut}
                    placeholder="Sélectionner la date"
                    minDate={minCheckOut}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2"
                    style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}>
                    Nombre de personnes
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full px-4 py-2.5 border focus:outline-none transition-colors"
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
                        {n} personne{n > 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Price summary */}
              {checkIn && checkOut && nights > 0 && (
                <div className="mb-6 p-4" style={{ background: 'var(--cream)', borderRadius: '2px' }}>
                  <div className="flex justify-between mb-2 text-sm"
                    style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--warm-brown-light)' }}>
                    <span>${room.price} × {nights} nuit{nights > 1 ? 's' : ''}</span>
                    <span>${room.price * nights}</span>
                  </div>
                  <div className="h-px my-2" style={{ background: 'var(--cream-dark)' }} />
                  <div className="flex justify-between">
                    <span className="font-semibold" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}>
                      Total
                    </span>
                    <span className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--terracotta)' }}>
                      ${room.price * nights}
                    </span>
                  </div>
                </div>
              )}

              <WhatsAppButton
                message={generateWhatsAppMessage()}
                size="lg"
                className="w-full mb-3"
              />

              <p className="text-xs text-center" style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--warm-brown-light)' }}>
                Réservation instantanée via WhatsApp
              </p>
            </div>
          </div>
        </div>

        {/* Other rooms */}
        <div className="mt-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1" style={{ background: 'var(--cream-dark)' }} />
            <h2 className="text-3xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}>
              Autres chambres
            </h2>
            <div className="h-px flex-1" style={{ background: 'var(--cream-dark)' }} />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {hotelData.rooms
              .filter(r => r.id !== room.id)
              .slice(0, 3)
              .map((otherRoom) => (
                <Link key={otherRoom.id} href={`/chambres/${otherRoom.slug}`}>
                  <div
                    className="card-lift overflow-hidden cursor-pointer"
                    style={{ background: 'white', borderRadius: '2px', boxShadow: '0 2px 12px rgba(61,43,31,0.08)' }}
                  >
                    <div className="relative h-48 img-zoom">
                      <Image src={otherRoom.images[0].src} alt={otherRoom.images[0].alt} fill className="object-cover" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-1"
                        style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}>
                        {otherRoom.type}
                      </h3>
                      <p className="font-bold" style={{ color: 'var(--terracotta)', fontFamily: "'Playfair Display', serif" }}>
                        ${otherRoom.price}/nuit
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