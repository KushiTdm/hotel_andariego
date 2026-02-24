'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  flag: string;
  text: string;
  summary: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Freddy V.',
    flag: '🇪🇨',
    text: "Une expérience excellente. L'accueil très chaleureux depuis l'arrivée jusqu'au départ. Ils ont accepté mes animaux avec beaucoup d'amour et de respect. Les installations sont propres et très confortables. Recommandé !",
    summary: "Accueil chaleureux pour vous et vos animaux. Chambres propres et confortables.",
    rating: 5
  },
  {
    id: 2,
    name: 'Ari T.',
    flag: '🇪🇨',
    text: "Nous avons séjourné 2 nuits mais aurions aimé rester plus longtemps ! C'est l'hôtel le plus propre où nous ayons été. L'équipe nous a aidés avec nos problèmes de vols et nous a donné d'excellents conseils sur les environs. Très bien situé près de la place principale avec une cuisine bien équipée.",
    summary: "Propreté impeccable, équipe aux petits soins, idéalement situé près de la place centrale.",
    rating: 5
  },
  {
    id: 3,
    name: 'Elise C.',
    flag: '🇫🇷',
    text: "Super auberge en plein centre-ville. Idéalement placée pour profiter d'Otavalo, à quelques pas de la place centrale et à 10 minutes à pied du terminal de bus. Les propriétaires sont adorables et font tout pour améliorer votre confort. Cuisine disponible, douche chaude... le confort est idéal.",
    summary: "Emplacement parfait, propriétaires adorables, toutes les commodités nécessaires.",
    rating: 5
  },
  {
    id: 4,
    name: 'Andrew M.',
    flag: '🇺🇸',
    text: "Hôtel moderne et bien pensé. Le propriétaire est très sympathique. Excellent rapport qualité-prix pour ce niveau de confort dans la ville. Un endroit fantastique !",
    summary: "Hôtel moderne, excellent rapport qualité-prix, accueil sympathique.",
    rating: 5
  },
  {
    id: 5,
    name: 'Nicole R.',
    flag: '🇺🇸',
    text: "Emplacement génial entre la Plaza de Los Ponchos et la Plaza Simón Bolívar. Un hôtel simple mais qui en vaut vraiment le prix. Je suggère de réserver en ligne pour une réduction. Très bonne expérience globale !",
    summary: "Emplacement stratégique entre les deux places principales, bon rapport qualité-prix.",
    rating: 5
  }
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 px-4" style={{ backgroundColor: 'var(--warm-brown)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span style={{ color: 'var(--ochre-light)', fontSize: '20px' }}>◆</span>
            <span style={{ color: 'var(--teal-light)', fontSize: '14px' }}>◆</span>
            <span style={{ color: 'var(--terracotta-light)', fontSize: '20px' }}>◆</span>
          </div>
          <h2 className="text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: 'var(--cream)' }}>
            Ce que disent nos voyageurs
          </h2>
          <p className="text-xl max-w-2xl mx-auto"
            style={{ fontFamily: "'Crimson Pro', serif", color: 'rgba(245,239,224,0.7)' }}>
            Des expériences authentiques partagées par nos hôtes du monde entier
          </p>
        </div>

        {/* Carousel container */}
        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 z-10 w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{ 
              background: 'var(--terracotta)', 
              color: 'white', 
              borderRadius: '50%', 
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)', 
              transform: 'translateY(-50%) translateX(-50%)',
            }}
            aria-label="Précédent"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 z-10 w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{ 
              background: 'var(--terracotta)', 
              color: 'white', 
              borderRadius: '50%', 
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)', 
              transform: 'translateY(-50%) translateX(50%)',
            }}
            aria-label="Suivant"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial card */}
          <div className="overflow-hidden mx-12">
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-500 ${
                    index === currentIndex 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 absolute inset-0 translate-x-8 pointer-events-none'
                  }`}
                >
                  <div 
                    className="text-center p-10 rounded-sm"
                    style={{
                      background: 'rgba(245,239,224,0.05)',
                      border: '1px solid rgba(212,137,42,0.2)',
                    }}
                  >
                    {/* Quote icon */}
                    <div className="flex justify-center mb-6">
                      <Quote 
                        className="w-12 h-12" 
                        style={{ color: 'var(--ochre)', opacity: 0.6 }} 
                      />
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-6">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-5 h-5 fill-current" 
                          style={{ color: 'var(--ochre-light)' }} 
                        />
                      ))}
                    </div>

                    {/* Summary badge */}
                    <div 
                      className="inline-block px-4 py-2 rounded-sm mb-6"
                      style={{ 
                        background: 'rgba(196,85,26,0.2)',
                        border: '1px solid rgba(196,85,26,0.3)',
                      }}
                    >
                      <p 
                        className="text-sm font-semibold"
                        style={{ 
                          fontFamily: "'Playfair Display', serif", 
                          color: 'var(--ochre-light)' 
                        }}
                      >
                        {testimonial.summary}
                      </p>
                    </div>

                    {/* Testimonial text */}
                    <p 
                      className="text-xl leading-relaxed max-w-3xl mx-auto mb-8"
                      style={{ 
                        fontFamily: "'Crimson Pro', serif", 
                        color: 'rgba(245,239,224,0.9)',
                        fontStyle: 'italic'
                      }}
                    >
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-2xl">{testimonial.flag}</span>
                      <p 
                        className="font-semibold text-lg"
                        style={{ 
                          fontFamily: "'Playfair Display', serif", 
                          color: 'var(--cream)' 
                        }}
                      >
                        {testimonial.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="transition-all duration-300"
                style={{ 
                  width: currentIndex === index ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: currentIndex === index 
                    ? 'var(--terracotta)' 
                    : 'rgba(245,239,224,0.3)',
                }}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div 
            className="inline-flex items-center gap-6 px-8 py-4 rounded-sm"
            style={{ 
              background: 'rgba(245,239,224,0.05)',
              border: '1px solid rgba(212,137,42,0.15)',
            }}
          >
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-current" style={{ color: 'var(--ochre-light)' }} />
              <span 
                className="font-semibold"
                style={{ fontFamily: "'Playfair Display', serif", color: 'var(--cream)' }}
              >
                4.9/5
              </span>
              <span 
                className="text-sm"
                style={{ color: 'rgba(245,239,224,0.6)' }}
              >
                note moyenne
              </span>
            </div>
            <div 
              className="w-px h-6"
              style={{ background: 'rgba(245,239,224,0.2)' }}
            />
            <div className="flex items-center gap-2">
              <span 
                className="font-semibold"
                style={{ fontFamily: "'Playfair Display', serif", color: 'var(--cream)' }}
              >
                500+
              </span>
              <span 
                className="text-sm"
                style={{ color: 'rgba(245,239,224,0.6)' }}
              >
                voyageurs satisfaits
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative band */}
      <div className="mt-20 h-1 max-w-4xl mx-auto rounded-full" style={{
        background: 'repeating-linear-gradient(90deg, var(--terracotta) 0px, var(--terracotta) 16px, var(--ochre) 16px, var(--ochre) 32px, var(--teal-light) 32px, var(--teal-light) 48px, var(--ochre) 48px, var(--ochre) 64px)'
      }} />
    </section>
  );
}