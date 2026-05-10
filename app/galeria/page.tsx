import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { FinalCta } from '@/components/sections/FinalCta';
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder';

export const metadata: Metadata = {
  title: 'Galeria - wnętrze salonu i oprawy',
  description:
    'Zobacz wnętrze salonu NOVOOPTYK i wybór dostępnych opraw. Karl Lagerfeld, John Richmond, oprawy korekcyjne, przeciwsłoneczne, NOVOKIDS dla dzieci.',
};

const tiles: { label: string; tone: 'cream' | 'teal' | 'mix'; variant: number; span?: string }[] = [
  { label: 'Oprawy damskie', tone: 'mix', variant: 0, span: 'sm:col-span-2 lg:col-span-2 lg:row-span-2' },
  { label: 'Karl Lagerfeld', tone: 'cream', variant: 3 },
  { label: 'Badanie wzroku', tone: 'teal', variant: 4 },
  { label: 'NOVOKIDS', tone: 'mix', variant: 1 },
  { label: 'Przeciwsłoneczne', tone: 'cream', variant: 4 },
  { label: 'Wnętrze salonu', tone: 'cream', variant: 2, span: 'sm:col-span-2' },
  { label: 'Do czytania', tone: 'teal', variant: 2 },
  { label: 'Do komputera', tone: 'cream', variant: 1 },
];

export default function GaleriaPage() {
  return (
    <>
      <PageHero
        eyebrow="Galeria"
        title="Salon i"
        titleAccent="oprawy"
        lead="Spójrz na wnętrze naszego salonu i wybór opraw, które na Ciebie czekają. Zapraszamy do Łodzi-Nowosolnej - bezpłatny parking pod salonem."
      />

      <section className="py-16 md:py-24 lg:py-28">
        <div className="container mx-auto">
          <AnimatedSection>
            <p className="text-center text-primary/60 text-sm md:text-base mb-8 md:mb-10 max-w-xl mx-auto">
              Zdjęcia salonu i opraw pojawią się wkrótce. Tymczasem zapraszamy do odwiedzenia nas osobiście.
            </p>
            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[160px] sm:auto-rows-[200px] lg:auto-rows-[220px]">
              {tiles.map((t) => (
                <StaggerItem
                  key={t.label}
                  className={`relative group overflow-hidden rounded-2xl ${t.span ?? ''}`}
                >
                  <PhotoPlaceholder label={t.label} caption="Zdjęcie wkrótce" tone={t.tone} variant={t.variant} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </AnimatedSection>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
