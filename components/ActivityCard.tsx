'use client';

import { useState } from 'react';
import type { Activity, Destination, GroupType, TripStyle } from '@/config/types';
import { formatInr } from '@/lib/format';
import { asset } from '@/lib/asset';
import { videoLink, hasRealVideo, placeholderTile } from '@/lib/media';
import { matchesStyles, suitsGroup } from '@/lib/suggest';

export default function ActivityCard({
  activity, destination, selected, styles, groupType, onToggle,
}: {
  activity: Activity;
  destination: Destination;
  selected: boolean;
  styles: TripStyle[];
  groupType?: GroupType;
  onToggle: () => void;
}) {
  const [open, setOpen] = useState(false);
  const tile = placeholderTile(activity);

  return (
    <div
      className={`overflow-hidden rounded-xl2 border transition-colors ${
        selected ? 'border-clay bg-clay-100 ring-1 ring-clay' : 'border-sand-300 bg-white'
      }`}
    >
      {/* The whole top block selects. Links and the detail toggle sit outside
          it, because a button inside a button is invalid and breaks taps. */}
      <button
        type="button"
        aria-pressed={selected}
        onClick={onToggle}
        className="flex w-full items-stretch gap-0 text-left"
      >
        <span
          aria-hidden
          className="relative hidden w-28 shrink-0 sm:block"
          style={
            activity.image
              ? undefined
              : { backgroundImage: `linear-gradient(140deg, ${tile.from}, ${tile.to})` }
          }
        >
          {activity.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={asset(activity.image)}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            <span className="absolute inset-0 grid place-items-center text-lg font-bold text-white/85">
              {tile.initials}
            </span>
          )}
        </span>

        <span className="flex min-w-0 flex-1 flex-col p-4">
          <span className="flex items-start justify-between gap-3">
            <span className="flex min-w-0 items-start gap-3">
              <span
                aria-hidden
                className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 text-sm font-bold leading-none ${
                  selected
                    ? 'border-clay bg-clay text-white'
                    : 'border-sand-300 bg-white text-transparent'
                }`}
              >
                ✓
              </span>
              <span className="min-w-0 font-semibold leading-snug">{activity.name}</span>
            </span>
            <span className="shrink-0 text-sm font-semibold text-clay">
              {activity.indicativePrice == null
                ? ''
                : activity.indicativePrice === 0
                  ? 'No ticket'
                  : formatInr(activity.indicativePrice)}
            </span>
          </span>

          <span className="mt-1.5 block pl-9 text-[14px] leading-relaxed text-ink-700">
            {activity.description}
          </span>

          <span className="mt-2 flex flex-wrap gap-1.5 pl-9">
            <Tag>About {activity.durationHours}h</Tag>
            {suitsGroup(activity, groupType) && <Tag tone="sea">Suits your group</Tag>}
            {matchesStyles(activity, styles) && <Tag tone="sea">Your kind of thing</Tag>}
            {activity.audience === 'adult' && <Tag>Adults only</Tag>}
            {activity.audience === 'kids' && <Tag>Good with children</Tag>}
            {activity.intensity === 'high' && <Tag>Active</Tag>}
            {activity.intensity === 'low' && <Tag>Easy going</Tag>}
            {activity.note && <Tag>{activity.note}</Tag>}
          </span>
        </span>
      </button>

      <div className="flex flex-wrap items-center gap-4 border-t border-sand-200 px-4 py-2.5 sm:pl-[8.25rem]">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="text-xs font-semibold text-sea underline underline-offset-2"
        >
          {open ? 'Less' : 'What this is'}
        </button>
        <a
          href={videoLink(activity, destination)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-sea underline underline-offset-2"
        >
          {hasRealVideo(activity) ? 'Watch a video' : 'See it on YouTube'}
        </a>
        {activity.infoUrl && (
          <a
            href={activity.infoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-sea underline underline-offset-2"
          >
            Operator page
          </a>
        )}
      </div>

      {open && (
        <p className="border-t border-sand-200 px-4 py-3 text-[14px] leading-relaxed text-ink-700 sm:pl-[8.25rem]">
          {activity.detail}
        </p>
      )}
    </div>
  );
}

function Tag({ children, tone }: { children: React.ReactNode; tone?: 'sea' }) {
  return (
    <span
      className={`rounded-full px-2.5 py-1 text-xs font-medium leading-none ${
        tone === 'sea' ? 'bg-sea-100 text-sea' : 'bg-sand-100 text-ink-500'
      }`}
    >
      {children}
    </span>
  );
}
