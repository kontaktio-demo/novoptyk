'use client';

import { useEffect, useState } from 'react';
import { X, Cookie } from 'lucide-react';
import { cn } from '@/lib/cn';

const STORAGE_KEY = 'novooptyk-cookie-consent';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const v = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : '1';
    if (!v) setVisible(true);
  }, []);

  const accept = (mode: 'all' | 'essential') => {
    localStorage.setItem(STORAGE_KEY, mode);
    setVisible(false);
  };

  return (
    <div
      className={cn(
        'fixed bottom-3 left-3 right-3 md:bottom-6 md:left-6 md:right-auto md:max-w-md z-[60] transition-all duration-500',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0 pointer-events-none',
      )}
      role="dialog"
      aria-label="Informacja o plikach cookies"
    >
      <div className="bg-white border border-warm rounded-2xl shadow-[0_20px_50px_-20px_rgba(21,75,86,0.3)] p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <span className="w-9 h-9 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0">
            <Cookie size={18} />
          </span>
          <div className="flex-1">
            <h4 className="text-base font-bold tracking-tight2 mb-1.5">Pliki cookies</h4>
            <p className="text-sm text-primary/75 leading-relaxed">
              Używamy plików cookies, aby zapewnić najlepsze doświadczenie na stronie. Możesz zaakceptować wszystkie lub tylko niezbędne do działania serwisu.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                onClick={() => accept('all')}
                className="text-sm font-semibold bg-accent text-white px-4 py-2 rounded-full hover:bg-primary transition-colors"
              >
                Akceptuję wszystkie
              </button>
              <button
                onClick={() => accept('essential')}
                className="text-sm font-semibold text-primary px-4 py-2 rounded-full border border-primary/30 hover:bg-primary hover:text-white transition-colors"
              >
                Tylko niezbędne
              </button>
            </div>
          </div>
          <button
            onClick={() => accept('essential')}
            aria-label="Zamknij"
            className="text-primary/50 hover:text-primary p-1 -mt-1 -mr-1"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
