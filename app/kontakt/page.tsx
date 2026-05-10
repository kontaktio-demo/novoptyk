import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, Car, Calendar } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/Button';
import { ContactForm } from '@/components/ContactForm';
import { ReservationModal } from '@/components/ReservationModal';
import { site } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Kontakt - umów wizytę',
  description:
    'Skontaktuj się z salonem optycznym NOVOOPTYK w Łodzi-Nowosolnej. Telefon: 539 705 708, e-mail: novooptyk@gmail.com, ul. Jugosłowiańska 1A.',
};

const infoRows = [
  {
    icon: MapPin,
    label: 'Adres',
    value: (
      <>
        {site.address.street}<br />
        {site.address.postal} {site.address.city} ({site.address.district})
      </>
    ),
  },
  {
    icon: Phone,
    label: 'Telefon',
    value: <a href={`tel:${site.phoneRaw}`} className="hover:text-accent transition">{site.phone}</a>,
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: <a href={`mailto:${site.email}`} className="hover:text-accent transition">{site.email}</a>,
  },
  {
    icon: Clock,
    label: 'Godziny otwarcia',
    value: (
      <>
        Pon - Pt: 10:00 - 18:00<br />
        Sob: 10:00 - 14:00<br />
        Niedz: nieczynne
      </>
    ),
  },
  {
    icon: Car,
    label: 'Parking',
    value: 'Bezpłatny parking tuż przy salonie.',
  },
];

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Porozmawiajmy o Twoich"
        titleAccent="okularach"
        lead="Zadzwoń, napisz lub wypełnij formularz. Odpowiadamy zwykle w ciągu jednego dnia roboczego."
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-14">
          <AnimatedSection>
            <h2 className="text-balance">
              Napisz do <span className="accent-word">nas</span>
            </h2>
            <p className="mt-4 text-primary/80">
              Im więcej szczegółów (aktualna recepta, preferowany termin, marka), tym łatwiej pomożemy.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <aside className="bg-surface rounded-2xl p-7 md:p-8 sticky top-28">
              <span className="eyebrow">Dane kontaktowe</span>
              <h3 className="mt-3 text-2xl font-bold tracking-tight4">NOVOOPTYK</h3>
              <ul className="mt-6 space-y-5">
                {infoRows.map((row) => (
                  <li key={row.label} className="flex gap-4">
                    <span className="w-10 h-10 rounded-full bg-white text-accent flex items-center justify-center shrink-0">
                      <row.icon size={18} />
                    </span>
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-widest text-primary/60">
                        {row.label}
                      </span>
                      <span className="block text-primary/90 mt-1 leading-relaxed">{row.value}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-col gap-3">
                <ReservationModal>
                  <Button variant="accent" icon={<Calendar size={18} strokeWidth={2.4} />}>
                    Zarezerwuj badanie
                  </Button>
                </ReservationModal>
              </div>
            </aside>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden shadow-[0_30px_60px_-30px_rgba(21,75,86,0.3)] aspect-[16/9] md:aspect-[16/7]">
              <iframe
                src={site.mapEmbed}
                title="Mapa - NOVOOPTYK ul. Jugosłowiańska 1A, Łódź"
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0 w-full h-full"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
