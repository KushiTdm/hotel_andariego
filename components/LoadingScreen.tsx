'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export function LoadingScreen() {
  const [phase, setPhase] = useState<'visible' | 'fading' | 'gone'>('visible');

  useEffect(() => {
    // Démarre le fade-out après 2.2s
    const fadeTimer = setTimeout(() => setPhase('fading'), 2200);
    // Retire complètement du DOM après la transition
    const goneTimer = setTimeout(() => setPhase('gone'), 3000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(goneTimer);
    };
  }, []);

  if (phase === 'gone') return null;

  return (
    <div
      className="loading-screen"
      style={{
        opacity: phase === 'fading' ? 0 : 1,
        transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {/* ── Fond principal avec texture andine ── */}
      <div className="loading-bg" />

      {/* ── Motif géométrique animé en arrière-plan ── */}
      <svg className="loading-geo" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice">
        {/* Losanges concentriques animés */}
        {[1, 2, 3, 4, 5].map((i) => (
          <polygon
            key={i}
            points="400,60 740,400 400,740 60,400"
            fill="none"
            stroke={i % 2 === 0 ? 'rgba(212,137,42,0.12)' : 'rgba(196,85,26,0.10)'}
            strokeWidth="1.5"
            style={{
              transform: `scale(${0.2 + i * 0.18})`,
              transformOrigin: '400px 400px',
              animation: `spin-slow ${8 + i * 3}s linear infinite ${i % 2 === 0 ? 'reverse' : ''}`,
            }}
          />
        ))}
        {/* Croix andine centrale */}
        <line x1="400" y1="200" x2="400" y2="600" stroke="rgba(42,123,111,0.15)" strokeWidth="1" />
        <line x1="200" y1="400" x2="600" y2="400" stroke="rgba(42,123,111,0.15)" strokeWidth="1" />
        {/* Points aux 4 coins */}
        {[[400, 160], [640, 400], [400, 640], [160, 400]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="4" fill="rgba(212,137,42,0.25)"
            style={{ animation: `pulse-dot 2s ease-in-out infinite`, animationDelay: `${i * 0.5}s` }} />
        ))}
      </svg>

      {/* ── Bande textile animée en haut ── */}
      <div className="loading-stripe loading-stripe--top" />

      {/* ── Bande textile animée en bas ── */}
      <div className="loading-stripe loading-stripe--bottom" />

      {/* ── Contenu central ── */}
      <div className="loading-content">

        {/* Ornement supérieur */}
        <div className="loading-ornament" style={{ animationDelay: '0.1s' }}>
          <div className="loading-line" />
          <span className="loading-diamond">◆</span>
          <span className="loading-diamond loading-diamond--sm">◆</span>
          <span className="loading-diamond">◆</span>
          <div className="loading-line" />
        </div>

        {/* Sous-titre lieu */}
        <p className="loading-location" style={{ animationDelay: '0.2s' }}>
          Otavalo · Ecuador
        </p>

        {/* Logo */}
        <div className="loading-logo-wrap" style={{ animationDelay: '0.3s' }}>
          {/* Halo décoratif */}
          <div className="loading-logo-halo" />
          <div className="loading-logo-ring" />
          <div className="loading-logo-img">
            <Image
              src="/assets/logo/logo_andariego.png"
              alt="Hotel El Andariego"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Nom de l'hôtel */}
        <h1 className="loading-title" style={{ animationDelay: '0.45s' }}>
          El Andariego
        </h1>

        {/* Tagline */}
        <p className="loading-tagline" style={{ animationDelay: '0.55s' }}>
          Tu refugio auténtico en el corazón de Otavalo
        </p>

        {/* Ornement inférieur */}
        <div className="loading-ornament" style={{ animationDelay: '0.65s' }}>
          <div className="loading-line" />
          <span className="loading-diamond loading-diamond--teal">◆</span>
          <span className="loading-diamond loading-diamond--sm loading-diamond--ochre">◆</span>
          <span className="loading-diamond loading-diamond--teal">◆</span>
          <div className="loading-line" />
        </div>

        {/* Barre de progression */}
        <div className="loading-progress-wrap" style={{ animationDelay: '0.8s' }}>
          <div className="loading-progress-bar" />
        </div>

      </div>

      <style>{`
        .loading-screen {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        /* Fond avec texture grain */
        .loading-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 30% 20%, rgba(196,85,26,0.18) 0%, transparent 55%),
            radial-gradient(ellipse at 70% 80%, rgba(42,123,111,0.15) 0%, transparent 55%),
            radial-gradient(ellipse at 50% 50%, rgba(212,137,42,0.08) 0%, transparent 70%),
            #2A1A0E;
        }

        /* Texture de bruit subtile */
        .loading-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          opacity: 0.04;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }

        /* Géométrie SVG en arrière-plan */
        .loading-geo {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        /* Bandes textiles */
        .loading-stripe {
          position: absolute;
          left: 0;
          right: 0;
          height: 8px;
          background: repeating-linear-gradient(
            90deg,
            #C4551A 0px, #C4551A 20px,
            #D4892A 20px, #D4892A 40px,
            #2A7B6F 40px, #2A7B6F 60px,
            #D4892A 60px, #D4892A 80px,
            #3D2B1F 80px, #3D2B1F 100px
          );
          animation: stripe-slide 3s linear infinite;
        }

        .loading-stripe--top { top: 0; }
        .loading-stripe--bottom {
          bottom: 0;
          animation-direction: reverse;
        }

        /* Contenu central */
        .loading-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          text-align: center;
          padding: 2rem;
        }

        /* Ornements */
        .loading-ornament {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 12px 0;
          opacity: 0;
          animation: fade-up 0.7s ease forwards;
        }

        .loading-line {
          width: 60px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(212,137,42,0.6), transparent);
        }

        .loading-diamond {
          color: #C4551A;
          font-size: 14px;
          line-height: 1;
        }

        .loading-diamond--sm {
          font-size: 9px;
          color: #D4892A;
        }

        .loading-diamond--teal { color: #2A7B6F; }
        .loading-diamond--ochre { color: #D4892A; }

        /* Lieu */
        .loading-location {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 11px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: rgba(212,137,42,0.75);
          margin: 0 0 20px;
          opacity: 0;
          animation: fade-up 0.7s ease forwards;
        }

        /* Logo wrapper */
        .loading-logo-wrap {
          position: relative;
          width: 120px;
          height: 120px;
          margin: 0 0 28px;
          opacity: 0;
          animation: fade-scale 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        /* Halo lumineux */
        .loading-logo-halo {
          position: absolute;
          inset: -20px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(196,85,26,0.25) 0%, transparent 70%);
          animation: halo-pulse 2.5s ease-in-out infinite;
        }

        /* Anneau décoratif tournant */
        .loading-logo-ring {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          border: 1px solid rgba(212,137,42,0.3);
          border-top-color: rgba(212,137,42,0.7);
          animation: spin-slow 4s linear infinite;
        }

        .loading-logo-ring::before {
          content: '';
          position: absolute;
          inset: 6px;
          border-radius: 50%;
          border: 1px dashed rgba(42,123,111,0.3);
          animation: spin-slow 6s linear infinite reverse;
        }

        /* Image du logo */
        .loading-logo-img {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          box-shadow:
            0 0 0 3px rgba(212,137,42,0.4),
            0 8px 32px rgba(0,0,0,0.5);
          background: #F5EFE0;
        }

        /* Titre */
        .loading-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          color: #F5EFE0;
          letter-spacing: 0.05em;
          margin: 0 0 10px;
          opacity: 0;
          animation: fade-up 0.7s ease forwards;
          text-shadow: 0 2px 20px rgba(0,0,0,0.5);
        }

        /* Tagline */
        .loading-tagline {
          font-family: 'Crimson Pro', Georgia, serif;
          font-style: italic;
          font-size: clamp(0.9rem, 2.5vw, 1.1rem);
          color: rgba(212,137,42,0.8);
          letter-spacing: 0.03em;
          margin: 0 0 24px;
          max-width: 320px;
          opacity: 0;
          animation: fade-up 0.7s ease forwards;
        }

        /* Barre de progression */
        .loading-progress-wrap {
          width: 200px;
          height: 2px;
          background: rgba(245,239,224,0.1);
          border-radius: 2px;
          overflow: hidden;
          opacity: 0;
          animation: fade-up 0.7s ease forwards;
        }

        .loading-progress-bar {
          height: 100%;
          width: 0%;
          background: linear-gradient(90deg, #C4551A, #D4892A, #2A7B6F);
          border-radius: 2px;
          animation: progress-fill 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 0.9s;
        }

        /* ── Keyframes ── */

        @keyframes fade-up {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-scale {
          from { opacity: 0; transform: scale(0.75); }
          to   { opacity: 1; transform: scale(1); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        @keyframes halo-pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.1); }
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 0.3; r: 4; }
          50%       { opacity: 0.9; r: 6; }
        }

        @keyframes stripe-slide {
          from { background-position-x: 0; }
          to   { background-position-x: 100px; }
        }

        @keyframes progress-fill {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}