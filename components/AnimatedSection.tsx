'use client';

import { motion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';

const variants: Variants = {
  hidden: { opacity: 1, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function AnimatedSection({
  children,
  delay = 0,
  className,
  as: Tag = 'div',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'header' | 'footer';
}) {
  const MotionTag = motion[Tag] as typeof motion.div;
  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export const fadeUp: Variants = variants;

export function StaggerContainer({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}
