'use client';

import { SectionHeader } from './SectionHeader';
import { ActivityCard } from './ActivityCard';

const activities = [
  {
    name: 'Plaza de Ponchos',
    image: '/assets/activities/plaza_de_ponchos.webp',
    imageAlt: 'Mercado artesanal Plaza de Ponchos en Otavalo, Ecuador',
    description: 'El mercado artesanal indígena más grande de América Latina',
    walk: '2 min',
    car: null,
    color: 'var(--terracotta)',
    highlight: true,
  },
  {
    name: 'Cascada de Peguche',
    image: '/assets/activities/cascada_de_peguche.webp',
    imageAlt: 'Cascada de Peguche, cascada sagrada kichwa cerca de Otavalo',
    description: 'Cascada sagrada kichwa en el corazón del bosque andino',
    walk: '45 min',
    car: '10 min',
    color: 'var(--teal)',
    highlight: false,
  },
  {
    name: 'Lagunas de Mojanda',
    image: '/assets/activities/lagunas_de_mojanda.webp',
    imageAlt: 'Lagunas de Mojanda, lagos de cráter en los Andes ecuatorianos',
    description: 'Tres lagos de cráter a 3.700 m de altitud, panorama excepcional',
    walk: null,
    car: '30 min',
    color: 'var(--ochre)',
    highlight: false,
  },
  {
    name: 'Laguna de Cuicocha',
    image: '/assets/activities/laguna_de_cuicocha.webp',
    imageAlt: 'Laguna de Cuicocha, lago volcánico en la caldera del Cotacachi',
    description: 'Lago volcánico en la caldera del Cotacachi, isla central mítica',
    walk: null,
    car: '40 min',
    color: 'var(--indigo)',
    highlight: false,
  },
  {
    name: 'Parque Cóndor',
    image: '/assets/activities/parque_condor.webp',
    imageAlt: 'Parque Cóndor, centro de rehabilitación de aves rapaces cerca de Otavalo',
    description: 'Centro de rehabilitación de aves rapaces con vuelos en libertad',
    walk: null,
    car: '20 min',
    color: 'var(--warm-brown)',
    highlight: false,
  },
  {
    name: 'Mirador Lago San Pablo',
    image: '/assets/activities/mirador_lago_san_pablo.webp',
    imageAlt: 'Mirador del Lago San Pablo, vista panorámica del lago sagrado de Otavalo',
    description: 'Vista panorámica espectacular del lago sagrado al pie del Imbabura',
    walk: null,
    car: '15 min',
    color: 'var(--teal)',
    highlight: false,
  },
];

export function Activities() {
  return (
    <section id="activites" className="py-24 px-4" style={{ backgroundColor: 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Qué explorar desde el hotel"
          subtitle="Sucre 10-07 y Colón, Otavalo — todo está al alcance de la mano"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((place) => (
            <ActivityCard key={place.name} {...place} />
          ))}
        </div>
      </div>
    </section>
  );
}