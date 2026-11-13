/*
 * scale.js: scale a recipe to a new number of servings, and switch it to milliliters.
 *
 * An ingredient is an object such as  { name: "flour", amount: 2, unit: "cups" }.
 * Start with problem 0, then finish problems 2 to 5.
 */

// 0. Import round, isVolume and toMilliliters from "./units.js" here.


/*
 * 2. ServingsError: the error this file throws when a number of servings can't be used.
 *    It extends Error. Give it the name "ServingsError", and keep the message it's given.
 *
 *    const error = new ServingsError("Servings must be a whole number above 0, but got -2.");
 *    error.name                  -> "ServingsError"
 *    error.message               -> "Servings must be a whole number above 0, but got -2."
 *    error instanceof Error      -> true
 */
export class ServingsError extends Error {
}

/*
 * 3. Check a number of servings. Return it when it's a whole number above 0.
 *    Otherwise throw a ServingsError whose message says what's wrong and shows the value that came in.
 *
 *    checkServings(10)      -> 10
 *    checkServings(-2)      -> throws ServingsError: Servings must be a whole number above 0, but got -2.
 *    checkServings(2.5)     -> throws ServingsError (half a serving isn't a serving)
 *    checkServings("ten")   -> throws ServingsError: Servings must be a whole number above 0, but got ten.
 */
export function checkServings(servings) {
  return servings;
}

/*
 * 4. Return a NEW list of ingredients for `toServings` people, from a recipe that serves `fromServings`.
 *    Check both numbers with checkServings first. Round each new amount with round().
 *    Leave the list you're given as it is.
 *
 *    scaleIngredients([{ name: "flour", amount: 2, unit: "cups" }], 4, 10)
 *      -> [{ name: "flour", amount: 5, unit: "cups" }]
 *    scaleIngredients([{ name: "flour", amount: 2, unit: "cups" }], 4, -2)
 *      -> throws ServingsError
 */
export function scaleIngredients(ingredients, fromServings, toServings) {
  return [];
}

/*
 * 5. Return a NEW list where every ingredient measured in cups, tbsp or tsp is in ml instead,
 *    rounded with round(). An ingredient that isn't a volume, such as eggs counted as "whole",
 *    stays as it is. Leave the list you're given as it is.
 *
 *    toMetric([{ name: "milk", amount: 1.5, unit: "cups" }, { name: "eggs", amount: 2, unit: "whole" }])
 *      -> [{ name: "milk", amount: 360, unit: "ml" }, { name: "eggs", amount: 2, unit: "whole" }]
 */
export function toMetric(ingredients) {
  return [];
}
