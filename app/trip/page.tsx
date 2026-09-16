import { Suspense } from 'react';
import Tracker from '@/components/Tracker';

export const metadata = {
  title: 'Track your booking',
  description: 'Follow every step of your trip as it is arranged.',
};

export default function TripPage() {
  return (
    <Suspense fallback={<Skeleton />}>
      <Tracker />
    </Suspense>
  );
}

/** The token is read client side, so this is the first paint. */
function Skeleton() {
  return (
    <div className="wrap max-w-xl py-14">
      <div className="h-7 w-2/3 rounded bg-sand-200" />
      <div className="mt-3 h-4 w-1/2 rounded bg-sand-100" />
      <div className="mt-10 space-y-5">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex gap-4">
            <div className="h-9 w-9 shrink-0 rounded-full bg-sand-200" />
            <div className="flex-1 pt-2">
              <div className="h-4 w-1/3 rounded bg-sand-100" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
