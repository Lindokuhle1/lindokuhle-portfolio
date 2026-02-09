'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download, Linkedin } from 'lucide-react';
import { Section, SectionTitle } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Timeline } from '@/components/ui/Timeline';
import { experiences, skills, education } from '@/data/portfolio';

export default function AboutPage() {

  // Download CV PDF (recommended)
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Lindokuhle_Ngcongo_CV.pdf'; // put file in /public
    link.download = 'Lindokuhle_Ngcongo_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="pt-20">
      {/* Bio Section */}
      <Section id="about" className="min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-96 bg-gradient-to-br from-primary-500/20 to-dark-800 rounded-2xl border border-primary-500/20 flex items-center justify-center overflow-hidden">
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-64 h-64"
              >
                <Image
                  src="/1d5278a0c55346ca939641db4a489848.jpg"
                  alt="Lindokuhle Ngcongo"
                  fill
                  className="object-contain opacity-80"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">About Me</span>
            </h1>

            <div className="space-y-4 text-dark-300 mb-8">
              <p>
                I&apos;m a passionate full-stack developer and IoT engineer with over
                2 years of experience building innovative solutions that solve
                real-world problems. My journey in tech started with a curiosity
                about how systems work.
              </p>

              <p>
                I specialize in creating scalable, maintainable applications using
                clean architecture principles. Whether it&apos;s building robust APIs,
                intuitive frontends, or complex IoT systems, I focus on performance
                and user experience.
              </p>

              <p>
                Beyond coding, I&apos;m passionate about mentoring others, sharing
                knowledge through blogs, and staying updated with the latest
                technology trends. I believe in continuous learning and teamwork.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={downloadCV}
                className="gap-2"
              >
                <Download size={20} />
                Download CV
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() =>
                  window.open(
                    'https://www.linkedin.com/in/lindokuhle-ngcongo-022539203/',
                    '_blank'
                  )
                }
                className="gap-2"
              >
                <Linkedin size={20} />
                Connect on LinkedIn
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Experience */}
      <Section className="bg-gradient-to-b from-dark-900 to-dark-950">
        <SectionTitle
          title="Professional Experience"
          subtitle="My career journey and milestones"
        />

        <Timeline
          items={experiences.map((exp) => ({
            title: exp.title,
            company: exp.company,
            period: exp.period,
            description: exp.description,
          }))}
        />
      </Section>

      {/* Skills */}
      <Section>
        <SectionTitle
          title="Skills & Technologies"
          subtitle="Tools and languages I use"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((group, index) => (
            <Card key={index} delay={index * 0.1}>
              <h3 className="text-xl font-bold mb-6 text-primary-400">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-dark-700 text-dark-100 rounded-lg text-sm font-medium hover:bg-primary-500/20 hover:text-primary-400 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section className="bg-gradient-to-b from-dark-900 to-dark-950">
        <SectionTitle
          title="Education & Certifications"
          subtitle="Formal education and certifications"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <Card key={index} delay={index * 0.1}>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold mb-2">{edu.degree}</h3>
                  <p className="text-primary-400 font-semibold mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-dark-400 text-sm">{edu.details}</p>
                </div>
                <span className="text-primary-500 font-bold text-lg">
                  {edu.year}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </main>
  );
}
