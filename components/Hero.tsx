import Link from 'next/link';
import { site, whatsappLink } from '@/config/site';
import { asset } from '@/lib/asset';
import { WhatsAppGlyph } from '@/components/Header';

/**
 * The motion lives inside the picture, not across the whole screen. A dark
 * full bleed wash flattens the photography and makes the type fight it.
 * Each frame starts the same animation later so they hand over in turn.
 */
const FRAMES = [
  { src: '/images/thailand-hero.jpg', alt: 'Longtail boats on a limestone bay in southern Thailand', delay: '0s' },
  { src: '/images/dubai-hero.jpg', alt: 'Dubai skyline at dusk seen from the marina', delay: '-8s' },
  { src: '/images/thailand-card.jpg', alt: 'Evening light on the Andaman coast', delay: '-16s' },
];

const FACTS = [
  { value: '2', label: 'destinations' },
  { value: '8', label: 'cities' },
  { value: '95', label: 'things to do' },
];

export default function Hero() {
  return (
    <section className="border-b border-sand-200 bg-sand-100">
      <div className="wrap grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <p className="rise-in inline-flex items-center gap-2 rounded-full border border-sand-300 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-ink-700">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-clay" />
            The UAE and Thailand
          </p>

          <h1
            className="rise-in mt-5 text-[2.5rem] leading-[1.05] tracking-tight sm:text-[3.5rem]"
            style={{ animationDelay: '0.06s' }}
          >
            Your trip abroad,
            <br />
            <span className="text-clay">handled end to end.</span>
          </h1>

          <p
            className="rise-in mt-6 max-w-xl text-[17px] leading-relaxed text-ink-700 sm:text-lg"
            style={{ animationDelay: '0.12s' }}
          >
            Visa, flights, hotels, transfers and activities arranged as one booking, at one
            price. Tell us what you want and you will have an estimate in about three minutes.
          </p>

          <div
            className="rise-in mt-8 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: '0.18s' }}
          >
            <Link href="/plan/" className="btn-primary w-full sm:w-auto">
              Build my trip
            </Link>
            <a
              href={whatsappLink('Hello, I would like to plan a trip. Can you help?')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa w-full sm:w-auto"
            >
              <WhatsAppGlyph />
              Message on WhatsApp
            </a>
          </div>

          <dl
            className="rise-in mt-9 flex flex-wrap gap-x-10 gap-y-4 border-t border-sand-300 pt-6"
            style={{ animationDelay: '0.24s' }}
          >
            {FACTS.map((f) => (
              <div key={f.label}>
                <dt className="sr-only">{f.label}</dt>
                <dd>
                  <span className="text-2xl font-semibold tracking-tight">{f.value}</span>
                  <span className="ml-2 text-sm text-ink-500">{f.label}</span>
                </dd>
              </div>
            ))}
            <div>
              <dt className="sr-only">Quote time</dt>
              <dd>
                <span className="text-2xl font-semibold tracking-tight">24h</span>
                <span className="ml-2 text-sm text-ink-500">to an exact quote</span>
              </dd>
            </div>
          </dl>
        </div>

        <div className="rise-in relative" style={{ animationDelay: '0.1s' }}>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl2 bg-sand-200 shadow-card sm:aspect-[5/4] lg:aspect-[4/5]">
            {FRAMES.map((f) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={f.src}
                src={asset(f.src)}
                alt={f.alt}
                className="hero-slide absolute inset-0 h-full w-full object-cover"
                style={{ animationDelay: f.delay }}
              />
            ))}
          </div>
          <p className="mt-3 text-sm text-ink-500">{site.responsePromise}</p>
        </div>
      </div>
    </section>
  );
}
