const eqArrays = require("./eqArrays");
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) !== true) {
    console.log("false");
  }
  console.log("true");
};

module.exports = assertArraysEqual;