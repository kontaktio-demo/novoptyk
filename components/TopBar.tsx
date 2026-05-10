import { MapPin, Phone, Mail } from 'lucide-react';
import { site } from '@/lib/data';

export function TopBar() {
  return (
    <div className="hidden md:block bg-primary text-white text-[0.78rem] lg:text-[0.825rem]">
      <div className="container mx-auto flex items-center justify-between gap-4 py-2">
        <a
          href={site.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 hover:text-accent transition-colors"
        >
          <MapPin size={14} className="text-accent shrink-0" />
          <span className="truncate">
            <span className="lg:hidden">{site.address.street}, {site.address.city}</span>
            <span className="hidden lg:inline">{site.address.street}, {site.address.postal} {site.address.city} ({site.address.district})</span>
          </span>
        </a>
        <div className="flex items-center gap-3 lg:gap-5 shrink-0">
          <a href={`tel:${site.phoneRaw}`} className="inline-flex items-center gap-2 hover:text-accent transition-colors">
            <Phone size={13} />
            <span className="hidden sm:inline">{site.phone}</span>
          </a>
          <a href={`mailto:${site.email}`} className="hidden lg:inline-flex items-center gap-2 hover:text-accent transition-colors">
            <Mail size={13} />
            {site.email}
          </a>
        </div>
      </div>
    </div>
  );
}
