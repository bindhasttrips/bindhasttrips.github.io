'use client';

import { useRef, useState } from 'react';
import { TRAVEL_TIPS } from '@/config/tips';

/**
 * A horizontally scrolling deck. Native scroll with snap points does the work,
 * so it stays swipeable on a phone and keyboard reachable on a laptop. The
 * arrows are an addition for mouse users, not the mechanism.
 */
export default function TipDeck() {
  const track = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  function onScroll() {
    const el = track.current;
    if (!el) return;
    setAtStart(el.scrollLeft < 8);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
  }

  function nudge(direction: 1 | -1) {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: direction * Math.min(el.clientWidth * 0.8, 360), behavior: 'smooth' });
  }

  return (
    <div className="relative">
      <div className="mb-4 flex items-center justify-between gap-4">
        <p className="text-sm text-ink-500">Swipe for more</p>
        <div className="hidden gap-2 sm:flex">
          <DeckButton label="Previous" disabled={atStart} onClick={() => nudge(-1)}>
            ‹
          </DeckButton>
          <DeckButton label="Next" disabled={atEnd} onClick={() => nudge(1)}>
            ›
          </DeckButton>
        </div>
      </div>

      <ul
        ref={track}
        onScroll={onScroll}
        className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0"
      >
        {TRAVEL_TIPS.map((tip) => (
          <li
            key={tip.title}
            className="w-[17rem] shrink-0 snap-start rounded-xl2 border border-sand-200 bg-white p-5 sm:w-[19rem]"
          >
            <h3 className="text-lg leading-snug">{tip.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-700">{tip.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DeckButton({
  label, disabled, onClick, children,
}: {
  label: string;
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="grid h-10 w-10 place-items-center rounded-full border border-sand-300 bg-white text-xl leading-none text-ink-700 transition-opacity hover:bg-sand-100 disabled:opacity-30"
    >
      {children}
    </button>
  );
}
