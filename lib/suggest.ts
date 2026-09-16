import type { Activity, GroupType, TripStyle } from '../config/types.ts';

export interface Party {
  adults: number;
  children: number;
  seniors: number;
  /** Who they are travelling with. The strongest single signal. */
  groupType?: GroupType;
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

  // Who they are travelling with outweighs the style chips, because it is a
  // harder fact: a family with a four year old cannot take the 1,260 steps.
  if (party.groupType && activity.suits.includes(party.groupType)) score += 14;
  if (party.groupType && !activity.suits.includes(party.groupType)) score -= 10;

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

/** True when it suits the group they said they are travelling with. */
export function suitsGroup(activity: Activity, groupType?: GroupType): boolean {
  if (!groupType) return false;
  return activity.suits.includes(groupType);
}

/**
 * The itinerary we would build for them if they asked us to. Used for the
 * "I have no idea, plan it for me" path and for the recommend shortcut.
 */
export function recommendFor(
  activities: Activity[],
  styles: TripStyle[],
  party: Party,
  nights: number,
): Activity[] {
  // Roughly one significant activity per day, leaving space to do nothing.
  const target = Math.max(1, Math.min(activities.length, Math.round(nights * 0.7)));
  const ranked = sortForParty(activities, styles, party);
  const chosen: Activity[] = [];
  let hours = 0;
  for (const a of ranked) {
    if (chosen.length >= target) break;
    // Do not stack three all day trips on a four night stay.
    if (a.durationHours >= 8 && hours >= nights * 4) continue;
    chosen.push(a);
    hours += a.durationHours;
  }
  return chosen;
}
