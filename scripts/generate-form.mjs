/**
 * Generates google-form/Bindhast.gs from config/destinations.ts.
 *
 * The rate cards live in ONE place. Change a price in the config, run
 * `npm run generate:form`, repaste the file, rerun buildBindhastForm().
 * Never hand edit the generated file.
 */
import fs from 'node:fs';
import { destinations } from '../config/destinations.ts';

function optionLabel(a) {
  const price =
    a.indicativePrice === 0
      ? 'no ticket cost'
      : a.childPrice && a.childPrice !== a.indicativePrice
        ? `₹${a.indicativePrice.toLocaleString('en-IN')} adult / ₹${a.childPrice.toLocaleString('en-IN')} child`
        : `₹${a.indicativePrice.toLocaleString('en-IN')} per person`;
  return `${a.name} — ${price} — about ${a.durationHours}h`;
}

const data = destinations
  .filter((d) => d.enabled)
  .map((d) => ({
    slug: d.slug,
    name: d.name,
    cities: d.cities,
    bestMonths: d.bestMonthsSummary,
    flightTime: d.flightTimeSummary,
    visaType: d.visa.type,
    visaTimeline: d.visa.timeline,
    visaFee: d.visa.feeInr,
    costNote: d.costSamplesNote,
    included: d.included,
    notIncluded: d.notIncluded,
    pricing: {
      perNight: d.pricing.baseLandPerPersonPerNight,
      childFactor: d.pricing.childLandFactor,
      fixed: d.pricing.fixedPerPersonInr,
      flightLow: d.pricing.indicativeFlight.low,
      flightHigh: d.pricing.indicativeFlight.high,
      seasons: d.pricing.seasons.map((s) => ({
        label: s.label,
        months: s.months,
        multiplier: s.multiplier,
        note: s.note,
      })),
    },
    tiers: d.tiers.map((t) => ({
      id: t.id,
      name: t.name,
      days: t.days,
      nights: t.nights,
      from: t.fromPricePerPerson,
      blurb: t.blurb,
      itinerary: t.itinerary.map((day) => ({
        day: day.day,
        title: day.title,
        detail: day.detail,
        city: day.city || '',
        suggested: day.suggestedActivityIds || [],
      })),
    })),
    activities: d.activities.map((a) => ({
      id: a.id,
      name: a.name,
      label: optionLabel(a),
      description: a.description,
      adult: a.indicativePrice,
      child: a.childPrice != null ? a.childPrice : a.indicativePrice,
      hours: a.durationHours,
      city: a.city,
      audience: a.audience,
      intensity: a.intensity,
      tags: a.tags,
      videoUrl: a.videoUrl || '',
      infoUrl: a.infoUrl || '',
      note: a.note || '',
    })),
  }));

const header = `/**
 * GENERATED FILE. Do not edit by hand.
 * Source: config/destinations.ts, via scripts/generate-form.mjs.
 * Regenerate with: npm run generate:form
 *
 * Paste this whole file into a Google Apps Script project, then:
 *   1. Run buildBindhastForm() once. It creates the form and prints its URLs.
 *   2. Follow google-form/SETUP.md to attach the submit trigger.
 */

var NOTIFY_EMAIL = 'deepghuge09@gmail.com'; // TODO: where lead alerts should go
var BUSINESS_NAME = 'Bindhast Trips';
var REPLY_PROMISE = 'We will call you with an exact quote within 24 hours.';

/** Half width of the quoted range around the midpoint. Tune here. */
var ESTIMATE_SPREAD = 0.12;

var DATA = ${JSON.stringify(data, null, 2)};
`;

fs.writeFileSync('google-form/_data.gs.part', header);
console.log('wrote google-form/_data.gs.part');
console.log('destinations:', data.length);
console.log('activities:', data.map((d) => `${d.name}=${d.activities.length}`).join(', '));
