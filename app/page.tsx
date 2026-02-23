import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin, Phone, Mail, Wifi, Coffee, Clock, Bus,
  Sparkles, UtensilsCrossed, Mountain, Star, Instagram,
  Facebook, Award, CheckCircle, Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { RoomCard } from '@/components/RoomCard';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import hotelData from '@/data/hotel.json';

const iconMap: Record<string, any> = {
  Wifi, Coffee, Clock, Bus, Sparkles, UtensilsCrossed,
  Mountain, ShowerHead: Sparkles, Home: Mountain,
  ParkingCircle: MapPin, Shirt: Sparkles
};

export default function Home() {
  const whatsappMessage = `Bonjour! Je souhaite obtenir plus d'informations sur l'Hotel El Andariego à Otavalo.`;

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <WhatsAppButton message={whatsappMessage} variant="fixed" />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Hotel El Andariego"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            {hotelData.name}
          </h1>
          <p className="text-2xl md:text-3xl mb-4 font-light">
            {hotelData.tagline}
          </p>
          <p className="text-xl md:text-2xl mb-8 text-orange-200 max-w-3xl mx-auto">
            {hotelData.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="#chambres">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-6">
                Découvrir nos chambres
              </Button>
            </Link>
            <WhatsAppButton
              message={whatsappMessage}
              size="lg"
              className="text-lg px-8 py-6"
            />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full" />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="À propos de l'hôtel"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Bienvenue à Otavalo
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Niché au cœur d'Otavalo, notre hôtel est le point de départ idéal pour explorer
                le célèbre marché artisanal, les lagunes andines et les communautés indigènes.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Avec {hotelData.info.rooms} chambres réparties sur {hotelData.info.floors} étages,
                nous pouvons accueillir jusqu'à {hotelData.info.capacity} personnes dans une ambiance
                chaleureuse et authentique.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Emplacement central</p>
                    <p className="text-sm text-gray-600">Cœur d'Otavalo</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Service excellent</p>
                    <p className="text-sm text-gray-600">Équipe dédiée 24/7</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Vue panoramique</p>
                    <p className="text-sm text-gray-600">Rooftop unique</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Pour tous</p>
                    <p className="text-sm text-gray-600">Couples à backpackers</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                <a href="#contact">Nous contacter</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="chambres" className="py-20 px-4 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Nos Chambres
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Du dortoir convivial aux chambres familiales spacieuses,
              trouvez l'hébergement parfait pour votre séjour
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotelData.rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Services & Équipements
            </h2>
            <p className="text-xl text-gray-600">
              Tout pour rendre votre séjour inoubliable
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hotelData.services.map((service) => {
              const Icon = iconMap[service.icon] || Star;
              return (
                <Card key={service.id} className="hover:shadow-lg transition-shadow border-none bg-orange-50">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-8">
                Contactez-nous
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Adresse</h3>
                    <p className="text-gray-600">
                      {hotelData.address.street}<br />
                      {hotelData.address.city}, {hotelData.address.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Téléphone</h3>
                    <a href={`tel:${hotelData.contact.phone}`} className="text-gray-600 hover:text-orange-600">
                      {hotelData.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href={`mailto:${hotelData.contact.email}`} className="text-gray-600 hover:text-orange-600 break-all">
                      {hotelData.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-4 text-lg">Suivez-nous</h3>
                <div className="flex gap-4">
                  <a
                    href={hotelData.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href={hotelData.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href={hotelData.socialMedia.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                    </svg>
                  </a>
                </div>
              </div>

              <WhatsAppButton
                message={whatsappMessage}
                size="lg"
                className="w-full"
              />
            </div>

            <div className="h-96 md:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src={`https://www.google.com/maps?q=${hotelData.address.coordinates.lat},${hotelData.address.coordinates.lng}&hl=es&z=15&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">{hotelData.name}</h3>
              <p className="text-gray-400 mb-4">
                {hotelData.tagline}
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Informations</h4>
              <ul className="space-y-2 text-gray-400">
                <li>• {hotelData.pets}</li>
                <li>• {hotelData.cancellationPolicy}</li>
                <li>• Paiement: {hotelData.paymentMethods.join(', ')}</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Horaires</h4>
              <p className="text-gray-400">
                Réception ouverte 24h/24<br />
                Check-in: 14h00<br />
                Check-out: 12h00
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 {hotelData.name}. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
