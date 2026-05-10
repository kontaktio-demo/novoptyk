import { ImageIcon } from 'lucide-react';
import { cn } from '@/lib/cn';

type Tone = 'cream' | 'teal' | 'mix';

const tones: Record<Tone, { bg: string; ink: string; sub: string; deco: string }> = {
  cream: {
    bg: 'bg-gradient-to-br from-[#FAF9F5] via-surface to-warm/60',
    ink: 'text-primary',
    sub: 'text-primary/55',
    deco: 'text-accent/45',
  },
  teal: {
    bg: 'bg-gradient-to-br from-[#1A1A1A] via-[#0F0F0F] to-[#000000]',
    ink: 'text-white',
    sub: 'text-white/60',
    deco: 'text-accent/75',
  },
  mix: {
    bg: 'bg-gradient-to-br from-[#1A1A1A] via-[#0F0F0F] to-[#2A2218]',
    ink: 'text-white',
    sub: 'text-white/70',
    deco: 'text-accent/55',
  },
};

const patterns = [

  (c: string) => (
    <svg viewBox="0 0 200 140" className={cn('w-full h-full', c)} fill="none" stroke="currentColor" aria-hidden>
      <circle cx="75" cy="70" r="42" strokeWidth="0.7" opacity="0.45" />
      <circle cx="125" cy="70" r="42" strokeWidth="0.7" opacity="0.45" />
      <circle cx="75" cy="70" r="22" strokeWidth="0.9" opacity="0.7" />
      <circle cx="125" cy="70" r="22" strokeWidth="0.9" opacity="0.7" />
      <path d="M97 70 Q100 64 103 70" strokeWidth="0.9" opacity="0.7" />
      <path d="M20 70 L33 70 M167 70 L180 70" strokeWidth="0.7" opacity="0.45" />
    </svg>
  ),

  (c: string) => (
    <svg viewBox="0 0 200 140" className={cn('w-full h-full', c)} fill="currentColor" aria-hidden>
      {Array.from({ length: 9 }).map((_, y) =>
        Array.from({ length: 13 }).map((_, x) => (
          <circle key={`${x}-${y}`} cx={20 + x * 14} cy={20 + y * 12} r="1.1" opacity={(x + y) % 3 === 0 ? 0.7 : 0.25} />
        )),
      )}
    </svg>
  ),

  (c: string) => (
    <svg viewBox="0 0 200 140" className={cn('w-full h-full', c)} fill="none" stroke="currentColor" aria-hidden>
      {[40, 60, 80, 100].map((y, i) => (
        <path key={y} d={`M0 ${y} Q50 ${y - 14} 100 ${y} T200 ${y}`} strokeWidth="0.8" opacity={0.25 + i * 0.12} />
      ))}
    </svg>
  ),

  (c: string) => (
    <svg viewBox="0 0 200 140" className={cn('w-full h-full', c)} fill="none" stroke="currentColor" aria-hidden>
      {[18, 30, 44, 58, 72].map((r, i) => (
        <circle key={r} cx="100" cy="70" r={r} strokeWidth="0.7" opacity={0.55 - i * 0.09} strokeDasharray={i % 2 === 0 ? '0' : '3 4'} />
      ))}
    </svg>
  ),

  (c: string) => (
    <svg viewBox="0 0 200 140" className={cn('w-full h-full', c)} fill="none" stroke="currentColor" aria-hidden>
      <circle cx="100" cy="70" r="20" strokeWidth="0.9" opacity="0.7" />
      {Array.from({ length: 16 }).map((_, i) => {
        const a = (i * Math.PI * 2) / 16;
        const x1 = 100 + Math.cos(a) * 30;
        const y1 = 70 + Math.sin(a) * 30;
        const x2 = 100 + Math.cos(a) * 50;
        const y2 = 70 + Math.sin(a) * 50;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="0.8" opacity="0.5" />;
      })}
    </svg>
  ),
];

export function PhotoPlaceholder({
  label,
  caption = 'Zdjęcie wkrótce',
  tone = 'cream',
  variant = 0,
  className,
  showCaption = true,
}: {
  label?: string;
  caption?: string;
  tone?: Tone;
  variant?: number;
  className?: string;
  showCaption?: boolean;
}) {
  const t = tones[tone];
  const Pattern = patterns[variant % patterns.length];

  return (
    <div
      className={cn('relative w-full h-full overflow-hidden', t.bg, className)}
      role="img"
      aria-label={label ? `${label} - ${caption}` : caption}
    >

      <div className="absolute inset-0 pointer-events-none">
        {Pattern(t.deco)}
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            tone === 'cream'
              ? 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 60%)'
              : 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0.15) 80%)',
        }}
      />

      <div className="relative h-full w-full flex flex-col items-center justify-center text-center px-4 py-5 gap-2">
        <span
          className={cn(
            'inline-flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full',
            tone === 'cream' ? 'bg-white/80 text-accent' : 'bg-white/15 text-white backdrop-blur-sm',
          )}
        >
          <ImageIcon size={18} strokeWidth={1.6} />
        </span>
        {label && (
          <span
            className={cn(
              'mt-1 font-bold tracking-tight2 text-[0.78rem] md:text-[0.86rem] leading-tight max-w-[14ch]',
              t.ink,
            )}
          >
            {label}
          </span>
        )}
        {showCaption && (
          <span
            className={cn(
              'text-[0.62rem] md:text-[0.66rem] uppercase tracking-[0.22em] font-semibold',
              t.sub,
            )}
          >
            {caption}
          </span>
        )}
      </div>

      <span
        className={cn(
          'absolute top-2.5 left-2.5 text-[0.55rem] uppercase tracking-[0.22em] font-bold opacity-50',
          t.sub,
        )}
        aria-hidden
      >
        novooptyk
      </span>
    </div>
  );
}
