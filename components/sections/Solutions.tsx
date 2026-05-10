import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { solutions } from '@/lib/data';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { SectionLabel } from '@/components/SectionLabel';
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder';
import { Button } from '@/components/ui/Button';

const TONES = ['cream', 'teal', 'mix', 'cream'] as const;

export function Solutions({ limit }: { limit?: number } = {}) {
  const cards = limit ? solutions.cards.slice(0, limit) : solutions.cards;

  return (
    <section id="oferta" className="relative bg-primary text-white py-16 md:py-24 lg:py-32 overflow-hidden">

      <svg
        viewBox="0 0 200 200"
        className="hidden md:block absolute top-12 right-8 w-32 lg:w-40 pointer-events-none opacity-30"
        fill="var(--color-accent)"
        aria-hidden
      >
        {Array.from({ length: 8 }).map((_, y) =>
          Array.from({ length: 8 }).map((_, x) => (
            <circle key={`${x}-${y}`} cx={12 + x * 24} cy={12 + y * 24} r={Math.max(0.6, 2.4 - (Math.abs(3.5 - x) + Math.abs(3.5 - y)) * 0.18)} opacity={0.85 - (x + y) * 0.04} />
          )),
        )}
      </svg>

      <svg
        viewBox="0 0 200 200"
        className="hidden md:block absolute bottom-12 left-8 w-28 lg:w-36 pointer-events-none opacity-25"
        fill="var(--color-accent)"
        aria-hidden
      >
        {Array.from({ length: 7 }).map((_, y) =>
          Array.from({ length: 7 }).map((_, x) => (
            <circle key={`${x}-${y}`} cx={14 + x * 26} cy={14 + y * 26} r={Math.max(0.5, 2.2 - (Math.abs(3 - x) + Math.abs(3 - y)) * 0.18)} opacity={0.8 - (x + y) * 0.05} />
          )),
        )}
      </svg>

      <div className="container mx-auto relative">
        <AnimatedSection className="grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-end max-w-6xl">
          <div>
            <SectionLabel text={solutions.eyebrow} variant="onDark" />
            <h2 className="mt-5 text-white text-balance leading-[1.05]">
              {solutions.headline} <span className="accent-word">{solutions.headlineAccent}</span>
            </h2>
          </div>
          <p className="text-white/75 text-pretty text-[1.02rem] leading-relaxed lg:pb-2">
            {solutions.body}
          </p>
        </AnimatedSection>

        <StaggerContainer
          className={`mt-12 md:mt-14 grid grid-cols-1 sm:grid-cols-2 ${limit ? 'lg:grid-cols-4' : 'lg:grid-cols-5'} gap-5 md:gap-6`}
          stagger={0.05}
        >
          {cards.map((card, idx) => {
            const tone = TONES[idx % TONES.length];
            return (
              <StaggerItem key={card.title + card.titleAccent} className="h-full">
                <Link
                  href={card.href}
                  className="bg-white rounded-2xl group h-full flex flex-col overflow-hidden relative isolate transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.4)]"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <PhotoPlaceholder
                      label={`${card.title} ${card.titleAccent}`}
                      caption="Zdjęcie wkrótce"
                      tone={tone}
                      variant={idx}
                      showCaption={false}
                    />
                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500 pointer-events-none" />
                  </div>

                  <div className="flex-1 flex flex-col p-6">
                    <h3 className="text-[1.1rem] md:text-[1.2rem] font-bold tracking-tight3 leading-tight text-primary">
                      {card.title} <span className="accent-word">{card.titleAccent}</span>
                    </h3>
                    <p className="text-[0.88rem] text-primary/70 mt-3 leading-relaxed flex-1">
                      {card.desc}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[0.85rem] font-semibold text-accent group-hover:gap-3 transition-all">
                      Dowiedz się więcej
                      <ArrowUpRight size={15} strokeWidth={2.4} />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {limit && cards.length < solutions.cards.length && (
          <AnimatedSection className="mt-12 md:mt-14 flex justify-center">
            <Button href="/oferta" variant="accent" icon={<ArrowUpRight size={18} strokeWidth={2.4} />}>
              Zobacz pełną ofertę
            </Button>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
