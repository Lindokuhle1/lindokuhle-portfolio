'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/lindokuhle1', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/lindokuhle-ngcongo-022539203', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:lindokuhlengcongo@outlook.com', label: 'Email' },
  ];

  const footerLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-dark-950 border-t border-dark-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-2">Lindokuhle</h3>
            <p className="text-dark-300 text-sm">Full-Stack Developer & IoT Engineer</p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer Navigation">
            <h4 className="text-lg font-semibold mb-4 text-white">Navigation</h4>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-dark-300 hover:text-primary-400 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm text-dark-300">
              <li>Web Development</li>
              <li>API Design</li>
              <li>IoT Solutions</li>
              <li>Cloud Architecture</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Get in Touch</h4>
            <p className="text-dark-300 text-sm mb-4">Interested in working together? Let's connect!</p>
            <Link
              href="/contact"
              className="text-primary-400 hover:text-primary-300 text-sm font-medium"
            >
              Send a message →
            </Link>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8 py-8 border-t border-dark-800/50">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="p-3 bg-dark-800 hover:bg-primary-500/20 border border-dark-700 hover:border-primary-500 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary-400"
                aria-label={social.label}
              >
                <Icon size={20} className="text-primary-400" />
              </motion.a>
            );
          })}
        </div>

        {/* Copyright */}
        <div className="text-center py-8 border-t border-dark-800/50">
          <p className="text-dark-500 text-sm">© {currentYear} Lindokuhle Ngcongo. All rights reserved.</p>
          <p className="text-dark-600 text-xs mt-2">Built with Next.js, TypeScript, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
