'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { site, whatsappLink } from '@/config/site';
import { fetchTracker, humanDate, type TrackerResult, type StageState } from '@/lib/tracker';
import { WhatsAppGlyph } from '@/components/Header';

export default function Tracker() {
  const params = useSearchParams();
  const token = params.get('t') ?? '';
  const [state, setState] = useState<'loading' | 'ready' | 'missing'>('loading');
  const [data, setData] = useState<TrackerResult | null>(null);

  useEffect(() => {
    let cancelled = false;
    if (!token) {
      setState('missing');
      return;
    }
    fetchTracker(token)
      .then((res) => {
        if (cancelled) return;
        setData(res);
        setState(res.ok ? 'ready' : 'missing');
      })
      .catch(() => {
        if (!cancelled) setState('missing');
      });
    return () => {
      cancelled = true;
    };
  }, [token]);

  if (state === 'loading') {
    return (
      <div className="wrap max-w-xl py-14">
        <p className="text-[15px] text-ink-500">Loading your booking.</p>
      </div>
    );
  }

  // A bad token, a revoked one and a missing one all look identical, so
  // nobody can tell them apart by trying.
  if (state === 'missing' || !data || !data.ok) {
    return (
      <div className="wrap max-w-xl py-16">
        <h1 className="text-2xl">We could not find that booking</h1>
        <p className="mt-3 text-[16px] leading-relaxed text-ink-700">
          The link may be incomplete, or it may have been replaced with a newer one. Nothing
          has gone wrong with your trip. Send us a message and we will send you a fresh link
          straight away.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappLink('Hello, my booking tracker link is not working.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa w-full sm:w-auto"
          >
            <WhatsAppGlyph />
            Message us
          </a>
          <Link href="/" className="btn-ghost w-full sm:w-auto">
            Go to the home page
          </Link>
        </div>
      </div>
    );
  }

  const d = data;
  const doneCount = d.stages.filter((s) => s.state === 'done').length;

  return (
    <div className="wrap max-w-xl py-12">
      <p className="eyebrow">Your booking</p>
      <h1 className="mt-2 text-[1.9rem] leading-tight sm:text-4xl">
        {d.firstName ? `${d.firstName}, your ` : 'Your '}
        {d.destination} trip
      </h1>
      <p className="mt-3 text-[16px] leading-relaxed text-ink-700">
        {[d.cities, d.travelMonth, d.days ? `${d.days} days` : '', d.travellers ? `${d.travellers} travelling` : '']
          .filter(Boolean)
          .join(' · ')}
      </p>

      <div className="card mt-7 p-5">
        <div className="flex items-baseline justify-between gap-3">
          <p className="text-sm font-semibold uppercase tracking-wider text-ink-500">Progress</p>
          <p className="text-sm text-ink-500">{doneCount} of {d.stages.length} done</p>
        </div>

        <ol className="mt-5">
          {d.stages.map((s, i) => (
            <li key={s.key} className="relative flex gap-4 pb-6 last:pb-0">
              <div className="flex flex-col items-center">
                <StageDot state={s.state} />
                {i < d.stages.length - 1 && (
                  <span
                    aria-hidden
                    className={`mt-1 w-px flex-1 ${s.state === 'done' ? 'bg-sea' : 'bg-sand-300'}`}
                  />
                )}
              </div>
              <div className="pt-1.5">
                <p className={`font-semibold ${s.state === 'pending' ? 'text-ink-300' : ''}`}>
                  {s.label}
                </p>
                <p className="mt-0.5 text-sm text-ink-500">{stageWords(s.state)}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {d.paymentStatus && (
        <p className="mt-4 rounded-xl bg-sand-100 p-4 text-[15px] leading-relaxed text-ink-700">
          <strong className="font-semibold">Payment: </strong>
          {d.paymentStatus}
        </p>
      )}

      <p className="mt-5 text-sm text-ink-500">
        Last updated {humanDate(d.lastUpdated) || 'just now'}.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href={whatsappLink(`Hello, a question about my ${d.destination} booking.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wa w-full sm:w-auto"
        >
          <WhatsAppGlyph />
          Questions? Message us
        </a>
        {d.canEdit && d.editToken && (
          <Link href={`/plan/?e=${d.editToken}`} className="btn-ghost w-full sm:w-auto">
            Change my plan
          </Link>
        )}
      </div>

      <p className="mt-8 text-sm leading-relaxed text-ink-500">
        {site.legalName}. {site.responsePromise}
      </p>
    </div>
  );
}

function stageWords(state: StageState) {
  switch (state) {
    case 'done': return 'Done';
    case 'in_progress': return 'In progress now';
    case 'blocked': return 'On hold, we will call you about this';
    default: return 'Not started yet';
  }
}

function StageDot({ state }: { state: StageState }) {
  if (state === 'done') {
    return (
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-sea text-white">
        <svg viewBox="0 0 20 20" aria-hidden className="h-4 w-4" fill="currentColor">
          <path d="M8.1 13.3 5.3 10.5l-1.2 1.2 4 4 8-8-1.2-1.2z" />
        </svg>
      </span>
    );
  }
  if (state === 'in_progress') {
    return (
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-clay text-white">
        <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-white" />
      </span>
    );
  }
  if (state === 'blocked') {
    return (
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-clay bg-white text-sm font-bold text-clay">
        !
      </span>
    );
  }
  return (
    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-sand-300 bg-white">
      <span aria-hidden className="h-2 w-2 rounded-full bg-sand-300" />
    </span>
  );
}
