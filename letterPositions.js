// FUNCTION IMPLEMENTATION
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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log("true")
  } else {
    console.log("false")
  }
};

const letterPositions = function(sentence) {
  const result = {};
  // logic to update results here
  let arr = [];
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (result[sentence[i]]) {
        result[sentence[i]].push(i);
      } else {
        arr.push(i);
        result[sentence[i]] = arr;
        arr = [];
      }
    }
  }
  return result;
};

console.log(letterPositions("lighthouse in the house"))
assertArraysEqual(letterPositions("hello").e, [1]);