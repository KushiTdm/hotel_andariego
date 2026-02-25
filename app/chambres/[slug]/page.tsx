'use client';

import { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Users, Wifi, Tv, ShowerHead, Home, CheckCircle, CalendarDays, X } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Calendar } from '@/components/ui/calendar';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import hotelData from '@/data/hotel.json';

// Image salle de bain commune à toutes les chambres
const BATHROOM_IMAGE = {
  src: '/assets/rooms/bathroom.webp',
  alt: 'Baño privado — Hotel El Andariego Otavalo',
};

const amenityIcons: Record<string, any> = {
  wifi: { icon: Wifi, label: 'WiFi gratis' },
  tv: { icon: Tv, label: 'Televisión' },
  shower: { icon: ShowerHead, label: 'Baño privado' },
  balcony: { icon: Home, label: 'Balcón' },
};

// ── Sélecteur de dates en range (arrivée + départ en 2 clics) ───────────
function RangePicker({
  checkIn, checkOut, onChange,
}: {
  checkIn: Date | undefined;
  checkOut: Date | undefined;
  onChange: (from: Date | undefined, to: Date | undefined) => void;
}) {
  const [open, setOpen] = useState(false);

  const selected =
    checkIn && checkOut
      ? { from: checkIn, to: checkOut }
      : checkIn
      ? { from: checkIn }
      : undefined;

  const handleSelect = (range: { from?: Date; to?: Date } | undefined) => {
    if (!range) {
      onChange(undefined, undefined);
    } else {
      onChange(range.from, range.to);
      if (range.from && range.to) {
        setOpen(false);
      }
    }
  };

  const label =
    checkIn && checkOut
      ? `${format(checkIn, 'd MMM', { locale: es })} → ${format(checkOut, 'd MMM yyyy', { locale: es })}`
      : checkIn
      ? `${format(checkIn, 'd MMM yyyy', { locale: es })} — elegir salida`
      : 'Seleccionar fechas';

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 px-4 py-3 text-left transition-colors"
        style={{
          background: 'var(--cream)',
          border: `1px solid ${open ? 'var(--terracotta)' : 'var(--cream-dark)'}`,
          borderRadius: '2px',
          fontFamily: "'Crimson Pro', serif",
          color: checkIn ? 'var(--warm-brown)' : 'var(--warm-brown-light)',
          fontSize: '15px',
        }}
      >
        <CalendarDays className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--terracotta)' }} />
        <span className="flex-1">{label}</span>
        {(checkIn || checkOut) && (
          <span
            onClick={(e) => { e.stopPropagation(); onChange(undefined, undefined); }}
            className="opacity-40 hover:opacity-100 transition-opacity"
          >
            <X className="w-3.5 h-3.5" />
          </span>
        )}
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-30" onClick={() => setOpen(false)} />
          <div
            className="absolute left-0 z-40 mt-1 shadow-2xl p-2"
            style={{
              background: 'white',
              border: '1px solid var(--cream-dark)',
              borderRadius: '2px',
              borderTop: '3px solid var(--terracotta)',
            }}
          >
            <div className="px-4 pt-3 pb-0 text-xs text-center"
              style={{ color: 'var(--terracotta)', fontFamily: "'Crimson Pro', serif" }}>
              {!checkIn
                ? '① Haz clic en tu fecha de llegada'
                : !checkOut
                ? '② Haz clic en tu fecha de salida'
                : ''}
            </div>
            <Calendar
              mode="range"
              selected={selected}
              onSelect={handleSelect}
              disabled={{ before: new Date() }}
              locale={es}
              showOutsideDays={false}
              classNames={{
                months: 'flex flex-col space-y-4',
                month: 'space-y-4',
                caption: 'flex justify-center pt-1 relative items-center',
                caption_label: 'text-sm font-medium',
                nav: 'space-x-1 flex items-center',
                nav_button: 'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-200',
                nav_button_previous: 'absolute left-1',
                nav_button_next: 'absolute right-1',
                table: 'w-full border-collapse space-y-1',
                head_row: 'flex',
                head_cell: 'text-gray-500 rounded-md w-9 font-normal text-[0.8rem] dark:text-gray-400',
                row: 'flex w-full mt-2',
                cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-amber-50 [&:has([aria-selected])]:bg-amber-50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
                day: 'h-9 w-9 p-0 font-normal aria-selected:opacity-100 inline-flex items-center justify-center rounded-md text-sm ring-offset-white transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
                day_range_end: 'day-range-end',
                day_selected: 'bg-amber-600 text-white hover:bg-amber-600 hover:text-white focus:bg-amber-600 focus:text-white',
                day_today: 'bg-amber-50 text-amber-900',
                day_outside: 'day-outside text-gray-400 opacity-50 aria-selected:bg-amber-50 aria-selected:text-gray-400 aria-selected:opacity-30',
                day_disabled: 'text-gray-400 opacity-50',
                day_range_middle: 'aria-selected:bg-amber-100 aria-selected:text-amber-900',
                day_hidden: 'invisible',
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}

// ── Page principale ───────────────────────────────────────────────────────
export default function RoomPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const room = hotelData.rooms.find(r => r.slug === slug);

  const [checkIn, setCheckIn] = useState<Date | undefined>();
  const [checkOut, setCheckOut] = useState<Date | undefined>();
  const [guests, setGuests] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--cream)' }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}>
            Habitación no encontrada
          </h1>
          <Link href="/">
            <button className="px-6 py-3 text-white" style={{ background: 'var(--terracotta)', borderRadius: '2px' }}>
              Volver al inicio
            </button>
          </Link>
        </div>
      </div>
    );
  }

  // Images de la chambre + salle de bain en dernier
  const allImages = [...room.images, BATHROOM_IMAGE];

  const nights = checkIn && checkOut
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
    <main className="min-h-screen" style={{ backgroundColor: 'var(--cream)', color: 'var(--warm-brown)' }}>
      <WhatsAppButton message={generateWhatsAppMessage()} variant="fixed" />

      {/* Textile top stripe */}
      <div className="h-2" style={{
        background: 'repeating-linear-gradient(90deg, #C4551A 0, #C4551A 16px, #D4892A 16px, #D4892A 32px, #2A7B6F 32px, #2A7B6F 48px, #D4892A 48px, #D4892A 64px)'
      }} />

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
            <div className="relative h-[400px] md:h-[520px] overflow-hidden mb-4 shadow-2xl" style={{ borderRadius: '2px' }}>
              <Image
                src={allImages[currentImage].src}
                alt={allImages[currentImage].alt}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-0 left-0 right-0 h-1.5" style={{
                background: 'repeating-linear-gradient(90deg, #C4551A 0, #C4551A 12px, #D4892A 12px, #D4892A 24px, #2A7B6F 24px, #2A7B6F 36px, #D4892A 36px, #D4892A 48px)'
              }} />
              {/* Badge salle de bain */}
                  {currentImage === allImages.length - 1 && (
                <div className="absolute top-5 left-5 flex items-center gap-1.5 px-3 py-1.5"
                  style={{ background: 'rgba(42,123,111,0.92)', color: 'white', borderRadius: '2px', fontSize: '12px', fontFamily: "'Crimson Pro', serif", letterSpacing: '0.05em' }}>
                  <ShowerHead className="w-3.5 h-3.5" />
                  Baño privado
                </div>
              )}
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
                    outline: currentImage === index ? '3px solid var(--terracotta)' : '3px solid transparent',
                    opacity: currentImage === index ? 1 : 0.55,
                  }}
                >
                  <Image src={image.src} alt={image.alt} fill className="object-cover" loading="lazy" sizes="112px" />
                  {index === allImages.length - 1 && (
                    <div className="absolute inset-0 flex items-end justify-center pb-1">
                      <span className="text-white text-[9px] px-1.5 py-0.5"
                        style={{ background: 'rgba(42,123,111,0.85)', fontFamily: "'Crimson Pro', serif", borderRadius: '1px' }}>
                        Baño
                      </span>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Carte description */}
            <div className="p-8 mb-8" style={{ background: 'white', boxShadow: '0 2px 20px rgba(61,43,31,0.08)', borderRadius: '2px', borderTop: '4px solid var(--terracotta)' }}>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-0.5" style={{ background: 'var(--terracotta)' }} />
                <span className="text-xs uppercase tracking-[0.3em]" style={{ color: 'var(--terracotta)', fontFamily: "'Crimson Pro', serif" }}>
                  Hotel El Andariego · Otavalo
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}>
                {room.type}
              </h1>
              <div className="flex items-center gap-2 mb-6 text-sm" style={{ color: 'var(--warm-brown-light)', fontFamily: "'Crimson Pro', serif" }}>
                <Users className="w-4 h-4" />
                <span>Hasta {room.capacity} persona{room.capacity > 1 ? 's' : ''}</span>
              </div>
              <p className="text-lg leading-relaxed mb-8" style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--warm-brown-light)' }}>
                {room.description}
              </p>
              <div style={{ borderTop: '1px solid var(--cream-dark)', paddingTop: '2rem' }}>
                <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}>
                  Equipamiento incluido
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {room.amenities.map((amenity) => {
                    const info = amenityIcons[amenity];
                    if (!info) return null;
                    const Icon = info.icon;
                    return (
                      <div key={amenity} className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(196,85,26,0.1)', borderRadius: '2px' }}>
                          <Icon className="w-5 h-5" style={{ color: 'var(--terracotta)' }} />
                        </div>
                        <span style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--warm-brown-light)' }}>{info.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Carte politique */}
            <div className="p-8" style={{ background: 'white', boxShadow: '0 2px 20px rgba(61,43,31,0.08)', borderRadius: '2px', borderTop: '4px solid var(--teal)' }}>
              <h2 className="text-2xl font-semibold mb-5" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}>
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
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--teal)' }} />
                    <span style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--warm-brown-light)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne droite : réservation */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 p-7 shadow-2xl" style={{ background: 'white', borderRadius: '2px', borderTop: '4px solid var(--terracotta)' }}>
              <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}>
                Reservar esta habitación
              </h3>

              <div className="space-y-4 mb-6">
                {/* Sélecteur de dates unique */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}>
                    Fechas de estadía
                  </label>
                  <RangePicker
                    checkIn={checkIn}
                    checkOut={checkOut}
                    onChange={(from, to) => { setCheckIn(from); setCheckOut(to); }}
                  />
                  <div className="mt-1.5 text-xs" style={{ fontFamily: "'Crimson Pro', serif", minHeight: '18px' }}>
                    {checkIn && !checkOut && (
                      <span style={{ color: 'var(--terracotta)' }}>→ Haz clic ahora en la fecha de salida</span>
                    )}
                    {checkIn && checkOut && nights > 0 && (
                      <span style={{ color: 'var(--teal)' }}>✓ {nights} noche{nights > 1 ? 's' : ''} seleccionada{nights > 1 ? 's' : ''}</span>
                    )}
                  </div>
                </div>

                {/* Nombre de personnes */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}>
                    Número de personas
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full px-4 py-2.5 border focus:outline-none"
                    style={{ borderColor: 'var(--cream-dark)', borderRadius: '2px', fontFamily: "'Crimson Pro', serif", color: 'var(--warm-brown)', background: 'var(--cream)' }}
                  >
                    {Array.from({ length: room.capacity }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n}>{n} persona{n > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Récap durée */}
              {checkIn && checkOut && nights > 0 && (
                <div className="mb-6 p-4" style={{ background: 'var(--cream)', borderRadius: '2px' }}>
                  <div className="flex justify-between">
                    <span className="font-semibold" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}>Duración de estadía</span>
                    <span className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--terracotta)' }}>
                      {nights} noche{nights > 1 ? 's' : ''}
                    </span>
                  </div>
                </div>
              )}

              <WhatsAppButton message={generateWhatsAppMessage()} size="lg" className="w-full mb-3" />
              <p className="text-xs text-center" style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--warm-brown-light)' }}>
                Reservación instantánea por WhatsApp
              </p>
            </div>
          </div>
        </div>

        {/* Autres chambres */}
        <div className="mt-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1" style={{ background: 'var(--cream-dark)' }} />
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}>
              Otras habitaciones
            </h2>
            <div className="h-px flex-1" style={{ background: 'var(--cream-dark)' }} />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {hotelData.rooms
              .filter(r => r.id !== room.id)
              .slice(0, 3)
              .map((otherRoom) => (
                <Link key={otherRoom.id} href={`/chambres/${otherRoom.slug}`}>
                  <div className="card-lift overflow-hidden cursor-pointer" style={{ background: 'white', borderRadius: '2px', boxShadow: '0 2px 12px rgba(61,43,31,0.08)' }}>
                    <div className="relative h-48 img-zoom">
                      <Image src={otherRoom.images[0].src} alt={otherRoom.images[0].alt} fill className="object-cover" loading="lazy" sizes="(max-width: 768px) 100vw, 33vw" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-1" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}>
                        {otherRoom.type}
                      </h3>
                      <p className="text-sm" style={{ color: 'var(--warm-brown-light)', fontFamily: "'Crimson Pro', serif" }}>
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