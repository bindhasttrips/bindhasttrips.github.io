import { site, whatsappLink } from '@/config/site';
import { WhatsAppGlyph } from './Header';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-sand-200 bg-sand-100">
      <div className="wrap grid gap-10 py-12 sm:grid-cols-2">
        <div>
          <p className="text-lg font-semibold">{site.name}</p>
          <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-ink-700">
            Visa, flights, hotels, transfers and activities for Dubai and Thailand, arranged
            as a single booking.
          </p>
          <a
            href={whatsappLink('Hello, I would like to ask about a trip.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa mt-5 w-full sm:w-auto"
          >
            <WhatsAppGlyph />
            Message on WhatsApp
          </a>
          <p className="mt-3 text-sm text-ink-500">{site.responsePromise}</p>
          <p className="mt-1 text-sm text-ink-500">
            Email{' '}
            <a className="underline underline-offset-2" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-500">
            Cancellation terms
          </h2>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-700">
            {site.cancellation.map((line) => (
              <li key={line} className="flex gap-2">
                <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-300" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-sand-200">
        <div className="wrap flex flex-col gap-1 py-6 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {site.legalName}. {site.registration}
          </p>
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
