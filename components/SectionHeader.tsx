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
    <div className="text-center mb-16">
      <div className="flex items-center justify-center gap-4 mb-4">
        <span style={{ color: colors[0], fontSize: '20px' }}>◆</span>
        <span style={{ color: colors[1], fontSize: '14px' }}>◆</span>
        <span style={{ color: colors[2], fontSize: '20px' }}>◆</span>
      </div>
      <h2
        className="text-5xl font-bold mb-4"
        style={{ fontFamily: "'Playfair Display', serif", color: 'var(--warm-brown)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-xl max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: "'Crimson Pro', serif", color: 'var(--warm-brown-light)' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}