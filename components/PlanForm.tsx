'use client';

import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { liveDestinations, getDestination } from '@/config/destinations';
import { site, whatsappLink } from '@/config/site';
import { estimateTrip } from '@/lib/estimate';
import { formatInr, formatInrRange } from '@/lib/format';
import { asset } from '@/lib/asset';
import { submitInquiry, normaliseIndianMobile, type SubmitResult } from '@/lib/inquiry';
import { WhatsAppGlyph } from '@/components/Header';

const STORAGE_KEY = 'bindhast-plan-v1';
const TOTAL_STEPS = 6;

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const BUDGET_BANDS = [
  'Under 60,000 per person',
  '60,000 to 1,00,000 per person',
  'Over 1,00,000 per person',
  'Not sure yet',
];

interface FormState {
  destination: string;
  travelMonth: number;
  travelYear: number;
  datesFlexible: boolean;
  nights: number;
  adults: number;
  children: number;
  activities: string[];
  budgetBand: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
}

function initialState(): FormState {
  const now = new Date();
  const next = new Date(now.getFullYear(), now.getMonth() + 2, 1);
  return {
    destination: '',
    travelMonth: next.getMonth() + 1,
    travelYear: next.getFullYear(),
    datesFlexible: true,
    nights: 5,
    adults: 2,
    children: 0,
    activities: [],
    budgetBand: '',
    name: '',
    phone: '',
    email: '',
    notes: '',
  };
}

