import test from 'node:test';
import assert from 'node:assert/strict';
import { allocateNights, daysFromNights } from './itinerary.ts';

test('a single city takes every night', () => {
  assert.deepEqual(allocateNights(6, ['Dubai']), [{ city: 'Dubai', nights: 6 }]);
});

test('nights split evenly when they divide', () => {
  assert.deepEqual(allocateNights(6, ['Bangkok', 'Phuket']), [
    { city: 'Bangkok', nights: 3 },
    { city: 'Phuket', nights: 3 },
  ]);
});

test('the remainder goes to the later cities', () => {
  const out = allocateNights(8, ['Bangkok', 'Phuket', 'Krabi']);
  assert.equal(out.reduce((s, c) => s + c.nights, 0), 8);
  assert.deepEqual(out.map((c) => c.city), ['Bangkok', 'Phuket', 'Krabi']);
  assert.ok(out[2].nights >= out[0].nights);
});

test('every night is always allocated', () => {
  for (let n = 1; n <= 21; n++) {
    for (const cities of [['A'], ['A', 'B'], ['A', 'B', 'C'], ['A', 'B', 'C', 'D']]) {
      const out = allocateNights(n, cities);
      assert.equal(out.reduce((s, c) => s + c.nights, 0), n, `${n} nights across ${cities.length}`);
      assert.ok(out.every((c) => c.nights > 0), 'no city gets zero nights');
    }
  }
});

test('no cities means no allocation', () => {
  assert.deepEqual(allocateNights(5, []), []);
});

test('days are nights plus one', () => {
  assert.equal(daysFromNights(4), 5);
  assert.equal(daysFromNights(0), 2);
});

import { recommendFor } from './suggest.ts';
import { getDestination } from '../config/destinations.ts';

test('a short stop still gets at least two suggestions', () => {
  const uae = getDestination('uae')!;
  const dubai = uae.activities.filter((a) => a.city === 'Dubai');
  const party = { adults: 2, children: 1, seniors: 0, groupType: 'family' as const };
  for (const nights of [1, 2, 3]) {
    const picks = recommendFor(dubai, ['family'], party, nights);
    assert.ok(picks.length >= 2, `${nights} nights produced ${picks.length}`);
  }
});

test('a longer stop gets more suggestions than a short one', () => {
  const uae = getDestination('uae')!;
  const dubai = uae.activities.filter((a) => a.city === 'Dubai');
  const party = { adults: 2, children: 0, seniors: 0, groupType: 'couple' as const };
  const short = recommendFor(dubai, ['sightseeing'], party, 2);
  const long = recommendFor(dubai, ['sightseeing'], party, 9);
  assert.ok(long.length > short.length);
});

test('suggestions never exceed what the city actually offers', () => {
  const uae = getDestination('uae')!;
  const abuDhabi = uae.activities.filter((a) => a.city === 'Abu Dhabi');
  const party = { adults: 2, children: 0, seniors: 2, groupType: 'seniors' as const };
  const picks = recommendFor(abuDhabi, ['culture'], party, 30);
  assert.ok(picks.length <= abuDhabi.length);
});
