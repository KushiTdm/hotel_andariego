import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hotel El Andariego - Otavalo, Ecuador',
  description: 'Découvrez l\'authenticité équatorienne dans notre hôtel chaleureux au cœur d\'Otavalo. Réservez votre chambre dès maintenant.',
  openGraph: {
    images: [
      {
        url: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
