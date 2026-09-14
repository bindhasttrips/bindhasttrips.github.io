import Link from 'next/link';
import type { Destination } from '@/config/types';
import { formatInr, roundEstimate } from '@/lib/format';
import { asset } from '@/lib/asset';

export default function DestinationCard({ destination }: { destination: Destination }) {
  const cheapest = Math.min(...destination.tiers.map((t) => t.fromPricePerPerson));
  const cheapestWithFlights = roundEstimate(
    cheapest + destination.pricing.indicativeFlight.low,
  );

  return (
    <Link
      href={`/${destination.slug}/`}
      className="card group overflow-hidden transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-sand-200">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(destination.cardImage)}
          alt={destination.heroAlt}
          width={800}
          height={500}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-xl font-semibold">{destination.name}</h3>
          <span className="shrink-0 text-sm text-ink-500">
            from <strong className="text-ink">{formatInr(cheapestWithFlights)}</strong>
          </span>
        </div>
        <p className="mt-1.5 text-[15px] leading-relaxed text-ink-700">{destination.tagline}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Pill>
            {destination.visa.required ? 'Visa handled by us' : 'No visa needed'}
          </Pill>
          <Pill>{destination.tiers.length} packages</Pill>
          <Pill>{destination.activities.length} activities</Pill>
        </div>
        <p className="mt-4 text-sm font-semibold text-clay">See packages and prices</p>
        <p className="mt-2 text-xs text-ink-300">
          Estimated, per person, including flights. Confirmed on your dates.
        </p>
      </div>
    </Link>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-sand-100 px-3 py-1 text-xs font-medium text-ink-700">
      {children}
    </span>
  );
}
