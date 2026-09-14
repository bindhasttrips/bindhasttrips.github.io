import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { liveDestinations, getDestination } from '@/config/destinations';
import { site, whatsappLink } from '@/config/site';
import { formatInr, formatInrRange } from '@/lib/format';
import { asset } from '@/lib/asset';
import ItineraryTabs from '@/components/ItineraryTabs';
import { WhatsAppGlyph } from '@/components/Header';

type Params = { destination: string };

/** Pre-renders /dubai/ and /thailand/. Adding a config object adds a route. */
export function generateStaticParams(): Params[] {
  return liveDestinations.map((d) => ({ destination: d.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { destination: slug } = await params;
  const d = getDestination(slug);
  if (!d) return {};
  return {
    title: `${d.name} packages for first-time travellers`,
    description: `${d.tagline} ${d.summary}`,
  };
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default async function DestinationPage({ params }: { params: Promise<Params> }) {
  const { destination: slug } = await params;
  const d = getDestination(slug);
  if (!d) notFound();

  const planHref = `/plan/?dest=${d.slug}`;
  const adultActivities = d.activities.filter((a) => a.audience !== 'kids');
  const kidsActivities = d.activities.filter((a) => a.audience !== 'adult');

  return (
    <>
      {/* Hero */}
      <section className="border-b border-sand-200 bg-sand-100">
        <div className="wrap grid gap-8 py-10 sm:py-14 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow">{d.country}</p>
            <h1 className="mt-3 text-[2rem] leading-[1.15] sm:text-4xl">{d.name}</h1>
            <p className="mt-3 text-[17px] font-medium text-ink-700">{d.tagline}</p>
            <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-ink-700">{d.summary}</p>
            <dl className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <Fact label="Flight time">{d.flightTimeSummary}</Fact>
              <Fact label="Best months">{d.bestMonthsSummary}</Fact>
              <Fact label="Visa">
                {d.visa.required ? `${d.visa.type} — we do it for you` : d.visa.type}
              </Fact>
            </dl>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href={planHref} className="btn-primary w-full sm:w-auto">
                Get my {d.name} price
              </Link>
              <a
                href={whatsappLink(`Hi, I am interested in a ${d.name} trip. Can you help?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost w-full sm:w-auto"
              >
                <WhatsAppGlyph className="h-4 w-4 text-wa" />
                Ask on WhatsApp
              </a>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset(d.heroImage)}
            alt={d.heroAlt}
            width={900}
            height={700}
            className="aspect-[4/3] w-full rounded-xl2 object-cover shadow-card"
          />
        </div>
      </section>

      {/* Packages */}
      <section className="wrap py-14">
        <p className="eyebrow">Packages</p>
        <h2 className="mt-3 text-2xl sm:text-3xl">Three ways to do {d.name}</h2>
        <p className="mt-2 max-w-2xl text-[16px] text-ink-700">
          Prices are per person on twin sharing and cover the land package only. Flights are
          quoted separately on your actual dates, because airfare moves too much to guess
          honestly.
        </p>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {d.tiers.map((tier) => (
            <div
              key={tier.id}
              className={`card flex flex-col p-5 ${tier.recommended ? 'ring-2 ring-clay' : ''}`}
            >
              {tier.recommended && (
                <span className="mb-3 w-fit rounded-full bg-clay px-3 py-1 text-xs font-semibold text-white">
                  Most people pick this
                </span>
              )}
              <h3 className="text-xl">{tier.name}</h3>
              <p className="mt-1 text-sm text-ink-500">
                {tier.days} days · {tier.nights} nights
              </p>
              <p className="mt-4 text-3xl font-semibold tracking-tight">
                {formatInr(tier.fromPricePerPerson)}
              </p>
              <p className="text-sm text-ink-500">from, per person · land only</p>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-700">{tier.blurb}</p>
              <ul className="mt-4 flex-1 space-y-2 text-[15px] text-ink-700">
                {tier.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <Check />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`${planHref}&tier=${tier.id}`}
                className={`mt-6 ${tier.recommended ? 'btn-primary' : 'btn-ghost'}`}
              >
                Price this trip
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm text-ink-500">
          Indicative return flights from a metro:{' '}
          <strong className="text-ink-700">
            {formatInrRange(d.pricing.indicativeFlight.low, d.pricing.indicativeFlight.high)}
          </strong>{' '}
          per person. {d.pricing.indicativeFlight.note}
        </p>
      </section>

      {/* Itinerary */}
      <section className="border-y border-sand-200 bg-sand-100">
        <div className="wrap py-14">
          <p className="eyebrow">Sample itinerary</p>
          <h2 className="mt-3 text-2xl sm:text-3xl">What the days actually look like</h2>
          <p className="mt-2 max-w-2xl text-[16px] text-ink-700">
            This is a sample, not a fixed schedule. Swap days around, drop what you do not
            care about, add what you do — that is the whole point of not booking a group tour.
          </p>
          <div className="mt-8">
            <ItineraryTabs tiers={d.tiers} />
          </div>
        </div>
      </section>

      {/* Included / not included */}
      <section className="wrap py-14">
        <p className="eyebrow">The fine print, up front</p>
        <h2 className="mt-3 text-2xl sm:text-3xl">What is in the price and what is not</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <div className="card p-5">
            <h3 className="text-lg text-sea">Included</h3>
            <ul className="mt-4 space-y-2.5 text-[15px] text-ink-700">
              {d.included.map((i) => (
                <li key={i} className="flex gap-2.5">
                  <Check />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-5">
            <h3 className="text-lg text-clay">Not included</h3>
            <ul className="mt-4 space-y-2.5 text-[15px] text-ink-700">
              {d.notIncluded.map((i) => (
                <li key={i} className="flex gap-2.5">
                  <Cross />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Activities teaser */}
      <section className="border-y border-sand-200 bg-sand-100">
        <div className="wrap py-14">
          <p className="eyebrow">Add-ons</p>
          <h2 className="mt-3 text-2xl sm:text-3xl">Things you can put in your trip</h2>
          <p className="mt-2 max-w-2xl text-[16px] text-ink-700">
            Pick these when you fill the form and they go straight into your estimate. Prices
            are indicative per person and we confirm them on the call.
          </p>

          <ActivityList title="For everyone and adults" items={adultActivities} />
          <ActivityList title="Good with kids" items={kidsActivities} />
        </div>
      </section>

      {/* Visa */}
      <section className="wrap py-14">
        <p className="eyebrow">Visa</p>
        <h2 className="mt-3 text-2xl sm:text-3xl">
          {d.visa.required ? 'You will not touch a visa form' : 'There is no visa to get'}
        </h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-[1.2fr_1fr]">
          <div className="card p-5">
            <dl className="grid gap-4 sm:grid-cols-3">
              <Fact label="What you need">{d.visa.type}</Fact>
              <Fact label="How long it takes">{d.visa.timeline}</Fact>
              <Fact label="Fee per person">
                {d.visa.feeInr > 0 ? `${formatInr(d.visa.feeInr)}, already in your price` : 'None'}
              </Fact>
            </dl>
            <p className="mt-5 text-[16px] leading-relaxed text-ink-700">{d.visa.handledByUs}</p>
            {d.visa.caveat && (
              <p className="mt-4 rounded-xl bg-sand-100 p-4 text-[15px] leading-relaxed text-ink-700">
                <strong className="font-semibold">Worth knowing: </strong>
                {d.visa.caveat}
              </p>
            )}
          </div>
          <div className="card p-5">
            <h3 className="text-lg">What you send us</h3>
            <ul className="mt-4 space-y-2.5 text-[15px] text-ink-700">
              {d.visa.documents.map((doc) => (
                <li key={doc} className="flex gap-2.5">
                  <Check />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-ink-500">
              Photos on WhatsApp are fine. You do not need a scanner.
            </p>
          </div>
        </div>
      </section>

      {/* When to go */}
      <section className="border-y border-sand-200 bg-sand-100">
        <div className="wrap py-14">
          <p className="eyebrow">When to go</p>
          <h2 className="mt-3 text-2xl sm:text-3xl">Weather versus what it costs</h2>
          <p className="mt-2 max-w-2xl text-[16px] text-ink-700">{d.bestMonthsSummary}</p>

          <div className="mt-7 grid grid-cols-6 gap-1.5 sm:grid-cols-12">
            {MONTHS.map((label, i) => {
              const month = i + 1;
              const season = d.pricing.seasons.find((s) => s.months.includes(month));
              const tone =
                season?.label === 'peak'
                  ? 'bg-clay text-white'
                  : season?.label === 'shoulder'
                    ? 'bg-clay-100 text-clay'
                    : 'bg-sea-100 text-sea';
              return (
                <div key={label} className={`rounded-lg px-1 py-2.5 text-center ${tone}`}>
                  <span className="text-xs font-semibold">{label}</span>
                </div>
              );
            })}
          </div>

          <dl className="mt-6 grid gap-4 sm:grid-cols-3">
            {d.pricing.seasons.map((s) => (
              <div key={s.label} className="rounded-xl border border-sand-200 bg-white p-4">
                <dt className="text-sm font-semibold">
                  <span className="first-letter:uppercase">
                    {s.label === 'off' ? 'off season' : `${s.label} season`}
                  </span>
                  <span className="ml-2 font-normal text-ink-500">
                    {s.multiplier > 1
                      ? `about ${Math.round((s.multiplier - 1) * 100)}% more`
                      : s.multiplier < 1
                        ? `about ${Math.round((1 - s.multiplier) * 100)}% less`
                        : 'baseline'}
                  </span>
                </dt>
                <dd className="mt-1.5 text-[15px] leading-relaxed text-ink-700">{s.note}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Costs on the ground */}
      <section className="wrap py-14">
        <p className="eyebrow">Money</p>
        <h2 className="mt-3 text-2xl sm:text-3xl">What things cost once you are there</h2>
        <p className="mt-2 max-w-2xl text-[16px] text-ink-700">{d.costSamplesNote}</p>
        <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {d.costSamples.map((c) => (
            <li
              key={c.label}
              className="flex items-baseline justify-between gap-3 rounded-xl border border-sand-200 bg-white px-4 py-3"
            >
              <span className="text-[15px] text-ink-700">{c.label}</span>
              <span className="shrink-0 font-semibold">{formatInrRange(c.fromInr, c.toInr)}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-ink-300">
          Rough conversions at about {formatInr(d.currency.approxInrPerUnit)} to 1{' '}
          {d.currency.code}. Rates move; treat these as a feel, not a quote.
        </p>
      </section>

      {/* CTA */}
      <section className="border-t border-sand-200 bg-sea-100">
        <div className="wrap py-14 text-center">
          <h2 className="text-2xl sm:text-3xl">Ready to see your number?</h2>
          <p className="mx-auto mt-3 max-w-xl text-[17px] text-ink-700">
            Two minutes, no account. You get a price range and our {d.name} brochure straight
            away, and {site.quotePromise.toLowerCase()}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={planHref} className="btn-primary w-full sm:w-auto">
              Get my {d.name} price
            </Link>
            <a
              href={whatsappLink(`Hi, I want to go to ${d.name}. Can you help me plan it?`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa w-full sm:w-auto"
            >
              <WhatsAppGlyph />
              Message us instead
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function ActivityList({
  title,
  items,
}: {
  title: string;
  items: { id: string; name: string; description: string; indicativePrice: number; durationHours: number; note?: string }[];
}) {
  if (items.length === 0) return null;
  return (
    <div className="mt-8">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-500">{title}</h3>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((a) => (
          <li key={a.id} className="rounded-xl border border-sand-200 bg-white p-4">
            <div className="flex items-baseline justify-between gap-3">
              <h4 className="font-semibold leading-snug">{a.name}</h4>
              <span className="shrink-0 text-sm font-semibold text-clay">
                {formatInr(a.indicativePrice)}
              </span>
            </div>
            <p className="mt-1.5 text-[14px] leading-relaxed text-ink-700">{a.description}</p>
            <p className="mt-2 text-xs text-ink-300">
              About {a.durationHours} hours{a.note ? ` · ${a.note}` : ''}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Fact({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-sand-200 bg-white p-3">
      <dt className="text-xs font-semibold uppercase tracking-wider text-ink-500">{label}</dt>
      <dd className="mt-1 text-sm leading-snug text-ink-700">{children}</dd>
    </div>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden className="mt-1 h-4 w-4 shrink-0 text-sea" fill="currentColor">
      <path d="M8.1 13.3 5.3 10.5l-1.2 1.2 4 4 8-8-1.2-1.2z" />
    </svg>
  );
}

function Cross() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden className="mt-1 h-4 w-4 shrink-0 text-ink-300" fill="currentColor">
      <path d="m10 8.6 3.9-3.9 1.4 1.4-3.9 3.9 3.9 3.9-1.4 1.4-3.9-3.9-3.9 3.9-1.4-1.4 3.9-3.9-3.9-3.9 1.4-1.4z" />
    </svg>
  );
}
