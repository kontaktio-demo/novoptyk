'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { AnimatedSection } from '@/components/AnimatedSection';
import { FinalCta } from '@/components/sections/FinalCta';
import { faqs } from '@/lib/data';
import { cn } from '@/lib/cn';

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHero
        eyebrow="Najczęściej zadawane pytania"
        title="Dowiedz się"
        titleAccent="więcej"
        lead="Zebraliśmy odpowiedzi na pytania, które klienci zadają nam najczęściej. Nie znalazłeś odpowiedzi na swoje? Zadzwoń lub napisz."
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-3xl">
          <AnimatedSection>
            <ul className="space-y-3">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <li key={f.q} className={cn(
                    'rounded-2xl bg-surface border border-warm transition-all duration-300',
                    isOpen && 'border-accent/30 shadow-[0_18px_40px_-20px_rgba(21,75,86,0.2)]',
                  )}>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-start gap-4 text-left p-5 md:p-6 group"
                      aria-expanded={isOpen}
                    >
                      <span className="flex-1 font-semibold tracking-tight2 text-primary text-base md:text-lg pt-1">
                        {f.q}
                      </span>
                      <span className={cn(
                        'w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors',
                        isOpen ? 'bg-accent text-white' : 'bg-white text-primary group-hover:bg-primary group-hover:text-white',
                      )}>
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </span>
                    </button>
                    <div className={cn(
                      'grid transition-all duration-300 ease-out',
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                    )}>
                      <div className="overflow-hidden">
                        <p className="px-5 md:px-6 pb-6 text-primary/80 leading-relaxed">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
