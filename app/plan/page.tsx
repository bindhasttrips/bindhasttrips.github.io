import { Suspense } from 'react';
import PlanForm from '@/components/PlanForm';

export const metadata = {
  title: 'Send your requirements',
  description:
    'Tell us your destination, dates, group size and the activities you want, and see an estimate immediately.',
};

export default function PlanPage() {
  return (
    <Suspense fallback={<Loading />}>
      <PlanForm />
    </Suspense>
  );
}

/**
 * The form reads ?dest= with useSearchParams, which only resolves after
 * hydration on a static export. This is what the first paint shows.
 */
function Loading() {
  return (
    <div className="wrap max-w-2xl py-10">
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-sand-200">
        <div className="h-full w-1/6 rounded-full bg-clay" />
      </div>
      <div className="mt-8 h-8 w-3/4 rounded bg-sand-200" />
      <div className="mt-6 space-y-3">
        <div className="h-20 rounded-xl bg-sand-100" />
        <div className="h-20 rounded-xl bg-sand-100" />
      </div>
    </div>
  );
}
