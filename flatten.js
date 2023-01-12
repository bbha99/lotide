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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log("true")
  } else {
    console.log("false")
  }
};

const flatten = function(arr) {
  let flattenedArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      flattenedArray.push(arr[i]);
    } else {
      for (let obj of arr[i]) {
        flattenedArray.push(obj);
      }
    }
  }
  return flattenedArray;
}

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]