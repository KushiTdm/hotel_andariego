'use client';

interface AndeanBandProps {
  variant?: 'default' | 'textile';
  text?: string;
}

export function AndeanBand({ variant = 'default', text }: AndeanBandProps) {
  if (variant === 'textile' && text) {
    return (
      <div
        className="textile-border-top textile-border-bottom py-6"
        style={{ background: 'var(--cream-dark)' }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p
            className="text-base italic"
            style={{
              fontFamily: "'EB Garamond', serif",
              color: 'var(--warm-brown-light)',
              fontSize: '1.1rem',
            }}
          >
            "{text}"
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="h-8 relative overflow-hidden"
      style={{
        background:
          'repeating-linear-gradient(90deg, var(--terracotta) 0px, var(--terracotta) 20px, var(--ochre) 20px, var(--ochre) 40px, var(--warm-brown) 40px, var(--warm-brown) 60px, var(--teal) 60px, var(--teal) 80px, var(--ochre) 80px, var(--ochre) 100px)',
      }}
    />
  );
}