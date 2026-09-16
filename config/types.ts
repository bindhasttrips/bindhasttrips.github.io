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
  /** One line, shown on the card. */
  description: string;
  /** Two or three sentences, shown when the card is expanded. */
  detail: string;
  /**
   * Per adult, in INR. null means not priced yet: it is excluded from the
   * estimate and shown as "quoted separately" rather than faked as zero.
   * Set a number here and it starts counting immediately.
   */
  indicativePrice: number | null;
  /** Per child. Falls back to indicativePrice when absent. */
  childPrice?: number | null;
  audience: Audience;
  durationHours: number;
  tags: TripStyle[];
  /** Which group types this suits. Drives the recommended itinerary. */
  suits: GroupType[];
  /** City or area within the destination. Drives grouping in the builder. */
  city: string;
  intensity: Intensity;
  /** Under /public/images/activities. Falls back to a generated tile. */
  image?: string;
  /** A specific YouTube URL. Only ever a real one you have checked. */
  videoUrl?: string;
  /** Operator or booking page. Only ever a real one. */
  infoUrl?: string;
  note?: string;
}

/** Who they are travelling with. The strongest signal for what to suggest. */
export type GroupType =
  | 'couple'
  | 'family'
  | 'friends'
  | 'seniors'
  | 'solo';

export const GROUP_TYPES: { id: GroupType; label: string; hint: string }[] = [
  { id: 'couple', label: 'A couple', hint: 'Two of you, honeymoon or otherwise' },
  { id: 'family', label: 'Family with children', hint: 'Pace and pricing change a lot' },
  { id: 'friends', label: 'A group of friends', hint: 'Nightlife and activities' },
  { id: 'seniors', label: 'With parents or grandparents', hint: 'Gentler days, less walking' },
  { id: 'solo', label: 'On my own', hint: 'We keep an eye on you' },
];

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
  /** Ordered, for grouping the activity catalogue and allocating nights. */
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
