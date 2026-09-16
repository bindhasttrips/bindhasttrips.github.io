import type { Destination, Season } from '../config/types.ts';
import { seasonForMonth } from '../config/destinations.ts';
import { roundEstimate } from './format.ts';

/**
 * Half-width of the quoted range around the computed midpoint.
 * Tune this one constant to widen or tighten every estimate on the site.
 * The range is the honesty mechanism: it protects margin without inflating
 * the number the customer sees. Do not add a hidden buffer on top of it.
 */
export const ESTIMATE_SPREAD = 0.12;

export interface Range {
  low: number;
  high: number;
}

export interface EstimateInput {
  destination: Destination;
  nights: number;
  adults: number;
  children: number;
  /** Priced as adults. Tracked separately because it changes what we suggest. */
  seniors?: number;
  /** From config/stay.ts. Scales the land rate. Defaults to 4 star. */
  stayMultiplier?: number;
  activityIds: string[];
  /** 1 = January through 12 = December. */
  travelMonth: number;
}

export interface Estimate {
  travellers: number;
  /** Adults plus seniors, the head count charged at the adult rate. */
  fullFareTravellers: number;
  season: Season;
  /** Hotels, transfers, visa, activities. Excludes airfare. */
  land: Range;
  /** Airfare. Quoted as an estimate because fares move with the date. */
  flights: Range;
  /** land + flights. */
  total: Range;
  perPerson: Range;
  activityTotal: number;
  unknownActivityIds: string[];
}

function spread(midpoint: number): Range {
  return {
    low: roundEstimate(midpoint * (1 - ESTIMATE_SPREAD)),
    high: roundEstimate(midpoint * (1 + ESTIMATE_SPREAD)),
  };
}

export function estimateTrip(input: EstimateInput): Estimate {
  const { destination, travelMonth } = input;
  const pricing = destination.pricing;

  const nights = Math.max(1, Math.round(input.nights));
  const seniors = Math.max(0, Math.round(input.seniors ?? 0));
  // Seniors pay the adult rate. They are counted separately only so that the
  // builder can bias its suggestions and so the sheet records the real mix.
  const adults = Math.max(seniors > 0 ? 0 : 1, Math.round(input.adults)) + seniors;
  const children = Math.max(0, Math.round(input.children));
  const travellers = Math.max(1, adults + children);

  const season = seasonForMonth(destination, travelMonth);

  // Accommodation, transfers and ground handling, per person per night.
  const adultNights = pricing.baseLandPerPersonPerNight * nights * adults;
  const childNights =
    pricing.baseLandPerPersonPerNight * nights * children * pricing.childLandFactor;

  // Visa handling, arrival transfers, insurance. Charged per head.
  const fixed = pricing.fixedPerPersonInr * travellers;

  // Activities. Children are charged childPrice where one is set.
  const unknownActivityIds: string[] = [];
  let activityTotal = 0;
  for (const id of input.activityIds) {
    const activity = destination.activities.find((a) => a.id === id);
    if (!activity) {
      unknownActivityIds.push(id);
      continue;
    }
    activityTotal += activity.indicativePrice * adults;
    activityTotal += (activity.childPrice ?? activity.indicativePrice) * children;
  }

  // Season and accommodation both move hotel and ground cost. Neither moves
  // activity prices, which are set by the operator and hold across the year.
  const stay = input.stayMultiplier ?? 1;
  const landMid =
    (adultNights + childNights) * season.multiplier * stay +
    fixed * season.multiplier +
    activityTotal;
  const land = spread(landMid);

  // Airfare scales per head and is not affected by the land season multiplier.
  const flights: Range = {
    low: roundEstimate(pricing.indicativeFlight.low * travellers),
    high: roundEstimate(pricing.indicativeFlight.high * travellers),
  };

  const total: Range = {
    low: roundEstimate(land.low + flights.low),
    high: roundEstimate(land.high + flights.high),
  };

  return {
    travellers,
    fullFareTravellers: adults,
    season,
    land,
    flights,
    total,
    perPerson: {
      low: roundEstimate(total.low / travellers),
      high: roundEstimate(total.high / travellers),
    },
    activityTotal,
    unknownActivityIds,
  };
}
