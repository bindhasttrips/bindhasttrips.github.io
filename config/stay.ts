/**
 * Accommodation and budget options. The multipliers themselves live in
 * config/prices.ts with the rest of the rate card.
 */
import { STAY_MULTIPLIERS } from './prices.ts';
export interface StayType {
  id: string;
  label: string;
  hint: string;
  multiplier: number;
}

const STAY_OPTIONS: Omit<StayType, 'multiplier'>[] = [
  { id: 'hotel3', label: 'Hotel, 3 star', hint: 'Clean and central, no frills' },
  { id: 'hotel4', label: 'Hotel, 4 star', hint: 'What most people book' },
  { id: 'hotel5', label: 'Hotel, 5 star', hint: 'Resorts and known brands' },
  { id: 'apartment', label: 'Apartment or Airbnb', hint: 'More space, own kitchen' },
  { id: 'value', label: 'Whatever gives the best value', hint: 'We pick and explain why' },
];

export const STAY_TYPES: StayType[] = STAY_OPTIONS.map((s) => ({
  ...s,
  multiplier: STAY_MULTIPLIERS[s.id] ?? 1,
}));

export const NIGHTLY_BUDGETS = [
  'Under 5,000 per room per night',
  '5,000 to 8,000 per room per night',
  '8,000 to 12,000 per room per night',
  'Over 12,000 per room per night',
  'Not sure, advise me',
];

export const TOTAL_BUDGETS = [
  'Under 60,000 per person',
  '60,000 to 1,00,000 per person',
  '1,00,000 to 1,50,000 per person',
  'Over 1,50,000 per person',
  'Not sure yet',
];

export function stayById(id: string): StayType {
  return STAY_TYPES.find((s) => s.id === id) ?? STAY_TYPES[1];
}