export default function PlanForm() {
  const params = useSearchParams();
  const [form, setForm] = useState<FormState>(initialState);
  const [step, setStep] = useState(1);
  const [restored, setRestored] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<SubmitResult | null>(null);
  const [phoneError, setPhoneError] = useState('');

  // Restore a dropped session before applying the query parameter, so a fresh
  // link with ?dest= still wins over whatever was saved earlier.
  useEffect(() => {
    let saved: Partial<FormState> = {};
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) saved = JSON.parse(raw) as Partial<FormState>;
    } catch {
      // Private browsing or blocked storage. Continue with a clean form.
    }
    const fromQuery = params.get('dest');
    setForm((f) => ({
      ...f,
      ...saved,
      destination:
        (fromQuery && getDestination(fromQuery)?.slug) || saved.destination || f.destination,
    }));
    setRestored(true);
  }, [params]);

  useEffect(() => {
    if (!restored) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
    } catch {
      // Nothing to do. Losing persistence is not worth breaking the form over.
    }
  }, [form, restored]);

  const destination = getDestination(form.destination);

  const estimate = useMemo(() => {
    if (!destination) return null;
    return estimateTrip({
      destination,
      nights: form.nights,
      adults: form.adults,
      children: form.children,
      activityIds: form.activities,
      travelMonth: form.travelMonth,
    });
  }, [destination, form.nights, form.adults, form.children, form.activities, form.travelMonth]);

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function toggleActivity(id: string) {
    setForm((f) => ({
      ...f,
      activities: f.activities.includes(id)
        ? f.activities.filter((a) => a !== id)
        : [...f.activities, id],
    }));
  }

  const canAdvance =
    step === 1 ? Boolean(destination)
    : step === 3 ? form.adults >= 1
    : step === 5 ? Boolean(form.budgetBand)
    : true;

  async function handleSubmit() {
    const phone = normaliseIndianMobile(form.phone);
    if (!form.name.trim()) return setPhoneError('Please enter your name.');
    if (!phone) return setPhoneError('Enter a 10 digit Indian mobile number.');
    setPhoneError('');
    setSubmitting(true);
    const res = await submitInquiry({
      name: form.name.trim(),
      phone,
      email: form.email.trim(),
      destination: destination?.name ?? form.destination,
      travelMonth: `${MONTH_NAMES[form.travelMonth - 1]} ${form.travelYear}`,
      datesFlexible: form.datesFlexible,
      nights: form.nights,
      adults: form.adults,
      children: form.children,
      activities: form.activities.map(
        (id) => destination?.activities.find((a) => a.id === id)?.name ?? id,
      ),
      budgetBand: form.budgetBand,
      estimateLow: estimate?.total.low ?? 0,
      estimateHigh: estimate?.total.high ?? 0,
      notes: form.notes.trim(),
      source: typeof window === 'undefined' ? '' : window.location.href,
    });
    setSubmitting(false);
    setResult(res);
  }

  if (result) {
    return (
      <Result
        result={result}
        form={form}
        estimate={estimate}
        destinationName={destination?.name ?? ''}
        brochure={destination?.brochure ?? ''}
        monthLabel={`${MONTH_NAMES[form.travelMonth - 1]} ${form.travelYear}`}
      />
    );
  }

  const adultActivities = destination?.activities.filter((a) => a.audience !== 'kids') ?? [];
  const kidsActivities = destination?.activities.filter((a) => a.audience !== 'adult') ?? [];

  return (
    <div className="wrap max-w-2xl py-10">
      <Progress step={step} />

      {step === 1 && (
        <Step title="Where would you like to go?">
          <div className="grid gap-3 sm:grid-cols-2">
            {liveDestinations.map((d) => (
              <Choice
                key={d.slug}
                selected={form.destination === d.slug}
                onClick={() => set('destination', d.slug)}
                title={d.name}
                subtitle={d.tagline}
              />
            ))}
          </div>
          <p className="mt-4 text-sm text-ink-500">
            Malaysia, Singapore and Vietnam are not available yet. If you want one of those,
            send us a message and we will tell you when they open.
          </p>
        </Step>
      )}

      {step === 2 && (
        <Step title="When do you want to travel, and for how long?">
          <Field label="Month of travel">
            <div className="grid grid-cols-2 gap-3">
              <select
                className="input"
                value={form.travelMonth}
                onChange={(e) => set('travelMonth', Number(e.target.value))}
              >
                {MONTH_NAMES.map((m, i) => (
                  <option key={m} value={i + 1}>{m}</option>
                ))}
              </select>
              <select
                className="input"
                value={form.travelYear}
                onChange={(e) => set('travelYear', Number(e.target.value))}
              >
                {[0, 1].map((offset) => {
                  const y = new Date().getFullYear() + offset;
                  return <option key={y} value={y}>{y}</option>;
                })}
              </select>
            </div>
          </Field>

          <label className="mt-4 flex items-start gap-3 rounded-xl border border-sand-300 bg-white p-4">
            <input
              type="checkbox"
              className="mt-1 h-5 w-5 accent-[#C4551F]"
              checked={form.datesFlexible}
              onChange={(e) => set('datesFlexible', e.target.checked)}
            />
            <span className="text-[15px] leading-relaxed text-ink-700">
              My dates are flexible. Tell me if moving them lowers the price.
            </span>
          </label>

          <Field label={`Trip length: ${form.nights} nights`} className="mt-6">
            <input
              type="range"
              min={3}
              max={14}
              value={form.nights}
              onChange={(e) => set('nights', Number(e.target.value))}
              className="w-full accent-[#C4551F]"
            />
            <div className="flex justify-between text-xs text-ink-500">
              <span>3 nights</span>
              <span>14 nights</span>
            </div>
          </Field>
        </Step>
      )}

      {step === 3 && (
        <Step title="Who is travelling?">
          <Counter
            label="Adults"
            hint="12 years and over"
            value={form.adults}
            min={1}
            onChange={(v) => set('adults', v)}
          />
          <Counter
            label="Children"
            hint="Under 12. Activity and hotel pricing differs."
            value={form.children}
            min={0}
            onChange={(v) => set('children', v)}
          />
        </Step>
      )}

      {step === 4 && (
        <Step title="What would you like to do there?">
          <p className="-mt-2 mb-5 text-[15px] leading-relaxed text-ink-700">
            Optional. Prices shown are per adult and are indicative. Skip this if you would
            rather decide later.
          </p>
          <ActivityGroup
            heading="Activities"
            items={adultActivities}
            selected={form.activities}
            onToggle={toggleActivity}
          />
          <ActivityGroup
            heading="Good with children"
            items={kidsActivities}
            selected={form.activities}
            onToggle={toggleActivity}
          />
        </Step>
      )}

      {step === 5 && (
        <Step title="What budget are you working with?">
          <p className="-mt-2 mb-5 text-[15px] leading-relaxed text-ink-700">
            Per person, including flights. This helps us suggest the right hotels rather than
            sending you a quote you did not want.
          </p>
          <div className="grid gap-3">
            {BUDGET_BANDS.map((band) => (
              <Choice
                key={band}
                selected={form.budgetBand === band}
                onClick={() => set('budgetBand', band)}
                title={band === 'Not sure yet' ? band : `₹${band}`}
              />
            ))}
          </div>
        </Step>
      )}

      {step === 6 && (
        <Step title="Where should we send the quote?">
          <Field label="Name">
            <input
              className="input"
              value={form.name}
              autoComplete="name"
              onChange={(e) => set('name', e.target.value)}
            />
          </Field>
          <Field label="WhatsApp number" hint="We will call or message this number.">
            <input
              className="input"
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              placeholder="9876543210"
              value={form.phone}
              onChange={(e) => set('phone', e.target.value)}
            />
          </Field>
          <Field label="Email" hint="Optional.">
            <input
              className="input"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={(e) => set('email', e.target.value)}
            />
          </Field>
          <Field label="Anything else we should know" hint="Optional.">
            <textarea
              className="input min-h-24 py-3"
              rows={3}
              value={form.notes}
              onChange={(e) => set('notes', e.target.value)}
            />
          </Field>
          {phoneError && (
            <p className="mt-2 text-sm font-medium text-clay">{phoneError}</p>
          )}
        </Step>
      )}

      {estimate && step > 2 && step < 6 && (
        <p className="mt-6 rounded-xl bg-sand-100 p-4 text-sm leading-relaxed text-ink-700">
          Running estimate for {estimate.travellers}{' '}
          {estimate.travellers === 1 ? 'traveller' : 'travellers'}:{' '}
          <strong className="font-semibold">
            {formatInrRange(estimate.total.low, estimate.total.high)}
          </strong>{' '}
          in total, including flights.
        </p>
      )}

      <div className="mt-8 flex gap-3">
        {step > 1 && (
          <button type="button" className="btn-ghost flex-1" onClick={() => setStep(step - 1)}>
            Back
          </button>
        )}
        {step < TOTAL_STEPS ? (
          <button
            type="button"
            className="btn-primary flex-1 disabled:opacity-40"
            disabled={!canAdvance}
            onClick={() => setStep(step + 1)}
          >
            Continue
          </button>
        ) : (
          <button
            type="button"
            className="btn-primary flex-1 disabled:opacity-40"
            disabled={submitting}
            onClick={handleSubmit}
          >
            {submitting ? 'Sending' : 'See my estimate'}
          </button>
        )}
      </div>

      <p className="mt-6 text-center text-sm text-ink-500">
        Would rather just talk?{' '}
        <a
          className="font-semibold text-sea underline underline-offset-4"
          href={whatsappLink('Hello, I would like to plan a trip.')}
          target="_blank"
          rel="noopener noreferrer"
        >
          Message on WhatsApp
        </a>
      </p>
    </div>
  );
}

