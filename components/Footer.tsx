import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram, ArrowUpRight } from 'lucide-react';
import { site, nav } from '@/lib/data';
import { Button } from './ui/Button';

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 md:pt-20 pb-8 md:pb-10 mt-16 md:mt-24">
      <div className="container mx-auto">
        <div className="grid gap-10 md:gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="inline-flex items-baseline gap-[2px]">
              <span className="font-bold text-[1.6rem] tracking-tight4 text-white">NOVO</span>
              <span className="font-bold text-[1.6rem] tracking-tight4 text-accent">OPTYK</span>
              <span className="text-accent text-[1.6rem] leading-none -ml-[2px]">.</span>
            </span>
            <p className="mt-4 text-white/80 text-sm leading-relaxed">
              Salon optyczny w Łodzi-Nowosolnej. Bezpłatne badanie wzroku, profesjonalny dobór opraw i soczewek progresywnych Varilux XR.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook NOVOOPTYK"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram NOVOOPTYK"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-white font-bold mb-4 text-base">Godziny otwarcia</h5>
            <ul className="space-y-2 text-sm text-white/80">
              {site.hours.map((row) => (
                <li key={row.days} className="flex justify-between gap-4 border-b border-white/10 pb-2">
                  <span>{row.days}</span>
                  <span className="text-white">{row.open}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-4 text-base">Kontakt</h5>
            <ul className="space-y-3 text-sm text-white/85">
              <li className="flex gap-2.5">
                <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
                <span>
                  {site.address.street}<br />
                  {site.address.postal} {site.address.city} ({site.address.district})
                </span>
              </li>
              <li>
                <a href={`tel:${site.phoneRaw}`} className="inline-flex gap-2.5 items-center hover:text-accent transition">
                  <Phone size={16} className="text-accent" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="inline-flex gap-2.5 items-center hover:text-accent transition">
                  <Mail size={16} className="text-accent" />
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-4 text-base">Strona</h5>
            <ul className="space-y-2 text-sm text-white/85">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-accent transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button
                href="/kontakt"
                variant="accent"
                icon={<ArrowUpRight size={18} strokeWidth={2.4} />}
              >
                Zarezerwuj badanie
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/15 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-white/70">
          <span>© {new Date().getFullYear()} {site.legalName}. Optyk Łódź Nowosolna.</span>
          <div className="flex gap-4">
            <Link href="/polityka-prywatnosci" className="hover:text-accent transition">Polityka prywatności</Link>
            <Link href="/regulamin" className="hover:text-accent transition">Regulamin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
