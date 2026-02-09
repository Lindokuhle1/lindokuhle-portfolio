'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Tag, User, ArrowRight, Linkedin, Copy, Check } from 'lucide-react';
import { Section, SectionTitle } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { blogPosts } from '@/data/portfolio';

export default function BlogPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [copiedPostId, setCopiedPostId] = useState<string | null>(null);

  const allTags = Array.from(
    new Set(blogPosts.flatMap((post) => post.tags))
  );

  const filteredPosts = selectedTag
    ? blogPosts.filter((post) => post.tags.includes(selectedTag))
    : blogPosts;

  const handleLinkedInShare = (postId: string) => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      `${process.env.NEXT_PUBLIC_SITE_URL || 'https://lindokuhle-portfolio.vercel.app'}/blog?id=${postId}`
    )}`;
    window.open(linkedInUrl, '_blank', 'width=600,height=400');
  };

  const handleCopyLink = (postId: string) => {
    const postUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://lindokuhle-portfolio.vercel.app'}/blog?id=${postId}`;
    navigator.clipboard.writeText(postUrl);
    setCopiedPostId(postId);
    setTimeout(() => setCopiedPostId(null), 2000);
  };

  return (
    <main className="pt-20">
      <Section id="blog" className="min-h-screen">
        <SectionTitle
          title="Blog & Articles"
          subtitle="Insights on development, architecture, and technology"
        />

        {/* Tag Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedTag(null)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedTag === null
                ? 'bg-primary-500 text-white shadow-lg'
                : 'bg-dark-800 text-dark-300 hover:text-white'
            }`}
          >
            All Posts
          </motion.button>

          {allTags.map((tag) => (
            <motion.button
              key={tag}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedTag(tag)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedTag === tag
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-dark-800 text-dark-300 hover:text-white'
              }`}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <Card key={post.id} delay={index * 0.1} hover={false}>
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4 text-sm text-dark-400">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </div>
                      <div className="flex items-center gap-2">
                        <User size={16} />
                        {post.author}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-white">
                      {post.title}
                    </h3>

                    <p className="text-dark-300 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag) => (
                        <button
                          key={tag}
                          onClick={() => setSelectedTag(tag)}
                          className="px-3 py-1 bg-dark-700 text-primary-400 rounded-full text-xs font-medium hover:bg-dark-600 transition-colors"
                        >
                          <Tag size={12} className="inline mr-1" />
                          {tag}
                        </button>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold transition-colors"
                    >
                      Read More
                      <ArrowRight size={18} />
                    </motion.button>

                    {/* Social Share Buttons */}
                    <div className="flex items-center gap-3 mt-6 pt-6 border-t border-dark-700">
                      <span className="text-xs text-dark-400">Share:</span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleLinkedInShare(post.id)}
                        className="p-2 bg-dark-700 hover:bg-blue-600/30 hover:text-blue-400 rounded-lg transition-colors"
                        title="Share on LinkedIn"
                      >
                        <Linkedin size={18} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleCopyLink(post.id)}
                        className="p-2 bg-dark-700 hover:bg-dark-600 rounded-lg transition-colors"
                        title="Copy link"
                      >
                        {copiedPostId === post.id ? (
                          <Check size={18} className="text-green-400" />
                        ) : (
                          <Copy size={18} />
                        )}
                      </motion.button>
                    </div>
                  </div>

                  {/* Image Placeholder */}
                  <div className="w-full md:w-64 h-48 bg-gradient-to-br from-primary-500/20 to-dark-800 rounded-lg flex-shrink-0" />
                </div>
              </Card>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-dark-400 text-lg">
                No posts found with tag "{selectedTag}". Try another filter.
              </p>
            </div>
          )}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary-500/10 to-dark-800 border border-primary-500/20 rounded-2xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold mb-4">
            Subscribe to My Newsletter
          </h3>
          <p className="text-dark-300 mb-8 max-w-2xl mx-auto">
            Get the latest articles and insights on web development, IoT, and
            technology trends delivered to your inbox.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg focus:border-primary-500 focus:outline-none transition-colors text-white"
            />
            <Button type="submit" variant="primary" size="md">
              Subscribe
            </Button>
          </form>
        </motion.div>
      </Section>
    </main>
  );
}
