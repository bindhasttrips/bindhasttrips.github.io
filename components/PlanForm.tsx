'use client';

import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { liveDestinations, getDestination, getTier } from '@/config/destinations';
import { TRIP_STYLES, GROUP_TYPES, type Activity, type Destination, type GroupType, type TripStyle } from '@/config/types';
import { STAY_TYPES, NIGHTLY_BUDGETS, TOTAL_BUDGETS, stayById } from '@/config/stay';
import { site, SHOW_ESTIMATE, whatsappLink } from '@/config/site';
import { estimateTrip } from '@/lib/estimate';
import { daysFromNights } from '@/lib/itinerary';
import { formatInr, formatInrRange } from '@/lib/format';
import { asset } from '@/lib/asset';
import { cityImage } from '@/config/photos';
import { sortForParty, matchesStyles, type Party } from '@/lib/suggest';
import ActivityCard from '@/components/ActivityCard';
import { WhatsAppGlyph } from '@/components/Header';
import { submitInquiry, fetchEditablePlan, normaliseIndianMobile, type SubmitResult } from '@/lib/inquiry';

const STORAGE_KEY = 'bindhast-plan-v4';
const MIN_NIGHTS = 2;
const MAX_NIGHTS = 21;

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

interface FormState {
  destination: string;
  groupType: GroupType | '';
  flyingFrom: string;
  travelMonth: number;
  travelYear: number;
  datesFlexible: boolean;
  nights: number;
  adults: number;
  children: number;
  childAges: string;
  seniors: number;
  cities: string[];
  stayType: string;
  nightlyBudget: string;
  styles: TripStyle[];
  activities: string[];
  /** Cities where they asked us to plan it for them. */
  helpCities: string[];
  budgetBand: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
}

type StepId =
  | 'destination' | 'group' | 'when' | 'length' | 'who' | 'origin' | 'cities'
  | 'stay' | 'style' | 'budget' | 'review' | 'contact'
  | `activities:${string}`;

/** "November 2026" back into its parts, for prefilling an edit. */
function monthFromLabel(label?: string): number | undefined {
  if (!label) return undefined;
  const i = MONTH_NAMES.findIndex((m) => label.startsWith(m));
  return i === -1 ? undefined : i + 1;
}

function yearFromLabel(label?: string): number | undefined {
  const m = label?.match(/\b(20\d{2})\b/);
  return m ? Number(m[1]) : undefined;
}

function initial(): FormState {
  const d = new Date();
  const next = new Date(d.getFullYear(), d.getMonth() + 2, 1);
  return {
    destination: '',
    groupType: '',
    flyingFrom: '',
    travelMonth: next.getMonth() + 1,
    travelYear: next.getFullYear(),
    datesFlexible: true,
    nights: 5,
    adults: 2,
    children: 0,
    childAges: '',
    seniors: 0,
    cities: [],
    stayType: 'hotel4',
    nightlyBudget: '',
    styles: [],
    activities: [],
    helpCities: [],
    budgetBand: '',
    name: '',
    phone: '',
    email: '',
    notes: '',
  };
}

