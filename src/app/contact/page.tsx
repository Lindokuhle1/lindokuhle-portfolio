'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react';
import { Section, SectionTitle } from '@/components/ui/Section';
import { ContactForm } from '@/components/ui/ContactForm';

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
      <Section id="contact" className="min-h-screen">
        <SectionTitle
          title="Get in Touch"
          subtitle="Let&apos;s start a conversation about your next project"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Let&apos;s Connect</h2>

            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={index}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 bg-dark-800 hover:bg-dark-700/50 rounded-lg transition-all group"
                  >
                    <div className="p-3 bg-primary-500/20 rounded-lg group-hover:bg-primary-500/30 transition-all">
                      <Icon size={24} className="text-primary-400" />
                    </div>
                    <div>
                      <p className="text-sm text-dark-400">{method.label}</p>
                      <p className="text-white font-semibold">{method.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 p-6 bg-gradient-to-br from-primary-500/10 to-dark-800 rounded-2xl border border-primary-500/20"
            >
              <h3 className="text-xl font-bold mb-2">Response Time</h3>
              <p className="text-dark-300">
                I typically respond within 24 hours. For urgent matters, please call the phone number provided.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
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

      {/* FAQ Section */}
      <Section className="bg-gradient-to-b from-dark-900 to-dark-950">
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              q: 'What&apos;s your typical project timeline?',
              a: 'Most projects take 4-8 weeks depending on scope and complexity. We discuss timelines during the initial consultation.',
            },
            {
              q: 'Do you offer maintenance and support?',
              a: 'Yes! All projects include support. Extended maintenance packages are available.',
            },
            {
              q: 'What technologies do you prefer?',
              a: 'I specialize in .NET, React, Node.js, and cloud platforms (AWS, Azure). I&apos;m flexible with other modern stacks.',
            },
            {
              q: 'Can you work with existing codebases?',
              a: 'Absolutely! I have experience improving and extending existing applications.',
            },
            {
              q: 'Do you provide consultations?',
              a: 'Yes, I offer free 30-minute consultations to discuss your project.',
            },
            {
              q: 'How do you handle remote work?',
              a: 'I work fully remote with structured communication and collaboration processes.',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-dark rounded-2xl p-6"
            >
              <h3 className="text-lg font-bold mb-3 text-primary-400">
                {item.q}
              </h3>
              <p className="text-dark-300">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </main>
  );
}
