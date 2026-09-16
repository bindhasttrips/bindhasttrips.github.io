/**
 * We do not store invented YouTube ids. A search URL always resolves, never
 * 404s, and never rots when a channel deletes a video. If you paste a real
 * `videoUrl` onto an activity, that wins.
 */
import type { Activity, Destination } from '../config/types.ts';

export function videoLink(activity: Activity, destination: Destination): string {
  if (activity.videoUrl) return activity.videoUrl;
  const q = `${activity.name} ${activity.city} ${destination.country}`;
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;
}

export function hasRealVideo(activity: Activity): boolean {
  return Boolean(activity.videoUrl);
}

/**
 * Deterministic placeholder tile until a real photo is dropped into
 * /public/images/activities. Derived from the id so a given activity always
 * gets the same colours.
 */
export function placeholderTile(activity: Activity): { from: string; to: string; initials: string } {
  let hash = 0;
  for (let i = 0; i < activity.id.length; i++) {
    hash = (hash * 31 + activity.id.charCodeAt(i)) >>> 0;
  }
  const hue = hash % 360;
  const initials = activity.name
    .split(/\s+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');
  return {
    from: `hsl(${hue} 45% 62%)`,
    to: `hsl(${(hue + 38) % 360} 50% 44%)`,
    initials: initials || '?',
  };
}
