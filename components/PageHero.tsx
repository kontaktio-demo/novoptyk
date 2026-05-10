'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

export function PageHero({
  eyebrow,
  title,
  titleAccent,
  lead,
}: {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  lead?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const blob1Y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section
      ref={ref}
      className="relative bg-surface pt-12 md:pt-20 lg:pt-24 pb-14 md:pb-20 overflow-hidden"
    >
      <motion.div
        style={{ y: blob1Y }}
        className="absolute -top-24 sm:-top-32 -right-16 sm:-right-24 w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] rounded-full bg-accent/10 blur-3xl pointer-events-none"
        aria-hidden
      />
      <motion.div
        style={{ y: blob2Y }}
        className="absolute -bottom-24 sm:-bottom-32 -left-16 sm:-left-24 w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] rounded-full bg-primary/5 blur-3xl pointer-events-none"
        aria-hidden
      />
      <motion.div style={{ y: contentY }} className="container mx-auto relative">
        <AnimatedSection className="max-w-3xl">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mt-4 sm:mt-5 text-balance leading-[1.05]">
            {title} {titleAccent && <span className="accent-word">{titleAccent}</span>}
          </h1>
          {lead && (
            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-primary/75 text-pretty leading-relaxed">
              {lead}
            </p>
          )}
        </AnimatedSection>
      </motion.div>
    </section>
  );
}
