import { Hero } from '@/components/sections/Hero';
import { BandCta } from '@/components/sections/BandCta';
import { SalonInfo } from '@/components/sections/SalonInfo';
import { Solutions } from '@/components/sections/Solutions';
import { Brands } from '@/components/sections/Brands';
import { Testimonials } from '@/components/sections/Testimonials';
import { FinalCta } from '@/components/sections/FinalCta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <BandCta />
      <SalonInfo />
      <Solutions limit={4} />
      <Brands />
      <Testimonials />
      <FinalCta />
    </>
  );
}
