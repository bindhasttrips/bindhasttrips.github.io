import { APPS_SCRIPT_URL } from './inquiry';

export interface Stage {
  label: string;
  state: 'pending' | 'in_progress' | 'done' | 'blocked';
}

export interface Booking {
  row: number;
  timestamp: string;
  token: string;
  status: string;
  name: string;
  phone: string;
  email: string;
  flyingFrom: string;
  destination: string;
  cities: string;
  groupType: string;
  travelMonth: string;
  datesFlexible: string;
  nights: number | string;
  days: number | string;
  adults: number | string;
  children: number | string;
  seniors: number | string;
  travellers: number | string;
  styles: string;
  stayType: string;
  budget: string;
  activityCount: number | string;
  activities: string;
  helpCities: string;
  itinerary: string;
  estimateLow: number | string;
  estimateHigh: number | string;
  notes: string;
  quotedTotal: number | string;
  amountPaid: number | string;
  paymentLink: string;
  paymentStatus: string;
  stages: Stage[];
  lastUpdated: string;
  allowEdit: boolean;
  ownerNotes: string;
}

export interface CustomRequest {
  row: number;
  timestamp: string;
  status: string;
  type: string;
  name: string;
  phone: string;
  email: string;
  requirement: string;
}

export interface AdminData {
  ok: true;
  sheetUrl: string;
  whatsappNumber: string;
  fetchedAt: string;
  bookings: Booking[];
  custom: CustomRequest[];
}

export type AdminResult = AdminData | { ok: false; error: string };

/**
 * Apps Script serialises executions per user and cold starts are slow, so a
 * first load of twenty seconds is normal rather than a failure. The timeout
 * is generous for that reason, and the caller is told which of the two
 * things went wrong instead of being given one vague message.
 */
export async function fetchAdmin(key: string): Promise<AdminResult> {
  if (!APPS_SCRIPT_URL) return { ok: false, error: 'not-configured' };
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 60000);
  try {
    const res = await fetch(`${APPS_SCRIPT_URL}?admin=${encodeURIComponent(key)}`, {
      redirect: 'follow',
      signal: controller.signal,
    });
    if (!res.ok) return { ok: false, error: 'unreachable' };
    const body = (await res.json()) as AdminResult;
    // A reply that came back but said no is a rejected key, not a dead script.
    if (!body.ok) return { ok: false, error: 'rejected' };
    return body;
  } catch (err) {
    const aborted = err instanceof DOMException && err.name === 'AbortError';
    return { ok: false, error: aborted ? 'timeout' : 'unreachable' };
  } finally {
    clearTimeout(timer);
  }
}

export const STATUS_ORDER = [
  'new', 'contacted', 'quoted', 'deposit sent', 'booked', 'travelling', 'completed', 'lost',
];

/** Rows needing action first: a new enquiry outranks a completed trip. */
export function urgency(b: Booking): number {
  const i = STATUS_ORDER.indexOf(String(b.status).toLowerCase());
  return i === -1 ? 0 : i;
}

export function num(v: number | string): number {
  const n = typeof v === 'number' ? v : parseFloat(String(v).replace(/[^\d.-]/g, ''));
  return Number.isFinite(n) ? n : 0;
}

export function daysAgo(iso: string): number | null {
  if (!iso) return null;
  const t = new Date(iso).getTime();
  if (Number.isNaN(t)) return null;
  return Math.floor((Date.now() - t) / 86400000);
}

export type Patch = Record<string, string | number | boolean>;

/**
 * Writes a change back to the sheet. The script only accepts an allowlist of
 * columns, so a bad field here is ignored rather than corrupting a row.
 */
export async function updateBooking(
  key: string,
  row: number,
  patch: Patch,
  sheet: 'bookings' | 'custom' = 'bookings',
): Promise<{ ok: boolean; error?: string }> {
  if (!APPS_SCRIPT_URL) return { ok: false, error: 'not-configured' };
  try {
    const res = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      // text/plain keeps this a CORS simple request, so no preflight.
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ action: 'admin-update', key, row, patch, sheet }),
      redirect: 'follow',
    });
    if (!res.ok) return { ok: false, error: `server ${res.status}` };
    const body = (await res.json()) as { ok?: boolean };
    return { ok: Boolean(body?.ok) };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : 'network' };
  }
}

export const STATUSES = [
  'new', 'contacted', 'quoted', 'deposit sent', 'booked', 'travelling', 'completed', 'lost',
];

export const PAYMENT_STATUSES = [
  'not started', 'link sent', 'deposit paid', 'part paid', 'paid in full', 'refunded',
];

export const STAGE_FIELDS = [
  ['stage_payment', 'Payment'],
  ['stage_visa_submitted', 'Visa sent'],
  ['stage_visa_approved', 'Visa done'],
  ['stage_flights', 'Flights'],
  ['stage_hotels', 'Hotels'],
  ['stage_vouchers', 'Vouchers'],
] as const;

export const STAGE_STATES = ['pending', 'in_progress', 'done', 'blocked'] as const;
