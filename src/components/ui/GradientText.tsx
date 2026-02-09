'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function GradientText({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`text-gradient ${className}`}
    >
      {children}
    </motion.span>
  );
}
