import Link from 'next/link';

export const metadata = {
  title: 'UAE packages',
  // This page only exists to keep older /dubai links alive.
  robots: { index: false, follow: true },
};

/**
 * The destination was renamed from Dubai to UAE, because it covers Abu Dhabi
 * too. A static export cannot issue a 301, so this is a meta refresh plus a
 * visible link for anyone with JavaScript or redirects disabled.
 */
export default function DubaiRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/uae/" />
      <div className="wrap max-w-xl py-20 text-center">
        <p className="text-[16px] text-ink-700">
          Dubai is now part of our UAE page, together with Abu Dhabi.
        </p>
        <Link href="/uae/" className="btn-primary mt-6">
          Continue to UAE
        </Link>
      </div>
    </>
  );
}
