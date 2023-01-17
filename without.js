const assertArraysEqual = require("./assertArraysEqual");

const without = function(sourceArr, itemsToRemoveArr) {
  for (let i = 0; i < sourceArr.length; i++) {
    for (let removeItems of itemsToRemoveArr) {
      if (removeItems === sourceArr[i]) {
        sourceArr.splice(i, 1);
      }
    }
  }

  return sourceArr;
}

module.exports = without;

// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);