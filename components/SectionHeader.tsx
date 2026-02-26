'use client';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  colorOrder?: 'terracotta' | 'teal';
}

export function SectionHeader({ title, subtitle, colorOrder = 'terracotta' }: SectionHeaderProps) {
  const colors = colorOrder === 'terracotta' 
    ? ['var(--terracotta)', 'var(--ochre)', 'var(--teal)']
    : ['var(--teal)', 'var(--ochre)', 'var(--terracotta)'];

  return (
    <div className="text-center mb-10 sm:mb-12 md:mb-16 px-4">
      <div className="flex items-center justify-center gap-2 sm:gap-4 mb-3 sm:mb-4">
        <span style={{ color: colors[0], fontSize: '16px' }} className="sm:text-xl">◆</span>
        <span style={{ color: colors[1], fontSize: '12px' }} className="sm:text-sm">◆</span>
        <span style={{ color: colors[2], fontSize: '16px' }} className="sm:text-xl">◆</span>
      </div>
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4"
        style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--warm-brown-light)' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}