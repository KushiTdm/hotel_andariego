'use client';

import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { AndeanBand } from '@/components/AndeanBand';
import { About } from '@/components/About';
import { Rooms } from '@/components/Rooms';
import { Services } from '@/components/Services';
import { GalleryStrip } from '@/components/GalleryStrip';
import { Activities } from '@/components/Activities';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  const whatsappMessage = `Hola! Me gustaría obtener más información sobre el Hotel El Andariego en Otavalo.`;

  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--cream)', color: 'var(--warm-brown)' }}>
      <WhatsAppButton message={whatsappMessage} variant="fixed" />

      <Navbar />

      <Hero whatsappMessage={whatsappMessage} />

      <AndeanBand />

      <About />

      <AndeanBand
        variant="textile"
        text="Otavalo, donde los hilos de algodón tejen las leyendas de los Andes desde hace milenios"
      />

      <Rooms />

      <Services />

      <GalleryStrip />

      <Activities />

      <Contact whatsappMessage={whatsappMessage} />

      <Footer />
    </main>
  );
}