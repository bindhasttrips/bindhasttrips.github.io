/**
 * Splits a free choice of nights across the cities the customer picked.
 * Later cities get the remainder, because on these routes the beach stop is
 * usually last and is where people want the extra night.
 */
export function allocateNights(
  totalNights: number,
  cities: string[],
): { city: string; nights: number }[] {
  const n = Math.max(1, Math.round(totalNights));
  if (cities.length === 0) return [];
  if (cities.length === 1) return [{ city: cities[0], nights: n }];

  const base = Math.floor(n / cities.length);
  let remainder = n - base * cities.length;

  // Hand the spare nights out from the back.
  const out = cities.map((city) => ({ city, nights: base }));
  for (let i = out.length - 1; remainder > 0; i--, remainder--) {
    out[((i % out.length) + out.length) % out.length].nights += 1;
  }
  return out.filter((c) => c.nights > 0);
}

/** Days is always nights + 1: arrival and departure both count. */
export function daysFromNights(nights: number): number {
  return Math.max(1, Math.round(nights)) + 1;
}
