import Link from 'next/link';
import { liveDestinations } from '@/config/destinations';
import { site, whatsappLink } from '@/config/site';
import Hero from '@/components/Hero';
import CustomRequestForm from '@/components/CustomRequestForm';
import { WhatsAppGlyph } from '@/components/Header';
import { asset } from '@/lib/asset';
import { TRAVEL_TIPS } from '@/config/tips';

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
  'Return flights ticketed on your dates',
  'Hotels with daily breakfast',
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

      {/* Where we work, plus the things people ask before they are ready. */}
      <section className="border-y border-sand-200 bg-sand-100">
        <div className="wrap py-16">
          <h2 className="text-2xl sm:text-3xl">Where we work</h2>
          <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-ink-700">
            Two destinations and eight cities, chosen because we know them well enough to
            answer a question at short notice. Anywhere else, there is a form further down.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {liveDestinations.map((d) => (
              <div key={d.slug} className="card overflow-hidden">
                <div className="aspect-[16/9] bg-sand-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset(d.cardImage)}
                    alt={d.heroAlt}
                    width={800}
                    height={450}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl">{d.name}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ink-700">{d.summary}</p>
                  <dl className="mt-4 space-y-2 border-t border-sand-200 pt-4 text-[15px]">
                    <div className="flex gap-2">
                      <dt className="shrink-0 font-semibold">Cities</dt>
                      <dd className="text-ink-700">{d.cities.join(', ')}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="shrink-0 font-semibold">Visa</dt>
                      <dd className="text-ink-700">{d.visa.type}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="shrink-0 font-semibold">Best months</dt>
                      <dd className="text-ink-700">{d.bestMonthsSummary}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel information */}
      <section className="wrap py-16">
        <p className="eyebrow">Before you book anything</p>
        <h2 className="mt-3 text-2xl sm:text-3xl">Things worth knowing</h2>
        <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-ink-700">
          General travel information, not a sales pitch. These are the questions that come up
          most often, and the answers do not change much by destination.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TRAVEL_TIPS.map((tip) => (
            <article key={tip.title} className="rounded-xl2 border border-sand-200 bg-white p-5">
              <h3 className="text-lg leading-snug">{tip.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-700">{tip.body}</p>
            </article>
          ))}
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

      {/* About */}
      <section id="about" className="border-y border-sand-200 bg-sea-100">
        <div className="wrap grid gap-10 py-16 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset(site.contactPhoto)}
              alt={site.contactPhotoAlt}
              width={420}
              height={420}
              className="aspect-square w-full max-w-[18rem] rounded-xl2 object-cover shadow-card"
            />
            <dl className="mt-5 grid max-w-[18rem] gap-3">
              {site.about.facts.map((f) => (
                <div key={f.label} className="rounded-xl border border-white bg-white/70 p-3">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-sea">
                    {f.label}
                  </dt>
                  <dd className="mt-0.5 text-sm text-ink-700">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <p className="eyebrow text-sea">{site.about.heading}</p>
            <h2 className="mt-3 text-2xl sm:text-3xl">{site.about.lead}</h2>
            <div className="mt-6 space-y-4">
              {site.about.paragraphs.map((para, i) => (
                <p key={i} className="text-[16px] leading-relaxed text-ink-700">
                  {para}
                </p>
              ))}
            </div>
            <p className="mt-6 text-[15px] text-ink-500">
              {site.responsePromise} {site.quotePromise}
            </p>
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
