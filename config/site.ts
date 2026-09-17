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
  /**
   * A short founder block. Enough of a real person to be trusted, framed as
   * the founder of a business rather than as the whole business. It makes no
   * claim about how many people work here.
   */
  founder: {
    eyebrow: 'Who is behind it',
    name: 'Deep Ghuge',
    role: 'Founder',
    photo: '/images/founder.jpg',
    photoAlt: 'Deep Ghuge',
    points: [
      'From Hingoli in Maharashtra, now based in Washington DC while finishing a PhD in Physics.',
      'Has travelled widely on a student budget, which is where most of the practical knowledge here comes from.',
      'Started Bindhast after years of planning trips for friends and family, and finding that the planning was the part people dreaded.',
    ],
    closing:
      'Bindhast means carefree in Marathi. That is the standard the service is held to.',
  },

  /**
   * The About section is about the business, not about any individual. It
   * makes no claim about how many people work here in either direction.
   */
  about: {
    heading: 'About Bindhast',
    lead: 'Bindhast arranges complete trips abroad for travellers from India.',
    intro:
      'One booking, one price, and every moving part handled for you. We work in the UAE and Thailand, and we arrange trips elsewhere on request.',
    points: [
      {
        title: 'Built around your group, not sold off a shelf',
        body: 'A family with a four year old and four friends going to Pattaya do not want the same week. Every itinerary starts from who is actually travelling.',
      },
      {
        title: 'Visas handled end to end',
        body: 'Documents come to us on WhatsApp. We complete the form, pay the fee, chase the application and send the approved visa back. No centre visits, no queues.',
      },
      {
        title: 'Everything booked before you fly',
        body: 'Flights ticketed, stays confirmed and activity tickets issued in advance. You land with the whole trip already in your hand.',
      },
      {
        title: 'One quote, paid once',
        body: 'The full price in writing, including what is not covered. No deposits, no balance chased later, no surcharge after you have paid.',
      },
      {
        title: 'You can see the progress',
        body: 'A private link tracks your booking from deposit through visa, flights and hotels to vouchers issued, with the date of the last update on it.',
      },
      {
        title: 'Reachable while you are away',
        body: 'Support on WhatsApp for the whole trip, including the hours when something has actually gone wrong.',
      },
    ],
  },
  tagline: 'Trips abroad, handled end to end.',
  url: 'https://bindhasttrips.github.io', // TODO: custom domain
  email: 'hello@bindhasttrips.com', // TODO
  responsePromise: 'WhatsApp replies within a few hours, 9am to 10pm IST.',
  quotePromise: 'We come back with a full quote within 24 hours.',
  cancellation: [
    'The full quoted amount is payable before anything is booked. We do not hold dates or ticket flights against unpaid balances.',
    'Once paid, the price is fixed. Fare rises after that point are ours, not yours.',
    'Cancel more than 30 days before departure and we refund everything not already paid to airlines, hotels or the visa office.',
    'Cancel 15 to 30 days before and we refund whatever suppliers will still release, which is usually a small part of the total.',
    'Inside 15 days, flights and hotels are non refundable, so no refund is possible. We will tell you exactly what is recoverable before you decide.',
    'If a visa is refused for reasons outside your control, we refund everything except the visa fee and anything already non refundable.',
  ],
} as const;

/**
 * Whether to show the customer an estimated total at the end of the builder.
 * Off until you are happy with the rate cards and the margin in
 * config/prices.ts. Individual activity prices do not need this: they appear
 * on their own as soon as a price exists for them.
 */
export const SHOW_ESTIMATE = false;

/** Country code first, digits only. No plus sign, no spaces. */
export const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919999999999'; // TODO via .env.local

export function whatsappLink(message: string): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
