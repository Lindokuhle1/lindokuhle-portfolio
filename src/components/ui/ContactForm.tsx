'use client';

import React, { useRef, FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const validate = (data: FormData): FormErrors => {
    const errors: FormErrors = {};
    if (!data.get('name')?.toString().trim()) errors.name = 'Name is required';
    const email = data.get('email')?.toString().trim() || '';
    if (!email) errors.email = 'Email is required';
    else if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email))
      errors.email = 'Enter a valid email';
    if (!data.get('subject')?.toString().trim()) errors.subject = 'Subject is required';
    if (!data.get('message')?.toString().trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const errors = validate(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      setLoading(false);
      return;
    }

    try {
      const data = {
        name: String(formData.get('name')),
        email: String(formData.get('email')),
        subject: String(formData.get('subject')),
        message: String(formData.get('message')),
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to send email');

      setSubmitted(true);
      if (formRef.current) formRef.current.reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('Failed to send your message. Please try again or contact me directly.');
      console.error('Form submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  const renderInput = (
    id: string,
    label: string,
    type: string,
    placeholder: string
  ) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <label htmlFor={id} className="block text-sm font-medium mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        className={`w-full px-4 py-3 bg-dark-800 border rounded-lg focus:outline-none transition-colors text-white ${
          formErrors[id as keyof FormErrors]
            ? 'border-red-500'
            : 'border-dark-700 focus:border-primary-500'
        }`}
      />
      {formErrors[id as keyof FormErrors] && (
        <p className="text-red-400 text-sm mt-1">
          {formErrors[id as keyof FormErrors]}
        </p>
      )}
    </motion.div>
  );

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      {renderInput('name', 'Name', 'text', 'Your name')}
      {renderInput('email', 'Email', 'email', 'your@email.com')}
      {renderInput('subject', 'Subject', 'text', 'What is this about?')}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Your message..."
          className={`w-full px-4 py-3 bg-dark-800 border rounded-lg focus:outline-none transition-colors text-white resize-none ${
            formErrors.message ? 'border-red-500' : 'border-dark-700 focus:border-primary-500'
          }`}
        />
        {formErrors.message && (
          <p className="text-red-400 text-sm mt-1">{formErrors.message}</p>
        )}
      </motion.div>

      {submitted && (
        <motion.div
          role="alert"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400"
        >
          Thank you! Your message has been sent successfully. I'll get back to you soon.
        </motion.div>
      )}

      {error && (
        <motion.div
          role="alert"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400"
        >
          {error}
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Button type="submit" variant="primary" size="lg" disabled={loading} className="w-full" aria-busy={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </Button>
      </motion.div>
    </form>
  );
}
