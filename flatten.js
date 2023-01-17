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

module.exports = flatten;

// console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]