export default function PlanForm() {
  const params = useSearchParams();
  const [form, setForm] = useState<FormState | null>(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<SubmitResult | null>(null);
  const [onlyRecommended, setOnlyRecommended] = useState(true);
  const [editToken, setEditToken] = useState('');
  // Honeypot. Hidden from people, irresistible to bots.
  const [website, setWebsite] = useState('');
  const [editState, setEditState] = useState<'none' | 'loading' | 'editing' | 'locked' | 'missing'>('none');

  useEffect(() => {
    let saved: Partial<FormState> = {};
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) saved = JSON.parse(raw) as Partial<FormState>;
    } catch {
      // Blocked storage. Start clean.
    }
    const base = { ...initial(), ...saved };
    const qDest = getDestination(params.get('dest'))?.slug;
    if (qDest && qDest !== saved.destination) {
      base.destination = qDest;
      base.cities = [];
      base.activities = [];
      base.helpCities = [];
    } else if (qDest) {
      base.destination = qDest;
    }
    // A tier link only seeds the length. The customer still controls it.
    const qTier = params.get('tier');
    if (qDest && qTier) {
      const tier = getTier(qDest, qTier);
      if (tier) base.nights = tier.nights;
    }
    setForm(base);
  }, [params]);

  // ?e=<token> means an existing customer is changing their own plan. Their
  // saved answers come from the sheet, never from this browser.
  useEffect(() => {
    const e = params.get('e');
    if (!e) return;
    setEditState('loading');
    setEditToken(e);
    fetchEditablePlan(e).then((plan) => {
      if (!plan.ok) {
        setEditState(plan.error === 'locked' ? 'locked' : 'missing');
        return;
      }
      const dest = liveDestinations.find((d) => d.name === plan.destination);
      setForm((f) => ({
        ...(f ?? initial()),
        destination: dest?.slug ?? f?.destination ?? '',
        groupType: (plan.groupType as GroupType) || '',
        flyingFrom: plan.flyingFrom ?? '',
        travelMonth: monthFromLabel(plan.travelMonth) ?? f?.travelMonth ?? 1,
        travelYear: yearFromLabel(plan.travelMonth) ?? f?.travelYear ?? new Date().getFullYear(),
        datesFlexible: plan.datesFlexible ?? true,
        nights: plan.nights || f?.nights || 5,
        adults: plan.adults ?? 2,
        children: plan.children ?? 0,
        childAges: plan.childAges ?? '',
        seniors: plan.seniors ?? 0,
        cities: plan.cities ?? [],
        stayType: STAY_TYPES.find((s) => s.label === plan.stayType)?.id ?? 'hotel4',
        nightlyBudget: plan.nightlyBudget ?? '',
        styles: (plan.styles ?? []) as TripStyle[],
        activities: plan.activityIds ?? [],
        helpCities: plan.helpCities ?? [],
        budgetBand: plan.budgetBand ?? '',
        name: plan.name ?? '',
        phone: plan.phone ?? '',
        email: plan.email ?? '',
        notes: plan.notes ?? '',
      }));
      setEditState('editing');
    });
  }, [params]);

  useEffect(() => {
    if (!form) return;
    // An edit session must not be polluted by a half finished plan left in
    // this browser from someone else's enquiry.
    if (editState === 'editing' || editState === 'loading') return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
    } catch {
      // Not worth breaking the form over.
    }
  }, [form, editState]);

  const destination = form ? getDestination(form.destination) : undefined;

  const steps: StepId[] = useMemo(() => {
    const s: StepId[] = [
      'destination', 'group', 'when', 'length', 'who', 'origin', 'cities', 'stay', 'style',
    ];
    if (form) for (const c of form.cities) s.push(`activities:${c}` as StepId);
    s.push('budget', 'review', 'contact');
    return s;
  }, [form]);

  const estimate = useMemo(() => {
    if (!form || !destination) return null;
    return estimateTrip({
      destination,
      nights: form.nights,
      adults: form.adults,
      children: form.children,
      seniors: form.seniors,
      stayMultiplier: stayById(form.stayType).multiplier,
      activityIds: form.activities,
      travelMonth: form.travelMonth,
    });
  }, [form, destination]);

  if (!form) return null;

  const step = steps[Math.min(stepIndex, steps.length - 1)];
  const party: Party = {
    adults: form.adults,
    children: form.children,
    seniors: form.seniors,
    groupType: form.groupType || undefined,
  };

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => (f ? { ...f, [key]: value } : f));
    setError('');
  }

  function toggle<T>(list: T[], value: T): T[] {
    return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
  }

  function validate(): string {
    if (step === 'destination' && !destination) return 'Pick a destination to continue.';
    if (step === 'group' && !form!.groupType) return 'Let us know who is travelling with you.';
    if (step === 'origin' && !form!.flyingFrom.trim()) return 'Tell us which city you will fly from.';
    if (step === 'cities' && form!.cities.length === 0) return 'Pick at least one city.';
    if (step === 'stay' && !form!.nightlyBudget) return 'Pick a nightly budget, or choose "Not sure".';
    if (step === 'style' && form!.styles.length === 0) return 'Pick at least one, so we know what to suggest.';
    if (step === 'budget' && !form!.budgetBand) return 'Pick a budget, or choose "Not sure yet".';
    return '';
  }

  function next() {
    const problem = validate();
    if (problem) {
      setError(problem);
      return;
    }
    setError('');
    setOnlyRecommended(true);
    setStepIndex((i) => Math.min(i + 1, steps.length - 1));
    window.scrollTo({ top: 0 });
  }

  function back() {
    setError('');
    setStepIndex((i) => Math.max(i - 1, 0));
    window.scrollTo({ top: 0 });
  }

  async function submit() {
    const phone = normaliseIndianMobile(form!.phone);
    if (!form!.name.trim()) return setError('Please enter your name.');
    if (!phone) return setError('Enter a 10 digit Indian mobile number.');
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form!.email.trim())) {
      return setError('Enter an email address so we can send you a copy.');
    }
    setError('');
    setSubmitting(true);

    const byCity = form!.cities.map((city) => {
      if (form!.helpCities.includes(city)) return `${city}: asked us to plan it`;
      const names = form!.activities
        .map((id) => destination!.activities.find((a) => a.id === id))
        .filter((a): a is Activity => Boolean(a) && a!.city === city)
        .map((a) => a.name);
      return `${city}: ${names.length ? names.join('; ') : 'nothing picked'}`;
    });

    const res = await submitInquiry({
      ...(editToken ? { action: 'update' as const, editToken } : {}),
      website,
      name: form!.name.trim(),
      phone,
      email: form!.email.trim(),
      flyingFrom: form!.flyingFrom.trim(),
      destination: destination!.name,
      groupType: form!.groupType || '',
      travelMonth: `${MONTH_NAMES[form!.travelMonth - 1]} ${form!.travelYear}`,
      datesFlexible: form!.datesFlexible,
      nights: form!.nights,
      days: daysFromNights(form!.nights),
      adults: form!.adults,
      children: form!.children,
      childAges: form!.childAges.trim(),
      seniors: form!.seniors,
      cities: form!.cities,
      stayType: stayById(form!.stayType).label,
      nightlyBudget: form!.nightlyBudget,
      styles: form!.styles,
      activities: form!.activities.map(
        (id) => destination!.activities.find((a) => a.id === id)?.name ?? id,
      ),
      activityIds: form!.activities,
      helpCities: form!.helpCities,
      itinerary: byCity.join(' | '),
      activityTotal: estimate?.activityTotal ?? 0,
      unpricedActivities: estimate?.unpricedActivities ?? 0,
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
      <Done
        result={result}
        name={form.name}
        destinationName={destination?.name ?? ''}
        brochure={destination?.brochure ?? ''}
        summaryLines={[
          `${destination?.name ?? ''}, ${daysFromNights(form.nights)} days`,
          `${MONTH_NAMES[form.travelMonth - 1]} ${form.travelYear}${form.datesFlexible ? ', flexible' : ''}`,
          `${describeParty(form)}, flying from ${form.flyingFrom || 'India'}`,
          `Staying in ${stayById(form.stayType).label}`,
          ...form.cities.map((city) => {
            if (form.helpCities.includes(city)) return `${city}: please plan this for me`;
            const names = form.activities
              .map((id) => destination?.activities.find((a) => a.id === id))
              .filter((a): a is Activity => Boolean(a) && a!.city === city)
              .map((a) => a.name);
            return `${city}: ${names.length ? names.join(', ') : 'nothing picked yet'}`;
          }),
        ]}
      />
    );
  }

  const isActivityStep = step.startsWith('activities:');
  const activityCity = isActivityStep ? step.slice('activities:'.length) : '';

  if (editState === 'loading') {
    return (
      <div className="wrap max-w-2xl py-16">
        <p className="text-[15px] text-ink-500">Loading your plan.</p>
      </div>
    );
  }

  if (editState === 'locked' || editState === 'missing') {
    return (
      <div className="wrap max-w-2xl py-16">
        <h1 className="text-2xl">
          {editState === 'locked' ? 'This plan is now confirmed' : 'We could not open that link'}
        </h1>
        <p className="mt-3 text-[16px] leading-relaxed text-ink-700">
          {editState === 'locked'
            ? 'Your trip has moved past the point where it can be changed online, because we have started booking it. Message us and we will make the change by hand.'
            : 'The link may be incomplete or it may have been replaced. Message us and we will send a fresh one.'}
        </p>
        <a
          href={whatsappLink('Hello, I would like to change something about my trip.')}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wa mt-7 w-full sm:w-auto"
        >
          Message us
        </a>
      </div>
    );
  }

  return (
    <div className="wrap max-w-2xl pb-24 pt-6">
      {editState === 'editing' && (
        <p className="mb-5 rounded-xl bg-sea-100 p-4 text-[15px] leading-relaxed text-ink-700">
          <strong className="font-semibold">You are changing your existing plan.</strong>{' '}
          Everything is filled in as you left it. Adjust whatever you like and send it again.
        </p>
      )}
      <Progress index={stepIndex} total={steps.length} />

      {step === 'destination' && (
        <Step title="Where would you like to go?">
          <div className="grid gap-3">
            {liveDestinations.map((d) => (
              <Choice
                key={d.slug}
                selected={form.destination === d.slug}
                onClick={() => {
                  set('destination', d.slug);
                  set('cities', []);
                  set('activities', []);
                }}
                title={d.name}
                subtitle={d.tagline}
              />
            ))}
          </div>
          <Note>
            Malaysia, Singapore and Vietnam are not open yet. Message us if you want one of
            those and we will tell you when they are.
          </Note>
        </Step>
      )}

      {step === 'group' && (
        <Step
          title="Who are you travelling with?"
          subtitle="This shapes the pace, the stays and what we suggest."
        >
          <div className="grid gap-3">
            {GROUP_TYPES.map((g) => (
              <Choice
                key={g.id}
                selected={form.groupType === g.id}
                onClick={() => set('groupType', g.id)}
                title={g.label}
                subtitle={g.hint}
              />
            ))}
          </div>
        </Step>
      )}

      {step === 'when' && (
        <Step title="When do you want to travel?">
          <div className="grid grid-cols-2 items-start gap-3">
            <label className="block">
              <span className="text-sm font-semibold">Month</span>
              <select
                className="input mt-2"
                value={form.travelMonth}
                onChange={(e) => set('travelMonth', Number(e.target.value))}
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
                onChange={(e) => set('travelYear', Number(e.target.value))}
              >
                {[0, 1].map((o) => {
                  const y = new Date().getFullYear() + o;
                  return <option key={y} value={y}>{y}</option>;
                })}
              </select>
            </label>
          </div>

          <Toggle
            checked={form.datesFlexible}
            onChange={(v) => set('datesFlexible', v)}
            label="My dates are flexible. Tell me if moving them is cheaper."
          />

          {destination && estimate && (
            <div className="mt-4 rounded-xl bg-sand-100 p-4 text-[15px] leading-relaxed text-ink-700">
              <strong className="font-semibold">
                {MONTH_NAMES[form.travelMonth - 1]} is{' '}
                {estimate.season.label === 'off' ? 'off' : estimate.season.label} season.
              </strong>{' '}
              {estimate.season.note} {destination.bestMonthsSummary}
            </div>
          )}
        </Step>
      )}

      {step === 'length' && (
        <Step title="How long do you want to go for?">
          <div className="rounded-xl border border-sand-300 bg-white p-5 text-center">
            <p className="text-4xl font-semibold tracking-tight">
              {daysFromNights(form.nights)} days
            </p>
            <p className="mt-1 text-[15px] text-ink-500">
              {form.nights} {form.nights === 1 ? 'night' : 'nights'}
            </p>
            <input
              type="range"
              min={MIN_NIGHTS}
              max={MAX_NIGHTS}
              value={form.nights}
              onChange={(e) => set('nights', Number(e.target.value))}
              className="mt-5 w-full accent-[#C4551F]"
              aria-label="Number of nights"
            />
            <div className="flex justify-between text-xs text-ink-500">
              <span>{MIN_NIGHTS + 1} days</span>
              <span>{MAX_NIGHTS + 1} days</span>
            </div>
            <div className="mt-4 flex items-center justify-center gap-3">
              <button
                type="button"
                className="h-11 w-11 rounded-full border border-sand-300 text-xl font-semibold disabled:opacity-30"
                disabled={form.nights <= MIN_NIGHTS}
                onClick={() => set('nights', form.nights - 1)}
                aria-label="One night fewer"
              >
                −
              </button>
              <button
                type="button"
                className="h-11 w-11 rounded-full border border-sand-300 text-xl font-semibold disabled:opacity-30"
                disabled={form.nights >= MAX_NIGHTS}
                onClick={() => set('nights', form.nights + 1)}
                aria-label="One night more"
              >
                +
              </button>
            </div>
          </div>
          <Note>We will tell you if it is too little time for the cities you pick.</Note>
        </Step>
      )}

      {step === 'who' && (
        <Step title="Who is travelling?">
          <Counter label="Adults" hint="12 to 59" value={form.adults} min={0}
            onChange={(v) => set('adults', v)} />
          <Counter label="Children" hint="Under 12" value={form.children} min={0}
            onChange={(v) => set('children', v)} />
          {form.children > 0 && (
            <Field label="Ages of the children" hint="Optional, but it changes what we suggest and what tickets cost.">
              <input
                className="input"
                placeholder="For example 4 and 9"
                value={form.childAges}
                onChange={(e) => set('childAges', e.target.value)}
              />
            </Field>
          )}
          <Counter label="Seniors" hint="60 and over" value={form.seniors} min={0}
            onChange={(v) => set('seniors', v)} />
        </Step>
      )}

      {step === 'origin' && (
        <Step title="Which city will you fly from?" subtitle="Fares vary a lot by city.">
          <Field label="Your city">
            <input
              className="input"
              list="origin-cities"
              placeholder="For example Mumbai"
              value={form.flyingFrom}
              onChange={(e) => set('flyingFrom', e.target.value)}
            />
          </Field>
          <datalist id="origin-cities">
            {['Mumbai', 'Delhi', 'Bengaluru', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune',
              'Ahmedabad', 'Kochi', 'Jaipur', 'Lucknow', 'Chandigarh'].map((c) => (
              <option key={c} value={c} />
            ))}
          </datalist>
          <div className="mt-3 flex flex-wrap gap-2">
            {['Mumbai', 'Delhi', 'Bengaluru', 'Hyderabad', 'Chennai', 'Kolkata'].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => set('flyingFrom', c)}
                className={`min-h-[2.5rem] rounded-full border px-4 text-sm font-semibold transition-colors ${
                  form.flyingFrom === c
                    ? 'border-clay bg-clay text-white'
                    : 'border-sand-300 bg-white text-ink-700 hover:bg-sand-100'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Step>
      )}

      {step === 'cities' && destination && (
        <Step title={`Which parts of ${destination.name}?`}>
          <div className="grid gap-3">
            {destination.cities.map((c) => (
              <CityChoice
                key={c}
                city={c}
                count={destination.activities.filter((a) => a.city === c).length}
                selected={form.cities.includes(c)}
                onClick={() => {
                  const cities = toggle(form.cities, c);
                  set('cities', cities);
                  // Drop activities for a city that is no longer in the trip.
                  set(
                    'activities',
                    form.activities.filter((id) => {
                      const a = destination.activities.find((x) => x.id === id);
                      return a ? cities.includes(a.city) : false;
                    }),
                  );
                }}
              />
            ))}
          </div>

        </Step>
      )}

      {step === 'stay' && (
        <Step title="Where do you want to stay?">
          <div className="grid gap-3">
            {STAY_TYPES.map((s) => (
              <Choice
                key={s.id}
                selected={form.stayType === s.id}
                onClick={() => set('stayType', s.id)}
                title={s.label}
                subtitle={s.hint}
              />
            ))}
          </div>
          <div className="mt-6">
            <p className="text-sm font-semibold">
              Roughly what are you happy to spend per room per night?
            </p>
            <div className="mt-3 grid gap-3">
              {NIGHTLY_BUDGETS.map((b) => (
                <Choice
                  key={b}
                  selected={form.nightlyBudget === b}
                  onClick={() => set('nightlyBudget', b)}
                  title={b.startsWith('Not sure') ? b : `₹${b}`}
                />
              ))}
            </div>
          </div>
          {destination && <Note>{destination.costSamplesNote}</Note>}
        </Step>
      )}

      {step === 'style' && (
        <Step title="What kind of trip is this?" subtitle="Pick as many as apply.">
          <div className="grid gap-3 sm:grid-cols-2">
            {TRIP_STYLES.map((s) => (
              <Choice
                key={s.id}
                selected={form.styles.includes(s.id)}
                multi
                onClick={() => set('styles', toggle(form.styles, s.id))}
                title={s.label}
                subtitle={s.hint}
              />
            ))}
          </div>
        </Step>
      )}

      {isActivityStep && destination && (
        <ActivityStep
          destination={destination}
          city={activityCity}
          all={destination.activities.filter((a) => a.city === activityCity)}
          selected={form.activities}
          styles={form.styles}
          party={party}
          needsHelp={form.helpCities.includes(activityCity)}
          onlyRecommended={onlyRecommended}
          setOnlyRecommended={setOnlyRecommended}
          onToggle={(id) => set('activities', toggle(form.activities, id))}
          onAskForHelp={() => {
            const ids = new Set(
              destination.activities.filter((a) => a.city === activityCity).map((a) => a.id),
            );
            set('activities', form.activities.filter((id) => !ids.has(id)));
            set('helpCities', Array.from(new Set([...form.helpCities, activityCity])));
          }}
          onCancelHelp={() =>
            set('helpCities', form.helpCities.filter((c) => c !== activityCity))
          }
        />
      )}

      {step === 'budget' && (
        <Step
          title="What budget are you working with?"
          subtitle="Per person, including flights."
        >
          <div className="grid gap-3">
            {TOTAL_BUDGETS.map((b) => (
              <Choice
                key={b}
                selected={form.budgetBand === b}
                onClick={() => set('budgetBand', b)}
                title={b.startsWith('Not sure') ? b : `₹${b}`}
              />
            ))}
          </div>
          {destination && (
            <Note>
              Return flights alone are usually{' '}
              {formatInrRange(
                destination.pricing.indicativeFlight.low,
                destination.pricing.indicativeFlight.high,
              )}{' '}
              per person.
            </Note>
          )}
        </Step>
      )}

      {step === 'review' && destination && (
        <Step title="Here is your trip">
          <div className="card p-5">
            <p className="text-lg font-semibold">
              {destination.name}, {daysFromNights(form.nights)} days
            </p>
            <p className="mt-1 text-[15px] text-ink-700">
              {MONTH_NAMES[form.travelMonth - 1]} {form.travelYear}
              {form.datesFlexible ? ', flexible' : ''} · {describeParty(form)} ·{' '}
              {stayById(form.stayType).label}
            </p>

            <div className="mt-5 space-y-4 border-t border-sand-200 pt-5">
              {form.cities.map((city) => {
                const picked = form.activities
                  .map((id) => destination.activities.find((a) => a.id === id))
                  .filter((a): a is Activity => Boolean(a) && a!.city === city);
                return (
                  <div key={city}>
                    <p className="font-semibold">{city}</p>
                    {form.helpCities.includes(city) ? (
                      <p className="mt-1 text-[15px] text-sea">You asked us to plan this one.</p>
                    ) : picked.length > 0 ? (
                      <ul className="mt-2 space-y-1.5">
                        {picked.map((a) => (
                          <li key={a.id} className="flex gap-2 text-[15px] text-ink-700">
                            <Tick />
                            <span>{a.name}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-1 text-[15px] text-ink-500">Nothing picked yet.</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {SHOW_ESTIMATE && estimate ? (
            <div className="card mt-4 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                Estimated total for {estimate.travellers}{' '}
                {estimate.travellers === 1 ? 'traveller' : 'travellers'}
              </p>
              <p className="mt-1 text-[2rem] font-semibold leading-tight tracking-tight">
                {formatInrRange(estimate.total.low, estimate.total.high)}
              </p>
              <p className="mt-1 text-[15px] text-ink-700">
                About {formatInrRange(estimate.perPerson.low, estimate.perPerson.high)} per
                person, including flights.
              </p>
              {estimate.unpricedActivities > 0 && (
                <p className="mt-3 text-[15px] text-ink-700">
                  {estimate.unpricedActivities}{' '}
                  {estimate.unpricedActivities === 1 ? 'activity is' : 'activities are'} priced
                  separately and not included above.
                </p>
              )}
              <p className="mt-4 text-sm leading-relaxed text-ink-500">
                An estimate, not a quote. It moves with your dates and with what flights cost
                on the day we ticket.
              </p>
            </div>
          ) : (
            <p className="mt-4 text-[15px] leading-relaxed text-ink-700">
              We will price this on your dates and come back with a full quote.
            </p>
          )}
        </Step>
      )}

      {step === 'contact' && (
        <Step title="Where should we send the quote?">
          <Field label="Name">
            <input className="input" value={form.name} autoComplete="name"
              onChange={(e) => set('name', e.target.value)} />
          </Field>
          <Field label="WhatsApp number" hint="This is the one that matters.">
            <input className="input" type="tel" inputMode="numeric" autoComplete="tel"
              placeholder="9876543210" value={form.phone}
              onChange={(e) => set('phone', e.target.value)} />
          </Field>
          <Field label="Email" hint="We send you a copy of everything here.">
            <input className="input" type="email" autoComplete="email" value={form.email}
              onChange={(e) => set('email', e.target.value)} />
          </Field>
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

          <Field label="Anything else we should know" hint="Optional.">
            <textarea className="input min-h-24 py-3" rows={3}
              placeholder="Occasion, dietary needs, mobility, hotel preferences, anything at all."
              value={form.notes} onChange={(e) => set('notes', e.target.value)} />
          </Field>
        </Step>
      )}

      {error && <p className="mt-5 text-sm font-medium text-clay">{error}</p>}

      <div className="mt-8 flex gap-3">
        {stepIndex > 0 && (
          <button type="button" className="btn-ghost flex-1" onClick={back}>
            Back
          </button>
        )}
        {step === 'contact' ? (
          <button type="button" className="btn-primary flex-1 disabled:opacity-40"
            disabled={submitting} onClick={submit}>
            {submitting ? 'Sending' : 'Send my requirements'}
          </button>
        ) : (
          <button type="button" className="btn-primary flex-1" onClick={next}>
            Continue
          </button>
        )}
      </div>
      {step === 'contact' && (
        <p className="mt-3 text-center text-sm text-ink-500">{site.quotePromise}</p>
      )}
    </div>
  );
}

/* ---------------- activity step ---------------- */

function ActivityStep({
  destination, city, all, selected, styles, party, needsHelp,
  onlyRecommended, setOnlyRecommended, onToggle, onAskForHelp, onCancelHelp,
}: {
  destination: Destination;
  city: string;
  all: Activity[];
  selected: string[];
  styles: TripStyle[];
  party: Party;
  needsHelp: boolean;
  onlyRecommended: boolean;
  setOnlyRecommended: (v: boolean) => void;
  onToggle: (id: string) => void;
  onAskForHelp: () => void;
  onCancelHelp: () => void;
}) {
  const ranked = sortForParty(all, styles, party);
  const forYou = ranked.filter(
    (a) => matchesStyles(a, styles) || (party.groupType && a.suits.includes(party.groupType)),
  );
  const showing = onlyRecommended && forYou.length >= 3 ? forYou : ranked;
  const chosenHere = all.filter((a) => selected.includes(a.id)).length;

  return (
    <div>
      <h1 className="text-[1.6rem] leading-tight sm:text-3xl">Things to do in {city}</h1>
      <p className="mt-2 text-[15px] leading-relaxed text-ink-700">
        Pick whatever appeals. Nothing is compulsory.
      </p>

      {/* The "no idea" path, offered before the list rather than under it. */}
      {needsHelp ? (
        <div className="mt-5 rounded-xl2 border border-sea bg-sea-100 p-5">
          <p className="font-semibold text-sea">We will plan {city}.</p>
          <p className="mt-1.5 text-[15px] leading-relaxed text-ink-700">
            Noted. We will put something together for {describeGroup(party)} and talk you
            through it.
          </p>
          <button
            type="button"
            onClick={onCancelHelp}
            className="btn-ghost mt-4 h-11 min-h-0 px-4 text-sm"
          >
            Let me pick instead
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={onAskForHelp}
          className="mt-5 flex w-full items-center justify-between gap-4 rounded-xl2 border border-sand-300 bg-white p-4 text-left transition-colors hover:border-sea hover:bg-sea-100"
        >
          <span>
            <span className="block font-semibold">Not sure? We will plan {city}.</span>
            <span className="mt-0.5 block text-[14px] leading-snug text-ink-700">
              Skip this page and we will build it for {describeGroup(party)}.
            </span>
          </span>
          <span
            aria-hidden
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-sand-300 text-lg leading-none text-ink-500"
          >
            ›
          </span>
        </button>
      )}

      {!needsHelp && (
        <>
          <div className="sticky top-16 z-20 -mx-5 mt-5 border-b border-sand-200 bg-sand-50/95 px-5 py-3 backdrop-blur">
            <div className="flex items-center justify-between gap-3">
              <div className="inline-flex rounded-full border border-sand-300 bg-white p-1">
                <button
                  type="button"
                  onClick={() => setOnlyRecommended(true)}
                  className={`min-h-[2.25rem] rounded-full px-4 text-sm font-semibold ${
                    onlyRecommended ? 'bg-ink text-white' : 'text-ink-700'
                  }`}
                >
                  For you
                </button>
                <button
                  type="button"
                  onClick={() => setOnlyRecommended(false)}
                  className={`min-h-[2.25rem] rounded-full px-4 text-sm font-semibold ${
                    !onlyRecommended ? 'bg-ink text-white' : 'text-ink-700'
                  }`}
                >
                  All {all.length}
                </button>
              </div>
              <span className="shrink-0 text-sm font-semibold text-ink-500">
                {chosenHere} chosen
              </span>
            </div>
          </div>

          <div className="mt-4 grid gap-3">
            {showing.map((a) => (
              <ActivityCard
                key={a.id}
                activity={a}
                destination={destination}
                selected={selected.includes(a.id)}
                styles={styles}
                groupType={party.groupType}
                onToggle={() => onToggle(a.id)}
              />
            ))}
          </div>

          {onlyRecommended && forYou.length >= 3 && (
            <button
              type="button"
              onClick={() => setOnlyRecommended(false)}
              className="mt-4 w-full text-sm font-semibold text-sea underline underline-offset-4"
            >
              Show all {all.length} things to do in {city}
            </button>
          )}
        </>
      )}
    </div>
  );
}

function describeGroup(party: Party) {
  switch (party.groupType) {
    case 'couple': return 'a couple';
    case 'family': return 'a family with children';
    case 'friends': return 'a group of friends';
    case 'seniors': return 'a group including older travellers';
    case 'solo': return 'a solo traveller';
    default: return 'your group';
  }
}

/* ---------------- shared pieces ---------------- */

/** A city with its photograph, so the choice is not made off a word alone. */
function CityChoice({
  city, count, selected, onClick,
}: {
  city: string;
  count: number;
  selected: boolean;
  onClick: () => void;
}) {
  const image = cityImage(city);
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`flex w-full items-stretch overflow-hidden rounded-xl border text-left transition-colors ${
        selected ? 'border-clay bg-clay-100 ring-1 ring-clay' : 'border-sand-300 bg-white hover:bg-sand-100'
      }`}
    >
      <span aria-hidden className="w-24 shrink-0 bg-sand-200 sm:w-32">
        {image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={asset(image)} alt="" loading="lazy" className="h-full w-full object-cover" />
        )}
      </span>
      <span className="flex flex-1 items-start gap-3 p-4">
        <span
          aria-hidden
          className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded border-2 text-xs font-bold ${
            selected ? 'border-clay bg-clay text-white' : 'border-sand-300 bg-white text-transparent'
          }`}
        >
          ✓
        </span>
        <span>
          <span className="block font-semibold">{city}</span>
          <span className="mt-0.5 block text-[14px] text-ink-700">{count} things to do</span>
        </span>
      </span>
    </button>
  );
}

function describeParty(f: FormState) {
  const bits: string[] = [];
  if (f.adults) bits.push(`${f.adults} ${f.adults === 1 ? 'adult' : 'adults'}`);
  if (f.children) bits.push(`${f.children} ${f.children === 1 ? 'child' : 'children'}`);
  if (f.seniors) bits.push(`${f.seniors} ${f.seniors === 1 ? 'senior' : 'seniors'}`);
  return bits.join(', ') || '1 adult';
}

function Done({
  result, name, destinationName, brochure, summaryLines,
}: {
  result: SubmitResult;
  name: string;
  destinationName: string;
  brochure: string;
  summaryLines: string[];
}) {
  const token = result.status === 'sent' ? result.token : undefined;
  const editToken = result.status === 'sent' ? result.editToken : undefined;
  const origin = typeof window === 'undefined' ? site.url : window.location.origin;
  const trackerUrl = token ? `${origin}/trip/?t=${token}` : '';
  const editUrl = editToken ? `${origin}/plan/?e=${editToken}` : '';

  /**
   * Apps Script cannot send WhatsApp messages, and the Cloud API would take
   * the business number out of the normal WhatsApp app. So the customer sends
   * it themselves in one tap: the message lands with us, and the copy plus
   * both links stay in their own chat history, which is the point.
   */
  const waMessage = [
    name ? `Hello, this is ${name}. I just sent an enquiry from your website.` : 'Hello, I just sent an enquiry from your website.',
    '',
    ...summaryLines,
    '',
    trackerUrl ? `Track it: ${trackerUrl}` : null,
    editUrl ? `Change it: ${editUrl}` : null,
  ]
    // Keep the intentional blank separators; only drop the lines that are off.
    .filter((line) => line !== null)
    .join('\n');

  return (
    <div className="wrap max-w-2xl py-14">
      <p className="eyebrow">Received</p>
      <h1 className="mt-3 text-[1.9rem] leading-tight sm:text-4xl">
        Thank you{name ? `, ${name.split(' ')[0]}` : ''}.
      </h1>
      <p className="mt-4 text-[17px] leading-relaxed text-ink-700">
        Your {destinationName} plan is with us. {site.quotePromise}
      </p>

      <div className="card mt-7 p-5">
        <h2 className="text-lg">Send it to yourself on WhatsApp</h2>
        <p className="mt-1.5 text-[15px] leading-relaxed text-ink-700">
          One tap. It stays in your chat, and you can add anything you forgot.
        </p>
        <a
          href={whatsappLink(waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wa mt-4 w-full"
        >
          <WhatsAppGlyph />
          Send on WhatsApp
        </a>
      </div>

      {(trackerUrl || editUrl) && (
        <ul className="mt-6 space-y-3">
          {trackerUrl && (
            <li>
              <a href={trackerUrl} className="font-semibold text-sea underline underline-offset-4">
                Track your booking
              </a>
            </li>
          )}
          {editUrl && (
            <li>
              <a href={editUrl} className="font-semibold text-sea underline underline-offset-4">
                Change your plan
              </a>
            </li>
          )}
        </ul>
      )}

      {brochure && (
        <a href={asset(brochure)} download className="btn-ghost mt-6 w-full sm:w-auto">
          Download the {destinationName} guide
        </a>
      )}

      {result.status !== 'sent' && process.env.NODE_ENV === 'development' && (
        <p className="mt-6 text-sm text-ink-300">
          {result.status === 'not-configured'
            ? 'Development note: NEXT_PUBLIC_APPS_SCRIPT_URL is not set.'
            : `Development note: delivery failed (${result.message}).`}
        </p>
      )}
    </div>
  );
}

function Progress({ index, total }: { index: number; total: number }) {
  const pct = Math.round(((index + 1) / total) * 100);
  return (
    <div className="mb-7">
      <div className="flex items-center justify-between text-sm text-ink-500">
        <span>Step {index + 1} of {total}</span>
        <span>{pct} percent</span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-sand-200">
        <div className="h-full rounded-full bg-clay transition-all duration-300"
          style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function Step({
  title, subtitle, children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="text-[1.6rem] leading-tight sm:text-3xl">{title}</h1>
      {subtitle && (
        <p className="mt-2 text-[15px] leading-relaxed text-ink-700">{subtitle}</p>
      )}
      <div className="mt-6">{children}</div>
    </div>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 text-sm leading-relaxed text-ink-500">{children}</p>
  );
}

function Field({
  label, hint, children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="mt-4 block first:mt-0">
      <span className="text-sm font-semibold">{label}</span>
      {hint && <span className="mt-0.5 block text-sm text-ink-500">{hint}</span>}
      <div className="mt-2">{children}</div>
    </label>
  );
}

function Toggle({
  checked, onChange, label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <label className="mt-4 flex items-start gap-3 rounded-xl border border-sand-300 bg-white p-4">
      <input type="checkbox" className="mt-1 h-5 w-5 accent-[#C4551F]"
        checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <span className="text-[15px] leading-relaxed text-ink-700">{label}</span>
    </label>
  );
}

function Choice({
  selected, onClick, title, subtitle, multi,
}: {
  selected: boolean;
  onClick: () => void;
  title: string;
  subtitle?: string;
  multi?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`flex w-full items-start gap-3 rounded-xl border p-4 text-left transition-colors ${
        selected
          ? 'border-clay bg-clay-100 ring-1 ring-clay'
          : 'border-sand-300 bg-white hover:bg-sand-100'
      }`}
    >
      <span
        aria-hidden
        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center border-2 text-xs font-bold ${
          multi ? 'rounded' : 'rounded-full'
        } ${selected ? 'border-clay bg-clay text-white' : 'border-sand-300 bg-white text-transparent'}`}
      >
        ✓
      </span>
      <span className="flex-1">
        <span className="block font-semibold">{title}</span>
        {subtitle && (
          <span className="mt-0.5 block text-[14px] leading-snug text-ink-700">{subtitle}</span>
        )}
      </span>
    </button>
  );
}

function Counter({
  label, hint, value, min, onChange,
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
        <button type="button" aria-label={`Fewer ${label.toLowerCase()}`}
          className="h-11 w-11 rounded-full border border-sand-300 text-xl font-semibold disabled:opacity-30"
          disabled={value <= min} onClick={() => onChange(value - 1)}>
          −
        </button>
        <span className="w-6 text-center text-lg font-semibold tabular-nums">{value}</span>
        <button type="button" aria-label={`More ${label.toLowerCase()}`}
          className="h-11 w-11 rounded-full border border-sand-300 text-xl font-semibold disabled:opacity-30"
          disabled={value >= 12} onClick={() => onChange(value + 1)}>
          +
        </button>
      </div>
    </div>
  );
}

function Tag({ children, tone }: { children: React.ReactNode; tone?: 'sea' }) {
  return (
    <span
      className={`rounded-full px-2.5 py-1 text-xs font-medium ${
        tone === 'sea' ? 'bg-sea-100 text-sea' : 'bg-sand-100 text-ink-500'
      }`}
    >
      {children}
    </span>
  );
}

function RowLine({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <dt className="text-ink-700">{label}</dt>
      <dd className="shrink-0 font-semibold">{children}</dd>
    </div>
  );
}

function Tick() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden className="mt-1 h-4 w-4 shrink-0 text-sea" fill="currentColor">
      <path d="M8.1 13.3 5.3 10.5l-1.2 1.2 4 4 8-8-1.2-1.2z" />
    </svg>
  );
}
