/**
 * The destination system is data-driven on purpose.
 * Adding Malaysia / Singapore / Vietnam later = add one object to
 * config/destinations.ts. No new pages, no new components.
 */

export type Audience = 'adult' | 'kids' | 'both';
export type SeasonLabel = 'peak' | 'shoulder' | 'off';

export interface Activity {
  id: string;
  name: string;
  description: string;
  /** Indicative price per ADULT, in INR. Shown to the customer as "approx". */
  indicativePrice: number;
  /** Per-child price in INR. Falls back to indicativePrice when absent. */
  childPrice?: number;
  audience: Audience;
  durationHours: number;
  /** Optional caveat, e.g. "seasonal, Nov-May only". */
  note?: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  detail: string;
}

export interface PackageTier {
  id: string;
  name: string;
  days: number;
  nights: number;
  /** Headline "from" price, per person, LAND ONLY. Flights are never in this number. */
  fromPricePerPerson: number;
  blurb: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  /** Marks the tier we push hardest. Exactly one per destination. */
  recommended?: boolean;
}

export interface Season {
  label: SeasonLabel;
  /** 1 = January ... 12 = December */
  months: number[];
  multiplier: number;
  /** Shown on the destination page, e.g. "Perfect weather, highest prices". */
  note: string;
}

export interface VisaInfo {
  required: boolean;
  /** e.g. "UAE tourist e-Visa (30 days)" */
  type: string;
  /** e.g. "3-5 working days" */
  timeline: string;
  /** Per person, in INR. 0 when no visa is needed. */
  feeInr: number;
  documents: string[];
  /** Plain-language reassurance about who does what. */
  handledByUs: string;
  caveat?: string;
}

export interface CostSample {
  label: string;
  /** Rough INR equivalent. Displayed as a range when `toInr` is set. */
  fromInr: number;
  toInr?: number;
}

export interface DestinationPricing {
  /** Per person per night, twin sharing, land only, in a shoulder month. */
  baseLandPerPersonPerNight: number;
  /** Children are charged this fraction of the adult land rate. */
  childLandFactor: number;
  /** One-off per-person land costs (visa handling, arrival transfers, insurance). */
  fixedPerPersonInr: number;
  /** Indicative return economy airfare from a metro. NEVER folded into the headline. */
  indicativeFlight: { low: number; high: number; note: string };
  seasons: Season[];
}

export interface Destination {
  slug: string;
  name: string;
  country: string;
  /** Shown on cards and as the page subtitle. One line, no marketing froth. */
  tagline: string;
  heroImage: string;
  heroAlt: string;
  cardImage: string;
  /** Two or three sentences. Who this destination suits. */
  summary: string;
  bestMonthsSummary: string;
  flightTimeSummary: string;
  currency: { code: string; symbol: string; approxInrPerUnit: number };
  visa: VisaInfo;
  costSamples: CostSample[];
  costSamplesNote: string;
  tiers: PackageTier[];
  activities: Activity[];
  included: string[];
  notIncluded: string[];
  pricing: DestinationPricing;
  /** Path under /public. Served on inquiry submit, ungated. */
  brochure: string;
  /** Flip to true to launch a destination. Malaysia/Singapore/Vietnam sit at false. */
  enabled: boolean;
}
