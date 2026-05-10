import { Phone, ArrowUpRight } from 'lucide-react';
import { bandCta, site } from '@/lib/data';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/Button';
import { SectionLabel } from '@/components/SectionLabel';

export function BandCta() {
  return (
    <section className="bg-white py-14 md:py-20 lg:py-24 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-warm to-transparent" aria-hidden />
      <div className="container mx-auto">
        <AnimatedSection className="grid lg:grid-cols-[1.1fr_1fr] gap-8 md:gap-10 lg:gap-16 items-center">
          <div>
            <SectionLabel text={bandCta.eyebrow} />
            <h2 className="mt-5 text-balance leading-[1.05]">
              {bandCta.headline} <span className="accent-word">{bandCta.headlineAccent}</span>
            </h2>
          </div>
          <div>
            <p className="text-primary/80 text-lg text-pretty">{bandCta.body}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button
                href={`tel:${site.phoneRaw}`}
                variant="light"
                icon={<Phone size={18} strokeWidth={2.4} />}
              >
                Zadzwoń
              </Button>
              <Button
                href="/kontakt"
                variant="accent"
                icon={<ArrowUpRight size={18} strokeWidth={2.4} />}
              >
                Zarezerwuj badanie
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
