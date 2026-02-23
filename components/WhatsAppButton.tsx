'use client';

import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WhatsAppButtonProps {
  message: string;
  phone?: string;
  variant?: 'fixed' | 'inline';
  className?: string;
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export function WhatsAppButton({
  message,
  phone = '+593995941029',
  variant = 'inline',
  className = '',
  size = 'default'
}: WhatsAppButtonProps) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;

  const handleClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  if (variant === 'fixed') {
    return (
      <button
        onClick={handleClick}
        className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${className}`}
        aria-label="Contacter via WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </button>
    );
  }

  return (
    <Button
      onClick={handleClick}
      size={size}
      className={`bg-green-500 hover:bg-green-600 text-white ${className}`}
    >
      <MessageCircle className="w-5 h-5 mr-2" />
      Réserver via WhatsApp
    </Button>
  );
}
