'use client';

import { useState, type ReactNode, cloneElement, isValidElement } from 'react';
import { X, Phone, Mail } from 'lucide-react';
import { site } from '@/lib/data';

export function ReservationModal({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const trigger = isValidElement(children)
    ? cloneElement(children as React.ReactElement<{ onClick?: () => void }>, {
        onClick: () => setOpen(true),
      })
    : (
      <button onClick={() => setOpen(true)} className="btn btn--accent">
        Zarezerwuj badanie
      </button>
    );

  return (
    <>
      {trigger}
      {open && (
        <div className="fixed inset-0 z-[70] flex items-end md:items-center justify-center" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="relative bg-white rounded-t-3xl md:rounded-3xl w-full md:max-w-md p-7 md:p-8 shadow-2xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface hover:bg-primary hover:text-white flex items-center justify-center transition"
              aria-label="Zamknij"
            >
              <X size={18} />
            </button>
            <span className="eyebrow">Rezerwacja</span>
            <h3 className="mt-3 text-balance">
              Skontaktuj się <span className="accent-word">telefonicznie</span>
            </h3>
            <p className="mt-4 text-primary/80">
              Aby umówić wizytę, najlepiej zadzwoń lub napisz e-mail. Potwierdzimy termin tego samego dnia roboczego.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a href={`tel:${site.phoneRaw}`} className="btn btn--accent w-full justify-center !pl-2">
                <span className="btn__icon"><Phone size={18} /></span>
                <span>{site.phoneShort}</span>
              </a>
              <a href={`mailto:${site.email}`} className="btn btn--light w-full justify-center !pl-2">
                <span className="btn__icon"><Mail size={18} /></span>
                <span>{site.email}</span>
              </a>
            </div>
            <p className="mt-5 text-xs text-primary/60 text-center">
              Pon - Pt: 10 - 18 · Sob: 10 - 14
            </p>
          </div>
        </div>
      )}
    </>
  );
}
