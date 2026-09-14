/**
 * Indian digit grouping: 78,000 and 1,25,000 — not 125,000.
 * en-IN is the whole trick; do not hand-roll this.
 */
const inr = new Intl.NumberFormat('en-IN', {
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
});

export function formatInr(amount: number): string {
  return `₹${inr.format(Math.round(amount))}`;
}

/** "₹600 – ₹900" or just "₹35" when there is no upper bound. */
export function formatInrRange(low: number, high?: number): string {
  if (high == null || high === low) return formatInr(low);
  return `${formatInr(low)} – ${formatInr(high)}`;
}
