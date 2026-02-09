'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Section, SectionTitle } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { projects } from '@/data/portfolio';

const technologies = ['All', 'React', 'Node.js', '.NET', 'AWS', 'IoT', 'MongoDB'];

export default function ProjectsPage() {
  const [selectedTech, setSelectedTech] = useState('All');

  const filteredProjects =
    selectedTech === 'All'
      ? projects
      : projects.filter((project) =>
          project.technologies.includes(selectedTech)
        );

  return (
    <main className="pt-20">
      <Section id="projects" className="min-h-screen">
        <SectionTitle
          title="Projects & Portfolio"
          subtitle="A showcase of my recent work and technical expertise"
        />

        {/* Tech Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {technologies.map((tech) => (
            <motion.button
              key={tech}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedTech(tech)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedTech === tech
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-dark-800 text-dark-300 hover:text-white'
              }`}
            >
              {tech}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="flex flex-col"
              delay={index * 0.1}
            >
              {/* Project Image Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-primary-500/20 to-dark-800 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-dark-500 text-sm">{project.title}</span>
              </div>

              <h3 className="text-2xl font-bold mb-3 text-white">
                {project.title}
              </h3>

              <p className="text-dark-300 mb-4 flex-grow">
                {project.longDescription}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-dark-700 text-primary-400 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <Button
                  variant="secondary"
                  size="sm"
                  className="flex-1"
                  onClick={() =>
                    window.open(project.github, '_blank')
                  }
                >
                  <Github size={18} />
                  Code
                </Button>
                {project.liveDemo && (
                  <Button
                    variant="primary"
                    size="sm"
                    className="flex-1"
                    onClick={() =>
                      window.open(project.liveDemo, '_blank')
                    }
                  >
                    <ExternalLink size={18} />
                    Demo
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-dark-400 text-lg">
              No projects found with {selectedTech}. Try another filter.
            </p>
          </div>
        )}
      </Section>
    </main>
  );
}
