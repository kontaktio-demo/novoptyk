'use client';

import { motion, useMotionValue, useTransform, useSpring, useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Phone, ArrowUpRight } from 'lucide-react';
import { heroIntro, site } from '@/lib/data';
import { Button } from '@/components/ui/Button';

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 90, damping: 22 });
  const sy = useSpring(my, { stiffness: 90, damping: 22 });
  const tx = useTransform(sx, (v) => v * 10);
  const ty = useTransform(sy, (v) => v * 10);
  const txInv = useTransform(sx, (v) => v * -6);
  const tyInv = useTransform(sy, (v) => v * -6);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const cutoutY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const blobY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const blobScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -45]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.4]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(hover: none)').matches) return;
    if (window.innerWidth < 1024) return;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [mx, my]);

  return (
    <section ref={sectionRef} className="relative bg-white pt-6 md:pt-10 lg:pt-14 pb-0 overflow-hidden">
      <motion.div
        style={{ opacity: heroOpacity }}
        className="container mx-auto relative grid lg:grid-cols-[1.05fr_1fr] gap-8 md:gap-12 lg:gap-16 items-end lg:items-end pt-2 lg:pt-0"
      >

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="relative order-1 lg:order-1 flex justify-center lg:justify-start"
        >

          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: blobY, scale: blobScale }}
            className="absolute inset-x-0 mx-auto top-0 md:-top-2 w-[78%] sm:w-[70%] lg:w-[78%] aspect-square max-w-[460px] rounded-full
                       bg-gradient-to-br from-[#1A1A1A] via-[#0F0F0F] to-[#000000]"
            aria-hidden
          >
            <motion.div className="w-full h-full rounded-full" style={{ x: txInv, y: tyInv }} />
          </motion.div>

          <motion.div
            className="relative z-10 w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[540px]"
            style={{ y: cutoutY }}
          >
            <motion.div style={{ x: tx, y: ty }}>
              <picture>
                <source srcSet="/hero-cutout.avif" type="image/avif" />
                <source srcSet="/hero-cutout.webp" type="image/webp" />
                <img
                  src="/hero-cutout.png"
                  alt="Klientka NOVOOPTYK w okularach korekcyjnych"
                  width={1400}
                  height={1858}
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-auto select-none"
                  draggable={false}
                />
              </picture>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: textY }} className="order-2 lg:order-2 relative z-10 pb-10 md:pb-14 lg:pb-20">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-accent"
          >
            <span className="inline-block w-7 h-px bg-accent opacity-60" />
            {heroIntro.eyebrow}
          </motion.span>

          <motion.h1
            className="mt-5 text-balance leading-[1.04]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            {heroIntro.headline}{' '}
            <span className="accent-word">{heroIntro.headlineAccent}</span>{' '}
            {heroIntro.headlineEnd}
          </motion.h1>

          <motion.p
            className="mt-6 text-[1rem] md:text-[1.05rem] text-primary/75 max-w-[520px] text-pretty leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            {heroIntro.lead}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <Button href={`tel:${site.phoneRaw}`} variant="light" icon={<Phone size={18} strokeWidth={2.4} />}>
              Zadzwoń
            </Button>
            <Button href="/kontakt" variant="accent" icon={<ArrowUpRight size={18} strokeWidth={2.4} />}>
              Zarezerwuj badanie
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
