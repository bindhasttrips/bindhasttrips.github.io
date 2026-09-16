/**
 * Submits an enquiry to the Google Apps Script web app.
 *
 * Apps Script does not return usable CORS headers on a preflighted request,
 * so a JSON POST from this origin would fail. Sending the body as a plain
 * string with Content-Type text/plain keeps it a CORS simple request and
 * avoids the preflight entirely. The script parses e.postData.contents.
 */
export interface InquiryPayload {
  name: string;
  phone: string;
  email: string;
  destination: string;
  travelMonth: string;
  datesFlexible: boolean;
  nights: number;
  days: number;
  adults: number;
  children: number;
  childAges: string;
  seniors: number;
  cities: string[];
  stayType: string;
  nightlyBudget: string;
  /** The trip style chips. The fastest read on who this group is. */
  styles: string[];
  activities: string[];
  /** City by city, with nights and chosen activities, as one readable line. */
  itinerary: string;
  activityTotal: number;
  budgetBand: string;
  estimateLow: number;
  estimateHigh: number;
  notes: string;
  source: string;
}

export const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL || '';

export type SubmitResult =
  | { status: 'sent' }
  | { status: 'not-configured' }
  | { status: 'failed'; message: string };

export async function submitInquiry(payload: InquiryPayload): Promise<SubmitResult> {
  if (!APPS_SCRIPT_URL) return { status: 'not-configured' };
  try {
    const res = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      // Deliberately text/plain. See the note above before changing this.
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
      redirect: 'follow',
    });
    if (!res.ok) return { status: 'failed', message: `Server returned ${res.status}` };
    return { status: 'sent' };
  } catch (err) {
    return { status: 'failed', message: err instanceof Error ? err.message : 'Network error' };
  }
}

/** Accepts 9876543210, +91 9876543210, 09876543210 and similar. */
export function normaliseIndianMobile(raw: string): string | null {
  const digits = raw.replace(/\D/g, '');
  const trimmed = digits.startsWith('91') && digits.length === 12
    ? digits.slice(2)
    : digits.startsWith('0') && digits.length === 11
      ? digits.slice(1)
      : digits;
  return /^[6-9]\d{9}$/.test(trimmed) ? trimmed : null;
}