function Result({
  result,
  form,
  estimate,
  destinationName,
  brochure,
  monthLabel,
}: {
  result: SubmitResult;
  form: FormState;
  estimate: ReturnType<typeof estimateTrip> | null;
  destinationName: string;
  brochure: string;
  monthLabel: string;
}) {
  const summary = [
    `Hello, I just sent an enquiry on the website.`,
    `Name: ${form.name}`,
    `Destination: ${destinationName}`,
    `Travel: ${monthLabel}${form.datesFlexible ? ' (flexible)' : ''}, ${form.nights} nights`,
    `Travellers: ${form.adults} adults, ${form.children} children`,
    estimate
      ? `Estimate shown: ${formatInrRange(estimate.total.low, estimate.total.high)}`
      : '',
  ]
    .filter(Boolean)
    .join('\n');

  return (
    <div className="wrap max-w-2xl py-10">
      <p className="eyebrow">Your estimate</p>
      <h1 className="mt-3 text-[1.9rem] leading-tight sm:text-4xl">
        {destinationName}, {monthLabel}
      </h1>

      {estimate && (
        <div className="card mt-7 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
            Estimated total for {estimate.travellers}{' '}
            {estimate.travellers === 1 ? 'traveller' : 'travellers'}
          </p>
          <p className="mt-2 text-[2.1rem] font-semibold leading-tight tracking-tight">
            {formatInrRange(estimate.total.low, estimate.total.high)}
          </p>
          <p className="mt-1 text-[15px] text-ink-700">
            About {formatInrRange(estimate.perPerson.low, estimate.perPerson.high)} per person.
          </p>

          <dl className="mt-6 space-y-2 border-t border-sand-200 pt-5 text-[15px]">
            <div className="flex items-baseline justify-between gap-3">
              <dt className="text-ink-700">Land package</dt>
              <dd className="font-semibold">
                {formatInrRange(estimate.land.low, estimate.land.high)}
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-3">
              <dt className="text-ink-700">Flights, estimated</dt>
              <dd className="font-semibold">
                {formatInrRange(estimate.flights.low, estimate.flights.high)}
              </dd>
            </div>
            {estimate.activityTotal > 0 && (
              <div className="flex items-baseline justify-between gap-3">
                <dt className="text-ink-700">Activities selected, included above</dt>
                <dd className="font-semibold">{formatInr(estimate.activityTotal)}</dd>
              </div>
            )}
          </dl>

          <p className="mt-5 rounded-xl bg-sand-100 p-4 text-sm leading-relaxed text-ink-700">
            This is an estimate, not a quote. It is based on {estimate.season.label} season
            rates for {monthLabel} and a standard four star hotel on twin sharing. The final
            price depends on your exact dates and on availability when we book.
          </p>
        </div>
      )}

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <a
          href={whatsappLink(summary)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wa"
        >
          <WhatsAppGlyph />
          Send this on WhatsApp
        </a>
        {brochure && (
          <a href={asset(brochure)} download className="btn-ghost">
            Download the {destinationName} guide
          </a>
        )}
      </div>

      <div className="mt-8 rounded-xl border border-sand-200 bg-white p-5">
        <h2 className="text-lg">What happens next</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-ink-700">
          {result.status === 'sent'
            ? `We have your details. ${site.quotePromise}`
            : `Your estimate is shown above. To make sure we have your details, send them across on WhatsApp using the button above. ${site.quotePromise}`}
        </p>
        {/* Diagnostics are for the owner during development, never for a customer. */}
        {result.status !== 'sent' && process.env.NODE_ENV === 'development' && (
          <p className="mt-3 text-sm text-ink-300">
            {result.status === 'not-configured'
              ? 'Development note: NEXT_PUBLIC_APPS_SCRIPT_URL is not set, so this enquiry was not written to the sheet.'
              : `Development note: delivery failed (${result.message}).`}
          </p>
        )}
      </div>

      <p className="mt-8 text-center text-sm text-ink-500">
        <Link className="font-semibold text-sea underline underline-offset-4" href="/">
          Back to the home page
        </Link>
      </p>
    </div>
  );
}

function Progress({ step }: { step: number }) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between text-sm text-ink-500">
        <span>
          Step {step} of {TOTAL_STEPS}
        </span>
        <span>{Math.round((step / TOTAL_STEPS) * 100)} percent</span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-sand-200">
        <div
          className="h-full rounded-full bg-clay transition-all duration-300"
          style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
        />
      </div>
    </div>
  );
}

