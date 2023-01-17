const assertArraysEqual = require("./assertArraysEqual");

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

module.exports = letterPositions;

// console.log(letterPositions("lighthouse in the house"))
// assertArraysEqual(letterPositions("hello").e, [1]);