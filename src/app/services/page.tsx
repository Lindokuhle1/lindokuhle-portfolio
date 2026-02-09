'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Code,
  Zap,
  Cloud,
  Database,
  Lightbulb,
  Check,
  ArrowRight,
} from 'lucide-react';
import { Section, SectionTitle } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { services } from '@/data/portfolio';
import Link from 'next/link';

const iconMap: { [key: string]: React.ReactNode } = {
  Globe: <Globe size={40} className="text-primary-400" />,
  Code: <Code size={40} className="text-primary-400" />,
  Zap: <Zap size={40} className="text-primary-400" />,
  Cloud: <Cloud size={40} className="text-primary-400" />,
  Database: <Database size={40} className="text-primary-400" />,
  Lightbulb: <Lightbulb size={40} className="text-primary-400" />,
};

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <Section id="services" className="min-h-screen">
        <SectionTitle
          title="Services"
          subtitle="Comprehensive solutions tailored to your needs"
        />

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={service.id} delay={index * 0.1} className="flex flex-col">
              <div className="mb-6">{iconMap[service.icon] || <Code size={40} className="text-primary-400" />}</div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-dark-300 mb-6 flex-grow">{service.description}</p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={20} className="text-primary-400 mt-1 flex-shrink-0" />
                    <span className="text-dark-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="mt-auto">
                <Button variant="secondary" size="sm" className="w-full group">
                  Get Started
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        {/* Working Process */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-500/10 to-dark-800 border border-primary-500/20 rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            My <span className="text-primary-400">Working Process</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '01', title: 'Discovery', description: 'Understand your requirements, goals, and vision' },
              { number: '02', title: 'Planning', description: 'Create detailed strategy and technical approach' },
