'use client';

import { MessageCircle } from 'lucide-react';

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
        className="wa-pulse fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 text-white transition-all duration-300 hover:scale-110"
        style={{
          background: '#25D366',
          borderRadius: '50%',
          boxShadow: '0 4px 20px rgba(37, 211, 102, 0.35)',
        }}
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </button>
    );
  }

  const paddingMap = {
    default: '10px 20px',
    sm: '7px 14px',
    lg: '14px 28px',
    icon: '10px',
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-300 hover:opacity-90 hover:scale-[1.02] ${className}`}
      style={{
        background: '#25D366',
        color: 'white',
        borderRadius: '2px',
        padding: paddingMap[size] || paddingMap.default,
        fontFamily: "'Playfair Display', serif",
        fontSize: size === 'lg' ? '16px' : '14px',
        boxShadow: '0 2px 12px rgba(37, 211, 102, 0.25)',
      }}
    >
      <MessageCircle className="w-5 h-5 mr-2 flex-shrink-0" />
      Reservar por WhatsApp
    </button>
  );
}