const countLetters = function(sentence) {
  result = {};
  const noSpaceStr = sentence.split(" ").join("");
  for (let letter of noSpaceStr) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

// console.log(countLetters("lighthouse in the house"))
module.exports = countLetters;