'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { RevealProps } from '@/types/templates.types';

export const Reveal = ({ children, className, delay = 0, direction = 'up' }: RevealProps) => {
  const reduceMotion = useReducedMotion();
  const x = direction === 'left' ? -28 : direction === 'right' ? 28 : 0;
  const y = direction === 'up' ? 24 : 0;

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, x, y }}
      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};
