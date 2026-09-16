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
