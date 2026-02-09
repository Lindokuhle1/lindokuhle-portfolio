'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, Linkedin } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-dark-900/80 backdrop-blur-lg border-b border-dark-800/50 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-2xl font-bold text-gradient"
          >
            LN
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <motion.span
                whileHover={{ color: '#0ea5e9' }}
                className="text-dark-200 hover:text-primary-400 transition-colors"
              >
                {link.name}
              </motion.span>
            </Link>
          ))}
        </div>

        {/* LinkedIn Link & Theme Toggle */}
        <div className="flex items-center gap-3">
          <motion.a
            href="https://www.linkedin.com/in/lindokuhle-ngcongo-022539203/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg bg-dark-800 hover:bg-blue-600/30 hover:text-blue-400 transition-colors"
            title="Visit LinkedIn Profile"
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-dark-800 hover:bg-dark-700 transition-colors"
          >
            {/* {isDark ? <Sun size={20} /> : <Moon size={20} />} */}
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-dark-900 border-t border-dark-800/50 px-4 py-4"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-dark-200 hover:text-primary-400 transition-colors py-2"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://www.linkedin.com/in/lindokuhle-ngcongo-022539203/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-200 hover:text-blue-400 transition-colors py-2 flex items-center gap-2"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
