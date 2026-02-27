'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback, useRef } from 'react';

const allCommonAreaPhotos = [
  { src: '/assets/common_area/bibliotheca_sofa.webp', alt: 'hotel el Andariego' },
  { src: '/assets/common_area/colored_stairs.webp', alt: 'hotel el Andariego' },
  { src: '/assets/common_area/common_path.webp', alt: 'hotel el Andariego' },
  { src: '/assets/common_area/common_space_with_sofa.webp', alt: 'hotel el Andariego' },
  { src: '/assets/common_area/entry_desk_sofa.webp', alt: 'hotel el Andariego' },
  { src: '/assets/common_area/hotel_building.webp', alt: 'hotel el Andariego' },
  { src: '/assets/common_area/kitchen.webp', alt: 'hotel el Andariego' },
  { src: '/assets/common_area/reception.webp', alt: 'hotel el Andariego' },
  { src: '/assets/common_area/salon.webp', alt: 'hotel el Andariego' },
  { src: '/assets/common_area/sofa_table.webp', alt: 'hotel el Andariego' },
  { src: '/assets/common_area/table_bar.webp', alt: 'hotel el Andariego' },
  { src: '/assets/common_area/terraza.webp', alt: 'hotel el Andariego' },
];

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

type Photo = typeof allCommonAreaPhotos[0];
type Phase = 'idle' | 'exiting' | 'entering';

interface Slot {
  current: Photo;
  next: Photo | null;
  phase: Phase;
}

