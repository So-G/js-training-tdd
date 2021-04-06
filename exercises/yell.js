"use strict";

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

// Your code:
function yell(input) {
  return input.toUpperCase();
}
//* Begin of tests
const assert = require("assert");

// Check that capitalizeFirst is a function
assert.strictEqual(typeof yell, "function");
assert.strictEqual(yell.length, 1);
assert.strictEqual(yell("hello"), "HELLO");
assert.strictEqual(yell("b"), "B");
// End of tests */
