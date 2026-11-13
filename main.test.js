// Tests for main.js. Run them with: node --test
// They run your program once and read the lines it prints, such as "6) name: ServingsError".
// You don't need to change this file.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const program = fileURLToPath(new URL('./main.js', import.meta.url));
const run = spawnSync(process.execPath, [program], { encoding: 'utf8' });
const printed = run.stdout.split(/\r?\n/).filter((line) => line.trim() !== '');

// "6) name: ServingsError" -> answers.get("6") is "ServingsError": everything after the first ": ".
const answers = new Map();
for (const line of printed) {
  const match = /^\s*(\d+)\)[^:]*:\s(.*)$/.exec(line);
  if (match) answers.set(match[1], match[2].trim());
}

function programRuns() {
  const firstLines = run.stderr.split(/\r?\n/).slice(0, 6).join('\n');
  assert.equal(run.status, 0,
    `main.js stopped with an error. An error nobody catches stops the program. Run node main.js and read the message:\n${firstLines}`);
}

function answer(problem, example) {
  programRuns();
  assert.ok(answers.has(String(problem)), `Problem ${problem} printed nothing. Print a line like: ${example}`);
  return answers.get(String(problem));
}

test('main.js runs without an error', () => programRuns());

test('problem 6: the catch block prints the name of the error', () => {
  const name = answer(6, '6) name: ServingsError');
  assert.equal(name, 'ServingsError', `Line 6 should show the error's name, ServingsError, but it shows ${name}.`);
});

test('problem 7: the catch block prints the message of the error', () => {
  const message = answer(7, '7) message: Servings must be a whole number above 0, but got ten.');
  assert.ok(message.includes('ten'), `Line 7 should show the error's message, which mentions "ten". It shows: ${message}`);
});

test('the program keeps going after the error', () => {
  answer(6, '6) name: ServingsError');
  assert.equal(printed.at(-1), 'Enjoy your brunch!',
    'The last line, "Enjoy your brunch!", should still print after the error is caught.');
});
