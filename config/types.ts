/**
 * The destination system is data driven. Adding a destination means adding one
 * object to config/destinations.ts. No new pages, no new components.
 */

export type Audience = 'adult' | 'kids' | 'both';
export type SeasonLabel = 'peak' | 'shoulder' | 'off';

/** Drives which activities are suggested. The whole customisation pitch. */
export type TripStyle =
  | 'nightlife'
  | 'family'
  | 'relaxed'
  | 'adventure'
  | 'culture'
  | 'food'
  | 'shopping'
  | 'sightseeing';

export const TRIP_STYLES: { id: TripStyle; label: string; hint: string }[] = [
  { id: 'sightseeing', label: 'Sightseeing', hint: 'The landmarks and the views' },
  { id: 'family', label: 'Family', hint: 'Works with children' },
  { id: 'relaxed', label: 'Relaxed', hint: 'Beaches, spas, slow days' },
  { id: 'nightlife', label: 'Nightlife', hint: 'Bars, clubs, shows' },
  { id: 'adventure', label: 'Adventure', hint: 'Water sports, heights, activity' },
  { id: 'culture', label: 'Culture', hint: 'Temples, museums, old towns' },
  { id: 'food', label: 'Food', hint: 'Markets, tours, cooking' },
  { id: 'shopping', label: 'Shopping', hint: 'Malls, souks, markets' },
];

/** Rough physical demand. Used to steer suggestions, never to block a choice. */
export type Intensity = 'low' | 'moderate' | 'high';

export interface Activity {
  id: string;
  name: string;
  description: string;
  /** Per adult, in INR. Zero means there is no ticket cost. */
  indicativePrice: number;
  /** Per child. Falls back to indicativePrice when absent. */
  childPrice?: number;
  audience: Audience;
  durationHours: number;
  tags: TripStyle[];
  /** City or area within the destination. Drives grouping in the builder. */
  city: string;
  intensity: Intensity;
  /** Optional operator or booking page. Left empty until real URLs are supplied. */
  infoUrl?: string;
  /** Optional video. Same rule: only real URLs. */
  videoUrl?: string;
  note?: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  detail: string;
  /** Pre-selected suggestions for this day. Every one of them is removable. */
  suggestedActivityIds?: string[];
  city?: string;
}

export interface PackageTier {
  id: string;
  name: string;
  days: number;
  nights: number;
  /** Per person, land only. Flights are never inside this number. */
  fromPricePerPerson: number;
  blurb: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  recommended?: boolean;
}

export interface Season {
  label: SeasonLabel;
  /** 1 = January through 12 = December. */
  months: number[];
  multiplier: number;
  note: string;
}

export interface VisaInfo {
  required: boolean;
  type: string;
  timeline: string;
  feeInr: number;
  documents: string[];
  handledByUs: string;
  caveat?: string;
}

export interface CostSample {
  label: string;
  fromInr: number;
  toInr?: number;
}

export interface DestinationPricing {
  /** Per person per night, twin sharing, land only, in a shoulder month. */
  baseLandPerPersonPerNight: number;
  childLandFactor: number;
  /** Visa handling, arrival transfers, insurance. Per head. */
  fixedPerPersonInr: number;
  /** Return economy airfare. Never folded into the land number. */
  indicativeFlight: { low: number; high: number; note: string };
  seasons: Season[];
}

export interface Destination {
  slug: string;
  name: string;
  country: string;
  tagline: string;
  heroImage: string;
  heroAlt: string;
  cardImage: string;
  summary: string;
  bestMonthsSummary: string;
  flightTimeSummary: string;
  /** Ordered, for grouping the activity catalogue. */
  cities: string[];
  currency: { code: string; symbol: string; approxInrPerUnit: number };
  visa: VisaInfo;
  costSamples: CostSample[];
  costSamplesNote: string;
  tiers: PackageTier[];
  activities: Activity[];
  included: string[];
  notIncluded: string[];
  pricing: DestinationPricing;
  brochure: string;
  enabled: boolean;
}
