'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { liveDestinations, getDestination, getTier } from '@/config/destinations';
import { TRIP_STYLES, type Activity, type TripStyle } from '@/config/types';
import { site } from '@/config/site';
import { estimateTrip } from '@/lib/estimate';
import { formatInr, formatInrRange } from '@/lib/format';
import { asset } from '@/lib/asset';
import { sortForParty, matchesStyles, type Party } from '@/lib/suggest';
import { submitInquiry, normaliseIndianMobile, type SubmitResult } from '@/lib/inquiry';

const STORAGE_KEY = 'bindhast-plan-v2';

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const BUDGET_BANDS = [
  'Under 60,000 per person',
  '60,000 to 1,00,000 per person',
  '1,00,000 to 1,50,000 per person',
  'Over 1,50,000 per person',
  'Not sure yet',
];

/** A day that is fuller than this gets a gentle warning, never a block. */
const LONG_DAY_HOURS = 11;

interface FormState {
  destination: string;
  tierId: string;
  travelMonth: number;
  travelYear: number;
  datesFlexible: boolean;
  adults: number;
  children: number;
  seniors: number;
  styles: TripStyle[];
  /** Day number to activity ids. This is the itinerary. */
  dayPlan: Record<string, string[]>;
  budgetBand: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
}

function defaultMonth() {
  const d = new Date();
  const next = new Date(d.getFullYear(), d.getMonth() + 2, 1);
  return { month: next.getMonth() + 1, year: next.getFullYear() };
}

function planFromTier(destSlug: string, tierId: string): Record<string, string[]> {
  const tier = getTier(destSlug, tierId);
  const plan: Record<string, string[]> = {};
  tier?.itinerary.forEach((d) => {
    plan[String(d.day)] = [...(d.suggestedActivityIds ?? [])];
  });
  return plan;
}

