// FUNCTION IMPLEMENTATION
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

module.exports = middle;