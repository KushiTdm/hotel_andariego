import './globals.css';
import type { Metadata } from 'next';
import { LoadingScreen } from '@/components/LoadingScreen';
import { LanguageProvider } from '@/lib/language-context';

export const metadata: Metadata = {
  metadataBase: new URL('https://hotel-elandariego-test.netlify.app'),
  title: {
    default: 'Hotel El Andariego | Otavalo, Ecuador — Hospedaje Auténtico Andino',
    template: '%s | Hotel El Andariego — Otavalo',
  },
  description:
    'Descubre la autenticidad de los Andes ecuatorianos en el Hotel El Andariego, en el corazón de Otavalo. Habitaciones cómodas, desayuno incluido, vista a los Andes y acceso directo al famoso mercado artesanal kichwa. Reserva por WhatsApp.',
  keywords: [
    'hotel Otavalo',
    'hotel Ecuador',
    'hospedaje Otavalo',
    'hotel andino',
    'El Andariego',
    'estadía Otavalo',
    'backpacker Ecuador',
    'habitación Otavalo',
    'mercado artesanal Otavalo',
    'hostal Otavalo',
    'hotel económico Otavalo',
    'turismo Otavalo',
    'hotel familiar Otavalo',
    'cultura kichwa',
    'Andes Ecuador viaje',
    'hotel boutique Otavalo',
    'alojamiento Imbabura',
  ],
  authors: [{ name: 'Hotel El Andariego' }],
  creator: 'Hotel El Andariego',
  publisher: 'Hotel El Andariego',
  category: 'travel',
  openGraph: {
    type: 'website',
    locale: 'es_EC',
    alternateLocale: ['fr_FR', 'en_US'],
    url: 'https://hotel-elandariego-test.netlify.app',
    siteName: 'Hotel El Andariego',
    title: 'Hotel El Andariego | Tu refugio auténtico en Otavalo, Ecuador',
    description:
      'En el corazón de los Andes ecuatorianos, el Hotel El Andariego te recibe con calidez y autenticidad. Ideal para explorar el mercado artesanal de Otavalo, las lagunas y la cultura kichwa.',
    images: [
      {
        url: 'https://hotel-elandariego-test.netlify.app/assets/common_area/hotel_building_view.webp',
        width: 1280,
        height: 853,
        alt: 'Hotel El Andariego - Vista panorámica del hotel en Otavalo, Ecuador',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hotel El Andariego | Otavalo, Ecuador',
    description:
      'Hospedaje auténtico en el corazón de los Andes. Reserva tu habitación en Otavalo — desde dormitorio backpacker hasta habitación familiar.',
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
    canonical: 'https://hotel-elandariego-test.netlify.app',
  },
};

// JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Hotel',
  name: 'Hotel El Andariego',
  description:
    'Hospedaje auténtico andino en el corazón de Otavalo, Ecuador. Habitaciones dobles, triples, familiares y dormitorios para backpackers.',
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
  paymentAccepted: 'Efectivo, Transferencia bancaria',
  checkinTime: '14:00',
  checkoutTime: '12:00',
  petsAllowed: true,
  starRating: {
    '@type': 'Rating',
    ratingValue: '3',
  },
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'WiFi gratis', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Desayuno incluido', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Terraza panorámica', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Restaurante', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Recepción 24h', value: true },
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
    <html lang="es">
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