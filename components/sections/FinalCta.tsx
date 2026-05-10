import { Phone, ArrowUpRight, Check, MapPin, Clock, Mail } from 'lucide-react';
import { finalCta, site } from '@/lib/data';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/Button';
import { SectionLabel } from '@/components/SectionLabel';

const perks = [
  'Bezpłatne badanie wzroku w cenie okularów',
  'Pomoc stylisty w doborze oprawy',
  'Raty 0% i bezpłatny parking pod salonem',
];

export function FinalCta() {
  return (
    <section className="bg-primary text-white py-16 md:py-24 lg:py-28 relative overflow-hidden">

      <svg
        viewBox="0 0 200 200"
        className="hidden md:block absolute top-10 left-8 w-28 lg:w-36 pointer-events-none opacity-25"
        fill="var(--color-accent)"
        aria-hidden
      >
        {Array.from({ length: 7 }).map((_, y) =>
          Array.from({ length: 7 }).map((_, x) => (
            <circle
              key={`${x}-${y}`}
              cx={14 + x * 26}
              cy={14 + y * 26}
              r={Math.max(0.5, 2.2 - (Math.abs(3 - x) + Math.abs(3 - y)) * 0.18)}
              opacity={0.85 - (x + y) * 0.04}
            />
          )),
        )}
      </svg>

      <div className="container mx-auto relative grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-start">
        <AnimatedSection>
          <SectionLabel text={finalCta.eyebrow} variant="onDark" />
          <h2 className="mt-5 text-white text-balance leading-[1.05]">
            {finalCta.headline} <span className="accent-word">{finalCta.headlineAccent}</span>
          </h2>
          <p className="mt-6 text-white/75 text-pretty leading-relaxed">{finalCta.body}</p>

          <ul className="mt-8 space-y-3">
            {perks.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full border border-accent/60 text-accent flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={13} strokeWidth={2.5} />
                </span>
                <span className="text-white/85">{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button href={`tel:${site.phoneRaw}`} variant="primary" icon={<Phone size={18} strokeWidth={2.4} />}>
              {site.phoneShort}
            </Button>
            <Button href="/kontakt" variant="accent" icon={<ArrowUpRight size={18} strokeWidth={2.4} />}>
              Zarezerwuj badanie
            </Button>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
            <InfoCard
              icon={Clock}
              title="Godziny otwarcia"
              lines={site.hours.map((h) => `${h.days}: ${h.open}`)}
            />
            <InfoCard
              icon={MapPin}
              title="Adres salonu"
              lines={[site.address.street, `${site.address.postal} ${site.address.city}`, `(${site.address.district})`]}
            />
            <InfoCard icon={Phone} title="Telefon" lines={[site.phone]} href={`tel:${site.phoneRaw}`} />
            <InfoCard icon={Mail} title="E-mail" lines={[site.email]} href={`mailto:${site.email}`} />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  lines,
  href,
}: {
  icon: typeof Clock;
  title: string;
  lines: string[];
  href?: string;
}) {
  const inner = (
    <>
      <span className="w-10 h-10 rounded-full border border-accent/50 text-accent flex items-center justify-center mb-4">
        <Icon size={17} strokeWidth={1.6} />
      </span>
      <span className="block text-[0.74rem] uppercase tracking-[0.2em] font-semibold text-white/55 mb-2">
        {title}
      </span>
      {lines.map((line, i) => (
        <span key={i} className="block text-white/95 leading-relaxed text-sm md:text-[0.95rem]">
          {line}
        </span>
      ))}
    </>
  );
  const cls =
    'block bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-6 hover:bg-white/10 hover:border-white/20 transition-colors';
  return href ? (
    <a href={href} className={cls}>
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}
