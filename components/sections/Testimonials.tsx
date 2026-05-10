'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { testimonials } from '@/lib/data';
import { AnimatedSection } from '@/components/AnimatedSection';
import { SectionLabel } from '@/components/SectionLabel';
import { cn } from '@/lib/cn';

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-surface text-primary py-20 md:py-28 lg:py-32 relative overflow-hidden">

      <svg
        viewBox="0 0 200 200"
        className="hidden md:block absolute bottom-10 right-10 w-32 lg:w-40 pointer-events-none"
        fill="var(--color-accent)"
        aria-hidden
      >
        {Array.from({ length: 8 }).map((_, y) =>
          Array.from({ length: 8 }).map((_, x) => (
            <circle key={`${x}-${y}`} cx={12 + x * 24} cy={12 + y * 24} r={Math.max(0.6, 2.2 - (Math.abs(3.5 - x) + Math.abs(3.5 - y)) * 0.18)} opacity={0.7 - (x + y) * 0.04} />
          )),
        )}
      </svg>
      <div className="container mx-auto relative">
        <AnimatedSection className="max-w-2xl">
          <SectionLabel text={testimonials.eyebrow} />
          <h2 className="mt-5 text-balance leading-[1.05]">
            {testimonials.headline} <span className="accent-word">{testimonials.headlineAccent}</span>
          </h2>
        </AnimatedSection>

        <div className="mt-12">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container -mx-3">
              {testimonials.items.map((t) => (
                <div key={t.author} className="embla__slide w-full md:w-1/2 px-3">
                  <article className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 h-full border border-warm shadow-[0_18px_50px_-30px_rgba(21,75,86,0.25)]">
                    <Quote className="text-accent" size={26} />
                    <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl leading-relaxed text-primary italic font-light tracking-tight2">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <footer className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-warm">
                      <strong className="block font-semibold text-primary">{t.author}</strong>
                      <span className="text-sm text-muted">Klient NOVOOPTYK</span>
                    </footer>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 md:mt-8 flex items-center justify-between gap-4">
            <div className="flex gap-2 items-center">
              {testimonials.items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  aria-label={`Pokaż opinię ${i + 1}`}
                  className={cn(
                    'h-1.5 rounded-full transition-all min-w-[20px] min-h-[44px] sm:min-h-[20px] relative',
                    'before:content-[""] before:absolute before:inset-x-0 before:top-1/2 before:-translate-y-1/2 before:h-1.5 before:rounded-full',
                    selected === i
                      ? 'before:bg-accent before:w-10 w-10'
                      : 'before:bg-primary/20 before:w-5 w-5 hover:before:bg-primary/40',
                  )}
                />
              ))}
            </div>
            <div className="flex gap-2 shrink-0">
              <button
                onClick={() => emblaApi?.scrollPrev()}
                aria-label="Poprzednia opinia"
                className="w-11 h-11 rounded-full border border-primary/25 text-primary hover:bg-accent hover:border-accent hover:text-white flex items-center justify-center transition"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={() => emblaApi?.scrollNext()}
                aria-label="Następna opinia"
                className="w-11 h-11 rounded-full border border-primary/25 text-primary hover:bg-accent hover:border-accent hover:text-white flex items-center justify-center transition"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
