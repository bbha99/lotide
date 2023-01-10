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

const head = function(array) {
  const firstElement = array.shift();
  return firstElement;
};

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head([]), 5);
assertEqual(head([6]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");