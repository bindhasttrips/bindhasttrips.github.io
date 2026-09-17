'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  fetchAdmin, updateBooking, urgency, num, daysAgo,
  STATUSES, PAYMENT_STATUSES, STAGE_FIELDS, STAGE_STATES,
  type AdminData, type Booking, type Stage, type Patch,
} from '@/lib/admin';
import { formatInr } from '@/lib/format';

const KEY_STORAGE = 'bindhast-admin-key';

const STATUS_TONE: Record<string, string> = {
  new: 'bg-clay text-white',
  contacted: 'bg-clay-100 text-clay',
  quoted: 'bg-amber-100 text-amber-900',
  'deposit sent': 'bg-amber-100 text-amber-900',
  booked: 'bg-sea text-white',
  travelling: 'bg-sea-100 text-sea',
  completed: 'bg-sand-200 text-ink-500',
  lost: 'bg-sand-100 text-ink-300',
};

export default function Dashboard() {
  const [key, setKey] = useState('');
  const [entered, setEntered] = useState('');
  const [data, setData] = useState<AdminData | null>(null);
  const [state, setState] = useState<'idle' | 'loading' | 'error'>('idle');
  const [problem, setProblem] = useState('');
  const [tab, setTab] = useState<'bookings' | 'custom'>('bookings');
  const [filter, setFilter] = useState('all');
  const [query, setQuery] = useState('');

  const load = useCallback(async (k: string) => {
    setState('loading');
    setProblem('');
    const res = await fetchAdmin(k);
    if (!res.ok) {
      setState('error');
      setProblem(
        res.error === 'rejected'
          ? 'That key was not accepted. Check it against ADMIN_KEY at the top of Code.gs.'
          : res.error === 'timeout'
            ? 'The script did not answer in time. It is usually busy rather than broken, so try again in a moment.'
            : res.error === 'not-configured'
              ? 'The site has no script URL configured.'
              : 'Could not reach the script. Check the deployment is still live.',
      );
      setData(null);
      return;
    }
    setData(res);
    setState('idle');
    try {
      window.localStorage.setItem(KEY_STORAGE, k);
    } catch {
      // Private window. The key just will not be remembered.
    }
  }, []);

  useEffect(() => {
    let saved = '';
    try {
      saved = window.localStorage.getItem(KEY_STORAGE) ?? '';
    } catch {
      saved = '';
    }
    if (saved) {
      setKey(saved);
      load(saved);
    }
  }, [load]);

  const bookings = useMemo(() => {
    if (!data) return [];
    const q = query.trim().toLowerCase();
    return [...data.bookings]
      .filter((b) => (filter === 'all' ? true : String(b.status).toLowerCase() === filter))
      .filter((b) =>
        !q ||
        [b.name, b.phone, b.email, b.destination, b.cities, b.travelMonth]
          .join(' ')
          .toLowerCase()
          .includes(q),
      )
      .sort((a, b) => urgency(a) - urgency(b) || (b.timestamp > a.timestamp ? 1 : -1));
  }, [data, filter, query]);

  const totals = useMemo(() => {
    const all = data?.bookings ?? [];
    const by = (s: string) => all.filter((b) => String(b.status).toLowerCase() === s).length;
    const outstanding = all.reduce((sum, b) => {
      const owed = num(b.quotedTotal) - num(b.amountPaid);
      return sum + (owed > 0 && !['lost', 'completed'].includes(String(b.status).toLowerCase()) ? owed : 0);
    }, 0);
    const booked = all
      .filter((b) => ['booked', 'travelling', 'completed'].includes(String(b.status).toLowerCase()))
      .reduce((sum, b) => sum + num(b.quotedTotal), 0);
    return { newCount: by('new'), quoted: by('quoted') + by('deposit sent'), outstanding, booked };
  }, [data]);

  if (!data) {
    return (
      <div className="wrap max-w-md py-20">
        <h1 className="text-2xl">Dashboard</h1>
        <p className="mt-2 text-[15px] leading-relaxed text-ink-700">
          Enter your dashboard key. It is stored in this browser only.
        </p>
        <input
          className="input mt-5"
          type="password"
          placeholder="Dashboard key"
          value={entered}
          onChange={(e) => setEntered(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && load(entered)}
        />
        {state === 'error' && (
          <p className="mt-3 text-sm font-medium text-clay">{problem}</p>
        )}
        {state === 'loading' && (
          <p className="mt-3 text-sm text-ink-500">
            Reading the sheet. The first load can take twenty seconds or so, because Google
            wakes the script up before it answers.
          </p>
        )}
        <button
          type="button"
          className="btn-primary mt-4 w-full disabled:opacity-40"
          disabled={state === 'loading' || !entered.trim()}
          onClick={() => load(entered)}
        >
          {state === 'loading' ? 'Checking' : 'Open dashboard'}
        </button>
      </div>
    );
  }

  return (
    <div className="wrap max-w-6xl py-8">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl">Bookings</h1>
          <p className="mt-1 text-sm text-ink-500">
            Synced {new Date(data.fetchedAt).toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit' })}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => load(key)}
            className="btn-ghost h-10 min-h-0 px-4 text-sm"
          >
            {state === 'loading' ? 'Refreshing' : 'Refresh'}
          </button>
          <a
            href={data.sheetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost h-10 min-h-0 px-4 text-sm"
          >
            Open sheet
          </a>
        </div>
      </header>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Tile label="New enquiries" value={String(totals.newCount)} tone={totals.newCount > 0 ? 'urgent' : 'calm'} />
        <Tile label="Quoted, awaiting payment" value={String(totals.quoted)} />
        <Tile label="Money outstanding" value={formatInr(totals.outstanding)} />
        <Tile label="Booked value" value={formatInr(totals.booked)} />
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <div className="inline-flex rounded-full border border-sand-300 bg-white p-1">
          <TabButton active={tab === 'bookings'} onClick={() => setTab('bookings')}>
            Bookings {data.bookings.length}
          </TabButton>
          <TabButton active={tab === 'custom'} onClick={() => setTab('custom')}>
            Custom {data.custom.length}
          </TabButton>
        </div>
        {tab === 'bookings' && (
          <>
            <input
              className="input h-10 min-h-0 max-w-xs flex-1"
              placeholder="Search name, phone, city"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <select
              className="input h-10 min-h-0 w-auto"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All statuses</option>
              {['new', 'contacted', 'quoted', 'deposit sent', 'booked', 'travelling', 'completed', 'lost'].map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </>
        )}
      </div>

      {tab === 'bookings' ? (
        <div className="mt-5 space-y-4">
          {bookings.length === 0 && (
            <p className="rounded-xl2 border border-dashed border-sand-300 p-8 text-center text-ink-500">
              Nothing matches.
            </p>
          )}
          {bookings.map((b) => (
            <BookingCard key={b.row} booking={b} adminKey={key} />
          ))}
        </div>
      ) : (
        <div className="mt-5 space-y-4">
          {data.custom.length === 0 && (
            <p className="rounded-xl2 border border-dashed border-sand-300 p-8 text-center text-ink-500">
              No custom requests yet.
            </p>
          )}
          {data.custom.map((c) => (
            <div key={c.row} className="card p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h2 className="text-lg">{c.name}</h2>
                <span className="rounded-full bg-sand-100 px-3 py-1 text-xs font-semibold text-ink-700">
                  {c.type}
                </span>
              </div>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-700">{c.requirement}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.phone && <Action href={`https://wa.me/${c.phone.replace(/\D/g, '')}`}>WhatsApp</Action>}
                {c.phone && <Action href={`tel:${c.phone}`}>Call</Action>}
                {c.email && <Action href={`mailto:${c.email}`}>Email</Action>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function BookingCard({ booking: b, adminKey }: { booking: Booking; adminKey: string }) {
  const [open, setOpen] = useState(false);
  const [saving, setSaving] = useState('');
  const [saved, setSaved] = useState(false);
  const [failed, setFailed] = useState('');

  /**
   * Values applied locally the instant you change something. Without this a
   * controlled select snaps back to the server value while the write is still
   * in flight, which looks exactly like a failure.
   */
  const [local, setLocal] = useState<Record<string, string | number | boolean>>({});

  const val = (name: string): string | number | boolean => {
    if (name in local) return local[name];
    const v = (b as unknown as Record<string, unknown>)[name];
    return (v ?? '') as string | number | boolean;
  };

  const stageVal = (field: string, i: number): string =>
    field in local ? String(local[field]) : (b.stages[i]?.state ?? 'pending');

  const save = async (patch: Patch, label: string) => {
    const before: Record<string, string | number | boolean> = {};
    Object.keys(patch).forEach((k) => { before[k] = val(k); });
    setLocal((l) => ({ ...l, ...patch }));
    setSaving(label);
    setFailed('');
    setSaved(false);

    const res = await updateBooking(adminKey, b.row, patch);
    setSaving('');
    if (!res.ok) {
      // Put it back. Leaving a value on screen that is not in the sheet is worse.
      setLocal((l) => ({ ...l, ...before }));
      setFailed('Not saved');
      return;
    }
    setSaved(true);
  };

  const owed = num(val('quotedTotal') as number | string) - num(val('amountPaid') as number | string);
  const age = daysAgo(b.timestamp);
  const tone = STATUS_TONE[String(val('status')).toLowerCase()] ?? 'bg-sand-100 text-ink-700';
  const origin = typeof window === 'undefined' ? '' : window.location.origin;
  const wa = b.phone ? `https://wa.me/${String(b.phone).replace(/\D/g, '')}` : '';

  return (
    <article className="card overflow-hidden">
      <div className="p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-lg font-semibold">{b.name || 'No name'}</h2>
              <select
                value={String(val('status'))}
                onChange={(e) => save({ status: e.target.value }, 'status')}
                aria-label="Status"
                className={`cursor-pointer rounded-full border-0 px-2.5 py-1 text-xs font-semibold ${tone}`}
              >
                {STATUSES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              {saving && <span className="text-xs text-ink-500">saving…</span>}
              {!saving && saved && !failed && (
                <span className="text-xs font-semibold text-sea">saved</span>
              )}
              {failed && <span className="text-xs font-semibold text-clay">{failed}</span>}
              {b.helpCities && (
                <span className="rounded-full bg-sea-100 px-2.5 py-1 text-xs font-semibold text-sea">
                  wants help planning
                </span>
              )}
            </div>
            <p className="mt-1.5 text-[15px] text-ink-700">
              {[b.destination, b.cities, b.travelMonth, b.days ? `${b.days} days` : '']
                .filter(Boolean)
                .join(' · ')}
            </p>
            <p className="mt-0.5 text-sm text-ink-500">
              {[
                b.travellers ? `${b.travellers} travelling` : '',
                b.groupType,
                b.flyingFrom ? `from ${b.flyingFrom}` : '',
                age !== null ? (age === 0 ? 'today' : `${age}d ago`) : '',
              ]
                .filter(Boolean)
                .join(' · ')}
            </p>
          </div>

          <div className="text-right">
            {num(val('quotedTotal') as number | string) > 0 ? (
              <>
                <p className="text-lg font-semibold">
                  {formatInr(num(val('quotedTotal') as number | string))}
                </p>
                <p className={`text-sm ${owed > 0 ? 'text-clay' : 'text-sea'}`}>
                  {owed > 0 ? `${formatInr(owed)} due` : 'paid in full'}
                </p>
              </>
            ) : (
              <p className="text-sm text-ink-300">not quoted</p>
            )}
          </div>
        </div>

        <StageBar stages={b.stages} />

        <div className="mt-4 flex flex-wrap gap-2">
          {wa && <Action href={wa}>WhatsApp</Action>}
          {b.phone && <Action href={`tel:${b.phone}`}>Call</Action>}
          {b.token && <Action href={`${origin}/trip/?t=${b.token}`}>Tracker</Action>}
          {b.paymentLink && <Action href={String(b.paymentLink)}>Payment link</Action>}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-sand-300 bg-white px-3 py-1.5 text-sm font-medium text-ink-700 hover:bg-sand-100"
          >
            {open ? 'Less' : 'Full details'}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-sand-200 bg-sand-50 p-5">
          <dl className="grid gap-x-8 gap-y-3 text-[15px] sm:grid-cols-2">
            <Detail label="Phone">{b.phone}</Detail>
            <Detail label="Email">{b.email}</Detail>
            <Detail label="Party">
              {`${b.adults} adults, ${b.children} children, ${b.seniors} seniors`}
            </Detail>
            <Detail label="Dates">{`${b.travelMonth} (${b.datesFlexible})`}</Detail>
            <Detail label="Stay">{b.stayType}</Detail>
            <Detail label="Budget">{b.budget}</Detail>
            <Detail label="Style">{b.styles}</Detail>
            <Detail label="Flying from">{b.flyingFrom}</Detail>
            <div className="sm:col-span-2">
              <Detail label={`Activities (${b.activityCount})`}>{b.activities}</Detail>
            </div>
            <div className="sm:col-span-2">
              <Detail label="Itinerary">{b.itinerary}</Detail>
            </div>
            {b.notes && (
              <div className="sm:col-span-2">
                <Detail label="Their notes">{b.notes}</Detail>
              </div>
            )}
          </dl>

          <div className="mt-6 border-t border-sand-200 pt-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
              Booking stages
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              {STAGE_FIELDS.map(([fieldName, label], i) => (
                <label key={fieldName} className="block">
                  <span className="text-sm text-ink-700">{label}</span>
                  <select
                    className="input mt-1 h-10 min-h-0 text-sm"
                    value={stageVal(fieldName, i)}
                    onChange={(e) => save({ [fieldName]: e.target.value }, label.toLowerCase())}
                  >
                    {STAGE_STATES.map((st) => (
                      <option key={st} value={st}>{st.replace('_', ' ')}</option>
                    ))}
                  </select>
                </label>
              ))}
            </div>
          </div>

          <div className="mt-6 border-t border-sand-200 pt-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">Money</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              <label className="block">
                <span className="text-sm text-ink-700">Quoted total</span>
                <input
                  className="input mt-1 h-10 min-h-0 text-sm"
                  inputMode="numeric"
                  value={String(val('quotedTotal'))}
                  onChange={(e) => setLocal((l) => ({ ...l, quotedTotal: e.target.value }))}
                  onBlur={(e) => e.target.value !== String(b.quotedTotal ?? '')
                    && save({ quotedTotal: e.target.value }, 'quote')}
                />
              </label>
              <label className="block">
                <span className="text-sm text-ink-700">Amount paid</span>
                <input
                  className="input mt-1 h-10 min-h-0 text-sm"
                  inputMode="numeric"
                  value={String(val('amountPaid'))}
                  onChange={(e) => setLocal((l) => ({ ...l, amountPaid: e.target.value }))}
                  onBlur={(e) => e.target.value !== String(b.amountPaid ?? '')
                    && save({ amountPaid: e.target.value }, 'payment')}
                />
              </label>
              <label className="block">
                <span className="text-sm text-ink-700">Payment status</span>
                <select
                  className="input mt-1 h-10 min-h-0 text-sm"
                  value={String(val('paymentStatus') || 'not started')}
                  onChange={(e) => save({ paymentStatus: e.target.value }, 'payment status')}
                >
                  {PAYMENT_STATUSES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </label>
            </div>
            <label className="mt-3 block">
              <span className="text-sm text-ink-700">Payment link</span>
              <input
                className="input mt-1 h-10 min-h-0 text-sm"
                placeholder="Paste the Razorpay link"
                value={String(val('paymentLink'))}
                onChange={(e) => setLocal((l) => ({ ...l, paymentLink: e.target.value }))}
                onBlur={(e) => e.target.value !== String(b.paymentLink ?? '')
                  && save({ paymentLink: e.target.value }, 'link')}
              />
            </label>
          </div>

          <div className="mt-6 border-t border-sand-200 pt-5">
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                Your notes
              </span>
              <textarea
                className="input mt-2 min-h-20 py-2 text-sm"
                rows={2}
                value={String(val('ownerNotes'))}
                onChange={(e) => setLocal((l) => ({ ...l, ownerNotes: e.target.value }))}
                onBlur={(e) => e.target.value !== String(b.ownerNotes ?? '')
                  && save({ ownerNotes: e.target.value }, 'notes')}
              />
            </label>

            <label className="mt-4 flex items-center gap-3">
              <input
                type="checkbox"
                className="h-5 w-5 accent-[#C4551F]"
                checked={Boolean(val('allowEdit'))}
                onChange={(e) => save({ allowEdit: e.target.checked }, 'lock')}
              />
              <span className="text-sm text-ink-700">
                Customer can still change their plan
              </span>
            </label>
          </div>
        </div>
      )}
    </article>
  );
}

function StageBar({ stages }: { stages: Stage[] }) {
  if (!stages?.length) return null;
  const done = stages.filter((s) => s.state === 'done').length;
  return (
    <div className="mt-4">
      <div className="flex gap-1">
        {stages.map((s) => (
          <div
            key={s.label}
            title={`${s.label}: ${s.state.replace('_', ' ')}`}
            className={`h-1.5 flex-1 rounded-full ${
              s.state === 'done'
                ? 'bg-sea'
                : s.state === 'in_progress'
                  ? 'bg-clay'
                  : s.state === 'blocked'
                    ? 'bg-red-400'
                    : 'bg-sand-200'
            }`}
          />
        ))}
      </div>
      <p className="mt-1.5 text-xs text-ink-500">
        {done} of {stages.length} done
        {stages.find((s) => s.state === 'in_progress')
          ? ` · now: ${stages.find((s) => s.state === 'in_progress')!.label.toLowerCase()}`
          : ''}
        {stages.find((s) => s.state === 'blocked') ? ' · something is blocked' : ''}
      </p>
    </div>
  );
}

function Tile({ label, value, tone }: { label: string; value: string; tone?: 'urgent' | 'calm' }) {
  return (
    <div
      className={`rounded-xl2 border p-4 ${
        tone === 'urgent' ? 'border-clay bg-clay-100' : 'border-sand-200 bg-white'
      }`}
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">{label}</p>
      <p className="mt-1.5 text-2xl font-semibold tracking-tight">{value}</p>
    </div>
  );
}

function TabButton({
  active, onClick, children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`min-h-[2.25rem] rounded-full px-4 text-sm font-semibold ${
        active ? 'bg-ink text-white' : 'text-ink-700'
      }`}
    >
      {children}
    </button>
  );
}

function Action({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full border border-sand-300 bg-white px-3 py-1.5 text-sm font-medium text-ink-700 hover:bg-sand-100"
    >
      {children}
    </a>
  );
}

function Detail({ label, children }: { label: string; children: React.ReactNode }) {
  if (!children) return null;
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wider text-ink-500">{label}</dt>
      <dd className="mt-0.5 leading-relaxed text-ink-700">{children}</dd>
    </div>
  );
}
