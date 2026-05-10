import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Regulamin',
  description: 'Regulamin usług salonu optycznego NOVOOPTYK.',
};

export default function RegulaminPage() {
  return (
    <>
      <PageHero eyebrow="Informacje prawne" title="Regulamin" titleAccent="serwisu" />
      <section className="py-16 md:py-24">
        <article className="container mx-auto max-w-3xl prose-content">
          <h2>§1. Postanowienia ogólne</h2>
          <p>Regulamin określa zasady korzystania ze strony internetowej NOVOOPTYK oraz formularza kontaktowego.</p>
          <h2>§2. Usługi w salonie</h2>
          <p>Szczegółowe warunki usług optycznych (badanie wzroku, dobór opraw, sprzedaż okularów i soczewek kontaktowych) ustalane są indywidualnie podczas wizyty w salonie.</p>
          <h2>§3. Reklamacje</h2>
          <p>Reklamacje dotyczące zakupionych produktów rozpatrywane są zgodnie z Kodeksem cywilnym oraz przepisami o prawach konsumenta.</p>
          <h2>§4. Kontakt</h2>
          <p>W sprawach nieuregulowanych prosimy o kontakt telefoniczny lub e-mailowy.</p>
        </article>
      </section>
    </>
  );
}
