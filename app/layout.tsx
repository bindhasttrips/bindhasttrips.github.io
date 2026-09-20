import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { site } from '@/config/site';

// One variable font file. No five-weight stack.
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}. ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description:
    'Package trips for Indian travellers, without the group. Visa, flights, hotels, transfers and activities all booked and briefed, on an itinerary you choose. Eighteen destinations across Asia, the Gulf and the Caucasus.',
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: `${site.name}. ${site.tagline}`,
    description:
      'Everything a package does, without the group. You choose the itinerary, we book and brief the whole trip.',
  },
};

export const viewport: Viewport = {
  themeColor: '#FDFAF6',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={inter.variable}>
      <body className="flex min-h-dvh flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
