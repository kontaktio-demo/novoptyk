import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import { TopBar } from '@/components/TopBar';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CookieBanner } from '@/components/CookieBanner';
import { SmoothScroll } from '@/components/SmoothScroll';
import { ScrollProgress } from '@/components/ScrollProgress';
import { site } from '@/lib/data';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} - salon optyczny Łódź Nowosolna | Bezpłatne badanie wzroku, oprawy, soczewki Varilux XR`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  keywords: [
    'optyk Łódź',
    'optyk Nowosolna',
    'badanie wzroku Łódź',
    'okulary Łódź',
    'soczewki progresywne',
    'Varilux XR',
    'Karl Lagerfeld okulary',
    'NOVOOPTYK',
  ],
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    siteName: site.name,
    url: site.url,
    title: `${site.name} - salon optyczny Łódź Nowosolna`,
    description: site.description,
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: `${site.name} - salon optyczny w Łodzi-Nowosolnej`,
      },
    ],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
  alternates: { canonical: site.url, languages: { 'pl-PL': site.url } },
  icons: { icon: '/favicon.svg' },
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'Optician'],
  '@id': `${site.url}/#business`,
  name: site.name,
  alternateName: site.legalName,
  description: site.description,
  url: site.url,
  telephone: site.phoneRaw,
  email: site.email,
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    postalCode: site.address.postal,
    addressRegion: 'łódzkie',
    addressCountry: 'PL',
  },
  areaServed: ['Łódź', 'Nowosolna', 'województwo łódzkie'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '18:00',
    },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '10:00', closes: '14:00' },
  ],
  sameAs: [site.social.facebook, site.social.instagram],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={poppins.variable}>
      <body>
        <ScrollProgress />
        <SmoothScroll>
          <TopBar />
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
        <CookieBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
