export type StageState = 'pending' | 'in_progress' | 'done' | 'blocked';

export interface TrackerStage {
  key: string;
  label: string;
  state: StageState;
}

export interface TrackerData {
  ok: true;
  firstName: string;
  destination: string;
  cities: string;
  travelMonth: string;
  days: number | string;
  travellers: number | string;
  status: string;
  paymentStatus: string;
  stages: TrackerStage[];
  lastUpdated: string;
  canEdit: boolean;
  editToken: string;
}

export type TrackerResult = TrackerData | { ok: false; error: string };

import { APPS_SCRIPT_URL } from './inquiry';

export async function fetchTracker(token: string): Promise<TrackerResult> {
  if (!APPS_SCRIPT_URL) return { ok: false, error: 'not-configured' };
  // A plain GET is already a CORS simple request, so no preflight and no
  // Apps Script CORS problem.
  const res = await fetch(`${APPS_SCRIPT_URL}?t=${encodeURIComponent(token)}`, {
    redirect: 'follow',
  });
  if (!res.ok) return { ok: false, error: 'unreachable' };
  return (await res.json()) as TrackerResult;
}

export function humanDate(iso: string): string {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleString('en-IN', {
    day: 'numeric', month: 'short', year: 'numeric',
    hour: 'numeric', minute: '2-digit',
  });
}
