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
  Globe: <Globe size={40} />,
  Code: <Code size={40} />,
  Zap: <Zap size={40} />,
  Cloud: <Cloud size={40} />,
  Database: <Database size={40} />,
  Lightbulb: <Lightbulb size={40} />,
};

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <Section id="services" className="min-h-screen">
        <SectionTitle
          title="Services"
          subtitle="Comprehensive solutions tailored to your needs"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={service.id} delay={index * 0.1} className="flex flex-col">
              <div className="mb-6 text-primary-400">
                {iconMap[service.icon] || <Code size={40} />}
              </div>

              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>

              <p className="text-dark-300 mb-6 flex-grow">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
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

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-500/10 to-dark-800 border border-primary-500/20 rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            My <span className="text-gradient">Working Process</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: 'Discovery',
                description:
                  'Understand your requirements, goals, and vision',
              },
              {
                number: '02',
                title: 'Planning',
                description: 'Create detailed strategy and technical approach',
              },
              {
                number: '03',
                title: 'Development',
                description: 'Build with clean code and best practices',
              },
              {
                number: '04',
                title: 'Delivery',
                description: 'Test, optimize, and deploy your solution',
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-primary-500 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-dark-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Pricing Section */}
      <Section className="bg-gradient-to-b from-dark-900 to-dark-950">
        <SectionTitle
          title="Project Rates"
          subtitle="Flexible pricing for different project types"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Starter',
              price: 'Custom',
              description: 'Perfect for small projects and MVPs',
              includes: [
                'Up to 3 weeks',
                'Full-stack development',
                'Basic deployment',
                '1 month support',
              ],
            },
            {
              name: 'Professional',
              price: 'Custom',
              description: 'Ideal for medium-sized projects',
              includes: [
                '4-8 weeks',
                'Advanced features',
                'Cloud deployment',
                '3 months support',
                'Performance optimization',
              ],
              featured: true,
            },
            {
              name: 'Enterprise',
              price: 'Custom',
              description: 'For complex, large-scale solutions',
              includes: [
                '8+ weeks',
                'Scalable architecture',
                'Multi-environment setup',
                '6 months support',
                'Dedicated consultation',
              ],
            },
          ].map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-8 transition-all ${
                plan.featured
                  ? 'bg-gradient-to-br from-primary-500/20 to-dark-800 border-2 border-primary-500 scale-105'
                  : 'glass-dark'
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-primary-400 text-3xl font-bold mb-4">
                {plan.price}
              </p>
              <p className="text-dark-300 mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.includes.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-3">
                    <Check size={18} className="text-primary-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact">
                <Button
                  variant={plan.featured ? 'primary' : 'secondary'}
                  size="md"
                  className="w-full"
                >
                  Get Quote
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-dark-400 mb-6">
            Every project is unique. Let's discuss your needs and create a
            custom plan.
          </p>
          <Link href="/contact">
            <Button variant="primary" size="lg">
              Schedule a Consultation
            </Button>
          </Link>
        </motion.div>
      </Section>
    </main>
  );
}
