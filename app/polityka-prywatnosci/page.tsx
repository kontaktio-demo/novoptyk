import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { site } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Polityka prywatności',
  description: 'Polityka prywatności salonu optycznego NOVOOPTYK.',
};

export default function PolitykaPage() {
  return (
    <>
      <PageHero
        eyebrow="Informacje prawne"
        title="Polityka"
        titleAccent="prywatności"
      />
      <section className="py-16 md:py-24">
        <article className="container mx-auto max-w-3xl prose-content">
          <p>
            Niniejsza polityka prywatności określa zasady przetwarzania danych osobowych klientów salonu optycznego{' '}
            <strong>{site.legalName}</strong> ({site.address.street}, {site.address.postal} {site.address.city}).
          </p>
          <h2>Administrator danych</h2>
          <p>Administratorem Twoich danych osobowych jest {site.legalName}, kontakt: {site.email}, telefon: {site.phone}.</p>
          <h2>Zakres przetwarzanych danych</h2>
          <p>Przetwarzamy dane podane w formularzu kontaktowym (imię, e-mail, telefon, opis zapytania) wyłącznie w celu odpowiedzi na zapytanie i ewentualnego umówienia wizyty.</p>
          <h2>Cookies</h2>
          <p>Strona używa plików cookies do celów statystycznych i poprawy działania serwisu. Możesz zaakceptować wszystkie pliki cookies lub tylko niezbędne - odpowiedni wybór dokonasz w banerze przy pierwszej wizycie.</p>
          <h2>Twoje prawa</h2>
          <p>Masz prawo do dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania oraz wniesienia skargi do Prezesa UODO.</p>
        </article>
      </section>
    </>
  );
}
