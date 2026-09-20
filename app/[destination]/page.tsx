import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { liveDestinations, getDestination } from '@/config/destinations';
import { site } from '@/config/site';
import { formatInr, formatInrRange } from '@/lib/format';
import { asset } from '@/lib/asset';
import ItineraryTabs from '@/components/ItineraryTabs';
import Guide from '@/components/Guide';
import { getGuide } from '@/config/guides';

type Params = { destination: string };

/** Pre-renders one route per enabled destination. */
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
    title: `${d.name} packages, handled end to end`,
    description: `${d.tagline} ${d.summary}`,
  };
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default async function DestinationPage({ params }: { params: Promise<Params> }) {
  const { destination: slug } = await params;
  const d = getDestination(slug);
  if (!d) notFound();
  const guide = getGuide(d.slug);

  const planHref = `/plan/?dest=${d.slug}`;
  const flight = d.pricing.indicativeFlight;

  return (
    <>
      <section className="border-b border-sand-200 bg-sand-100">
        <div className="wrap grid gap-8 py-10 sm:py-14 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow">{d.country}</p>
            <h1 className="mt-3 text-[2rem] leading-[1.15] sm:text-4xl">{d.name}</h1>
            <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-ink-700">{d.summary}</p>
            <dl className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <Fact label="Flight time">{d.flightTimeSummary}</Fact>
              <Fact label="Best months">{d.bestMonthsSummary}</Fact>
              <Fact label="Visa">
                {d.visa.required ? `${d.visa.type}, arranged by us` : d.visa.type}
              </Fact>
            </dl>
            <div className="mt-7">
              <Link href={planHref} className="btn-primary w-full sm:w-auto">
                Build your trip
              </Link>
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

      {guide && (
        <>
          <section className="border-b border-sand-200">
            <div className="wrap py-12">
              <p className="eyebrow">The honest guide</p>
              <p className="mt-3 max-w-3xl text-[17px] leading-relaxed text-ink-700">
                {guide.intro}
              </p>
            </div>
          </section>
          <Guide guide={guide} name={d.name} />
        </>
      )}

      {d.tiers.length > 0 && (
      <section className="border-y border-sand-200 bg-sand-100">
        <div className="wrap py-14">
          <h2 className="text-2xl sm:text-3xl">Sample itinerary</h2>
          <p className="mt-2 max-w-2xl text-[16px] leading-relaxed text-ink-700">
            A guide rather than a fixed schedule. Days can be reordered, removed or added to
            suit your group.
          </p>
          <div className="mt-8">
            <ItineraryTabs tiers={d.tiers} />
          </div>
        </div>
      </section>
      )}

      <section className="wrap py-14">
        <h2 className="text-2xl sm:text-3xl">What is and is not included</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <div className="card p-5">
            <h3 className="text-lg text-sea">Included</h3>
            <ul className="mt-4 space-y-2.5 text-[15px] leading-relaxed text-ink-700">
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
            <ul className="mt-4 space-y-2.5 text-[15px] leading-relaxed text-ink-700">
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

      <section className="border-y border-sand-200 bg-sand-100">
        <div className="wrap py-14">
          <h2 className="text-2xl sm:text-3xl">Visa</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-[1.2fr_1fr]">
            <div className="card p-5">
              <dl className="grid gap-4 sm:grid-cols-3">
                <Fact label="Requirement">{d.visa.type}</Fact>
                <Fact label="Processing time">{d.visa.timeline}</Fact>
                <Fact label="Fee per person">
                  {d.visa.feeInr > 0
                    ? `${formatInr(d.visa.feeInr)}, included in the package`
                    : 'None'}
                </Fact>
              </dl>
              <p className="mt-5 text-[16px] leading-relaxed text-ink-700">
                {guide?.visaNote ?? d.visa.handledByUs}
              </p>
              {d.visa.caveat && (
                <p className="mt-4 rounded-xl bg-sand-100 p-4 text-[15px] leading-relaxed text-ink-700">
                  <strong className="font-semibold">Please note. </strong>
                  {d.visa.caveat}
                </p>
              )}
            </div>
            <div className="card p-5">
              <h3 className="text-lg">Documents we need from you</h3>
              <ul className="mt-4 space-y-2.5 text-[15px] leading-relaxed text-ink-700">
                {d.visa.documents.map((doc) => (
                  <li key={doc} className="flex gap-2.5">
                    <Check />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-ink-500">
                Clear photographs sent on WhatsApp are sufficient. A scanner is not required.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap py-14">
        <h2 className="text-2xl sm:text-3xl">When to travel</h2>
        <p className="mt-2 max-w-2xl text-[16px] leading-relaxed text-ink-700">
          {d.bestMonthsSummary}
        </p>

        <div className="mt-7 grid grid-cols-6 gap-1.5 sm:grid-cols-12">
          {MONTHS.map((label, i) => {
            const season = d.pricing.seasons.find((s) => s.months.includes(i + 1));
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
                    ? `about ${Math.round((s.multiplier - 1) * 100)} percent more`
                    : s.multiplier < 1
                      ? `about ${Math.round((1 - s.multiplier) * 100)} percent less`
                      : 'baseline'}
                </span>
              </dt>
              <dd className="mt-1.5 text-[15px] leading-relaxed text-ink-700">{s.note}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="border-y border-sand-200 bg-sand-100">
        <div className="wrap py-14">
          <h2 className="text-2xl sm:text-3xl">Costs on the ground</h2>
          <p className="mt-2 max-w-2xl text-[16px] leading-relaxed text-ink-700">
            {d.costSamplesNote}
          </p>
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
            Converted at approximately {formatInr(d.currency.approxInrPerUnit)} to 1{' '}
            {d.currency.code}. Rates change, so treat these as indicative.
          </p>
        </div>
      </section>

      <section className="wrap py-14 text-center">
        <h2 className="text-2xl sm:text-3xl">Get an exact price for {d.name}</h2>
        <p className="mx-auto mt-3 max-w-xl text-[16px] leading-relaxed text-ink-700">
          Send your dates and requirements and you will see an estimate immediately.{' '}
          {site.quotePromise}
        </p>
        <div className="mt-8">
          <Link href={planHref} className="btn-primary w-full sm:w-auto">
            Build your trip
          </Link>
        </div>
      </section>
    </>
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
