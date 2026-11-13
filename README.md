# Exercise: Recipe Scaler

Exercise code for the lesson **Exercise: Recipe Scaler** in the JavaScript in Depth course on [ask-codey.com](https://www.ask-codey.com).

The Saturday Pancakes card serves 4, and you're making brunch for 10. You'll finish a small recipe scaler that's split into modules: `units.js` converts cups, tablespoons and teaspoons to milliliters, and `scale.js` scales a recipe and refuses servings it can't use (such as `-2` or `"ten"`) with an error of its own, a `ServingsError`. Tests check every function and the errors they throw.

## What's here

- `units.js`: kitchen measurements. `ML_PER_UNIT`, `round` and `isVolume` are ready to use. `toMilliliters` (problem 1) is for you to finish.
- `scale.js`: the scaler. Problem 0 (the import line), the `ServingsError` class (problem 2), `checkServings` (problem 3), `scaleIngredients` (problem 4) and `toMetric` (problem 5) are for you to finish. The comment above each one says what it should do, with examples.
- `main.js`: prints the pancake card scaled for 10, in cups and in milliliters. Ready to use, except problem 6 at the bottom.
- `recipe.js`: the Saturday Pancakes recipe card, as a default export. Ready to use.
- `units.test.js`, `scale.test.js` and `main.test.js`: the tests. You don't need to change these.
- `package.json`: says `"type": "module"`, so Node runs every `.js` file here as a module. Ready to use.

## Run it

Open the folder in VS Code, open a terminal (**Terminal > New Terminal**), and run:

```bash
node main.js
```

## Check your work

```bash
node --test
```

At first most tests fail: that is expected. Each problem you finish turns its tests green. A failing test's message says which values it used and what it expected, for example *checkServings(-2) should throw a ServingsError, but it didn't throw anything.*

## What to do

1. **Problem 0:** at the top of `scale.js`, import `round`, `isVolume` and `toMilliliters` from `"./units.js"`.
2. **Problem 1:** finish `toMilliliters` in `units.js`, including the error for a unit it can't convert.
3. **Problems 2 to 5:** finish `scale.js` from the top down. Each one uses the ones before it.
4. **Problem 6:** in `main.js`, catch the error that `"ten"` servings causes and print its name and message as two lines, `6) name: ...` and `7) message: ...`.

## The rules

- Don't change the recipe card or the list a function is given. `scaleIngredients` and `toMetric` return new lists.
- Every error message says what was wrong and shows the value that came in, so the person who reads it knows what to fix.
- Keep the code in the file it belongs to: units in `units.js`, scaling in `scale.js`. A file uses another file's code by importing it.

## Tips

- Work out one example by hand first: from 4 servings to 10, by how much does every amount grow?
- `Number.isInteger(value)` is `true` only for a whole number: `10` yes, `2.5` no, `"10"` no.
- A test you don't understand? Set a breakpoint inside your function, start the debugger on `main.js`, and watch the values as you step through.
- When a test says the original list changed, look for a line that sets `item.amount = ...`. Build a new object for each ingredient instead.

## Hand it in

When it works, put your solution in a public repo of your own on GitHub, then paste that repo's address into **Submit your exercise** on the lesson page at [ask-codey.com](https://www.ask-codey.com). That's what completes the lesson. You don't need Git: create the repo on GitHub, choose **Add file**, then **Upload files**, and upload everything in this folder. The lesson page shows each step, and the lesson *Put Your Code on GitHub* walks through every screen.
