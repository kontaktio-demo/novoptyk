import type { MetadataRoute } from 'next';
import { site } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/oferta', '/o-salonie', '/galeria', '/faq', '/kontakt', '/polityka-prywatnosci', '/regulamin'];
  const now = new Date();
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path.includes('-') ? 0.5 : 0.8,
  }));
}
