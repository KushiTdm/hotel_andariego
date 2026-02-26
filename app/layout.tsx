import './globals.css';
import type { Metadata } from 'next';
import { LoadingScreen } from '@/components/LoadingScreen';
import { LanguageProvider } from '@/lib/language-context';

export const metadata: Metadata = {
  metadataBase: new URL('https://hotel-elandariego-test.netlify.app'),
  title: {
    default: 'Hotel El Andariego | Otavalo, Ecuador — Hébergement Authentique Andin',
    template: '%s | Hotel El Andariego — Otavalo',
  },
  description:
    "Découvrez l'authenticité des Andes équatoriennes à l'Hotel El Andariego, au cœur d'Otavalo. Chambres confortables, petit-déjeuner inclus, vue sur les Andes et accès direct au célèbre marché artisanal kichwa. Réservez via WhatsApp.",
  keywords: [
    'hotel Otavalo',
    'hotel Ecuador',
    'hébergement Otavalo',
    'hotel andin',
    'El Andariego',
    'séjour Otavalo',
    'backpacker Ecuador',
    'chambre Otavalo',
    'marché artisanal Otavalo',
    'hostal Otavalo',
    'hotel pas cher Otavalo',
    'tourisme Otavalo',
    'hotel famille Otavalo',
    'culture kichwa',
    'Andes équateur voyage',
  ],
  authors: [{ name: 'Hotel El Andariego' }],
  creator: 'Hotel El Andariego',
  publisher: 'Hotel El Andariego',
  category: 'travel',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: ['es_EC', 'en_US'],
    url: 'https://hotel-elandariego-test.netlify.app',
    siteName: 'Hotel El Andariego',
    title: 'Hotel El Andariego | Votre refuge authentique à Otavalo, Ecuador',
    description:
      "Au cœur des Andes équatoriennes, l'Hotel El Andariego vous accueille dans une ambiance chaleureuse et authentique. Idéal pour explorer le marché artisanal d'Otavalo, les lagunes et la culture kichwa.",
    images: [
      {
        url: 'https://hotel-elandariego-test.netlify.app/assets/common_area/hotel_building_view.webp',
        width: 1280,
        height: 853,
        alt: 'Hotel El Andariego - Vue panoramique du hotel à Otavalo, Ecuador',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hotel El Andariego | Otavalo, Ecuador',
    description:
      "Hébergement authentique au cœur des Andes. Réservez votre chambre à Otavalo — du dortoir backpacker à la suite familiale.",
    images: ['https://hotel-elandariego-test.netlify.app/assets/common_area/hotel_building_view.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://hotelelandariego.com',
  },
};

// JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Hotel',
  name: 'Hotel El Andariego',
  description:
    "Hébergement authentique andin au cœur d'Otavalo, Ecuador. Chambres doubles, triples, familiales et dortoirs pour backpackers.",
  url: 'https://hotel-elandariego-test.netlify.app',
  image: 'https://hotel-elandariego-test.netlify.app/assets/common_area/hotel_building_view.webp',
  telephone: '+593995941029',
  email: 'hotelelandariegoecuador@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Sucre 10-07 y Colón',
    addressLocality: 'Otavalo',
    addressCountry: 'EC',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 0.2344,
    longitude: -78.2628,
  },
  priceRange: '$15–$85',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Bank Transfer',
  checkinTime: '14:00',
  checkoutTime: '12:00',
  petsAllowed: true,
  starRating: {
    '@type': 'Rating',
    ratingValue: '3',
  },
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'WiFi gratuit', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Petit-déjeuner inclus', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Rooftop panoramique', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Restaurant', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Réception 24h/24', value: true },
  ],
  sameAs: [
    'https://www.instagram.com/andariegohotel',
    'https://www.facebook.com/share/189ii6CSaR/',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/assets/logo/logo_andariego.png" type="image/png" />
        <link rel="apple-touch-icon" href="/assets/logo/logo_andariego.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="theme-color" content="#C4551A" />
        <meta name="geo.region" content="EC" />
        <meta name="geo.placename" content="Otavalo, Ecuador" />
        <meta name="geo.position" content="0.2344;-78.2628" />
        <meta name="ICBM" content="0.2344, -78.2628" />
      </head>
      <body>
        <LanguageProvider>
          <LoadingScreen />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}