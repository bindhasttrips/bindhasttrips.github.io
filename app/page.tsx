import Link from 'next/link';
import { liveDestinations } from '@/config/destinations';
import { site, whatsappLink } from '@/config/site';
import DestinationCard from '@/components/DestinationCard';
import { WhatsAppGlyph } from '@/components/Header';
import { asset } from '@/lib/asset';

const steps = [
  {
    n: 1,
    title: 'Send your requirements',
    body: 'Fill the enquiry form with your dates, group size and the activities you want. It takes about two minutes and needs no account.',
  },
  {
    n: 2,
    title: 'See an estimate immediately',
    body: 'You get an indicative price range on the spot, with the flight component shown separately, plus a destination guide to download.',
  },
  {
    n: 3,
    title: 'Confirm and travel',
    body: 'We follow up with an exact quote. Once you confirm, we arrange the visa, bookings and vouchers, and send a link to track progress.',
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
      <section className="border-b border-sand-200 bg-sand-100">
        <div className="wrap grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow">Dubai and Thailand</p>
            <h1 className="mt-3 text-[2.1rem] leading-[1.14] sm:text-5xl">
              Your trip abroad,
              <br />
              handled end to end.
            </h1>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ink-700">
              Visa, flights, hotels, transfers and activities arranged as one booking, at one
              price. Tell us what you want and you will have an estimate in two minutes.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink('Hello, I would like to plan a trip. Can you help?')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa w-full sm:w-auto"
              >
                <WhatsAppGlyph />
                Message on WhatsApp
              </a>
              <Link href="/plan/" className="btn-ghost w-full sm:w-auto">
                Send your requirements
              </Link>
            </div>
            <p className="mt-4 text-sm text-ink-500">{site.quotePromise}</p>
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset('/images/dubai-hero.jpg')}
            alt="Dubai skyline at dusk seen from the marina"
            width={900}
            height={700}
            className="aspect-[4/3] w-full rounded-xl2 object-cover shadow-card"
          />
        </div>
      </section>

      <section className="wrap py-14">
        <h2 className="text-2xl sm:text-3xl">Destinations</h2>
        <p className="mt-2 max-w-2xl text-[16px] text-ink-700">
          Packages, indicative prices and practical detail for each destination. Malaysia,
          Singapore and Vietnam will be added later.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {liveDestinations.map((d) => (
            <DestinationCard key={d.slug} destination={d} />
          ))}
        </div>
      </section>

      <section className="border-y border-sand-200 bg-sand-100">
        <div className="wrap py-14">
          <h2 className="text-2xl sm:text-3xl">How it works</h2>
          <ol className="mt-8 grid gap-5 sm:grid-cols-3">
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

      <section className="wrap py-14">
        <h2 className="text-2xl sm:text-3xl">What every booking includes</h2>
        <ul className="mt-7 grid gap-3 sm:grid-cols-2">
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

      <section className="border-t border-sand-200 bg-sea-100">
        <div className="wrap grid gap-8 py-12 sm:grid-cols-[auto_1fr] sm:items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset(site.contactPhoto)}
            alt={site.contactName}
            width={128}
            height={128}
            className="h-24 w-24 rounded-full object-cover ring-4 ring-white"
          />
          <div>
            <h2 className="text-2xl">Talk to us before you book</h2>
            <p className="mt-2 max-w-2xl text-[16px] leading-relaxed text-ink-700">
              Questions about dates, visas, budget or whether a destination suits your group
              are welcome at any stage, including well before you are ready to book.
            </p>
            <p className="mt-3 text-sm text-ink-500">
              {site.contactName}, {site.name}. {site.responsePromise}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink('Hello, I have a question about a trip.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa w-full sm:w-auto"
              >
                <WhatsAppGlyph />
                Message on WhatsApp
              </a>
              <Link href="/plan/" className="btn-ghost w-full sm:w-auto">
                Send your requirements
              </Link>
            </div>
          </div>
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
