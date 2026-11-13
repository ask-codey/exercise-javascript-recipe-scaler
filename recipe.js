// recipe.js: the Saturday Pancakes recipe card. Ready to use.
// It has one default export, so main.js imports it with:  import pancakes from "./recipe.js";
export default {
  name: "Saturday Pancakes",
  serves: 4,
  ingredients: [
    { name: "flour", amount: 2, unit: "cups" },
    { name: "milk", amount: 1.5, unit: "cups" },
    { name: "eggs", amount: 2, unit: "whole" },
    { name: "sugar", amount: 2, unit: "tbsp" },
    { name: "baking powder", amount: 2, unit: "tsp" },
    { name: "salt", amount: 0.5, unit: "tsp" },
  ],
};
