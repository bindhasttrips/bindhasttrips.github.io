'use client';

import { useEffect } from 'react';

/**
 * Shown when a client side render throws. The usual cause is a browser
 * holding JavaScript from before a deploy, which no longer matches the rest
 * of the page, so the first thing offered is a reload that bypasses the
 * cache rather than a bare error message.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Client exception:', error);
  }, [error]);

  return (
    <section className="wrap max-w-xl py-20">
      <h1 className="text-2xl">Something went wrong on this page</h1>
      <p className="mt-3 text-[16px] leading-relaxed text-ink-700">
        This is usually an old copy of the site left in your browser after an update.
        Reloading normally fixes it.
      </p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          className="btn-primary w-full sm:w-auto"
          onClick={() => {
            // Bypass whatever is cached rather than replaying the same failure.
            try {
              window.location.reload();
            } catch {
              reset();
            }
          }}
        >
          Reload the page
        </button>
        <button type="button" className="btn-ghost w-full sm:w-auto" onClick={reset}>
          Try again
        </button>
      </div>
      <p className="mt-6 text-sm text-ink-500">
        Still stuck? A hard refresh clears it: Cmd and Shift and R on a Mac, Ctrl and Shift
        and R on Windows.
      </p>
      {error.digest && (
        <p className="mt-2 text-xs text-ink-300">Reference {error.digest}</p>
      )}
    </section>
  );
}