function Step({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h1 className="text-[1.6rem] leading-tight sm:text-3xl">{title}</h1>
      <div className="mt-6">{children}</div>
    </div>
  );
}

function Field({
  label,
  hint,
  className = '',
  children,
}: {
  label: string;
  hint?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-semibold">{label}</span>
      {hint && <span className="mt-0.5 block text-sm text-ink-500">{hint}</span>}
      <div className="mt-2">{children}</div>
    </label>
  );
}

function Choice({
  selected,
  onClick,
  title,
  subtitle,
}: {
  selected: boolean;
  onClick: () => void;
  title: string;
  subtitle?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`w-full rounded-xl border p-4 text-left transition-colors ${
        selected ? 'border-clay bg-clay-100 ring-1 ring-clay' : 'border-sand-300 bg-white hover:bg-sand-100'
      }`}
    >
      <span className="block font-semibold">{title}</span>
      {subtitle && <span className="mt-1 block text-[14px] leading-snug text-ink-700">{subtitle}</span>}
    </button>
  );
}

function Counter({
  label,
  hint,
  value,
  min,
  onChange,
}: {
  label: string;
  hint: string;
  value: number;
  min: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="mb-4 flex items-center justify-between gap-4 rounded-xl border border-sand-300 bg-white p-4">
      <div>
        <p className="font-semibold">{label}</p>
        <p className="text-sm text-ink-500">{hint}</p>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label={`Fewer ${label.toLowerCase()}`}
          className="h-11 w-11 rounded-full border border-sand-300 text-xl font-semibold disabled:opacity-30"
          disabled={value <= min}
          onClick={() => onChange(value - 1)}
        >
          −
        </button>
        <span className="w-6 text-center text-lg font-semibold tabular-nums">{value}</span>
        <button
          type="button"
          aria-label={`More ${label.toLowerCase()}`}
          className="h-11 w-11 rounded-full border border-sand-300 text-xl font-semibold disabled:opacity-30"
          disabled={value >= 12}
          onClick={() => onChange(value + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}

function ActivityGroup({
  heading,
  items,
  selected,
  onToggle,
}: {
  heading: string;
  items: { id: string; name: string; description: string; indicativePrice: number }[];
  selected: string[];
  onToggle: (id: string) => void;
}) {
  if (items.length === 0) return null;
  return (
    <div className="mb-6">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-500">{heading}</h2>
      <div className="mt-3 grid gap-2.5">
        {items.map((a) => {
          const on = selected.includes(a.id);
          return (
            <button
              key={a.id}
              type="button"
              onClick={() => onToggle(a.id)}
              aria-pressed={on}
              className={`flex w-full items-start gap-3 rounded-xl border p-4 text-left transition-colors ${
                on ? 'border-clay bg-clay-100 ring-1 ring-clay' : 'border-sand-300 bg-white hover:bg-sand-100'
              }`}
            >
              <span
                aria-hidden
                className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded border ${
                  on ? 'border-clay bg-clay text-white' : 'border-sand-300 bg-white'
                }`}
              >
                {on ? '✓' : ''}
              </span>
              <span className="flex-1">
                <span className="flex items-baseline justify-between gap-3">
                  <span className="font-semibold">{a.name}</span>
                  <span className="shrink-0 text-sm font-semibold text-clay">
                    {formatInr(a.indicativePrice)}
                  </span>
                </span>
                <span className="mt-1 block text-[14px] leading-snug text-ink-700">
                  {a.description}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
