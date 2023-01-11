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
  console.log("this:", actual, expected)
  if (eqArrays(actual, expected) === true) {
    console.log("true")
  } else {
    console.log("false")
  }
};

const middle = function(array) {
  let middleArr = [];
  if (array.length <= 2) {
    return middleArr
  } else if (array.length % 2 === 1) {
    let middleOddNum = (array.length - 1) / 2;
    middleArr.push(array[middleOddNum])
    return middleArr;
  } else {
    let middleEvenNum = (array.length / 2) - 1;
    middleArr.push(array[middleEvenNum], array[middleEvenNum+1])
    return middleArr
  }
};

assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);