import { Eye, Glasses, Users, Layers } from 'lucide-react';
import { salonInfo } from '@/lib/data';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { SectionLabel } from '@/components/SectionLabel';
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder';

const icons = [Eye, Glasses, Users, Layers];

export function SalonInfo() {
  return (
    <section id="salon" className="py-16 md:py-24 lg:py-28">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 md:gap-14 lg:gap-16 items-center">
        <AnimatedSection className="relative">
          <div className="relative aspect-[4/5] max-w-[420px] sm:max-w-[460px] lg:max-w-[520px] mx-auto rounded-[20px] md:rounded-[24px] overflow-hidden shadow-[0_30px_60px_-30px_rgba(21,75,86,0.4)]">
            <PhotoPlaceholder label="Wnętrze salonu" caption="Zdjęcie wkrótce" tone="cream" variant={3} />
          </div>
          <div className="absolute -bottom-3 right-2 sm:-bottom-4 sm:right-4 lg:right-2 bg-primary text-white rounded-xl sm:rounded-2xl p-4 sm:p-5 max-w-[160px] sm:max-w-[200px] shadow-xl border border-accent/40">
            <div className="text-2xl sm:text-3xl font-bold leading-none tracking-tight4 text-accent">10+</div>
            <div className="text-[0.78rem] sm:text-sm mt-1 leading-tight text-white/85">lat doświadczenia w optyce</div>
          </div>
        </AnimatedSection>

        <div>
          <AnimatedSection>
            <SectionLabel text={salonInfo.eyebrow} />
            <h2 className="mt-5 text-balance leading-[1.05]">
              {salonInfo.headline} <span className="accent-word">{salonInfo.headlineAccent}</span>
            </h2>
            <p className="mt-6 text-primary/75 text-pretty leading-relaxed">{salonInfo.body}</p>
          </AnimatedSection>

          <StaggerContainer className="mt-9 grid sm:grid-cols-2 gap-5">
            {salonInfo.points.map((p, i) => {
              const Icon = icons[i % icons.length];
              return (
                <StaggerItem key={p.title} className="flex gap-4">
                  <span className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <Icon size={22} strokeWidth={1.7} />
                  </span>
                  <div>
                    <h4 className="text-base font-bold tracking-tight2">{p.title}</h4>
                    <p className="text-sm text-primary/75 mt-1 leading-relaxed">{p.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
