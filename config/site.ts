/**
 * Fill in every TODO before pointing a domain at this.
 * Writing rules for all customer-facing copy in this project:
 *   no dashes, no rhetorical questions as headings, no claims about company
 *   size in either direction, plain professional sentences.
 */
export const site = {
  name: 'Bindhast Trips',
  legalName: 'Bindhast Trips', // TODO: registered entity name
  registration: 'TODO: registration number', // TODO
  contactName: 'Deep Ghuge',
  contactPhoto: '/images/founder.jpg',
  contactPhotoAlt: 'Deep Ghuge at Portland Head Light in Maine',
  /**
   * DEEP: this is a draft written from the facts you gave me. The shape is
   * right, the specifics are mine. Rewrite anything that is not literally
   * true before a customer reads it, especially the paragraph about your
   * friends. A story that falls apart on a phone call costs more than a
   * plain one.
   */
  about: {
    heading: 'About Bindhast',
    lead: 'Travel is close to my heart. Planning it is closer.',
    paragraphs: [
      'I am Deep Ghuge. I grew up in Hingoli, a small town in Marathwada that most people in Maharashtra cannot place on a map, and I now live in Washington DC, where I am finishing a PhD in Physics.',
      'I have spent the better part of a decade working out which airline drops its fares on a Tuesday, which visa portal breaks if you open it in Safari, and which beach is worth an extra two hours in a minivan.',
      'It started as a favour. A friend forwarded me a fare to Bangkok and asked whether it was any good. It was not, and moving the trip two days saved him nine thousand rupees. Word got around. For a few years my evenings were a spreadsheet of other people\u2019s holidays, and I enjoyed it more than I expected to.',
      'Bindhast means carefree in Marathi. That is the whole idea: you should be able to look forward to a trip instead of managing it. The research, the visa, the bookings and the hundred small decisions are mine. The holiday is yours.',
    ],
    facts: [
      { label: 'From', value: 'Hingoli, Maharashtra' },
      { label: 'Based in', value: 'Washington DC' },
      { label: 'Day job', value: 'PhD in Physics' },
    ],
  },
  tagline: 'Trips abroad, handled end to end.',
  url: 'https://bindhasttrips.github.io', // TODO: custom domain
  email: 'hello@bindhasttrips.com', // TODO
  responsePromise: 'WhatsApp replies within a few hours, 9am to 10pm IST.',
  quotePromise: 'Exact quote within 24 hours of your enquiry.',
  cancellation: [
    'The deposit is 25 percent of the trip cost. It is used to secure your visa, flights and hotels.',
    'Cancel more than 30 days before departure for a full refund, less any amount already paid to airlines, hotels or the visa office.',
    'Cancel between 15 and 30 days before departure for a 50 percent refund.',
    'Within 15 days of departure, flights and hotels are non refundable and no refund is possible. We will confirm what is recoverable before you cancel.',
    'If a visa is refused for reasons outside your control, the deposit is refunded less the visa fee.',
  ],
} as const;

/**
 * Per activity prices are hidden from customers until the rate card is final.
 * Prices still drive the estimate: this only controls what is displayed.
 * Flip to true when you are happy with the numbers in config/destinations.ts.
 */
export const SHOW_ACTIVITY_PRICES = false;

/** Country code first, digits only. No plus sign, no spaces. */
export const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919999999999'; // TODO via .env.local

export function whatsappLink(message: string): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
