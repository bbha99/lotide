const assertEqual = require("./assertEqual");

const findKeyByValue = function(obj, val) {
  let keyFound;
  for (let key in obj) {
    if (obj[key] === val) {
      keyFound = key;
      return keyFound
    }
  }
  return keyFound;
};

module.exports = findKeyByValue;
// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// Object.keys also would work with for...of