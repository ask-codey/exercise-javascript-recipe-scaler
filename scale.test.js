// Tests for scale.js. Run them with: node --test
// You don't need to change this file.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { ServingsError, checkServings, scaleIngredients, toMetric } from './scale.js';

const pancakes = () => [
  { name: 'flour', amount: 2, unit: 'cups' },
  { name: 'milk', amount: 1.5, unit: 'cups' },
  { name: 'eggs', amount: 2, unit: 'whole' },
  { name: 'salt', amount: 0.5, unit: 'tsp' },
];

// Checks that fn throws a ServingsError whose message shows the bad value.
function throwsServingsError(fn, call, value) {
  assert.throws(fn, (error) => {
    assert.ok(error instanceof ServingsError, `${call} should throw a ServingsError, but it threw ${String(error)}.`);
    assert.ok(error.message.includes(String(value)),
      `The message for ${call} should show the value that came in (${String(value)}). Its message was: ${error.message}`);
    return true;
  }, `${call} should throw a ServingsError, but it didn't throw anything.`);
}

test('problem 0: scale.js imports what it needs from units.js', () => {
  const source = readFileSync(new URL('./scale.js', import.meta.url), 'utf8');
  assert.match(source, /^\s*import\s*\{[^}]*\}\s*from\s*["']\.\/units\.js["']/m,
    'Add an import line at the top of scale.js, such as: import { round } from "./units.js";');
});

test('problem 2: ServingsError is an Error named ServingsError that keeps its message', () => {
  const error = new ServingsError('Servings must be a whole number above 0, but got -2.');
  assert.ok(error instanceof Error, 'ServingsError should extend Error.');
  assert.equal(error.name, 'ServingsError', 'Give the error its own name: set this.name to "ServingsError" in the constructor.');
  assert.equal(error.message, 'Servings must be a whole number above 0, but got -2.',
    'Pass the message on to Error with super(message), so error.message keeps it.');
});

test('problem 3: checkServings throws a ServingsError for servings it cannot use', () => {
  throwsServingsError(() => checkServings(-2), 'checkServings(-2)', -2);
  throwsServingsError(() => checkServings(0), 'checkServings(0)', 0);
  throwsServingsError(() => checkServings(2.5), 'checkServings(2.5)', 2.5);
  throwsServingsError(() => checkServings('ten'), 'checkServings("ten")', 'ten');
});

test('problem 3: checkServings passes good servings through, and refuses the rest', () => {
  for (const servings of [1, 4, 10, 12]) {
    assert.equal(checkServings(servings), servings, `checkServings(${servings}) should return ${servings}.`);
  }
  throwsServingsError(() => checkServings(-1), 'checkServings(-1)', -1);
});

test('problem 4: scaleIngredients scales every amount and rounds it', () => {
  assert.deepEqual(scaleIngredients(pancakes(), 4, 10), [
    { name: 'flour', amount: 5, unit: 'cups' },
    { name: 'milk', amount: 3.75, unit: 'cups' },
    { name: 'eggs', amount: 5, unit: 'whole' },
    { name: 'salt', amount: 1.25, unit: 'tsp' },
  ], 'From 4 servings to 10, every amount is 2.5 times bigger: 2 cups of flour becomes 5.');
  assert.deepEqual(scaleIngredients(pancakes(), 4, 3), [
    { name: 'flour', amount: 1.5, unit: 'cups' },
    { name: 'milk', amount: 1.13, unit: 'cups' },
    { name: 'eggs', amount: 1.5, unit: 'whole' },
    { name: 'salt', amount: 0.38, unit: 'tsp' },
  ], 'From 4 servings to 3, 1.5 cups of milk is 1.125 cups, which round() makes 1.13.');
});

test('problem 4: scaleIngredients leaves the original recipe as it is', () => {
  const original = pancakes();
  const scaled = scaleIngredients(original, 4, 10);
  assert.equal(scaled.length, original.length, 'scaleIngredients should return one ingredient for each one it was given.');
  assert.deepEqual(original, pancakes(),
    'The list passed in was changed. Make a new object for each ingredient instead of changing its amount.');
});

test('problem 4: scaleIngredients throws a ServingsError for bad servings', () => {
  throwsServingsError(() => scaleIngredients(pancakes(), 4, -2), 'scaleIngredients(pancakes, 4, -2)', -2);
  throwsServingsError(() => scaleIngredients(pancakes(), 4, 'ten'), 'scaleIngredients(pancakes, 4, "ten")', 'ten');
  throwsServingsError(() => scaleIngredients(pancakes(), 0, 10), 'scaleIngredients(pancakes, 0, 10)', 0);
});

test('problem 5: toMetric switches cups, tbsp and tsp to ml, and leaves the rest', () => {
  assert.deepEqual(toMetric(pancakes()), [
    { name: 'flour', amount: 480, unit: 'ml' },
    { name: 'milk', amount: 360, unit: 'ml' },
    { name: 'eggs', amount: 2, unit: 'whole' },
    { name: 'salt', amount: 2.5, unit: 'ml' },
  ], 'Each volume becomes ml (2 cups of flour is 480 ml); the eggs stay 2 whole.');
  assert.deepEqual(toMetric([{ name: 'vanilla', amount: 1.5, unit: 'tbsp' }]), [{ name: 'vanilla', amount: 22.5, unit: 'ml' }],
    '1.5 tbsp of vanilla is 22.5 ml.');
});

test('problem 5: toMetric leaves the original list as it is', () => {
  const original = pancakes();
  const metric = toMetric(original);
  assert.equal(metric.length, original.length, 'toMetric should return one ingredient for each one it was given.');
  assert.deepEqual(original, pancakes(),
    'The list passed in was changed. Make a new object for each ingredient instead of changing it.');
});
