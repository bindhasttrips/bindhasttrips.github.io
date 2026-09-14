/** Indian digit grouping: 78,000 and 1,25,000. en-IN does the work. */
const inr = new Intl.NumberFormat('en-IN', {
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
});

export function formatInr(amount: number): string {
  return `₹${inr.format(Math.round(amount))}`;
}

/** "₹600 to ₹900". No dashes anywhere in customer-facing copy. */
export function formatInrRange(low: number, high?: number): string {
  if (high == null || high === low) return formatInr(low);
  return `${formatInr(low)} to ${formatInr(high)}`;
}

/** Rounds an estimate to a number a person would actually say out loud. */
export function roundEstimate(amount: number): number {
  if (amount >= 100000) return Math.round(amount / 5000) * 5000;
  if (amount >= 20000) return Math.round(amount / 1000) * 1000;
  return Math.round(amount / 500) * 500;
}
