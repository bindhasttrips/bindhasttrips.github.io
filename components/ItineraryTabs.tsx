'use client';

import { useState } from 'react';
import type { PackageTier } from '@/config/types';

export default function ItineraryTabs({ tiers }: { tiers: PackageTier[] }) {
  const initial = Math.max(0, tiers.findIndex((t) => t.recommended));
  const [activeIndex, setActiveIndex] = useState(initial);
  const active = tiers[activeIndex];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Sample itineraries"
        className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:px-0"
      >
        {tiers.map((tier, i) => (
          <button
            key={tier.id}
            role="tab"
            type="button"
            aria-selected={i === activeIndex}
            aria-controls={`itinerary-${tier.id}`}
            id={`tab-${tier.id}`}
            onClick={() => setActiveIndex(i)}
            className={`min-h-[2.75rem] shrink-0 rounded-full px-4 text-sm font-semibold transition-colors ${
              i === activeIndex
                ? 'bg-ink text-white'
                : 'border border-sand-300 bg-white text-ink-700 hover:bg-sand-100'
            }`}
          >
            {tier.days} days · {tier.name}
          </button>
        ))}
      </div>

      <ol
        role="tabpanel"
        id={`itinerary-${active.id}`}
        aria-labelledby={`tab-${active.id}`}
        className="mt-6 space-y-0"
      >
        {active.itinerary.map((day, i) => (
          <li key={day.day} className="relative flex gap-4 pb-6 last:pb-0">
            <div className="flex flex-col items-center">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-clay-100 text-xs font-bold text-clay">
                D{day.day}
              </span>
              {i < active.itinerary.length - 1 && (
                <span aria-hidden className="mt-1 w-px flex-1 bg-sand-300" />
              )}
            </div>
            <div className="pt-1">
              <h4 className="font-semibold">{day.title}</h4>
              <p className="mt-1 text-[15px] leading-relaxed text-ink-700">{day.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
