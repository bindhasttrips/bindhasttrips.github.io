import Link from 'next/link';
import { liveDestinations } from '@/config/destinations';
import { site, whatsappLink } from '@/config/site';
import DestinationCard from '@/components/DestinationCard';
import { WhatsAppGlyph } from '@/components/Header';
import { asset } from '@/lib/asset';

const steps = [
  {
    n: 1,
    title: 'Tell us roughly what you want',
    body: 'Two minutes on a form. Where, when, how many of you, what you want to do. No account, no signup.',
  },
  {
    n: 2,
    title: 'See a price range immediately',
    body: 'A real range, not a teaser number. You also get our first-timer brochure to download right there.',
  },
  {
    n: 3,
    title: 'We call you within 24 hours',
    body: 'An actual person, with an exact price on your exact dates. Ask us anything, including the awkward questions.',
  },
  {
    n: 4,
    title: 'Pay a deposit, then watch it happen',
    body: 'We send you a private tracker link. Visa submitted, visa approved, flights ticketed, hotels confirmed — you see each step as it lands.',
  },
];

const reasons = [
  {
    title: 'You are not on a coach with forty strangers',
    body: 'Group packages exist because they are easy to sell, not because they are good. Your trip is built for the people actually going on it.',
  },
  {
    title: 'One number, one human',
    body: 'You get our WhatsApp. Not a ticket number, not a chatbot, not a different agent every time. The person who plans your trip is the person who answers at 11pm when your flight shifts.',
  },
  {
    title: 'The visa is our problem, not yours',
    body: 'The form, the photo spec, the follow-ups, the bit where the portal breaks. You send documents on WhatsApp and we send back a visa.',
  },
  {
    title: 'The price is the price',
    body: 'One bundled number covering visa, hotels, transfers and activities. We tell you what is not in it before you pay, not at the airport.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-sand-200 bg-sand-100">
        <div className="wrap grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow">Dubai · Thailand</p>
            <h1 className="mt-3 text-[2.1rem] leading-[1.12] sm:text-5xl">
              First trip abroad?
              <br />
              We handle the whole thing.
            </h1>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ink-700">
              Visa, flights, hotels, transfers, activities — one bundled price and one person
              on WhatsApp who actually answers. Built for people flying out of India for the
              first time, who would rather not figure this out alone.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/plan/" className="btn-primary w-full sm:w-auto">
                Get a price in 2 minutes
              </Link>
              <a
                href={whatsappLink('Hi, I am thinking about my first trip abroad and I have some questions.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost w-full sm:w-auto"
              >
                <WhatsAppGlyph className="h-4 w-4 text-wa" />
                Just ask a question
              </a>
            </div>
            <p className="mt-4 text-sm text-ink-500">
              Free. No account. {site.quotePromise}
            </p>
          </div>

          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset('/images/dubai-hero.jpg')}
              alt="Dubai skyline at dusk seen from the marina"
              width={900}
              height={700}
              className="aspect-[4/3] w-full rounded-xl2 object-cover shadow-card"
            />
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="wrap py-14 sm:py-20">
        <h2 className="text-2xl sm:text-3xl">Two destinations, done properly</h2>
        <p className="mt-2 max-w-2xl text-[17px] text-ink-700">
          We only sell places we know well enough to answer questions about at short notice.
          Malaysia, Singapore and Vietnam are coming once we can say the same about them.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {liveDestinations.map((d) => (
            <DestinationCard key={d.slug} destination={d} />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-sand-200 bg-sand-100">
        <div className="wrap py-14 sm:py-20">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-3 text-2xl sm:text-3xl">Four steps, and only one of them is yours</h2>
          <ol className="mt-8 grid gap-5 sm:grid-cols-2">
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
        </div>
      </section>

      {/* Why us */}
      <section className="wrap py-14 sm:py-20">
        <p className="eyebrow">Why us and not a big agency</p>
        <h2 className="mt-3 text-2xl sm:text-3xl">
          We are small. That is the entire point.
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-xl2 border border-sand-200 bg-white p-5">
              <h3 className="text-lg">{r.title}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-ink-700">{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder / trust */}
      <section className="border-y border-sand-200 bg-sea-100">
        <div className="wrap grid gap-8 py-14 sm:grid-cols-[auto_1fr] sm:items-center sm:py-16">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset(site.founder.photo)}
            alt={site.founder.photoAlt}
            width={160}
            height={160}
            className="h-28 w-28 rounded-full object-cover ring-4 ring-white sm:h-40 sm:w-40"
          />
          <div>
            <p className="eyebrow text-sea">The person you will be messaging</p>
            <h2 className="mt-2 text-2xl">{site.founder.name}</h2>
            <p className="mt-1 text-sm text-ink-500">
              {site.founder.from} · {site.founder.dayJob} · {site.founder.livesIn}
            </p>
            <p className="mt-3 max-w-2xl text-[17px] leading-relaxed text-ink-700">
              {site.founder.blurb}
            </p>
            <Link
              href="/about/"
              className="mt-3 inline-block text-sm font-semibold text-sea underline underline-offset-4"
            >
              Read why I started this →
            </Link>
            <dl className="mt-6 grid gap-4 sm:grid-cols-3">
              <TrustFact label="Reply time">{site.responsePromise}</TrustFact>
              <TrustFact label="Quote time">{site.quotePromise}</TrustFact>
              <TrustFact label="Registered as">
                {site.legalName}, {site.basedIn}
              </TrustFact>
            </dl>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="wrap py-14 text-center sm:py-20">
        <h2 className="text-2xl sm:text-3xl">Start with a price, not a phone call</h2>
        <p className="mx-auto mt-3 max-w-xl text-[17px] text-ink-700">
          Fill the form, see a range straight away, download the brochure. If it looks
          workable, we will call you. If it does not, no one chases you.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/plan/" className="btn-primary w-full sm:w-auto">
            Get a price in 2 minutes
          </Link>
          <a
            href={whatsappLink('Hi, I would rather just chat than fill a form.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost w-full sm:w-auto"
          >
            <WhatsAppGlyph className="h-4 w-4 text-wa" />
            Rather just chat?
          </a>
        </div>
      </section>
    </>
  );
}

function TrustFact({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-white bg-white/70 p-3">
      <dt className="text-xs font-semibold uppercase tracking-wider text-sea">{label}</dt>
      <dd className="mt-1 text-sm leading-snug text-ink-700">{children}</dd>
    </div>
  );
}
