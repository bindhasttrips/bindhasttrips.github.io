/**
 * Every "fill this in before launch" value lives here.
 * Search for TODO before you point a domain at this.
 */
export const site = {
  name: 'Bindhast Trips',
  legalName: 'Bindhast Trips', // TODO: the registered entity name, once you have one
  registration: 'TODO: registration details', // TODO — see the note in README about registering this properly
  founder: {
    name: 'Deep Ghuge',
    photo: '/images/founder.jpg',
    photoWide: '/images/founder-wide.jpg',
    photoAlt: 'Deep Ghuge at Portland Head Light in Maine',
    from: 'Hingoli, Maharashtra',
    livesIn: 'Washington, DC',
    dayJob: 'PhD student in Physics',
    blurb:
      'I am from Hingoli, I am doing a PhD in Physics in Washington DC, and I have spent years planning trips for friends and cousins taking their first flight out of India. There is no call centre here. You message me, I answer.',
  },
  tagline: 'First trip abroad? We handle the whole thing.',
  url: 'https://bindhasttrips.com', // TODO: your custom domain
  email: 'hello@bindhasttrips.com', // TODO
  basedIn: 'Washington, DC', // TODO: confirm what you want shown as your base
  responsePromise: 'We reply on WhatsApp within a few hours, 9am to 10pm, every day.',
  quotePromise: 'We call you back with an exact price within 24 hours.',
  cancellation: [
    'Deposit is 25% of the trip cost and is what we use to lock your visa, flights and hotels.',
    'Cancel more than 30 days before you fly and we refund everything except money already paid to airlines, hotels or the visa office.',
    'Cancel 15 to 30 days before and we refund half.',
    'Inside 15 days, flights and hotels are already non-refundable, so we cannot refund. We will always tell you what is recoverable before you cancel.',
    'If your visa is rejected and it is not because of something you hid from us, we refund the full deposit minus the visa fee itself.',
  ],
} as const;

/** Country code first, digits only. No + and no spaces — wa.me rejects both. */
export const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919999999999'; // TODO via .env.local

export function whatsappLink(message: string): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
