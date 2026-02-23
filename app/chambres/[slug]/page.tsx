'use client';

import { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Users, Wifi, Tv, ShowerHead, Home, CheckCircle } from 'lucide-react';
import { format, addDays } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DatePicker } from '@/components/DatePicker';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import hotelData from '@/data/hotel.json';

const amenityIcons: Record<string, any> = {
  wifi: { icon: Wifi, label: 'WiFi gratuit' },
  tv: { icon: Tv, label: 'Télévision' },
  shower: { icon: ShowerHead, label: 'Salle de bain privée' },
  balcony: { icon: Home, label: 'Balcon' },
};

export default function RoomPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const room = hotelData.rooms.find(r => r.slug === resolvedParams.slug);
  const [checkIn, setCheckIn] = useState<Date | undefined>();
  const [checkOut, setCheckOut] = useState<Date | undefined>();
  const [guests, setGuests] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Chambre non trouvée</h1>
          <Link href="/">
            <Button>Retour à l'accueil</Button>
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

  const minCheckOut = checkIn ? addDays(checkIn, 1) : addDays(new Date(), 1);

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <WhatsAppButton message={generateWhatsAppMessage()} variant="fixed" />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link href="/#chambres">
          <Button variant="ghost" className="mb-8 hover:bg-orange-100">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux chambres
          </Button>
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-4 shadow-2xl">
              <Image
                src={room.images[currentImage]}
                alt={room.type}
                fill
                className="object-cover"
                priority
              />
              <Badge className="absolute top-4 right-4 bg-orange-600 text-white border-none text-lg px-4 py-2">
                ${room.price}/nuit
              </Badge>
            </div>

            <div className="flex gap-4 mb-8">
              {room.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`relative h-24 w-32 rounded-lg overflow-hidden flex-shrink-0 ${
                    currentImage === index ? 'ring-4 ring-orange-600' : 'opacity-60 hover:opacity-100'
                  } transition-all`}
                >
                  <Image
                    src={image}
                    alt={`${room.type} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {room.type}
              </h1>

              <div className="flex items-center gap-6 mb-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>Jusqu'à {room.capacity} personne{room.capacity > 1 ? 's' : ''}</span>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {room.description}
              </p>

              <div className="border-t pt-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Équipements
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {room.amenities.map((amenity) => {
                    const amenityInfo = amenityIcons[amenity];
                    if (!amenityInfo) return null;
                    const Icon = amenityInfo.icon;

                    return (
                      <div key={amenity} className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                          <Icon className="w-5 h-5 text-orange-600" />
                        </div>
                        <span className="text-gray-700">{amenityInfo.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Informations importantes
              </h2>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{hotelData.cancellationPolicy}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Check-in: 14h00 | Check-out: 12h00</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{hotelData.pets}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Paiement: {hotelData.paymentMethods.join(', ')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-8 shadow-xl border-2 border-orange-100">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Réserver cette chambre
                </h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre de personnes
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                    >
                      {Array.from({ length: room.capacity }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={n}>
                          {n} personne{n > 1 ? 's' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {checkIn && checkOut && (
                  <div className="bg-orange-50 rounded-lg p-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700">
                        ${room.price} x {Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))} nuit(s)
                      </span>
                      <span className="font-semibold text-gray-900">
                        ${room.price * Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))}
                      </span>
                    </div>
                    <div className="border-t border-orange-200 pt-2 mt-2">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-gray-900">Total</span>
                        <span className="text-2xl font-bold text-orange-600">
                          ${room.price * Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                <WhatsAppButton
                  message={generateWhatsAppMessage()}
                  size="lg"
                  className="w-full text-lg py-6"
                />

                <p className="text-sm text-gray-600 text-center mt-4">
                  Réservation instantanée via WhatsApp
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Autres chambres disponibles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {hotelData.rooms
              .filter(r => r.id !== room.id)
              .slice(0, 3)
              .map((otherRoom) => (
                <Link key={otherRoom.id} href={`/chambres/${otherRoom.slug}`}>
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer">
                    <div className="relative h-48">
                      <Image
                        src={otherRoom.images[0]}
                        alt={otherRoom.type}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{otherRoom.type}</h3>
                      <p className="text-orange-600 font-bold">${otherRoom.price}/nuit</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
