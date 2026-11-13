/*
 * main.js: prints the Saturday Pancakes card, scaled for a brunch for 10.
 * Run it with:  node main.js
 *
 * Everything above problem 6 is ready to use.
 */
import pancakes from "./recipe.js";
import { scaleIngredients, toMetric } from "./scale.js";

function printIngredients(title, ingredients) {
  console.log(title);
  for (const item of ingredients) {
    console.log(`  ${item.name}: ${item.amount} ${item.unit}`);
  }
}

const forTen = scaleIngredients(pancakes.ingredients, pancakes.serves, 10);
printIngredients(`${pancakes.name}, for 10 (the card serves ${pancakes.serves})`, forTen);
printIngredients("The same, in milliliters", toMetric(forTen));

/*
 * 6. Someone typed "ten" into the servings box. Call
 *        scaleIngredients(pancakes.ingredients, pancakes.serves, "ten")
 *    inside a try block. In its catch block, print the error's name and its message, like this:
 *
 *    6) name: ServingsError
 *    7) message: Servings must be a whole number above 0, but got ten.
 *
 *    The program keeps going after the error, so the last line below still prints.
 */


console.log("Enjoy your brunch!");
