/*
 * units.js: kitchen measurements.
 *
 * ML_PER_UNIT, round and isVolume are ready to use. Finish toMilliliters (problem 1).
 * Each one has export in front of it, so another file can import it.
 */

// How many milliliters are in one of each unit. US nutrition labels count a cup as 240 ml.
export const ML_PER_UNIT = { cups: 240, tbsp: 15, tsp: 5, ml: 1 };

// Ready to use. Rounds an amount to 2 decimal places:  round(1.125) -> 1.13,  round(5) -> 5
export function round(amount) {
  return Math.round(amount * 100) / 100;
}

// Ready to use. True for a unit that toMilliliters can convert:  isVolume("cups") -> true,  isVolume("whole") -> false
export function isVolume(unit) {
  return Object.hasOwn(ML_PER_UNIT, unit);
}

/*
 * 1. Return how many milliliters `amount` of `unit` is.
 *
 *    toMilliliters(1, "cups")    -> 240
 *    toMilliliters(2, "tbsp")    -> 30
 *    toMilliliters(1.5, "tsp")   -> 7.5
 *    toMilliliters(250, "ml")    -> 250
 *
 *    A unit that isn't in ML_PER_UNIT can't be converted. Throw an Error whose message names the unit
 *    and says which units work:
 *
 *    toMilliliters(1, "pinch")   -> throws Error: Unknown unit "pinch". Use cups, tbsp, tsp or ml.
 */
export function toMilliliters(amount, unit) {
  return 0;
}
