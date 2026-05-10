'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X, MapPin } from 'lucide-react';
import { nav, site } from '@/lib/data';
import { Button } from './ui/Button';
import { cn } from '@/lib/cn';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-[0_2px_24px_-12px_rgba(21,75,86,0.18)]'
          : 'bg-white',
      )}
    >
      <div className="container mx-auto flex items-center justify-between gap-4 py-2.5 md:py-3">
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="NOVOOPTYK - strona główna">
          <Logo />
        </Link>

        <nav aria-label="Główna nawigacja" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative text-[0.92rem] font-semibold tracking-tight2 text-primary transition-colors hover:text-accent
                    after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 shrink-0">

          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 pl-2 pr-3 lg:pr-4 py-1.5 rounded-full
                       text-[0.8rem] lg:text-[0.85rem] font-semibold tracking-tight2 text-primary
                       hover:text-accent transition-colors group"
            aria-label="Otwórz mapę - adres salonu"
          >
            <span className="w-7 h-7 rounded-full bg-accent text-white flex items-center justify-center group-hover:bg-primary transition-colors">
              <MapPin size={14} strokeWidth={2.4} />
            </span>
            <span className="lg:hidden">{site.address.street}</span>
            <span className="hidden lg:inline">
              {site.address.street}, {site.address.city}
            </span>
          </a>

          <button
            className="lg:hidden p-2.5 -mr-2 text-primary rounded-full hover:bg-surface transition-colors"
            onClick={() => setOpen(true)}
            aria-label="Otwórz menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <div
        className={cn(
          'fixed inset-0 z-50 lg:hidden transition-opacity duration-300',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
      >
        <div className="absolute inset-0 bg-primary/40" onClick={() => setOpen(false)} aria-hidden />
        <div
          className={cn(
            'absolute right-0 top-0 h-full w-[88%] max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300',
            open ? 'translate-x-0' : 'translate-x-full',
          )}
        >
          <div className="flex items-center justify-between p-5 border-b border-warm">
            <Logo />
            <button onClick={() => setOpen(false)} aria-label="Zamknij menu" className="p-2 -mr-2 text-primary">
              <X size={24} />
            </button>
          </div>
          <nav aria-label="Mobilna nawigacja" className="flex-1 overflow-auto p-5">
            <ul className="flex flex-col gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-lg font-semibold tracking-tight2 text-primary border-b border-warm/60 hover:text-accent transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-3">
              <Button href="/kontakt" variant="accent">
                Zarezerwuj badanie
              </Button>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary"
              >
                <MapPin size={14} className="text-accent" />
                {site.address.street}, {site.address.city}
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <span className="inline-flex items-baseline gap-[2px]">
      <span className="font-bold text-[1.3rem] md:text-[1.4rem] tracking-tight4 text-primary">NOVO</span>
      <span className="font-bold text-[1.3rem] md:text-[1.4rem] tracking-tight4 text-accent">OPTYK</span>
      <span className="text-accent text-[1.3rem] md:text-[1.4rem] leading-none -ml-[2px]">.</span>
    </span>
  );
}
