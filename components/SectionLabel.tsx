import { cn } from '@/lib/cn';

export function SectionLabel({
  num,
  text,
  className,
  variant = 'light',
}: {
  num?: string;
  text: string;
  className?: string;
  variant?: 'light' | 'onDark';
}) {
  const isDark = variant === 'onDark';
  return (
    <span
      className={cn(
        'inline-flex items-center gap-3 text-[0.78rem] font-semibold uppercase tracking-[0.22em]',
        isDark ? 'text-accent-soft' : 'text-accent',
        className,
      )}
    >
      {num && (
        <span
          className={cn(
            'font-mono font-bold tabular-nums text-[0.72rem] tracking-normal py-1 px-2 rounded-full',
            isDark ? 'bg-white/10 text-white' : 'bg-accent/10 text-accent',
          )}
        >
          {num}
        </span>
      )}
      <span className="inline-block w-7 h-px bg-current opacity-60" aria-hidden />
      <span>{text}</span>
    </span>
  );
}