export default function PlanForm() {
  const params = useSearchParams();
  const [form, setForm] = useState<FormState | null>(null);
  const [openPicker, setOpenPicker] = useState<string | null>(null);
  const [showAllFor, setShowAllFor] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<SubmitResult | null>(null);
  const [error, setError] = useState('');
  const contactRef = useRef<HTMLDivElement>(null);

  // Restore a dropped session, then let the query string override destination
  // and tier so a fresh link from WhatsApp always lands where it should.
  useEffect(() => {
    let saved: Partial<FormState> = {};
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) saved = JSON.parse(raw) as Partial<FormState>;
    } catch {
      // Blocked storage. Carry on with a clean slate.
    }

    const qDest = getDestination(params.get('dest'))?.slug;
    const destination = qDest || saved.destination || liveDestinations[0].slug;
    const qTier = params.get('tier');
    const tierId =
      getTier(destination, qTier)?.id ??
      (saved.destination === destination ? saved.tierId : undefined) ??
      getTier(destination, null)!.id;

    const { month, year } = defaultMonth();
    const sameTrip = saved.destination === destination && saved.tierId === tierId;

    setForm({
      destination,
      tierId,
      travelMonth: saved.travelMonth ?? month,
      travelYear: saved.travelYear ?? year,
      datesFlexible: saved.datesFlexible ?? true,
      adults: saved.adults ?? 2,
      children: saved.children ?? 0,
      seniors: saved.seniors ?? 0,
      styles: saved.styles ?? [],
      dayPlan: sameTrip && saved.dayPlan ? saved.dayPlan : planFromTier(destination, tierId),
      budgetBand: saved.budgetBand ?? '',
      name: saved.name ?? '',
      phone: saved.phone ?? '',
      email: saved.email ?? '',
      notes: saved.notes ?? '',
    });
  }, [params]);

  useEffect(() => {
    if (!form) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
    } catch {
      // Losing persistence is not worth breaking the page over.
    }
  }, [form]);

  const destination = form ? getDestination(form.destination) : undefined;
  const tier = form && destination ? getTier(form.destination, form.tierId) : undefined;

  const chosenIds = useMemo(
    () => (form ? Object.values(form.dayPlan).flat() : []),
    [form],
  );

  const estimate = useMemo(() => {
    if (!form || !destination) return null;
    return estimateTrip({
      destination,
      nights: tier?.nights ?? 4,
      adults: form.adults,
      children: form.children,
      seniors: form.seniors,
      activityIds: chosenIds,
      travelMonth: form.travelMonth,
    });
  }, [form, destination, tier, chosenIds]);

  if (!form || !destination || !tier) return null;

  const party: Party = { adults: form.adults, children: form.children, seniors: form.seniors };
  const season = estimate?.season;

  function update(patch: Partial<FormState>) {
    setForm((f) => (f ? { ...f, ...patch } : f));
  }

  function changeTrip(destSlug: string, tierId: string) {
    update({
      destination: destSlug,
      tierId,
      dayPlan: planFromTier(destSlug, tierId),
    });
    setOpenPicker(null);
  }

  function toggleStyle(style: TripStyle) {
    update({
      styles: form!.styles.includes(style)
        ? form!.styles.filter((s) => s !== style)
        : [...form!.styles, style],
    });
  }

  function addActivity(day: number, id: string) {
    const key = String(day);
    const current = form!.dayPlan[key] ?? [];
    if (current.includes(id)) return;
    update({ dayPlan: { ...form!.dayPlan, [key]: [...current, id] } });
  }

  function removeActivity(day: number, id: string) {
    const key = String(day);
    update({
      dayPlan: { ...form!.dayPlan, [key]: (form!.dayPlan[key] ?? []).filter((a) => a !== id) },
    });
  }

  function activityById(id: string): Activity | undefined {
    return destination!.activities.find((a) => a.id === id);
  }

  async function handleSubmit() {
    const phone = normaliseIndianMobile(form!.phone);
    if (!form!.name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!phone) {
      setError('Enter a 10 digit Indian mobile number.');
      return;
    }
    setError('');
    setSubmitting(true);

    const itineraryText = tier!.itinerary
      .map((d) => {
        const names = (form!.dayPlan[String(d.day)] ?? [])
          .map((id) => activityById(id)?.name ?? id)
          .join('; ');
        return `Day ${d.day} (${d.city ?? ''}): ${names || 'nothing booked'}`;
      })
      .join(' | ');

    const suggested = tier!.itinerary.flatMap((d) => d.suggestedActivityIds ?? []);
    const removed = suggested.filter((id) => !chosenIds.includes(id));
    const added = chosenIds.filter((id) => !suggested.includes(id));

    const res = await submitInquiry({
      name: form!.name.trim(),
      phone,
      email: form!.email.trim(),
      destination: destination!.name,
      tier: tier!.name,
      travelMonth: `${MONTH_NAMES[form!.travelMonth - 1]} ${form!.travelYear}`,
      datesFlexible: form!.datesFlexible,
      nights: tier!.nights,
      adults: form!.adults,
      children: form!.children,
      seniors: form!.seniors,
      styles: form!.styles,
      activities: chosenIds.map((id) => activityById(id)?.name ?? id),
      activitiesAdded: added.map((id) => activityById(id)?.name ?? id),
      suggestionsRemoved: removed.map((id) => activityById(id)?.name ?? id),
      itinerary: itineraryText,
      activityTotal: estimate?.activityTotal ?? 0,
      budgetBand: form!.budgetBand,
      estimateLow: estimate?.total.low ?? 0,
      estimateHigh: estimate?.total.high ?? 0,
      notes: form!.notes.trim(),
      source: typeof window === 'undefined' ? '' : window.location.href,
    });

    setSubmitting(false);
    setResult(res);
  }

  if (result) {
    return (
      <Sent
        result={result}
        name={form.name}
        destinationName={destination.name}
        brochure={destination.brochure}
        estimate={estimate}
      />
    );
  }

  return (
    <div className="wrap max-w-3xl pb-28 pt-8">
      <header>
        <p className="eyebrow">Plan your trip</p>
        <h1 className="mt-2 text-[1.9rem] leading-tight sm:text-4xl">
          Your {destination.name} itinerary
        </h1>
        <p className="mt-3 text-[16px] leading-relaxed text-ink-700">
          We have filled in a suggested plan below. Change anything you like, remove what you
          do not want, and leave days empty if you would rather decide later. Nothing here is
          fixed.
        </p>
      </header>

      {/* Destination and package */}
      <Section title="Destination and length">
        <div className="grid gap-3 sm:grid-cols-2">
          {liveDestinations.map((d) => (
            <Choice
              key={d.slug}
              selected={form.destination === d.slug}
              onClick={() => changeTrip(d.slug, getTier(d.slug, null)!.id)}
              title={d.name}
              subtitle={d.tagline}
            />
          ))}
        </div>
        <div className="mt-4 grid gap-3">
          {destination.tiers.map((t) => (
            <Choice
              key={t.id}
              selected={form.tierId === t.id}
              onClick={() => changeTrip(destination.slug, t.id)}
              title={`${t.name}, ${t.days} days`}
              subtitle={t.blurb}
              trailing={`from ${formatInr(t.fromPricePerPerson)}`}
            />
          ))}
        </div>
        <p className="mt-3 text-sm text-ink-500">
          Changing the destination or package rebuilds the suggested itinerary below.
        </p>
      </Section>

      {/* When */}
      <Section title="When are you travelling?">
        <div className="grid grid-cols-2 gap-3">
          <label className="block">
            <span className="text-sm font-semibold">Month</span>
            <select
              className="input mt-2"
              value={form.travelMonth}
              onChange={(e) => update({ travelMonth: Number(e.target.value) })}
            >
              {MONTH_NAMES.map((m, i) => (
                <option key={m} value={i + 1}>{m}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-semibold">Year</span>
            <select
              className="input mt-2"
              value={form.travelYear}
              onChange={(e) => update({ travelYear: Number(e.target.value) })}
            >
              {[0, 1].map((o) => {
                const y = new Date().getFullYear() + o;
                return <option key={y} value={y}>{y}</option>;
              })}
            </select>
          </label>
        </div>

        <label className="mt-3 flex items-start gap-3 rounded-xl border border-sand-300 bg-white p-4">
          <input
            type="checkbox"
            className="mt-1 h-5 w-5 accent-[#C4551F]"
            checked={form.datesFlexible}
            onChange={(e) => update({ datesFlexible: e.target.checked })}
          />
          <span className="text-[15px] leading-relaxed text-ink-700">
            My dates are flexible. Tell me if moving them lowers the price.
          </span>
        </label>

        {season && (
          <div
            className={`mt-3 rounded-xl p-4 text-[15px] leading-relaxed ${
              season.label === 'peak'
                ? 'bg-clay-100 text-ink-700'
                : season.label === 'off'
                  ? 'bg-sea-100 text-ink-700'
                  : 'bg-sand-100 text-ink-700'
            }`}
          >
            <strong className="font-semibold">
              {MONTH_NAMES[form.travelMonth - 1]} is {season.label === 'off' ? 'off' : season.label} season.
            </strong>{' '}
            {season.note} {destination.bestMonthsSummary}
          </div>
        )}
      </Section>

      {/* Who */}
      <Section title="Who is travelling?">
        <Counter label="Adults" hint="12 to 59" value={form.adults} min={0} onChange={(v) => update({ adults: v })} />
        <Counter label="Children" hint="Under 12. Hotel and activity pricing differs." value={form.children} min={0} onChange={(v) => update({ children: v })} />
        <Counter label="Seniors" hint="60 and over. Same price, gentler suggestions." value={form.seniors} min={0} onChange={(v) => update({ seniors: v })} />
      </Section>

      {/* Style */}
      <Section
        title="What kind of trip is this?"
        subtitle="Pick as many as apply. This reorders the suggestions below so the right things surface first. It does not hide anything."
      >
        <div className="flex flex-wrap gap-2">
          {TRIP_STYLES.map((s) => {
            const on = form.styles.includes(s.id);
            return (
              <button
                key={s.id}
                type="button"
                aria-pressed={on}
                onClick={() => toggleStyle(s.id)}
                title={s.hint}
                className={`min-h-[2.75rem] rounded-full border px-4 text-sm font-semibold transition-colors ${
                  on
                    ? 'border-clay bg-clay text-white'
                    : 'border-sand-300 bg-white text-ink-700 hover:bg-sand-100'
                }`}
              >
                {s.label}
              </button>
            );
          })}
        </div>
      </Section>

      {/* Itinerary */}
      <Section
        title="Your day by day plan"
        subtitle="Suggested activities are already added. Remove anything you do not want and add whatever you do."
      >
        <div className="space-y-4">
          {tier.itinerary.map((day) => {
            const key = String(day.day);
            const ids = form.dayPlan[key] ?? [];
            const chosen = ids.map(activityById).filter(Boolean) as Activity[];
            const hours = chosen.reduce((sum, a) => sum + a.durationHours, 0);
            const pickerOpen = openPicker === key;

            const pool = destination.activities.filter((a) => {
              if (ids.includes(a.id)) return false;
              if (showAllFor === key) return true;
              return !day.city || a.city === day.city;
            });
            const ranked = sortForParty(pool, form.styles, party);

            return (
              <div key={day.day} className="card p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-lg">
                    Day {day.day}. {day.title}
                  </h3>
                  {day.city && <span className="shrink-0 text-sm text-ink-500">{day.city}</span>}
                </div>
                <p className="mt-1 text-[15px] leading-relaxed text-ink-700">{day.detail}</p>

                {chosen.length > 0 ? (
                  <ul className="mt-4 space-y-2">
                    {chosen.map((a) => (
                      <li
                        key={a.id}
                        className="flex items-start gap-3 rounded-xl border border-sand-200 bg-sand-50 p-3"
                      >
                        <div className="flex-1">
                          <div className="flex items-baseline justify-between gap-3">
                            <span className="font-semibold">{a.name}</span>
                            <span className="shrink-0 text-sm font-semibold text-clay">
                              {priceLabel(a.indicativePrice)}
                            </span>
                          </div>
                          <p className="mt-1 text-[14px] leading-snug text-ink-700">
                            {a.description}
                          </p>
                          <p className="mt-1 text-xs text-ink-300">
                            About {a.durationHours} hours
                            {a.note ? `. ${a.note}` : ''}
                            {a.infoUrl ? ' ' : ''}
                          </p>
                          {(a.infoUrl || a.videoUrl) && (
                            <p className="mt-1 flex gap-3 text-xs">
                              {a.infoUrl && (
                                <a className="font-semibold text-sea underline underline-offset-2" href={a.infoUrl} target="_blank" rel="noopener noreferrer">
                                  More detail
                                </a>
                              )}
                              {a.videoUrl && (
                                <a className="font-semibold text-sea underline underline-offset-2" href={a.videoUrl} target="_blank" rel="noopener noreferrer">
                                  Watch a video
                                </a>
                              )}
                            </p>
                          )}
                        </div>
                        <button
                          type="button"
                          aria-label={`Remove ${a.name}`}
                          onClick={() => removeActivity(day.day, a.id)}
                          className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-sand-300 bg-white text-ink-500 hover:bg-sand-100"
                        >
                          ×
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4 rounded-xl border border-dashed border-sand-300 p-3 text-[15px] text-ink-500">
                    Nothing planned. A free day is a perfectly good choice.
                  </p>
                )}

                {hours > LONG_DAY_HOURS && (
                  <p className="mt-3 text-sm text-clay">
                    That is about {Math.round(hours)} hours of activity in one day. It can be
                    done, but we would usually move something to another day.
                  </p>
                )}

                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    type="button"
                    className="btn-ghost h-11 min-h-0 px-4 text-sm"
                    onClick={() => {
                      setOpenPicker(pickerOpen ? null : key);
                      setShowAllFor(null);
                    }}
                  >
                    {pickerOpen ? 'Close' : 'Add an activity'}
                  </button>
                </div>

                {pickerOpen && (
                  <div className="mt-4 border-t border-sand-200 pt-4">
                    {ranked.length === 0 ? (
                      <p className="text-[15px] text-ink-500">Nothing left to add for this day.</p>
                    ) : (
                      <ul className="space-y-2">
                        {ranked.slice(0, 8).map((a) => (
                          <li key={a.id}>
                            <button
                              type="button"
                              onClick={() => addActivity(day.day, a.id)}
                              className="w-full rounded-xl border border-sand-300 bg-white p-3 text-left transition-colors hover:bg-sand-100"
                            >
                              <span className="flex items-baseline justify-between gap-3">
                                <span className="font-semibold">{a.name}</span>
                                <span className="shrink-0 text-sm font-semibold text-clay">
                                  {priceLabel(a.indicativePrice)}
                                </span>
                              </span>
                              <span className="mt-1 block text-[14px] leading-snug text-ink-700">
                                {a.description}
                              </span>
                              <span className="mt-1 flex flex-wrap items-center gap-2 text-xs text-ink-300">
                                <span>{a.city}</span>
                                <span>About {a.durationHours} hours</span>
                                {matchesStyles(a, form.styles) && (
                                  <span className="rounded-full bg-sea-100 px-2 py-0.5 font-semibold text-sea">
                                    Matches your style
                                  </span>
                                )}
                                {a.audience === 'adult' && (
                                  <span className="rounded-full bg-sand-100 px-2 py-0.5 font-semibold text-ink-500">
                                    Adults only
                                  </span>
                                )}
                                {a.intensity === 'high' && (
                                  <span className="rounded-full bg-sand-100 px-2 py-0.5 font-semibold text-ink-500">
                                    Physically demanding
                                  </span>
                                )}
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                    <button
                      type="button"
                      className="mt-3 text-sm font-semibold text-sea underline underline-offset-4"
                      onClick={() => setShowAllFor(showAllFor === key ? null : key)}
                    >
                      {showAllFor === key
                        ? `Show only ${day.city ?? 'nearby'} activities`
                        : `Show everything in ${destination.name}`}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      {/* Practical info */}
      <Section title="Worth knowing before you decide">
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard title="Visa">
            <p>{destination.visa.type}</p>
            <p className="mt-1 text-ink-500">{destination.visa.timeline}</p>
            {destination.visa.feeInr > 0 && (
              <p className="mt-1 text-ink-500">
                {formatInr(destination.visa.feeInr)} per person, included in the package.
              </p>
            )}
          </InfoCard>
          <InfoCard title="Best months">
            <p>{destination.bestMonthsSummary}</p>
            <p className="mt-1 text-ink-500">{destination.flightTimeSummary}</p>
          </InfoCard>
          <InfoCard title="Daily spending on the ground">
            <p>{destination.costSamplesNote}</p>
          </InfoCard>
          <InfoCard title="Typical prices there">
            <ul className="space-y-1">
              {destination.costSamples.slice(0, 4).map((c) => (
                <li key={c.label} className="flex justify-between gap-3">
                  <span>{c.label}</span>
                  <span className="shrink-0 font-semibold">
                    {formatInrRange(c.fromInr, c.toInr)}
                  </span>
                </li>
              ))}
            </ul>
          </InfoCard>
        </div>
      </Section>

      {/* Estimate */}
      {estimate && (
        <Section title="Your estimate">
          <div className="card p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
              Estimated total for {estimate.travellers}{' '}
              {estimate.travellers === 1 ? 'traveller' : 'travellers'}
            </p>
            <p className="mt-1 text-[2rem] font-semibold leading-tight tracking-tight">
              {formatInrRange(estimate.total.low, estimate.total.high)}
            </p>
            <p className="mt-1 text-[15px] text-ink-700">
              About {formatInrRange(estimate.perPerson.low, estimate.perPerson.high)} per person.
            </p>
            <dl className="mt-5 space-y-2 border-t border-sand-200 pt-4 text-[15px]">
              <Row label="Land package, hotels and transfers">
                {formatInrRange(estimate.land.low, estimate.land.high)}
              </Row>
              <Row label="Flights, estimated">
                {formatInrRange(estimate.flights.low, estimate.flights.high)}
              </Row>
              <Row label={`Activities you selected (${chosenIds.length})`}>
                {estimate.activityTotal > 0 ? formatInr(estimate.activityTotal) : 'None yet'}
              </Row>
            </dl>
            <p className="mt-4 rounded-xl bg-sand-100 p-4 text-sm leading-relaxed text-ink-700">
              This is an estimate, not a quote. Flights in particular move with the date. We
              confirm real prices on your dates before anything is booked.
            </p>
          </div>
        </Section>
      )}

      {/* Budget */}
      <Section
        title="What budget are you working with?"
        subtitle="Per person, including flights. It helps us pitch hotels at the right level."
      >
        <div className="grid gap-3">
          {BUDGET_BANDS.map((band) => (
            <Choice
              key={band}
              selected={form.budgetBand === band}
              onClick={() => update({ budgetBand: band })}
              title={band === 'Not sure yet' ? band : `₹${band}`}
            />
          ))}
        </div>
      </Section>

      {/* Contact */}
      <div ref={contactRef}>
        <Section title="Where should we send the quote?">
          <label className="block">
            <span className="text-sm font-semibold">Name</span>
            <input
              className="input mt-2"
              value={form.name}
              autoComplete="name"
              onChange={(e) => update({ name: e.target.value })}
            />
          </label>
          <label className="mt-4 block">
            <span className="text-sm font-semibold">WhatsApp number</span>
            <input
              className="input mt-2"
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              placeholder="9876543210"
              value={form.phone}
              onChange={(e) => update({ phone: e.target.value })}
            />
          </label>
          <label className="mt-4 block">
            <span className="text-sm font-semibold">Email</span>
            <span className="ml-2 text-sm text-ink-500">Optional</span>
            <input
              className="input mt-2"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={(e) => update({ email: e.target.value })}
            />
          </label>
          <label className="mt-4 block">
            <span className="text-sm font-semibold">Anything else we should know</span>
            <span className="ml-2 text-sm text-ink-500">Optional</span>
            <textarea
              className="input mt-2 min-h-24 py-3"
              rows={3}
              placeholder="Occasion, dietary needs, mobility, hotel preference, anything at all."
              value={form.notes}
              onChange={(e) => update({ notes: e.target.value })}
            />
          </label>

          {error && <p className="mt-3 text-sm font-medium text-clay">{error}</p>}

          <button
            type="button"
            className="btn-primary mt-6 w-full disabled:opacity-40"
            disabled={submitting}
            onClick={handleSubmit}
          >
            {submitting ? 'Sending' : 'Send my requirements'}
          </button>
          <p className="mt-3 text-center text-sm text-ink-500">{site.quotePromise}</p>
        </Section>
      </div>

      {/* Sticky summary */}
      {estimate && (
        <div className="fixed inset-x-0 bottom-0 z-30 border-t border-sand-200 bg-white/95 backdrop-blur">
          <div className="wrap flex max-w-3xl items-center justify-between gap-4 py-3">
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">
                {formatInrRange(estimate.total.low, estimate.total.high)}
              </p>
              <p className="truncate text-xs text-ink-500">
                {estimate.travellers} travelling, {chosenIds.length} activities, estimated
              </p>
            </div>
            <button
              type="button"
              className="btn-primary h-11 min-h-0 shrink-0 px-5 text-sm"
              onClick={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })}
            >
              Send it
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function priceLabel(price: number) {
  return price === 0 ? 'No ticket cost' : formatInr(price);
}

function Sent({
  result,
  name,
  destinationName,
  brochure,
  estimate,
}: {
  result: SubmitResult;
  name: string;
  destinationName: string;
  brochure: string;
  estimate: ReturnType<typeof estimateTrip> | null;
}) {
  return (
    <div className="wrap max-w-2xl py-16">
      <p className="eyebrow">Received</p>
      <h1 className="mt-3 text-[1.9rem] leading-tight sm:text-4xl">
        Thank you{name ? `, ${name.split(' ')[0]}` : ''}.
      </h1>
      <p className="mt-4 text-[17px] leading-relaxed text-ink-700">
        We have your {destinationName} plan. {site.quotePromise} We will come back with real
        prices on your dates, and we will flag anything in the itinerary we would change.
      </p>
      {estimate && (
        <p className="mt-4 rounded-xl bg-sand-100 p-4 text-[15px] leading-relaxed text-ink-700">
          The estimate you saw was{' '}
          <strong className="font-semibold">
            {formatInrRange(estimate.total.low, estimate.total.high)}
          </strong>{' '}
          for {estimate.travellers}{' '}
          {estimate.travellers === 1 ? 'traveller' : 'travellers'}, including flights.
        </p>
      )}
      {brochure && (
        <a href={asset(brochure)} download className="btn-ghost mt-6 w-full sm:w-auto">
          Download the {destinationName} guide
        </a>
      )}
      {result.status !== 'sent' && process.env.NODE_ENV === 'development' && (
        <p className="mt-6 text-sm text-ink-300">
          {result.status === 'not-configured'
            ? 'Development note: NEXT_PUBLIC_APPS_SCRIPT_URL is not set, so this was not written to the sheet.'
            : `Development note: delivery failed (${result.message}).`}
        </p>
      )}
    </div>
  );
}

/* ---------- small pieces ---------- */

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10 border-t border-sand-200 pt-8">
      <h2 className="text-xl sm:text-2xl">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-[15px] leading-relaxed text-ink-700">{subtitle}</p>
      )}
      <div className="mt-5">{children}</div>
    </section>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <dt className="text-ink-700">{label}</dt>
      <dd className="shrink-0 font-semibold">{children}</dd>
    </div>
  );
}

function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-sand-200 bg-white p-4 text-[15px] leading-relaxed text-ink-700">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-500">{title}</h3>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function Choice({
  selected,
  onClick,
  title,
  subtitle,
  trailing,
}: {
  selected: boolean;
  onClick: () => void;
  title: string;
  subtitle?: string;
  trailing?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`w-full rounded-xl border p-4 text-left transition-colors ${
        selected
          ? 'border-clay bg-clay-100 ring-1 ring-clay'
          : 'border-sand-300 bg-white hover:bg-sand-100'
      }`}
    >
      <span className="flex items-baseline justify-between gap-3">
        <span className="font-semibold">{title}</span>
        {trailing && <span className="shrink-0 text-sm text-ink-500">{trailing}</span>}
      </span>
      {subtitle && (
        <span className="mt-1 block text-[14px] leading-snug text-ink-700">{subtitle}</span>
      )}
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
    <div className="mb-3 flex items-center justify-between gap-4 rounded-xl border border-sand-300 bg-white p-4">
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
