/**
 * Submits an enquiry to the Google Apps Script web app.
 *
 * Apps Script does not return usable CORS headers on a preflighted request,
 * so a JSON POST from this origin would fail. Sending the body as a plain
 * string with Content-Type text/plain keeps it a CORS simple request and
 * avoids the preflight entirely. The script parses e.postData.contents.
 */
/** Sent when an existing customer edits their own plan. */
export interface EditablePlan {
  ok: boolean;
  error?: string;
  firstName?: string;
  token?: string;
  name?: string;
  phone?: string;
  email?: string;
  flyingFrom?: string;
  destination?: string;
  cities?: string[];
  groupType?: string;
  travelMonth?: string;
  datesFlexible?: boolean;
  nights?: number;
  adults?: number;
  children?: number;
  childAges?: string;
  seniors?: number;
  styles?: string[];
  stayType?: string;
  nightlyBudget?: string;
  budgetBand?: string;
  activityIds?: string[];
  helpCities?: string[];
  notes?: string;
}

export async function fetchEditablePlan(editToken: string): Promise<EditablePlan> {
  if (!APPS_SCRIPT_URL) return { ok: false, error: 'not-configured' };
  try {
    const res = await fetch(`${APPS_SCRIPT_URL}?e=${encodeURIComponent(editToken)}`, {
      redirect: 'follow',
    });
    if (!res.ok) return { ok: false, error: 'unreachable' };
    return (await res.json()) as EditablePlan;
  } catch {
    return { ok: false, error: 'unreachable' };
  }
}

export interface InquiryPayload {
  /** Present only when an existing enquiry is being changed. */
  action?: 'update';
  editToken?: string;
  name: string;
  phone: string;
  email: string;
  /** Departure city. Fares move a lot with this. */
  flyingFrom: string;
  destination: string;
  groupType: string;
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
  styles: string[];
  activities: string[];
  /** Stable ids, so an edit round trips exactly. */
  activityIds: string[];
  /** Cities where they said they have no idea and want us to plan it. */
  helpCities: string[];
  itinerary: string;
  activityTotal: number;
  unpricedActivities: number;
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
