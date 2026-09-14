import Link from 'next/link';
import { whatsappLink } from '@/config/site';

export default function NotFound() {
  return (
    <section className="wrap py-24 text-center">
      <h1 className="text-3xl">We could not find that page</h1>
      <p className="mx-auto mt-3 max-w-md text-[17px] text-ink-700">
        The link may be old, or we may have moved something. Either way, nothing is broken on
        your end.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link href="/" className="btn-primary w-full sm:w-auto">
          Go to the home page
        </Link>
        <a
          href={whatsappLink('Hi, a link on your site did not work for me.')}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost w-full sm:w-auto"
        >
          Message us
        </a>
      </div>
    </section>
  );
}
