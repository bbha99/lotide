const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let fail = String.fromCodePoint(0x1F621);
  let pass = String.fromCodePoint(0x1F525);
  if (eqObjects(actual, expected) !== true) {
    console.log(`${fail} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  console.log(`${pass} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
};

module.exports = assertObjectsEqual;

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

// assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);
// assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject);