export function GalleryStrip() {
  const [slots, setSlots] = useState<Slot[]>(() =>
    allCommonAreaPhotos.slice(0, 4).map((img) => ({ current: img, next: null, phase: 'idle' as Phase }))
  );
  const [revealed, setRevealed] = useState([false, false, false, false]);
  const sectionRef = useRef<HTMLElement>(null);

  const queueRef = useRef<{ photos: Photo[]; position: number }>({
    photos: shuffleArray(allCommonAreaPhotos),
    position: 4,
  });

  const getNextPhoto = useCallback((currentSrcs: string[]): Photo => {
    const queue = queueRef.current;
    let attempts = 0;
    while (attempts < queue.photos.length) {
      if (queue.position >= queue.photos.length) {
        queue.photos = shuffleArray(allCommonAreaPhotos);
        queue.position = 0;
      }
      const photo = queue.photos[queue.position++];
      if (!currentSrcs.includes(photo.src)) return photo;
      attempts++;
    }
    queue.photos = shuffleArray(allCommonAreaPhotos);
    queue.position = 1;
    return queue.photos[0];
  }, []);

  // Stagger reveal on scroll into view
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          [0, 1, 2, 3].forEach((i) =>
            setTimeout(() =>
              setRevealed((prev) => { const n = [...prev]; n[i] = true; return n; }),
              i * 140
            )
          );
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(section);
    return () => obs.disconnect();
  }, []);

  // Image rotation: exiting → swap → entering → idle
  useEffect(() => {
    const interval = setInterval(() => {
      const idx = Math.floor(Math.random() * 4);

      // Step 1: mark slot as exiting, preload next
      setSlots((prev) => {
        const srcs = prev.map((s) => s.current.src);
        const next = getNextPhoto(srcs);
        const updated = [...prev];
        updated[idx] = { ...updated[idx], next, phase: 'exiting' };
        return updated;
      });

      // Step 2: swap image, enter phase
      setTimeout(() => {
        setSlots((prev) => {
          const updated = [...prev];
          if (updated[idx].next) {
            updated[idx] = { current: updated[idx].next!, next: null, phase: 'entering' };
          }
          return updated;
        });
      }, 500);

      // Step 3: idle
      setTimeout(() => {
        setSlots((prev) => {
          const updated = [...prev];
          updated[idx] = { ...updated[idx], phase: 'idle' };
          return updated;
        });
      }, 1050);

    }, 3200);

    return () => clearInterval(interval);
  }, [getNextPhoto]);

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 px-4 relative overflow-hidden"
      style={{ backgroundColor: 'var(--warm-brown)' }}
    >
      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.025,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex items-center justify-center gap-3 sm:gap-5 mb-6 sm:mb-8">
          <div
            className="h-px w-8 sm:w-12 md:w-16"
            style={{
              background: 'repeating-linear-gradient(90deg, var(--terracotta) 0, var(--terracotta) 6px, var(--ochre) 6px, var(--ochre) 12px)',
            }}
          />
          <p
            className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em]"
            style={{ color: 'var(--ochre-light)', fontFamily: "'Crimson Pro', serif" }}
          >
            Otavalo · Imbabura · Ecuador
          </p>
          <div
            className="h-px w-8 sm:w-12 md:w-16"
            style={{
              background: 'repeating-linear-gradient(90deg, var(--ochre) 0, var(--ochre) 6px, var(--terracotta) 6px, var(--terracotta) 12px)',
            }}
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
          {slots.map((slot, i) => {
            const isExiting = slot.phase === 'exiting';
            const isEntering = slot.phase === 'entering';

            return (
              <div
                key={i}
                className="gallery-cell relative overflow-hidden group"
                style={{
                  borderRadius: '2px',
                  height: '180px',
                  // Stagger reveal
                  opacity: revealed[i] ? 1 : 0,
                  transform: revealed[i] ? 'translateY(0)' : 'translateY(28px)',
                  transition: `opacity 0.6s ease ${i * 0.14}s, transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94) ${i * 0.14}s`,
                }}
              >
                {/* Andean textile stripe — thickens on hover */}
                <div
                  className="absolute top-0 left-0 right-0 z-20"
                  style={{
                    height: '2px',
                    background: 'repeating-linear-gradient(90deg, #C4551A 0, #C4551A 10px, #D4892A 10px, #D4892A 20px, #2A7B6F 20px, #2A7B6F 30px, #D4892A 30px, #D4892A 40px)',
                    transition: 'height 0.3s ease',
                  }}
                />

                {/* Image wrapper — handles exit/enter transforms */}
                <div
                  className="gallery-img-wrap absolute inset-0"
                  style={{
                    opacity: isExiting ? 0 : 1,
                    transform: isExiting
                      ? 'scale(1.14) translateY(-4px)'
                      : isEntering
                      ? 'scale(1.07)'
                      : 'scale(1)',
                    transition: isExiting
                      ? 'opacity 0.45s cubic-bezier(0.4,0,1,1), transform 0.45s ease'
                      : isEntering
                      ? 'opacity 0.55s cubic-bezier(0,0,0.2,1) 0.04s, transform 0.65s cubic-bezier(0.25,0.46,0.45,0.94) 0.04s'
                      : 'transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)',
                  }}
                >
                  <Image
                    src={slot.current.src}
                    alt={slot.current.alt}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>

                {/* Andean shimmer flash on entering */}
                <div
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(212,137,42,0.22) 0%, rgba(196,85,26,0.1) 40%, transparent 65%)',
                    opacity: isEntering ? 1 : 0,
                    transition: isEntering ? 'opacity 0.25s ease' : 'opacity 0.6s ease 0.1s',
                  }}
                />

                {/* Permanent gradient overlay */}
                <div
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, rgba(30,15,5,0.68) 0%, rgba(30,15,5,0.06) 55%, transparent 100%)',
                  }}
                />

                {/* Caption — revealed on hover via CSS */}
                <div
                  className="gallery-caption absolute bottom-0 left-0 right-0 z-20 px-3 pb-3 pt-6"
                  style={{
                    transform: 'translateY(100%)',
                    opacity: 0,
                    transition: 'transform 0.38s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.38s ease',
                    background: 'linear-gradient(to top, rgba(30,15,5,0.7) 0%, transparent 100%)',
                  }}
                >
                  <p
                    style={{
                      color: 'rgba(245,239,224,0.88)',
                      fontFamily: "'Crimson Pro', serif",
                      fontSize: '12px',
                      fontStyle: 'italic',
                      textShadow: '0 1px 3px rgba(0,0,0,0.6)',
                    }}
                  >
                    {slot.current.alt}
                  </p>
                </div>

                {/* Hover corner diamond */}
                <span
                  className="gallery-diamond absolute top-3 right-3 z-20 text-xs pointer-events-none"
                  style={{
                    color: 'var(--ochre)',
                    opacity: 0,
                    transform: 'scale(0.4) rotate(-60deg)',
                    transition: 'opacity 0.3s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1)',
                  }}
                >
                  ◆
                </span>
              </div>
            );
          })}
        </div>

        {/* Bottom ornament */}
        <div
          className="mt-8 mx-auto"
          style={{
            height: '2px',
            maxWidth: '280px',
            borderRadius: '2px',
            background: 'repeating-linear-gradient(90deg, var(--terracotta) 0px, var(--terracotta) 16px, var(--ochre) 16px, var(--ochre) 32px, #2A7B6F 32px, #2A7B6F 48px, var(--ochre) 48px, var(--ochre) 64px)',
          }}
        />
      </div>

      {/* Scoped group-hover CSS */}
      <style>{`
        .gallery-cell:hover .gallery-caption {
          transform: translateY(0) !important;
          opacity: 1 !important;
        }
        .gallery-cell:hover .gallery-img-wrap {
          transform: scale(1.07) !important;
        }
        .gallery-cell:hover .gallery-diamond {
          opacity: 0.9 !important;
          transform: scale(1) rotate(0deg) !important;
        }
        .gallery-cell:hover > div:first-of-type {
          height: 3px;
        }
      `}</style>
    </section>
  );
}