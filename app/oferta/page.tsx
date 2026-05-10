import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { Solutions } from '@/components/sections/Solutions';
import { FinalCta } from '@/components/sections/FinalCta';

export const metadata: Metadata = {
  title: 'Oferta - okulary, oprawy, soczewki Varilux XR',
  description:
    'Pełna oferta NOVOOPTYK: okulary korekcyjne, przeciwsłoneczne, progresywne Varilux XR PRO, dla dzieci i kierowców, soczewki kontaktowe oraz bezpłatne badanie wzroku.',
};

export default function OfertaPage() {
  return (
    <>
      <PageHero
        eyebrow="Nasza oferta"
        title="Wszystko czego"
        titleAccent="potrzebują Twoje oczy"
        lead="Bezpłatne badanie wzroku, oprawy uznanych marek, soczewki najwyższej klasy i indywidualne dopasowanie - wszystko w jednym salonie w Łodzi-Nowosolnej."
      />
      <Solutions />
      <FinalCta />
    </>
  );
}
