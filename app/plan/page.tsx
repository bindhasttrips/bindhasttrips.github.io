/**
 * Placeholder. Replaced in build step 2 with the real multi-step inquiry form.
 * It exists now so links from the landing and destination pages do not 404.
 */
import Link from 'next/link';
import { whatsappLink } from '@/config/site';

export const metadata = { title: 'Plan your trip' };

export default function PlanPage() {
  return (
    <section className="wrap py-24 text-center">
      <p className="eyebrow">Coming next</p>
      <h1 className="mt-3 text-3xl">The planner form lands here</h1>
      <p className="mx-auto mt-3 max-w-md text-[17px] text-ink-700">
        Step 2 of the build. For now, message us and we will do it the old-fashioned way.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href={whatsappLink('Hi, I want to plan a trip.')}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wa w-full sm:w-auto"
        >
          Message us on WhatsApp
        </a>
        <Link href="/" className="btn-ghost w-full sm:w-auto">
          Back to home
        </Link>
      </div>
    </section>
  );
}
