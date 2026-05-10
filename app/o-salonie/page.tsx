import type { Metadata } from 'next';
import { Award, Heart, Sparkles, Users2 } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { FinalCta } from '@/components/sections/FinalCta';
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder';

export const metadata: Metadata = {
  title: 'O salonie NOVOOPTYK',
  description:
    'Poznaj salon optyczny NOVOOPTYK w Łodzi-Nowosolnej. Essilor Expert Ambassador, doświadczony zespół, strefa NOVOKIDS dla dzieci.',
};

const values = [
  {
    icon: Award,
    title: 'Essilor Expert Ambassador',
    desc: 'Najwyższy status partnerski - soczewki Varilux XR PRO i pełna gama Essilor.',
  },
  {
    icon: Heart,
    title: 'Indywidualne podejście',
    desc: 'Każdą wizytę traktujemy osobiście. Bez pośpiechu, z dbałością o szczegół.',
  },
  {
    icon: Sparkles,
    title: 'Stylista do dyspozycji',
    desc: 'Dobierzemy oprawę do kształtu twarzy, stylu życia i charakteru.',
  },
  {
    icon: Users2,
    title: 'Strefa NOVOKIDS',
    desc: 'Pierwsze okulary dziecka w przyjaznej atmosferze, z kolorowymi oprawkami.',
  },
];

export default function OSaloniePage() {
  return (
    <>
      <PageHero
        eyebrow="O salonie"
        title="Optyk z pasją"
        titleAccent="i doświadczeniem"
        lead="NOVOOPTYK to lokalny salon optyczny w Łodzi-Nowosolnej, prowadzony z dbałością o jakość obsługi i komfort widzenia. Łączymy doświadczenie, nowoczesny sprzęt i znajomość mody okularowej."
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedSection>
            <div className="relative aspect-[4/5] max-w-[420px] sm:max-w-[460px] lg:max-w-[500px] mx-auto rounded-[20px] md:rounded-[24px] overflow-hidden shadow-[0_30px_60px_-30px_rgba(21,75,86,0.4)]">
              <PhotoPlaceholder label="Wnętrze salonu" caption="Zdjęcie wkrótce" tone="cream" variant={2} />
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <span className="eyebrow">Nasza historia</span>
            <h2 className="mt-4 text-balance">
              Lokalny salon, <span className="accent-word">zaufany zespół</span>
            </h2>
            <p className="mt-5 text-primary/80 text-pretty">
              Tworzymy miejsce, do którego klienci wracają - nie z konieczności, ale z przyjemności. Wybieramy oprawy największych projektantów, ale przede wszystkim takie, w których będzie Ci dobrze. Dbamy o każdy detal: od pierwszego badania, przez dobór soczewek, aż po precyzyjne dopasowanie gotowych okularów.
            </p>
            <p className="mt-4 text-primary/80 text-pretty">
              Jesteśmy <strong>Essilor Expert Ambassador</strong> - co oznacza, że zapewniamy soczewki najwyższej jakości, w tym progresywne Varilux XR PRO, które dają o 49% większe pole widzenia niż poprzednie generacje.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="container mx-auto">
          <AnimatedSection className="max-w-3xl">
            <span className="eyebrow">Wartości</span>
            <h2 className="mt-4 text-balance">
              Co nas <span className="accent-word">wyróżnia</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <StaggerItem key={v.title} className="feature-card">
                <span className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                  <v.icon size={22} strokeWidth={1.7} />
                </span>
                <h4 className="mt-5 font-bold tracking-tight2">{v.title}</h4>
                <p className="mt-2 text-sm text-primary/75 leading-relaxed">{v.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
