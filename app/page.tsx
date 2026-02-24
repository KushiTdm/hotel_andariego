'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin, Phone, Mail, Wifi, Coffee, Clock, Bus,
  Sparkles, UtensilsCrossed, Mountain, Star, Instagram,
  Facebook, Award, CheckCircle, Users, ChevronDown, ChevronLeft, ChevronRight
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
  const [roomSlide, setRoomSlide] = useState(0);
  const roomsPerSlide = 3;
  const totalSlides = Math.ceil(hotelData.rooms.length / roomsPerSlide);
  const nextSlide = () => setRoomSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setRoomSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  const visibleRooms = hotelData.rooms.slice(roomSlide * roomsPerSlide, roomSlide * roomsPerSlide + roomsPerSlide);

  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--cream)', color: 'var(--warm-brown)' }}>
      <WhatsAppButton message={whatsappMessage} variant="fixed" />

      {/* ── HERO ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={hotelData.hero.image.src}
            alt={hotelData.hero.image.alt}
            fill
            className="object-cover"
            priority
          />
          <div className="hero-overlay absolute inset-0" />
          {/* Andean geometric top border */}
          <div className="absolute top-0 left-0 right-0 h-3 z-10" style={{
            background: 'repeating-linear-gradient(90deg, #C4551A 0px, #C4551A 16px, #D4892A 16px, #D4892A 32px, #2A7B6F 32px, #2A7B6F 48px, #D4892A 48px, #D4892A 64px)'
          }} />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          {/* Kichwa-inspired ornament */}
          <div className="flex items-center justify-center gap-4 mb-6 fade-in-up delay-1">
            <div className="h-px w-16 opacity-60" style={{ background: 'var(--ochre)' }} />
            <span className="text-sm tracking-[0.35em] uppercase opacity-80" style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--ochre-light)' }}>
              Otavalo · Ecuador · Andes
            </span>
            <div className="h-px w-16 opacity-60" style={{ background: 'var(--ochre)' }} />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight fade-in-up delay-2"
            style={{ fontFamily: "'Playfair Display', serif", textShadow: '0 2px 30px rgba(0,0,0,0.4)' }}>
            {hotelData.name}
          </h1>

          <p className="text-xl md:text-2xl mb-3 font-light italic fade-in-up delay-3"
            style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--ochre-light)', letterSpacing: '0.05em' }}>
            {hotelData.tagline}
          </p>

          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed fade-in-up delay-4"
            style={{ color: 'rgba(245,239,224,0.88)', fontFamily: "'Crimson Pro', serif" }}>
            {hotelData.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in-up delay-4">

            {/* Bouton principal — Andean ceremonial style */}
            <Link href="#chambres">
              <button
                className="group relative overflow-hidden"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  letterSpacing: '0.18em',
                  fontSize: '13px',
                }}>
                {/* Outer frame — double border andine */}
                <span className="absolute inset-0 pointer-events-none" style={{
                  border: '1px solid rgba(212,137,42,0.6)',
                  margin: '3px',
                }} />
                <span className="absolute inset-0 pointer-events-none" style={{
                  border: '1px solid rgba(212,137,42,0.25)',
                }} />
                {/* Corner diamonds */}
                <span className="absolute top-0 left-0 w-3 h-3 flex items-center justify-center -translate-x-0.5 -translate-y-0.5"
                  style={{ color: 'var(--ochre)', fontSize: '9px', lineHeight: 1 }}>◆</span>
                <span className="absolute top-0 right-0 w-3 h-3 flex items-center justify-center translate-x-0.5 -translate-y-0.5"
                  style={{ color: 'var(--ochre)', fontSize: '9px', lineHeight: 1 }}>◆</span>
                <span className="absolute bottom-0 left-0 w-3 h-3 flex items-center justify-center -translate-x-0.5 translate-y-0.5"
                  style={{ color: 'var(--ochre)', fontSize: '9px', lineHeight: 1 }}>◆</span>
                <span className="absolute bottom-0 right-0 w-3 h-3 flex items-center justify-center translate-x-0.5 translate-y-0.5"
                  style={{ color: 'var(--ochre)', fontSize: '9px', lineHeight: 1 }}>◆</span>
                {/* Top woven band */}
                <span className="absolute top-0 left-4 right-4 h-0.5" style={{
                  background: 'repeating-linear-gradient(90deg, var(--terracotta) 0, var(--terracotta) 5px, var(--ochre) 5px, var(--ochre) 10px, var(--teal) 10px, var(--teal) 15px, var(--ochre) 15px, var(--ochre) 20px)',
                }} />
                {/* Bottom woven band */}
                <span className="absolute bottom-0 left-4 right-4 h-0.5" style={{
                  background: 'repeating-linear-gradient(90deg, var(--teal) 0, var(--teal) 5px, var(--ochre) 5px, var(--ochre) 10px, var(--terracotta) 10px, var(--terracotta) 15px, var(--ochre) 15px, var(--ochre) 20px)',
                }} />
                {/* Hover fill */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: 'linear-gradient(135deg, rgba(196,85,26,0.85) 0%, rgba(196,85,26,0.95) 100%)' }} />
                {/* Background */}
                <span className="absolute inset-0" style={{ background: 'rgba(196,85,26,0.82)' }} />
                {/* Label */}
                <span className="relative flex items-center gap-3 px-10 py-4 uppercase font-semibold tracking-widest"
                  style={{ color: 'var(--cream)' }}>
                  Découvrir nos chambres
                </span>
              </button>
            </Link>

            {/* Bouton WhatsApp — outline andéen, verre dépoli */}
            <button
              onClick={() => window.open(`https://wa.me/593995941029?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
              className="group relative overflow-hidden"
              style={{
                fontFamily: "'Playfair Display', serif",
                letterSpacing: '0.18em',
                fontSize: '13px',
              }}>
              {/* Outer frame */}
              <span className="absolute inset-0 pointer-events-none" style={{
                border: '1px solid rgba(245,239,224,0.5)',
                margin: '3px',
              }} />
              <span className="absolute inset-0 pointer-events-none" style={{
                border: '1px solid rgba(245,239,224,0.18)',
              }} />
              {/* Corner diamonds */}
              <span className="absolute top-0 left-0 w-3 h-3 flex items-center justify-center -translate-x-0.5 -translate-y-0.5"
                style={{ color: 'rgba(245,239,224,0.6)', fontSize: '9px', lineHeight: 1 }}>◆</span>
              <span className="absolute top-0 right-0 w-3 h-3 flex items-center justify-center translate-x-0.5 -translate-y-0.5"
                style={{ color: 'rgba(245,239,224,0.6)', fontSize: '9px', lineHeight: 1 }}>◆</span>
              <span className="absolute bottom-0 left-0 w-3 h-3 flex items-center justify-center -translate-x-0.5 translate-y-0.5"
                style={{ color: 'rgba(245,239,224,0.6)', fontSize: '9px', lineHeight: 1 }}>◆</span>
              <span className="absolute bottom-0 right-0 w-3 h-3 flex items-center justify-center translate-x-0.5 translate-y-0.5"
                style={{ color: 'rgba(245,239,224,0.6)', fontSize: '9px', lineHeight: 1 }}>◆</span>
              {/* Top woven band */}
              <span className="absolute top-0 left-4 right-4 h-0.5" style={{
                background: 'repeating-linear-gradient(90deg, rgba(245,239,224,0.5) 0, rgba(245,239,224,0.5) 5px, rgba(212,137,42,0.5) 5px, rgba(212,137,42,0.5) 10px, rgba(42,123,111,0.5) 10px, rgba(42,123,111,0.5) 15px, rgba(212,137,42,0.5) 15px, rgba(212,137,42,0.5) 20px)',
              }} />
              {/* Bottom woven band */}
              <span className="absolute bottom-0 left-4 right-4 h-0.5" style={{
                background: 'repeating-linear-gradient(90deg, rgba(42,123,111,0.5) 0, rgba(42,123,111,0.5) 5px, rgba(212,137,42,0.5) 5px, rgba(212,137,42,0.5) 10px, rgba(245,239,224,0.5) 10px, rgba(245,239,224,0.5) 15px, rgba(212,137,42,0.5) 15px, rgba(212,137,42,0.5) 20px)',
              }} />
              {/* Background */}
              <span className="absolute inset-0 transition-colors duration-300"
                style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(8px)' }} />
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'rgba(255,255,255,0.1)' }} />
              {/* Label */}
              <span className="relative flex items-center gap-3 px-10 py-4 uppercase font-semibold"
                style={{ color: 'var(--cream)' }}>
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Réserver par WhatsApp
              </span>
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator absolute bottom-8 left-1/2" style={{ transform: 'translateX(-50%)' }}>
          <ChevronDown className="w-8 h-8 opacity-60" style={{ color: 'var(--ochre-light)' }} />
        </div>
      </section>

      {/* ── ANDEAN BAND ── */}
      <div className="h-8 relative overflow-hidden" style={{
        background: 'repeating-linear-gradient(90deg, var(--terracotta) 0px, var(--terracotta) 20px, var(--ochre) 20px, var(--ochre) 40px, var(--warm-brown) 40px, var(--warm-brown) 60px, var(--teal) 60px, var(--teal) 80px, var(--ochre) 80px, var(--ochre) 100px)'
      }} />

      {/* ── ABOUT ── */}
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
                />
              </div>
              {/* Decorative offset frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-sm -z-10"
                style={{ border: '3px solid var(--terracotta)', opacity: 0.4 }} />
              {/* Floating badge */}
              <div className="absolute -top-5 -left-5 w-24 h-24 flex flex-col items-center justify-center rounded-full shadow-lg text-center"
                style={{ background: 'var(--terracotta)', color: 'white' }}>
                <span className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>16</span>
                <span className="text-xs uppercase tracking-wider leading-tight">chambres</span>
              </div>
            </div>

            <div>
              {/* Geometric ornament */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rotate-45" style={{ background: 'var(--terracotta)', opacity: 0.7 }} />
                <span className="text-sm uppercase tracking-[0.3em]" style={{ color: 'var(--terracotta)', fontFamily: "'Crimson Pro', serif" }}>
                  Notre histoire
                </span>
              </div>

              <h2 className="text-5xl font-bold mb-6 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}>
                Bienvenue à<br />
                <em style={{ color: 'var(--terracotta)' }}>Otavalo</em>
              </h2>

              <p className="text-lg mb-5 leading-relaxed" style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--warm-brown-light)' }}>
                Niché au cœur d'Otavalo, capital artisanale des Andes, notre hôtel est le point de départ idéal pour explorer le célèbre marché kichwa, les lagunes andines et les communautés indigènes aux traditions millénaires.
              </p>
              <p className="text-lg mb-8 leading-relaxed" style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--warm-brown-light)' }}>
                Avec {hotelData.info.rooms} chambres réparties sur {hotelData.info.floors} étages, nous accueillons jusqu'à {hotelData.info.capacity} voyageurs dans une atmosphère chaleureuse qui reflète l'âme andine.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                {[
                  { icon: CheckCircle, title: 'Emplacement central', sub: 'À 2 min du marché' },
                  { icon: Award, title: 'Service authentique', sub: 'Équipe locale 24/7' },
                  { icon: Star, title: 'Vue panoramique', sub: 'Rooftop sur les Andes' },
                  { icon: Users, title: 'Pour tous', sub: 'Couples à backpackers' },
                ].map(({ icon: Icon, title, sub }) => (
                  <div key={title} className="flex items-start gap-3">
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center"
                      style={{ background: 'rgba(196,85,26,0.12)', borderRadius: '2px' }}>
                      <Icon className="w-5 h-5" style={{ color: 'var(--terracotta)' }} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: 'var(--warm-brown)', fontFamily: "'Playfair Display', serif" }}>{title}</p>
                      <p className="text-sm" style={{ color: 'var(--warm-brown-light)' }}>{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEXTILE DIVIDER ── */}
      <div className="textile-border-top textile-border-bottom py-6" style={{ background: 'var(--cream-dark)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-base italic" style={{ fontFamily: "'EB Garamond', serif", color: 'var(--warm-brown-light)', fontSize: '1.1rem' }}>
            "Otavalo, où les fils de coton tissent les légendes des Andes depuis des millénaires"
          </p>
        </div>
      </div>

      {/* ── ROOMS ── */}
      <section id="chambres" className="py-24 px-4" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {/* Andean ornament */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <span style={{ color: 'var(--terracotta)', fontSize: '20px' }}>◆</span>
              <span style={{ color: 'var(--ochre)', fontSize: '14px' }}>◆</span>
              <span style={{ color: 'var(--teal)', fontSize: '20px' }}>◆</span>
            </div>
            <h2 className="text-5xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}>
              Nos Chambres
            </h2>
            <p className="text-xl max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--warm-brown-light)' }}>
              Du dortoir convivial aux chambres familiales spacieuses, trouvez votre nid andin idéal
            </p>
          </div>

          <div className="relative">
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 z-10 w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{ background: 'var(--terracotta)', color: 'white', borderRadius: '50%', boxShadow: '0 4px 12px rgba(0,0,0,0.2)', transform: 'translateY(-50%) translateX(-50%)' }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 z-10 w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{ background: 'var(--terracotta)', color: 'white', borderRadius: '50%', boxShadow: '0 4px 12px rgba(0,0,0,0.2)', transform: 'translateY(-50%) translateX(50%)' }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="overflow-hidden mx-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {visibleRooms.map((room) => (
                  <RoomCard key={room.id} room={room} />
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalSlides }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setRoomSlide(i)}
                  className="w-3 h-3 rounded-full transition-all duration-300"
                  style={{ background: roomSlide === i ? 'var(--terracotta)' : 'var(--cream-dark)', transform: roomSlide === i ? 'scale(1.2)' : 'scale(1)' }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 px-4 andean-pattern" style={{ backgroundColor: 'var(--cream-dark)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span style={{ color: 'var(--teal)', fontSize: '20px' }}>◆</span>
              <span style={{ color: 'var(--ochre)', fontSize: '14px' }}>◆</span>
              <span style={{ color: 'var(--terracotta)', fontSize: '20px' }}>◆</span>
            </div>
            <h2 className="text-5xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}>
              Services & Équipements
            </h2>
            <p className="text-xl" style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--warm-brown-light)' }}>
              Tout pour rendre votre séjour andin inoubliable
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hotelData.services.map((service) => {
              const Icon = iconMap[service.icon] || Star;
              return (
                <div key={service.id}
                  className="card-lift text-center p-7 rounded-sm"
                  style={{
                    background: 'var(--cream)',
                    borderTop: '3px solid var(--terracotta)',
                    boxShadow: '0 2px 12px rgba(61,43,31,0.08)'
                  }}>
                  <div className="w-14 h-14 flex items-center justify-center mx-auto mb-4"
                    style={{ background: 'var(--terracotta)', borderRadius: '50%' }}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}>
                    {service.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--warm-brown-light)' }}>
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── GALLERY STRIP ── */}
      <section className="py-16 px-4" style={{ backgroundColor: 'var(--warm-brown)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {hotelData.galleryStrip.map((image, i) => (
              <div key={i} className="relative h-48 md:h-64 rounded-sm overflow-hidden img-zoom">
                <Image src={image.src} alt={image.alt} fill className="object-cover" />
                <div className="absolute inset-0 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(to top, rgba(61,43,31,0.5), transparent)' }} />
              </div>
            ))}
          </div>
          <p className="text-center mt-6 text-sm uppercase tracking-[0.3em]"
            style={{ color: 'var(--ochre-light)', fontFamily: "'Crimson Pro', serif" }}>
            Otavalo · Imbabura · Ecuador
          </p>
        </div>
      </section>


      {/* ── DISTANCES ── */}
      <section className="py-24 px-4 andean-pattern" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span style={{ color: 'var(--terracotta)', fontSize: '20px' }}>◆</span>
              <span style={{ color: 'var(--ochre)', fontSize: '14px' }}>◆</span>
              <span style={{ color: 'var(--teal)', fontSize: '20px' }}>◆</span>
            </div>
            <h2 className="text-5xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}>
              À explorer depuis l'hôtel
            </h2>
            <p className="text-xl max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--warm-brown-light)' }}>
              Sucre 10-07 y Colón, Otavalo — tout est à portée de main
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Plaza de Ponchos',
                emoji: '🧶',
                description: "Le plus grand marché artisanal indigène d'Amérique latine",
                walk: '2 min',
                car: null,
                color: 'var(--terracotta)',
                highlight: true,
              },
              {
                name: 'Cascada de Peguche',
                emoji: '💧',
                description: "Chute d'eau sacrée kichwa au cœur de la forêt andine",
                walk: '45 min',
                car: '10 min',
                color: 'var(--teal)',
                highlight: false,
              },
              {
                name: 'Lagunas de Mojanda',
                emoji: '🏔️',
                description: "Trois lacs de cratère à 3 700 m d'altitude, panorama exceptionnel",
                walk: null,
                car: '30 min',
                color: 'var(--ochre)',
                highlight: false,
              },
              {
                name: 'Laguna de Cuicocha',
                emoji: '🌋',
                description: 'Lac volcanique dans la caldeira du Cotacachi, île centrale mythique',
                walk: null,
                car: '40 min',
                color: 'var(--indigo)',
                highlight: false,
              },
              {
                name: 'Parque Cóndor',
                emoji: '🦅',
                description: "Centre de réhabilitation d'oiseaux rapaces avec vols en liberté",
                walk: null,
                car: '20 min',
                color: 'var(--warm-brown)',
                highlight: false,
              },
            ].map((place) => (
              <div
                key={place.name}
                className="card-lift relative overflow-hidden"
                style={{
                  background: 'white',
                  borderRadius: '2px',
                  boxShadow: place.highlight
                    ? '0 4px 24px rgba(196,85,26,0.18)'
                    : '0 2px 12px rgba(61,43,31,0.08)',
                  borderTop: `4px solid ${place.color}`,
                }}
              >
                {/* Woven band top */}
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{
                  background: 'repeating-linear-gradient(90deg, var(--terracotta) 0, var(--terracotta) 8px, var(--ochre) 8px, var(--ochre) 16px, var(--teal) 16px, var(--teal) 24px, var(--ochre) 24px, var(--ochre) 32px)'
                }} />

                <div className="p-7">
                  {/* Emoji + name */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 flex items-center justify-center flex-shrink-0 text-2xl rounded-sm"
                      style={{ background: `${place.color}18` }}>
                      {place.emoji}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold leading-tight"
                        style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}>
                        {place.name}
                      </h3>
                      <p className="text-sm mt-1 leading-relaxed"
                        style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--warm-brown-light)' }}>
                        {place.description}
                      </p>
                    </div>
                  </div>

                  {/* Distance badges */}
                  <div className="flex flex-wrap gap-2 mt-4 pt-4" style={{ borderTop: '1px solid var(--cream-dark)' }}>
                    {place.walk && (
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm"
                        style={{ background: 'var(--cream)', border: '1px solid var(--cream-dark)' }}>
                        <span className="text-base">🚶</span>
                        <span className="text-sm font-semibold" style={{ fontFamily: "'Playfair Display', serif", color: place.color }}>
                          {place.walk}
                        </span>
                        <span className="text-xs" style={{ color: 'var(--warm-brown-light)', fontFamily: "'Crimson Pro', serif" }}>à pied</span>
                      </div>
                    )}
                    {place.car && (
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm"
                        style={{ background: 'var(--cream)', border: '1px solid var(--cream-dark)' }}>
                        <span className="text-base">🚗</span>
                        <span className="text-sm font-semibold" style={{ fontFamily: "'Playfair Display', serif", color: place.color }}>
                          {place.car}
                        </span>
                        <span className="text-xs" style={{ color: 'var(--warm-brown-light)', fontFamily: "'Crimson Pro', serif" }}>en voiture</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 px-4" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span style={{ color: 'var(--terracotta)', fontSize: '20px' }}>◆</span>
              <span style={{ color: 'var(--ochre)', fontSize: '14px' }}>◆</span>
              <span style={{ color: 'var(--teal)', fontSize: '20px' }}>◆</span>
            </div>
            <h2 className="text-5xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}>
              Contactez-nous
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6 mb-10">
                {[
                  {
                    icon: MapPin,
                    title: 'Adresse',
                    content: <>{hotelData.address.street}<br />{hotelData.address.city}, {hotelData.address.country}</>
                  },
                  {
                    icon: Phone,
                    title: 'Téléphone',
                    content: <a href={`tel:${hotelData.contact.phone}`} className="hover:underline" style={{ color: 'var(--warm-brown-light)' }}>{hotelData.contact.phone}</a>
                  },
                  {
                    icon: Mail,
                    title: 'Email',
                    content: <a href={`mailto:${hotelData.contact.email}`} className="hover:underline break-all" style={{ color: 'var(--warm-brown-light)' }}>{hotelData.contact.email}</a>
                  },
                ].map(({ icon: Icon, title, content }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center"
                      style={{ background: 'var(--terracotta)', borderRadius: '2px' }}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}>{title}</h3>
                      <p style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--warm-brown-light)' }}>{content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-10">
                <h3 className="font-semibold mb-5 text-base uppercase tracking-[0.2em]"
                  style={{ fontFamily: "'Playfair Display', serif", color: 'var(--terracotta)', fontSize: '12px' }}>
                  ◆ &nbsp;Suivez-nous
                </h3>
                <div className="flex gap-3">
                  <a href={hotelData.socialMedia.instagram} target="_blank" rel="noopener noreferrer"
                    className="group flex items-center gap-2.5 px-4 py-2.5 transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'var(--cream-dark)',
                      borderRadius: '2px',
                      border: '1px solid rgba(61,43,31,0.12)',
                      color: 'var(--warm-brown)',
                      fontFamily: "'Crimson Pro', serif",
                      fontSize: '14px',
                    }}>
                    <span className="w-7 h-7 flex items-center justify-center flex-shrink-0 rounded-sm"
                      style={{ background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)' }}>
                      <Instagram className="w-3.5 h-3.5 text-white" />
                    </span>
                    <span className="font-medium">Instagram</span>
                  </a>
                  <a href={hotelData.socialMedia.facebook} target="_blank" rel="noopener noreferrer"
                    className="group flex items-center gap-2.5 px-4 py-2.5 transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'var(--cream-dark)',
                      borderRadius: '2px',
                      border: '1px solid rgba(61,43,31,0.12)',
                      color: 'var(--warm-brown)',
                      fontFamily: "'Crimson Pro', serif",
                      fontSize: '14px',
                    }}>
                    <span className="w-7 h-7 flex items-center justify-center flex-shrink-0 rounded-sm"
                      style={{ background: '#1877f2' }}>
                      <Facebook className="w-3.5 h-3.5 text-white" />
                    </span>
                    <span className="font-medium">Facebook</span>
                  </a>
                  <a href={hotelData.socialMedia.tiktok} target="_blank" rel="noopener noreferrer"
                    className="group flex items-center gap-2.5 px-4 py-2.5 transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'var(--cream-dark)',
                      borderRadius: '2px',
                      border: '1px solid rgba(61,43,31,0.12)',
                      color: 'var(--warm-brown)',
                      fontFamily: "'Crimson Pro', serif",
                      fontSize: '14px',
                    }}>
                    <span className="w-7 h-7 flex items-center justify-center flex-shrink-0 rounded-sm"
                      style={{ background: '#010101' }}>
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                      </svg>
                    </span>
                    <span className="font-medium">TikTok</span>
                  </a>
                </div>
              </div>

              {/* WhatsApp contact button — style andéen sobre */}
              <button
                onClick={() => window.open(`https://wa.me/593995941029?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
                className="group relative w-full py-4 font-semibold uppercase transition-all duration-300 overflow-hidden"
                style={{
                  background: 'var(--warm-brown)',
                  color: 'var(--cream)',
                  borderRadius: '2px',
                  fontFamily: "'Playfair Display', serif",
                  letterSpacing: '0.15em',
                  fontSize: '13px',
                  boxShadow: '0 4px 20px rgba(61,43,31,0.2)',
                }}>
                {/* Bande textile top */}
                <span className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: 'repeating-linear-gradient(90deg, var(--terracotta) 0, var(--terracotta) 8px, var(--ochre) 8px, var(--ochre) 16px, var(--teal) 16px, var(--teal) 24px, var(--ochre) 24px, var(--ochre) 32px)' }} />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(255,255,255,0.04)' }} />
                <span className="relative flex items-center justify-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Contacter via WhatsApp
                </span>
              </button>
            </div>

            <div className="h-96 md:h-full min-h-[400px] rounded-sm overflow-hidden shadow-2xl"
              style={{ border: '3px solid var(--cream-dark)' }}>
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

      {/* ── FOOTER ── */}
      <footer className="relative textile-border-top pt-8" style={{ background: 'var(--warm-brown)', color: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-4 pb-10">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <h3 className="text-2xl font-bold mb-3"
                style={{ fontFamily: "'Playfair Display', serif", color: 'var(--ochre-light)' }}>
                {hotelData.name}
              </h3>
              <p className="italic mb-1" style={{ fontFamily: "'Crimson Pro', serif", color: 'rgba(245,239,224,0.7)' }}>
                {hotelData.tagline}
              </p>
              <p className="text-sm mt-3" style={{ color: 'rgba(245,239,224,0.5)', fontFamily: "'Crimson Pro', serif" }}>
                {hotelData.address.street}<br />
                {hotelData.address.city}, {hotelData.address.country}
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 uppercase tracking-wider text-sm"
                style={{ color: 'var(--ochre-light)', fontFamily: "'Playfair Display', serif" }}>
                Informations
              </h4>
              <ul className="space-y-2 text-sm" style={{ fontFamily: "'Crimson Pro', serif", color: 'rgba(245,239,224,0.7)' }}>
                <li>• {hotelData.pets}</li>
                <li>• {hotelData.cancellationPolicy}</li>
                <li>• Paiement: {hotelData.paymentMethods.join(', ')}</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 uppercase tracking-wider text-sm"
                style={{ color: 'var(--ochre-light)', fontFamily: "'Playfair Display', serif" }}>
                Horaires
              </h4>
              <p className="text-sm" style={{ fontFamily: "'Crimson Pro', serif", color: 'rgba(245,239,224,0.7)', lineHeight: '2' }}>
                Réception ouverte 24h/24<br />
                Check-in: 14h00<br />
                Check-out: 12h00
              </p>
            </div>
          </div>

          {/* Bottom Andean band */}
          <div className="h-1 mb-6 rounded-full" style={{
            background: 'repeating-linear-gradient(90deg, var(--terracotta) 0px, var(--terracotta) 16px, var(--ochre) 16px, var(--ochre) 32px, var(--teal) 32px, var(--teal) 48px, var(--ochre) 48px, var(--ochre) 64px)'
          }} />

          <div className="text-center text-sm" style={{ color: 'rgba(245,239,224,0.45)', fontFamily: "'Crimson Pro', serif" }}>
            <p>© 2026 {hotelData.name} · Otavalo, Ecuador. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}