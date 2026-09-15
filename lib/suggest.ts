import type { Activity, TripStyle } from '../config/types.ts';

export interface Party {
  adults: number;
  children: number;
  seniors: number;
}

/**
 * Ranks an activity for a given party and set of chosen styles.
 * This only changes the ORDER things are offered in. Nothing is ever hidden
 * or blocked: the whole point is that the customer decides.
 */
export function scoreActivity(
  activity: Activity,
  styles: TripStyle[],
  party: Party,
): number {
  let score = 0;

  for (const tag of activity.tags) {
    if (styles.includes(tag)) score += 10;
  }

  const hasChildren = party.children > 0;
  const hasSeniors = party.seniors > 0;
  const adultsOnly = party.children === 0;

  if (hasChildren) {
    if (activity.audience === 'kids') score += 6;
    if (activity.tags.includes('family')) score += 4;
    // Adults-only activities are still offered, just lower down.
    if (activity.audience === 'adult') score -= 8;
  }

  if (hasSeniors) {
    if (activity.intensity === 'low') score += 4;
    if (activity.intensity === 'high') score -= 6;
  }

  if (adultsOnly && activity.audience === 'kids') score -= 4;

  // A tie breaker so the order is stable rather than arbitrary.
  score += Math.max(0, 3 - activity.durationHours / 4);

  return score;
}

export function sortForParty(
  activities: Activity[],
  styles: TripStyle[],
  party: Party,
): Activity[] {
  return [...activities].sort((a, b) => {
    const diff = scoreActivity(b, styles, party) - scoreActivity(a, styles, party);
    return diff !== 0 ? diff : a.name.localeCompare(b.name);
  });
}

/** True when the activity matches at least one style the customer chose. */
export function matchesStyles(activity: Activity, styles: TripStyle[]): boolean {
  if (styles.length === 0) return false;
  return activity.tags.some((t) => styles.includes(t));
}
