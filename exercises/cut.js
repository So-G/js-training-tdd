"use strict";

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:
function cutFirst(string) {
  return string.substring(2);
}
function cutLast(value) {
  return value.substring(0, value.length - 2);
}

function cutFirstLast(word) {
  return word.substring(2, word.length - 2);
}
//* Begin of tests
const assert = require("assert");
assert.strictEqual(typeof cutFirst, "function");
assert.strictEqual(cutFirst.length, 1);
assert.strictEqual(cutFirst("PIZZA"), "ZZA");
assert.strictEqual(cutFirst("champion"), "ampion");

assert.strictEqual(typeof cutLast, "function");
assert.strictEqual(cutLast.length, 1);
assert.strictEqual(cutLast("bouhou"), "bouh");
assert.strictEqual(cutLast("PANDA"), "PAN");

assert.strictEqual(typeof cutFirstLast, "function");
assert.strictEqual(cutFirstLast.length, 1);
assert.strictEqual(cutFirstLast("bouhou"), "uh");
assert.strictEqual(cutFirstLast("pamplemousse"), "mplemous");
// End of tests */
