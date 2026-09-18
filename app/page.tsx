import Link from 'next/link';
import { liveDestinations, destinationsByVisaTier } from '@/config/destinations';
import { VISA_TIERS } from '@/config/types';
import { site, whatsappLink } from '@/config/site';
import Hero from '@/components/Hero';
import CustomRequestForm from '@/components/CustomRequestForm';
import { WhatsAppGlyph } from '@/components/Header';
import { asset } from '@/lib/asset';
import TipDeck from '@/components/TipDeck';

const steps = [
  {
    n: 1,
    title: 'Build the trip',
    body: 'Pick where, when, how long and who is coming, then choose what you want to do. Suggestions are already filled in, and you can throw them all out.',
  },
  {
    n: 2,
    title: 'See an estimate',
    body: 'A price range on the spot, with flights shown separately, plus a copy of everything by email and on WhatsApp.',
  },
  {
    n: 3,
    title: 'Confirm and travel',
    body: 'We follow up with an exact quote, then arrange the visa, bookings and vouchers. A private link tracks every step.',
  },
];

const included = [
  'Visa application, documentation and fees where a visa is required',
  'Return flights, ticketed on your dates',
  'Hotels and Airbnbs',
  'Airport and activity transfers',
  'Activities booked in advance, with tickets issued before departure',
  'Travel insurance for the trip dates',
  'Support on WhatsApp for the duration of the trip',
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Build your trip: the form is the point of the page, so it comes first. */}
      <section id="plan" className="wrap py-16">
        <p className="eyebrow">Start here</p>
        <h2 className="mt-3 text-2xl sm:text-3xl">Build your trip in about three minutes</h2>
        <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-ink-700">
          One question at a time. Choose your destination, dates and length, tell us who is
          coming, then pick from what there is to do in each city. If you would rather not
          pick anything, say so and we will plan it for you.
        </p>

        <ol className="mt-9 grid gap-5 sm:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="card p-5">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-clay-100 text-sm font-bold text-clay">
                {s.n}
              </span>
              <h3 className="mt-3 text-lg">{s.title}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-ink-700">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/plan/" className="btn-primary w-full sm:w-auto">
            Build my trip
          </Link>
          <a
            href={whatsappLink('Hello, I would like to plan a trip.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost w-full sm:w-auto"
          >
            <WhatsAppGlyph className="h-4 w-4 text-wa" />
            Ask a question first
          </a>
        </div>
      </section>

      {/* Where we work. Grouped by visa effort, because that is the first
          thing an Indian passport holder actually wants to know. */}
      <section id="destinations" className="border-y border-sand-200 bg-sand-100">
        <div className="wrap py-16">
          <h2 className="text-2xl sm:text-3xl">Where we work</h2>
          <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-ink-700">
            {liveDestinations.length} destinations, grouped by how much visa work each one
            needs on an Indian passport. Somewhere else in mind? There is a form further down.
          </p>

          <div className="mt-9 space-y-10">
            {VISA_TIERS.map((tier) => {
              const list = destinationsByVisaTier()[tier.id];
              if (list.length === 0) return null;
              return (
                <div key={tier.id}>
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <h3 className="text-lg font-semibold">{tier.label}</h3>
                    <p className="text-[15px] text-ink-500">{tier.blurb}</p>
                  </div>
                  <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {list.map((d) => (
                      <li key={d.slug} className="card overflow-hidden">
                        <div className="aspect-[16/9] bg-sand-200">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={asset(d.cardImage)}
                            alt=""
                            width={640}
                            height={360}
                            loading="lazy"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex items-baseline justify-between gap-2">
                            <h4 className="font-semibold">{d.name}</h4>
                            {!d.bookable && (
                              <span className="shrink-0 rounded-full bg-sand-100 px-2 py-0.5 text-xs font-medium text-ink-500">
                                on request
                              </span>
                            )}
                          </div>
                          <p className="mt-1 text-[14px] leading-snug text-ink-700">
                            {d.tagline}
                          </p>
                          <p className="mt-2 text-xs text-ink-300">
                            {d.cities.slice(0, 3).join(' · ')}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Travel information, as a deck rather than a wall. */}
      <section className="wrap py-16">
        <p className="eyebrow">Before you book</p>
        <h2 className="mt-3 text-2xl sm:text-3xl">Things worth knowing</h2>
        <div className="mt-8">
          <TipDeck />
        </div>
      </section>

      {/* What is included */}
      <section className="wrap py-16">
        <h2 className="text-2xl sm:text-3xl">What every booking includes</h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {included.map((item) => (
            <li
              key={item}
              className="flex gap-2.5 rounded-xl border border-sand-200 bg-white px-4 py-3 text-[15px] leading-relaxed text-ink-700"
            >
              <Check />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-ink-500">
          Meals other than breakfast, personal expenses and anything added after arrival are
          not included. Each destination page lists the exclusions in full.
        </p>
      </section>

      {/* About the business. No individual, and no claim about how many
          people work here in either direction. */}
      <section id="about" className="border-y border-sand-200 bg-sea-100">
        <div className="wrap py-16">
          <p className="eyebrow text-sea">{site.about.heading}</p>
          <h2 className="mt-3 max-w-3xl text-2xl sm:text-3xl">{site.about.lead}</h2>
          <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-ink-700">
            {site.about.intro}
          </p>

          <ul className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {site.about.points.map((point) => (
              <li key={point.title} className="rounded-xl2 border border-white bg-white/80 p-5">
                <h3 className="text-lg leading-snug">{point.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-700">{point.body}</p>
              </li>
            ))}
          </ul>

          {/* Enough of a real person to be trusted. Framed as the founder of
              a business, which is a different claim from being the business. */}
          <div className="mt-12 grid gap-7 border-t border-white/60 pt-10 sm:grid-cols-[auto_1fr] sm:items-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset(site.founder.photo)}
              alt={site.founder.photoAlt}
              width={176}
              height={176}
              className="h-28 w-28 rounded-full object-cover ring-4 ring-white sm:h-40 sm:w-40"
            />
            <div>
              <p className="eyebrow text-sea">{site.founder.eyebrow}</p>
              <p className="mt-2 text-xl font-semibold">
                {site.founder.name}
                <span className="ml-2 text-base font-normal text-ink-500">
                  {site.founder.role}
                </span>
              </p>
              <ul className="mt-4 space-y-2.5">
                {site.founder.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-[15px] leading-relaxed text-ink-700">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sea" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-700">
                {site.founder.closing}
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/plan/" className="btn-primary w-full sm:w-auto">
              Build my trip
            </Link>
            <a
              href={whatsappLink('Hello, I have a question about a trip.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost w-full sm:w-auto"
            >
              <WhatsAppGlyph className="h-4 w-4 text-wa" />
              Ask a question
            </a>
          </div>
        </div>
      </section>

      {/* Custom trip or visa help */}
      <section id="custom" className="wrap py-16">
        <p className="eyebrow">Somewhere else, or visa help</p>
        <h2 className="mt-3 text-2xl sm:text-3xl">Not the UAE or Thailand?</h2>
        <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-ink-700">
          We arrange trips beyond the two destinations above, and handle visas on their own.
          Tell us roughly what you need and we will come back to you. No form to work
          through, no account, and nobody will chase you.
        </p>
        <div className="mt-8">
          <CustomRequestForm />
        </div>
      </section>
    </>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden className="mt-1 h-4 w-4 shrink-0 text-sea" fill="currentColor">
      <path d="M8.1 13.3 5.3 10.5l-1.2 1.2 4 4 8-8-1.2-1.2z" />
    </svg>
  );
}
