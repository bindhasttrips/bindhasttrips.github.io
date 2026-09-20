import Link from 'next/link';
import { SAVINGS, whatsappLink } from '@/config/site';
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
        <h1
          className="rise-in max-w-3xl text-[2.6rem] font-semibold leading-[1.03] tracking-tight text-white sm:text-[4rem]"
        >
          Everything a package does.
          <br />
          <span className="text-clay-500">Without the group.</span>
        </h1>

        <p
          className="rise-in mt-6 max-w-xl text-[17px] leading-relaxed text-sand-200 sm:text-lg"
          style={{ animationDelay: '0.08s' }}
        >
          Visa, flights, hotels, transfers and activities, all booked and briefed before you
          fly. You choose the itinerary instead of following one, and you are not paying for
          a coach, a tour manager or forty strangers{SAVINGS.claim ? `, which is why it works out around ${SAVINGS.claim} less` : ''}.
        </p>

        <div
          className="rise-in mt-9 flex flex-col gap-3 sm:flex-row"
          style={{ animationDelay: '0.16s' }}
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

      </div>
    </section>
  );
}
