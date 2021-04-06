"use strict";

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:
function keepFirst(string) {
  return string.slice(0, 2);
}
function keepLast(word) {
  return word.slice(-2);
}
function keepFirstLast(value) {
  return value.slice(2, 4);
}

//* Begin of tests
const assert = require("assert");
assert.strictEqual(typeof keepFirst, "function");
assert.strictEqual(keepFirst.length, 1);
assert.strictEqual(keepFirst("pyjama"), "py");
assert.strictEqual(keepFirst("ABRACADABRA"), "AB");

assert.strictEqual(typeof keepLast, "function");
assert.strictEqual(keepLast.length, 1);
assert.strictEqual(keepLast("sandwich"), "ch");
assert.strictEqual(keepLast("HELLO"), "LO");

assert.strictEqual(typeof keepFirstLast, "function");
assert.strictEqual(keepFirstLast.length, 1);
assert.strictEqual(keepFirstLast("banane"), "na");
assert.strictEqual(keepFirstLast("HELLO"), "LL");
// End of tests */
