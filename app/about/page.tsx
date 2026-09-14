import Link from 'next/link';
import { site, whatsappLink } from '@/config/site';
import { asset } from '@/lib/asset';
import { WhatsAppGlyph } from '@/components/Header';

export const metadata = {
  title: 'About Deep',
  description:
    'Deep Ghuge is from Hingoli, lives in Washington DC, is doing a PhD in Physics, and plans trips abroad for people who would rather not plan them alone.',
};

/**
 * DEEP — READ THIS.
 * The story below is a first draft I wrote from the three lines you gave me
 * (Hingoli, physics PhD, Washington DC, love travel, want to help people travel).
 * The shape is right; the specifics are invented. Rewrite anything that is not
 * literally true before this goes near a customer. Your credibility here is the
 * entire product, and a story that falls apart under a follow-up question on a
 * WhatsApp call costs you more than a bland one.
 */
const story = [
  'I grew up in Hingoli, a small town in Marathwada that most people in Maharashtra cannot point to on a map. The first time I left the country I was twenty-three, flying to Washington DC to start a PhD in Physics, and I had never been on an international flight in my life.',
  'I had printouts of everything. Everything. Documents in a plastic sleeve, three copies of my bank statement, and a folder of things nobody ever asked me for. I spent the whole flight quietly convinced I was going to do something wrong at some counter and be sent straight back.',
  'Nothing went wrong. It never does, mostly. But nobody had told me that, and the not-knowing is its own kind of expensive.',
  'A few years and a lot of cheap trips later, my family started asking me to plan theirs. A cousin’s honeymoon. A friend’s parents going to Dubai. A junior from college who wanted Thailand and had never flown further than Delhi. I would build them a spreadsheet, find the flights, read the visa form out loud line by line, and stay awake to answer the panicked messages from the airport.',
  'What I kept noticing is that almost none of them were actually scared of the money. They were scared of looking stupid. Of standing at immigration without the right answer. Of being the one in the family who booked it wrong.',
  'Large agencies do not solve that. They sell you a seat on a coach with forty strangers and a WhatsApp group nobody reads. So I started Bindhast, which in Marathi means carefree — which is exactly what I was not on that first flight.',
  'I am still doing the PhD. This is the other thing I do, deliberately for a small number of people at a time, properly. When you message this number, it is me on the other end.',
];

const promises = [
  {
    title: 'You get me, not a team',
    body: 'Same person plans your trip, sends your visa, and answers at 11pm when your flight time shifts. No ticket numbers, no handovers.',
  },
  {
    title: 'I will tell you not to book',
    body: 'If your dates are bad, your budget does not fit, or you would be happier somewhere else, I will say so. I would rather lose one booking than have you come back unhappy.',
  },
  {
    title: 'The price is the price',
    body: 'One number, and a written list of what is not in it, before you pay anything. No surprise surcharges at the airport.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-sand-200 bg-sand-100">
        <div className="wrap grid gap-8 py-12 sm:py-16 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="eyebrow">Who you are actually talking to</p>
            <h1 className="mt-3 text-[2rem] leading-[1.15] sm:text-4xl">
              Hi, I am {site.founder.name.split(' ')[0]}.
            </h1>
            <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-ink-700">
              I am from {site.founder.from}. I live in {site.founder.livesIn}, where I am a{' '}
              {site.founder.dayJob}. I travel as much as a graduate stipend allows, and I
              have spent years planning trips for friends and family who would rather not
              lose three weekends to booking sites and visa portals.
            </p>
            <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-ink-700">
              Bindhast is that, done properly, for people I have not met yet.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink('Hi Deep, I read your About page. I have a question about a trip.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa w-full sm:w-auto"
              >
                <WhatsAppGlyph />
                Message me directly
              </a>
              <Link href="/plan/" className="btn-ghost w-full sm:w-auto">
                Get a price first
              </Link>
            </div>
          </div>

          <figure className="m-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset(site.founder.photoWide)}
              alt={site.founder.photoAlt}
              width={900}
              height={1200}
              className="aspect-[4/5] w-full rounded-xl2 object-cover shadow-card"
            />
            <figcaption className="mt-2 text-sm text-ink-300">
              Portland Head Light, Maine. One of the cheap ones.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="wrap py-14 sm:py-16">
        <p className="eyebrow">Why I started this</p>
        <h2 className="mt-3 text-2xl sm:text-3xl">The short version involves a lot of printouts</h2>
        <div className="mt-7 max-w-2xl space-y-5">
          {story.map((para, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? 'text-[19px] leading-relaxed text-ink-700'
                  : 'text-[17px] leading-relaxed text-ink-700'
              }
            >
              {para}
            </p>
          ))}
        </div>
      </section>

      <section className="border-y border-sand-200 bg-sand-100">
        <div className="wrap py-14">
          <p className="eyebrow">What you can hold me to</p>
          <h2 className="mt-3 text-2xl sm:text-3xl">Three promises, all of them checkable</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {promises.map((p) => (
              <div key={p.title} className="card p-5">
                <h3 className="text-lg">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-700">{p.body}</p>
              </div>
            ))}
          </div>
          <dl className="mt-6 grid gap-4 sm:grid-cols-3">
            <Fact label="Reply time">{site.responsePromise}</Fact>
            <Fact label="Quote time">{site.quotePromise}</Fact>
            <Fact label="Based in">{site.basedIn}</Fact>
          </dl>
        </div>
      </section>

      <section className="wrap py-14 text-center">
        <h2 className="text-2xl sm:text-3xl">Still deciding? Just ask.</h2>
        <p className="mx-auto mt-3 max-w-xl text-[17px] text-ink-700">
          You do not have to be ready to book. Most people message me months before they
          travel, with a question they think is too basic to ask. It is not.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={whatsappLink('Hi Deep, I have a question that is probably very basic.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa w-full sm:w-auto"
          >
            <WhatsAppGlyph />
            Ask me anything
          </a>
          <Link href="/" className="btn-ghost w-full sm:w-auto">
            See the destinations
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
