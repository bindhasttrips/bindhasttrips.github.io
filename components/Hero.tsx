import Link from 'next/link';
import { whatsappLink } from '@/config/site';
import { asset } from '@/lib/asset';
import { PHOTO_CREDITS } from '@/config/photos';
import { WhatsAppGlyph } from '@/components/Header';

/**
 * Every photograph we have, in a single full bleed sequence. Each frame is
 * offset by one slot of the shared 48 second loop. The scrim is a bottom up
 * gradient rather than a flat wash, so the top of each picture stays bright
 * and only the area under the type is darkened.
 */
const ORDER = ['krabi', 'dubai', 'bangkok', 'phuket', 'abu-dhabi', 'chiang-mai', 'koh-samui', 'pattaya'];
const SLOT_SECONDS = 6;

const FRAMES = ORDER.map((key, i) => {
  const photo = PHOTO_CREDITS.find((p) => p.key === key);
  return {
    key,
    src: photo?.file ?? '',
    alt: photo?.title ?? '',
    delay: `-${(ORDER.length - i) * SLOT_SECONDS}s`,
  };
}).filter((f) => f.src);

const FACTS = [
  { value: '2', label: 'destinations' },
  { value: '8', label: 'cities' },
  { value: '95', label: 'things to do' },
  { value: '24h', label: 'to an exact quote' },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <div aria-hidden className="absolute inset-0">
        {FRAMES.map((f) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={f.key}
            src={asset(f.src)}
            alt=""
            className="hero-slide absolute inset-0 h-full w-full object-cover"
            style={{ animationDelay: f.delay }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />
      </div>

      <div className="wrap relative flex min-h-[86vh] flex-col justify-end py-16 sm:min-h-[84vh] sm:py-20">
        <p className="rise-in inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur">
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-clay-500" />
          The UAE and Thailand
        </p>

        <h1
          className="rise-in mt-5 max-w-3xl text-[2.6rem] font-semibold leading-[1.03] tracking-tight text-white sm:text-[4.2rem]"
          style={{ animationDelay: '0.06s' }}
        >
          Your trip abroad,
          <br />
          handled end to end.
        </h1>

        <p
          className="rise-in mt-6 max-w-xl text-[17px] leading-relaxed text-sand-200 sm:text-lg"
          style={{ animationDelay: '0.12s' }}
        >
          Visa, flights, hotels, transfers and activities arranged as one booking, at one
          price. Tell us what you want and you will have an estimate in about three minutes.
        </p>

        <div
          className="rise-in mt-9 flex flex-col gap-3 sm:flex-row"
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
          className="rise-in mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/20 pt-6"
          style={{ animationDelay: '0.24s' }}
        >
          {FACTS.map((f) => (
            <div key={f.label}>
              <dt className="sr-only">{f.label}</dt>
              <dd>
                <span className="text-2xl font-semibold tracking-tight text-white">{f.value}</span>
                <span className="ml-2 text-sm text-sand-300">{f.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
