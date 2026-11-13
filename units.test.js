// Tests for units.js. Run them with: node --test
// You don't need to change this file.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { toMilliliters } from './units.js';

test('problem 1: toMilliliters converts cups, tbsp, tsp and ml', () => {
  const cases = [[1, 'cups', 240], [0.5, 'cups', 120], [2, 'tbsp', 30], [1.5, 'tsp', 7.5], [250, 'ml', 250]];
  for (const [amount, unit, expected] of cases) {
    const actual = toMilliliters(amount, unit);
    assert.equal(actual, expected, `toMilliliters(${amount}, "${unit}") should be ${expected} ml, but it gave ${actual}.`);
  }
});

test('problem 1: toMilliliters throws an Error that names a unit it cannot convert', () => {
  for (const unit of ['pinch', 'handful']) {
    assert.throws(() => toMilliliters(1, unit), (error) => {
      assert.ok(error instanceof Error, `toMilliliters(1, "${unit}") should throw an Error, but it threw ${String(error)}.`);
      assert.ok(error.message.includes(unit),
        `The error for "${unit}" should name the unit, so the cook knows what to fix. Its message was: ${error.message}`);
      return true;
    }, `toMilliliters(1, "${unit}") should throw an Error: "${unit}" isn't a unit it can convert.`);
  }
});
