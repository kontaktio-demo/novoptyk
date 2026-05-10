'use client';

import { useState } from 'react';
import { Send, Check } from 'lucide-react';
import { site } from '@/lib/data';

const types = [
  { value: 'badanie', label: 'Bezpłatne badanie wzroku' },
  { value: 'oprawy', label: 'Dobór opraw korekcyjnych' },
  { value: 'sloneczne', label: 'Okulary przeciwsłoneczne' },
  { value: 'progresja', label: 'Soczewki progresywne (Varilux)' },
  { value: 'dzieci', label: 'NOVOKIDS - okulary dla dziecka' },
  { value: 'serwis', label: 'Serwis / regulacja' },
  { value: 'inne', label: 'Inne pytanie' },
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 flex items-start gap-4">
        <span className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center shrink-0">
          <Check size={18} strokeWidth={3} />
        </span>
        <div>
          <h4 className="font-bold tracking-tight2">Dziękujemy!</h4>
          <p className="text-primary/80 mt-1 text-sm">
            Twoja wiadomość została otwarta w domyślnym programie pocztowym. Jeśli nie nastąpiło to automatycznie, napisz prosto na <a href={`mailto:${site.email}`} className="underline text-accent">{site.email}</a>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      action={`mailto:${site.email}`}
      method="post"
      encType="text/plain"
      onSubmit={() => setTimeout(() => setSubmitted(true), 300)}
      className="space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <Field id="name" label="Imię i nazwisko" placeholder="np. Anna Nowak" required />
        <Field id="email" label="E-mail" type="email" placeholder="anna@poczta.pl" required />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field id="phone" label="Telefon" type="tel" placeholder="np. 539 705 708" />
        <div>
          <label htmlFor="type" className="block text-sm font-semibold mb-2 tracking-tight2">
            Typ wizyty
          </label>
          <select
            id="type"
            name="type"
            className="w-full rounded-xl border border-warm bg-white px-4 py-3 text-primary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition"
          >
            {types.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-2 tracking-tight2">
          Opisz, czego potrzebujesz <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="np. Chciałabym umówić bezpłatne badanie wzroku i pierwsze okulary z progresją. Wolę termin popołudniowy."
          className="w-full rounded-xl border border-warm bg-white px-4 py-3 text-primary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition resize-none"
        />
      </div>
      <label className="flex items-start gap-3 text-sm text-primary/80">
        <input type="checkbox" required className="mt-1 accent-[var(--color-accent)]" />
        <span>
          Wyrażam zgodę na przetwarzanie moich danych w celu odpowiedzi na zapytanie. Szczegóły w{' '}
          <a href="/polityka-prywatnosci" className="text-accent underline">polityce prywatności</a>.
        </span>
      </label>
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button type="submit" className="btn btn--accent">
          <span>Wyślij zapytanie</span>
          <span className="btn__icon"><Send size={16} strokeWidth={2.4} /></span>
        </button>
        <span className="text-sm text-primary/60">Odpowiadamy w ciągu jednego dnia roboczego.</span>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  type = 'text',
  placeholder,
  required,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold mb-2 tracking-tight2">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-warm bg-white px-4 py-3 text-primary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition placeholder:text-primary/40"
      />
    </div>
  );
}
