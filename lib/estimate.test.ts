import test from 'node:test';
import assert from 'node:assert/strict';
import { estimateTrip, ESTIMATE_SPREAD } from './estimate.ts';
import { roundEstimate } from './format.ts';
import { getDestination } from '../config/destinations.ts';

const dubai = getDestination('dubai')!;
const thailand = getDestination('thailand')!;

const base = {
  destination: dubai,
  nights: 4,
  adults: 2,
  children: 0,
  activityIds: [] as string[],
  travelMonth: 4, // shoulder, multiplier 1.05
};

test('low bound is below high bound and both are positive', () => {
  const e = estimateTrip(base);
  assert.ok(e.land.low > 0);
  assert.ok(e.land.low < e.land.high);
  assert.ok(e.total.low < e.total.high);
});

test('land midpoint matches the rate card by hand', () => {
  // 8500 * 4 nights * 2 adults = 68000, plus 9500 fixed * 2 = 19000.
  // (68000 + 19000) * 1.05 shoulder = 91350. No activities.
  const e = estimateTrip(base);
  assert.equal(e.land.low, roundEstimate(91350 * (1 - ESTIMATE_SPREAD)));
  assert.equal(e.land.high, roundEstimate(91350 * (1 + ESTIMATE_SPREAD)));
});

test('peak season costs more than off season for the same trip', () => {
  const off = estimateTrip({ ...base, travelMonth: 7 });
  const peak = estimateTrip({ ...base, travelMonth: 12 });
  assert.ok(peak.land.low > off.land.low);
  assert.ok(peak.total.high > off.total.high);
});

test('children are charged less than adults for land', () => {
  const twoAdults = estimateTrip({ ...base, adults: 2, children: 0 });
  const adultPlusChild = estimateTrip({ ...base, adults: 1, children: 1 });
  assert.equal(twoAdults.travellers, adultPlusChild.travellers);
  assert.ok(adultPlusChild.land.low < twoAdults.land.low);
});

test('child activity pricing is applied where it differs', () => {
  // Desert safari: 3200 adult, 2600 child.
  const withActivity = estimateTrip({
    ...base,
    adults: 1,
    children: 1,
    activityIds: ['desert-safari'],
  });
  const without = estimateTrip({ ...base, adults: 1, children: 1 });
  assert.equal(withActivity.activityTotal, 3200 + 2600);
  assert.ok(withActivity.land.low > without.land.low);
});

test('activities scale with the number of travellers', () => {
  const one = estimateTrip({ ...base, adults: 1, activityIds: ['burj-khalifa'] });
  const three = estimateTrip({ ...base, adults: 3, activityIds: ['burj-khalifa'] });
  assert.equal(one.activityTotal, 3800);
  assert.equal(three.activityTotal, 3800 * 3);
});

test('flights scale per head and are reported separately from land', () => {
  const two = estimateTrip({ ...base, adults: 2 });
  assert.equal(two.flights.low, roundEstimate(18000 * 2));
  assert.equal(two.flights.high, roundEstimate(34000 * 2));
  // Flights must never be folded into the land number.
  assert.ok(two.land.high < two.total.high);
});

test('total is land plus flights', () => {
  const e = estimateTrip({ ...base, adults: 2, activityIds: ['desert-safari'] });
  assert.equal(e.total.low, roundEstimate(e.land.low + e.flights.low));
  assert.equal(e.total.high, roundEstimate(e.land.high + e.flights.high));
});

test('per person figures divide the total by the head count', () => {
  const e = estimateTrip({ ...base, adults: 2, children: 2 });
  assert.equal(e.travellers, 4);
  assert.equal(e.perPerson.low, roundEstimate(e.total.low / 4));
});

test('unknown activity ids are reported and not silently priced', () => {
  const e = estimateTrip({ ...base, activityIds: ['desert-safari', 'not-a-real-activity'] });
  assert.deepEqual(e.unknownActivityIds, ['not-a-real-activity']);
  assert.equal(e.activityTotal, 3200 * 2);
});

test('estimates are rounded to numbers a person would say out loud', () => {
  for (const month of [1, 5, 7, 11]) {
    const e = estimateTrip({ ...base, travelMonth: month, adults: 3, children: 1 });
    for (const n of [e.land.low, e.land.high, e.total.low, e.total.high]) {
      assert.equal(n % 1000, 0, `${n} is not a round figure`);
    }
  }
});

test('a Thailand trip prices lower than the same Dubai trip', () => {
  const d = estimateTrip({ ...base, destination: dubai, travelMonth: 6 });
  const t = estimateTrip({ ...base, destination: thailand, travelMonth: 6 });
  assert.ok(t.total.high < d.total.high);
});

test('degenerate inputs are clamped rather than producing nonsense', () => {
  const e = estimateTrip({ ...base, nights: 0, adults: 0, children: -3 });
  assert.equal(e.travellers, 1);
  assert.ok(e.land.low > 0);
});

test('seniors are priced as adults but counted separately', () => {
  const twoAdults = estimateTrip({ ...base, adults: 2, children: 0 });
  const adultPlusSenior = estimateTrip({ ...base, adults: 1, children: 0, seniors: 1 });
  assert.equal(adultPlusSenior.travellers, 2);
  assert.equal(adultPlusSenior.fullFareTravellers, 2);
  assert.equal(adultPlusSenior.total.low, twoAdults.total.low);
  assert.equal(adultPlusSenior.total.high, twoAdults.total.high);
});

test('a solo senior still prices as one traveller', () => {
  const e = estimateTrip({ ...base, adults: 0, children: 0, seniors: 1 });
  assert.equal(e.travellers, 1);
  assert.equal(e.fullFareTravellers, 1);
  assert.ok(e.total.low > 0);
});

test('free activities add nothing to the total', () => {
  const withFree = estimateTrip({ ...base, activityIds: ['la-mer-beach'] });
  const without = estimateTrip({ ...base, activityIds: [] });
  assert.equal(withFree.activityTotal, 0);
  assert.equal(withFree.total.low, without.total.low);
});

test('a more expensive stay raises the land cost but not the flights', () => {
  const budget = estimateTrip({ ...base, stayMultiplier: 0.78 });
  const luxury = estimateTrip({ ...base, stayMultiplier: 1.45 });
  assert.ok(luxury.land.low > budget.land.low);
  assert.equal(luxury.flights.low, budget.flights.low);
  assert.equal(luxury.flights.high, budget.flights.high);
});

test('stay choice does not change activity pricing', () => {
  const a = estimateTrip({ ...base, stayMultiplier: 0.78, activityIds: ['desert-safari'] });
  const b = estimateTrip({ ...base, stayMultiplier: 1.45, activityIds: ['desert-safari'] });
  assert.equal(a.activityTotal, b.activityTotal);
});

test('nights are free choice, and more nights cost more', () => {
  const short = estimateTrip({ ...base, nights: 3 });
  const long = estimateTrip({ ...base, nights: 11 });
  assert.ok(long.land.low > short.land.low);
});
