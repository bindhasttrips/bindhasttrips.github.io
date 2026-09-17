import Link from 'next/link';
import { site, whatsappLink } from '@/config/site';
import { asset } from '@/lib/asset';
import { WhatsAppGlyph } from '@/components/Header';

/** Each slide waits its turn by starting the same animation later. */
const SLIDES = [
  { src: '/images/dubai-hero.jpg', alt: 'Dubai skyline at dusk seen from the marina', delay: '0s' },
  { src: '/images/thailand-hero.jpg', alt: 'Longtail boats on a limestone bay in southern Thailand', delay: '-7s' },
  { src: '/images/dubai-card.jpg', alt: 'Evening light over the Dubai coast', delay: '-14s' },
];

const TICKER = [
  'Dubai', 'Abu Dhabi', 'Bangkok', 'Pattaya', 'Chiang Mai',
  'Phuket', 'Krabi', 'Koh Samui', 'Visa handled', 'Flights ticketed',
  'Hotels confirmed', 'One price', 'One point of contact',
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      {/* Moving banner. The images sit behind a scrim so the type stays legible
          whatever photograph is on screen. */}
      <div aria-hidden className="absolute inset-0">
        {SLIDES.map((s) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={s.src}
            src={asset(s.src)}
            alt=""
            className="hero-slide absolute inset-0 h-full w-full object-cover"
            style={{ animationDelay: s.delay }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-ink/80 via-ink/55 to-ink/80" />
      </div>

      <div className="wrap relative flex min-h-[78vh] flex-col justify-center py-20 sm:min-h-[72vh]">
        <p className="rise-in text-xs font-semibold uppercase tracking-[0.2em] text-sand-300">
          UAE and Thailand
        </p>
        <h1
          className="rise-in mt-4 max-w-3xl text-[2.4rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl"
          style={{ animationDelay: '0.08s' }}
        >
          Your trip abroad, handled end to end.
        </h1>
        <p
          className="rise-in mt-6 max-w-xl text-[17px] leading-relaxed text-sand-200 sm:text-lg"
          style={{ animationDelay: '0.16s' }}
        >
          Visa, flights, hotels, transfers and activities arranged as one booking, at one
          price. Tell us what you want and you will have an estimate in about three minutes.
        </p>
        <div
          className="rise-in mt-9 flex flex-col gap-3 sm:flex-row"
          style={{ animationDelay: '0.24s' }}
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
        <p
          className="rise-in mt-5 text-sm text-sand-300"
          style={{ animationDelay: '0.32s' }}
        >
          {site.quotePromise}
        </p>
      </div>

      {/* The ticker. Two identical halves so the wrap is seamless. */}
      <div className="relative border-t border-white/10 bg-ink/60 py-3 backdrop-blur">
        <div aria-hidden className="flex w-max marquee-track">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex items-center gap-8 pr-8">
              {TICKER.map((item) => (
                <li
                  key={`${copy}-${item}`}
                  className="flex items-center gap-8 whitespace-nowrap text-sm font-medium text-sand-200"
                >
                  {item}
                  <span className="h-1 w-1 rounded-full bg-clay" />
                </li>
              ))}
            </ul>
          ))}
        </div>
        <span className="sr-only">
          We arrange trips to Dubai, Abu Dhabi, Bangkok, Pattaya, Chiang Mai, Phuket, Krabi
          and Koh Samui.
        </span>
      </div>
    </section>
  );
}
