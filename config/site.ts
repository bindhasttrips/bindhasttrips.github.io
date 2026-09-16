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
