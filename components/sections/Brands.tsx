'use client';

import Image from 'next/image';
import { useState } from 'react';
import { brands } from '@/lib/data';
import { AnimatedSection } from '@/components/AnimatedSection';
import { SectionLabel } from '@/components/SectionLabel';

const slugify = (s: string) =>
  s.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

export function Brands() {
  const items = [...brands.list, ...brands.list, ...brands.list];
  return (
    <section id="marki" className="py-16 md:py-24 lg:py-28 overflow-hidden">
      <div className="container mx-auto">
        <AnimatedSection className="max-w-3xl">
          <SectionLabel text={brands.eyebrow} />
          <h2 className="mt-5 text-balance leading-[1.05]">
            {brands.headline} <span className="accent-word">{brands.headlineAccent}</span>
          </h2>
          <p className="mt-6 text-primary/75 text-pretty leading-relaxed">{brands.body}</p>
        </AnimatedSection>
      </div>

      <div className="mt-10 md:mt-14 relative">

        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex items-center animate-marquee hover:[animation-play-state:paused]">
          {items.map((b, i) => (
            <div key={`${b.name}-${i}`} className="flex items-center">
              <BrandLogo name={b.name} />
              <span className="mx-6 sm:mx-8 md:mx-12 w-1.5 h-1.5 rounded-full bg-accent/40 shrink-0" aria-hidden />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandLogo({ name }: { name: string }) {
  const [errored, setErrored] = useState(false);
  const slug = slugify(name);
  return (
    <div className="flex items-center justify-center min-w-[140px] sm:min-w-[180px] md:min-w-[220px] h-16 sm:h-20 md:h-24 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300">
      {errored ? (
        <span className="font-bold text-base sm:text-xl tracking-tight4 text-primary whitespace-nowrap">
          {name}
        </span>
      ) : (
        <Image
          src={`/logos/${slug}.svg`}
          alt={name}
          width={200}
          height={60}
          className="max-h-9 sm:max-h-12 md:max-h-14 w-auto object-contain"
          onError={() => setErrored(true)}
        />
      )}
    </div>
  );
}
