// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let fail = String.fromCodePoint(0x1F621);
  let pass = String.fromCodePoint(0x1F525);
  if (actual === expected) {
    console.log(`${pass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${fail} Assertion Failed: ${actual} !== ${expected}`);

  }
};

module.exports = assertEqual;