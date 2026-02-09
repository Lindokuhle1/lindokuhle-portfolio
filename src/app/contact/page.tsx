'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react';
import { Section, SectionTitle } from '@/components/ui/Section';
import dynamic from 'next/dynamic';

// Prevent SSR crash if ContactForm uses browser APIs
const ContactForm = dynamic(
  () => import('@/components/ui/ContactForm').then((mod) => mod.ContactForm),
  { ssr: false }
);

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'lindokuhlengcongo1@gmail.com',
      href: 'mailto:lindokuhlengcongo1@gmail.com',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+27 733 642 729',
      href: 'https://wa.me/27733642729',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/lindokuhle-ngcongo',
      href: 'https://www.linkedin.com/in/lindokuhle-ngcongo-022539203/',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/lindokuhle1',
      href: 'https://github.com/lindokuhle1',
    },
  ];

  return (
    <main className="pt-20">
      {/* CONTACT SECTION */}
      <Section id="contact" className="min-h-screen">
        <SectionTitle
          title="Get in Touch"
          subtitle="Let's start a conversation about your next project"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>

            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 rounded-lg border border-white/10 bg-black/40 hover:bg-black/60 transition-all"
                  >
                    <div className="p-3 rounded-lg bg-blue-500/20">
                      <Icon size={24} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{method.label}</p>
                      <p className="text-white font-semibold">{method.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* RESPONSE INFO */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 p-6 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-black/50"
            >
              <h3 className="text-xl font-bold mb-2">Response Time</h3>
              <p className="text-gray-300">
                I typically respond within 24 hours. For urgent matters, please call the phone number provided.
              </p>
            </motion.div>
          </motion.div>

          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Send a Message</h2>
            <ContactForm />
          </motion.div>
        </div>
      </Section>

      {/* FAQ SECTION */}
      <Section className="bg-gradient-to-b from-black to-gray-900">
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              q: "What's your typical project timeline?",
              a: 'Most projects take 4–8 weeks depending on scope and complexity.',
            },
            {
              q: 'Do you offer maintenance and support?',
              a: 'Yes! All projects include support. Extended packages are available.',
            },
            {
              q: 'What technologies do you prefer?',
              a: 'I specialize in .NET, React, Node.js, AWS, and Azure.',
            },
            {
              q: 'Can you work with existing codebases?',
              a: 'Yes, I can improve and extend existing applications.',
            },
            {
              q: 'Do you provide consultations?',
              a: 'Yes, free 30-minute consultations.',
            },
            {
              q: 'How do you handle remote work?',
              a: 'Fully remote with structured communication workflows.',
            },
          ].map((item, index) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-black/40 border border-white/10"
            >
              <h3 className="text-lg font-bold mb-3 text-blue-400">{item.q}</h3>
              <p className="text-gray-300">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </main>
  );
}
