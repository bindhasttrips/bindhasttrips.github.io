import type { DestinationGuide } from '@/config/guide-types';

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const VERDICT_TONE: Record<string, string> = {
  best: 'bg-sea text-white',
  good: 'bg-sea-100 text-sea',
  mixed: 'bg-clay-100 text-clay',
  avoid: 'bg-sand-200 text-ink-500',
};

export default function Guide({ guide, name }: { guide: DestinationGuide; name: string }) {
  return (
    <>
      <Section id="when" title={`When to go to ${name}`}>
        <p className="max-w-3xl text-[16px] leading-relaxed text-ink-700">
          {guide.whenToGo.summary}
        </p>

        {guide.whenToGo.keyInsight && (
          <div className="mt-6 rounded-xl2 border-l-4 border-clay bg-clay-100 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-clay">
              The thing most people get wrong
            </p>
            <p className="mt-2 text-[16px] leading-relaxed text-ink-700">
              {guide.whenToGo.keyInsight}
            </p>
          </div>
        )}

        <div className="mt-7 space-y-4">
          {guide.whenToGo.bands.map((band) => (
            <div key={band.label} className="card p-5">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-lg">{band.label}</h3>
                <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${VERDICT_TONE[band.verdict]}`}>
                  {band.verdict === 'best' ? 'best time' : band.verdict}
                </span>
                <span className="text-sm text-ink-500">
                  {band.months.map((m) => MONTHS[m - 1]).join(', ')}
                </span>
              </div>
              <dl className="mt-3 grid gap-3 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ink-500">Weather</dt>
                  <dd className="mt-0.5 text-[15px] leading-relaxed text-ink-700">{band.weather}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ink-500">Crowds and cost</dt>
                  <dd className="mt-0.5 text-[15px] leading-relaxed text-ink-700">{band.crowds}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </Section>

      <Section id="how-long" title="How long you need" tinted>
        <div className="grid gap-4 sm:grid-cols-2">
          <Stat label="Minimum worth doing" value={guide.howLong.minimum} />
          <Stat label="What we would book" value={guide.howLong.ideal} />
        </div>
        <p className="mt-5 max-w-3xl text-[16px] leading-relaxed text-ink-700">
          {guide.howLong.note}
        </p>

        <h3 className="mt-9 text-lg">Routes that work</h3>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {guide.routes.map((r) => (
            <li key={r.name} className="rounded-xl2 border border-sand-200 bg-white p-5">
              <div className="flex items-baseline justify-between gap-3">
                <h4 className="font-semibold">{r.name}</h4>
                <span className="shrink-0 text-sm font-semibold text-clay">{r.nights} nights</span>
              </div>
              <p className="mt-1.5 text-[15px] text-ink-700">{r.stops}</p>
              <p className="mt-1 text-sm text-ink-500">{r.suits}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="where" title="Where to go, and for how long">
        <div className="space-y-5">
          {guide.cities.map((c) => (
            <article key={c.name} className="card p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-xl">{c.name}</h3>
                <span className="shrink-0 rounded-full bg-sand-100 px-3 py-1 text-sm font-semibold text-ink-700">
                  {c.nights} nights
                </span>
              </div>
              <p className="mt-2 text-[16px] leading-relaxed text-ink-700">{c.why}</p>

              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-ink-500">
                Do not miss
              </p>
              <ul className="mt-2 space-y-1.5">
                {c.dontMiss.map((d) => (
                  <li key={d} className="flex gap-2.5 text-[15px] leading-relaxed text-ink-700">
                    <Tick />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>

              {c.overrated && (
                <p className="mt-4 rounded-xl bg-sand-100 p-4 text-[15px] leading-relaxed text-ink-700">
                  <strong className="font-semibold">Skip, or think twice. </strong>
                  {c.overrated}
                </p>
              )}
            </article>
          ))}
        </div>
      </Section>

      <Section id="getting-around" title="Getting there and getting around" tinted>
        <p className="max-w-3xl text-[16px] leading-relaxed text-ink-700">{guide.gettingThere}</p>
        <dl className="mt-7 grid gap-4 sm:grid-cols-2">
          {guide.gettingAround.map((n) => (
            <div key={n.label} className="rounded-xl2 border border-sand-200 bg-white p-5">
              <dt className="font-semibold">{n.label}</dt>
              <dd className="mt-1.5 text-[15px] leading-relaxed text-ink-700">{n.detail}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="practical" title="Phones and money">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-lg">Staying connected</h3>
            <dl className="mt-4 space-y-4">
              {guide.connectivity.map((n) => (
                <div key={n.label}>
                  <dt className="text-sm font-semibold">{n.label}</dt>
                  <dd className="mt-0.5 text-[15px] leading-relaxed text-ink-700">{n.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h3 className="text-lg">Money</h3>
            <dl className="mt-4 space-y-4">
              {guide.money.map((n) => (
                <div key={n.label}>
                  <dt className="text-sm font-semibold">{n.label}</dt>
                  <dd className="mt-0.5 text-[15px] leading-relaxed text-ink-700">{n.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <Section id="insider" title="Worth knowing before you go" tinted>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-lg">Things that are not obvious</h3>
            <ul className="mt-4 space-y-3">
              {guide.insider.map((t) => (
                <li key={t} className="flex gap-2.5 text-[15px] leading-relaxed text-ink-700">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg">Mistakes we see most</h3>
            <ul className="mt-4 space-y-2.5">
              {guide.mistakes.map((t) => (
                <li key={t} className="flex gap-2.5 text-[15px] leading-relaxed text-ink-700">
                  <Cross />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-lg">Manners</h3>
            <ul className="mt-4 space-y-2">
              {guide.etiquette.map((t) => (
                <li key={t} className="flex gap-2.5 text-[15px] leading-relaxed text-ink-700">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sea" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-lg">Staying safe</h3>
            <ul className="mt-4 space-y-2">
              {guide.safety.map((t) => (
                <li key={t} className="flex gap-2.5 text-[15px] leading-relaxed text-ink-700">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-300" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}

function Section({
  id, title, children, tinted,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  tinted?: boolean;
}) {
  return (
    <section
      id={id}
      className={tinted ? 'border-y border-sand-200 bg-sand-100' : 'border-b border-sand-200'}
    >
      <div className="wrap py-14">
        <h2 className="text-2xl sm:text-3xl">{title}</h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl2 border border-sand-200 bg-white p-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">{label}</p>
      <p className="mt-1.5 text-lg font-semibold">{value}</p>
    </div>
  );
}

function Tick() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden className="mt-1 h-4 w-4 shrink-0 text-sea" fill="currentColor">
      <path d="M8.1 13.3 5.3 10.5l-1.2 1.2 4 4 8-8-1.2-1.2z" />
    </svg>
  );
}

function Cross() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden className="mt-1 h-4 w-4 shrink-0 text-clay" fill="currentColor">
      <path d="m10 8.6 3.9-3.9 1.4 1.4-3.9 3.9 3.9 3.9-1.4 1.4-3.9-3.9-3.9 3.9-1.4-1.4 3.9-3.9-3.9-3.9 1.4-1.4z" />
    </svg>
  );
}
