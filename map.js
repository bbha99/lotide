const assertArraysEqual = require("./assertArraysEqual");

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;

// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);
// console.log(results1);

// const test1 = map(["bear"], word => word[0]);
// assertArraysEqual(test1, ["b"]);

// const test2 = map([], word => word[0]);
// assertArraysEqual(test2, []);