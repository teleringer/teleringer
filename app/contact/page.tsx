'use client';

import React, { useState, type ChangeEvent, type FormEvent } from 'react';

type ContactForm = {
  name: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  service: string[]; // must be a string array
  message: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    service: [],
    message: '',
  });

  // ✅ These state hooks fix the "Cannot find name 'setIsSubmitting'" error
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'' | 'ok' | 'error'>('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      service: prev.service.includes(service)
        ? prev.service.filter(s => s !== service)
        : [...prev.service, service],
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const fd = new FormData();
      fd.set('name', formData.name);
      fd.set('email', formData.email);
      fd.set('company', formData.company);
      fd.set('phone', formData.phone);
      fd.set('subject', formData.subject);
      fd.set('message', formData.message);
      if (formData.service.length) {
        fd.set('service', formData.service.join(', '));
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        body: fd,
      });

      if (res.redirected) {
        // If your API redirects on success (303)
        window.location.href = res.url;
        return;
      }

      setSubmitStatus(res.ok ? 'ok' : 'error');
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main style={{ maxWidth: 840, margin: '40px auto', padding: '0 16px', lineHeight: 1.6 }}>
      <h1 style={{ fontSize: 36, marginBottom: 8 }}>Contact Teleringer</h1>
      <p>Tell us a bit about your needs and we’ll follow up shortly.</p>

      <form onSubmit={handleSubmit} style={{ marginTop: 24, display: 'grid', gap: 12 }}>
        <input
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          name="company"
          placeholder="Company (optional)"
          value={formData.company}
          onChange={handleChange}
        />
        <input
          name="phone"
          placeholder="Phone (optional)"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        {/* Example service checkboxes; edit labels/values as needed */}
        <fieldset style={{ border: '1px solid #ddd', padding: 12 }}>
          <legend style={{ padding: '0 6px' }}>Services (optional)</legend>
          <label style={{ display: 'block', marginBottom: 6 }}>
            <input
              type="checkbox"
              checked={formData.service.includes('VoIP / Phone System')}
              onChange={() => handleServiceToggle('VoIP / Phone System')}
            />{' '}
            VoIP / Phone System
          </label>
          <label style={{ display: 'block', marginBottom: 6 }}>
            <input
              type="checkbox"
              checked={formData.service.includes('Website')}
              onChange={() => handleServiceToggle('Website')}
            />{' '}
            Website
          </label>
          <label style={{ display: 'block' }}>
            <input
              type="checkbox"
              checked={formData.service.includes('AI Concierge / Call Agent')}
              onChange={() => handleServiceToggle('AI Concierge / Call Agent')}
            />{' '}
            AI Concierge / Call Agent
          </label>
        </fieldset>

        <textarea
          name="message"
          placeholder="How can we help?"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending…' : 'Send Message'}
        </button>

        {submitStatus === 'ok' && (
          <p role="status" style={{ color: 'green' }}>
            Thank you! Your message was sent.
          </p>
        )}
        {submitStatus === 'error' && (
          <p role="status" style={{ color: 'crimson' }}>
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </main>
  );
}
