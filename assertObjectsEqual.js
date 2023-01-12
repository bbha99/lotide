// FUNCTION IMPLEMENTATION
const assertEquals = function(actual, expected) {
  // console.log(actual, expected)
  let fail = String.fromCodePoint(0x1F621);
  let pass = String.fromCodePoint(0x1F525);
  if (actual === expected) {
    console.log(`${pass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${fail} Assertion Failed: ${actual} !== ${expected}`);

  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // console.log("objects:", Object.keys(object1).length, Object.keys(object2).length)
  const objectOneKeys = Object.keys(object1);
  if (objectOneKeys.length !== Object.keys(object2).length) {
    return false;
  }
  
  for (let obj1 of objectOneKeys) {
    if (Array.isArray(object1[obj1]) == true && Array.isArray(object2[obj1]) == true) {
      if (eqArrays(object1[obj1], object2[obj1]) !== true) {
        return false;
      }
    } else {
      if (object1[obj1] !== object2[obj1]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let fail = String.fromCodePoint(0x1F621);
  let pass = String.fromCodePoint(0x1F525);
  if (eqObjects(actual, expected) === true) {
    console.log(`${pass} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`${fail} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);
assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject);
