'use client';

import { useState } from 'react';
import { site } from '@/config/site';
import { submitCustomRequest, normaliseIndianMobile } from '@/lib/inquiry';

const TYPES = [
  'A custom trip somewhere else',
  'Visa help only',
  'Something else',
];

export default function CustomRequestForm() {
  const [type, setType] = useState(TYPES[0]);
  const [requirement, setRequirement] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  // Honeypot. Hidden from people, irresistible to bots.
  const [website, setWebsite] = useState('');

  async function send() {
    if (!requirement.trim()) return setError('Tell us what you need, even roughly.');
    if (!name.trim()) return setError('Please add your name.');
    const normalised = normaliseIndianMobile(phone);
    const hasEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim());
    // One of the two is enough. Insisting on both loses people for no reason.
    if (!normalised && !hasEmail) {
      return setError('Add a phone number or an email so we can reply.');
    }
    setError('');
    setSending(true);
    await submitCustomRequest({
      action: 'custom',
      website,
      type,
      name: name.trim(),
      phone: normalised ?? phone.trim(),
      email: email.trim(),
      requirement: requirement.trim(),
      source: typeof window === 'undefined' ? '' : window.location.href,
    });
    setSending(false);
    setSent(true);
  }

  if (sent) {
    return (
      <div className="card p-6">
        <h3 className="text-lg">Thank you, we have it.</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-ink-700">
          We will get back to you on what you have given us. {site.responsePromise}
        </p>
      </div>
    );
  }

  return (
    <div className="card p-6">
      <div className="grid gap-3 sm:grid-cols-3">
        {TYPES.map((t) => (
          <button
            key={t}
            type="button"
            aria-pressed={type === t}
            onClick={() => setType(t)}
            className={`min-h-[3rem] rounded-xl border px-4 text-sm font-semibold transition-colors ${
              type === t
                ? 'border-clay bg-clay-100 text-ink ring-1 ring-clay'
                : 'border-sand-300 bg-white text-ink-700 hover:bg-sand-100'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </label>
      </div>

      <label className="mt-5 block">
        <span className="text-sm font-semibold">What do you need?</span>
        <textarea
          className="input mt-2 min-h-28 py-3"
          rows={3}
          placeholder="For example: four of us want Vietnam in March, or I need help with a Schengen visa."
          value={requirement}
          onChange={(e) => setRequirement(e.target.value)}
        />
      </label>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <label className="block">
          <span className="text-sm font-semibold">Name</span>
          <input
            className="input mt-2"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold">Phone</span>
          <input
            className="input mt-2"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            placeholder="9876543210"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold">Email</span>
          <input
            className="input mt-2"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <p className="mt-2 text-sm text-ink-500">Either a phone number or an email is enough.</p>

      {error && <p className="mt-3 text-sm font-medium text-clay">{error}</p>}

      <button
        type="button"
        className="btn-primary mt-5 w-full disabled:opacity-40 sm:w-auto"
        disabled={sending}
        onClick={send}
      >
        {sending ? 'Sending' : 'Send this to us'}
      </button>
    </div>
  );
}
