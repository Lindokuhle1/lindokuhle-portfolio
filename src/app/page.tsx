'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Zap, Globe } from 'lucide-react';
import Link from 'next/link';
import { Section, SectionTitle } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { GradientText } from '@/components/ui/GradientText';

export default function HomePage() {
  const stats = [
    { label: 'Projects Completed', value: '15+' },
    { label: 'Happy Clients', value: '10+' },
    { label: 'Years Experience', value: '2+' },
    { label: 'Technologies', value: '20+' },
  ];

  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Building complete web solutions from API to UI',
    },
    {
      icon: Zap,
      title: 'IoT & Telemetry',
      description: 'Real-time data processing and IoT systems',
    },
    {
      icon: Globe,
      title: 'Cloud Architecture',
      description: 'Scalable solutions on AWS, Azure, and more',
    },
  ];

  return (
    <main className="pt-20">
      {/* HERO */}
      <Section className="min-h-[90vh] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* TEXT */}
          <motion.div initial={false} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary-500/20 border border-primary-500/50 rounded-full text-primary-400 text-sm font-medium">
                Hello 👋 Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              I&apos;m <GradientText className="inline">Lindokuhle Ngcongo</GradientText>
            </h1>

            <p className="text-xl text-dark-300 mb-8 leading-relaxed">
              Full-Stack Developer & IoT Engineer building scalable applications, real-time systems, and cloud solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/projects">
                <Button variant="primary" size="lg" className="group">
                  View Projects
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div initial={false} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative">
            <div className="relative w-full h-96 bg-gradient-to-br from-primary-500/20 to-dark-800 rounded-2xl border border-primary-500/20 flex items-center justify-center overflow-hidden">
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-64 h-64"
              >
                <Image
                  src="/profile.jpg" // PUT IMAGE IN /public
                  alt="Lindokuhle Ngcongo - Full-Stack Developer"
                  fill
                  className="object-contain opacity-90"
                  priority
                />
              </motion.div>

              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                  className="absolute border border-primary-500/20 rounded-full"
                  style={{
                    width: `${70 + i * 70}px`,
                    height: `${70 + i * 70}px`,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* STATS */}
        <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold text-primary-400 mb-2">{stat.value}</p>
              <p className="text-dark-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </Section>

      {/* WHAT I DO */}
      <Section className="bg-gradient-to-b from-dark-900 to-dark-950">
        <SectionTitle title="What I Do" subtitle="Expertise across multiple domains" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} delay={index * 0.1}>
                <Icon size={40} className="text-primary-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-dark-300">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <Section className="text-center">
        <SectionTitle
          title="Ready to Start Your Project?"
          subtitle="Let&apos;s work together to bring your ideas to life"
        />

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact">
            <Button variant="primary" size="lg">Start a Project</Button>
          </Link>
          <Link href="/services">
            <Button variant="secondary" size="lg">Explore Services</Button>
          </Link>
        </div>
      </Section>
    </main>
  );
}
