'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Tag, User, ArrowRight, Linkedin, Copy, Check } from 'lucide-react';
import { Section, SectionTitle } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { blogPosts } from '@/data/portfolio';
import Link from 'next/link';

export default function BlogPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [copiedPostId, setCopiedPostId] = useState<string | null>(null);

  const SITE_URL =
    typeof window !== 'undefined'
      ? window.location.origin
      : 'https://lindokuhle-portfolio.vercel.app';

  const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)));

  const filteredPosts = selectedTag
    ? blogPosts.filter((post) => post.tags.includes(selectedTag))
    : blogPosts;

  const handleLinkedInShare = (postId: string) => {
    const url = `${SITE_URL}/blog?id=${postId}`;
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedInUrl, '_blank', 'width=600,height=400');
  };

  const handleCopyLink = async (postId: string) => {
    const url = `${SITE_URL}/blog?id=${postId}`;

    try {
      await navigator.clipboard.writeText(url);
      setCopiedPostId(postId);
      setTimeout(() => setCopiedPostId(null), 2000);
    } catch {
      alert('Copy failed. Here is the link:\n' + url);
    }
  };

  return (
    <main className="pt-20">
      <Section id="blog" className="min-h-screen">
        <SectionTitle
          title="Blog & Articles"
          subtitle="Insights on development, architecture, and technology"
        />

        {/* TAG FILTER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-6 py-2 rounded-full font-medium ${
              selectedTag === null
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:text-white'
            }`}
          >
            All Posts
          </button>

          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-6 py-2 rounded-full font-medium ${
                selectedTag === tag
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:text-white'
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* POSTS */}
        <div className="space-y-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <Card key={post.id} delay={index * 0.1} hover={false}>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    {/* META */}
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2">
                        <User size={16} />
                        {post.author}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-white">
                      {post.title}
                    </h3>

                    <p className="text-gray-300 mb-6">{post.excerpt}</p>

                    {/* TAGS */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag) => (
                        <button
                          key={tag}
                          onClick={() => setSelectedTag(tag)}
                          className="px-3 py-1 bg-gray-700 text-blue-400 rounded-full text-xs"
                        >
                          <Tag size={12} className="inline mr-1" />
                          {tag}
                        </button>
                      ))}
                    </div>

                    {/* READ MORE */}
                    <Link href={`/blog/${post.id}`}>
                      <motion.span
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold cursor-pointer"
                      >
                        Read More <ArrowRight size={18} />
                      </motion.span>
                    </Link>

                    {/* SHARE */}
                    <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-700">
                      <span className="text-xs text-gray-400">Share:</span>

                      <button
                        onClick={() => handleLinkedInShare(post.id)}
                        className="p-2 bg-gray-700 hover:bg-blue-600/30 rounded-lg"
                      >
                        <Linkedin size={18} />
                      </button>

                      <button
                        onClick={() => handleCopyLink(post.id)}
                        className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg"
                      >
                        {copiedPostId === post.id ? (
                          <Check size={18} className="text-green-400" />
                        ) : (
                          <Copy size={18} />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* IMAGE */}
                  <div className="w-full md:w-64 h-48 bg-gradient-to-br from-blue-600/20 to-gray-800 rounded-lg" />
                </div>
              </Card>
            ))
          ) : (
            <p className="text-center text-gray-400 text-lg">
              No posts found for "{selectedTag}"
            </p>
          )}
        </div>

        {/* NEWSLETTER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-600/10 to-gray-800 border border-blue-600/20 rounded-2xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Subscribe to My Newsletter</h3>

          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get articles about web dev, IoT, and cloud tech.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-blue-600 outline-none"
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
