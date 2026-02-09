'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-transparent hidden md:block" />

      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="md:ml-32"
          >
            {/* Timeline dot */}
            <div className="absolute left-4 top-1 w-8 h-8 bg-dark-900 border-2 border-primary-500 rounded-full md:flex items-center justify-center hidden">
              <div className="w-3 h-3 bg-primary-500 rounded-full" />
            </div>

            <div className="glass-dark rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-primary-400 font-semibold mb-2">{item.company}</p>
              <p className="text-dark-400 text-sm mb-3">{item.period}</p>
              <p className="text-dark-300">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
